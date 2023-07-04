import { DynamicFormLayout } from 'form-extensibility-model-ts';

import { DialogueState } from 'form-extensibility-model-ts';
import { next, transitFrom_B_to_C } from '../dialogue-product.functions';

export function getNext(_formLayout: DynamicFormLayout) {
  return (formValue: any, stateService: DialogueState, _event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    next(formValue, 'form-c', stateService);
  };
}

export function getPrevious(_formLayout: DynamicFormLayout) {
  return (formValue: any, stateService: DialogueState, _event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    next(formValue, 'form-a', stateService);
  };
}

export function getTransitFrom_B_to_C(_formLayout: DynamicFormLayout) {
  return (formValue: any, stateService: DialogueState, _event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    transitFrom_B_to_C(formValue, stateService);
  };
}
