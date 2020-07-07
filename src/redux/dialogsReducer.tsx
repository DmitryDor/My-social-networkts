import {DispatchActionType, StateType} from "./state";
import {type} from "os";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"


const dialogsReducer = (state: any, action: DispatchActionType) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let messageData = {
            id: "6",
            message: state.newMessageText
        }
            state.messagesData.push(messageData);
            state.newMessageText = "";
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () =>( { type: ADD_MESSAGE } )

export const updateNewMessageTextCreater = (text: string) => ( { type: UPDATE_NEW_MESSAGE_TEXT, newText: text } )
export default dialogsReducer;