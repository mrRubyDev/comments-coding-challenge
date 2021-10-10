import React from "react";
import Logo from "media/inkitt-logo.png";

export default function Navbar() {
	return (
		<div className="navbar">
			<div className="navbar-container">
				<div className="logo-container">
					<a
						href="https://www.inkitt.com/"
						target="_blank"
						rel="noreferrer"
						className="navbar-text"
					>
						<img src={Logo} alt="Inkitt" height="100%" width="100%" />
					</a>
				</div>
				<div className="navbar-text-container">
					<p className="navbar-text" onClick={() => window.location.reload()}>
						Restart
					</p>
					<a
						href="https://www.linkedin.com/in/mateorubinstein/"
						target="_blank"
						rel="noreferrer"
						className="navbar-text"
					>
						More about me
					</a>
				</div>
			</div>
		</div>
	);
}
