import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { DataContext } from "../context/DataContext";
import { TaskContext } from "../context/TaskContext";

function useUser() {
    return useContext(UserContext);
}

function useData() {
    return useContext(DataContext);
}

function useTasks() {
    return useContext(TaskContext);
}

export { useData, useUser, useTasks };
