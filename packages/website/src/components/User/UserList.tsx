import React, { FC } from "react";

export interface IUserListProps {
  /** List of users */
  users: string[];
}

const UserList: FC<IUserListProps> = ({ users }) => (
  <ul>
    {users.map(user => (
      <li>{user}</li>
    ))}
  </ul>
);

export default UserList;
