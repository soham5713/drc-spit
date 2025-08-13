"use client"

import { Target, Eye, Award, Cpu, ChevronRight, Calendar, MapPin, Mail, Phone, Instagram, Linkedin, Github, Users, ExternalLink } from 'lucide-react'
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
        image: "https://imgs.search.brave.com/AFgKBWJALvrSAae6W1wLSKRtVsiJdvz__-qva-ymL3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc5LzE4Lzkz/LzM2MF9GXzI3OTE4/OTMxNF8xT1EyNnV1/R2R1RXdSc0k5dVUy/NGNDVW1lUjFKVnpl/TS5qcGc",
        description: "High-speed drone racing competition"
      },
      {
        id: 2,
        title: "AI Robotics Symposium",
        date: "May 15, 2024",
        image: "https://imgs.search.brave.com/AFgKBWJALvrSAae6W1wLSKRtVsiJdvz__-qva-ymL3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc5LzE4Lzkz/LzM2MF9GXzI3OTE4/OTMxNF8xT1EyNnV1/R2R1RXdSc0k5dVUy/NGNDVW1lUjFKVnpl/TS5qcGc",
        description: "Technical symposium on AI advances"
      },
      {
        id: 3,
        title: "Combat League 2024",
        date: "March 15-17, 2024",
        image: "https://imgs.search.brave.com/AFgKBWJALvrSAae6W1wLSKRtVsiJdvz__-qva-ymL3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc5LzE4Lzkz/LzM2MF9GXzI3OTE4/OTMxNF8xT1EyNnV1/R2R1RXdSc0k5dVUy/NGNDVW1lUjFKVnpl/TS5qcGc",
        description: "Ultimate robotics combat competition"
      },
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
    image: "https://imgs.search.brave.com/AFgKBWJALvrSAae6W1wLSKRtVsiJdvz__-qva-ymL3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc5LzE4Lzkz/LzM2MF9GXzI3OTE4/OTMxNF8xT1EyNnV1/R2R1RXdSc0k5dVUy/NGNDVW1lUjFKVnpl/TS5qcGc",
    email: "rajesh.kumar@spit.ac.in"
  }

  const teamMembers = [
    {
      name: "Yadnyesh Sable",
      role: "Chairperson",
      image: "https://imgs.search.brave.com/AFgKBWJALvrSAae6W1wLSKRtVsiJdvz__-qva-ymL3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc5LzE4Lzkz/LzM2MF9GXzI3OTE4/OTMxNF8xT1EyNnV1/R2R1RXdSc0k5dVUy/NGNDVW1lUjFKVnpl/TS5qcGc",
      email: "yadnyesh@spit.ac.in",
      github: "https://github.com/yadnyeshsable",
      linkedin: "https://linkedin.com/in/yadnyeshsable",
      instagram: "https://instagram.com/yadnyesh_sable"
    },
    {
      name: "Harsh Joshi",
      role: "Vice-Chairperson",
      image: "https://imgs.search.brave.com/AFgKBWJALvrSAae6W1wLSKRtVsiJdvz__-qva-ymL3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc5LzE4Lzkz/LzM2MF9GXzI3OTE4/OTMxNF8xT1EyNnV1/R2R1RXdSc0k5dVUy/NGNDVW1lUjFKVnpl/TS5qcGc",
      email: "harsh@spit.ac.in",
      github: "https://github.com/harshjoshi",
      linkedin: "https://linkedin.com/in/harshjoshi",
      instagram: "https://instagram.com/harsh_joshi"
    },
    {
      name: "Soham Bhosale",
      role: "Technical Secretary",
      image: "https://imgs.search.brave.com/AFgKBWJALvrSAae6W1wLSKRtVsiJdvz__-qva-ymL3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc5LzE4Lzkz/LzM2MF9GXzI3OTE4/OTMxNF8xT1EyNnV1/R2R1RXdSc0k5dVUy/NGNDVW1lUjFKVnpl/TS5qcGc",
      email: "soham@spit.ac.in",
      github: "https://github.com/sohambhosale",
      linkedin: "https://linkedin.com/in/sohambhosale",
      instagram: "https://instagram.com/soham_bhosale"
    },
    {
      name: "Parth Kadam",
      role: "Technical Secretary",
      image: "https://imgs.search.brave.com/AFgKBWJALvrSAae6W1wLSKRtVsiJdvz__-qva-ymL3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc5LzE4Lzkz/LzM2MF9GXzI3OTE4/OTMxNF8xT1EyNnV1/R2R1RXdSc0k5dVUy/NGNDVW1lUjFKVnpl/TS5qcGc",
      email: "parth@spit.ac.in",
      github: "https://github.com/parthkadam",
      linkedin: "https://linkedin.com/in/parthkadam",
      instagram: "https://instagram.com/parth_kadam"
    },
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
    setCurrentEventIndex((prev) => {
      const maxIndex = Math.max(0, events.length - 5)
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const prevEvent = () => {
    setCurrentEventIndex((prev) => {
      const maxIndex = Math.max(0, events.length - 5)
      return prev <= 0 ? maxIndex : prev - 1
    })
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
            <div className="h-50 bg-black/30 backdrop-blur-md rounded-2xl p-6 mt-10 border border-gray-700/50 shadow-2xl hover:border-gray-600/50 hover:bg-black/40 transition-all duration-300 group cursor-pointer">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700/80 to-gray-600/80 rounded-xl flex items-center justify-center mr-4 border border-gray-600/50 group-hover:from-gray-600/80 group-hover:to-gray-500/80 transition-all backdrop-blur-sm">
                  <box.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">{box.title}</h3>
              </div>
              <p className="text-gray-200 leading-relaxed text-lg group-hover:text-gray-100 transition-colors ">
                {box.content}
              </p>
            </div>
          </div>
        ))}

        {/* Central Welcome Message */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-center">
          <div className="bg-black/30 backdrop-blur-md shadow-2xl rounded-2xl px-8 py-4 border border-gray-700/50 hover:border-gray-600/50 hover:bg-black/40 transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-center space-x-3 mb-1">
              <img 
                src="/DRC logo without bg.png" 
                alt="DRC Logo" 
                className="w-8 h-8 object-contain"
              />
              <p className="text-gray-100 text-lg">
                <span className="text-white font-semibold">DRC</span> • Drone & Robotics Club
              </p>
            </div>
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
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentEventIndex * 20}%)` }}
              >
                {events.map((event) => (
                   <div key={event.id} className="w-1/3 flex-shrink-0 px-3">
                    <Card className="bg-gray-900/30 border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-900/40 backdrop-blur-md transition-all duration-300 group py-0">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-gray-800/50 rounded-t-lg overflow-hidden">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2 flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            {event.date}
                          </p>
                          <p className="text-gray-300 text-sm">{event.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevEvent}
              disabled={currentEventIndex === 0}
              className="absolute -left-15 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/40 backdrop-blur-lg rounded-full flex items-center justify-center border border-gray-600/50 hover:border-gray-500/50 hover:bg-black/60 transition-all disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <ChevronRight className="w-6 h-6 text-white rotate-180" />
            </button>

            <button
              onClick={nextEvent}
              disabled={currentEventIndex >= Math.max(0, events.length - 5)}
              className="absolute -right-15 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/40 backdrop-blur-lg rounded-full flex items-center justify-center border border-gray-600/50 hover:border-gray-500/50 hover:bg-black/60 transition-all disabled:opacity-50 disabled:cursor-not-allowed z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.max(1, events.length - 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEventIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentEventIndex
                    ? 'bg-white scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                />
              ))}
            </div>

            {/* View All Events Button */}
            <div className="text-center mt-8">
              <Link to="/events">
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 hover:text-white transition-all"
                >
                  View All Events
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
            <div className="inline-block bg-gray-900/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:bg-gray-900/40 hover:border-gray-600/50 transition-all duration-300">
              <img
                src={facultyMentor.image || "/placeholder.svg"}
                alt={facultyMentor.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-600/50"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{facultyMentor.name}</h3>
              <p className="text-lg text-gray-300 mb-1">{facultyMentor.role}</p>
              <p className="text-gray-400 mb-3">{facultyMentor.department}</p>
              <div className="flex justify-center">
                <a href={`mailto:${facultyMentor.email}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 hover:text-white transition-all"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-900/40 backdrop-blur-md transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gray-600/50"
                  />
                  <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
                  <p className="text-gray-300 text-sm mb-3">{member.role}</p>
                  <div className="flex justify-center space-x-2">
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50">
                      <Github className="w-4 h-4 text-gray-300" />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50">
                      <Linkedin className="w-4 h-4 text-gray-300" />
                    </a>
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50">
                      <Instagram className="w-4 h-4 text-gray-300" />
                    </a>
                    <a href={`mailto:${member.email}`} className="w-8 h-8 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50">
                      <Mail className="w-4 h-4 text-gray-300" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center">
            <Link to="/teams">
              <Button
                variant="outline"
                size="sm"
                className="mt-3 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 hover:text-white transition-all"
              >
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
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to join our mission? Get in touch with us to learn more about DRC and how you can be part of our innovative community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Location */}
              <div className="bg-gray-900/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-900/40 transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700/80 to-gray-600/80 rounded-xl flex items-center justify-center mr-4 border border-gray-600/50 group-hover:from-gray-600/80 group-hover:to-gray-500/80 transition-all backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                      Location & Address
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-3">
                      Sardar Patel Institute of Technology<br />
                      Bhavan's Campus, Munshi Nagar<br />
                      Andheri (West), Mumbai - 400058
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Sardar+Patel+Institute+of+Technology+Mumbai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 hover:text-white transition-all"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-900/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-900/40 transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700/80 to-gray-600/80 rounded-xl flex items-center justify-center mr-4 border border-gray-600/50 group-hover:from-gray-600/80 group-hover:to-gray-500/80 transition-all backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors">
                      Email
                    </h3>
                    <p className="text-gray-300 mb-3">drc@spit.ac.in</p>
                    <a href="mailto:drc@spit.ac.in">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 hover:text-white transition-all"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-gray-900/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-900/40 transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700/80 to-gray-600/80 rounded-xl flex items-center justify-center mr-4 border border-gray-600/50 group-hover:from-gray-600/80 group-hover:to-gray-500/80 transition-all backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                      Phone
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Yadnyesh Sable:</span>
                        <a href="tel:+919876543210" className="text-gray-400 hover:text-gray-300 transition-colors">
                          +91 98765 43210
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Harsh Joshi:</span>
                        <a href="tel:+918765432109" className="text-gray-400 hover:text-gray-300 transition-colors">
                          +91 87654 32109
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Parth Kadam:</span>
                        <a href="tel:+917654321098" className="text-gray-400 hover:text-gray-300 transition-colors">
                          +91 76543 21098
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Soham Bhosale:</span>
                        <a href="tel:+918108381421" className="text-gray-400 hover:text-gray-300 transition-colors">
                          +91 81083 81421
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-900/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-900/40 transition-all duration-300 group">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-700/80 to-gray-600/80 rounded-xl flex items-center justify-center mr-4 border border-gray-600/50 group-hover:from-gray-600/80 group-hover:to-gray-500/80 transition-all backdrop-blur-sm">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                      Follow Us
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Instagram className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-gray-300">Instagram</span>
                        </div>
                        <a href="https://instagram.com/drc_spit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors">
                          @drc_spit
                        </a>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Linkedin className="w-4 h-4 mr-2 text-gray-400" />
                          <span className="text-gray-300">LinkedIn</span>
                        </div>
                        <a href="https://linkedin.com/company/drc-spit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition-colors">
                          DRC SPIT
                        </a>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <a href="https://instagram.com/drc_spit" target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 hover:text-white transition-all"
                        >
                          <Instagram className="w-4 h-4 mr-1" />
                          Follow
                        </Button>
                      </a>
                      <a href="https://linkedin.com/company/drc-spit" target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 hover:text-white transition-all"
                        >
                          <Linkedin className="w-4 h-4 mr-1" />
                          Connect
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="h-fit bg-gray-900/30 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 hover:bg-gray-900/40 transition-all duration-300">
              <div className="p-6 border-b border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-2">Find Us</h3>
                <p className="text-gray-400">Visit our campus and explore our facilities</p>
              </div>
              <div className="aspect-video bg-gray-800/50 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15079.243797464456!2d72.83973144999999!3d19.1159478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1754460425048!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>
              <div className="p-4 bg-gray-800/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">SPIT Campus</span>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Sardar+Patel+Institute+of+Technology+Mumbai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 hover:text-white transition-all"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
