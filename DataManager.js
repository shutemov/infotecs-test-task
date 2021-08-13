import { data as users } from "./data.js";

export const getAllUsers = () => {
  return users;
};

export const getUserById = (id) => {
  return users.find((user) => {
    return user.id === id;
  });
};

export const updateUser = (user) => {
  console.log(user);
  const targetId = user["id"];

  //update user in source
  users.forEach((user) => {
    if (user.id == targetId) user = user;
  });
};
