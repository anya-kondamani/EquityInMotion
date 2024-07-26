import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { exercises } from './exercises';
import './ExerciseDetail.css';

const ExerciseDetail = () => {
  const { id } = useParams();
  //const history = useHistory();
  const navigate = useNavigate();

  const exercise = exercises.find((ex) => ex.id === parseInt(id));

  if (!exercise) {
    return <div>Exercise not found</div>;
  }

  return (
    <div>
      <button className="button" onClick={() => navigate(-1)}>back to exercises</button>
      <h1>{exercise.name}</h1>
      <p className="description">{exercise.description}</p>
      <h2>instructions</h2>
      <ul className="instructions">
        {exercise.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ul>
      <div className="images">
      {exercise.images.map((src, index) => (
        <img key={index} src={src} alt={exercise.name} />
      ))}
      </div>
    </div>
  );
};

export default ExerciseDetail;


