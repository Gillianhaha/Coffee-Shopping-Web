import Button from "./Button";
import './LoginForm.css';
function LoginForm({ onLogin, username, setUsername }) {

  function onChange(e) {
    setUsername(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    if(username) {
      onLogin(username);
    }
  }

  return (
      <div className="login">
        <form className="login-form" action="#/login" onSubmit={onSubmit}>
          <h2 className="login-title">Login to Explore Coffee World!</h2>
          <label htmlFor="login-username">
            <span>Username:</span>
            <input id="login-username" className="login-username" value={username} onChange={onChange}/>
          </label>
          <Button className="login-button" type="submit">Login</Button>
        </form>
      </div>
  );

}

export default LoginForm;
