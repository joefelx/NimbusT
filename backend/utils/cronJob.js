const cron = require("node-cron");
const axios = require("axios");
const isTokenExpired = require("./isTokenExpired");

function cronJob() {
  const currentDate = new Date().toLocaleDateString();

  async function getScheduledThreads() {
    const { adminAccessToken } = await axios.get(
      `${process.env.BASE_SERVER_URL}/update-access-token/admin`
    );

    await axios
      .get(`${process.env.BASE_SERVER_URL}/admin/schedule`, {
        headers: {
          Authorization: `Bearer ${adminAccessToken}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  }

  // Cron Job
  cron.schedule("*/10 * * * * *", () => {
    // console.log("Running a job at 01:00");
    // console.log(currentDate);
    console.log("Cronjob Started");
    getScheduledThreads();
  });
}

module.exports = cronJob;
