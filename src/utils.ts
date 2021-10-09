export const handleEnterPress = (event: any, func: any) => {
	if (event.key === "Enter") {
		func();
	}
};
