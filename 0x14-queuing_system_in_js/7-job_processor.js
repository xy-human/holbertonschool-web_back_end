const kue = require('kue')
const queue = kue.createQueue();

const blacklist = ['4153518780', '4153518781'];

// This function is a callback function
function sendNotification(phoneNumber, message, job, done) {
  job.progress(0, 100);

  if (blacklist.includes(phoneNumber)) {
    done(Error(`Phone number ${phoneNumber} is blacklisted`));
  } else {
    job.progress(50, 100)
    console.log(`Sending notification to ${phoneNumber}, with message: ${message}`)
    done()
  }
}

// this function runs as queue is in action
queue.process('push_notification_code_2', 2, (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message, job, done);
});