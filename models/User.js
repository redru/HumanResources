/**
 * Created by admin on 18/10/2016.
 */
(() => {
    'use strict';
    const mongoose      = require('mongoose');
    const Schema        = mongoose.Schema;

    let UserSchema = new Schema({
        username: String,
        password: String,
        name: String,
        surname: String
    }, { collection: 'User' });

    module.exports = mongoose.model('User', UserSchema);
})();
