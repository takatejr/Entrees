import React, { memo } from "react";
import { Button } from "@mui/material";

export type ButtonProps = {
	size: "small" | "medium" | "large";
	onClick: () => void;
	text: string;
	isDisabled: (...args: unknown[]) => boolean;
};

export const WrappedButton = memo<ButtonProps>(({ size, onClick, text, isDisabled }) => {
	return (
		<Button variant="contained" size={size} onClick={onClick} disabled={isDisabled()}>
			{text}
		</Button>
	);
});

WrappedButton.displayName = "WrappedButton";
