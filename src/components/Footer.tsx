import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* Main footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <span className="text-2xl font-bold text-footer-foreground tracking-tight">
                AKAA-<span className="text-primary">GROUPE</span>
              </span>
            </Link>
            <p className="text-footer-muted text-sm mt-4 leading-relaxed">
              Expert en packaging carton et papier depuis 2 ans. 
              Fabrication Togolaise, qualité premium.
            </p>
            <div className="flex gap-4 mt-6">
              {[Facebook, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-footer-muted/20 rounded-sm flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4 text-footer-foreground" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-footer-foreground font-semibold mb-4">Produits</h4>
            <ul className="space-y-3">
              {[, "Sacs shopping", "Packging Kraft", "Boîtes cadeaux", "Sac triangle ", "Sac de courses", "Sac personnalisé"].map((item) => (
                <li key={item}>
                  <Link to="/produits" className="text-footer-muted text-sm hover:text-footer-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-footer-foreground font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/a-propos" className="text-footer-muted text-sm hover:text-footer-foreground transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-footer-muted text-sm hover:text-footer-foreground transition-colors">
                  Nos solutions
                </Link>
              </li>
              {["Développement durable", "Carrières", "Presse"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-footer-muted text-sm hover:text-footer-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-footer-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-footer-muted text-sm">
                  123 L'art du packaging<br />
                  97 68 40 30  Kpalimé, Togo
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+228  91 01 69 78" className="text-footer-muted text-sm hover:text-footer-foreground transition-colors">
                  +228  91 01 69 78
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:akgroupe0024@gmail.com" className="text-footer-muted text-sm hover:text-footer-foreground transition-colors">
                  akgroupe0024@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-footer-muted/20">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Legal links */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-footer-muted">
              <a href="#" className="hover:text-footer-foreground transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-footer-foreground transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-footer-foreground transition-colors">
                
              </a>
            </div>

            {/* Payment methods */}
            <div className="flex items-center gap-4">
              <span className="text-footer-muted text-xs">Paiements sécurisés</span>
              <div className="flex items-center gap-2">
                {["YAS", "Flooz"].map((method) => (
                  <div
                    key={method}
                    className="w-10 h-6 bg-footer-muted/30 rounded flex items-center justify-center text-xs text-footer-foreground font-medium"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t border-footer-muted/10">
            <p className="text-footer-muted text-xs">
              © 2026 AKAA-GROUPE. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
