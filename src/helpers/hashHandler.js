import bcrypt from 'bcrypt';

export const hashPassword = async ( password ) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
}

export const verifyPassword = async (userPassword, hashedPassword ) => await bcrypt.compare(userPassword, hashedPassword);
