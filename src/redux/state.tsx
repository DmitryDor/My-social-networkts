let rerenderEntireTree = (state: StateType) => {
    console.log("state changed")
}

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


export let state = {
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
}


export const addPost = () => {
    let newPost = {id: "4", message: state.profilePage.newPostText, likesCount: 0};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {id: "6", message: state.dialogsPage.newMessageText};
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText: string) => {
    state.dialogsPage.newMessageText = newText
    rerenderEntireTree(state);
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}