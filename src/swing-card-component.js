"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const swing_stack_component_1 = require("./swing-stack-component");
class SwingCardComponent {
    constructor(elmentRef, swingStack) {
        this.elmentRef = elmentRef;
        this.swingStack = swingStack;
        this.prepend = false;
    }
    ngOnInit() {
        this.swingStack.addCard(this, this.prepend);
    }
    getElementRef() {
        return this.elmentRef;
    }
    getNativeElement() {
        return this.elmentRef.nativeElement;
    }
    getCard() {
        return this.swingStack.stack.getCard(this.getNativeElement());
    }
    destroyCard() {
        this.swingStack.cards = this.swingStack.cards.filter(swingCardComponent => swingCardComponent !== this);
        let card = this.swingStack.stack.getCard(this.getNativeElement());
        this.swingStack.stack.destroyCard(card);
    }
}
SwingCardComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: '[swing-card]',
                template: `
    <ng-content></ng-content>
  `
            },] },
];
/** @nocollapse */
SwingCardComponent.ctorParameters = () => [
    { type: core_1.ElementRef },
    { type: swing_stack_component_1.SwingStackComponent }
];
SwingCardComponent.propDecorators = {
    prepend: [{ type: core_1.Input }]
};
exports.SwingCardComponent = SwingCardComponent;
//# sourceMappingURL=swing-card-component.js.map