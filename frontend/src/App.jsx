import React from 'react'
import PageLinks from './utils/PageLinks'
import { UserProvider } from './contexts/UserContext';


const App = () => {
  return (
    <UserProvider>
      <PageLinks />
    </UserProvider>
  );
};

export default App
