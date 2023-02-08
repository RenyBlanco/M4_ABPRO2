let id="no";
//localStorage.clear();
carga();

function proceso(){
    let prod = document.getElementById('product').value;
    let desc = document.getElementById('descrip').value;
    let tagger = document.getElementById('etiquetas').value;
    let price = document.getElementById('precio').value;
    let ima = document.getElementById('imagen').value;
    let disp = document.getElementById('stock').value;
    if(prod== ''){
        Swal.fire(
            'Error!',
            'Debe ingresar un producto!',
            'error'
        );
    }else{
        if(id=='no'){
            let arreglo = getCrudData();
            if(arreglo==null){
                let data=[prod,price,disp];
                setCrudData(data);
            }else{
                const nuevoProducto = new Producto();
                nuevoProducto.setNombre = prod;
                nuevoProducto.setDescripcion = desc;
                nuevoProducto.setEtiquetas = tagger;
                nuevoProducto.setPrecio = price;
                var nombre_archivo_seleccionado = ima.replace(/.*[\/\\]/, '');
                //nombre_archivo_seleccionado = nombre_archivo_seleccionado.replace('.jpg','');
                nuevoProducto.setImagen = nombre_archivo_seleccionado;
                nuevoProducto.setStock = disp;
                console.log('Nuevo', nuevoProducto);
                
                arreglo.push(nuevoProducto);
                setCrudData(arreglo);
                document.getElementById('product').value = '';
                Swal.fire(
                    'Exito!',
                    'Producto añadido!',
                    'success'
                );
                carga();
            }
        }else{
            let arreglo = getCrudData();
            arreglo[id]['nombre']=prod;
            arreglo[id]['precio']=price;
            arreglo[id]['descripcion']=desc;
            arreglo[id]['etiquetas']=tagger;
            var nombre_archivo_seleccionado = ima.replace(/.*[\/\\]/, '');
            //nombre_archivo_seleccionado = nombre_archivo_seleccionado.replace('.jpg','');
            arreglo[id]['imagen']=nombre_archivo_seleccionado;
            arreglo[id]['stock']=disp;
            setCrudData(arreglo);
            document.getElementById('product').value = '';
            Swal.fire(
                'Exito!',
                'Producto Actualizado!',
                'success'
            );
            carga();
        }
    }
}

function carga(){
    let arreglo = getCrudData();
    if(arreglo!=null){
        let i=1;
        let html='';
        for (let k=0; k<arreglo.length; k++) {
            html += `
                <tr>
                    <td>${i}</td>
                    <td>${arreglo[k]['setNombre']}</td>
                    <td>${arreglo[k]['setPrecio']}</td>
                    <td>${arreglo[k]['setStock']}</td>
                    <td><a href="javascript:void(0)" onclick="edita(${k})">Editar</a>&nbsp;
                    <a href="javascript:void(0)" onclick="elimina(${k})">Eliminar</a></td>
                </tr>`
            i++;
        }
        document.getElementById('cuerpo').innerHTML = html; 
    }
}

function edita(ind) {
    id=ind;
    let arreglo = getCrudData();
    document.getElementById('product').value = arreglo[ind]['nombre'];
    document.getElementById('precio').value = arreglo[ind]['precio'];
    document.getElementById('stock').value = arreglo[ind]['stock'];
    //document.getElementById('imagen').value = arreglo[ind]['imagen'];
}

function elimina(ind){
    let arreglo = getCrudData();
    arreglo.splice(ind,1);
    setCrudData(arreglo);
    carga();
}

function getCrudData(){
    let arreglo = JSON.parse(localStorage.getItem('crud'));
    return arreglo;
}

function setCrudData(valor){
    localStorage.setItem('crud',JSON.stringify(valor));
}