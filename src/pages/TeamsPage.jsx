import { Users, Code, Cpu, Zap, Award, Github, Linkedin, Mail } from "lucide-react"
import Spline from "@splinetool/react-spline"

const TeamsPage = () => {
  const teams = [
    {
      id: 1,
      name: "Autonomous Systems",
      description:
        "Developing cutting-edge AI algorithms for autonomous navigation and decision-making in complex environments.",
      members: [
        { name: "Alex Chen", role: "Team Lead", avatar: "/placeholder.svg?height=80&width=80" },
        { name: "Sarah Kim", role: "AI Engineer", avatar: "/placeholder.svg?height=80&width=80" },
        { name: "Marcus Johnson", role: "Systems Engineer", avatar: "/placeholder.svg?height=80&width=80" },
        { name: "Elena Rodriguez", role: "Software Developer", avatar: "/placeholder.svg?height=80&width=80" },
      ],
      technologies: ["Python", "TensorFlow", "ROS", "OpenCV"],
      projects: 8,
      icon: Cpu,
    },
    {
      id: 2,
      name: "Mechanical Design",
      description:
        "Creating robust and efficient mechanical systems for drones and robotic platforms with precision engineering.",
      members: [
        { name: "David Park", role: "Team Lead", avatar: "/placeholder.svg?height=80&width=80" },
        { name: "Lisa Wang", role: "Design Engineer", avatar: "/placeholder.svg?height=80&width=80" },
        { name: "James Miller", role: "Manufacturing Specialist", avatar: "/placeholder.svg?height=80&width=80" },
        { name: "Anna Petrov", role: "Materials Engineer", avatar: "/placeholder.svg?height=80&width=80" },
      ],
      technologies: ["SolidWorks", "ANSYS", "3D Printing", "CNC"],
      projects: 12,
      icon: Zap,
    },
    {
      id: 3,
      name: "Software Development",
      description:
        "Building sophisticated control systems, user interfaces, and embedded software for robotic applications.",
      members: [
        { name: "Ryan Thompson", role: "Team Lead", avatar: "/placeholder.svg?height=80&width=80" },
        { name: "Maya Patel", role: "Frontend Developer", avatar: "/placeholder.svg?height=80&width=80" },
        { name: "Kevin Liu", role: "Backend Engineer", avatar: "/placeholder.svg?height=80&width=80" },
        { name: "Sophie Brown", role: "Embedded Systems", avatar: "/placeholder.svg?height=80&width=80" },
      ],
      technologies: ["React", "Node.js", "C++", "Arduino"],
      projects: 15,
      icon: Code,
    },
    {
      id: 4,
      name: "Competition Team",
      description:
        "Elite squad focused on robotics competitions, combining all disciplines to create championship-winning robots.",
      members: [
        { name: "Jordan Lee", role: "Team Captain", avatar: "/placeholder.svg?height=80&width=80" },
        { name: "Zoe Adams", role: "Strategy Lead", avatar: "/placeholder.svg?height=80&width=80" },
        { name: "Tyler Davis", role: "Hardware Specialist", avatar: "/placeholder.svg?height=80&width=80" },
        { name: "Chloe Wilson", role: "Integration Engineer", avatar: "/placeholder.svg?height=80&width=80" },
      ],
      technologies: ["Multi-disciplinary", "Competition Platforms", "Real-time Systems"],
      projects: 6,
      icon: Award,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">

      {/* Teams Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Specialized Teams</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each team brings unique expertise and passion to push the boundaries of robotics innovation
            </p>
          </div>

          <div className="space-y-16">
            {teams.map((team, index) => (
              <div
                key={team.id}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                {/* Team Info */}
                <div className="lg:w-1/2">
                  <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center mr-6 border border-gray-600">
                        <team.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{team.name}</h3>
                        <div className="flex items-center mt-2 space-x-4">
                          <span className="text-gray-400 text-sm flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {team.members.length} Members
                          </span>
                          <span className="text-gray-400 text-sm">{team.projects} Active Projects</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{team.description}</p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {team.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Members */}
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    {team.members.map((member, idx) => (
                      <div
                        key={idx}
                        className="bg-black/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
                      >
                        <div className="text-center">
                          <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
                          <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                          <div className="flex justify-center space-x-2">
                            <button className="w-8 h-8 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600">
                              <Github className="w-4 h-4 text-gray-400" />
                            </button>
                            <button className="w-8 h-8 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600">
                              <Linkedin className="w-4 h-4 text-gray-400" />
                            </button>
                            <button className="w-8 h-8 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600">
                              <Mail className="w-4 h-4 text-gray-400" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeamsPage
