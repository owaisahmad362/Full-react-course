// import { createContext, useReducer } from "react";

// // Define the default post list before using it

// // Create the context
// export const PostListContext = createContext({
//   postList: [],
//   addPost: () => {},
//   addInitialPosts: () => {},
//   deletePost: () => {},
// });

// // Define the reducer function
// const postListReducer = (currPostList, action) => {

//    let newPostList = currPostList;
//    if (action.type === "DELETE_POST") {
//     newPostList = currPostList.filter(
//         (post) => post.id !== action.payload.postId);
//    } else if (action.type === "ADD_INITIAL_POSTS") {
//         newPostList = action.payload.posts;
//   } else if (action.type === "ADD_POST") {
//     newPostList = [action.payload, ...currPostList];
//   }
//    return newPostList;
// };

// // Define the provider component
// const PostListProvider = ({ children }) => {
//   const [postList, dispatchPostList] = useReducer(postListReducer, []);

//   const addPost = (userId, postTitle, postBody, reactions, tags) => {
//     dispatchPostList ({
//       type: "ADD_POST",
//       payload: {
//         id: Date.now(),
//         title: postTitle,
//         body: postBody,
//         reactions: reactions,
//         userId: userId, 
//         tags: tags,
//       },
//     });
//     // dispatchPostList({ type: "ADD_POST", payload: newPost });
//   };

//   const addInitialPosts = (posts) => {
//     dispatchPostList ({
//       type: "ADD_INITIAL_POSTS",
//       payload: {
//         posts,
//       },
//     });
//     // dispatchPostList({ type: "ADD_POST", payload: newPost });
//   };

//   const deletePost = (postId) => {
//     dispatchPostList({ type: "DELETE_POST", payload: { postId } });
//   };

//   return (
//     <PostListContext.Provider value={{ postList, addPost, addInitialPosts, deletePost }}>
//       {children}
//     </PostListContext.Provider>
//   );
// };

// export default PostListProvider;

//////////////
/////////
////////////
////////
import { createContext, useReducer } from "react";

// Create the context
export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

// Define the reducer function
const postListReducer = (currPostList, action) => {
  if (action.type === "DELETE_POST") {
    return currPostList.filter(post => post.id !== action.payload.postId);
  } else if (action.type === "ADD_INITIAL_POSTS") {
    // Ensure a new state array is returned
    return [...action.payload.posts];
  } else if (action.type === "ADD_POST") {
    return [action.payload, ...currPostList];
  }
  return currPostList;
};

// Define the provider component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, addInitialPosts, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
