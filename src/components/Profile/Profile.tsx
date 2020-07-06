import React from 'react';

import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DispatchActionType, ProfilePageType} from "../../redux/state";
/*import {PostType} from "./../../index";*/


type PropsType = {
    profilePage: ProfilePageType
   /* addPost: Function,
    updateNewPostText: Function*/
    dispatch: (action: DispatchActionType) => void
}

  const Profile = (props: PropsType) => {


    return (
        <div >
            <ProfileInfo/>
            <MyPosts postData={props.profilePage.postData}
                     dispatch = {props.dispatch}
                     newPostText={props.profilePage.newPostText}

            />
        </div>
    );
}

export default Profile;