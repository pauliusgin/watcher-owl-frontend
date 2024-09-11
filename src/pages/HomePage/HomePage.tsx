import "./HomePage.scss";

import { Owl } from "../../components/shared/Owl/Owl";
import { SearchForm } from "../../components/main/home/SearchForm/SearchForm";
import { Title } from "../../components/main/home/Title/Title";
import { Outlet } from "react-router-dom";

function HomePage() {
    return (
        <div className="page" id="home-page">
            <Owl />
            <Title />
            <SearchForm />
            <Outlet />
        </div>
    );
}

export { HomePage };
