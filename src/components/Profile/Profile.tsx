import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../redux/state";

type PropsType = {
    state: ProfilePageType
}

  const Profile = (props: PropsType) => {


    return (
        <div >
            <ProfileInfo/>
            <MyPosts postData={props.state.posts}/>
        </div>
    );
}

export default Profile;