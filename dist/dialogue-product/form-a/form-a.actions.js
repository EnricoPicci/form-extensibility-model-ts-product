"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNext = void 0;
const dialogue_product_functions_1 = require("../dialogue-product.functions");
function getNext(_formLayout) {
    return (formValue, stateService, _event) => {
        //
        // here is the logic to implement
        // call the form service appropriate method
        (0, dialogue_product_functions_1.next)(formValue, 'form-b', stateService);
    };
}
exports.getNext = getNext;
//# sourceMappingURL=form-a.actions.js.map