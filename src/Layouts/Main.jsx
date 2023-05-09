import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div>
            <h2>this is main</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;