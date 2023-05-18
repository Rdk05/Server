const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

const MyRoutes = require('./Routes/Routes');
const AdminRoutes = require('./Routes/AdminRoutes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/', MyRoutes);
app.use('/admin', AdminRoutes);

// app.get('/', (req,res)=>{
//     res.send(`
//     <html>
//     <head><title>Reg. Form</title></head>
//     <body>
//     <Form method="POST" action="/result">
//     <input name="n1" placeholder="Enter First Number" >
//     <input name="n2" placeholder="Enter Second Number" >
//     <button>Submit</button>
//     </Form>
//     </body>
//     </html>
//     `)
// });

// app.post('/result', (req,res)=>{
//     console.log(req.body);
//     var sum = parseInt(req.body.n1) + parseInt(req.body.n2);
//     res.send(`Sum of ${req.body.n1} &n ${req.body.n2} = ${sum}`);
// })

app.listen( PORT, ()=>{
    console.log(`Server is running on PORT : ${PORT}`)
})