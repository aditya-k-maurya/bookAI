'use client'
import React from 'react'
import './navbar.css'
import Link from 'next/link'

	function handleClick () {
		const navMobile = document.querySelector(".nav-mobile");

		navMobile.style.left = "0px"
}
	
	function handleClose () {
		const navMobile = document.querySelector(".nav-mobile");


		navMobile.style.left = "-100%"
	}

const NavBar = () => {

	return (
		<>
			<section className="nav">
				<div className="nav-container">
					<div className="nav-logo-section">
						<div className="nav-circle"></div>
						<div className="nav-logo">
							<img src="/assets/logo.png" alt="logo" />
							<h2 className="logo-text">BookAI</h2>
						</div>
					</div>
					<div className="nav-links">
						<Link href="/" className="nav-link">
							Features
						</Link>
						<Link href="/" className="nav-link">
							How it works
						</Link>
						<Link href="/" className="nav-link">
							Raodmap
						</Link>
						<Link href="/" className="nav-link">
							API
						</Link>
						<Link href="/" className="nav-link">
							Price
						</Link>
						<Link href="/" className="nav-link">
							Models
						</Link>
						<Link href="/" className="nav-link nav-login">
							Login/ Sign Up
						</Link>
					</div>

					<div className="nav-menu" onClick={handleClick}>
						<img src="/icons/bars-solid.svg" alt="" />
					</div>
				</div>
			</section>

			<div className="nav-mobile">
				<div className="nav-mobile-container">
					<Link href="/" className="nav-link">
						Features
					</Link>
					<Link href="/" className="nav-link">
						How it works
					</Link>
					<Link href="/" className="nav-link">
						Raodmap
					</Link>
					<Link href="/" className="nav-link">
						API
					</Link>
					<Link href="/" className="nav-link">
						Price
					</Link>
					<Link href="/" className="nav-link">
						Models
					</Link>
					<Link href="/" className="nav-link nav-login">
						Login/ Sign Up
					</Link>
				</div>
				<div className="nav-close" onClick={handleClose}>
					<img src="/icons/xmark-solid.svg" alt="" />
				</div>
			</div>
		</>
	);
}

export default NavBar