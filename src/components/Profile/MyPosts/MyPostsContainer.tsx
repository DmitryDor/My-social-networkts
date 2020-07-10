import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import Post from "./Post/Post";
import {DispatchActionType, PostType, StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextCreater} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

type PropsType = {
    store: StoreType
}

const MyPostsContainer = (props: PropsType) => {
    let state = props.store.getState();

    let addPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action);

    }
    let onPostChange = (text: string) => {
        let action = updateNewPostTextCreater(text)
        props.store.dispatch(action);
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} postData={state.profilePage.postData}
                 newPostText={state.profilePage.newPostText}/>
    );
}

export default MyPostsContainer;