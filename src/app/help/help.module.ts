import { HelpRoutingModule } from './help.routes';
import { NgModule } from '@angular/core';

import { HelpComponent } from './help.component';

@NgModule({
    imports: [HelpRoutingModule],
    exports: [HelpRoutingModule],
    declarations: [HelpComponent],
    providers: [],
})
export class HelpModule { }
