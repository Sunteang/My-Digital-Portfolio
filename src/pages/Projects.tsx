/**
 * Projects Page
 * Portfolio of projects with descriptions, technologies, and links
 */

import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  // Projects data
  const projects = [
    {
      title: "BookHaven - Online Bookstore",
      description:
        "An e-commerce platform dedicated to book lovers, offering a wide selection of books across various genres. Features include user reviews, ratings, and personalized recommendations.",
      technologies: ["React.js", "Next.js", "TypeScript", "Spring Boot", "PostgreSQL", "DigitalOcean", "Tailwind CSS", "..."],
      image: "https://i.pinimg.com/736x/9e/0a/e0/9e0ae0a6d7ff9d48f797e7019aadcc62.jpg",
      githubUrl: "https://github.com/Soeun-Sovannarith/bookworm-frontend.git",
      liveUrl: "https://book-haven.rith.codes/books",
    },
    {
      title: "Sunteang Portfolio Website",
      description:
        "A personal portfolio website built to showcase my skills, projects, and experience. It features a modern design, responsive layout, and smooth animations.",
      technologies: ["React.js", "Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
      image: "https://i.pinimg.com/736x/c5/f5/76/c5f5762d6e76ef2901e7443a9d187a39.jpg",
      githubUrl: "https://github.com/Sunteang/My-Digital-Showcase.git",
      liveUrl: "https://sunteang.vercel.app/",
    },
    {
      title: "Lomnov Real Estate",
      description:
      "Lomnov is a trusted real estate provider specializing in buying, selling, renting, and investing in properties. Our team is committed to offering exceptional service, with a focus on transparency, trust, and integrity.",
      technologies: ["React.js", "Next.js", "TypeScript", "Node.js", "Socket.io", "MongoDB"],
      image: "https://serey-sunteang.vercel.app/portfolio/lomnov.png",
      githubUrl: "https://github.com/sabaicode-dev/lomnov.git",
    },
    {
      title: "Lomnov Real Estate Dashboard",
      description:
      "Lomnov Dashboard is your one-stop solution for buying, selling, renting, or investing in real estate. It offers property listings, tailored insights, and tools to manage transactions effortlessly.",
      technologies: ["React.js", "Next.js", "TypeScript", "MongoDB", "Chart.js"],
      image: "https://serey-sunteang.vercel.app/portfolio/lomnov-dashboard.png",
      githubUrl: "https://github.com/sabaicode-dev/lomnov.git",
    },
    {
      title: "YourStart - Service",
      description:
        "A project focused on providing clients with market analysis and brand identity development services. It helps businesses gain insights into their markets and create a strong, memorable brand presence.",
      technologies: ["React", "HTML", "CSS", "JavaScript"],
      image: "https://serey-sunteang.vercel.app/portfolio/yourstart.png",
      githubUrl: "https://github.com/Sunteang/YourStart.git",
      liveUrl: "https://your-start.vercel.app/",
    },
    {
      title: "Wedding Service App",
      description:
        "The Wedding Service App was created to simplify the process of finding services (e.g., wedding bands, photography, bridal makeup, venues, dresses, florists, decorations). It connects service providers with potential customers efficiently.",
      technologies: ["Flutter", "Dart", "Firebase"],
      image: "https://serey-sunteang.vercel.app/portfolio/weddingapp.png",
      githubUrl: "https://github.com/Sunteang/Wedding_Service-Flutter_app.git",
    },
    {
      title: "YourHobby - E-commerce Platform",
      description:
        "A platform offering a wide range of electronic devices, including smartphones, laptops, desktops, and headphones. It aims to provide customers with the latest gadgets at competitive prices.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "https://serey-sunteang.vercel.app/portfolio/yourhobby.png",
      githubUrl: "https://github.com/Sunteang/YourHobby.git",
      liveUrl: "https://your-hobby.vercel.app/",
    },
    {
      title: "Car Garage Management Website",
      description:
        "A website dedicated to a car garage business, showcasing services offered,features sales, rentals, repair services, customer testimonials, and contact information. It aims to attract potential customers and provide them with essential details about the garage.",
      technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      image: "https://serey-sunteang.vercel.app/portfolio/car-garage-web.JPEG",
      githubUrl: "https://github.com/Sunteang/OverRev_CarGarage-Laravel.git",
    },
    {
      title: "PC Shop - Technology E-commerce Website",
      description:
        "PC Shop is a full-featured online computer store that allows customers to purchase computers and accessories with confidence in product quality and service. The platform also provides computer repair and maintenance services, enabling users to submit repair requests and track the progress of their purchases or repairs in real time. Designed as a web-based system, PC Shop focuses on usability, transparency, and a smooth online shopping experience.",
      technologies: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
      image: "https://i.pinimg.com/736x/a5/5b/b9/a55bb903939c3d28db2bb5412032339e.jpg",
      githubUrl: "https://github.com/Sunteang/PC-Shop-Laravel.git",
    },
  ];

  return (
    <PageLayout>
      <div className="container mx-auto">
        <SectionHeader
          title="Projects"
          subtitle="A selection of my recent work and side projects"
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-card border border-border rounded-2xl">
            <p className="font-body text-muted-foreground mb-2">
              Interested in seeing more?
            </p>
            <a
              href="https://github.com/Sunteang"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-xl font-medium text-accent hover:underline"
            >
              View all projects on GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Projects;
