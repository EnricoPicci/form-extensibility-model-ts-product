import { DynamicFormLayout } from 'form-extensibility-model-ts';
import { DialogueState } from 'form-extensibility-model-ts';
export declare function getNext(_formLayout: DynamicFormLayout): (formValue: any, stateService: DialogueState, _event: any) => void;
export declare function getPrevious(_formLayout: DynamicFormLayout): (formValue: any, stateService: DialogueState, _event: any) => void;
export declare function getTransitFrom_B_to_C(_formLayout: DynamicFormLayout): (formValue: any, stateService: DialogueState, _event: any) => void;
