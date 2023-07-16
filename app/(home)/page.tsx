'use client';
import Button from '@/components/atoms/Button';
import { increment } from '@/redux/actions/counterAction';
import { useDispatch, useSelector } from 'react-redux';

export default function HomePage() {
  const counter = useSelector((value: any) => value.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: 'increment_counter' });
  };
  const handleDecrement = () => {
    dispatch({ type: 'decrement_counter' });
  };
  return (
    <main className='flex  flex-col items-center justify-between p-24'>
      <h1 className=''>Home Page</h1>
      <div className='flex gap-x-5 m-5 justify-center items-center bg-bluePrimary-80 text-white rounded-lg'>
        <Button onClick={handleIncrement}>Increment</Button>
        <span className='bg-redPrimary p-5 rounded-lg text-2xl'>{counter}</span>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div>
      <Button>Follow</Button>
      <Button kind='outline'>Ignore</Button>
    </main>
  );
}
