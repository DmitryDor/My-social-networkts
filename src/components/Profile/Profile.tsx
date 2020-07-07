import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {DispatchActionType, ProfilePageType} from "../../redux/state";


type PropsType = {
    profilePage: ProfilePageType
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