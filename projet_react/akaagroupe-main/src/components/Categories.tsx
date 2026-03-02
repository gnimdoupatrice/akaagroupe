import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  imageColor: string;
  delay?: number;
}

const CategoryCard = ({ title, description, imageColor, delay = 0 }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="category-card group cursor-pointer"
    >
      <div 
        className="aspect-[4/3] relative overflow-hidden"
        style={{ backgroundColor: imageColor }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-white/20 rounded-sm transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />
          <div className="absolute w-20 h-16 bg-white/30 rounded-sm transform -rotate-6 group-hover:rotate-3 transition-transform duration-500" />
        </div>
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        
      </div>
    </motion.div>
  );
};

const categories = [
  {
    title: "Boîtes d'expédition",
    description: "Solutions de protection robustes pour vos envois e-commerce et logistique.",
    imageColor: "hsl(30 30% 75%)",
  },
  {
    title: "Sacs Shopping",
    description: "Sacs en papier kraft et luxe personnalisables pour le retail.",
    imageColor: "hsl(35 25% 65%)",
  },
  {
    title: "Coffrets Premium",
    description: "Écrins rigides haut de gamme pour sublimer vos produits.",
    imageColor: "hsl(0 0% 25%)",
  },
  {
    title: "Boîtes Pliantes",
    description: "Emballages carton sur-mesure pour l'industrie et le commerce.",
    imageColor: "hsl(0 0% 95%)",
  },
  {
    title: "Packaging Alimentaire",
    description: "Solutions certifiées contact alimentaire pour la restauration.",
    imageColor: "hsl(25 35% 70%)",
  },
  {
    title: "Étuis & Fourreaux",
    description: "Habillages élégants pour cosmétiques et produits de luxe.",
    imageColor: "hsl(0 0% 40%)",
  },
];

const Categories = () => {
  return (
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
            Nos Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Glossaire du packaging
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explorez notre gamme complète de solutions d'emballage en carton papier, et bio
            conçues pour répondre aux exigences des marques premium.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.title}
              {...category}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="btn-outline px-8 py-4 text-base font-semibold rounded-sm inline-flex items-center gap-2">
            C'est maintenant ou jamais
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
