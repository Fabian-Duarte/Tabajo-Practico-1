let database = require("../data/database");


module.exports = controller = {
    index:function(req,res) {
        res.write("SUCURSALES DE NUESTRA CONCENSIONARIA \n\n");
        database.forEach(concesionaria=> {
            res.write(concesionaria.sucursal + "\n");
            res.write(concesionaria.direccion + "\n");
            res.write(concesionaria.telefono + "\n\n");
     })
    res.end()
    
    },
    sucursal: function(req,res) {
        let sucId = req.params.id;
        database.forEach(concesionaria=> {
            if(concesionaria.sucursal.toLowerCase() == sucId.toLowerCase()) {
                res.write(concesionaria.sucursal + "\n");
                res.write(concesionaria.direccion + "\n");
                res.write(concesionaria.telefono + "\n\n");
                res.write("Encontre la sucursal \n\n")
                concesionario.autos.forEach(auto=> {
                    res.write(auto.marca + " - " + auto.modelo + " - " + auto.anio + "\n")
                 
                })
                res.writen("\n");
                res.end("Cantidad total de autos disponibles: " + concesionaria.autos.length)          
            }
        })
        res.end("No tenemos sucursales ahi")
    }
}