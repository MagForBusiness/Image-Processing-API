import express from 'express';
import router from './routes/RouterIndex';
import path from 'path';
//Create  application object with express()

const app = express();


app.use('/static', express.static(path.join(__dirname, 'public')));

//Set a port

const port = 3000;
//Add an API endpoint to get a route, then send a response to the browser
app.use('/api', router);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

// // console.log('wellcome');
// const myFunc = (num: number): number => {
//     return num * num;
//   };
//   export default myFunc;
export default app;
