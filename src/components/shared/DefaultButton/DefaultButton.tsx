import { ReactNode, MouseEventHandler } from "react";
import "./DefaultButton.scss";

type defaultButtonType = {
	onClick: MouseEventHandler;
	children?: ReactNode;
	className: string;
	id?: string;
	title?: string;
};

function DefaultButton({
	onClick,
	children,
	className,
	title,
}: defaultButtonType) {
	return (
		<button onClick={onClick} className={className} title={title}>
			{children}
		</button>
	);
}

export { DefaultButton };
