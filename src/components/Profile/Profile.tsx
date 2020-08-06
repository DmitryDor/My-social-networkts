import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import {ActionType, InitialStateType} from "../../redux/profile-reducer";
import {MyPostsContainer} from "./MyPosts/Post/MyPostsContainer";

type PropsType = {
    // profilePage: InitialStateType
    /*addPost: () => void
    updateNewPostText: (newText: string) => void*/
    // dispatch: (action: ActionType) => void
    store: any
}

  const Profile = (props: PropsType) => {

    return (
        <div >
            <ProfileInfo/>
            <MyPostsContainer
              store={props.store}
            />
        </div>
    );
}

export default Profile;