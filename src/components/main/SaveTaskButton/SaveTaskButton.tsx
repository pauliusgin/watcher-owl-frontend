import "./SaveTaskButton.scss";
import {
    addTaskToDatabase,
    getUserTasks,
} from "../../../services/tasks.services";
import { useTasks, useUser } from "../../../hooks/custom.hooks";
import { useData } from "../../../hooks/custom.hooks";
import { DefaultButton } from "../../shared/DefaultButton/DefaultButton";
import { Notification } from "../../../types/enumsAndInterfaces";
import { resultsItemType } from "../../../types/types";

const SaveTaskButton = () => {
    const { user } = useUser();
    const { data, searchQuery } = useData();
    const { setTasks, setSaveSuccessful } = useTasks();

    async function handleSaveTask() {
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
            const allTasks = await getUserTasks(user?.userId as string);
            setTasks(allTasks);
        }
    }

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

export { SaveTaskButton };
