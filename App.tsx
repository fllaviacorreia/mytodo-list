import * as React from 'react';
import AppNavigation from '@/navigation/AppNavigation';
import AuthProvider from '@/context/AuthContext';

function App() {

  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  )
}

export default App;