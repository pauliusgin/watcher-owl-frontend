import { useEffect, useState } from "react";
import "./TaskNotificationSelect.scss";
import { Notification } from "../../../../types/enumsAndInterfaces";
import { getTaskById } from "../../../../services/tasks.services";
import { selectNotificationMethod } from "../../../../services/tasks.services";

interface TaskNotificationSelectProps {
    taskId?: string;
}

function TaskNotificationSelect({ taskId }: TaskNotificationSelectProps) {
    const [notification, setNotification] = useState<Notification>(
        Notification.NONE
    );

    useEffect(() => {
        async function fetchNotification() {
            if (taskId) {
                const task = await getTaskById(taskId);

                setNotification(task.notification);
            }
        }
        fetchNotification();
    }, [taskId]);

    async function handleSelectNotificationMethod(payload: {
        taskId: string;
        selectedNotification: Notification;
    }) {
        const { taskId, selectedNotification } = payload;

        setNotification(selectedNotification);

        try {
            await selectNotificationMethod(taskId, selectedNotification);

            const updatedNotificationMethod = await getTaskById(taskId);

            setNotification(updatedNotificationMethod.notification);
        } catch (error) {
            setNotification((prevStatus) => prevStatus);
            console.error("Failed to select notification method:", error);
        }
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
                    value={notification}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        if (taskId) {
                            const selectedNotification = event.target
                                .value as Notification;
                            handleSelectNotificationMethod({
                                taskId,
                                selectedNotification,
                            });
                        }
                    }}>
                    <option
                        className="main__tasks_task_controls_notification-select-option"
                        value={Notification.NONE}>
                        Jokių
                    </option>
                    <option
                        className="main__tasks_task_controls_notification-select-option"
                        value={Notification.EMAIL}>
                        E-paštas
                    </option>
                </select>
            </label>
        </>
    );
}

export { TaskNotificationSelect };
