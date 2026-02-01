/**
 * Experience Page
 * Work experience, internships, and volunteering activities
 */

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionHeader from "@/components/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  // Experience data
  const experiences = [
    {
      type: "Full-time",
      title: "Frontend Developer",
      company: "WingBank",
      location: "Phnom Penh, Cambodia",
      period: "Sep 2025 - Present",
      description:
        "Developed and maintained frontend features for the Unified System using React, Vite, TypeScript, Tailwind CSS, and Next.js. Followed micro-frontend architecture principles to ensure scalability and maintainability.",
      responsibilities: [
        "Implemented responsive UI components using React and Tailwind CSS",
        "Collaborated with backend developers to integrate RESTful APIs",
        "Optimized application performance and load times",
        "Participated in code reviews and agile ceremonies",
      ],
      technologies: ["React", "Next.js", "PostgreSQL", "TypeScript", "Tailwind CSS", "..."],
    },
    {
      type: "Full-time as Apprenticeship",
      title: "Frontend Developer",
      company: "WingBank",
      location: "Phnom Penh, Cambodia",
      period: "Feb 2025 - Sep 2025",
      description:
        "Contributed to the development and maintenance of frontend features for the Unified System using React, Vite, TypeScript, Tailwind CSS, and Next.js. Gained experience in micro-frontend architecture principles to ensure scalability and maintainability.",
      responsibilities: [
        "Assisted in implementing responsive UI components using React and Tailwind CSS",
        "Worked with backend developers to integrate RESTful APIs",
        "Helped optimize application performance and load times",
        "Engaged in code reviews and agile ceremonies",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "..."],
    },
  ];

  // Get badge variant based on experience type
  const getTypeVariant = (type: string) => {
    switch (type) {
      case "Full-time":
        return "default";
      case "Internship":
        return "secondary";
      case "Part-time":
        return "outline";
      case "Volunteer":
        return "secondary";
      default:
        return "secondary";
    }
  };

  return (
    <PageLayout>
      <div className="container mx-auto">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey and contributions"
        />

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-8 w-4 h-4 rounded-full bg-accent border-4 border-background shadow hidden md:block ${
                    index % 2 === 0 ? "right-0 translate-x-1/2 md:-right-2" : "left-0 -translate-x-1/2 md:-left-2"
                  }`}
                />

                <Card className="overflow-hidden">
                  <CardContent className="pt-6">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <Badge variant={getTypeVariant(exp.type)}>{exp.type}</Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Title and Company */}
                    <h3 className="font-heading text-xl font-semibold mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="font-body font-medium text-accent">
                        {exp.company}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="font-heading font-medium text-sm mb-2 flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-accent" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="font-body text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.linkedin.com/in/sunteangserey/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-xl font-body font-medium hover:shadow-md transition-all duration-300"
          >
            <ExternalLink className="h-5 w-5 text-accent" />
            View Full Profile on LinkedIn
          </a>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Experience;
