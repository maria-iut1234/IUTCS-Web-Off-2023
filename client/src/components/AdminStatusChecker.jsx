import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

const AdminStatusChecker = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');

    if (adminToken) {
      const decodedToken = jwtDecode(adminToken);
      const userIsAdmin = decodedToken.isAdmin;

      if (userIsAdmin) {
        setIsAdmin(true);
      }
    }
  }, []);

  return isAdmin;
};

export default AdminStatusChecker;
