import { BackgroundMessage, BackgroundResponseMessage } from "@/util/message";
import { CommandFactory } from "./command";

chrome.runtime.onMessage.addListener(notify);

async function notify(
  message: BackgroundMessage
): Promise<BackgroundResponseMessage> {
  const command = CommandFactory.createCommand(message.command);
  const result = await command.execute();
  return { response: result };
}
