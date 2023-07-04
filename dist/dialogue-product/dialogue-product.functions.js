"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTransitionFrom_B_to_C = exports.transitFrom_B_to_C = exports.save = exports.next = void 0;
const rxjs_1 = require("rxjs");
function next(formValue, nextRoute, stateService) {
    stateService.mergeIntoFormValue(formValue);
    stateService.nextRoute(nextRoute);
}
exports.next = next;
function save(formValue, nextRouteIfSuccessfull, stateService) {
    stateService.mergeIntoFormValue(formValue);
    // here we simulate to go to the server to save the form
    (0, rxjs_1.of)(stateService.formValue)
        .pipe((0, rxjs_1.tap)((formValue) => {
        stateService.setMessage(`Form saved: ${JSON.stringify(formValue)}`);
        stateService.formValue = {};
        // go back to the first form
        stateService.nextRoute(nextRouteIfSuccessfull);
    }))
        .subscribe();
}
exports.save = save;
function transitFrom_B_to_C(formValue, stateService) {
    const err = validateTransitionFrom_B_to_C(formValue);
    if (err) {
        stateService.setMessage(err.errorMsg);
        return;
    }
    stateService.mergeIntoFormValue(formValue);
    stateService.nextRoute('form-c');
    return;
}
exports.transitFrom_B_to_C = transitFrom_B_to_C;
// this function validates the content of the form and returns an error message if the form is not valid
// the validation logic is exported as a public function so that it can be used by other layers (e.g. country or
// client specifc layers)
function validateTransitionFrom_B_to_C(formValue) {
    const field_B_Product = formValue['field-B-Product'];
    // the logic is that the field_B_Product must be longer than 3 characters
    if (field_B_Product && field_B_Product.length <= 3) {
        return {
            errorMsg: 'The value of the field "Field-B-Product" must be longer than 3 characters',
        };
    }
    return null;
}
exports.validateTransitionFrom_B_to_C = validateTransitionFrom_B_to_C;
//# sourceMappingURL=dialogue-product.functions.js.map