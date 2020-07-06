export type DialogsType = {
    id: string,
    name: string
}

export type MessagesType = {
    id: string,
    message: string
}

export type PropsType = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
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
export type DispatchActionType = {
    type: string
    newText?: string
}

export type StoreType = {
    _state: StateType
    getState: Function
    _callSubscriber: (state: StateType) => void
   /* addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessgeText: (newText: string) => void*/
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
            newMessageText: "Dimon"
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

   /* addPost() {
        let newPostData = {
            id: "5",
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postData.push(newPostData);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let messageData = {
            id: "6",
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messagesData.push(messageData);
        this._state.dialogsPage.newMessageText = "";
        this._callSubscriber(this._state);
    },
    updateNewMessgeText(newText: string) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },*/
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPostData = {
                id: "5",
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push(newPostData);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            if (action.newText != undefined) {
                this._state.profilePage.newPostText = action.newText;
            }
            this._callSubscriber(this._state);
        } else if (action.type === "ADD-MESSAGE") {
            let messageData = {
                id: "6",
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messagesData.push(messageData);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            if (action.newText != undefined) {
                this._state.dialogsPage.newMessageText = action.newText;
            }
            this._callSubscriber(this._state);
        }
    }

}



















