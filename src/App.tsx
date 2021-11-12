import { ThemeProvider } from 'styled-components';

import { BoardPlace } from './views/components/board/board-place';
import { BoardProvider } from './views/components/providers';
import { UserForm } from './views/components/user';
import { GlobalStyle, theme } from './views/styles';

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
