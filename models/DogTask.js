/**
 * Created by uroszivaljevic on 6/23/17.
 */

module.exports = function (sequelize, DataTypes) {

    var DogTask = sequelize.define('DogTask', {
        score: DataTypes.INTEGER
    });

    return DogTask;
};