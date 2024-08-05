import { sendCoreMessage } from "../util";

function throwError(error_code: number): never {
  if (error_code == -1)
    throw new Error("Failed to initialize Windows Service Manager");
  if (error_code == -2) throw new Error("Failed to access GoodbyeDPI service");
  if (error_code == -3) throw new Error("Failed to execute action");
  throw new Error(`Unknown error (${error_code})`);
}

export async function status() {
  const resultS = await sendCoreMessage("service:status");
  const result = parseInt(resultS);
  if (result < 0) throwError(result);
  return !!result;
}
