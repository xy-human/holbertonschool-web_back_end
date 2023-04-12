const redis = require("redis");
const publisher = redis.createClient();


publisher.on("error", function (error) {
  console.log(`Redis client not connected to the server: ${error}`);
});

publisher.on("connect", function () {
  console.log(`Redis client connected to the server`);
});


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function publishMessage(message, time) {
  await sleep(time);
  console.log(`About to send ${message}`)
  publisher.publish('holberton school channel', message)
}

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);