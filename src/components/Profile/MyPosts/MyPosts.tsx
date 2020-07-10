import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {DispatchActionType, PostType} from "../../../redux/store";


type PropsType = {
    postData: Array<PostType>,
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

const MyPosts = (props: PropsType) => {

    let postElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                        id={post.id}/>);

    let newPostElement: any = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;