const mongoose = require('mongoose');
mongoose.set('runValidators', true);

mongoose.connect("mongodb+srv://root:Dolphin76@cluster0.j8v5p.mongodb.net/Cluster0?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));