"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const rxjs_1 = require("rxjs");
const form_extensibility_model_ts_1 = require("form-extensibility-model-ts");
const dialogue_product_functions_1 = require("./dialogue-product.functions");
describe(`next`, () => {
    it(`should update the state and the state should notify the next route`, (done) => {
        const state = new form_extensibility_model_ts_1.DialogueState();
        const dialoguePath = 'the-dialogue-path/';
        state.dialoguePath = dialoguePath;
        const formValue = { name: 'A name' };
        const nextRoute = 'nextRoute';
        // this is the actual test which is performed by subscribing to the various observables exposed by the state
        const testFormValue = state.formValue$.pipe((0, rxjs_1.tap)((_formValue) => {
            (0, chai_1.expect)(_formValue.name).equal(formValue.name);
        }), (0, rxjs_1.take)(1) // take 1 so that the Observable completes
        );
        const testRoute = state.nextRoute$.pipe((0, rxjs_1.tap)((_nextRoute) => {
            (0, chai_1.expect)(_nextRoute).equal(dialoguePath + nextRoute);
        }), (0, rxjs_1.take)(1) // take 1 so that the Observable completes
        );
        (0, rxjs_1.merge)(testFormValue, testRoute).subscribe({
            error: (err) => done(err),
            complete: () => done(), // complete is run since all the Observables complete
        });
        (0, dialogue_product_functions_1.next)(formValue, nextRoute, state);
    });
});
//# sourceMappingURL=dialogue-product.functions.spec.js.map