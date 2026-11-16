import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, MessageCircle, Handshake } from "lucide-react";
import { useT } from "@/lib/i18n";
import { LangSwitcher } from "@/components/LangSwitcher";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "दलाल — Property network for brokers" },
      { name: "description", content: "Brokers share property photos & videos, chat, and lock deals. English, हिन्दी, ગુજરાતી, मराठी." },
      { property: "og:title", content: "दलाल — Property network for brokers" },
      { property: "og:description", content: "Brokers share property photos & videos, chat, and lock deals." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useT();
  return (
    <div className="min-h-screen bg-hero text-maroon-foreground">
      <header className="mx-auto flex max-w-5xl items-center justify-between p-5">
        <span className="font-display text-4xl">दलाल</span>
        <div className="text-foreground"><LangSwitcher /></div>
      </header>
      <main className="mx-auto max-w-5xl px-5 pb-16 pt-10 md:pt-20">
        <h1 className="font-display text-6xl leading-tight md:text-8xl">दलाल</h1>
        <p className="mt-3 text-2xl font-semibold md:text-3xl">{t("tagline")}</p>
        <p className="mt-4 max-w-xl text-lg opacity-90">{t("intro")}</p>
        <Button asChild size="lg" className="mt-8 h-14 px-8 text-lg">
          <Link to="/auth">{t("login")}</Link>
        </Button>
        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { i: Camera, k: "post" as const },
            { i: MessageCircle, k: "messages" as const },
            { i: Handshake, k: "dealDone" as const },
          ].map(({ i: Icon, k }) => (
            <div key={k} className="rounded-2xl bg-card/10 p-5 backdrop-blur">
              <Icon className="h-8 w-8 text-primary" />
              <div className="mt-2 text-xl font-semibold">{t(k)}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
