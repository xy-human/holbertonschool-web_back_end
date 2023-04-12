const redis = require("redis");
const client = redis.createClient();
import promisify from 'util';


const getAsync = promisify(client.get).bind(client);


client.on("error", function (error) {
  console.log(`Redis client not connected to the server: ${error}`);
});

client.on("connect", function () {
  console.log(`Redis client connected to the server`);
});


function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

async function displaySchoolValue(schoolName) {
  console.log(await getAsync(schoolName))
}

async function main() {
  await displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
}

main()