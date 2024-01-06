import * as service from "./service";
export const getForm = (req: any, res: any) => {
  console.log("getForm");
};

export const getAllForms = async (req: any, res: any) => {
  try {
    const forms = await service.getAllForms();
    console.log({ forms });

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
