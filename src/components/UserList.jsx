import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/users/userSlice';
import { Card, Button } from './index';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className='flex flex-row gap-2 flex-wrap'>
      {users.map((user) => (
        <Card key={user.id} title={user.name}>
          <p className="text-gray-700">{user.email}</p>
          <Button className="mt-2">View Profile</Button>
        </Card>
      ))}
      </div>
    </div>
  );
};

export default UserList;
