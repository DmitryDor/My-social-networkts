
 export type DialogType = {
    id: string,
    name: string
}
 export type MessageType = {
    id: string,
    message: string
}

export type DialogsType = Array<DialogType>
export type MessagesType = Array<MessageType>

export type InitiolStateType = {
    dialogs: DialogsType
    messages: MessagesType
    newMessageText: string
}
export type ActionType = {
    type: 'SEND-MESSAGE' | 'UPDATE-NEW-MESSAGE-TEXT'
    newText?: string
}

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'


let initiolState: InitiolStateType = {
    dialogs: [
        {id: "1", name: "Dimych"},
        {id: "2", name: "Andrey"},
        {id: "3", name: "Sveta"},
        {id: "4", name: "Sasha"},
        {id: "5", name: "Victor"},
        {id: "6", name: "Valera"}
    ],

    messages: [
        {id: "1", message: "Hi"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "I'm fine"},
        {id: "4", message: "I'm happy"},
        {id: "5", message: "Happy new year"}
    ],
    newMessageText: ''
}

export const dialogsReducer = (state = initiolState, action: ActionType) => {
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


