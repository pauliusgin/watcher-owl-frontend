import "./TaskNotificationSelect.scss";

function TaskNotificationSelect() {
    function handleSelectNotificationMethod() {}

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
                    onChange={handleSelectNotificationMethod}>
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
