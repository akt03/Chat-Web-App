const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    // id: {
    //     type: 'UUID'
    // },
    from: {
        type: 'String',
        required: true
    },
    to: {
        type: 'String',
        required: true
    },
    mess :{
        type: 'String',
        maxlength: 500  
    },
    date: {
        type: 'String',
        required: true
    },
    time: {
        type: 'String',
        required: true
    }

})

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;