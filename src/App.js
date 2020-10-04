import React from "react";
import EnhancedForm from "./renderProps/EnhancedForm";
import FormRenderProps from "./FormRenderProps";
import "./App.css";

function App() {
  return (
    <div className="App">
      <EnhancedForm
        initialValues={{
          firstname: "",
          lastname: "",
        }}
      >
        {(formProps) => {
          return <FormRenderProps {...formProps} />;
        }}
      </EnhancedForm>
    </div>
  );
}

export default App;
