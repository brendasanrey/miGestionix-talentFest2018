export default (to, from, next) => {
  // Verifica si hay un usuario activo, con sesión
  if (localStorage.getItem("access_token").length < 0) {
    next({ path: "/" });
  } else {
    next();
  }
};
