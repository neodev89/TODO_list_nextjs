import type { NextApiRequest, NextApiResponse } from "next";
import { signUpUser, userForm } from "@/@types/user_types";
import { analyzeUserData } from "../middleware/analyzeDataUser";

export const handlerTakeUserData = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    try {
        if (req.method === 'POST') {
            const {
                name,
                lastName,
                birth,
                email, 
                password
            }: userForm = req.body;
            const resultAnalyzeEmailAndPassword = await analyzeUserData(email, password);
            if (!resultAnalyzeEmailAndPassword) {
                return res.status(400).json({ 
                    error: "Email o password non valide" 
                });
            }
            const verifiedEmail = resultAnalyzeEmailAndPassword.email;
            const verifiedPassword = resultAnalyzeEmailAndPassword.hash;
            const ID = resultAnalyzeEmailAndPassword.userID;

            const signUpUser: signUpUser = {
                id: ID,
                email: verifiedEmail,
                password: verifiedPassword,
                name,
                lastName,
                birth,
            }
            return signUpUser;

            // salvare gli altri dati nel db
        }



    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error(error);
    }
}