import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import veterinarioRoutes from './routes/veterinarioRoutes.js';
import pacienteRoutes from "./routes/pacienteRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();

conectarDB();

app.use(
    cors({
      origin: '*',
    }),
  );

app.use('/api/veterinarios', veterinarioRoutes);
app.use('/api/pacientes', pacienteRoutes);

const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log('sv work');
});