import { ServiceStatusCommand } from "./commands";

export interface Command {
  execute: () => Promise<any>;
}

type CommandConstructor = new () => Command;
type CommandMap = { [key: string]: CommandConstructor };

const commandMap: CommandMap = {
  "service:status": ServiceStatusCommand,
};

export class CommandFactory {
  static createCommand(command: string) {
    const commandClass = commandMap[command];
    if (!commandClass) throw new Error("Command not found");
    return new commandClass();
  }
}
