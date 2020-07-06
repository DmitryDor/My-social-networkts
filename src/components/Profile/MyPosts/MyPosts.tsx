import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {DispatchActionType, PostType} from "../../../redux/state";
import {type} from "os";


type PropsType = {
    postData: Array<PostType>,
    /*addPost: Function,*/
    newPostText: string
    /*updateNewPostText:Function*/
    dispatch: (action: DispatchActionType) => void

}


const MyPosts = (props: PropsType) => {

    /*let postElements = postData.map( (post) => {
        return (
            <Post message={post.message} likesCount={post.likesCount} id={post.id}/>
        )
    }) Ниже эта же запись в сокращённром варианте*/

    let postElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                        id={post.id}/>);

    let newPostElement: any = React.createRef();
    let addPost = () => {
        props.dispatch({type: "ADD-POST"});

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});

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