export interface CommentProps {
	text: string;
	replies: any;
	date: string;
	id: number;
}

export interface IconProps {
	iconName: string;
	iconSize: string;
	iconColor: string;
}

export interface CommentDisplayProps {
	comment: CommentProps;
	reply?: boolean;
}

export interface CommentInputProps {
	replyTo?: any;
	replied?: any;
}
