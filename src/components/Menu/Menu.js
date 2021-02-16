import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import Category from "./Category/Category";
import './Menu.css';
import {Button} from "reactstrap";
import CategoryForm from "./Category/CategoryForm/CategoryForm";

const Menu = () => {
    let [editCategoryModal, setEditCategoryModal] = useState(false);
    let toggleCategoryForm = (event) => {
        event.stopPropagation();
        setEditCategoryModal(!editCategoryModal);
    }

    const categories = [
        { id: 1, categoryName: "Burgers"},
        { id: 2, categoryName: "Pizza"},
        { id: 3, categoryName: "Drinks"}
    ];

    return(
        <div className="position-relative">
            <section className="section section-shaped">
                <div className="custom-style"/>
            </section>
            <div className="w-100">
                <Button
                    className="btn btn-outline-info container middle-screen-menu"
                    onClick={(event) => toggleCategoryForm(event)}
                >
                    Add category
                </Button>
            </div>
            <CategoryForm type={false}
                          click={(event) => toggleCategoryForm(event)}
                          editCategoryModal={editCategoryModal}/>
            {categories.map(cat => (
                <Category
                    key={cat.id}
                    id={cat.id}
                    categoryName={cat.categoryName}/>
            ))}
        </div>
    );
}

export default withRouter(Menu);
