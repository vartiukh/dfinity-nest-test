import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as dfinity_idl, canisterId as dfinity_id } from 'dfx-generated/dfinity';

const agent = new HttpAgent();
const dfinity = Actor.createActor(dfinity_idl, { agent, canisterId: dfinity_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await dfinity.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
