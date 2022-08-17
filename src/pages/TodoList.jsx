import React from "react";
import List from "../components/list/List";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import Layout from "../components/layout/Layout";

const TodoList = () => {

    return (
        <Layout>
            <Header/>
            <Form/>
            <List/>
        </Layout>
    );

//감싸주는이유 밑 컴포넌트들에게도 layout이 자동적용?


};

export default TodoList;