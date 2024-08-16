import React from 'react'
import './hero.css'

const Hero = () => {
  return (
		<section className="hero contain">
			<h1 className="hero-content">
				Explore the Possibilities of <span>AI Book Writing</span> with BookAI
			</h1>

			<p>
				Unleash the power of AI to create captivating books in minutes.
				Download, Distribute wherever you want. Generate unlimited free books
			</p>

			<div className="hero-buttons flex justify-center gap-1 mb-4">
				<a className="button">Get Started</a>
				<a className="button">Get API Access</a>
			</div>

			<div className="hero-alert">
				Attention:TryBookAI has been acquired by Indicus AI. Indicus LLM will be
				used for text and image generation
			</div>
		</section>
	);
}

export default Hero