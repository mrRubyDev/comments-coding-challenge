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
			colors={["#A3A948", "#EDB92E", "#F85931", "#CE1836", "#009989"]}
		/>
	);
}
