import { LanguageToggle } from "@/ui/components/LangugaeToggle";
import { ThemeToggle } from "@/ui/components/ThemeToggle";

export const SplashScreenHeader = () => {
  return (
    <header className="sticky inset-0 flex items-center gap-3 z-20">
      <ThemeToggle />
      <LanguageToggle />
    </header>
  );
};
