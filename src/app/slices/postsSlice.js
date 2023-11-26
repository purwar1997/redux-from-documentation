import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  {
    id: '1',
    title: 'Climate Change',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque praesentium accusamus aliquam mollitia ex iste quam voluptatum minus maxime harum, pariatur, adipisci sed temporibus obcaecati eos rerum nesciunt veniam! Quas',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      coffee: 0,
      rocket: 0,
    },
  },
  {
    id: '2',
    title: 'Sustainable Development',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime quam porro dolor voluptatum temporibus similique possimus corrupti assumenda officiis distinctio, minus velit consequuntur eveniet ea modi. Nihil tenetur provident exercitationem?',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      coffee: 0,
      rocket: 0,
    },
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      prepare(title, content, author) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId: author,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              coffee: 0,
              rocket: 0,
            },
          },
        };
      },
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
