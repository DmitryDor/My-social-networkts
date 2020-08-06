import React, {ChangeEvent, RefObject} from 'react';
import {ActionType, addPostAC, PostType, updateNewPostAC} from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import {store} from "../../../../redux/redux-store";


type PropsType = {
    /* postData: Array<PostType>
     newPostText: string
     dispatch: (action: ActionType) => void*/
    store: any
}

export const MyPostsContainer = (props: PropsType) => {
    let state = store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC());
    }
    const onPostChange = (text: string) => {
        let action = updateNewPostAC(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} newPostText={state.profilePage.newPostText}
                 postData={state.profilePage.posts}/>
    );
}

