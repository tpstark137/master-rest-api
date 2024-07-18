/* eslint-disable @typescript-eslint/no-unused-vars */
import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app = express();

app.get("/", (req, res, next) => {
    // throw new Error("This is an error");
    // const error = createHttpError(400, "something went wrong");
    // throw error;
    res.json({ message: "Hello World!" });
    
})

//global error handling

app.use(globalErrorHandler);

export default app;
