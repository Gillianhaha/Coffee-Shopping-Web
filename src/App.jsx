import { useState, useEffect } from 'react';

import './App.css';
import './index.css';

import { LOGIN_STATUS, CLIENT, SERVER, } from './constants';
import { fetchSession, fetchLogin, fetchLogout, fetchAddToCart, fetchUpdateCart, fetchChangeUsername, fetchClearCart, fetchAddMessage, fetchAllMessages, fetchOnlineUsers, fetchAllData } from './services';
import Header from './Header';
import Main from './MainPart';
import Footer from './Footer';
import LoginForm from './LoginForm';
import Status from './Status';
import Loading from './Loading';

function App() {
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [loginStatus, setLoginStatus] = useState(LOGIN_STATUS.PENDING);
  const [isContentPending, setIsContentPending] = useState(false);
  const [page, setPage] = useState('Home');
  const [isDark, setIsDark] = useState(false);
  const [cart, setCart] = useState({});
  const [messages, setMessages] = useState({});
  const [onlineUsers, setOnlineUsers] = useState({});

  function onLogin(username) {
    setIsContentPending(true);
    fetchLogin(username)
      .then(response => {
        setError('');
        setPage('Home');
        setUsername(username);
        setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
        setMessages(response.messages);
        setCart(response.cart);
        setOnlineUsers(response.onlineUsers);
        setIsContentPending(false);
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }

  function onLogout() {
    setError('');
    setUsername('');
    setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
    setMessages({});
    setOnlineUsers({});
    setCart({});
    fetchLogout()
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }

  function checkForSession() {
    fetchSession()
      .then(session => {
        setUsername(session.username);
        setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
        return fetchAllData();
      })
      .catch(err => {
        if (err?.error === SERVER.AUTH_MISSING) {
          return Promise.reject({ error: CLIENT.NO_SESSION });
        }
        return Promise.reject(err);
      })
      .then(response => {
        setMessages(response.messages);
        setCart(response.cart);
        setOnlineUsers(response.onlineUsers);
      })
      .catch(err => {
        if (err?.error === CLIENT.NO_SESSION) {
          setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
          return;
        }
        setError(err?.error || 'ERROR');
      });
  }

  function changeName(newName) {
    fetchChangeUsername(newName)
      .then(response => {
        setError('');
        setUsername(response.username);
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }

  function addShopItem({ itemname, price, imgurl }) {
    fetchAddToCart({ itemname, price, imgurl })
      .then(response => {
        setCart(response);
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }

  function updateItem(itemname, quantity) {
    fetchUpdateCart({ itemname, quantity })
      .then(response => {
        setCart(response);
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }

  function clearCart() {
    fetchClearCart()
      .then(response => {
        setCart(response);
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }

  function getMessages() {
    fetchAllMessages()
      .then(response => {
        setMessages(response);
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }

  function getOnlineUsers() {
    fetchOnlineUsers()
      .then(response => {
        setOnlineUsers(response);
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
      });
  }

  function getMessagesAndOnlineUsers() {
    getMessages();
    getOnlineUsers();
  }

  function addMessage(message) {
    fetchAddMessage(message)
      .then(response => {
        setMessages(response);
      })
      .catch(err => {
        setError(err?.error || 'ERROR');
      });

  }

  useEffect(
    () => {
      checkForSession();
    },
    []
  );

  return (
    <div className="app">
      {error && <Status error={error} />}
      {loginStatus === LOGIN_STATUS.PENDING && <Loading className="login-waiting">Loading user...</Loading>}
      {loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && <LoginForm onLogin={onLogin} username={username} setUsername={setUsername} />}
      {loginStatus === LOGIN_STATUS.IS_LOGGED_IN && (
        <>
          <a href="#main" className="skip-to-main-content-link">Skip to main content</a>
          <Header setPage={setPage} isDark={isDark} setIsDark={setIsDark} onLogout={onLogout} />
          <Main page={page} setPage={setPage} setError={setError} isDark={isDark} username={username} setUsername={setUsername} isContentPending={isContentPending} addShopItem={addShopItem} cart={cart} clearCart={clearCart} updateItem={updateItem} changeName={changeName} messages={messages} onlineUsers={onlineUsers} getMessagesAndOnlineUsers={getMessagesAndOnlineUsers} addMessage={addMessage} onLogout={onLogout} />
          <Footer setPage={setPage} isDark={isDark} />
        </>
      )}
    </div>
  );
}

export default App;

// 