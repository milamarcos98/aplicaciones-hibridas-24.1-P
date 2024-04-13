import express  from "express";
const router = express.Router()

router.get("/", (req, res) => {
    res.send({data: "locations"})
})

router.post("/", (req, res) => {
    res.send({data: "locations"})
})

router.put("/", (req, res) => {
    res.send({data: "locations"})
})

router.delete("/", (req, res) => {
    res.send({data: "locations"})
})

export default router;