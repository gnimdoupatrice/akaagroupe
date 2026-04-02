import { motion } from "framer-motion";
import { Factory, Leaf, Award, Users } from "lucide-react";

const stats = [
  { icon: Factory, value: "2+", label: "Années d'expertise" },
  { icon: Users, value: "200+", label: "Clients satisfaits" },
  { icon: Award, value: "ISO 9001", label: "Certifié qualité" },
  { icon: Leaf, value: "100%", label: "Recyclable" },
];

const Expertise = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Notre Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Le savoir-faire Togolais au service de votre image
            </h2>
            <p className="text-muted-foreground mb-6">
              Depuis plus de 2 ans,  AKAA-GROUPE accompagne les marques les PME et les PMI les plus exigeantes 
              dans la conception de leurs emballages. Notre maîtrise 
              et notre engagement de qualité font de nous le partenaire privilégié des acteurs 
              du luxe, de la cosmétique et de l'agroalimentaire.
            </p>
            <p className="text-muted-foreground mb-8">
              Chaque projet bénéficie d'un accompagnement personnalisé, de la conception 
              graphique jusqu'à la livraison, avec un engagement de délais et de qualité.
            </p>
            <button className="btn-primary px-6 py-3 text-sm font-semibold rounded-sm">
              En savoir plus
            </button>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-sm text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
