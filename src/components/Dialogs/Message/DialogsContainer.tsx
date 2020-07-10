import React from "react";


import Dialogs from "../Dialogs";
import {addMessageActionCreator, updateNewMessageTextCreater} from "../../../redux/dialogsReducer";


type PropsType = {
    /* dialogsPage: DialogsPageType
     dispatch: (action: DispatchActionType) => void*/
    store: any
}


const DialogsContainer = (props: PropsType) => {
    let state = props.store.getState().dialogsPage;


    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageTextCreater(text));
    }

    return <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state}/>;
}
export default DialogsContainer;