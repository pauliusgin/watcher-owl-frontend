import "./OffButton.scss";
import { useUser } from "../../../hooks/useUser";

function OffButton() {
	const { setUserMenuVisibility } = useUser();

	function turnVisibilityOff() {
		setUserMenuVisibility(false);
	}

	return (
		<button onClick={turnVisibilityOff} className="off__button">
			<div className="off__button_inside">
				<p className="off__button_inside-x">X</p>
			</div>
		</button>
	);
}

export { OffButton };
