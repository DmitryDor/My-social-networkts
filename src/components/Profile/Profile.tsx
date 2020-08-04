import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {ActionType, InitialStateType} from "../../redux/profile-reducer";

type PropsType = {
    profilePage: InitialStateType
    /*addPost: () => void
    updateNewPostText: (newText: string) => void*/
    dispatch: (action: ActionType) => void
}

  const Profile = (props: PropsType) => {


    return (
        <div >
            <ProfileInfo/>
            <MyPosts
                postData={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;