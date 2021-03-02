import React, {useEffect, useState} from 'react';
import {
    Button, CustomInput,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    Label,
    Modal
} from "reactstrap";
import FormFileInput from "react-bootstrap/FormFileInput";
import FormCheckInput from "react-bootstrap/FormCheckInput";
import * as actions from "../../../../store/actions";
import {connect} from "react-redux";

const ItemForm = (props) => {
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemImage, setItemImage] = useState("");

    useEffect(() => {
        if(props.type){
            setItemName(props.currentItem.name);
            setItemDescription(props.currentItem.description);
            setItemImage(props.currentItem.itemImage);
        }else{
            setItemName("");
            setItemDescription("");
            setItemDescription("");
        }
    }, [props]);

    const handleSubmitCategory = (event) => {
        if(props.type){
            debugger;
            props.editItemInsideCategoryWithId(itemName, itemDescription, itemImage, props.currentCategory.id, props.currentItem.id);
        }else{
            props.addItemInsideCategoryWithId(itemName, itemDescription, itemImage, props.currentCategory.id);
        }
        props.click(event);
    }


    return(
        <Modal className="modal-dialog-centered"
               isOpen={props.itemFormModal}
               toggle={props.click}>
            <div className="modal-header">
                <h6 className="modal-title" id="modal-title-default">
                    {props.type ? "Edit item" : "Add item"}
                </h6>
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
                <Form>
                    <FormGroup>
                        <Label for="itemNameInput">Item Name</Label>
                        <Input
                            id="itemNameInput"
                            className="form-control"
                            placeholder="Item Name"
                            value={itemName}
                            onChange={(event) => setItemName(event.target.value)}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="itemDescriptionInput">Item Description</Label>
                        <textarea
                            id="itemDescriptionInput"
                            className="form-control"
                            placeholder="Item Description"
                            value={itemDescription}
                            onChange={(event) => setItemDescription(event.target.value)}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="itemImageInput">Item Image Link</Label>
                        <Input
                            id="itemImageInput"
                            className="form-control"
                            placeholder="Item Image Link"
                            value={itemImage}
                            onChange={(event) => setItemImage(event.target.value)}
                            type="text"
                        />
                    </FormGroup>
                </Form>
            </div>
            <div className="modal-footer">
                <Button color="primary" type="button"
                        onClick={(event) => handleSubmitCategory(event)}>
                    {props.type ? "Save changes" : "Add item"}
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
        currentCategory: state.menuReducer.currentCategory,
        currentItem: state.menuReducer.currentItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemInsideCategoryWithId: (itemName, itemDescription, itemImage, categoryId) => dispatch(actions.addItemInsideCategoryWithId(itemName, itemDescription, itemImage, categoryId)),
        editItemInsideCategoryWithId: (itemName, itemDescription, itemImage, categoryId, itemId) => dispatch(actions.editItemInsideCategoryWithId(itemName, itemDescription, itemImage, categoryId, itemId)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
