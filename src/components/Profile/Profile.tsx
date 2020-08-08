import React from 'react';
// import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// import {DispatchActionType, ProfilePageType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

/*type PropsType = {
    store: StoreType
}*/

const Profile = () => {

    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;