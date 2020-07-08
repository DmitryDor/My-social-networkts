import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType, DispatchActionType} from "../../redux/store";
import {addMessageActionCreator, updateNewMessageTextCreater} from "../../redux/dialogsReducer";


type PropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: DispatchActionType) => void

}


const Dialogs = (props: PropsType) => {


    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message}/>);

    let newMessgeElement: any = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newMessgeElement.current.value;
        props.dispatch(updateNewMessageTextCreater(text));
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