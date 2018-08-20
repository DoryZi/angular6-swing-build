"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Swing = require('swing');
class SwingStackComponent {
    constructor() {
        this.throwout = new core_1.EventEmitter();
        this.throwoutend = new core_1.EventEmitter();
        this.throwoutleft = new core_1.EventEmitter();
        this.throwoutright = new core_1.EventEmitter();
        this.throwoutup = new core_1.EventEmitter();
        this.throwoutdown = new core_1.EventEmitter();
        this.throwin = new core_1.EventEmitter();
        this.throwinend = new core_1.EventEmitter();
        this.dragstart = new core_1.EventEmitter();
        this.dragmove = new core_1.EventEmitter();
        this.dragend = new core_1.EventEmitter();
        this.cards = [];
    }
    addCard(card, prepend = false) {
        this.cards.push(card);
        if (this.stack) {
            this.stack.createCard(card.getNativeElement(), prepend);
        }
    }
    ngAfterContentInit() {
        this.stack = Swing.Stack(this.stackConfig || {});
        this.cards.forEach((c) => this.stack.createCard(c.getNativeElement(), c.prepend));
        // Hook various events
        this.stack.on('throwout', $event => this.throwout.emit($event));
        this.stack.on('throwoutend', $event => this.throwoutend.emit($event));
        this.stack.on('throwoutleft', $event => this.throwoutleft.emit($event));
        this.stack.on('throwoutright', $event => this.throwoutright.emit($event));
        this.stack.on('throwin', $event => this.throwin.emit($event));
        this.stack.on('throwinend', $event => this.throwinend.emit($event));
        this.stack.on('dragstart', $event => this.dragstart.emit($event));
        this.stack.on('dragmove', $event => this.dragmove.emit($event));
        this.stack.on('dragend', $event => this.dragend.emit($event));
        this.stack.on('throwoutup', $event => this.throwoutup.emit($event));
        this.stack.on('throwoutdown', $event => this.throwoutdown.emit($event));
    }
}
SwingStackComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: '[swing-stack]',
                template: `
    <ng-content></ng-content>
  `,
                outputs: [
                    'throwout',
                    'throwoutend',
                    'throwoutleft',
                    'throwoutright',
                    'throwoutup',
                    'throwoutdown',
                    'throwin',
                    'throwinend',
                    'dragstart',
                    'dragmove',
                    'dragend',
                ]
            },] },
];
/** @nocollapse */
SwingStackComponent.ctorParameters = () => [];
SwingStackComponent.propDecorators = {
    stackConfig: [{ type: core_1.Input }]
};
exports.SwingStackComponent = SwingStackComponent;
//# sourceMappingURL=swing-stack-component.js.map