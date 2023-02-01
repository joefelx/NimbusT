async function makeThread(client, threadsList) {
  const thread = await client.v2.tweetThread(threadsList);
  return thread;
}

module.exports = makeThread;
