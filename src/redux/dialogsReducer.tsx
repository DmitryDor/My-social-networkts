import {DialogsPageType, DispatchActionType, StateType} from "./store";
import {type} from "os";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let initialeState = {
    dialogsData: [
        {id: "1", name: "Dimych"},
        {id: "2", name: "Andrey"},
        {id: "3", name: "Sveta"},
        {id: "4", name: "Sasha"},
        {id: "5", name: "Victor"},
        {id: "6", name: "Valera"}
    ],
    messagesData: [
        {id: "1", message: "Hi"},
        {id: "2", message: "How are you?"},
        {id: "3", message: "I'm fine"},
        {id: "4", message: "I'm happy"},
        {id: "5", message: "Happy new year"}
    ],
    newMessageText: ""
}

const dialogsReducer = (state: DialogsPageType = initialeState, action: DispatchActionType) => {


    switch (action.type) {
        case ADD_MESSAGE: {
            let messageData = {
                id: "6",
                message: state.newMessageText
            }
            return   {
                ...state,
                newMessageText: "",
                messagesData: [...state.messagesData, messageData]
            };
            // stateCopy.dialogsData = [...state.dialogsData]
            // stateCopy.messagesData.push(messageData);
            // stateCopy.newMessageText = "";
            // return stateCopy
        }

        case UPDATE_NEW_MESSAGE_TEXT:{

            /*let stateCopy = {
                ...state
            }*/
            if (action.newText) {
                return  {
                    ...state,
                    newMessageText: action.newText
                }
               /* return stateCopy*/
            }}

        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const updateNewMessageTextCreater = (text: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export default dialogsReducer;