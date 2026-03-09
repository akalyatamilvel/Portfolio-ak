import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-xl p-8 glow-border gradient-border"
        >
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <GraduationCap size={28} className="text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                SRM Institute of Science and Technology
              </h3>
              <p className="text-primary font-mono text-sm mb-2">
                B.Tech CSE – Artificial Intelligence and Machine Learning
              </p>
              <p className="text-muted-foreground text-sm">
                CGPA: <span className="text-foreground font-semibold">9.03</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
