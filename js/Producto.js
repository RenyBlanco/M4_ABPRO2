class Producto {
    id;
    nombre;
    precio;
    stock;
    descripcion;
    etiquetas ;
    imagen;
    categoria;
    constructor(_id, _nom, _pre, _dis, _desc, _eti, _imag, _cat) {
        this.id = _id;
        this.nombre = _nom;
        this.precio = _pre;
        this.stock = _dis;
        this.descripcion = _desc;
        this.etiquetas = _eti;
        this.imagen = _imag;
        this.categoria = _cat;
    }
    set pId(id) {
        this.id = id;
    }
    get pId() { 
        return this.id; 
    }

    set pNombre(nombre) {
        this.nombre = nombre;
    }
    get pNombre() {
        return this.nombre;
    }
    set pPrecio(precio) {
        this.precio = precio;
    }
    get pPrecio() {
        return this.precio;
    }
    set pStock(stock) {
        this.stock = stock;
    }
    get pStock() {
        return this.stock;
    }
    set pDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    get pDescripcion() {
        return this.descripcion;
    }
    set pEtiquetas(etiquetas) {
        this.etiquetas = etiquetas;
    }
    get pEtiquetas() {
        return this.etiquetas;
    }
    set pImagen(imagen) {
        this.imagen = imagen;
    }
    get pImagen() {
        return this.imagen;
    }
    set pCategoria(categoria) {
        this.categoria = categoria;
    }
    get pCategoria() {
        return this.categoria;
    }
}
