import { LoginForm } from './components/login/index';
import { StorProvider } from './components/provider/storage-provider';
import { GlobalStyle } from './styles/index';

function App() {
  return (
    <div className="App">
      <StorProvider>
        <LoginForm />
      </StorProvider>
      <GlobalStyle />
    </div>
  );
}
export default App;
