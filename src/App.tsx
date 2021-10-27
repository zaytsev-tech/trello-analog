import { StorProvider } from './components/localstorage/storage-provider';
import { LoginForm } from './components/login/index';

function App() {
  //const [cards, setCards] = useState(Initializer());

  return (
    <div className="App">
      <StorProvider>
        <LoginForm />
      </StorProvider>
    </div>
  );
}
export default App;
