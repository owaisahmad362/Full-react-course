// import { useContext } from "react";
// import Post from "./Post";
// import { PostList as PostListData} from "../Store/post-list-store";

// const PostList = () => {
//     const {postList} = useContext(PostListData);
//     return(
//         <>
//         {postList.map((post) => <Post key={post.id} post={post}/>)}
//         </>
//     );
// }

// export default PostList;

////////////////////////////////////
import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../Store/post-list-store";

const PostList = () => {
    const { postList } = useContext(PostListContext);
    return (
        
        <>
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
};

export default PostList;
