import { createContext, useReducer } from "react";

// Define the default post list before using it
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to KpK",
    body: "Hi friends, I am going to Kpk for my vacations. Hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "KPk", "Enjoying"],
  },
  {
    id: "2",
    title: "Pass ho hye bhai",
    body: "4 saal ke baad bhi ho gye hain pass, Hard to believe.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievible"],
  },
];

// Create the context
export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// Define the reducer function
const postListReducer = (currPostList, action) => {
//   switch (action.type) {
//     case "ADD_POST":
//       return [...currPostList, action.payload];
//     case "DELETE_POST":
//       return currPostList.filter((post) => post.id !== action.payload.postId);
//     default:
//       return currPostList;
//   }

   let newPostList = currPostList;
   if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
        (post) => post.id !== action.payload.postId);
   }else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
   }
   return newPostList;
};

// Define the provider component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList ({
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
    // dispatchPostList({ type: "ADD_POST", payload: newPost });
  };

  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_POST", payload: { postId } });
  };

  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
