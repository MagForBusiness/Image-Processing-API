
import express from 'express';
//Create your application object with express()

const app = express();

//Set a port

const port = 3000;
//Add an API endpoint to get a route, then send a response to the browser

app.get('/api', (req, res) => {
 res.send('Hello, world!');
});

app.listen(port, ()=> {
    console.log(`server started at localhost:${port}`)
   });

console.log('wellcome');
const myFunc = (num: number): number => {
    return num * num;
  };
  export default myFunc;