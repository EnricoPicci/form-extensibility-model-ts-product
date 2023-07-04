import { DynamicFormLayout as DynamicFormLayout } from 'form-extensibility-model-ts';

import { TextboxQuestion } from 'form-extensibility-model-ts';
import { Action } from 'form-extensibility-model-ts';
import { getPrevious, getSave } from './form-c.actions';

export function get_Form_C_Layout() {
  const formLayout = new DynamicFormLayout({
    title: 'Product Dialogue Form C',
  });

  formLayout.elements = [
    new TextboxQuestion({
      key: 'field-C-Product',
      label: 'Field-C-Product',
      value: '',
      required: true,
      order: 1,
    }),

    new Action({
      name: 'Previous',
      function: getPrevious(formLayout),
      order: 3,
    }),
    new Action({
      name: 'Save',
      function: getSave(formLayout),
      order: 2,
    }),
  ];

  return formLayout;
}
