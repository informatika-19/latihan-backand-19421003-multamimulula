const monggose = require('mongoose')
const Schema = monggose.Schema

const kegiatanSchema = new schema({
    namakegiatan:{
        type: String
    },
    deskripsi: {
        typee: String
    },
    waktu:{
        type: String
    }
})
module.exports = monggose.Mongoose,model('kegiatan')