import { DynamicFormLayout as DynamicFormLayout } from 'form-extensibility-model-ts';

import { TextboxQuestion } from 'form-extensibility-model-ts';
import { Action } from 'form-extensibility-model-ts';
import { getPrevious, getTransitFrom_B_to_C } from './form-b.actions';

export function get_Form_B_Layout() {
  const formLayout = new DynamicFormLayout({
    title: 'Product Dialogue Form B',
  });

  formLayout.elements = [
    new TextboxQuestion({
      key: 'field-B-Product',
      label: 'Field-B-Product',
      value: '',
      order: 1,
    }),

    new Action({
      name: 'Next',
      function: getTransitFrom_B_to_C(formLayout),
      order: 2,
    }),
    new Action({
      name: 'Previous',
      function: getPrevious(formLayout),
      order: 3,
    }),
  ];

  return formLayout;
}
