import "./DefaultButton.scss";
import { defaultButtonType } from "../../../types/types";

function DefaultButton({
	onClick,
	children,
	className,
	title,
	type,
}: defaultButtonType) {
	return (
		<button onClick={onClick} className={className} title={title} type={type}>
			{children}
		</button>
	);
}

export { DefaultButton };
