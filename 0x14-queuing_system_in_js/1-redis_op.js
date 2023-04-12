const redis = require("redis");
const client = redis.createClient();


client.on("error", function (error) {
  console.log(`Redis client not connected to the server: ${error}`);
});

client.on("connect", function () {
  console.log(`Redis client connected to the server`);
});

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);

  // sets in redis value in key schoolname
  // redis print for confirmation
}


function displaySchoolValue(schoolName) {
  client.get(schoolName, function (err, reply) {
    console.log(reply);
  });
  // sets in redis value in key schoolname
  // redis print for confirmation
}


displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');