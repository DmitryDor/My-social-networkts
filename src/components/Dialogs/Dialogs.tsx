import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType, DialogsType, DispatchActionType, MessagesType} from "../../redux/state";


type PropsType = {
    dialogsPage: DialogsPageType
   /* addMessage: Function
    updateNewMessageText: Function*/
    dispatch: (action: DispatchActionType) => void

}

const Dialogs = (props: PropsType) => {


    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message}/>);

    let newMessgeElement: any= React.createRef();

    let addMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"});
    }
    let onMessageChange = () => {
        let text =  newMessgeElement.current.value;
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text});
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
                    onChange={onMessageChange}
                    ref={newMessgeElement}
                value={props.dialogsPage.newMessageText}
                />
            </div>
            <div>
                <button onClick={addMessage}>Add post</button>
            </div>
        </div>
    );
}
export default Dialogs;