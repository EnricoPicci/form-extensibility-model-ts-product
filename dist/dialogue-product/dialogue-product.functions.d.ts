import { DialogueState } from 'form-extensibility-model-ts';
export declare function next(formValue: any, nextRoute: string, stateService: DialogueState): void;
export declare function save(formValue: any, nextRouteIfSuccessfull: string, stateService: DialogueState): void;
export declare function transitFrom_B_to_C(formValue: any, stateService: DialogueState): void;
export declare function validateTransitionFrom_B_to_C(formValue: any): {
    errorMsg: string;
} | null;
