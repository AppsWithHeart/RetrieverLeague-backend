
module.exports = function(sequelize, DataTypes) {

    var League = sequelize.define("League", {
        name: DataTypes.STRING
    });

    League.associate = function (models) {
        League.hasMany(models.Dog, { foreignKey: 'leagueId', as: 'dogs'});
        League.belongsToMany(models.Contest, { through: 'ContestLeague', foreignKey: 'leagueId', as: 'contests'});
    };

    return League;
};