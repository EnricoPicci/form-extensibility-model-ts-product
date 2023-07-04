import { DynamicFormLayout } from 'form-extensibility-model-ts';

import { DialogueState } from 'form-extensibility-model-ts';
import { next } from '../dialogue-product.functions';

export function getContinue(_formLayout: DynamicFormLayout) {
  return (formValue: any, stateService: DialogueState, _event: any) => {
    //
    // here is the logic to implement
    // call the form service appropriate method
    next(formValue, 'form-a', stateService);
  };
}
