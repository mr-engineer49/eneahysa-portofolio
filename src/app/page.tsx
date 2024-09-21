'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Github, Linkedin, Mail, SquareArrowOutUpRight } from 'lucide-react';
import { useState } from 'react';

import { Button } from "@nextui-org/button";
import { Progress } from "@nextui-org/progress";
import Link from 'next/link';
import PDFbuttonDownloadCV from './PDFbuttonDownloadCV';



export default function Home() {

  const skills = [
    { category:'Testing', name:"Automation Testing", icon:"https://img.icons8.com/color/48/browser-stack.png", level:"Intermediate"},
    { category:'Development', name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript.png', level: 'Beginner' },
    { category:'Testing', name: 'Python', icon: 'https://img.icons8.com/color/48/000000/python.png', level: 'Intermediate' },
    { category:'Development', name: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png', level: 'Advanced-Beginner' },
    { category:'Development', name: 'Node.js', icon: 'https://img.icons8.com/color/48/000000/nodejs.png', level: 'Beginner' },
    { category:'Testing', name: 'Selenium', icon:"https://img.icons8.com/fluency/48/selenium-test-automation.png", level: 'Intermediate' },
    { category:'Design', name: 'Figma', icon: 'https://img.icons8.com/color/48/figma--v1.png', level: 'Beginner' },
    { category:'Development', name: 'SQL', icon: 'https://img.icons8.com/color/48/000000/sql.png', level: 'Beginner' },
    { category:'Development', name: 'Git', icon: 'https://img.icons8.com/color/48/000000/git.png', level: 'Knowledgeable' },
    { category:'Development',name: 'Docker', icon: 'https://img.icons8.com/color/48/000000/docker.png', level: 'Beginner' },
    { category:'Development', name: 'Wordpress', icon: 'https://img.icons8.com/fluency/48/wordpress.png', level: 'Have Experience & Hands on' },
    { category:'Development', name: 'Django', icon: 'https://img.icons8.com/ios/50/django.png', level: 'Intermediate' },
    { category:'Design',name: 'Video Editing', icon: 'https://img.icons8.com/office/40/video-editing.png', level: 'Intermediate' },
    { category:'Design',name: 'Adobe Premiere Pro', icon: 'https://img.icons8.com/color/48/adobe-premiere-pro--v1.png', level: 'Intermediate' },
    { category:'Design',name: 'Davinci Resolve', icon: 'https://img.icons8.com/color/48/davinci-resolve.png', level: 'Intermediate' },
    { category:'Design',name: 'Canva', icon: 'https://img.icons8.com/fluency/48/canva.png', level: 'Intermediate' },

  ]

  const [activeSection, setActiveSection] = useState('home')
  const testingSkills = skills.filter(skill => skill.category === 'Testing');
  const developmentSkills = skills.filter(skill => skill.category === 'Development');
  const designSkills = skills.filter(skill => skill.category === 'Design');


  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  const projects = [
    {
      title: 'Globetrotterhub-Managment-Tool',
      project_url: 'https://github.com/mr-engineer49/Globetrotterhub-Managment-Tool',
      description: 'This is a Project created using Django , Web App Tool that helps agencies create campaigns on social media and manage their campaigns (On Going))',
      technologies: ['Django', 'Tailwind CSS' , 'SQLite3'],
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      title: 'traveblo-agency-managment',
      project_url: 'https://github.com/mr-engineer49/traveblo-agency-managment',
      description: 'This is a Project created using Django , Web App Tool that helps Travel Agencies Manage their data and tasks and have better conversions sale rate (On Going)',
      technologies: ['Django', 'Tailwind CSS' , 'SQLite3'],
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      title: 'E-Commerce Front-end Platform',
      project_url: 'https://github.com/mr-engineer49/ecommerce-ui',
      description: 'This is a Frontend Project website using ReactJs and other its ui libraries.',
      technologies: ['ReactJs', 'Redux', 'Material UI', 'Tailwind CSS'],
      image: '/placeholder.svg?height=200&width=300',
    },
  ]

  const testimonials = [
    {
      name: 'John Doe',
      position: 'CTO at TechCorp',
      content: 'Enes is an exceptional developer with a keen eye for detail. His work on our AI project was outstanding.',
      avatar: '/placeholder.svg?height=60&width=60',
    },
    {
      name: 'Jane Smith',
      position: 'Lead Developer at InnovateTech',
      content: 'Working with Enes was a pleasure. His problem-solving skills and dedication to quality are unmatched.',
      avatar: '/placeholder.svg?height=60&width=60',
    },
  ]

  const blogPosts = [
    {
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is shaping the future of web development and user experiences.',
      date: '2023-05-15',
    },
    {
      title: 'Optimizing React Performance',
      excerpt: 'Learn advanced techniques to boost your React application\'s performance and user satisfaction.',
      date: '2023-04-22',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4">
        <>
          <Link href="/components" className='flex inline py-4'>View Other Version</Link>
        </>
          <ul className="flex justify-center space-x-8">
            {['home', 'skills', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollTo(item)}
                  className={`text-sm uppercase tracking-wider ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4"
            >
              Enea Hysa
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8"
            >
              Software Testing&QA | Web Development | AI & Machine Learning & Technology Enthusiast
            </motion.p>
            <motion.div className='flex inline center justify-center '
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button onClick={() => scrollTo('contact')} className="bg-blue-500 hover:bg-blue-600 w-32 px-4 rounded">
                Get in touch
              </Button>
              <PDFbuttonDownloadCV/>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 mb-6">
                I'm a passionate Web Developer and Software Tester with a interest in AI and machine learning. 
                With a background in software engineering, I like to work on complex problems and try to create 
                innovative solutions that make a difference.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects or other things , or enjoying a good reading on tech trends and innovations.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
            {/* Testing Skills */}
            <h3 className="text-xl font-bold mb-6 text-center">Testing Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {testingSkills.length > 0 ? (
              testingSkills.map((skill) => (
                <div key={skill.name} className="bg-gray-700 rounded-lg p-6 flex items-center space-x-4">
                  <img src={skill.icon} alt={`${skill.name} icon`} className="w-12 h-12" />
                  <div className="flex-grow">
                    <p className="font-semibold mb-2">{skill.name}</p>
                    <Progress valueLabel={skill.level} className="w-full" />
                  </div>
                  <span className="text-sm font-medium">{skill.level}</span>
                </div>
              ))
            ) : (
                <div>No Testing Skills Available</div>
              )}
            </div>
            {/* Development Skills */}
    <h3 className="text-xl font-bold mb-6 text-center">Development Skills</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {developmentSkills.length > 0 ? (
        developmentSkills.map(skill => (
          <div key={skill.name} className="bg-gray-700 rounded-lg p-6 flex items-center space-x-4">
            <img src={skill.icon} alt={`${skill.name} icon`} className="w-12 h-12" />
            <div className="flex-grow">
              <p className="font-semibold mb-2">{skill.name}</p>
              <Progress valueLabel={skill.level} className="w-full" />
            </div>
            <span className="text-sm font-medium">{skill.level}</span>
          </div>
        ))
      ) : (
        <div>No Development Skills Available</div>
      )}
    </div>
    {/* Design Skills */}
    <h3 className="text-xl font-bold mb-6 text-center">UI/UX Editing Skills</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {designSkills.length > 0 ? (
        designSkills.map(skill => (
          <div key={skill.name} className="bg-gray-700 rounded-lg p-6 flex items-center space-x-4">
            <img src={skill.icon} alt={`${skill.name} icon`} className="w-12 h-12" />
            <div className="flex-grow">
              <p className="font-semibold mb-2">{skill.name}</p>
              <Progress valueLabel={skill.level} className="w-full" />
            </div>
            <span className="text-sm font-medium">{skill.level}</span>
          </div>
        ))
      ) : (
        <div>No Development Skills Available</div>
      )}
    </div>
          </div>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                  <a className='inline flex float-right p-2' href={project.project_url}>View<SquareArrowOutUpRight /> </a>
                  {/* <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" /> */}
                  <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="min-h-screen flex items-center justify-center py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-6">
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="min-h-screen flex items-center justify-center py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center">Latest Blog Posts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Button variant="solid" className="text-blue-400 hover:text-blue-300">
                      Read more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-gray-800">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:eneahysa49@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-8 h-8" />
              </a>
              <a href="https://github.com/mr-engineer49/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/eneahs/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        <p>&copy; 2021 Enea Hysa. All rights reserved.</p>
      </footer>
    </div>
  )
}