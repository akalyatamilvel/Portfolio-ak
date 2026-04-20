import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Brain, Cpu, Database, Code2, Zap, Network } from "lucide-react";

const floatingIcons = [
  { Icon: Brain, x: "10%", y: "20%", delay: 1, duration: 1 },
  { Icon: Cpu, x: "85%", y: "15%", delay: 1, duration: 1 },
  { Icon: Database, x: "75%", y: "70%", delay: 2, duration: 1 },
  { Icon: Code2, x: "15%", y: "75%", delay: 1, duration: 1 },
  { Icon: Zap, x: "50%", y: "10%", delay: 1.5, duration: 1 },
  { Icon: Network, x: "90%", y: "50%", delay: 3, duration: 1 },
];

const titles = [
  "AI Engineer",
  "Machine Learning Enthusiast",
  "System Builder",
];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-accent/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "3s" }} />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay, duration }, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/15"
          style={{ left: x, top: y }}
          animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
          transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
        >
          <Icon size={32} />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">
            &lt; Hello World /&gt;
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
            I'm{" "}
            <span className="gradient-text">
              Akalya
            </span>
            <br />
            <span className="text-foreground">Tamilvel Senbakam</span>
          </h1>

          <div className="h-10 flex items-center justify-center mb-6">
            <span className="font-mono text-lg md:text-xl text-primary">
              {text}
              <span className="border-r-2 border-primary ml-1 animate-[typing-cursor_1s_infinite]">&nbsp;</span>
            </span>
          </div>

          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            AI and Machine Learning student passionate about building intelligent systems,
            scalable APIs, and real-world web applications.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-lg border border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={16} />
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-muted-foreground" size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
