/**
 * Created by uroszivaljevic on 6/20/17.
 */
"use strict";

module.exports = function(sequelize, DataTypes) {

    var Dog = sequelize.define("Dog", {
        name: DataTypes.STRING
    });

    return Dog;
};