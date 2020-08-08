import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import Post from "./Post/Post";
import {DispatchActionType, PostType, StateType, StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextCreater} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";





let mapStateToProps = (state: StateType) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: DispatchActionType) => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextCreater(text)
            dispatch(action);
        },
        addPost: () => {
            let action = addPostActionCreator()
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
