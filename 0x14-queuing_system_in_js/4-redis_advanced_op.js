const redis = require("redis");
const client = redis.createClient();


const listy = [
  'Portland=50',
  'Seattle=80',
  'New York=20',
  'Bogota=20',
  'Cali=40',
  'Paris=2'
]

listy.forEach((x) => {
  const strings = x.split('=');
  client.hset('HolbertonSchools', strings[0], strings[1], redis.print);
})


client.hgetall('HolbertonSchools', function (err, res) {
  if (err) {
    console.log('WRONG', err);
  } else {
    console.log(res);
  }

})