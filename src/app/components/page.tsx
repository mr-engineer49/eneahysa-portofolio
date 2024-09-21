'use client'

import { Badge } from "@/app/components/ui/badge"
import { Card, CardContent } from "@/app/components/ui/card"
import { Calendar, Globe, Mail, MapPin, Phone } from "lucide-react"

export default function EneaHysaCv() {
  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          <header className="border-b pb-6">
            <a href="/"><h1 className="text-4xl font-bold text-gray-900">Enea Hysa</h1></a>
            <p className="text-xl text-gray-600 mt-1">Software Engineer</p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                eneahysa49@gmail.com
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                (+355) 0693857457
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Tirane, Albania
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4" />
                <a href="https://eneahysa-portofolio.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
              </div>
            </div>
          </header>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Professional Summary</h2>
            <p className="text-gray-700">
              Resourceful Software Engineer with a Bachelor's Degree in Software Engineering and 3+ years of experience in web development and automation testing. Proficient in React.js, Django, and Python, with a strong focus on creating innovative web applications and implementing robust QA processes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Work Experience</h2>
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Automation Tester & Integrations | First Line Support</h3>
                    <p className="text-gray-600">REVELOP, Tirane, Albania</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    Oct 2021 - Jun 2024
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Developed and maintained 50+ automated test scripts using Python and Selenium, increasing test coverage by 40%</li>
                  <li>Reduced bug escape rate by 30% through implementation of thorough root cause analysis processes</li>
                  <li>Decreased average resolution time for production issues by 25% while providing first line support</li>
                  <li>Led 5 complex web testing initiatives, resulting in a 20% improvement in overall product quality</li>
                  <li>Collaborated with cross-functional teams to deliver 10+ high-quality test solutions, improving team efficiency by 15%</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Web Developer Freelancer</h3>
                    <p className="text-gray-600">Self-employed, Tirane, Albania</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    Apr 2018 - Present
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Designed and developed 20+ websites and web applications using React.js, Django, and Flask</li>
                  <li>Increased client satisfaction rate to 95% by delivering high-quality, responsive web solutions</li>
                  <li>Implemented SEO best practices, resulting in an average 30% increase in organic traffic for clients</li>
                  <li>Developed 5 custom content management systems, improving client workflow efficiency by 40%</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">Video Editing Freelancer</h3>
                    <p className="text-gray-600">Self-employed, Tirane, Albania</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    Mar 2020 - Present
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Edited and produced 100+ videos for a travel YouTube channel, increasing subscriber count by 50%</li>
                  <li>Improved average view duration by 25% through implementation of advanced editing techniques</li>
                  <li>Managed project timelines effectively, delivering 95% of projects ahead of schedule</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Education</h2>
            <Card className="mb-4">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Master of Science - Computer Engineering & IT / Multimedia Design</h3>
                    <p className="text-gray-600">Canadian Institute of Technology, Tirane, Albania</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    Sep 2023 - Present
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">Bachelor of Science - Software Engineering</h3>
                    <p className="text-gray-600">Canadian Institute of Technology, Tirane, Albania</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    Aug 2018 - May 2021
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Python</Badge>
              <Badge variant="secondary">Selenium</Badge>
              <Badge variant="secondary">Django</Badge>
              <Badge variant="secondary">Flask</Badge>
              <Badge variant="secondary">React.js</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">HTML/CSS</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">Git</Badge>
              <Badge variant="secondary">SQL</Badge>
              <Badge variant="secondary">RESTful APIs</Badge>
              <Badge variant="secondary">Test Automation</Badge>
              <Badge variant="secondary">Agile Methodologies</Badge>
              <Badge variant="secondary">CI/CD</Badge>
              <Badge variant="secondary">Adobe Premiere Pro</Badge>
              <Badge variant="secondary">DaVinci Resolve</Badge>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Languages</h2>
            <div className="space-y-2">
              <p><strong>Albanian:</strong> Native</p>
              <p><strong>English:</strong> Professional working proficiency</p>
              <p><strong>German:</strong> Elementary proficiency</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Certifications</h2>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">SEO Certification</h3>
                <p className="text-gray-600">Programming Hub</p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  )
}
