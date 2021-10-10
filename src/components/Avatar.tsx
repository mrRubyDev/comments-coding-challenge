import React from "react";
import Avatar from "boring-avatars";
import { AvatarIconProps } from "Types";

export default function AvatarIcon({ username }: AvatarIconProps) {
	console.log(username);
	return (
		<Avatar
			size={40}
			name={username}
			variant="beam"
			colors={["#6F5846", "#A95A52", "#E35B5D", "#F18052", "#FFA446"]}
		/>
	);
}
