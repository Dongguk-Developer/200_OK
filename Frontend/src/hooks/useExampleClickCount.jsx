import { useState } from 'react';
import { toast } from 'react-toastify';
import useExampleCountStore from '../stores/useExampleCountStore';

const useExampleClickCount = () => {
  const [count, setCount] = useState(0);
  const toastMessages = ['Team 200 OK', '아자아자', '화이팅'];
  const { zustandCount, zustandIncrement } = useExampleCountStore();

  // 잘못된 예시
  let wrongCount = 0;

  const incrementCount = () => {
    wrongCount++;
    setCount(count + 1);
    zustandIncrement();
    toast.info(toastMessages[count % 3]);
  };

  const countMessage = `ExampleButton ${wrongCount} ${count} ${zustandCount}`;

  return {
    incrementCount,
    countMessage,
  };
};

export default useExampleClickCount;
