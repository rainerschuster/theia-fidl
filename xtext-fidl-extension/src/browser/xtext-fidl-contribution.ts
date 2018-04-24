import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const XtextFidlCommand = {
    id: 'XtextFidl.command',
    label: "Shows a message"
};

@injectable()
export class XtextFidlCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(XtextFidlCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class XtextFidlMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: XtextFidlCommand.id,
            label: 'Say Hello'
        });
    }
}