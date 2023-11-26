import { useSelector } from 'react-redux';
import ReactionButtons from './ReactionButtons';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostsList = () => {
  const posts = useSelector(store => store.posts);

  return (
    <section className='space-y-4'>
      {posts.map((post, index) => (
        <article className='border border-gray-500 rounded-2xl px-6 py-5 space-y-2.5' key={index}>
          <h1 className='text-xl'>{post.title}</h1>
          <p>{post.content}</p>
          <p>
            - <PostAuthor authorId={post.userId} />, <TimeAgo timestamp={post.date} />
          </p>
          <ReactionButtons reactions={post.reactions} />
        </article>
      ))}
    </section>
  );
};

export default PostsList;
