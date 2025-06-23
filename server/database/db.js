import mongoose from 'mongoose'

const db = async (username , password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster1.9xqeuub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;
    try {
       await mongoose.connect(URL)
       console.log("Database succesfully connected");
    } catch (error) {
        console.log("error while connecting", error);
    }
  
}
export default db;
