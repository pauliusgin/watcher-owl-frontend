import { createContext, useState, useEffect, ReactNode } from "react";
import { getUserTasks, saveTaskOutput } from "../services/tasks.services";
import { useUser } from "../hooks/custom.hooks";
import { tasksContextType } from "../types/types";

const TaskContext = createContext<tasksContextType>({
    tasks: undefined,
    setTasks: () => {},
    tasksLoading: false,
    setTasksLoading: () => {},
    saveSuccessful: false,
    setSaveSuccessful: () => {},
    taskControlsVisibility: {},
    setTaskControlsVisibility: () => {},
});

function TasksContextProvider({ children }: { children: ReactNode }) {
    const [tasks, setTasks] = useState<saveTaskOutput[] | undefined>(undefined);
    const [tasksLoading, setTasksLoading] = useState<boolean>(false);
    const [saveSuccessful, setSaveSuccessful] = useState(false);
    const [taskControlsVisibility, setTaskControlsVisibility] = useState<{
        [key: string]: boolean;
    }>({});
    const { user } = useUser();

    useEffect(() => {
        async function getInfoAboutTasks() {
            if (user?.userId) {
                setTasksLoading(true);

                const userTasks = await getUserTasks(user?.userId as string);

                setTasks(userTasks);

                setTasksLoading(false);
            }
        }
        getInfoAboutTasks();
    }, [user?.userId]);

    return (
        <TaskContext.Provider
            value={{
                tasks,
                setTasks,
                tasksLoading,
                setTasksLoading,
                saveSuccessful,
                setSaveSuccessful,
                taskControlsVisibility,
                setTaskControlsVisibility,
            }}>
            {children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TasksContextProvider };
