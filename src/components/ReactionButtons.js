import { useDispatch } from 'react-redux';
import { addReaction } from '../app/slices/postsSlice';

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const emojis = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '❤',
    rocket: '🚀',
    coffee: '☕',
  };

  return (
    <div className='space-x-5'>
      {Object.entries(emojis).map(([emojiName, emojiSymbol]) => (
        <button
          className='space-x-2'
          key={emojiName}
          onClick={() => dispatch(addReaction({ postId: post.id, reactionType: emojiName }))}
        >
          <span>{emojiSymbol}</span>
          <span>{post.reactions[emojiName]}</span>
        </button>
      ))}
    </div>
  );
};

export default ReactionButtons;
