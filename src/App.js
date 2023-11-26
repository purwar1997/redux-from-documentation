import PostsList from './components/PostsList';
import AddPostForm from './components/AddPostForm';

const App = () => {
  return (
    <main className='px-40 py-10 space-y-10'>
      <AddPostForm />
      <PostsList />
    </main>
  );
};

export default App;
