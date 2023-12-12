const os= require('os');

//info about current user
const user =os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

//so this is how we can acess various methods for this object os