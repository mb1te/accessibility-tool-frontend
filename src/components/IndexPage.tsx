import HeaderIndex from "./HeaderIndex";
import Footer from "./Footer";
import {FC} from "react";
import StartForm from "./StartForm";

const IndexPage: FC = () => {
    return (
        <div id="main-page">
            <HeaderIndex />
            <StartForm />
            <Footer />
        </div>
    );
}

export default IndexPage;
