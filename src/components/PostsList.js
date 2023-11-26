import { useSelector } from 'react-redux';
import { compareDesc, parseISO } from 'date-fns';
import ReactionButtons from './ReactionButtons';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostsList = () => {
  const posts = useSelector(store => store.posts);

  const orderedPosts = posts
    .slice()
    .sort((postOne, postTwo) => compareDesc(parseISO(postOne.date), parseISO(postTwo.date)));

  return (
    <section className='space-y-4'>
      {orderedPosts.map((post, index) => (
        <article className='border border-gray-500 rounded-2xl px-6 py-5 space-y-2.5' key={index}>
          <h1 className='text-xl'>{post.title}</h1>
          <p>{post.content}</p>
          <p>
            - <PostAuthor authorId={post.userId} />, <TimeAgo timestamp={post.date} />
          </p>
          <ReactionButtons post={post} />
        </article>
      ))}
    </section>
  );
};

export default PostsList;
