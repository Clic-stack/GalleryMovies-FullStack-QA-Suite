import { Router } from "express";
import apiRoutes from "./api/index.js";

const router = Router()

router.get("/", (req, res) => {
    res.json({ message: "Welcome to the API" })
})

// Rutas de la API
router.use(apiRoutes)

export default router