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
}
 export type DialogsPageType = {
    dialogs: DialogsType
    messages: MessagesType
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export let state = {
    profilePage: {
        posts: [
            {id: "1", message: "Dimych", likesCount: 10},
            {id: "2", message: "Andrey", likesCount: 5},
            {id: "3", message: "Sveta", likesCount: 7},
            {id: "4", message: "Sasha", likesCount: 8},
            {id: "5", message: "Victor", likesCount: 5},
            {id: "6", message: "Valera", likesCount: 18}
        ]
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
        ]

    }
}


