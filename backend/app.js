const express = require('express');
const morgan = require('morgan');
require ('dotenv').config();
 require('./database/connections');
const employeeRoute = require('./routes/userRoutes');
const dataRoutes = require('./routes/employeeRoutes');
const normaluser = require('./routes/normaluserRoutes');
const viewData = require('./routes/viewRoutes')

const app = express();
const cors = require('cors')

app.use(morgan('dev'));
app.use(cors())

app.use('/admin', employeeRoute)
app.use('/admin', dataRoutes)
app.use('/user', normaluser)
app.use('/user', viewData)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});