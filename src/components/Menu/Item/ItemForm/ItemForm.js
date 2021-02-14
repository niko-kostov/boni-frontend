import React from 'react';
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

const ItemForm = (props) => {
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
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="itemDescriptionInput">Item Description</Label>
                        <textarea
                            id="itemDescriptionInput"
                            className="form-control"
                            placeholder="Item Description"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="itemImageInput">Item Image Link</Label>
                        <Input
                            id="itemImageInput"
                            className="form-control"
                            placeholder="Item Image Link"
                            type="text"
                        />
                    </FormGroup>
                </Form>
            </div>
            <div className="modal-footer">
                <Button color="primary" type="button">
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

export default ItemForm;
