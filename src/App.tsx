import { ThemeProvider } from 'styled-components';

import { BoardPlace } from './components/board/board-place';
import { BoardProvider } from './components/providers';
import { UserForm } from './components/user';
import { GlobalStyle, theme } from './styles';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BoardProvider>
          <UserForm />
          <BoardPlace />
        </BoardProvider>
      </ThemeProvider>
      <GlobalStyle />
    </div>
  );
}
export default App;
