"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransitFrom_B_to_C = exports.getPrevious = exports.getNext = void 0;
const dialogue_product_functions_1 = require("../dialogue-product.functions");
function getNext(_formLayout) {
    return (formValue, stateService, _event) => {
        //
        // here is the logic to implement
        // call the form service appropriate method
        (0, dialogue_product_functions_1.next)(formValue, 'form-c', stateService);
    };
}
exports.getNext = getNext;
function getPrevious(_formLayout) {
    return (formValue, stateService, _event) => {
        //
        // here is the logic to implement
        // call the form service appropriate method
        (0, dialogue_product_functions_1.next)(formValue, 'form-a', stateService);
    };
}
exports.getPrevious = getPrevious;
function getTransitFrom_B_to_C(_formLayout) {
    return (formValue, stateService, _event) => {
        //
        // here is the logic to implement
        // call the form service appropriate method
        (0, dialogue_product_functions_1.transitFrom_B_to_C)(formValue, stateService);
    };
}
exports.getTransitFrom_B_to_C = getTransitFrom_B_to_C;
//# sourceMappingURL=form-b.actions.js.map