import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import NavBar from "@/components/NavBar/NavBar";
import Features from "@/components/Features/Features";

export default function Home() {
  return (
		<div>
			<NavBar />
			<main>
        <Hero />
        <Features />
      </main>
      <Footer/>
		</div>
	);
}
