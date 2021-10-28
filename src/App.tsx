import { LoginForm } from './components/login/index';
import { StorProvider } from './components/provider/storage-provider';

function App() {
  return (
    <div className="App">
      <StorProvider>
        <LoginForm />
      </StorProvider>
    </div>
  );
}
export default App;
