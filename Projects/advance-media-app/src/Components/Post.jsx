// import { useContext } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import PostList from "./PostList";

// const Post = ({ post }) => {
  
//   const {deletePost} = useContext(PostList);


//     return (
//         <div className="card post-card" style={{width: "30rem"}}>
//   <div className="card-body">
//     <h5 className="card-title">{post.title}
//     <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//     onClick={() => deletePost(post.id)}>
//     <AiFillDelete/>
//    </span>
//     </h5>
//     <p className="card-text">{post.body}</p>
//     {post.tags.map((tag) => (<span key={tag} className="badge text-bg-primary hashtag">{tag}
//     </span>))}
//     <div class="alert alert-success reactions" role="alert">
//        This post has been reacted by {post.reactions} people.
//    </div>
//   </div>
// </div>
//     );
// }

// export default Post;

// import { useContext } from "react";
// import { AiFillDelete } from "react-icons/ai";
// import { PostListContext } from "../Store/post-list-store";

// const Post = ({ post }) => {
//   const { deletePost } = useContext(PostListContext);

//   return (
//     <div className="card post-card" style={{ width: "30rem" }}>
//       <div className="card-body">
//         <h5 className="card-title">
//           {post.title}
//           <span
//             className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//             onClick={() => deletePost(post.id)}
//           >
//             <AiFillDelete />
//           </span>
//         </h5>
//         <p className="card-text">{post.body}</p>
//         {post.tags.map((tag) => (
//           <span key={tag} className="badge text-bg-primary hashtag">
//             {tag}
//           </span>
//         ))}
//         <div className="alert alert-success reactions" role="alert">
//           This post has been reacted by {post.reactions} people.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Post;


//////////////// New code of POst.jsx File 

import { useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostListContext } from "../Store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  const [likes, setLikes] = useState(post.likes || 0);
  const [dislikes, setDislikes] = useState(post.dislikes || 0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
            style={{ cursor: "pointer" }}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags && post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post has been reacted by {typeof post.reactions === 'number' ? post.reactions : 0} people.
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button className="btn btn-primary" onClick={handleLike}>
            Like ({likes})
          </button>
          <button className="btn btn-secondary" onClick={handleDislike}>
            Dislike ({dislikes})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;



