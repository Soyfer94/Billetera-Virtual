import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email) return;
    addUser(user);
    setUser({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        placeholder="name"
      />
      <input
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default UserForm;
