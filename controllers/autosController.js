let database = require("../data/database");

module.exports = controller = {
    index:function(req,res) {
        res.write("Estos son los autos disponibles \n\n");
       database.forEach(concesionaria => {
           res.write("\n\n")
           res.write(concesionaria.sucursal + "\n")
           concesionaria.autos.forEach(auto=> {    
               res.write(auto.marca + " - " + auto.color + " - " + auto.anio + " - " + "\n")
           })
       })
res.end()
    }
}