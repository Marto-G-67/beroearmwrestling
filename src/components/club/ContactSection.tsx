import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Facebook, Instagram, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Заявката е изпратена!",
        description: "Ще се свържем с теб възможно най-скоро.",
      });
    }, 700);
  };

  return (
    <section id="contact" className="container py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-primary">Контакти</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl tracking-tight text-foreground">
            Свържи се с <span className="gradient-text">клуба</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Имаш въпрос, искаш да дойдеш на тренировка или да поканиш отбора на турнир?
            Пиши ни — отговаряме бързо.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href="#"
              className="flex items-center gap-4 glass rounded-xl px-5 py-4 card-hover"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/15 flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Адрес</div>
                <div className="text-foreground">Стара Загора, България</div>
              </div>
            </a>
            <a
              href="tel:+359"
              className="flex items-center gap-4 glass rounded-xl px-5 py-4 card-hover"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/15 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Телефон</div>
                <div className="text-foreground">+359 (по заявка)</div>
              </div>
            </a>
            <a
              href="mailto:contact@beroe-armwrestling.bg"
              className="flex items-center gap-4 glass rounded-xl px-5 py-4 card-hover"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/15 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Имейл</div>
                <div className="text-foreground">contact@beroe-armwrestling.bg</div>
              </div>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="h-11 w-11 rounded-full glass flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="h-11 w-11 rounded-full glass flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="glass rounded-3xl p-7 md:p-9 border border-primary/30 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Име</Label>
              <Input id="name" name="name" required placeholder="Твоето име" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" name="phone" placeholder="088 000 0000" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Имейл</Label>
            <Input id="email" name="email" type="email" required placeholder="example@mail.bg" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="msg">Съобщение</Label>
            <Textarea
              id="msg"
              name="msg"
              rows={5}
              required
              placeholder="Кажи ни защо искаш да тренираш в „Берое"…"
            />
          </div>
          <Button
            type="submit"
            disabled={sending}
            className="btn-glow w-full bg-gradient-to-r from-primary to-accent text-primary-foreground h-12 tracking-wider"
          >
            <Send className="mr-2 h-4 w-4" />
            {sending ? "Изпращане…" : "Изпрати"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
