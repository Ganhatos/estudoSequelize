const sequelize = require('sequelize');
const config = require('./config/config');
const conexaoDB = new sequelize(config);

conexaoDB.query('SELECT * FROM pets', sequelize.QueryTypes.SELECT)
.then((data) => {
    console.table(data[0]);
    conexaoDB.close();
})
.catch((error) => {
    console.log(error);
});