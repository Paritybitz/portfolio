"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap } from "lucide-react"

const workExperience = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    duration: "2021 - Present",
    location: "San Francisco, CA",
    description: [
      "Led the development of the company's flagship product using React and Next.js",
      "Implemented responsive designs and improved website performance by 40%",
      "Mentored junior developers and conducted code reviews",
      "Collaborated with UX/UI designers to create intuitive user interfaces",
    ],
  },
  {
    id: 2,
    company: "Digital Solutions LLC",
    position: "Frontend Developer",
    duration: "2018 - 2021",
    location: "Austin, TX",
    description: [
      "Developed and maintained multiple client websites using React and Bootstrap",
      "Created reusable component libraries to improve development efficiency",
      "Implemented responsive designs for mobile and desktop platforms",
      "Collaborated with backend developers to integrate APIs and services",
    ],
  },
  {
    id: 3,
    company: "WebCraft Studios",
    position: "Junior Web Developer",
    duration: "2016 - 2018",
    location: "Seattle, WA",
    description: [
      "Assisted in the development of client websites using HTML, CSS, and JavaScript",
      "Implemented responsive designs based on mockups from the design team",
      "Fixed bugs and improved website performance",
      "Participated in client meetings and project planning sessions",
    ],
  },
]

const education = [
  {
    id: 1,
    institution: "University of Technology",
    degree: "Master of Computer Science",
    duration: "2014 - 2016",
    location: "San Francisco, CA",
    description: [
      "Specialized in Human-Computer Interaction and Web Technologies",
      "Thesis: 'Improving User Experience in Web Applications'",
      "GPA: 3.9/4.0",
      "Member of the Computer Science Honor Society",
    ],
  },
  {
    id: 2,
    institution: "State University",
    degree: "Bachelor of Science in Computer Science",
    duration: "2010 - 2014",
    location: "Chicago, IL",
    description: [
      "Focused on Software Engineering and Web Development",
      "Senior Project: 'Interactive Learning Platform'",
      "Dean's List for all semesters",
      "Participated in multiple hackathons and coding competitions",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my skills and expertise.
          </p>
        </motion.div>

        <Tabs defaultValue="work" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="work" className="gap-2">
              <Briefcase className="h-4 w-4" />
              Work Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="gap-2">
              <GraduationCap className="h-4 w-4" />
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="work" className="space-y-8">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{job.position}</h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <p className="text-muted-foreground">{job.duration}</p>
                        <p className="text-muted-foreground">{job.location}</p>
                      </div>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {job.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="education" className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <div className="mt-2 md:mt-0 text-right">
                        <p className="text-muted-foreground">{edu.duration}</p>
                        <p className="text-muted-foreground">{edu.location}</p>
                      </div>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {edu.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
