import { useState } from 'react';

import { StorProvider } from './components/localstorage/storage-provider';
import { Initializer, InitializerUser } from './components/localstorage/storage-reducer';
import { LoginForm } from './components/login/index';

function App() {
  const [username, setUser] = useState(InitializerUser());
  //const [cards, setCards] = useState(Initializer());

  return (
    <div className="App">
      <StorProvider>
        <LoginForm value={username} />
      </StorProvider>
    </div>
  );
}
export default App;
