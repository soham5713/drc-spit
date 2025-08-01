"use client"

import { useState } from "react"
import { Calendar, Trophy, Clock, Users, ArrowLeft, MapPin, Target } from "lucide-react"
import Spline from "@splinetool/react-spline"

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const eventBoxes = [
    {
      id: 1,
      title: "Past Events",
      icon: Trophy,
      count: "12",
      description: "Completed competitions and workshops",
      position: "top-left",
      color: "from-gray-700 to-gray-600",
      events: [
        {
          name: "Combat League 2024",
          date: "March 15-17, 2024",
          participants: "24 Teams",
          description: "Ultimate robotics combat competition with intense battles and advanced robot designs.",
          highlights: ["48 hours of action", "$10,000 prize pool", "Advanced combat robots", "Real-time battles"],
        },
        {
          name: "FSTR Workshop Series",
          date: "January 2024",
          participants: "150+ Students",
          description: "First Step Towards Robotics - comprehensive training for newcomers.",
          highlights: ["Hands-on learning", "Expert mentorship", "Project-based curriculum", "Industry tools"],
        },
      ],
    },
    {
      id: 2,
      title: "Upcoming Events",
      icon: Calendar,
      count: "3",
      description: "Scheduled competitions and activities",
      position: "top-right",
      color: "from-gray-700 to-gray-600",
      events: [
        {
          name: "Drone Racing Championship",
          date: "April 20-22, 2024",
          participants: "Expected 30+ Teams",
          description: "High-speed drone racing competition with obstacle courses and time trials.",
          highlights: ["FPV racing", "Obstacle courses", "Time trials", "Live streaming"],
        },
        {
          name: "AI Robotics Symposium",
          date: "May 15, 2024",
          participants: "200+ Attendees",
          description: "Technical symposium featuring latest advances in AI and robotics.",
          highlights: ["Expert speakers", "Technical presentations", "Networking", "Innovation showcase"],
        },
      ],
    },
    {
      id: 3,
      title: "Current Events",
      icon: Clock,
      count: "2",
      description: "Ongoing projects and activities",
      position: "bottom-left",
      color: "from-gray-700 to-gray-600",
      events: [
        {
          name: "FSTR Spring Cohort",
          date: "March - May 2024",
          participants: "45 Students",
          description: "Current batch of students learning robotics fundamentals through hands-on projects.",
          highlights: ["Weekly workshops", "Mentorship program", "Project development", "Skill building"],
        },
        {
          name: "Autonomous Navigation Project",
          date: "February - June 2024",
          participants: "8 Team Members",
          description: "Developing advanced navigation algorithms for autonomous drone systems.",
          highlights: ["AI algorithms", "Computer vision", "Real-time processing", "Field testing"],
        },
      ],
    },
    {
      id: 4,
      title: "Event Gallery",
      icon: Users,
      count: "100+",
      description: "Photos and memories from our events",
      position: "bottom-right",
      color: "from-gray-700 to-gray-600",
      events: [
        {
          name: "Photo Gallery",
          date: "All Events",
          participants: "All Members",
          description: "Collection of memorable moments from DRC events and competitions.",
          highlights: ["Competition photos", "Workshop sessions", "Team building", "Achievement moments"],
        },
      ],
    },
  ]

  const getPositionClasses = (position) => {
    switch (position) {
      case "top-left":
        return "absolute top-15 left-5 w-sm"
      case "top-right":
        return "absolute top-15 right-5 w-sm"
      case "bottom-left":
        return "absolute bottom-5 left-5 w-sm"
      case "bottom-right":
        return "absolute bottom-5 right-5 w-sm"
      default:
        return ""
    }
  }

  if (selectedEvent) {
    return (
      <div className="h-screen bg-black text-white overflow-hidden relative">
        {/* Spline Robot Arm Background */}
        <div className="absolute inset-0 z-0 hidden">
          <Spline scene="https://prod.spline.design/ohjiWyzIkwuCjw-5/scene.splinecode" />
        </div>

        {/* Event Details Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center p-8 mt-20">
          <div className="bg-black/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl max-w-4xl w-full max-h-[70vh] overflow-y-auto custom-scroll">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedEvent.title} Details</h2>
              <button
                onClick={() => setSelectedEvent(null)}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
            </div>

            <div className="grid gap-6">
              {selectedEvent.events.map((event, index) => (
                <div key={index} className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">{event.name}</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-5 h-5 mr-2 text-green-400" />
                      <span>{event.participants}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                      <span>DRC Campus</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{event.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Highlights</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen bg-black text-white overflow-hidden relative">
      {/* Spline Robot Arm Component - Full Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/ohjiWyzIkwuCjw-5/scene.splinecode" />
      </div>

      {/* Event Boxes positioned around the robot arm */}
      {eventBoxes.map((box) => (
        <div key={box.id} className={`${getPositionClasses(box.position)} z-10`}>
          <div
            className="h-50 bg-black backdrop-blur-xs rounded-2xl p-6 mt-10 border border-gray-700/50 shadow-2xl hover:border-gray-600/50 transition-all duration-300 group cursor-pointer"
            onClick={() => setSelectedEvent(box)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${box.color} rounded-xl flex items-center justify-center mr-4 border border-gray-600 group-hover:scale-110 transition-transform`}
                >
                  <box.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gray-200 transition-colors">
                    {box.title}
                  </h3>
                  <div className="text-2xl font-bold text-gray-300">{box.count}</div>
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors mb-4">
              {box.description}
            </p>
            <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
              <span className="text-sm">Click to explore</span>
              <Target className="w-4 h-4 ml-2 group-hover:rotate-90 transition-transform" />
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-black/60 backdrop-blur-lg rounded-full px-6 py-2 border border-gray-700/50">
          <p className="text-gray-400 text-sm">Click on any box to explore events</p>
        </div>
      </div>
    </div>
  )
}

export default EventsPage
