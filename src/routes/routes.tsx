import {BrowserRouter, Routes as MainRoutes, Route} from "react-router-dom";
import {FC} from "react";
import {Path} from "../constants/path";
import IndexPage from "../components/IndexPage";
import CheckPage from "../components/CheckPage";

export const Routes: FC = () => {
    return (
        <BrowserRouter>
            <MainRoutes>
                <Route path={Path.index} element={<IndexPage />}/>
                <Route path={Path.check} element={<CheckPage />}/>
            </MainRoutes>
        </BrowserRouter>
    )
};
