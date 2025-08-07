"use client"

import { useState, useEffect } from "react"
import { Cpu, Zap, Target, Eye, Award } from 'lucide-react'

const DroneLoader = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const loadingPhases = [
    { text: "Initializing Drone Systems", icon: Cpu, color: "from-blue-500 to-blue-600" },
    { text: "Calibrating Sensors", icon: Target, color: "from-green-500 to-green-600" },
    { text: "Loading Navigation AI", icon: Eye, color: "from-purple-500 to-purple-600" },
    { text: "Powering Flight Controllers", icon: Zap, color: "from-yellow-500 to-yellow-600" },
    { text: "Systems Ready", icon: Award, color: "from-gray-500 to-gray-600" }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true)
          setTimeout(() => {
            onLoadComplete?.()
          }, 1000)
          clearInterval(interval)
          return 100
        }
        
        const newProgress = prev + Math.random() * 3 + 1
        const phaseIndex = Math.floor((newProgress / 100) * loadingPhases.length)
        setCurrentPhase(Math.min(phaseIndex, loadingPhases.length - 1))
        
        return Math.min(newProgress, 100)
      })
    }, 100)

    return () => clearInterval(interval)
  }, [onLoadComplete])

  const currentPhaseData = loadingPhases[currentPhase]
  const CurrentIcon = currentPhaseData.icon

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 text-center">
        {/* Logo Section */}
        <div className="mb-12">
          <div className="relative mx-auto w-32 h-32 mb-6">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-gray-700 rounded-full animate-spin-slow">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-blue-500 rounded-full" />
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-4 h-4 bg-green-500 rounded-full" />
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-4 h-4 bg-purple-500 rounded-full" />
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-4 h-4 bg-yellow-500 rounded-full" />
            </div>
            
            {/* Inner Ring */}
            <div className="absolute inset-4 border-2 border-gray-600 rounded-full animate-spin-reverse">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-white rounded-full" />
            </div>
            
            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-lg flex items-center justify-center border border-gray-600 shadow-lg">
                <Cpu className="w-8 h-8 text-white" />
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <Zap className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Club Name */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">DRC - SPIT</h1>
            <p className="text-gray-400 text-lg">Drone & Robotics Club</p>
            <p className="text-gray-500 text-sm mt-1">Where brilliance is natural</p>
          </div>
        </div>

        {/* Loading Phase */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className={`w-12 h-12 bg-gradient-to-br ${currentPhaseData.color} rounded-xl flex items-center justify-center mr-4 border border-gray-600 animate-pulse`}>
              <CurrentIcon className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <p className="text-white text-xl font-semibold">{currentPhaseData.text}</p>
              <p className="text-gray-400 text-sm">Phase {currentPhase + 1} of {loadingPhases.length}</p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-96 max-w-full mx-auto mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 border border-gray-700">
            <div 
              className="bg-white h-full rounded-full transition-all duration-300 ease-out relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer" />
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {loadingPhases.map((phase, index) => {
            const PhaseIcon = phase.icon
            const isActive = index <= currentPhase
            const isCompleted = index < currentPhase
            
            return (
              <div
                key={index}
                className={`p-3 rounded-lg border transition-all duration-500 ${
                  isCompleted 
                    ? 'bg-green-900/30 border-green-600/50' 
                    : isActive 
                    ? 'bg-gray-800/50 border-gray-600/50 animate-pulse' 
                    : 'bg-gray-900/30 border-gray-700/30'
                }`}
              >
                <PhaseIcon className={`w-5 h-5 mx-auto mb-2 ${
                  isCompleted ? 'text-green-400' : isActive ? 'text-white' : 'text-gray-600'
                }`} />
                <p className={`text-xs text-center ${
                  isCompleted ? 'text-green-400' : isActive ? 'text-white' : 'text-gray-600'
                }`}>
                  {phase.text.split(' ').slice(0, 2).join(' ')}
                </p>
              </div>
            )
          })}
        </div>

        {/* Loading Complete Animation */}
        {isComplete && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center animate-fade-in">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <Award className="w-12 h-12 text-white" />
              </div>
              <p className="text-2xl font-bold text-white mb-2">Systems Online</p>
              <p className="text-gray-400">Welcome to DRC</p>
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}

export default DroneLoader
