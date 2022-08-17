//?? 레이아웃에서 props를 부모한테 주는이유? 어떤데이터를 주는거지
import React from "react";
import "./style.css";

const Layout = (props) => {

    return (
        <div className ="layout">
            {props.children}
        </div>
    );
};

export default Layout;