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
});

function TasksContextProvider({ children }: { children: ReactNode }) {
    const [tasks, setTasks] = useState<saveTaskOutput[] | undefined>(undefined);
    const [tasksLoading, setTasksLoading] = useState<boolean>(false);
    const [saveSuccessful, setSaveSuccessful] = useState(false);
    const { user } = useUser();

    useEffect(() => {
        async function getInfoAboutTasks() {
            setTasksLoading(true);

            const userTasks = await getUserTasks(user?.userId as string);

            setTasks(userTasks);

            setTasksLoading(false);
        }
        getInfoAboutTasks();
    }, [user]);

    return (
        <TaskContext.Provider
            value={{
                tasks,
                setTasks,
                tasksLoading,
                setTasksLoading,
                saveSuccessful,
                setSaveSuccessful,
            }}>
            {children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TasksContextProvider };
