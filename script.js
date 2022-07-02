function convertirPrecio(){
    const precio = document.getElementById('precio1').innerHTML;
    let precioN = parseInt(precio);
    const TipoCambio = 700;
    precioColones = precioN * TipoCambio;
    return alert("El precio en colones es de " + precioColones);
}
