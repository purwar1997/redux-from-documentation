import { useSelector } from 'react-redux';

const PostAuthor = ({ authorId }) => {
  const users = useSelector(store => store.users);

  const author = users.find(user => user.id === authorId);

  return <span>{author ? author.name : 'Unknown author'}</span>;
};

export default PostAuthor;
