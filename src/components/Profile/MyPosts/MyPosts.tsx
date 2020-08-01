import React, {ChangeEvent, RefObject} from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionType, PostType} from "../../../redux/state";
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";


type PropsType = {
    postData: Array<PostType>
    newPostText: string
    dispatch: (action: ActionType) => void
}

const MyPosts = (props: PropsType) => {

    /*let postElements = postData.map( (post) => {
        return (
            <Post message={post.message} likesCount={post.likesCount} id={post.id}/>
        )
    }) Ниже эта же запись в сокращённром варианте*/

    let postElements = props.postData.map(post => <Post message={post.message} likesCount={post.likesCount}
                                                        id={post.id}/>);

    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        // props.addPost()
        props.dispatch(addPostAC());

    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            let text = e.target.value
            let action = updateNewPostAC(text);
            props.dispatch(action);
            }


    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                        <textarea
                            placeholder='Enter your post'
                            // ref={newPostElement}
                            value={props.newPostText}
                            onChange={onPostChange}
                        />
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