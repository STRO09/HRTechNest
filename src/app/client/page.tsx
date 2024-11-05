// app/page.jsx or your main component file
import { HeroParallaxDemo } from "./pages/hero-parallax-demo";
import { ModeToggle } from "../../components/ui/ToggleButtonshadcn";
import { Pack4FeaturesSectionDemo } from "../../components/ui/Pack4FeaturesSection";
import { FeaturesListDemo } from "../../components/ui/FeaturesList";
import Footershadcn from "../../components/ui/footer";

export default function Home() {
  return (
    <div>
      <ModeToggle />
      <HeroParallaxDemo />
      <Pack4FeaturesSectionDemo />
      <FeaturesListDemo />
      <Footershadcn />
    </div>
  );
}
