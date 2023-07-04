"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContinue = void 0;
const dialogue_product_functions_1 = require("../dialogue-product.functions");
function getContinue(_formLayout) {
    return (formValue, stateService, _event) => {
        //
        // here is the logic to implement
        // call the form service appropriate method
        (0, dialogue_product_functions_1.next)(formValue, 'form-a', stateService);
    };
}
exports.getContinue = getContinue;
//# sourceMappingURL=form-d.actions.js.map