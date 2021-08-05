import React from "react";
import { TextField, Switch } from "@material-ui/core";
import Texteditor from "./TextEditor";
function RenderFormEl({
  field,
  activeStep,
  changeFormData,
  changeActiveFormField,
  activeFormField,
  i
}) {
  console.log("field.type", field.type);
  if (field.type === "textarea")
    return (
      <>
        <div>{field.displayName}</div>
        <div
          className='htmlBox'
          dangerouslySetInnerHTML={{
            __html: field.value
          }}
          onClick={() => changeActiveFormField(field, activeStep, i)}
          style={
            activeFormField &&
            activeFormField.activeStep === activeStep &&
            activeFormField.i === i
              ? { borderColor: "blue" }
              : {}
          }
        ></div>
      </>
    );
  if (field.type === "switch")
    return (
      <>
        <div>{field.displayName}</div>
        <div>
          <Switch
            checked={field.value}
            onChange={e => {
              changeFormData(!field.value, i, activeStep);
            }}
            name={field.displayName}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        </div>
      </>
    );
  return (
    <TextField
      id={`${field.title}-${activeStep}`}
      label={`${field.displayName} ${field.unit ? `(${field.unit})` : ""}`}
      variant='outlined'
      type={field.type}
      value={field.value}
      onClick={() => changeActiveFormField()}
      onChange={e => {
        changeFormData(e, i, activeStep);
      }}
    />
  );
}
export default RenderFormEl;
