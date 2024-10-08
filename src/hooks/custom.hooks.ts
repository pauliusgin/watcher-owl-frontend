import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { DataContext } from "../context/DataContext";
import { TaskContext } from "../context/TaskContext";
import { AuthContext } from "../context/AuthContext";

function useUser() {
    return useContext(UserContext);
}

function useData() {
    return useContext(DataContext);
}

function useTasks() {
    return useContext(TaskContext);
}

function useAuth() {
    return useContext(AuthContext);
}

export { useData, useUser, useTasks, useAuth };
