"use client"

import { Target, Eye, Award, Cpu, ChevronRight, Calendar, MapPin, Mail, Phone, Instagram, Linkedin, Github, Users } from 'lucide-react'
import Spline from "@splinetool/react-spline"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const HomePage = () => {
  const [events, setEvents] = useState([])
  const [currentEventIndex, setCurrentEventIndex] = useState(0)

  // Mock events data - replace with actual fetch from /events
  useEffect(() => {
    // Simulated fetch from /events
    const mockEvents = [
      {
        id: 1,
        title: "Drone Racing Championship",
        date: "April 20-22, 2024",
        image: "/placeholder.svg?height=300&width=400&text=Drone+Racing",
        description: "High-speed drone racing competition"
      },
      {
        id: 2,
        title: "AI Robotics Symposium",
        date: "May 15, 2024",
        image: "/placeholder.svg?height=300&width=400&text=AI+Symposium",
        description: "Technical symposium on AI advances"
      },
      {
        id: 3,
        title: "Combat League 2024",
        date: "March 15-17, 2024",
        image: "/placeholder.svg?height=300&width=400&text=Combat+League",
        description: "Ultimate robotics combat competition"
      },
      {
        id: 4,
        title: "FSTR Workshop",
        date: "January 2024",
        image: "/placeholder.svg?height=300&width=400&text=FSTR+Workshop",
        description: "First Step Towards Robotics training"
      },
      {
        id: 5,
        title: "Innovation Showcase",
        date: "June 10, 2024",
        image: "/placeholder.svg?height=300&width=400&text=Innovation+Showcase",
        description: "Student project presentations"
      }
    ]
    setEvents(mockEvents)
  }, [])

  const contentBoxes = [
    {
      id: 1,
      title: "Our Vision",
      icon: Eye,
      content:
        "To lead in autonomous robotics and drone technology by creating innovative solutions that advance precision engineering.",
      position: "top-left",
    },
    {
      id: 2,
      title: "Our Mission",
      icon: Target,
      content:
        "Foster innovation through hands-on learning, collaborative projects, and cutting-edge research that prepares the next generation of engineers.",
      position: "top-right",
    },
    {
      id: 3,
      title: "Innovation Hub",
      icon: Cpu,
      content:
        "State-of-the-art facilities equipped with the latest tools for prototyping, testing, and developing next-generation robotic systems.",
      position: "bottom-left",
    },
    {
      id: 4,
      title: "Excellence",
      icon: Award,
      content:
        "Committed to achieving the highest standards in design, engineering, and performance across all our projects and competitions.",
      position: "bottom-right",
    },
  ]

  const facultyMentor = {
    name: "Dr. Rajesh Kumar",
    role: "Faculty Mentor",
    department: "Electronics & Telecommunications",
    image: "/placeholder.svg?height=120&width=120&text=Faculty",
    email: "rajesh.kumar@spit.ac.in"
  }

  const teamMembers = [
    {
      name: "Arjun Patel",
      role: "Club President",
      image: "/placeholder.svg?height=80&width=80&text=AP",
      year: "Final Year"
    },
    {
      name: "Priya Sharma",
      role: "Technical Head",
      image: "/placeholder.svg?height=80&width=80&text=PS",
      year: "Third Year"
    },
    {
      name: "Vikram Singh",
      role: "Project Manager",
      image: "/placeholder.svg?height=80&width=80&text=VS",
      year: "Third Year"
    },
    {
      name: "Ananya Gupta",
      role: "Design Lead",
      image: "/placeholder.svg?height=80&width=80&text=AG",
      year: "Second Year"
    }
  ]

  const getPositionClasses = (position) => {
    switch (position) {
      case "top-left":
        return "absolute top-15 left-5 max-w-md"
      case "top-right":
        return "absolute top-15 right-5 max-w-md"
      case "bottom-left":
        return "absolute bottom-5 left-5 max-w-md"
      case "bottom-right":
        return "absolute bottom-5 right-5 max-w-md"
      default:
        return ""
    }
  }

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % Math.max(1, events.length - 4))
  }

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + Math.max(1, events.length - 4)) % Math.max(1, events.length - 4))
  }

  return (
    <div>
      {/* Hero Section with Spline */}
      <div className="h-screen bg-black text-white overflow-hidden relative">
        {/* Spline Drone Component - Full Background */}
        <div className="absolute inset-0 z-0">
          <Spline scene="https://prod.spline.design/rP-qbmWVVE0G6ecS/scene.splinecode" />
        </div>

        {/* Content Boxes positioned around the drone */}
        {contentBoxes.map((box) => (
          <div key={box.id} className={`${getPositionClasses(box.position)} z-10`}>
            <div className="h-50 bg-black backdrop-blur-xs rounded-2xl p-6 mt-10 border border-gray-700/50 shadow-2xl hover:border-gray-600/50 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center mr-4 border border-gray-600 group-hover:from-gray-600 group-hover:to-gray-500 transition-all">
                  <box.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">{box.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors ">
                {box.content}
              </p>
            </div>
          </div>
        ))}

        {/* Central Welcome Message */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
          <div className="bg-black/40 backdrop-blur-xs shadow-2xl rounded-2xl px-8 py-4 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group cursor-pointer">
            <p className="text-gray-100 text-lg">
              <span className="text-white font-semibold">DRC</span> • Drone & Robotics Club
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About Us</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                The Drones & Robotics Club of SPIT (DRC) is a student-led organization at the Sardar Patel Institute of Technology (SPIT), focused on fostering innovation in the fields of robotics and drone technology. Through this club, we aim to bridge the gap between theoretical knowledge and practical application, empowering students to actively participate in the ever-evolving world of Robotics and Unmanned Aerial Vehicle (UAV) systems.
              </p>
              <p>
                We want to establish SPIT as a center of excellence in robotics and drone technologies, empowering students to become innovators and inventors in these dynamic and rapidly evolving fields. We envision an ecosystem that promotes cutting-edge research, technical skills, and industry-ready knowledge in robotics and UAV technology. It is our mission to foster a strong culture of innovation and technical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Recent and Upcoming Events</h2>
            <p className="text-gray-400">(slide show)</p>
          </div>
          
          <div className="relative">
            <div className="flex gap-6 overflow-hidden">
              {events.slice(currentEventIndex, currentEventIndex + 5).map((event, index) => (
                <Card key={event.id} className="flex-shrink-0 w-64 bg-gray-900/50 border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gray-800 rounded-t-lg overflow-hidden">
                      <img 
                        src={event.image || "/placeholder.svg"} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-400 text-sm mb-2 flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </p>
                      <p className="text-gray-300 text-sm">{event.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.max(1, events.length - 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEventIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentEventIndex ? 'bg-white' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            {/* View All Events Button */}
            <div className="text-center mt-8">
              <Link href="/events">
                <Button variant="outline" className="bg-transparent border-gray-600 text-white hover:bg-gray-800">
                  VIEW ALL EVENTS
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Team</h2>
          </div>
          
          {/* Faculty Mentor */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
              <img 
                src={facultyMentor.image || "/placeholder.svg"} 
                alt={facultyMentor.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-600"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{facultyMentor.name}</h3>
              <p className="text-lg text-gray-300 mb-1">{facultyMentor.role}</p>
              <p className="text-gray-400 mb-3">{facultyMentor.department}</p>
              <div className="flex justify-center">
                <Button variant="outline" size="sm" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
          
          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image || "/placeholder.svg"} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gray-600"
                  />
                  <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
                  <p className="text-gray-300 text-sm mb-1">{member.role}</p>
                  <p className="text-gray-400 text-xs">{member.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* View More Button */}
          <div className="text-center">
            <Link href="/teams">
              <Button className="bg-gray-800 hover:bg-gray-700 text-white">
                <Users className="w-4 h-4 mr-2" />
                View More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Contact Us</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  LOCATION : ADDRESS
                </h3>
                <p className="text-gray-300 ml-7">
                  Sardar Patel Institute of Technology<br />
                  Bhavan's Campus, Munshi Nagar<br />
                  Andheri (West), Mumbai - 400058
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  EMAIL
                </h3>
                <p className="text-gray-300 ml-7">drc@spit.ac.in</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  PHONE
                </h3>
                <div className="text-gray-300 ml-7 space-y-1">
                  <p>YADNYESH: +91 98765 43210</p>
                  <p>HARSH: +91 87654 32109</p>
                  <p>PARTH: +91 76543 21098</p>
                  <p>SOHAM: +91 81083 81421</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">SOCIALS</h3>
                <div className="ml-7 space-y-2">
                  <p className="text-gray-300 flex items-center">
                    <Instagram className="w-4 h-4 mr-2" />
                    INSTAGRAM: @drc_spit
                  </p>
                  <p className="text-gray-300 flex items-center">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LINKEDIN: DRC SPIT
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-gray-900/50 rounded-2xl border border-gray-700/50 p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center text-gray-400">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-2xl font-semibold">MAP</p>
                <p className="text-sm mt-2">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15079.243797464456!2d72.83973144999999!3d19.1159478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1754460425048!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
