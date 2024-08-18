import React from 'react'
import './working.css'

const Working = () => {
  return (
		<section className="contain">
			<div className="working">
				<h2 className="working-title">How it works</h2>

				<div className="working-item-container">
					<div className="working-item">
						<div className="working-item-logo">
							<img src="./icons/pencil-solid.svg" alt="" />
						</div>
						<div className="working-content">
							<h2 className="working-item-title">Choose Your Genre</h2>
							<p className="working-item-content">
								Select from a wide range of genres or create a custom blend.
							</p>
						</div>
					</div>

					<div className="working-item">
						<div className="working-item-logo">
							<img src="./icons/pencil-solid.svg" alt="" />
						</div>
						<div className="working-content">
							<h2 className="working-item-title">Provide Key Details</h2>
							<p className="working-item-content">
								Input main characters, plot points, or themes to guide the AI.
							</p>
						</div>
					</div>
					<div className="working-item">
						<div className="working-item-logo">
							<img src="./icons/gears-solid.svg" alt="" />
						</div>
						<div className="working-content">
							<h2 className="working-item-title">AI Generation</h2>
							<p className="working-item-content">
								Our advanced AI creates your book based on your inputs.
							</p>
						</div>
					</div>
					<div className="working-item">
						<div className="working-item-logo">
							<img src="./icons/circle-check-solid.svg" alt="" />
						</div>
						<div className="working-content">
							<h2 className="working-item-title">Review and Download</h2>
							<p className="working-item-content">
								Review your generated book and download in your preferred
								format.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Working