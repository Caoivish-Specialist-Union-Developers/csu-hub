import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                {/* <Route path="users/*" element={<Users />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;