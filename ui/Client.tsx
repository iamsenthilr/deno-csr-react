import React from "react";
import ReactDom from "react-dom";

import App from "./app.tsx"

(ReactDom as any).render(
    <App />,
    //@ts-ignore
    document.getElementById('root')
);