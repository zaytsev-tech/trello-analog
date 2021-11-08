import { BoardPlace } from './components/board';
import { BoardProvider } from './components/providers/index';
import { UserForm } from './components/user/index';
import { GlobalStyle } from './styles/index';

function App() {
  return (
    <div className="App">
      <BoardProvider>
        <UserForm />
        <BoardPlace />
      </BoardProvider>
      <GlobalStyle />
    </div>
  );
}
export default App;
