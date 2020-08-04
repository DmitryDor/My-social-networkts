

export type PostsType = Array<PostType>

export type PostType = {
    id: string,
    message: string,
    likesCount: number
}

 export type InitialStateType =  {
    posts: PostsType
    newPostText: string
}
export type ActionType = {
    type: 'ADD-POST' | 'UPDATE-NEW-POST-TEXT'
    newText?: string
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState: InitialStateType = {
    posts: [
        {id: "1", message: "Hi, how are you?", likesCount: 10},
        {id: "2", message: "It's my post", likesCount: 5},
        {id: "3", message: "it's you post", likesCount: 7}
    ],
    newPostText: ''
}


export const profileReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: "4", message: state.newPostText, likesCount: 0};
            state.posts.push(newPost);
            state.newPostText = ''
            return state;
        case "UPDATE-NEW-POST-TEXT":
            if (action.newText) {
                state.newPostText = action.newText
                return state;
            }
                default:
                    return state
            }
    }

export const addPostAC = (): ActionType => ({type: ADD_POST})

export const updateNewPostAC = (text: string): ActionType => ({type: UPDATE_NEW_POST_TEXT, newText: text})