import {ActionType, ProfilePageType} from "./state";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


export const profileReducer = (state: ProfilePageType, action: ActionType) => {
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