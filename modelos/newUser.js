const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    testerName: {type: String, required: true, max: 100},
    userName:   {type: String, required: true, max: 100},
    userBirthDate:   {type: String, required: true, max: 100},
    userGender: {type: String, required: true, max: 100},
    currentDate:   {type: String, required: true, max: 100},
    experimentDuration:   {type: String, required: true, max: 100},
    firstLedView: {type: String, required: true, max: 100},
    firstLedTimer: {type: String, required: true, max: 100},
    firstInteraction: {type: String, required: true, max: 100},
    firstCorrectInteraction: {type: String, required: true, max: 100}
});

var user = module.exports = mongoose.model('userDatas', userSchema);

module.exports.get = function (callback, limit) {
    user.find(callback).limit(limit);
}