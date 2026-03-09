import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin, Code, Trophy, Terminal } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:akalya@example.com", text: "akalya@example.com" },
  { icon: Phone, label: "Phone", href: "tel:+910000000000", text: "+91 XXXXXXXXXX" },
  { icon: Github, label: "GitHub", href: "https://github.com/", text: "github.com/akalya" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/", text: "linkedin.com/in/akalya" },
  { icon: Code, label: "LeetCode", href: "https://leetcode.com/", text: "leetcode.com/akalya" },
  { icon: Trophy, label: "CodeChef", href: "https://codechef.com/", text: "codechef.com/akalya" },
  { icon: Terminal, label: "HackerRank", href: "https://hackerrank.com/", text: "hackerrank.com/akalya" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-xl p-5 glow-border flex items-center gap-4 hover:border-primary/30 hover:glow-box transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <link.icon size={18} className="text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{link.label}</p>
                <p className="text-sm text-foreground truncate">{link.text}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground text-sm font-mono">
            &copy; 2026 Akalya Tamilvel Senbakam. Built with passion & code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
