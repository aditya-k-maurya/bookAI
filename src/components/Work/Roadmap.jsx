import React from "react";
import "./working.css";

const Roadmap = () => {
	return (
		<section className="contain">
			<div className="working">
				<h2 className="working-title">Roadmap</h2>

				<div className="working-item-container">
					<div className="working-item">
						<div className="working-item-logo">
							<img src="./icons/user-solid.svg" alt="" />
						</div>
						<div className="working-content">
							<h2 className="working-item-title">
								Advanced Character Development
							</h2>
							<p className="working-item-content">
								AI-powered tool for creating deep, complex characters.
							</p>
						</div>
					</div>

					<div className="working-item">
						<div className="working-item-logo">
							<img src="./icons/shop-solid.svg" alt="" />
						</div>
						<div className="working-content">
							<h2 className="working-item-title">
								E-book Platform Integration
							</h2>
							<p className="working-item-content">
								Seamless publishing to popular e-book platforms.
							</p>
						</div>
					</div>
					<div className="working-item">
						<div className="working-item-logo">
							<img src="./icons/people-roof-solid.svg" alt="" />
						</div>
						<div className="working-content">
							<h2 className="working-item-title">Collaborative Writing</h2>
							<p className="working-item-content">
								Co-create stories with other authors or AI assistants.
							</p>
						</div>
					</div>
					<div className="working-item">
						<div className="working-item-logo">
							<img src="./icons/pencil-solid.svg" alt="" />
						</div>
						<div className="working-content">
							<h2 className="working-item-title">AI Cover Art Generation</h2>
							<p className="working-item-content">
								Create stunning book covers with AI-generated art.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Roadmap;
