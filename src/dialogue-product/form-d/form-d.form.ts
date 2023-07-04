import { DynamicFormLayout as DynamicFormLayout } from 'form-extensibility-model-ts';

import { Action } from 'form-extensibility-model-ts';
import { getContinue } from './form-d.actions';

export function get_Form_D_Layout() {
  const formLayout = new DynamicFormLayout({
    title: 'Product Dialogue Form D',
  });

  formLayout.elements = [
    new Action({
      name: 'Continue',
      function: getContinue(formLayout),
      order: 1,
    }),
  ];

  return formLayout;
}
