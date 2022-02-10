import { useState } from "react";

const Login = ({ onLogin }) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
  const onLoginHandler = (e) => {
    e.preventDefault();
    onLogin({username, password});
  };
  return (
    <form onSubmit={onLoginHandler}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" onChange={(e) => setUserName(e?.target?.value)}/>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={(e) => setPassword(e?.target?.value)}/>

      <button type="submit" />
    </form>
  );
};

export default Login;
