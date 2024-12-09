import express from "express";

import cors from 'cors'
import morgan from 'morgan'

const app = express();

// morgan middleware
app.use(morgan("tiny"))

// Global middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true,}))
app.use(cors())



// Routing Middlewares



export default app;
