"use client"

import { Target, Eye, Award, Cpu, ChevronRight } from "lucide-react"
import Spline from "@splinetool/react-spline"

const HomePage = () => {

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

  return (
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
  )
}

export default HomePage
