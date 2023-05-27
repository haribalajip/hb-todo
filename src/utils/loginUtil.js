export const isLoggedIn = () => {
  return window.localStorage.getItem("uid");
};

export const getCurrentUserId = () => {
  return isLoggedIn();
};
