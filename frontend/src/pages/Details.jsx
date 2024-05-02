import React from "react";
import { useLocation } from "react-router-dom";

const App = () => {
    const location = useLocation();
    const detail =
        location.state &&
        location.state.product;
    return (
        <div class="">{detail}</div>
    );
};

export default App;
