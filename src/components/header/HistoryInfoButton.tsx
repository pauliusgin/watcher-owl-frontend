import "./HistoryInfoButton.scss";
import { Button } from "../shared/Button.tsx";
import { historyInfoAction } from "../../utils/historyInfoUtils.ts";

const HistoryInfoButton = () => {
	return (
		<Button
			onClick={historyInfoAction}
			className="user__history_button button"
			title="User history"
		>
			Istorija
		</Button>
	);
};

export { HistoryInfoButton };
