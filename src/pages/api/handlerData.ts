import type { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs/promises';
import path from 'path';

export const handlerDataUsers = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const filePath = path.join(process.cwd(), "src", "data", "users");
  try {
    const readFile = await fs.readFile(filePath, { encoding: "utf-8" });

    if (!readFile) {
      res.status(500).json({
        message: "Users file is empty! Please, get a new file in your API"
      });
      return;
    }

    res.status(200).json({
      message: "File is ok",
      data: readFile // Here you actually send the file content
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      message: "Error reading the file",
      error: error.message
    });
  }
};
