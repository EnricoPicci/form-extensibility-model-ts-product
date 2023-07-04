"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get_Form_C_Layout = void 0;
const form_extensibility_model_ts_1 = require("form-extensibility-model-ts");
const form_extensibility_model_ts_2 = require("form-extensibility-model-ts");
const form_extensibility_model_ts_3 = require("form-extensibility-model-ts");
const form_c_actions_1 = require("./form-c.actions");
function get_Form_C_Layout() {
    const formLayout = new form_extensibility_model_ts_1.DynamicFormLayout({
        title: 'Product Dialogue Form C',
    });
    formLayout.elements = [
        new form_extensibility_model_ts_2.TextboxQuestion({
            key: 'field-C-Product',
            label: 'Field-C-Product',
            value: '',
            required: true,
            order: 1,
        }),
        new form_extensibility_model_ts_3.Action({
            name: 'Previous',
            function: (0, form_c_actions_1.getPrevious)(formLayout),
            order: 3,
        }),
        new form_extensibility_model_ts_3.Action({
            name: 'Save',
            function: (0, form_c_actions_1.getSave)(formLayout),
            order: 2,
        }),
    ];
    return formLayout;
}
exports.get_Form_C_Layout = get_Form_C_Layout;
//# sourceMappingURL=form-c.form.js.map