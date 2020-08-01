import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionType,  DialogsPageType} from "../../redux/state";
import {sendMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";

type PropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionType) => void
}

const Dialogs = (props: PropsType) => {


    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>);



    const sendMessage = () => {
        props.dispatch(sendMessageAC())
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.target.value
        let action = updateNewMessageAC(message)
        props.dispatch(action)
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
                    <textarea placeholder='Enter your message'  onChange={onMessageChange}
                              value={props.dialogsPage.newMessageText}/>
            </div>
            <div>
                <button onClick={sendMessage}>Send message</button>
            </div>


        </div>
    );

}
export default Dialogs;