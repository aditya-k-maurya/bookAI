import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import Features from "@/components/Features/Features";
import Working from "@/components/Work/Working";
import Roadmap from "@/components/Work/Roadmap"; 
import Samples from "@/components/Samples/Samples";
import StayUpdated from "@/components/StayUpdated/StayUpdated";
import ModeSwitch from "@/components/ModeSwitcher";

export default function Home() {
  return (
		<div>
			<NavBar />
			<main>
        <Hero />
        <Features />
        <Working />
        <Samples />
        <Roadmap />
        <StayUpdated />
      </main>
      <ModeSwitch/>
		</div>
	);
}
