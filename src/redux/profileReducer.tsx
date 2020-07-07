import {DispatchActionType, StateType} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state: any, action: DispatchActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPostData = {
                id: "5",
                message: state.newPostText,
                likesCount: 0
            };
            state.postData.push(newPostData);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default :
            return state
    }
}
export const addPostActionCreator = () =>( { type: ADD_POST } )

export const updateNewPostTextCreater = (text: string) => ( { type: UPDATE_NEW_POST_TEXT, newText: text } )

export default profileReducer;