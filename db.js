const sequelize = require('sequelize');
const { Sequelize } = require('sequelize');

const db = new sequelize('shopdb', 'shopper', '@Pancher9039', {
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        min:0,
        max:5,
    }
})

const User = db.define('user', {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

const Product = db.define('products', {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
});

db.sync()
    .then(() => console.log('Database has been created'))
    .catch((err) => console.error("Error creating database"))

exports =  module.exports = {
    User, Product
}