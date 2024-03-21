import { connect, set } from 'mongoose';

const DB_URI = `mongodb+srv://serviciogold98:M4r1Con3@cluster0.6zjvkk2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const dbInit = async () => {
    set("strictQuery", false);
    await connect(`${DB_URI}`);
    console.log("Init DB");
};

export default dbInit;