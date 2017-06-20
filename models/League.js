
module.exports = function(sequelize, DataTypes) {

    var League = sequelize.define("League", {
        name: DataTypes.STRING
    });

    return League;
};