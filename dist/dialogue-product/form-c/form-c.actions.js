"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSave = exports.getPrevious = void 0;
const dialogue_product_functions_1 = require("../dialogue-product.functions");
function getPrevious(_formLayout) {
    return (formValue, stateService, _event) => {
        //
        // here is the logic to implement
        // call the form service appropriate method
        (0, dialogue_product_functions_1.next)(formValue, 'form-b', stateService);
    };
}
exports.getPrevious = getPrevious;
function getSave(_formLayout) {
    return (formValue, stateService, _event) => {
        //
        // here is the logic to implement
        // call the form service appropriate method
        (0, dialogue_product_functions_1.save)(formValue, 'form-d', stateService);
    };
}
exports.getSave = getSave;
//# sourceMappingURL=form-c.actions.js.map