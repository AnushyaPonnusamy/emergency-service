

const {formData}=require("../controller/serviceController.js")

import express from 'express';
//import {formData} from "../controller/serviceController.js";

const router = express.Router();
router.post('/service', formData.formData)


export default router