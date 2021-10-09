import React from "react";
import {
	AiOutlineComment,
	AiOutlineArrowDown,
	AiOutlineArrowUp,
	AiOutlineShareAlt,
	AiOutlineSend,
	AiOutlineEdit,
} from "react-icons/ai";
import { BsReplyAll } from "react-icons/bs";
import { IconProps } from "Types";

export default function Icon({ iconName, iconSize, iconColor }: IconProps) {
	if (iconName === "comments")
		return <AiOutlineComment size={iconSize} color={iconColor} />;
	else if (iconName === "send")
		return <AiOutlineSend size={iconSize} color={iconColor} />;
	else if (iconName === "up")
		return <AiOutlineArrowUp size={iconSize} color={iconColor} />;
	else if (iconName === "down")
		return <AiOutlineArrowDown size={iconSize} color={iconColor} />;
	else if (iconName === "share")
		return <AiOutlineShareAlt size={iconSize} color={iconColor} />;
	else if (iconName === "edit")
		return <AiOutlineEdit size={iconSize} color={iconColor} />;
	else return <BsReplyAll size={iconSize} color={iconColor} />;
}
