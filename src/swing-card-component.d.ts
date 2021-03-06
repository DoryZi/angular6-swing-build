import { ElementRef } from '@angular/core';
import { SwingStackComponent } from './swing-stack-component';
import { Card } from './swing';
export declare class SwingCardComponent {
    private elmentRef;
    private swingStack;
    prepend: boolean;
    card: Card;
    constructor(elmentRef: ElementRef, swingStack: SwingStackComponent);
    ngOnInit(): void;
    getElementRef(): ElementRef<any>;
    getNativeElement(): any;
    getCard(): Card;
    destroyCard(): void;
}
