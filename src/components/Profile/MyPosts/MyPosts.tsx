import React, {RefObject} from 'react';
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionType, PostType} from "../../../redux/state";


type PropsType = {
    postData: Array<PostType>
    // addPost: () => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
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

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
            // props.addPost()
        props.dispatch({type: 'ADD-POST'});

    }
    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            // props.updateNewPostText(text)
            let action: ActionType = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
            props.dispatch(action);
        }

    }


        return (
            <div className={styles.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea
                            placeholder='Enter your post'
                            ref={newPostElement}
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