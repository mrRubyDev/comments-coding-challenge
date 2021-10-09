import React from "react";
import Logo from "media/inkitt-logo-white.png";

export default function Setup() {
	return (
		<div className="full-screen" style={{ backgroundColor: "black" }}>
			<div className="big-logo-container">
				<a
					href="https://inkitt.com"
					target="_blank"
					rel="noreferrer"
					className="navbar-text"
				>
					<img src={Logo} alt="Inkitt" height="100%" width="100%" />
				</a>
			</div>
		</div>
	);
}
