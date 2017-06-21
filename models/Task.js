/**
 * Created by uroszivaljevic on 6/22/17.
 */

module.exports = function (sequelize, DataTypes) {

    var Task = sequelize.define('Task', {
        name: DataTypes.STRING
    });

    return Task;
};