import "./TaskItemDetails.scss";
import { getTaskById } from "../../../../services/tasks.services";
import { resultsItemType } from "../../../../types/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingAnimation } from "../../../shared/LoadingAnimation/LoadingAnimation";
import { TaskActivationButton } from "../TaskActivationButton/TaskActivationButton";
import { TaskDeleteButton } from "../TaskDeleteButton/TaskDeleteButton";
import { TaskNotificationSelect } from "../TaskNotificationSelect/TaskNotificationSelect";

export interface TaskDetails {
    _id: string;
    search: string;
    isActive: boolean;
    notification: Notification;
    items: resultsItemType[];
}

function TaskItemDetails() {
    const [taskDetails, setTaskDetails] = useState<TaskDetails | null>(null);
    const [taskDetailsLoading, setTaskDetailsLoading] =
        useState<boolean>(false);

    const { id } = useParams();

    useEffect(() => {
        const fetchTaskDetails = async () => {
            setTaskDetailsLoading(true);
            if (id) {
                const fetchedTaskDetails = await getTaskById(id);

                setTaskDetails(fetchedTaskDetails);

                setTaskDetailsLoading(false);
            }
        };

        fetchTaskDetails();
    }, [id]);

    if (taskDetailsLoading) {
        return <LoadingAnimation />;
    }

    return (
        taskDetails && (
            <>
                <div className="main__tasks_task_item-details_title-container">
                    <div className="main__tasks_task_item-details_title-controls">
                        <TaskActivationButton taskId={id}/>
                        <TaskNotificationSelect taskId={id}/>
                        <TaskDeleteButton taskId={id}/>
                    </div>
                    <p className="main__tasks_task_item-details_title-title">
                        <span className="main__tasks_task_item-details_title-span">
                            Paieška:
                        </span>{" "}
                        {`${taskDetails?.search.replaceAll("+", ", ")}`}
                    </p>
                </div>
                <div className="main__tasks_task_item-details">
                    {taskDetails?.items.map((item: resultsItemType) => (
                        <div
                            key={item?.id}
                            className="main__tasks_task_item-details_item">
                            <div className="main__tasks_task_item-details_item-image">
                                <a href={item?.full_size_url} target="_blank">
                                    <img
                                        src={item?.photo}
                                        alt="pirma-foto"
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                            <div className="main__tasks_task_item-details_item-description">
                                <a
                                    className="main__tasks_task_item-details_item-title-link"
                                    href={item?.url}
                                    target="_blank">
                                    <h4 className="main__tasks_task_item-details_item-title">{`Pavadinimas: ${item?.title}`}</h4>
                                </a>
                                <p className="main__tasks_task_item-details_item-price">
                                    {`Kaina: ${item?.price} ${item?.currency}`}
                                </p>
                                <p className="main__tasks_task_item-details_item-status">{`Būklė: ${item?.status}`}</p>
                                <p className="main__tasks_task_item-details_item-status">{`Įkelta: ${new Date(
                                    item?.timestamp * 1000
                                ).toLocaleString("lt-LT", {
                                    year: "numeric",
                                    month: "long",
                                    day: "2-digit",
                                    hour: "2-digit",
                                    minute: "2-digit"
                                })}`}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    );
}

export { TaskItemDetails };
