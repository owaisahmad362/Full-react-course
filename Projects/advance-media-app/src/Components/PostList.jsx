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

// import { useContext, useEffect } from "react";
// import Post from "./Post";
// import { PostListContext } from "../Store/post-list-store";
// import WelcomeMessge from "./WelcomeMessage";

// const PostList = () => {
//     const { postList, addInitialPosts } = useContext(PostListContext);


//       useEffect(() => {
//         fetch("https://dummyjson.com/posts")
//          .then((res) => res.json())
//          .then((data) => {
//           addInitialPosts(data.posts);
//          });
        
//       }, []);
    

//     return (
        
//         <>
//           {postList.length === 0 && <WelcomeMessge />}
//           {postList.map((post) => (
//                 <Post key={post.id} post={post} />
//             ))}
//         </>
//     );
// };

// export default PostList;

////////////////////////////////////
//////////////////////////////////
///////////////////////////////


// import { useContext, useEffect, useState } from "react";
// import Post from "./Post";
// import { PostListContext } from "../Store/post-list-store";
// import WelcomeMessge from "./WelcomeMessage";

// const PostList = () => {
//     const { postList, addInitialPosts } = useContext(PostListContext);
//     const [fetching, setFetching] = useState(false);

//     // const handleGetPostsClick = () => {
      
//     // }
//     useEffect(() => {
//       fetch("https://dummyjson.com/posts")  // Ensure the URL is correct
//       .then(res => res.json())
//       .then(data => {
//         addInitialPosts(data.posts);  // Ensure this is matching the data structure
//         setFetching(false);
//       })
//       // .catch(error => console.error('Error fetching posts:', error)); // Extra line code compare to my code....
//     }, []);

//     return (
//         <>
//           {postList.length === 0 && <WelcomeMessge onGetPostsClick={handleGetPostsClick} />}
//           {postList.map((post) => (
//                 <Post key={post.id} post={post} />
//             ))}
//         </>
//     );
// };

// export default PostList;

// My New code 
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../Store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
    const { postList, addInitialPosts } = useContext(PostListContext);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        // Only fetch data if the postList is empty to prevent refetching
        if (postList.length === 0) {
            fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then((data) => {
                addInitialPosts(data.posts);
                setFetching(false); // Stop fetching state after posts are loaded
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
                setFetching(false); // Handle errors
            });
        } else {
            setFetching(false); // If posts are already loaded, no need to fetch
        }
    }, [postList, addInitialPosts]);

    return (
        <>
          {fetching && <LoadingSpinner />} {/* Show loading message while fetching */}
          {!fetching && postList.length === 0 && <WelcomeMessage />} {/* Show welcome message if no posts */}
          {!fetching && postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </>
    );
};

export default PostList;


