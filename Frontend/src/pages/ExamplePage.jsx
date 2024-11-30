import { Link } from 'react-router-dom';
import styles from './ExamplePage.module.css';
import ExampleButton from '../components/ExampleButton';
import useExampleClickCount from '../hooks/useExampleClickCount';
import useFetchExampleImageQuery from '../apis/useFetchExampleImageQuery';

const ExamplePage = () => {
  const { countMessage, incrementCount } = useExampleClickCount();

  return (
    <div className={styles['example-page']}>
      <h1>ExamplePage</h1>
      <span className={styles['hello-world']}>
        Hello world! <strong>Hello Team 200 OK!</strong>
      </span>
      <ExampleImage />
      <ExampleButton onClick={incrementCount}>{countMessage}</ExampleButton>
      <Link to="/">루트 페이지로</Link>
    </div>
  );
};

const ExampleImage = () => {
  const { data, isLoading, isError, error } = useFetchExampleImageQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <img src={data.url} alt={data.title} style={{ maxWidth: '300px' }} />
    </div>
  );
};

export default ExamplePage;
