import jwtDecode from 'jwt-decode';

const AdminStatusChecker = () => {
  let isAdmin = false;
  const adminToken = localStorage.getItem("adminToken");

  if (adminToken) {
    const decodedToken = jwtDecode(adminToken);
    const userIsAdmin = decodedToken.isAdmin;

    if (userIsAdmin) {
      isAdmin = true;
    }
  }

  return isAdmin;
};

export default AdminStatusChecker;
