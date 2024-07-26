import { Link } from 'react-router-dom';
import { exercises } from './exercises';
import './Learn.css';

function Learn() {
  return (
    <div className="learn-container">
      <h1>explore yoga positions and exercises</h1>
      <ul className="exercise-list">
        {exercises.map(exercise => (
          <li key={exercise.id}>
            <Link to={`/exercise/${exercise.id}`} className="exercise-item">{exercise.name}</Link>
            <p className="description">{exercise.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Learn;