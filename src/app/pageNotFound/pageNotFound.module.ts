import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PageNotFound } from "./pageNotFound.component";

@NgModule({
    declarations: [
        PageNotFound
    ],
    imports:[
        CommonModule
    ],
    exports:[
        PageNotFound
    ]
})

export class PageNotFoundModule{

}