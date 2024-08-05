export interface BackgroundMessage {
  command: string;
}

export interface BackgroundResponseMessage {
  response: any;
}

export async function sendBackgroundMessage<T>(
  message: BackgroundMessage,
  parse: (message: any) => T = (message) => message
) {
  const response: BackgroundResponseMessage =
    await chrome.runtime.sendMessage(message);
  return parse(response.response);
}
