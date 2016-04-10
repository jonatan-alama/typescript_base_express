import express = require("express");

let router = express.Router();

router.get("/", function (req: express.Request, res: express.Response, next: express.NextFunction) {
    res.render("index", { title: "Typescript Base Express" });
});

export = router;