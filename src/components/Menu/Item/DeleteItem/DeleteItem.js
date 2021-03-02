import React from 'react';
import {connect} from "react-redux";
import * as actions from "../../../../store/actions";
import {Button, Modal} from "reactstrap";

const DeleteItem = (props) => {
    const handleDeleteItem = (event) => {
        props.deleteItem(props.currentItem.id, props.currentCategory.id);
        props.click(event);
    }

    return (
        <Modal className="modal-dialog-centered"
               isOpen={props.itemDeleteModal}
               toggle={props.click}>
            <div className="modal-header">
                <h4 className="modal-title" id="modal-title-default">
                    Delete Item
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
                <p>Are you sure you want to delete {props.currentItem.name}?</p>
            </div>
            <div className="modal-footer d-inline-block">
                <Button
                    color="danger"
                    type="button"
                    onClick={(event) => handleDeleteItem(event)}
                >
                    Delete Item
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
        deleteItem: (itemId, categoryId) => dispatch(actions.deleteItemInsideCategoryWithId(itemId, categoryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
