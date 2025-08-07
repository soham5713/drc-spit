"use client"

import { useState } from "react"
import { Calendar, Trophy, Clock, Users, ArrowLeft, MapPin, Target, Award, Lightbulb, Rocket } from 'lucide-react'
import Spline from "@splinetool/react-spline"

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [selectedEventDetail, setSelectedEventDetail] = useState(null)

  const eventBoxes = [
    {
      id: 1,
      title: "Our Participation",
      icon: Trophy,
      count: "15+",
      description: "Competitions and external events we've participated in",
      position: "top-left",
      color: "from-blue-700 to-blue-600",
      events: [
        {
          name: "Zonals @ ESCALADE 14.0",
          date: "25 july 2025",
          location: "IIT Guwahati",
          // result: "2nd Place",
          description: "DRC participated in the Zonal round of Escalade 14.0, organised by Techniche, IIT Guwahati in collaboration with EESA, TEC. Securing a position and an opportunity to enter the finals, our bot completed the necessary tasks in the given time frame.",
          highlights: [
            "Qualified for the Escalade 14.0 Finals",
            "Successfully completed all tasks within time",
            "Showcased efficient bot performance",
            "Demonstrated strong team coordination",
            "Recognized by Techniche, IIT Guwahati & EESA, TEC"
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Events",
      icon: Calendar,
      count: "25+",
      description: "All our organized events - past, current, and upcoming",
      position: "top-right",
      color: "from-green-700 to-green-600",
      events: [
        {
          id: "event1",
          name: "Bot Combat League",
          date: "23 March 2025",
          status: "Completed",
          participants: "4 Teams",
          description: "Bot Combat League, organized under Oculus in collaboration with IEEE-AESS Student Chapter, SPIT, brought together robotics enthusiasts from across the state. The event featured two exciting sub-events - Robo Sumo and Robo Soccer - where participants showcased their bots in high-intensity competitions.",
          highlights: [
            "Organized under Oculus, SPIT’s cultural fest",
            "In collaboration with IEEE-AESS Student Chapter, SPIT",
            "Featured two sub-events: Robo Sumo and Robo Soccer",
            "Statewide participation from undergraduate robotics teams",
            "Platform for showcasing competitive bot design and control",
            "Fostered innovation and peer learning in robotics"
          ],
          type: "Competition",
          detailedInfo: {
            venue: "Quadrangle, SPIT Campus",
            registrationFee: "₹300 per team",
            prizes: ["1st Place: ₹10,000", "2nd Place: ₹5,000", "3rd Place: ₹3,000"],
            // rules: ["Maximum robot weight: 12kg", "No projectile weapons", "3-minute rounds", "Double elimination format"],
            // sponsors: ["TechCorp", "RoboIndia", "Innovation Labs"],
            // media: ["Live streaming on YouTube", "Professional photography", "Drone footage coverage"]
          }
        },
      ],
    },
    {
      id: 3,
      title: "Intra Club Activities",
      icon: Users,
      count: "20+",
      description: "Internal club activities and team building events",
      position: "bottom-left",
      color: "from-purple-700 to-purple-600",
      events: [
        {
          name: "FSTR (First Step Towards Robotics)",
          frequency: "Every Friday",
          participants: "All Members",
          duration: "1.5 hours",
          description: "The FSTR initiative is an inter-club activity where our fellow associates undertake division-specific mini-projects in embedded systems, CAD, PCB design, IoT, and AI/ML. Each project is designed to build core technical skills which serve as a launchpad for future innovations within our ecosystem. Regular technical discussions are also held where members share knowledge about the latest technologies and innovations.",
          highlights: [
            "Division-specific mini-projects",
            "Core skill development",
            "Embedded systems, CAD, PCB, IoT, AI/ML",
            "Peer learning & collaboration",
            "Innovation-focused discussions"
          ]
        }
      ]

    },
    {
      id: 4,
      title: "Our Projects",
      icon: Rocket,
      count: "12+",
      description: "Innovative projects developed by our club members",
      position: "bottom-right",
      color: "from-orange-700 to-orange-600",
      // events: [
      //   {
      //     name: "Autonomous Delivery Drone",
      //     status: "In Development",
      //     team: "6 members",
      //     duration: "8 months",
      //     description: "Developing an autonomous drone system for campus delivery with GPS navigation and obstacle avoidance.",
      //     highlights: ["GPS navigation", "Obstacle avoidance", "Payload delivery", "Mobile app integration"],
      //     technologies: ["Python", "OpenCV", "ROS", "GPS modules"]
      //   },
      //   {
      //     name: "Swarm Robotics System",
      //     status: "Completed",
      //     team: "8 members",
      //     duration: "10 months",
      //     description: "Multi-robot coordination system where multiple robots work together to complete complex tasks.",
      //     highlights: ["Multi-robot coordination", "Swarm intelligence", "Communication protocols", "Task distribution"],
      //     technologies: ["C++", "Arduino", "Wireless communication", "AI algorithms"]
      //   },
      //   {
      //     name: "Smart Agriculture Bot",
      //     status: "Testing Phase",
      //     team: "5 members",
      //     duration: "6 months",
      //     description: "Agricultural robot for automated planting, watering, and monitoring of crops using IoT sensors.",
      //     highlights: ["IoT integration", "Automated farming", "Sensor networks", "Data analytics"],
      //     technologies: ["IoT sensors", "Machine learning", "Mobile app", "Cloud computing"]
      //   },
      //   {
      //     name: "Search and Rescue Drone",
      //     status: "Prototype",
      //     team: "7 members",
      //     duration: "12 months",
      //     description: "Emergency response drone equipped with thermal imaging and communication systems for disaster scenarios.",
      //     highlights: ["Thermal imaging", "Emergency communication", "GPS tracking", "Real-time video"],
      //     technologies: ["Thermal cameras", "Communication systems", "Flight controllers", "Emergency protocols"]
      //   }
      // ],
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

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-400"
      case "Ongoing":
        return "text-yellow-400"
      case "Upcoming":
        return "text-blue-400"
      case "In Development":
        return "text-orange-400"
      case "Testing Phase":
        return "text-purple-400"
      case "Prototype":
        return "text-pink-400"
      default:
        return "text-gray-400"
    }
  }

  // Show detailed event information
  if (selectedEventDetail) {
    return (
      <div className="h-screen bg-black text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <Spline scene="https://prod.spline.design/ohjiWyzIkwuCjw-5/scene.splinecode" />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center p-8 mt-20">
          <div className="bg-black/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl max-w-6xl w-full max-h-[80vh] overflow-y-auto custom-scroll">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedEventDetail.name}</h2>
              <button
                onClick={() => setSelectedEventDetail(null)}
                className="flex items-center text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Events
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Event Details</h3>
                <div className="space-y-3 text-gray-300">
                  <p><span className="text-white font-medium">Date:</span> {selectedEventDetail.date}</p>
                  <p><span className="text-white font-medium">Status:</span> <span className={getStatusColor(selectedEventDetail.status)}>{selectedEventDetail.status}</span></p>
                  <p><span className="text-white font-medium">Participants:</span> {selectedEventDetail.participants}</p>
                  <p><span className="text-white font-medium">Type:</span> {selectedEventDetail.type}</p>
                </div>

                <h4 className="text-lg font-semibold text-white mt-6 mb-3">Description</h4>
                <p className="text-gray-300 leading-relaxed">{selectedEventDetail.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Additional Information</h3>
                {selectedEventDetail.detailedInfo && (
                  <div className="space-y-4">
                    {Object.entries(selectedEventDetail.detailedInfo).map(([key, value]) => (
                      <div key={key}>
                        <h4 className="text-white font-medium capitalize mb-2">{key.replace(/([A-Z])/g, ' $1').trim()}:</h4>
                        {Array.isArray(value) ? (
                          <ul className="text-gray-300 text-sm space-y-1">
                            {value.map((item, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-gray-300 text-sm">{value}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Show events list with Know More buttons
  if (selectedEvent) {
    return (
      <div className="h-screen bg-black text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <Spline scene="https://prod.spline.design/ohjiWyzIkwuCjw-5/scene.splinecode" />
        </div>

        <div className="absolute inset-0 z-10 flex items-center justify-center p-8 mt-20">
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl max-w-6xl w-full max-h-[80vh] overflow-y-auto custom-scroll">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">{selectedEvent.title}</h2>
              <button
                onClick={() => setSelectedEvent(null)}
                className="flex items-center text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
            </div>

            <div className="grid gap-6">
              {selectedEvent.events && selectedEvent.events.length > 0 ? (
                selectedEvent.events.map((event, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2 lg:mb-0">{event.name}</h3>
                      {event.status && (
                        <span className={`text-sm font-semibold px-3 py-1 rounded-full bg-gray-800 ${getStatusColor(event.status)}`}>
                          {event.status}
                        </span>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                      {event.date && (
                        <div className="flex items-center text-gray-400">
                          <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                          <span>{event.date}</span>
                        </div>
                      )}
                      {event.participants && (
                        <div className="flex items-center text-gray-400">
                          <Users className="w-5 h-5 mr-2 text-green-400" />
                          <span>{event.participants}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center text-gray-400">
                          <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                          <span>{event.location}</span>
                        </div>
                      )}
                      {event.result && (
                        <div className="flex items-center text-gray-400">
                          <Award className="w-5 h-5 mr-2 text-yellow-400" />
                          <span>{event.result}</span>
                        </div>
                      )}
                      {event.team && (
                        <div className="flex items-center text-gray-400">
                          <Users className="w-5 h-5 mr-2 text-green-400" />
                          <span>{event.team}</span>
                        </div>
                      )}
                      {event.duration && (
                        <div className="flex items-center text-gray-400">
                          <Clock className="w-5 h-5 mr-2 text-blue-400" />
                          <span>{event.duration}</span>
                        </div>
                      )}
                      {event.frequency && (
                        <div className="flex items-center text-gray-400">
                          <Clock className="w-5 h-5 mr-2 text-blue-400" />
                          <span>{event.frequency}</span>
                        </div>
                      )}
                      {event.type && (
                        <div className="flex items-center text-gray-400">
                          <Target className="w-5 h-5 mr-2 text-orange-400" />
                          <span>{event.type}</span>
                        </div>
                      )}
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{event.description}</p>

                    <div className="mb-4">
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

                    {event.technologies && (
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Know More button only for Events section and only if detailedInfo exists */}
                    {selectedEvent.id === 2 && event.detailedInfo && (
                      <div className="flex justify-end">
                        <button
                          onClick={() => setSelectedEventDetail(event)}
                          className="flex items-center text-white bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-lg border border-gray-600 hover:border-gray-500 transition-all"
                        >
                          <span className="text-sm font-medium">Know More</span>
                          <Target className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-400 text-lg font-medium">
                  Coming Soon...
                </div>
              )}
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
            <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors">
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
