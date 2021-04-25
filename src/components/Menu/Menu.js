import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import Category from "./Category/Category";
import './Menu.css';
import {Button} from "reactstrap";
import CategoryForm from "./Category/CategoryForm/CategoryForm";
import * as actions from '../../store/actions/index';
import {connect} from "react-redux";

const Menu = (props) => {
    let [editCategoryModal, setEditCategoryModal] = useState(false);
    let toggleCategoryForm = (event) => {
        event.stopPropagation();
        setEditCategoryModal(!editCategoryModal);
    }

    useEffect(() => {
        props.getMenu();
    }, []);

    return(
        <div className="position-relative">
            <section className="section section-shaped">
                <div className="custom-style"/>
            </section>
            <div className="background-image">
                <div className="background-opacity">
                    {props.role ? props.role[0] === "ROLE_ADMIN" ? <div className="w-100">
                        <Button
                            className="btn btn-outline-info container middle-screen-menu"
                            onClick={(event) => toggleCategoryForm(event)}
                        >
                            Add category
                        </Button>
                    </div> : null : null}
                    {props.role ? props.role[0] === "ROLE_ADMIN" ? <CategoryForm type={false}
                                                                 click={(event) => toggleCategoryForm(event)}
                                                                 editCategoryModal={editCategoryModal}/> : null : null}
                    {props.menu.categories ? props.menu.categories.map(cat => (
                        <Category
                            role={props.role}
                            key={cat.id}
                            category={cat}/>
                    )) : null}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        menu: state.menuReducer.menu,
        error: state.menuReducer.error,
        role: state.authReducer.role
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMenu: () => dispatch(actions.getMenu())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Menu));
