const mongoose = require("mongoose")

const schema = mongoose.Schema;

const indexSchema = new schema ({
    image: {
        type: String
    },
    Title: {
        type: String
    },
    Details: {
        type: String
    }

})
module.exports = mongoose.model("news", indexSchema)