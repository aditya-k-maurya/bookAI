'use client'
import React, { useState } from "react";
import "./stayupdated.css";

const StayUpdated = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!email) {
			alert("Please enter an email address.");
			return;
		}

		try { 
			// api calls to store email into database or verifying email.
		} catch (error) {
			console.error("Error submitting email:", error);
			alert("An error occurred. Please try again later.");
		}
	};

	return (
		<section className="contain">
			<div className="stay-updated">
				<h2 className="updated-title">Stay Updated</h2>
				<p className="updated-content">
					Subscribe to our newsletter for the latest AI writing tips and BookAI
					updates.
				</p>

				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Email"
            value={email}
            className="updated-input"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<button type="submit" className="updated-submit" >
						Subscribe
					</button>
				</form>
			</div>
		</section>
	);
};

export default StayUpdated;
