import * as React from 'react';
import AppNavigation from '@/navigation/AppNavigation';
import AuthProvider from '@/context/AuthContext';import TaskProvider from '@/context/TaskContext';
''

function App() {

  return (
    <AuthProvider>
      <TaskProvider>
      <AppNavigation />
      </TaskProvider>
    </AuthProvider>
  )
}

export default App;