import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

export type DialogsType = {
    id: string,
    name: string
}

export type MessagesType = {
    id: string,
    message: string
}


export type PostType = {
    id: string,
    message: string,
    likesCount: number
}


export type DialogsPageType = {
    dialogsData: Array<DialogsType>,
    messagesData: Array<MessagesType>,
    newMessageText: string
}

export type ProfilePageType = {
    postData: Array<PostType>,
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}



export type DispatchActionType = any/* {
    type: "ADD-POST" | "UPDATE-NEW-POST-TEXT" | "ADD-MESSAGE" | "UPDATE-NEW-MESSAGE-TEXT"
    newText?: string
}*/

export type StoreType = {
    _state: StateType
    getState: Function
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: any) => void
    dispatch: (action: DispatchActionType) => void
}

export let store: StoreType = {
    _state: {
        profilePage: {
            postData: [
                {id: "1", message: "Hello", likesCount: 10},
                {id: "2", message: "Goodbyu", likesCount: 5},
                {id: "3", message: "I'm fine", likesCount: 7},
                {id: "4", message: "Good day!", likesCount: 8},
                {id: "5", message: "Year", likesCount: 5},
                {id: "6", message: "Welcome", likesCount: 18}
            ],
            newPostText: "It-camasutra"
        },
        dialogsPage: {
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

    },
    _callSubscriber() {
        console.log("  ")
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }

}



















