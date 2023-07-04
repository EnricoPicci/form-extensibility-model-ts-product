import { expect } from 'chai';
import { tap, merge, take } from 'rxjs';

import { DialogueState } from 'form-extensibility-model-ts';
import { next } from './dialogue-product.functions';

describe(`next`, () => {
    it(`should update the state and the state should notify the next route`, (done) => {
        const state = new DialogueState();
        const dialoguePath = 'the-dialogue-path/';
        state.dialoguePath = dialoguePath

        const formValue = { name: 'A name' };
        const nextRoute = 'nextRoute';

        // this is the actual test which is performed by subscribing to the various observables exposed by the state
        const testFormValue = state.formValue$.pipe(
            tap((_formValue) => {
                expect(_formValue.name).equal(formValue.name);
            }),
            take(1) // take 1 so that the Observable completes
        )
        const testRoute = state.nextRoute$.pipe(
            tap((_nextRoute) => {
                expect(_nextRoute).equal(dialoguePath + nextRoute);
            }),
            take(1) // take 1 so that the Observable completes
        );
        merge(testFormValue, testRoute).subscribe({
            error: (err) => done(err),
            complete: () => done(), // complete is run since all the Observables complete
        })

        next(formValue, nextRoute, state);
    });
});
