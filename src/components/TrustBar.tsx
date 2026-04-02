import { motion } from "framer-motion";
import { Package, MapPin, Truck, Headphones } from "lucide-react";

const trustItems = [
  {
    icon: Package,
    title: "Échantillons ",
    description: "Testez avant de commander",
  },
  {
    icon: MapPin,
    title: "Production locale",
    description: "Fabrication Tgolaise",
  },
  {
    icon: Truck,
    title: "Livraison",
    description: "Expédition nationale",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Assistance dédiée",
  },
];

const TrustBar = () => {
  return (
    <section className="trust-bar py-6">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-sm flex items-center justify-center">
                <item.icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
