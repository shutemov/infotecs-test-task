import { data as users } from "./data.js";

export const getAllUsers = () => {
  return users;
};

export const getUserById = (id) => {
  return users.find((user) => {
    return user.id === id;
  });
};

};
