"use client";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/LanguagueProvider";

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className="transition-all duration-300 hover:bg-secondary/80 hover:scale-105 gap-2"
      aria-label={t("language")}
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === "en" ? "العربية" : "English"}
      </span>
    </Button>
  );
}
