const ReactionButtons = ({ reactions }) => {
  const emojis = { thumbsUp: '👍', wow: '😲', heart: '❤', rocket: '🚀', coffee: '☕' };

  return (
    <div className='flex gap-5'>
      {Object.entries(emojis).map(([emojiName, emojiSymbol]) => (
        <div className='space-x-2' key={emojiName}>
          <span>{emojiSymbol}</span>
          <span>{reactions[emojiName]}</span>
        </div>
      ))}
    </div>
  );
};

export default ReactionButtons;
