import React, {useEffect, useState} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input, InputGroupButtonDropdown,
    Label,
    Modal
} from "reactstrap";
import * as actions from "../../../../store/actions";
import {connect} from "react-redux";
import './ItemForm.css';
import {storage} from "../../../../firebase";
import {showText} from "../../../../utils/utils";

const ItemForm = (props) => {
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemImage, setItemImage] = useState(null);
    const [itemImageUrl, setItemImageUrl] = useState("");
    const [imageIsUploading, setImageIsUploading] = useState(false);

    useEffect(() => {
        if (props.type) {
            setItemName(props.currentItem.name);
            setItemDescription(props.currentItem.description);
            setItemImageUrl(props.currentItem.itemImage);
        } else {
            setItemName("");
            setItemDescription("");
            setItemImage(null);
            setItemImageUrl("");
        }
    }, [props]);

    const handleImageChange = (event) => {
        if (event.target.files[0]) {
            setItemImage(event.target.files[0]);
            setItemImageUrl(event.target.files[0].name);
        }
    }

    const isFormValid = itemName && true;

    const handleSubmitItem = (event) => {
        if (itemImage) {
            setImageIsUploading(true);
            let uploadTask = storage.ref(`itemImages/${itemImage.name}`).put(itemImage);
            uploadTask.on(
                "state_changed",
                snapshot => {

                },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("itemImages")
                        .child(itemImage.name)
                        .getDownloadURL()
                        .then(url => {
                            // console.log(url);
                            if (props.type) {
                                props.editItemInsideCategoryWithId(itemName, itemDescription, url, props.currentCategory.id, props.currentItem.id);
                            } else {
                                props.addItemInsideCategoryWithId(itemName, itemDescription, url, props.currentCategory.id);
                            }
                            setImageIsUploading(false);
                            props.click(event);
                        });
                }
            );
        } else {
            if (props.type) {
                props.editItemInsideCategoryWithId(itemName, itemDescription, itemImageUrl, props.currentCategory.id, props.currentItem.id);
            } else {
                props.addItemInsideCategoryWithId(itemName, itemDescription, itemImageUrl, props.currentCategory.id);
            }
            props.click(event);
        }
    };


    return (
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
                            invalid={!itemName}
                            onChange={(event) => setItemName(event.target.value)}
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="itemDescriptionInput">Item Description</Label>
                        <Input
                            id="itemDescriptionInput"
                            className="form-control"
                            placeholder="Item Description"
                            value={itemDescription}
                            onChange={(event) => setItemDescription(event.target.value)}
                            type="textarea"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="itemImageInput">Item Image</Label>
                        <label id="itemImageInput" className="custom-file-upload"
                               style={{wordWrap: "break-word"}}
                        >
                            <Input type="file"
                                   onChange={handleImageChange}
                            />
                            {itemImageUrl ? showText(itemImageUrl, 80) : "Choose Item Image"}
                        </label>
                    </FormGroup>
                </Form>
            </div>
            <div className="modal-footer">
                <Button color="primary" type="button"
                        disabled={!isFormValid}
                        onClick={(event) => handleSubmitItem(event)}>
                    {props.type ? "Save changes" : "Add item"}
                    {imageIsUploading ? <div className="spinner-border spinner-border-sm spinner-style" role="status">
                        <span className="sr-only">Loading...</span>
                    </div> : null}
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
