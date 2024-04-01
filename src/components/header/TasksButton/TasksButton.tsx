import "./TasksButton.scss";
import { Button } from "../../shared/Button.tsx";
import { tasksAction } from "../../../utils/tasksUtils.ts";

const TasksButton = () => {
	return (
		<Button
			onClick={tasksAction}
			className="user__tasks_button button"
			title="User tasks"
		>
			Užduotys
		</Button>
	);
};

export { TasksButton };
