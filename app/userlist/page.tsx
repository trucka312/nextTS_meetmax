"use client"

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsersRequest } from '../../redux/actions';
import { AppState } from '@/redux/reducer';

const page = () => {
  const users = useSelector((state: AppState) => state.users);
  const loading = useSelector((state: AppState) => state.loading);
  const error = useSelector((state: AppState) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {users.map((user : any) => (
        <li key={user.id}>{user.name}</li>
      ))}
   </ul>
  );
};

export default page;