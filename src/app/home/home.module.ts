import { HomeRoutingModule } from './home.routes';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [HomeRoutingModule],
    exports: [HomeRoutingModule],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
