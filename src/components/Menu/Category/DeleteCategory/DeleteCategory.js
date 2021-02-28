import React, {useEffect, useState} from "react";
import * as actions from "../../../../store/actions";
import {connect} from "react-redux";
import {Button, FormGroup, Input, Label, Modal} from "reactstrap";


const DeleteCategory = (props) => {
    const handleDeleteCategory = (event) => {
        props.deleteCategory(props.currentCategory.id);
        props.click(event);
    }

    return(
        <Modal className="modal-dialog-centered"
               isOpen={props.deleteCategoryModal}
               toggle={props.click}>
            <div className="modal-header">
                <h4 className="modal-title" id="modal-title-default">
                    Delete Category
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
                <p>Are you sure you want to delete {props.currentCategory.name}?</p>
            </div>
            <div className="modal-footer d-inline-block">
                <Button
                    color="danger"
                    type="button"
                    onClick={(event) => handleDeleteCategory(event)}
                >
                    Delete Category
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
        deleteCategory: (categoryId) => dispatch(actions.deleteCategory(categoryId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCategory);
