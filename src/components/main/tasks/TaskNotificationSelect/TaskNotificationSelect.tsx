import "./TaskNotificationSelect.scss";

interface TaskNotificationSelectProps {
    taskId?: string;
}

function TaskNotificationSelect({ taskId }: TaskNotificationSelectProps) {
    function handleSelectNotificationMethod(taskId: string) {
        console.log("notification selected for task:", taskId);
    }

    return (
        <>
            <label
                className="main__tasks_task_controls_notification-select-label"
                htmlFor="select-method">
                <span className="main__tasks_task_controls_notification-select-label-span">
                    Pranešimai
                </span>
                <select
                    className="main__tasks_task_controls_notification-select"
                    name="select-method"
                    title="Notification"
                    id="select-method"
                    onChange={() => {
                        if (taskId) {
                            handleSelectNotificationMethod(taskId);
                        }
                    }}>
                    <option
                        className="main__tasks_task_controls_notification-select-option"
                        value="none">
                        Išjungti
                    </option>
                    <option
                        className="main__tasks_task_controls_notification-select-option"
                        value="email">
                        E-paštas
                    </option>
                    <option
                        className="main__tasks_task_controls_notification-select-option"
                        value="sms">
                        SMS
                    </option>
                </select>
            </label>
        </>
    );
}

export { TaskNotificationSelect };
