import { motion } from "framer-motion";
import { Award, Users, Factory, Leaf, Target, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Nous visons la perfection dans chaque détail, de la conception à la livraison.",
  },
  {
    icon: Heart,
    title: "Engagement",
    description: "Un partenariat durable basé sur la confiance et la transparence.",
  },
  {
    icon: Leaf,
    title: "Durabilité",
    description: "L'éco-responsabilité au cœur de notre stratégie industrielle.",
  },
];

const timeline = [
  { year: "2024", title: "Création", description: "Fondation de AKAA-GROUPE à Aného" },
  { year: "2025", title: "Expansion", description: "Ouverture du site de production de 50m²" },
  { year: "2026", title: "Certification", description: "Obtention ISO 9001 et FSC" },
  { year: "2026", title: "Innovation", description: "Lancement de la gamme éco-conçue" },
  { year: "2026", title: "Leadership", description: "200+ clients et 2 ans d'expertise" },
];

const team = [
  { name: "AKOSSE PATRICE", role: "Directeur Général", initials: "AP" },
  { name: "ERIC TON", role: "Directrice Commerciale", initials: "ET" },
  { name: "Thomas Bernard", role: "Directeur Production", initials: "TB" },
  { name: "Claire TAGBA", role: "Responsable DEV", initials: "CT" },
];

const About = () => {
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
                Notre Histoire
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                À propos de AKAA-GROUPE
              </h1>
              <p className="text-lg text-muted-foreground">
                Depuis plus de deux ans , nous accompagnons les marques, les PME et PMI 
                dans la création de leurs emballages premium.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-foreground">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Factory, value: "2+", label: "Années d'expérience" },
                { icon: Users, value: "200+", label: "Clients satisfaits" },
                { icon: Award, value: "ISO 9001", label: "Certification qualité" },
                { icon: Leaf, value: "100%", label: "Recyclable" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" strokeWidth={1.5} />
                  <div className="text-3xl font-bold text-background mb-1">{stat.value}</div>
                  <div className="text-sm text-background/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Notre mission : sublimer vos produits
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    AKAA-GROUPE est né de la passion de ses fondateurs pour les métiers 
                    du papier et du carton. Installés à Kpalimé depuis deux ans, nous avons 
                    développé un savoir-faire unique dans la conception et la fabrication 
                    d'emballages haut de gamme.
                  </p>
                  <p>
                    Notre philosophie : chaque emballage raconte une histoire. Celle de 
                    votre marque, de vos valeurs, de votre engagement qualité. C'est 
                    pourquoi nous accordons une attention particulière à chaque projet, 
                    qu'il s'agisse de 100 ou de 100 000 pièces.
                  </p>
                  <p>
                    Aujourd'hui, AKAA-GROUPE c'est une équipe de 10 collaborateurs passionnés, 
                    un site de production de 50m² équipé de technologies, 
                    et plus de 200 clients qui nous font confiance.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-secondary aspect-[4/3] rounded-sm flex items-center justify-center"
              >
                <div className="text-6xl font-bold text-primary/20">AKAA-GROUPE</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-primary font-medium text-sm tracking-widest uppercase">
                ADN
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                Nos valeurs
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-sm text-center"
                >
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
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
                Parcours
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                Notre histoire
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="text-2xl font-bold text-primary">{item.year}</div>
                      <div className="font-semibold text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                    <div className="w-4 h-4 bg-primary rounded-full relative z-10" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-secondary">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-primary font-medium text-sm tracking-widest uppercase">
                Équipe
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                Direction
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-24 h-24 bg-card rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{member.initials}</span>
                  </div>
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
