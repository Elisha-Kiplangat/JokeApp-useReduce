
import { useReducer } from 'react';
import './App.scss';
import Joke from './components/Joke';
import { jokesReducer, initialState } from './components/Jokereducer';

interface Joke {
  id: number;
  joke: string;
  rate: number;
}

function App() {
  const [jokes, dispatch] = useReducer(jokesReducer, initialState);

  const updateRate = (id: number, rate: number) => {
    dispatch({ type: 'UPDATE_RATE', payload: { id, rate } });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newJoke = (e.target).elements[0].value;
    dispatch({ type: 'ADD_JOKE', payload: newJoke });
    (e.target).reset(); 
  };

  return (
    <div className='container'>
      <h2>Jokes for you 💀</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder='Add a joke' />
        <button type='submit'>Add Joke</button>
      </form>
      <div className="jokes">
        {jokes && jokes.sort((a, b) => b.rate - a.rate).map((joke) => (
          <Joke key={joke.id} id={joke.id} joke={joke.joke} rate={joke.rate} updateRate={updateRate} />
        ))}
      </div>
    </div>
  );
}

export default App;
