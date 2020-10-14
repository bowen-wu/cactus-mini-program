import { useEffect, useState } from 'react';
import Unstated from '@/unstated';

interface Task {
  name: string;
  time: number;
}

const useTask = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const unstated = Unstated.useContainer();

  useEffect(() => {
    setTimeout(() => {
      setTaskList([{ name: 'useTask taskList[0] name', time: Date.now() }]);
    }, 3000);
  }, []);

  return { ...unstated, taskList };
};

export default useTask;
