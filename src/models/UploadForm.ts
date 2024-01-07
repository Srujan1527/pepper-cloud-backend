import mongoose, { Document } from "mongoose";

enum InputType {
  text = "text",
  number = "number",
  email = "email",
  password = "password",
  date = "date",
}

interface InputObj {
  type: InputType;
  title: string;
  placeholder: string;
}

interface FormObj extends Document {
  formTitle: string;
  allInputs: InputObj[];
}

const inputObjSchema = new mongoose.Schema<InputObj>({
  type: {
    type: String,
    enum: Object.values(InputType),
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

const formObjSchema = new mongoose.Schema<FormObj>({
  formTitle: {
    type: String,
    required: true,
    unique: true, // Assuming each form title should be unique
  },
  allInputs: [inputObjSchema],
});

const Form = mongoose.model<FormObj>("Form", formObjSchema);

export default Form;
