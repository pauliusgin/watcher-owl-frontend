import { ReactNode, Dispatch, SetStateAction, MouseEventHandler } from "react";
import { saveTaskOutput } from "../services/tasks.services";

type dataContextType = {
    data: resultsItemType[] | undefined;
    setData: Dispatch<SetStateAction<TypeResultsItem[] | undefined>>;
    sessionData: resultsItemType[] | [] | undefined;
    setSessionData: Dispatch<
        SetStateAction<TypeResultsItem[] | [] | undefined>
    >;
    searchQuery: string[] | null;
    setSearchQuery: Dispatch<SetStateAction<string[] | null>>;
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
};

type userContextType = {
    user: userType | undefined;
    setUser: Dispatch<SetStateAction<userType | undefined>>;
    userMenuVisibility: boolean;
    setUserMenuVisibility: Dispatch<SetStateAction<boolean>>;
};

type tasksContextType = {
    tasks: saveTaskOutput[] | undefined;
    setTasks: Dispatch<SetStateAction<saveTaskOutput[] | undefined>>;
    tasksLoading: boolean;
    setTasksLoading: Dispatch<SetStateAction<boolean>>;
    saveSuccessful: boolean;
    setSaveSuccessful: Dispatch<SetStateAction<boolean>>;
    taskControlsVisibility: { [key: string]: boolean };
    setTaskControlsVisibility: Dispatch<
        SetStateAction<{ [key: string]: boolean }>
    >;
};

type resultsItemType = {
    id: number;
    title: string;
    photo: string;
    full_size_url: string;
    timestamp: number;
    price: number;
    currency: string;
    status: string;
    url: string;
};

type resultsContainerType = {
    children: ReactNode;
};

type sortingMethodType =
    | "priceFromLowest"
    | "priceFromHighest"
    | "titleA-Z"
    | "titleZ-A"
    | "statusFromBest"
    | "statusFromWorst";

type userType = {
    userId?: string;
    given_name?: string;
    email: string;
    picture?: string;
    isLoggedIn: boolean;
};

type userMenuVisibilityType = {
    toggleUserMenuVisibility: () => void;
};

type taskControlsVisibilityType = {
    toggleTaskControlsVisibility: (userId: string) => void;
};

type defaultButtonType = {
    onClick: MouseEventHandler;
    children?: ReactNode;
    className?: string;
    id?: string;
    title?: string;
    type?: "submit" | "reset" | "button" | undefined;
};
