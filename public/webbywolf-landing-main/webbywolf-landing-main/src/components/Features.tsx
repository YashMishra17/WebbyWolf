import { motion } from 'framer-motion';

const items = [
  { 
    title: 'Pixel-perfect', 
    desc: 'Recreate designs exactly with careful spacing and typography.' 
  },
  { 
    title: 'Responsive', 
    desc: 'Mobile-first approach, tested across breakpoints.' 
  },
  { 
    title: 'Animations', 
    desc: 'Smooth, performant transitions using Framer Motion.' 
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-section-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional landing pages built with attention to every detail
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="p-8 bg-background border border-border rounded-xl hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">✨</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-foreground">{item.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
