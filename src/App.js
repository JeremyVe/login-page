import LoginForm from './components/LoginForm';

function App() {
  // onSubmit is setup here to respect the challenge and be passed as a prop to LoginForm
  const onSubmit = ({username, password}) => {
    console.log(`Login with username : ${username} and password: ${password}`)
  }
  return (
    <div className="App">
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
