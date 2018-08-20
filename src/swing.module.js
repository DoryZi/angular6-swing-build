"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const swing_stack_component_1 = require("./swing-stack-component");
const swing_card_component_1 = require("./swing-card-component");
class SwingModule {
}
SwingModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                declarations: [swing_stack_component_1.SwingStackComponent, swing_card_component_1.SwingCardComponent],
                exports: [swing_card_component_1.SwingCardComponent, swing_stack_component_1.SwingStackComponent]
            },] },
];
exports.SwingModule = SwingModule;
//# sourceMappingURL=swing.module.js.map