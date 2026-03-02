import { motion } from "framer-motion";
import { ArrowRight, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  {
    category: "Boîtes d'expédition",
    items: [
      { name: "Caisse américaine", description: "Double cannelure, haute résistance", price: "À partir de 0.85fcfa" },
      { name: "Boîte postale", description: "Format optimisé Colissimo", price: "À partir de 0.65fcfa" },
      { name: "Boîte e-commerce", description: "Fermeture adhésive sécurisée", price: "À partir de 0.95fcfa" },
    ],
    color: "hsl(30 30% 75%)",
  },
  {
    category: "Sacs Shopping",
    items: [
      { name: "Sac kraft poignées torsadées", description: "Papier 110g recyclable", price: "À partir de 0.45fcfa" },
      { name: "Sac luxe mat", description: "Pelliculage soft-touch", price: "À partir de 1.20€" },
      { name: "Sac boutique personnalisé", description: "Impression quadri", price: "À partir de 0.75fcfa" },
    ],
    color: "hsl(35 25% 65%)",
  },
  {
    category: "Coffrets Premium",
    items: [
      { name: "Coffret magnétique", description: "Fermeture aimantée invisible", price: "À partir de 4.50fcfa" },
      { name: "Écrin rigide", description: "Garnissage mousse sur-mesure", price: "À partir de 6.80fcfa" },
      { name: "Coffret cloche", description: "Finition gainée luxe", price: "À partir de 8.50fcfa" },
    ],
    color: "hsl(0 0% 25%)",
  },
  {
    category: "Boîtes Pliantes",
    items: [
      { name: "Étui carton compact", description: "Montage automatique", price: "À partir de 0.35fcfa" },
      { name: "Boîte à fenêtre", description: "Fenêtre PET transparent", price: "À partir de 0.55fcfa" },
      { name: "Boîte tiroir", description: "Ouverture coulissante", price: "À partir de 0.75fcfa" },
    ],
    color: "hsl(0 0% 92%)",
  },
  {
    category: "Packaging Alimentaire",
    items: [
      { name: "Boîte pâtisserie", description: "Contact alimentaire certifié", price: "À partir de 0.40fcfa" },
      { name: "Coffret traiteur", description: "Étanche et isotherme", price: "À partir de 1.80fcfa" },
      { name: "Barquette carton", description: "Compostable", price: "À partir de 0.25fcfa" },
    ],
    color: "hsl(25 35% 70%)",
  },
  {
    category: "Étuis & Fourreaux",
    items: [
      { name: "Fourreau coulissant", description: "Pour coffrets et flacons", price: "À partir de 0.90fcfa" },
      { name: "Étui cosmétique", description: "Finition vernis sélectif", price: "À partir de 1.10fcfa" },
      { name: "Manchon imprimé", description: "Habillage personnalisé", price: "À partir de 0.50fcfa" },
    ],
    color: "hsl(0 0% 40%)",
  },
];

const Products = () => {
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
                Catalogue
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Nos Produits
              </h1>
              <p className="text-lg text-muted-foreground">
                Découvrez notre gamme complète de solutions d'emballage en carton et papier. 
                Tous nos produits sont personnalisables et disponibles en petites et grandes séries.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter bar */}
        

        {/* Product categories */}
        <section className="py-16 bg-background">
          <div className="section-container">
            <div className="space-y-16">
              {products.map((category, catIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="group bg-card rounded-sm overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer"
                      >
                        <div 
                          className="aspect-[4/3] relative"
                          style={{ backgroundColor: category.color }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-16 bg-white/30 rounded-sm transform rotate-6 group-hover:rotate-0 transition-transform duration-500" />
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.description}
                          </p>
                          <p className="text-primary font-semibold text-sm mt-3">
                            {item.price}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-secondary">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Besoin d'un produit sur-mesure ?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Notre équipe technique vous accompagne dans la conception de vos emballages personnalisés.
              </p>
              <button className="btn-primary px-8 py-4 text-base font-semibold rounded-sm">
                Demander un devis gratuit
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
