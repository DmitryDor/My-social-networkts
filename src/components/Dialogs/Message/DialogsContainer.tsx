import React from "react";

import Dialogs from "../Dialogs";
import {addMessageActionCreator, updateNewMessageTextCreater} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import {DispatchActionType, StateType} from "../../../redux/store";


type PropsType = {
    /* dialogsPage: DialogsPageType
     dispatch: (action: DispatchActionType) => void*/
    store: any
}



let mapStateToProps = (state: StateType) => {

    return {
       dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: DispatchActionType) => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextCreater(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;