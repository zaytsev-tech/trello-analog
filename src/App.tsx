import { BoardPlace } from './components/board';
import { LoginForm } from './components/login/index';
import { StorProvider } from './components/provider/storage-provider';
import { GlobalStyle } from './styles/index';

function App() {
  return (
    <div className="App">
      <StorProvider>
        <LoginForm />
        <BoardPlace />
      </StorProvider>
      <GlobalStyle />
    </div>
  );
}
export default App;
