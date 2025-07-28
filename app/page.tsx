import { PagesLayout } from "@/ui/components/PagesLayout";
import { SplashScreenBody } from "@/ui/pages/splash-screen/SplashScreenBody";
import { SplashScreenHeader } from "@/ui/pages/splash-screen/SplashScreenHeader";

export default function Home() {
  return (
    <PagesLayout>
      <SplashScreenHeader />
      <SplashScreenBody />
    </PagesLayout>
  );
}
