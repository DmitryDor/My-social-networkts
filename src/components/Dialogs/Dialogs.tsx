import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionType, DialogsPageType} from "../../redux/state";

type PropsType = {
    dialogsPage: DialogsPageType
    /*addMessage: () => void
    updateNewMessageText: (newText: string) => void*/
    dispatch: (action: ActionType) => void
}

const Dialogs = (props: PropsType) => {


    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>);

    const newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        props.dispatch({ type: 'ADD-MESSAGE' })
    }

    const onMessageChange = () => {
        if (newMessageElement.current) {
            let message = newMessageElement.current.value
            let action: ActionType ={type: 'UPDATE-NEW-MESSAGE-TEXT', newText: message}
            props.dispatch( action)
        }
    }

        return (
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
                <div>
                    <textarea placeholder='Enter your message' ref={newMessageElement} onChange={onMessageChange}
                              value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>


            </div>
        );

}
export default Dialogs;