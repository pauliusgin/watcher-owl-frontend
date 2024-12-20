import "./TaskSaveButton.scss";
import {
    addTaskToDatabase,
    getUserTasks,
} from "../../../../services/tasks.services";
import { useTasks, useUser } from "../../../../hooks/custom.hooks";
import { useData, useAuth } from "../../../../hooks/custom.hooks";
import { DefaultButton } from "../../../shared/DefaultButton/DefaultButton";
import { Notification } from "../../../../types/enumsAndInterfaces";
import { resultsItemType } from "../../../../types/types";
import { useEffect } from "react";
import { TaskDetails } from "../TaskItemDetails/TaskItemDetails";

const TaskSaveButton = ({
    onSave,
}: {
    onSave?: (result: TaskDetails) => void;
}) => {
    const { user } = useUser();
    const { token } = useAuth();
    const { data, searchQuery } = useData();
    const {
        setTasks,
        saveSuccessful,
        setSaveSuccessful,
        setTaskControlsVisibility,
    } = useTasks();

    async function handleSaveTask() {
        if (token) {
            const result = await addTaskToDatabase({
                userId: user?.userId,
                search: searchQuery,
                isActive: false,
                notification: Notification.NONE,
                items: data?.map((item: resultsItemType) => ({
                    id: item.id,
                    title: item.title,
                    photo: item.photo,
                    full_size_url: item.full_size_url,
                    timestamp: item.timestamp,
                    price: item.price,
                    currency: item.currency,
                    status: item.status,
                    url: item.url,
                })),
            });

            if (result) {
                setSaveSuccessful(true);
                setTaskControlsVisibility(true);
                const allTasks = await getUserTasks(user?.userId as string);
                setTasks(allTasks);

                if (onSave) {
                    onSave(result);
                }
            }
        }
    }

    useEffect(() => {
        if (saveSuccessful) {
            const timer = setTimeout(() => {
                setSaveSuccessful(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [saveSuccessful, setSaveSuccessful]);

    useEffect(() => {
        setTaskControlsVisibility(false);
    }, []);

    return (
        <DefaultButton
            onClick={() => {
                handleSaveTask();
            }}
            className="main__results_save-search__button button"
            title="Save search">
            Išsaugoti paiešką
        </DefaultButton>
    );
};

export { TaskSaveButton };
