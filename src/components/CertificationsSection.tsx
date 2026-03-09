import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const certs = [
  "Google AI-ML Internship",
  "AWS Foundations of Prompt Engineering",
  "UiPath Automation Development",
  "Accenture Data Analytics and Visualization",
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-5 glow-border flex items-center gap-4 gradient-border"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Award size={20} className="text-accent" />
              </div>
              <p className="text-sm font-medium text-foreground">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
