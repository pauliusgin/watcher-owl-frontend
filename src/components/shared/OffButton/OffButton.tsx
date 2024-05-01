// import "./OffButton.scss";
import { DefaultButton } from "../DefaultButton/DefaultButton";
import { defaultButtonType } from "../../../types/types";

function OffButton({ onClick, className, ...props }: defaultButtonType) {
	return (
		<DefaultButton onClick={onClick} className={className} {...props}>
			X
		</DefaultButton>
	);
}

export { OffButton };
