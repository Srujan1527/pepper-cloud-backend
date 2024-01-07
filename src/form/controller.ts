import * as service from "./service";
export const getForm = async (req: any, res: any) => {
  try {
    const { id } = req.body;
    const form = await service.getForm(id);
    // console.log({ form });

    if (form) {
      return res.status(200).json({ form });
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error: any) {
    console.error("Error while fetching form:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllForms = async (req: any, res: any) => {
  try {
    const forms = await service.getAllForms();
    // console.log({ forms });

    if (forms) {
      return res.status(200).json({ forms });
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error: any) {
    console.error("Error while fetching forms:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const uploadForm = async (req: any, res: any) => {
  try {
    const response = await service.uploadForm(req.body);

    if (response === "done") {
      return res.status(200).json({ message: "Form inserted successfully" });
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error: any) {
    console.error("Error while uploading form:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateForm = async (req: any, res: any) => {
  try {
    const response = await service.updateForm(req.body);

    if (response === "done") {
      return res.status(200).json({ message: "Form inserted successfully" });
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error: any) {
    console.error("Error while uploading form:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteForm = async (req: any, res: any) => {
  try {
    const { id } = req.body;

    const response = await service.deleteForm(id);

    if (response) {
      return res.status(200).json({ message: response });
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error: any) {
    console.error("Error while uploading form:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
