const uuid = require('uuid').v4;

const sessions = {};
const activeUsers = {};

function addSession(username) {
    const sid = uuid();
    sessions[sid] = {
        username,
    };
    if (!activeUsers[username]) {
        activeUsers[username] = {};
    }
    activeUsers[username][sid] = true;

    return sid;
};

function getSessionUser(sid) {
    return sessions[sid]?.username;
}

function getOnlineUsers() {
    return Object.keys(activeUsers);
}

// Logout from one browser
function deleteSession(sid) {
    const session = sessions[sid];
    if (session) {
        const username = session.username;
        delete activeUsers[username][sid];
        if (Object.keys(activeUsers[username]).length === 0) {
            delete activeUsers[username];
        }
        delete sessions[sid];
    }
}

// Change username
function changeUsername(sid, newUsername) {
    const session = sessions[sid];

    if (session) {
        const currentUsername = session.username;
        session.username = newUsername;
        const sessionIds = Object.keys(activeUsers[currentUsername]);

        delete activeUsers[currentUsername];

        if (!activeUsers[newUsername]) {
            activeUsers[newUsername] = {};
        }

        sessionIds.forEach((sessionId) => {
            activeUsers[newUsername][sessionId] = true;
        });
        
        Object.keys(sessions).forEach((sessionKey) => {
            if (sessions[sessionKey].username === currentUsername) {
                sessions[sessionKey].username = newUsername;
            }
        });
    }
}


module.exports = {
    addSession,
    deleteSession,
    getSessionUser,
    getOnlineUsers,
    changeUsername,
};