class Producto {
    constructor() {
        let id = 0;
        let nombre = "";
        let precio = 0;
        let stock = 0;
        let descripcion = "";
        let etiquetas = [];
        let imagen = "";
    }
    setId(id) {
        this.id = id;
    }
    getId() { return this.id; }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
    getPrecio() {
        return this.precio;
    }
    setStock(stock) {
        this.stock = stock;
    }
    getStock() {
        return this.stock;
    }
    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    getDescripcion() {
        return this.descripcion;
    }
    setEtiquetas(etiquetas) {
        this.etiquetas = etiquetas;
    }
    getEtiquetas() {
        return this.etiquetas;
    }
    setImagen(imagen) {
        this.imagen = imagen;
    }
    getImagen() {
        return this.imagen;
    }
}


