/**
 * default, rest, and spread
 */
// default
function add(x, y = 0) {
    console.log(x + y);
}
add(1);
add(1, 2);

// reset
function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + ' friends');
}
userFriends('User', 'Tom', 'Vincent');

// spread
function userTopFriends(firstFriend, secondFriend, thridFriends) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thridFriends);
}
userTopFriends(...['Alice', 'Bob', 'Michelle']);