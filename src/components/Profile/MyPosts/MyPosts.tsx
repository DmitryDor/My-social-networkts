import React, {RefObject} from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";


type PropsType = {
    postData: Array<PostType>
    addPost: (postMessage: string) => void
}


const MyPosts = (props: PropsType) => {

    /*let postElements = postData.map( (post) => {
        return (
            <Post message={post.message} likesCount={post.likesCount} id={post.id}/>
        )
    }) Ниже эта же запись в сокращённром варианте*/

    let postElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                        id={post.id}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)
        }
    }


        return (
            <div className={styles.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea placeholder='Enter your post' ref={newPostElement}/>
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