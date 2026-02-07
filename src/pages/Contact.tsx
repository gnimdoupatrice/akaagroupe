import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    content: "+228  91 01 69 78",
    subtitle: "Du lundi a Dimanche",
  },
  {
    icon: Mail,
    title: "Email",
    content: "akgroupe0024@gmail.com",
    subtitle: "Réponse sous 24h",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "123 L'art du packaging",
    subtitle: "97 68 40 30 Kpalimé, Togo",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Du lundi a Dimanche",
    subtitle: "Réponse sous 24h",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                Contact
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Parlons de votre projet
              </h1>
              <p className="text-lg text-muted-foreground">
                Notre équipe est à votre disposition pour répondre à toutes vos questions 
                et vous accompagner dans la réalisation de vos projets packaging.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact info cards */}
        <section className="py-12 bg-background border-b border-border">
          <div className="section-container">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-sm border border-border"
                >
                  <item.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-foreground font-medium">{item.content}</p>
                  <p className="text-muted-foreground text-xs mt-1">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form + Map */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Envoyez-nous un message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="jean@entreprise.fr"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="Nom de l'entreprise"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="+228 91 01 69 78"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Sujet *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="echantillon">Demande d'échantillons</option>
                      <option value="partenariat">Proposition de partenariat</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-sm focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary px-8 py-4 text-base font-semibold rounded-sm inline-flex items-center gap-2"
                  >
                    Envoyer le message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-foreground">
                  Nous trouver
                </h2>
                <div className="bg-secondary aspect-[4/3] rounded-sm flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-muted to-secondary" />
                  <div className="relative text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" strokeWidth={1} />
                    <p className="font-semibold text-foreground">AKAA-GROUPE</p>
                    <p className="text-sm text-muted-foreground">123 L'art du packaging</p>
                    <p className="text-sm text-muted-foreground">+228 97 68 40 30 Kpalimé, Togo</p>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-sm border border-border">
                  <h3 className="font-semibold text-foreground mb-4">             AKAA GROUPE LA REFFERENCE DU PACKAGING BIO</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    
                   
                    
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-foreground mt-3">
                Questions fréquentes
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: "Quel est le minimum de commande ?",
                  a: "Nous n'avons pas de  minimum de commande . Pour les produits sur-mesure, contactez-nous pour étudier votre projet.",
                },
                {
                  q: "Quels sont les délais de production ?",
                  a: "Les délais varient de 5 à 15 jours ouvrés selon la complexité du produit. Des options express sont disponibles sur demande.",
                },
                {
                  q: "Proposez-vous des échantillons ?",
                  a: "Oui, nous envoyons  des échantillons de notre gamme standard. Pour les produits personnalisés, un prototype payant peut être réalisé.",
                },
                {
                  q: "Livrez-vous partout au togo ?",
                  a: "Oui, nous livrons sur le plan national. Contactez-nous pour un devis de transport personnalisé.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-card p-6 rounded-sm"
                >
                  <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
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

export default Contact;
