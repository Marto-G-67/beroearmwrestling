import { Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="container py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-primary">Контакти</span>
        <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tight text-foreground">
          Свържи се с <span className="gradient-text">клуба</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Имаш въпрос или искаш да дойдеш на тренировка? Обади се — отговаряме лично.
        </p>

        <a
          href="tel:+359887446670"
          className="mt-10 inline-flex items-center gap-4 glass rounded-2xl px-7 py-5 card-hover border border-primary/30 hover:border-primary transition-colors"
        >
          <div className="h-12 w-12 rounded-xl bg-primary/15 flex items-center justify-center">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div className="text-left">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Телефон
            </div>
            <div className="font-display text-2xl md:text-3xl text-foreground tracking-wide">
              088 744 6670
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
