import { getAllPosts } from '../../services/apiConfig';
import PostCard from './PostCard';
import { useEffect, useState } from 'react'

export default function PostContainer(props) {
  const [posts, setPosts] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    postTime();
  }, [toggle]);

  const postTime = async () => {
    const res = await getAllPosts();
    setPosts(res);
  };

  return (
    <div>
      {posts.map((post) => {
        return (<PostCard key={post.id} post={post} setToggle={setToggle} />)
      })}
    </div>
  )
}
