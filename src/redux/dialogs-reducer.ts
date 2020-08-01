import {ActionType, DialogsPageType} from "./state";

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


export const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case "SEND-MESSAGE":
            let newMessage = {id: "6", message: state.newMessageText};
            state.messages.push(newMessage);
            state.newMessageText = ''
            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            if (action.newText)
                state.newMessageText = action.newText
            return state
        default:
            return state
    }
}



export const sendMessageAC = (): ActionType => ({ type: SEND_MESSAGE })

export const updateNewMessageAC = (message: string): ActionType => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: message})


