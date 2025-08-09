import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  const handleContactClick = () => {
    const subject = encodeURIComponent("Portfolio inquiry");
    window.location.href = `mailto:asapoorv8@gmail.com?subject=${subject}`;
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight font-bodyCondensed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.12, 0, 0.39, 0] }}
        >
          Let's Connect
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-bodyCondensed tracking-wide"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.12, 0, 0.39, 0] }}
        >
          Have a project in mind or just want to say hello? Feel free to reach out!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.12, 0, 0.39, 0] }}
        >
          <Button
            onClick={handleContactClick}
            size="lg"
            className="bg-hero-accent hover:bg-hero-accent/90 text-hero-accent-foreground px-8 py-3 text-base font-medium font-bodyCondensed tracking-wide"
          >
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;