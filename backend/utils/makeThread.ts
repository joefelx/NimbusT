async function makeThread(client: any, threadsList: Array<string>) {
  const thread = await client.v2.tweetThread(threadsList);
  return thread;
}

export default makeThread;
