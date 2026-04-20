import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative pl-8 border-l-2 border-primary/30"
        >
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary glow-box" />
          <div className="glass rounded-xl p-6 glow-border">
            <div className="flex items-center gap-3 mb-3">
              <Briefcase size={18} className="text-primary" />
              <h3 className="text-lg font-bold text-foreground">Node.js Intern</h3>
            </div>
            <p className="text-primary font-mono text-sm mb-3">Sparkout Tech Solutions, Coimbatore, Tamil Nadu</p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Built real-time APIs using Node.js and MongoDB and collaborated with development teams using Git.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
