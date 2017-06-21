
module.exports = function(sequelize, DataTypes) {

    var League = sequelize.define("League", {
        name: DataTypes.STRING
    });

    League.associate = function (models) {
        League.hasMany(models.Dog, { foreignKey: 'leagueId'});
        League.hasMany(models.Contest, { foreignKey: 'leagueId'});
    };

    return League;
};