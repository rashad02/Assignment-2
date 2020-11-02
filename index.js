let notifications = [
    {message: "Lorem", read: true},
    {message: "Ipsum", read: true},
    {message: "Sit", read: false},
    {message: "Amet", read: true}
]

let allRead = true;


allRead = notifications.every(notification => !notification.read);

console.log(allRead);

