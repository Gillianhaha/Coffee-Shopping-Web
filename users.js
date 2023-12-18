const users = {};

function isValid(username) {
    let isValid = true;
    isValid = !!username && username.trim();
    isValid = isValid && username.match(/^[A-Za-z0-9_]+$/);
    return isValid;
}

function getUserData(username) {
    return users[username];
}

function addUser(username) {
    users[username] = {};
}

function updateUsername(oldUsername, newUsername) {
    const userData = getUserData(oldUsername);

    if (userData) {
        users[newUsername] = userData;
        delete users[oldUsername];
    }

    return users;
}

function addToCart(username, itemname, price, imgurl) {
    const userData = getUserData(username);

    if (!userData) {
        users[username] = {
            [itemname]: {
                itemname: itemname,
                imgurl: imgurl,
                price: price,
                quantity: 1,
            },
        };
    } else {
        const userCart = userData;
        if (userCart[itemname]) {
            userCart[itemname].quantity += 1;
        } else {
            userCart[itemname] = {
                itemname: itemname,
                imgurl: imgurl,
                price: price,
                quantity: 1,
            };
        }
    }
    return userData;
}

function updateQuantity(username, itemname, quantity) {
    const userData = getUserData(username);

    if (!quantity) {
        delete userData[itemname];
    }
    else {
        const item = userData[itemname];
        item.quantity = quantity;
    }

    return userData;
}

function clearCart(username) {
    return users[username] = {};
}

module.exports = {
    isValid,
    getUserData,
    addUser,
    updateUsername,
    addToCart,
    updateQuantity,
    clearCart,
};


