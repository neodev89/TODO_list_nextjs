import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from 'uuid';

export const analyzeUserData = async (password: string, email: string) => {
    // function bcrypt for password
    const regexEmail = /^[a-zA-Z0-9._%+-]{6,30}@[a-zA-Z.-]{2,15}\.[a-zA-Z]{2,}$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z0-9@$!%*?&]{8,20}$/;
    
    const userID = uuidv4();

    const isEmailCorrect = regexEmail.test(email);
    const isPasswordCorrect = regexPassword.test(password);
   
    if (isPasswordCorrect && isEmailCorrect) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return { userID, email, hash };
    } else {
        console.error("Errore nella mail o password");
        return null;
    }
}
