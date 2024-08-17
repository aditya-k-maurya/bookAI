import React from 'react'
import './hero.css'

const Hero = () => {
  return (
		<section className="hero contain">
			<h1 className="hero-title">
				Explore the Possibilities of <span>AI Book Writing</span> with BookAI
			</h1>

			<p className='hero-content'>
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
      
      <div className="hero-img relative">
        <img className='hero-sample' src="/assets/sample.png" alt="" />

        <div className="hero-img-top">
          <div className="nav-circle "></div>
          <img src="/assets/sample1.png" alt="" />
        </div>

        <div className="hero-complete">
          <div className="nav-circle "></div>
          <p>Chapter Compelete</p>
        </div>
      </div>
		</section>
	);
}

export default Hero