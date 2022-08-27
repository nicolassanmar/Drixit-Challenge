db.createUser({
  user: 'user',
  pwd: 'pass',
  roles: [
    {
      role: 'readWrite',
      db: 'drixit',
    },
  ],
});

db.createCollection('users');

db.users.insertMany([
  {
    id: 'it-drixit-1',
    avatar:
      'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
    email: 'it@drixit.com',
    password: 'some-password',
    name: 'IT',
    surname: 'Drixit',
    age: 25,
    role: 'admin',
  },
  {
    id: 'info-drixit-2',
    avatar:
      'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
    email: 'info@drixit.com',
    password: 'other-password',
    name: 'Info',
    surname: 'Drixit',
    age: 30,
    role: 'user',
  },
]);
