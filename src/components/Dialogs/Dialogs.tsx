import React, {ChangeEvent} from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType, DispatchActionType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageTextCreater} from "../../redux/dialogsReducer";


type PropsType = {
    dialogsPage: DialogsPageType
    updateNewMessageText: (text: string) => void
    addMessage: () => void
}


const Dialogs = (props: PropsType) => {
    let state = props.dialogsPage

    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message}/>);
    let newMessgeElement: any = state.newMessageText

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
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
                <textarea
                    placeholder="Enter your message"
                    onChange={onMessageChange}
                    value={newMessgeElement}
                />
            </div>
            <div>
                <button onClick={addMessage}>Add post</button>
            </div>
        </div>
    );
}
export default Dialogs;