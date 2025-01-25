import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://swethemu0:PriyanshuRajpurohit2004@cluster0.mr8gx.mongodb.net/MedNova"
    )
    .then(() => console.log("DB Connection established"));
};
