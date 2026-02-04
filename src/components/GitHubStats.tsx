import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const GitHubStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-sm">📊</span>
            <h2 className="text-2xl md:text-3xl font-bold">My GitHub Stats</h2>
            <span className="h-px flex-1 bg-border max-w-xs" />
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            {/* GitHub Streak */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center"
            >
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=shohancs&theme=tokyonight&hide_border=true"
                alt="GitHub Streak"
                className="rounded-xl max-w-full"
              />
            </motion.div>

            {/* Snake Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake-dark.svg"
                alt="Snake animation"
                className="max-w-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
