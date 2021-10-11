import React from "react";
import inkitt from "media/inkitt-logo-white.png";

export default function SplashScreen() {
	return (
		<div
			className="full-screen"
			style={{ justifyContent: "center", backgroundColor: "black" }}
		>
			<img id="splash-img" alt="Inkitt Logo" src={inkitt} />
		</div>
	);
}
