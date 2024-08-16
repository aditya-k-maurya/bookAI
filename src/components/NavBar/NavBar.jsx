import React from 'react'
import './navbar.css'
import Link from 'next/link'

const NavBar = () => {
  return (
		<div className="nav">
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
					<Link href="/" className="nav-link">
						Login/ Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
}

export default NavBar