import { ReactNode, MouseEventHandler } from "react";
import "./Button.scss";

type tButtonProps = {
	onClick: MouseEventHandler;
	children: ReactNode;
	className: string;
	title: string;
};

function Button({ onClick, children, className, title }: tButtonProps) {
	return (
		<button onClick={onClick} className={className} title={title}>
			{children}
		</button>
	);
}

export { Button };
