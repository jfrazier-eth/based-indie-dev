import { Router } from "express";

const router: Router = Router({ mergeParams: true });

router.get("/", (req, res) => {
  res.send("Hello world!");
});

export { router };
