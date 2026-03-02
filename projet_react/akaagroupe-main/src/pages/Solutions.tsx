import { motion } from "framer-motion";
import { Package, Palette, Truck, Recycle, Settings, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const solutions = [
  {
    icon: Palette,
    title: "Conception graphique",
    description: "Notre studio intégré crée l'identité visuelle de vos emballages : maquettes 3D, prototypes et BAT avant production.",
    features: ["Maquettes 3D réalistes", "Prototypes fonctionnels", "Bons à tirer numériques"],
  },
  {
    icon: Package,
    title: "Fabrication sur-mesure",
    description: "De la petite série au grand volume, nous adaptons nos lignes de production à vos besoins spécifiques.",
    features: ["Minimum 100 pièces", "Délais express disponibles", "Contrôle qualité ISO"],
  },
  {
    icon: Settings,
    title: "Personnalisation",
    description: "Impression offset, flexographie, marquage à chaud, gaufrage... Toutes les techniques de personnalisation.",
    features: ["Impression quadri HD", "Dorure et vernis sélectif", "Embossage et débossage"],
  },
  {
    icon: Recycle,
    title: "Éco-conception",
    description: "Nous vous accompagnons dans la transition vers des emballages 100% recyclables et éco-responsables.",
    features: ["Matières certifiées FSC", "Encres végétales", "Analyse cycle de vie"],
  },
  {
    icon: Truck,
    title: "Logistique intégrée",
    description: "Stockage, conditionnement et livraison : une chaîne logistique optimisée pour vos flux.",
    features: ["Stockage déporté", "Livraison J+2  au Togo", "Expédition internationale"],
  },
  {
    icon: Users,
    title: "Accompagnement projet",
    description: "Un chef de projet dédié vous accompagne de la conception à la livraison de vos commandes.",
    features: ["Interlocuteur unique", "Suivi en temps réel", "SAV réactif"],
  },
];

const industries = [
  
];

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <span className="text-primary font-medium text-sm tracking-widest uppercase">
                Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Nos Solutions
              </h1>
              <p className="text-lg text-muted-foreground">
                Un accompagnement complet de la conception à la livraison. 
                AKAA-GROUPE met son expertise au service de votre image de marque.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions grid */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-sm p-8 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-secondary rounded-sm flex items-center justify-center mb-6">
                    <solution.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-secondary">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              
              
              
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-card p-6 rounded-sm text-center hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-primary text-xs font-medium">
                    {industry.count}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-primary font-medium text-sm tracking-widest uppercase">
                Processus
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                Comment ça marche ?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Brief", desc: "Définition de vos besoins et contraintes" },
                { step: "02", title: "Conception", desc: "Maquettes et prototypes validés ensemble" },
                { step: "03", title: "Production", desc: "Fabrication avec contrôle qualité" },
                { step: "04", title: "Livraison", desc: "Expédition dans les délais convenus" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-foreground">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-background mb-4">
                Prêt à lancer votre projet ?
              </h2>
              <p className="text-background/70 mb-8 max-w-xl mx-auto">
                Nos experts sont disponibles pour étudier votre cahier des charges.
              </p>
              <button className="btn-primary px-8 py-4 text-base font-semibold rounded-sm">
                Contactez-nous
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
