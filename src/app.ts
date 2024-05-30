import express from "express"
import cors from "cors"
import offerRouter from "./routes/offer-router";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use(offerRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
});