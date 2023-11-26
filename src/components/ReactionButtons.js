const ReactionButtons = ({ reactions }) => {
  const emojis = { thumbsUp: '👍', wow: '😲', heart: '❤', rocket: '🚀', coffee: '☕' };

  return (
    <div className='space-x-5'>
      {Object.entries(emojis).map(([emojiName, emojiSymbol]) => (
        <button className='space-x-2' key={emojiName}>
          <span>{emojiSymbol}</span>
          <span>{reactions[emojiName]}</span>
        </button>
      ))}
    </div>
  );
};

export default ReactionButtons;
