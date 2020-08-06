import React, {ChangeEvent} from "react";
import {ActionType, InitiolStateType, sendMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


type PropsType = {
   /* dialogsPage: InitiolStateType
    dispatch: (action: ActionType) => void*/
    store: any
}

export const DialogsContainer = (props: PropsType) => {

    let state = props.store.getState().dialogsPage



    const sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    const onMessageChange = (message: string) => {
        let action = updateNewMessageAC(message)
        props.store.dispatch(action)
    }

    return (
        <Dialogs addMessage={sendMessage} updateNewMessageText={onMessageChange} dialogsPage={state}
        />
    );

}
