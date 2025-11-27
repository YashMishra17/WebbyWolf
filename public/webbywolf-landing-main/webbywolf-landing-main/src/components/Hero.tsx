import { motion } from 'framer-motion';
import NewsletterForm from './NewsletterForm';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-full lg:w-[55%] bg-background relative z-10" 
             style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }} 
        />
        <div className="hidden lg:block flex-1 bg-muted" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] lg:min-h-[700px]">
          {/* Left Content */}
          <div className="py-20">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-[38px] md:text-[48px] lg:text-[52px] leading-tight font-bold tracking-tight2 text-foreground mb-6"
            >
              Build beautiful landing pages — fast.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-[16px] md:text-[18px] leading-relaxed text-muted-foreground mb-8"
            >
              Convert designs into pixel-perfect code. Responsive layouts, smooth animations, and production-ready components. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <NewsletterForm />
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="hidden lg:block relative h-full"
          >
            <div className="absolute inset-0 flex items-center justify-end">
              <div className="w-full h-[600px] bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" 
                  alt="Modern workspace" 
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
