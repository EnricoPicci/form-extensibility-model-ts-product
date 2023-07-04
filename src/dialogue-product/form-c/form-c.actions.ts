import { DynamicFormLayout } from 'form-extensibility-model-ts';

import { DialogueState } from 'form-extensibility-model-ts';
import { next, save } from '../dialogue-product.functions';

export function getPrevious(_formLayout: DynamicFormLayout) {
  return (formValue: any, stateService: DialogueState, _event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    next(formValue, 'form-b', stateService);
  };
}

export function getSave(_formLayout: DynamicFormLayout) {
  return (formValue: any, stateService: DialogueState, _event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    save(formValue, 'form-d', stateService);
  };
}
