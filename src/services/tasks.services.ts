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
    const token = sessionStorage.getItem("token");

    try {
        const response = await fetch(`${config.backend.server}/api/v1/tasks/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
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

        return savedTask;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function deleteTask(taskId: string) {
    const token = sessionStorage.getItem("token");

    try {
        const response = await fetch(
            `${config.backend.server}/api/v1/tasks/${taskId}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (!response.ok) {
            console.log("delete task failed");
        }

        return response;
    } catch (error) {
        if (error instanceof Error)
            console.log("Failed to send request to api/tasks", error.message);
    }
}

async function getUserTasks(userId: string) {
    const token = sessionStorage.getItem("token");

    try {
        const response = await fetch(
            `${config.backend.server}/api/v1/tasks/users/${userId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
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

async function getTaskById(taskId: string) {
    const token = sessionStorage.getItem("token");

    try {
        const response = await fetch(
            `${config.backend.server}/api/v1/tasks/${taskId}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        const task = await response.json();

        return task;
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function toggleTaskActivity(taskId: string, isActive: boolean) {
    const token = sessionStorage.getItem("token");

    try {
        const response = await fetch(
            `${config.backend.server}/api/v1/tasks/${taskId}/toggle`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    isActive,
                }),
            }
        );

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

async function selectNotificationMethod(
    taskId: string,
    notification: Notification
) {
    const token = sessionStorage.getItem("token");

    try {
        const response = await fetch(
            `${config.backend.server}/api/v1/tasks/${taskId}/notify`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    notification,
                }),
            }
        );

        return await response.json();
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

export {
    addTaskToDatabase,
    deleteTask,
    getUserTasks,
    getTaskById,
    toggleTaskActivity,
    selectNotificationMethod,
};
