import { Users, Code, Cpu, Zap, Award, Github, Linkedin, Mail } from 'lucide-react'
import Spline from "@splinetool/react-spline"
import { Card, CardContent } from "@/components/ui/card"

const TeamsPage = () => {
  const teams = [
  {
    id: 1,
    name: "Web Development & IoT-systems",
    description:
      "Building smart web and IoT systems for real-time connectivity, automation, and device integration.",
    members: [
      { name: "Soham Bhosale" },
      { name: "Parth Pingle" },
      { name: "Saloni Sawant" },
      { name: "Vansh Parate" },
    ],
    technologies: ["JavaScript", "React", "Python", "ESP32"],
    projects: 8,
    icon: Cpu,
  },
  {
    id: 2,
    name: "Circuits & PCB Design Wing",
    description:
      "Designing and prototyping custom circuit boards and electronic systems for reliable hardware performance.",
    members: [
      { name: "Yadnyesh Sable" },
      { name: "Arushi Shetty" },
      { name: "Vishal Rathod" },
      { name: "Parth Kadam" },
    ],
    technologies: ["Eagle", "Proteus", "Simulink"],
    projects: 10,
    icon: Zap,
  },
  {
    id: 3,
    name: "Embedded Interfacing & Programming",
    description:
      "Programming microcontrollers and integrating sensors to enable intelligent embedded systems.",
    members: [
      { name: "Parth Kadam" },
      { name: "Vishal Rathod" },
      { name: "Soham Bhosale" },
      { name: "Harsh Joshi" },
    ],
    technologies: ["C", "C++", "Arduino", "STM32"],
    projects: 7,
    icon: Code,
  },
  {
    id: 4,
    name: "Creatives",
    description:
      "Designing visuals, graphics, and digital content to effectively communicate ideas and showcase innovations.",
    members: [
      { name: "Aditya Hursale" },
      { name: "Nisarg Chhoda" },
      { name: "Arushi Shetty" },
      { name: "Saloni Sawant" },
    ],
    technologies: ["Figma", "Canva", "Illustrator"],
    projects: 5,
    icon: Award,
  }
];


  const teamMembers = [
    {
      name: "Yadnyesh Sable",
      role: "Chairperson",
      image: "https://imgs.search.brave.com/AFgKBWJALvrSAae6W1wLSKRtVsiJdvz__-qva-ymL3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc5LzE4Lzkz/LzM2MF9GXzI3OTE4/OTMxNF8xT1EyNnV1/R2R1RXdSc0k5dVUy/NGNDVW1lUjFKVnpl/TS5qcGc",
      email: "yadnyesh@spit.ac.in",
      github: "https://github.com/yadnyeshsable",
      linkedin: "https://linkedin.com/in/yadnyeshsable"
    },
    {
      name: "Harsh Joshi",
      role: "Vice-Chairperson",
      image: "https://imgs.search.brave.com/AFgKBWJALvrSAae6W1wLSKRtVsiJdvz__-qva-ymL3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc5LzE4Lzkz/LzM2MF9GXzI3OTE4/OTMxNF8xT1EyNnV1/R2R1RXdSc0k5dVUy/NGNDVW1lUjFKVnpl/TS5qcGc",
      email: "harsh@spit.ac.in",
      github: "https://github.com/harshjoshi",
      linkedin: "https://linkedin.com/in/harshjoshi"
    },
    {
      name: "Soham Bhosale",
      role: "Technical Secretary",
      image: "https://imgs.search.brave.com/AFgKBWJALvrSAae6W1wLSKRtVsiJdvz__-qva-ymL3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc5LzE4Lzkz/LzM2MF9GXzI3OTE4/OTMxNF8xT1EyNnV1/R2R1RXdSc0k5dVUy/NGNDVW1lUjFKVnpl/TS5qcGc",
      email: "soham@spit.ac.in",
      github: "https://github.com/sohambhosale",
      linkedin: "https://linkedin.com/in/sohambhosale"
    },
    {
      name: "Parth Kadam",
      role: "Technical Secretary",
      image: "https://imgs.search.brave.com/AFgKBWJALvrSAae6W1wLSKRtVsiJdvz__-qva-ymL3Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzc5LzE4Lzkz/LzM2MF9GXzI3OTE4/OTMxNF8xT1EyNnV1/R2R1RXdSc0k5dVUy/NGNDVW1lUjFKVnpl/TS5qcGc",
      email: "parth@spit.ac.in",
      github: "https://github.com/parthkadam",
      linkedin: "https://linkedin.com/in/parthkadam"
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

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-transparent border-gray-700/50 hover:border-gray-600/50 backdrop-blur-md transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gray-600/50"
                  />
                  <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
                  <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                  <div className="flex justify-center space-x-2">
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50">
                      <Github className="w-4 h-4 text-gray-300" />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50">
                      <Linkedin className="w-4 h-4 text-gray-300" />
                    </a>
                    <a href={`mailto:${member.email}`} className="w-8 h-8 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50">
                      <Mail className="w-4 h-4 text-gray-300" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-16">
            {teams.map((team, index) => (
              <div
                key={team.id}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                {/* Team Info */}
                <div className="lg:w-1/2">
                  <div className="bg-gray-900/30 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 hover:bg-gray-900/40 hover:border-gray-600/50 transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-700/80 to-gray-600/80 rounded-2xl flex items-center justify-center mr-6 border border-gray-600/50 backdrop-blur-sm">
                        <team.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white">{team.name}</h3>
                        <div className="flex items-center mt-2 space-x-4">
                          <span className="text-gray-400 text-sm flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {team.members.length} Members
                          </span>
                          {/* <span className="text-gray-400 text-sm">{team.projects} Active Projects</span> */}
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
                            className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50 backdrop-blur-sm"
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
                        className="bg-black/30 backdrop-blur-lg rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 hover:bg-black/40 transition-all duration-300 group"
                      >
                        <div className="text-center">
                          <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
                          <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                          <div className="flex justify-center space-x-2">
                            <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50">
                              <Github className="w-4 h-4 text-gray-300" />
                            </a>
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50">
                              <Linkedin className="w-4 h-4 text-gray-300" />
                            </a>
                            <a href={`mailto:${member.email}`} className="w-8 h-8 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-gray-700/50 transition-colors border border-gray-600/50">
                              <Mail className="w-4 h-4 text-gray-300" />
                            </a>
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
