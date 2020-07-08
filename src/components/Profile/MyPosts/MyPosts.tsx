import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { DispatchActionType, PostType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextCreater} from "../../../redux/profileReducer";


type PropsType = {
    postData: Array<PostType>,
    newPostText: string
    dispatch: (action: DispatchActionType) => void
}

const MyPosts = (props: PropsType) => {

    let postElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                        id={post.id}/>);

    let newPostElement: any = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextCreater(text));
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;