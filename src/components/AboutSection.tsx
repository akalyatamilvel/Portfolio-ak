import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Sparkles, Code } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                I am a B.Tech Computer Science Engineering student specializing in Artificial Intelligence
                and Machine Learning at SRM Institute of Science and Technology, Trichy with a CGPA of 9.03.
                I enjoy designing intelligent applications, exploring human–AI interaction, and building
                scalable software systems.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: GraduationCap, label: "CGPA 9.03", sub: "SRM IST, Trichy" },
                { icon: Sparkles, label: "AI & ML", sub: "Specialization" },
                { icon: Code, label: "Full Stack", sub: "Web Development" },
              ].map(({ icon: Icon, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="glass rounded-lg p-4 glow-border flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
