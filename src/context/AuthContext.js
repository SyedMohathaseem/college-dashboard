import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('muc_orbit_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock login - replace with actual API call
    const mockUsers = {
      'admin@muc.edu': { id: 1, name: 'Admin User', email: 'admin@muc.edu', role: 'admin', avatar: null },
      'teacher@muc.edu': { id: 2, name: 'Dr. Sarah Johnson', email: 'teacher@muc.edu', role: 'teacher', department: 'Computer Science', avatar: null },
      'student@muc.edu': { id: 3, name: 'John Smith', email: 'student@muc.edu', role: 'student', studentId: 'STU2024001', department: 'Computer Science', semester: 4, avatar: null },
    };

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockUsers[email];
        if (user && password === 'password123') {
          setUser(user);
          localStorage.setItem('muc_orbit_user', JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const mockLogin = (role) => {
    const mockUsers = {
      admin: { id: 1, name: 'Admin User', email: 'admin@muc.edu', role: 'admin', avatar: null },
      teacher: { id: 2, name: 'Dr. Sarah Johnson', email: 'teacher@muc.edu', role: 'teacher', department: 'Computer Science', avatar: null },
      student: { id: 3, name: 'John Smith', email: 'student@muc.edu', role: 'student', studentId: 'STU2024001', department: 'Computer Science', semester: 4, avatar: null },
    };

    const user = mockUsers[role];
    if (user) {
      setUser(user);
      localStorage.setItem('muc_orbit_user', JSON.stringify(user));
      return user;
    }
    return null;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('muc_orbit_user');
  };

  const updateUser = (updatedData) => {
    const newUser = { ...user, ...updatedData };
    setUser(newUser);
    localStorage.setItem('muc_orbit_user', JSON.stringify(newUser));
  };

  const value = {
    user,
    login,
    mockLogin,
    logout,
    updateUser,
    loading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
