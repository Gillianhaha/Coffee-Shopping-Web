const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;

const messages = require('./messages');
const sessions = require('./sessions');
const users = require('./users');

app.use(cookieParser());
app.use(express.static('./dist'));
app.use(express.json());

// Sessions
// Check if logged in
app.get('/api/v1/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  res.json({ username });
});

// Login
app.post('/api/v1/session', (req, res) => {
  const { username } = req.body;
  if (!users.isValid(username)) {
    res.status(400).json({ error: 'required-username' });
    return;
  }

  if (username === 'dog') {
    res.status(403).json({ error: 'auth-insufficient' });
    return;
  }

  const sid = sessions.addSession(username);
  if (!users.getUserData(username)) {
    users.addUser(username);
  }

  res.cookie('sid', sid);
  // res.json({ username });
  res.json({ messages: messages.allMessages, onlineUsers: sessions.getOnlineUsers(), cart: users.getUserData(username) });
});

// Change username
app.patch('/api/v1/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  const { newUsername } = req.body;

  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  if (!users.isValid(newUsername)) {
    res.status(400).json({ error: 'required-username' });
    return;
  }

  if (newUsername === 'dog') {
    res.status(403).json({ error: 'auth-insufficient' });
    return;
  }

  sessions.changeUsername(sid, newUsername);
  users.updateUsername(username, newUsername);
  
  res.json({ username: newUsername });
});

// Get online users
app.get('/api/v1/online-users', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';
  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const onlineUsers = sessions.getOnlineUsers();
  res.json(onlineUsers);
});

// Logout from one browser
app.delete('/api/v1/session', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if (sid) {
    res.clearCookie('sid');
  }
  if (username) {
    sessions.deleteSession(sid);
  } 

  res.json({ username });
});

// messages
// Get all messages
app.get('/api/v1/messages', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  res.json(messages.allMessages);
});

// Add new message
app.post('/api/v1/messages', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  const { text } = req.body;
  if (!text) {
    res.status(400).json({ error: 'required-text-input' });
    return;
  }

  messages.updateAllMessages(username, text);
  res.json(messages.allMessages);
});

//cart
// Get cart
app.get('/api/v1/cart', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const userData = users.getUserData(username);
  res.json(userData);
});

// Add to cart
app.post('/api/v1/cart', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if (!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  const { itemname, price, imgurl } = req.body;
  users.addToCart(username, itemname, price, imgurl);
  res.json(users.getUserData(username));

});

// Update quantity
app.patch('/api/v1/cart', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if(!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }
  
  const { itemname, quantity } = req.body;
  users.updateQuantity(username, itemname, quantity);
  res.json(users.getUserData(username));
});

// Clear cart
app.delete('/api/v1/cart', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if(!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  users.clearCart(username);
  res.json(users.getUserData(username));
});

// Get all data
app.get('/api/v1/all-data', (req, res) => {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if(!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return;
  }

  res.json({ messages: messages.allMessages, onlineUsers: sessions.getOnlineUsers(), cart: users.getUserData(username) });
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

