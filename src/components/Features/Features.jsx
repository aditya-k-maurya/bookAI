import './features.css'

const Features = () => {
  return (
		<div className="contain feature">
			<div className="feature-item">
				<div className="feature-logo">
					<img src="/icons/pencil-solid.svg" alt="" />
				</div>
				<h3 className="feature-title">AI-Powered Writing</h3>
				<p className="feature-content">
					Generate high-quality content with advanced AI technology.
				</p>
			</div>
			<div className="feature-item">
				<div className="feature-logo">
					<img src="/icons/book-solid.svg" alt="" />
				</div>
				<h3 className="feature-title">Custom Genere</h3>
				<p className="feature-content">
					Create stories in any genre or blend multiple styles.
				</p>
			</div>
			<div className="feature-item">
				<div className="feature-logo">
					<img src="/icons/download-solid.svg" alt="" />
				</div>
				<h3 className="feature-title">Instant Download</h3>
				<p className="feature-content">
					Get your completed book in various formats instantly.
				</p>
			</div>
			<div className="feature-item">
				<div className="feature-logo">
					<img src="/icons/language-solid.svg" alt="" />
				</div>
				<h3 className="feature-title">Multilingual</h3>
				<p className="feature-content">
					Generate content in multiple languages effortlessly.
				</p>
			</div>
		</div>
	);
}

export default Features