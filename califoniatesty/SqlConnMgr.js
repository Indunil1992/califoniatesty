module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["instance10"] = {
        host: "34.73.4.187",
        port: "3306",
        user: "root",
        password: process.env.Password_sqlinstance10,
        database: "information_schema"
    };
};