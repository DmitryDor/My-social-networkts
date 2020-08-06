import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export type DialogType = {
    id: string,
    name: string
}
export type MessageType = {
    id: string,
    message: string
}
type DialogsType = Array<DialogType>
type MessagesType = Array<MessageType>

export type DialogsPageType = {
    dialogs: DialogsType
    messages: MessagesType
    newMessageText: string
}

type PropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    updateNewMessageText: (message: string) => void
}

const Dialogs = (props: PropsType) => {
 let state = props.dialogsPage
    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message}/>);


    const sendMessage = () => {
        props.addMessage()
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let message = e.target.value
        props.updateNewMessageText(message)

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