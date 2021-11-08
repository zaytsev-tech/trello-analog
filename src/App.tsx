import { ThemeProvider } from 'styled-components';

import { BoardPlace } from './components/board';
import { BoardProvider } from './components/providers/index';
import { UserForm } from './components/user/index';
import { GlobalStyle, theme } from './styles/index';

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
