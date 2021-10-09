export interface CommentProps {
	text: string;
	replies: any;
	date: string;
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
