import Form from "../models/UploadForm";

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

interface FormObj {
  formTitle: string;
  allInputs: InputObj[];
}

export const uploadForm = async (data: FormObj[]) => {
  try {
    // console.log("service", data);
    for (let each of data) {
      const newForm = new Form({
        formTitle: each.formTitle,
        allInputs: each.allInputs,
      });
      await newForm.save();
    }
    return "done";
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
};

export const updateForm = async (data: FormObj[]) => {
  try {
    for (let each of data) {
      const existingForm = await Form.findOne({
        formTitle: each.formTitle,
      });

      if (existingForm) {
        existingForm.allInputs = each.allInputs;
        await existingForm.save();
      }
    }

    return "done";
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
};

export const getAllForms = async () => {
  try {
    const forms = await Form.find({});
    // console.log("service Forms", forms);
    return forms;
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
};

export const getForm = async (id: any) => {
  try {
    const forms = await Form.find({ _id: id });
    // console.log("service Forms", forms);
    return forms;
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
};

export const deleteForm = async (id: any) => {
  try {
    console.log("service", id);
    const forms = await Form.deleteOne({ _id: id });
    // console.log("service Forms", forms);
    if (forms.deletedCount === 1) {
      return "Document deleted successfully";
    } else {
      return "Document not found";
    }
  } catch (err: any) {
    console.log(err.message);
    throw err;
  }
};
