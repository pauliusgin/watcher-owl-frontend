import { config } from "../../configs/config";
import { Notification } from "../types/enumsAndInterfaces";

interface taskItem {
    id: number;
    title: string;
    photo: string;
    full_size_url: string;
    timestamp: number;
    price: number;
    currency: string;
    status: string;
    url: string;
    _id?: string;
}

export interface saveTaskInput {
    userId?: string;
    search: string[] | null;
    isActive: boolean;
    notification: Notification;
    items: taskItem[] | undefined;
}

export interface saveTaskOutput {
    userId: string;
    search: string;
    isActive: boolean;
    notification: Notification;
    items: taskItem[] | undefined;
    _id: string;
}

async function addTaskToDatabase({
    userId,
    search,
    isActive,
    notification,
    items,
}: saveTaskInput) {
    try {
        const response = await fetch(`${config.backend.server}/api/v1/tasks/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                search:
                    search && search.length > 3
                        ? search.slice(0, 3).join("+")
                        : search?.join("+"),
                isActive,
                notification,
                items: items && items.length > 10 ? items?.slice(0, 10) : items,
            }),
        });

        if (!response.ok) throw new Error("Could not contact /api/v1/tasks");

        const savedTask = await response.json();

        console.log("saved task:", savedTask);
        return savedTask;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function deleteTaskFromDatabase(taskId: string) {
    try {
        const response = await fetch(
            `${config.backend.server}/api/v1/tasks/${taskId}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            console.log("get tasks response not ok");
        }
    } catch (error) {
        if (error instanceof Error)
            console.log("Failed to send request to api/tasks", error.message);
    }
}

async function getUserTasks(userId: string) {
    try {
        const response = await fetch(
            `${config.backend.server}/api/v1/tasks/${userId}`,
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }
        );
        const userTasks = await response.json();

        return userTasks;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

export { addTaskToDatabase, deleteTaskFromDatabase, getUserTasks };
