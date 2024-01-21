const cron = require("node-cron");
const axios = require("axios");

function cronJob() {
  const currentDate = new Date().toLocaleDateString();

  async function getScheduledThreads() {
    await axios.get(`${BASE_SERVER_URL}/tweet/schedule`).then((res) => {
      console.log(res);
    });
  }

  // Cron Job
  cron.schedule("*/10 * * * * *", async () => {
    console.log("Running a job at 01:00");
    console.log(currentDate);
    getScheduledThreads();
  });
}

module.exports = cronJob;
