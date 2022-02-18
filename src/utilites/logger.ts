import express from 'express';

const logger = (
    req: express.Request, 
    res: express.Response, 
    // eslint-disable-next-line @typescript-eslint/ban-types
    next: Function
): void => {
    const active_url= req.baseUrl;
    console.log(`${active_url} Was visited`); /***can use time now */
    next();
};
export default logger;