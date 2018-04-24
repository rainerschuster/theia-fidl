/**
 * Generated using theia-extension-generator
 */

import { XtextFidlCommandContribution, XtextFidlMenuContribution } from './xtext-fidl-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(XtextFidlCommandContribution);
    bind(MenuContribution).to(XtextFidlMenuContribution);
    
});