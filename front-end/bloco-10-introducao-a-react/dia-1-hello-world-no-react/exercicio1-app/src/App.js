import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const array = ['Academia', 'Almoço', 'Estudar', 'Ler'];
  return (
    <ul>
      <li>{array.map( (item) => Task(item))}</li>
    </ul>
  );
}

export default App;
