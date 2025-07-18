export function contarPropiedades (req, res){
    const objeto = req.body;
    console.log(req.body);
    if (!objeto || typeof objeto !== "object" || Array.isArray(objeto)) {
        return res.status(400).json({ error: 'Debes enviar un objeto valido'});
    }
    const cantidad = Object.keys(objeto).length;
    
    return res.json({cantidad});
}