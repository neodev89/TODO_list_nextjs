import type { NextApiRequest, NextApiResponse } from "next";
import { middlewareCreateAndReadFilePath } from "../middleware/createFilePath";

export const handlerDynamicDataWebApp = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const readFilePath = await middlewareCreateAndReadFilePath({
      src: "src",
      dir: "data",
      secondDirectory: "dynamic_data-json",
    });

    if (!readFilePath) {
      return res.status(404).json({
        message: "This path is incorrect",
      });
    } else {
      return res.status(200).json({
        message: "This path and file are corrects",
        data: readFilePath,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error at top of API ",
      error,
    });
  }
};
