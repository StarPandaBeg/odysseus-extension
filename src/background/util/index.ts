const APP_NAME = "odysseus";

interface ResponseMessage {
  response: string;
}

export async function sendCoreMessage(message: string) {
  const result: ResponseMessage = await chrome.runtime.sendNativeMessage(
    APP_NAME,
    message
  );
  return result.response;
}
