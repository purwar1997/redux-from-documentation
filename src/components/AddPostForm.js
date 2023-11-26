import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPost } from '../app/slices/postsSlice';

const AddPostForm = () => {
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postAuthor, setPostAuthor] = useState('');

  const users = useSelector(store => store.users);
  const dispatch = useDispatch();

  const canSave = [postTitle, postContent, postAuthor].every(Boolean);

  const onSavePostClicked = () => {
    dispatch(addPost(postTitle, postContent, postAuthor));

    setPostTitle('');
    setPostContent('');
    setPostAuthor('');
  };

  return (
    <section>
      <h1 className='text-2xl'>Add post</h1>

      <form className='mt-8 space-y-4'>
        <div className='flex items-start gap-4'>
          <label className='w-28' htmlFor='postTitle'>
            Post title
          </label>

          <input
            className='border border-gray-500 rounded px-3 py-2.5 flex-1 focus:outline-none'
            type='text'
            id='postTitle'
            value={postTitle}
            onChange={e => setPostTitle(e.target.value)}
          />
        </div>

        <div className='flex items-start gap-4'>
          <label className='w-28' htmlFor='postContent'>
            Post content
          </label>

          <textarea
            className='border border-gray-500 rounded px-3 py-2.5 flex-1 h-32 resize-none focus:outline-none'
            id='postContent'
            value={postContent}
            onChange={e => setPostContent(e.target.value)}
          />
        </div>

        <div className='flex items-start gap-4'>
          <label className='w-28' htmlFor='postAuthor'>
            Post author
          </label>

          <select
            className='border border-gray-500 rounded px-2 py-2.5 flex-1 focus:outline-none'
            id='postAuthor'
            onChange={e => setPostAuthor(e.target.value)}
          >
            <option disabled hidden selected={postAuthor === ''}>
              -- Please select an option --
            </option>

            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <button
          className='ml-32 border border-gray-500 px-6 py-1.5 rounded'
          type='button'
          disabled={!canSave}
          onClick={onSavePostClicked}
        >
          Save
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
