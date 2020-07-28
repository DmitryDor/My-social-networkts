import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType} from "../../redux/state";

type PropsType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
}

  const Profile = (props: PropsType) => {


    return (
        <div >
            <ProfileInfo/>
            <MyPosts postData={props.state.posts} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;