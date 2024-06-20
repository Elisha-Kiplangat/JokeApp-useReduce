import './Joke.scss'


interface JokeProps {
  id: number;
  joke: string;
  rate: number;
  updateRate: (id: number, rate: number) => void;
}

const Joke = ({ id, joke, rate, updateRate }: JokeProps) => {
  return (
    <div className='joke'>
      <div className='joke-text'>{joke}</div>
      <div className='text'>{rate}</div>
      <div className="joke-buttons">
        <button onClick={() => updateRate(id, rate + 1)}>👍</button>
        <button onClick={() => updateRate(id, rate - 1)}>👎</button>
      </div>
    </div>
  );
}

export default Joke;
