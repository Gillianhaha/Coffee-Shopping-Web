const uuid = require('uuid').v4;

const id1 = uuid();
const allMessages = {
  [id1]: {
    id: id1,
    sender: "Amit",
    text: "What kind of coffee do you like?",
  },
};

function updateAllMessages(sender, text) {
  const id = uuid();
  allMessages[id] = {
    id,
    sender,
    text,
  }
};

function makeMessageList() {
  const messageList = {};
  const messages = {};

  messageList.getMessage = function getMessage(id) {
    return messages[id];
  };

  messageList.getMessages = function getMessages() {
    return messages;
  };

  messageList.addMessage = function addMessage(text) {
    const id = uuid();
    messages[id] = {
      id,
      text,
    };
    return id;
  };

  return messageList;
};

module.exports = {
  updateAllMessages,
  makeMessageList,
  allMessages,
};