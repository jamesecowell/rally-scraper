const apiRouter = require('express').Router();

apiRouter.use('/rally', rallyRouter);

module.exports = apiRouter;
