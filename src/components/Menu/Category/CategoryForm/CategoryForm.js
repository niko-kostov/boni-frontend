import React, {useEffect, useState} from 'react';
import {Card} from "react-bootstrap";
import ItemPrice from "../../Item/ItemPrice/ItemPrice";
import {Button, FormGroup, Input, Label, Modal} from "reactstrap";
import * as actions from "../../../../store/actions";
import {connect} from "react-redux";

const CategoryForm = (props) =>{
    const [categoryName, setCategoryName] = useState("");
    useEffect(() => {
        if(props.type){
            setCategoryName(props.currentCategory.name);
        }else{
            setCategoryName("");
        }
    }, [props]);

    const handleSubmitCategory = (event) => {
        if(props.type){
            props.editCategory(categoryName, props.currentCategory.id);
        }else{
            props.createCategory(categoryName);
        }
        props.click(event);
    }

    return(
        <Modal className="modal-dialog-centered"
               isOpen={props.editCategoryModal}
               toggle={props.click}>
            <div className="modal-header">
                <h4 className="modal-title" id="modal-title-default">
                    {props.type ? "Edit category" : "Add category"}
                </h4>
                <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={props.click}
                >
                    <span aria-hidden={true}>×</span>
                </button>
            </div>
            <div className="modal-body">
                <FormGroup>
                    <Label for="catNameInput">Category Name</Label>
                    <Input
                        id="catNameInput"
                        className="form-control"
                        placeholder="Category Name"
                        value={categoryName}
                        onChange={(event) => setCategoryName(event.target.value)}
                        type="text"
                    />
                </FormGroup>
            </div>
            <div className="modal-footer d-inline-block">
                <Button
                    color="primary"
                    type="button"
                    onClick={(event) => handleSubmitCategory(event)}
                >
                    {props.type ? "Save changes" : "Add category"}
                </Button>
                <Button
                    className="ml-auto"
                    color="link"
                    data-dismiss="modal"
                    type="button"
                    onClick={props.click}
                >
                    Close
                </Button>
            </div>
        </Modal>
    );

}

const mapStateToProps = (state) => {
    return {
        currentCategory: state.menuReducer.currentCategory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCategory: (categoryName) => dispatch(actions.createCategory(categoryName)),
        editCategory: (categoryName, categoryId) => dispatch(actions.editCategory(categoryName, categoryId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm);
