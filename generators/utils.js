var getUsers = (count) => {
    var users = [{
        name: 'messi',
        goals: 10
    }, {
        name: 'ronaldo',
        goals: 8
    }, {
        name: 'bale',
        goals: 7
    }];

    var filteredUsers = users.slice(0, count);
    return getPromiseWithValue(filteredUsers);
};

var getUserNames = (users) => {
    var names = users.map((user) => user.name);
    return getPromiseWithValue(names);
};

var getPromiseWithValue = (value) => {
    return new Promise((res, rej) => setTimeout(() => res(value), 100));
};

var isPromise = (v) => (v instanceof Promise) || (v.then && typeof v.then === 'function');

if (typeof window === 'undefined') {

    module.exports = {
        getUsers: getUserNames,
        getUserNames: getUserNames,
        isPromise: isPromise
    }
};