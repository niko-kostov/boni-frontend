import React from 'react';
import {Card} from "react-bootstrap";
import ItemPrice from "../../Item/ItemPrice/ItemPrice";
import {Button, FormGroup, Input, Label, Modal} from "reactstrap";

const CategoryForm = (props) =>{
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
                        type="text"
                    />
                </FormGroup>
            </div>
            <div className="modal-footer d-inline-block">
                <Button color="primary" type="button">
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

export default CategoryForm;
