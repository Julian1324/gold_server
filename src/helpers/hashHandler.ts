import bcrypt from 'bcrypt';

export const hashPassword = async ( password: any ) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
}

export const verifyPassword = async (userPassword: any, hashedPassword: any ) =>
    await bcrypt.compare(userPassword, hashedPassword);