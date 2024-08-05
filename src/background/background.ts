import { status } from "./api/service";

chrome.runtime.onMessage.addListener(notify);

// @ts-ignore
async function notify(message: any) {
  const s = await status();
  console.log("status:", s);
}
