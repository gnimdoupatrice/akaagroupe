import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { z } from "zod";
import type { User } from "@supabase/supabase-js";

const quoteSchema = z.object({
  fullName: z.string().trim().min(2, { message: "Le nom doit contenir au moins 2 caractères" }).max(100),
  email: z.string().trim().email({ message: "Email invalide" }).max(255),
  company: z.string().max(100).optional(),
  phone: z.string().max(20).optional(),
  productType: z.string().min(1, { message: "Sélectionnez un type de produit" }),
  quantity: z.string().optional(),
  message: z.string().trim().min(10, { message: "Le message doit contenir au moins 10 caractères" }).max(2000),
});

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    content: "+288 91 01 69 78",
    subtitle: "Du lundi au Dimanche",
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
    content: "123 l'art du packaging",
    subtitle: "97 68 40 30 Aného, Togo",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Du lundi au Dimanche",
    subtitle: "",
  },
];

const productTypes = [
  "Boîtes d'expédition",
  "Sacs shopping",
  "Coffrets premium",
  "Boîtes pliantes",
  "Packaging alimentaire",
  "Étuis & fourreaux",
  "Autre",
];

const Devis = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    productType: "",
    quantity: "",
    message: "",
  });

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          // Pre-fill form with user data
          setTimeout(() => {
            fetchProfile(session.user.id);
          }, 0);
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    const { data } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (data) {
      setFormData((prev) => ({
        ...prev,
        fullName: data.full_name || prev.fullName,
        company: data.company || prev.company,
        phone: data.phone || prev.phone,
      }));
    }

    // Get email from auth
    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (authUser?.email) {
      setFormData((prev) => ({
        ...prev,
        email: authUser.email || prev.email,
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const validated = quoteSchema.parse({
        fullName: formData.fullName,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        productType: formData.productType,
        quantity: formData.quantity,
        message: formData.message,
      });

      const { error } = await supabase.from("quote_requests").insert({
        user_id: user?.id || null,
        full_name: validated.fullName,
        email: validated.email,
        company: validated.company || null,
        phone: validated.phone || null,
        subject: `Demande de devis - ${validated.productType}`,
        message: validated.message,
        product_type: validated.productType,
        quantity: validated.quantity ? parseInt(validated.quantity) : null,
      });

      if (error) {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive",
        });
        return;
      }

      setSubmitted(true);
      toast({
        title: "Demande envoyée !",
        description: "Nous vous répondrons sous 24h.",
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.errors.forEach((error) => {
          if (error.path[0]) {
            fieldErrors[error.path[0] as string] = error.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-16 md:pt-20">
          <section className="py-20 md:py-32 bg-secondary min-h-[calc(100vh-5rem)]">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg mx-auto text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  Demande envoyée !
                </h1>
                <p className="text-muted-foreground mb-8">
                  Merci pour votre demande de devis. Notre équipe commerciale vous 
                  contactera sous 24 heures ouvrées.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/"
                    className="btn-primary px-6 py-3 text-sm font-semibold rounded-sm"
                  >
                    Retour à l'accueil
                  </Link>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        company: "",
                        phone: "",
                        productType: "",
                        quantity: "",
                        message: "",
                      });
                    }}
                    className="btn-outline px-6 py-3 text-sm font-semibold rounded-sm"
                  >
                    Nouvelle demande
                  </button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

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
                Devis Gratuit
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
                Demander un devis
              </h1>
              <p className="text-lg text-muted-foreground">
                Décrivez votre projet et recevez une proposition personnalisée 
                sous 24 heures. Nos experts vous accompagnent.
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

        {/* Form */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {!user && (
                  <div className="bg-primary/5 border border-primary/20 rounded-sm p-4 mb-8">
                    <p className="text-sm text-foreground">
                      <Link to="/auth" className="text-primary font-medium hover:underline">
                        Connectez-vous
                      </Link>{" "}
                      pour pré-remplir le formulaire et suivre vos demandes.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-secondary border rounded-sm focus:outline-none focus:border-primary transition-colors ${
                          errors.fullName ? "border-destructive" : "border-border"
                        }`}
                        placeholder="Eric Kpatcha"
                      />
                      {errors.fullName && (
                        <p className="text-destructive text-xs mt-1">{errors.fullName}</p>
                      )}
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
                        className={`w-full px-4 py-3 bg-secondary border rounded-sm focus:outline-none focus:border-primary transition-colors ${
                          errors.email ? "border-destructive" : "border-border"
                        }`}
                        placeholder="erickpatcha@gmail.com"
                      />
                      {errors.email && (
                        <p className="text-destructive text-xs mt-1">{errors.email}</p>
                      )}
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

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Type de produit *
                      </label>
                      <select
                        name="productType"
                        value={formData.productType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-secondary border rounded-sm focus:outline-none focus:border-primary transition-colors ${
                          errors.productType ? "border-destructive" : "border-border"
                        }`}
                      >
                        <option value="">Sélectionnez un produit</option>
                        {productTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.productType && (
                        <p className="text-destructive text-xs mt-1">{errors.productType}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Quantité estimée
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        min="1"
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
                        placeholder="Ex: 10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 bg-secondary border rounded-sm focus:outline-none focus:border-primary transition-colors resize-none ${
                        errors.message ? "border-destructive" : "border-border"
                      }`}
                      placeholder="Dimensions, matières, finitions souhaitées, délais..."
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs mt-1">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary py-4 text-base font-semibold rounded-sm inline-flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? "Envoi en cours..." : "Envoyer ma demande de devis"}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Devis;
