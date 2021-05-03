import { Router } from "https://deno.land/x/oak/mod.ts";
import { PruebaController} from "../controllers/prueba.controller.ts";

const router = new Router();
const pruebaController = new PruebaController();

router.get('/prueba', pruebaController.getAll);
router.get('/prueba/:id',pruebaController.getOne);
router.post('/prueba', pruebaController.insert);
router.put('/prueba/:id', pruebaController.update);
router.delete('/prueba/:id',pruebaController.delete);

export default router;