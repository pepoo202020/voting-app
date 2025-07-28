"use client";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/LanguagueProvider";
import { ArrowLeft, ArrowRight, Palette } from "lucide-react";
import { useRouter } from "next/navigation";

export const SplashScreenBody = () => {
  const { t, language } = useLanguage();
  const navigate = useRouter();
  return (
    <main className="relative z-10 text-center max-w-4xl mx-auto px-6 flex-1 items-center justify-center flex flex-col">
      {/* Animated Icon */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 animate-glow">
          <Palette className="h-10 w-10 text-primary" />
        </div>
      </div>
      {/* Welcome Content */}
      <div className="space-y-3 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
          {t("appName")}
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium text-primary mb-4">
          {t("welcomeMessage")}
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {t("description")}
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 animate-scale-in">
        <Button
          size="lg"
          onClick={() => navigate.push("/artworks")}
          className="text-lg px-8 py-3 h-auto group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            {t("viewArtworks")}
            {language === "en" ? (
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            ) : (
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            )}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary-glow/20 to-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </Button>
      </div>
    </main>
  );
};
