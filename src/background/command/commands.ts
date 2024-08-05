import { Command } from ".";
import { status } from "../api/service";

export class ServiceStatusCommand implements Command {
  async execute() {
    return await status();
  }
}
