import {DispatchActionType, ProfilePageType, StateType} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialeState = {
    postData: [
        {id: "1", message: "Hello", likesCount: 10},
        {id: "2", message: "Goodbyu", likesCount: 5},
        {id: "3", message: "I'm fine", likesCount: 7},
        {id: "4", message: "Good day!", likesCount: 8},
        {id: "5", message: "Year", likesCount: 5},
        {id: "6", message: "Welcome", likesCount: 18}
    ],
    newPostText: ""
}
type ProfileStateType = typeof initialeState

const profileReducer = (state: ProfileStateType = initialeState, action: DispatchActionType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPostData = {
                id: "5",
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPostData ],
                newPostText: ""
            }
           /* stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPostData)
            stateCopy.newPostText = "";*/
            // return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            if (action.newText) {
                return  {
                    ...state,
                    newPostText: action.newText
                }
                // stateCopy.newPostText = action.newText;
                // return stateCopy;
            }
        }
        default :
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextCreater = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;