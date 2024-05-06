import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { DataContext } from "../context/DataContext";

function useUser() {
	return useContext(UserContext);
}

function useData() {
	return useContext(DataContext);
}

export { useData, useUser };
