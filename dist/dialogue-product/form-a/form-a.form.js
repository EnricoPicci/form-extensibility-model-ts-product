"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_Form_A_Layout = void 0;
const form_extensibility_model_ts_1 = require("form-extensibility-model-ts");
const form_extensibility_model_ts_2 = require("form-extensibility-model-ts");
const form_extensibility_model_ts_3 = require("form-extensibility-model-ts");
const form_a_actions_1 = require("./form-a.actions");
function get_Form_A_Layout() {
    const formLayout = new form_extensibility_model_ts_1.DynamicFormLayout({
        title: 'Product Dialogue Form A',
    });
    formLayout.elements = [
        new form_extensibility_model_ts_2.TextboxQuestion({
            key: 'field-a-Product',
            label: 'Field-a-Product',
            value: '',
            required: true,
            order: 1,
        }),
        new form_extensibility_model_ts_3.Action({
            name: 'Next',
            function: (0, form_a_actions_1.getNext)(formLayout),
            order: 2,
        }),
    ];
    return formLayout;
}
exports.get_Form_A_Layout = get_Form_A_Layout;
//# sourceMappingURL=form-a.form.js.map