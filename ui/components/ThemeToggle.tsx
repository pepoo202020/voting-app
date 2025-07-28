"use client";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/LanguagueProvider";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      className="transition-all duration-300 hover:bg-secondary/80 hover:scale-110"
      aria-label={theme === "light" ? t("darkMode") : t("lightMode")}
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 transition-transform duration-300" />
      ) : (
        <Sun className="h-5 w-5 transition-transform duration-300" />
      )}
    </Button>
  );
}
