export type DialogType = {
    id: string,
    name: string
}
export type MessageType = {
    id: string,
    message: string
}


export type PostType = {
    id: string,
    message: string,
    likesCount: number
}
type PostsType = Array<PostType>
type DialogsType = Array<DialogType>
type MessagesType = Array<MessageType>

export  type ProfilePageType = {
    posts: PostsType
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogsType
    messages: MessagesType
    newMessageText: string

}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type ActionType = {
    type: 'ADD-POST' | 'UPDATE-NEW-POST-TEXT' | 'ADD-MESSAGE' | 'UPDATE-NEW-MESSAGE-TEXT'
    newText?: string

}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: ( ) => StateType
    dispatch: (action: ActionType)=> void

}


export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: "1", message: "Hi, how are you?", likesCount: 10},
                {id: "2", message: "It's my post", likesCount: 5},
                {id: "3", message: "it's you post", likesCount: 7}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    _callSubscriber(state: StateType) {
        console.log("state changed")
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState(){
        return this._state
    },

    dispatch(action: ActionType) {

        if(action.type === 'ADD-POST') {
            let newPost = {id: "4", message: this._state.profilePage.newPostText, likesCount: 0};
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            if(action.newText)
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state);
        } else if(action.type === 'ADD-MESSAGE'){
            let newMessage = {id: "6", message: this._state.dialogsPage.newMessageText};
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state);
        } else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            if(action.newText)
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state);
        }
    }
}

