"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_Form_B_Layout = void 0;
const form_extensibility_model_ts_1 = require("form-extensibility-model-ts");
const form_extensibility_model_ts_2 = require("form-extensibility-model-ts");
const form_extensibility_model_ts_3 = require("form-extensibility-model-ts");
const form_b_actions_1 = require("./form-b.actions");
function get_Form_B_Layout() {
    const formLayout = new form_extensibility_model_ts_1.DynamicFormLayout({
        title: 'Product Dialogue Form B',
    });
    formLayout.elements = [
        new form_extensibility_model_ts_2.TextboxQuestion({
            key: 'field-B-Product',
            label: 'Field-B-Product',
            value: '',
            order: 1,
        }),
        new form_extensibility_model_ts_3.Action({
            name: 'Next',
            function: (0, form_b_actions_1.getTransitFrom_B_to_C)(formLayout),
            order: 2,
        }),
        new form_extensibility_model_ts_3.Action({
            name: 'Previous',
            function: (0, form_b_actions_1.getPrevious)(formLayout),
            order: 3,
        }),
    ];
    return formLayout;
}
exports.get_Form_B_Layout = get_Form_B_Layout;
//# sourceMappingURL=form-b.form.js.map