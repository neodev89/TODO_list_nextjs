import fs from "fs/promises";
import path from "path";

interface mwFilePathTypes {
  src: string;
  dir: string;
  secondDirectory: string | "";
}

export const middlewareCreateAndReadFilePath = async ({
  src,
  dir,
  secondDirectory,
}: mwFilePathTypes) => {
  try {
    const filePath = path.join(process.cwd(), src, dir, secondDirectory);
    const readFile = await fs.readFile(filePath, { encoding: "utf-8" });

    return readFile ?? null;
  } catch (error) {
    console.error("Errore nella lettura del file:", error);
    return null; // Evita di esporre l'errore direttamente
  }
};
