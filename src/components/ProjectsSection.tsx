import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, MapPin } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group glass rounded-xl overflow-hidden glow-border gradient-border hover:glow-box transition-all duration-500"
        >
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Smart Nearby Places Recommender
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono mt-1">Featured Project</p>
                </div>
              </div>
              <a
                href="https://smartnearbyplaces.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              A React-based location-aware web application that recommends nearby places using
              OpenStreetMap, distance filtering, and mood-based categorization.
            </p>

            <div className="flex flex-wrap gap-2">
              {["React.js", "Leaflet.js", "OpenStreetMap", "JavaScript", "Overpass API"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 group glass rounded-xl overflow-hidden glow-border gradient-border hover:glow-box transition-all duration-500"
        >
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Skin Leision Classification using Vision Transformers and CNN
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono mt-1">Academic  Project</p>
                </div>
              </div>
              <a
                href="https://github.com/sachitha07/skin-lesion-analyzer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              An AI-powered skin lesion classification system using Vision Transformers (ViT) and CNN to assist in early skin disease detection with high accuracy and explainable predictions.
            </p>

            <div className="flex flex-wrap gap-2">
              {["PyTorch", "Vision Transformers (ViT)", "Deep learning", "Computer Vision", "ISIC 2019 dataset"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 group glass rounded-xl overflow-hidden glow-border gradient-border hover:glow-box transition-all duration-500"
        >
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    Skin Leision Classification using Vision Transformers and CNN
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono mt-1">Academic  Project</p>
                </div>
              </div>
              <a
                href="https://github.com/sachitha07/skin-lesion-analyzer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              An AI-powered skin lesion classification system using Vision Transformers (ViT) and CNN to assist in early skin disease detection with high accuracy and explainable predictions.
            </p>

            <div className="flex flex-wrap gap-2">
              {["PyTorch", "Vision Transformers (ViT)", "Deep learning", "Computer Vision", "ISIC 2019 dataset"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
