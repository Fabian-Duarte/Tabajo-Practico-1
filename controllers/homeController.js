let database = require("../data/database");

module.exports = controller = {
    index:function(req ,res) {
        res.write("Bienvenidos al HOME \n\n");
database.forEach(concesionaria=> {
    res.write(concesionaria.sucursal + "\n")
})
res.end()
    }
}