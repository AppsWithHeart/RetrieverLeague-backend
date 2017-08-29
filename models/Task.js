/**
 * Created by uroszivaljevic on 6/22/17.
 */

module.exports = function (sequelize, DataTypes) {

    var Task = sequelize.define('Task', {
        name: DataTypes.STRING,
        maximumScore: DataTypes.INTEGER
    }, {
        timestamps: false
    });

    Task.associate = function (models) {
        Task.belongsTo(models.Contest, {foreignKey: 'contestId'});
        Task.belongsToMany(models.Dog, {through: models.DogTask, foreignKey: 'taskId', as: 'dogs'});
    };

    return Task;
};