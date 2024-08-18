import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import Features from "@/components/Features/Features";
import Working from "@/components/Work/Working";
import Roadmap from "@/components/Work/Roadmap"; 
import Samples from "@/components/Samples/Samples";

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
      </main>
      <Footer/>
		</div>
	);
}
