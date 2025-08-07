"use client"

import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserPlus, Mail, Phone, GraduationCap, Building, Hash, Briefcase, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import Spline from "@splinetool/react-spline"

const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    uid: "",
    phoneNumber: "",
    branch: "",
    college: "",
    email: "",
    domainsInterested: [],
    pastExperience: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  const [errors, setErrors] = useState({})

  const branches = [
    "Computer Engineering",
    "Computer Science & Engineering",
    "Electronics & Telecommunications Engineering",
  ]

  const domains = [
    { id: "embedded", label: "Embedded Systems", category: "tech" },
    { id: "pcb", label: "PCB Design", category: "tech" },
    { id: "web", label: "Web Development", category: "tech" },
    { id: "iot", label: "IoT Systems", category: "tech" },
    { id: "ai", label: "AI/ML", category: "tech" },
    { id: "robotics", label: "Robotics", category: "tech" },
    { id: "drone", label: "Drone Technology", category: "tech" },
    { id: "programming", label: "Programming", category: "tech" },
    { id: "design", label: "UI/UX Design", category: "nontech" },
    { id: "content", label: "Content Creation", category: "nontech" },
    { id: "social", label: "Social Media", category: "nontech" },
    { id: "marketing", label: "Marketing", category: "nontech" },
    { id: "events", label: "Event Management", category: "nontech" },
    { id: "photography", label: "Photography/Videography", category: "nontech" }
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.uid.trim()) newErrors.uid = "UID is required"
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number"
    }
    if (!formData.branch) newErrors.branch = "Branch is required"
    if (!formData.college.trim()) newErrors.college = "College is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (formData.domainsInterested.length === 0) {
      newErrors.domainsInterested = "Please select at least one domain"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }))
    }
  }

  const handleDomainChange = (domainId, checked) => {
    setFormData(prev => ({
      ...prev,
      domainsInterested: checked
        ? [...prev.domainsInterested, domainId]
        : prev.domainsInterested.filter(id => id !== domainId)
    }))
    // Clear error when user selects a domain
    if (errors.domainsInterested) {
      setErrors(prev => ({
        ...prev,
        domainsInterested: ""
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Add document to Firestore
      await addDoc(collection(db, "joinRequests"), {
        ...formData,
        domainsInterested: formData.domainsInterested.map(id => 
          domains.find(domain => domain.id === id)?.label
        ),
        submittedAt: new Date(),
        status: "pending"
      })

      setSubmitStatus('success')
      // Reset form
      setFormData({
        name: "",
        uid: "",
        phoneNumber: "",
        branch: "",
        college: "",
        email: "",
        domainsInterested: [],
        pastExperience: ""
      })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const techDomains = domains.filter(domain => domain.category === "tech")
  const nonTechDomains = domains.filter(domain => domain.category === "nontech")

  return (
    <div className="min-h-screen bg-black text-white pt-20">

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Join DRC</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to be part of something extraordinary? Join the Drone & Robotics Club and turn your passion into innovation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/30 backdrop-blur-lg border-gray-700/50 shadow-2xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700/80 to-gray-600/80 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-600/50">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Membership Application</CardTitle>
              <p className="text-gray-400">Fill out the form below to apply for DRC membership</p>
            </CardHeader>

            <CardContent className="space-y-6">
              {submitStatus === 'success' && (
                <div className="bg-green-900/30 border border-green-600/50 rounded-lg p-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <div>
                    <p className="text-green-400 font-medium">Application Submitted Successfully!</p>
                    <p className="text-green-300 text-sm">We'll review your application and get back to you soon.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-900/30 border border-red-600/50 rounded-lg p-4 flex items-center">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className="text-red-400 font-medium">Submission Failed</p>
                    <p className="text-red-300 text-sm">Please try again or contact us if the problem persists.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white flex items-center">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-gray-500"
                    />
                    {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="uid" className="text-white flex items-center">
                      <Hash className="w-4 h-4 mr-2" />
                      UID *
                    </Label>
                    <Input
                      id="uid"
                      value={formData.uid}
                      onChange={(e) => handleInputChange('uid', e.target.value)}
                      placeholder="Enter your UID"
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-gray-500"
                    />
                    {errors.uid && <p className="text-red-400 text-sm">{errors.uid}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      placeholder="Enter your phone number"
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-gray-500"
                    />
                    {errors.phoneNumber && <p className="text-red-400 text-sm">{errors.phoneNumber}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email address"
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-gray-500"
                    />
                    {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                  </div>
                </div>

                {/* Academic Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="branch" className="text-white flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Branch *
                    </Label>
                    <Select value={formData.branch} onValueChange={(value) => handleInputChange('branch', value)}>
                      <SelectTrigger className="bg-gray-800/50 border-gray-600/50 text-white">
                        <SelectValue placeholder="Select your branch" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600">
                        {branches.map((branch) => (
                          <SelectItem key={branch} value={branch} className="text-white hover:bg-gray-700">
                            {branch}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.branch && <p className="text-red-400 text-sm">{errors.branch}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="college" className="text-white flex items-center">
                      <Building className="w-4 h-4 mr-2" />
                      College *
                    </Label>
                    <Input
                      id="college"
                      value={formData.college}
                      onChange={(e) => handleInputChange('college', e.target.value)}
                      placeholder="Enter your college name"
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-gray-500"
                    />
                    {errors.college && <p className="text-red-400 text-sm">{errors.college}</p>}
                  </div>
                </div>

                {/* Domains of Interest */}
                <div className="space-y-4">
                  <Label className="text-white flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Domains of Interest * (Select all that apply)
                  </Label>
                  {errors.domainsInterested && <p className="text-red-400 text-sm">{errors.domainsInterested}</p>}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Technical Domains */}
                    <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="text-lg font-semibold text-white mb-3">Technical Domains</h4>
                      <div className="space-y-3">
                        {techDomains.map((domain) => (
                          <div key={domain.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={domain.id}
                              checked={formData.domainsInterested.includes(domain.id)}
                              onCheckedChange={(checked) => handleDomainChange(domain.id, checked)}
                              className="border-gray-600 data-[state=checked]:bg-gray-800 data-[state=checked]:border-2-white"
                            />
                            <Label htmlFor={domain.id} className="text-gray-300 cursor-pointer">
                              {domain.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Non-Technical Domains */}
                    <div className="bg-gray-900/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="text-lg font-semibold text-white mb-3">Non-Technical Domains</h4>
                      <div className="space-y-3">
                        {nonTechDomains.map((domain) => (
                          <div key={domain.id} className="flex items-center space-x-2">
                            <Checkbox
                              id={domain.id}
                              checked={formData.domainsInterested.includes(domain.id)}
                              onCheckedChange={(checked) => handleDomainChange(domain.id, checked)}
                              className="border-gray-600 data-[state=checked]:bg-gray-800 data-[state=checked]:border-2-white"
                            />
                            <Label htmlFor={domain.id} className="text-gray-300 cursor-pointer">
                              {domain.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Past Experience */}
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-white">
                    Past Experience (Optional)
                  </Label>
                  <Textarea
                    id="experience"
                    value={formData.pastExperience}
                    onChange={(e) => handleInputChange('pastExperience', e.target.value)}
                    placeholder="Tell us about your relevant experience, projects, or skills..."
                    rows={4}
                    className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-gray-500"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3 text-lg transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <UserPlus className="w-5 h-5 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="mt-12 text-center">
            <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">What Happens Next?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Application Review</h4>
                  <p className="text-gray-400 text-sm">Our team will review your application within 3-5 business days.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Interview Process</h4>
                  <p className="text-gray-400 text-sm">Selected candidates will be invited for a brief interview or assessment.</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Welcome to DRC</h4>
                  <p className="text-gray-400 text-sm">Join our community and start working on exciting projects!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUsPage
