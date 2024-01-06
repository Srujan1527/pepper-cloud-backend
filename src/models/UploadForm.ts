import mongoose from "mongoose";

const inputObjSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["text", "number", "email", "password", "date"],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});

const formObjSchema = new mongoose.Schema({
  formTitle: {
    type: String,
    required: true,
    unique: true, // Assuming each form title should be unique
  },
  allInputs: [inputObjSchema],
});

const Form = mongoose.model("Form", formObjSchema);

export default Form;
