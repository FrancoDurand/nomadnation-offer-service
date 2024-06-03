import express from "express"
import cors from "cors"
import offerRouter from "./routes/offer-router";
import path from "path"

const app = express();
const port = 3001;

const imagesDir = path.join(__dirname, "../images");

app.use(cors());
app.use(express.json());
app.use("/images", express.static(imagesDir));

app.use(offerRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
});