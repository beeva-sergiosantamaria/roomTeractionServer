const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    testerName: {type: String, required: true, max: 100},
    userName:   {type: String, required: true, max: 100},
    userDate:   {type: String, required: true, max: 100},
    userGender: {type: String, required: true, max: 100}
});

var user = module.exports = mongoose.model('userDatas', userSchema);

module.exports.get = function (callback, limit) {
    user.find(callback).limit(limit);
}