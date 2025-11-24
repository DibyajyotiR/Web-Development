const express = require('express');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const PORT = 5000

const app = express();
app.use('/user', userRouter)
app.use('/products', productRouter)


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    
})