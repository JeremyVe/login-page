import { useEffect, useState } from 'react';
import Input from './Input';
import './LoginForm.css';

export default function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  useEffect(() => {
    if (username.length && password.length) {
      setIsSubmitDisabled(false)
    } else {
      setIsSubmitDisabled(true)
    }
  }, [username, password]);

  const handleOnClick = (e) => {
    e.preventDefault();

    props.onSubmit({username, password});
  }

  return (
    <div className="login-form">
      <div className="login-header">Login</div>
      <Input type="text" value={username} inputType="username" onChange={(e) => setUsername(e.target.value)} />
      <Input type="password" value={password} inputType="password" onChange={(e) => setPassword(e.target.value)} />
      <button className="submit-bottom" onClick={handleOnClick} disabled={isSubmitDisabled}>Submit</button>
    </div>
  )
}