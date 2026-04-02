import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-foreground">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-background mb-4">
            Restez informé de nos nouveautés
          </h2>
          <p className="text-background/70 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières innovations 
            et offres exclusives.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 bg-background/10 border border-background/20 text-background placeholder:text-background/50 rounded-sm focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="btn-primary px-6 py-3 rounded-sm font-semibold inline-flex items-center justify-center gap-2"
            >
              S'inscrire
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
