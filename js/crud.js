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
                var idx = arreglo.length+1;
                const nuevoProducto = new Producto();
                nuevoProducto.pId = idx;
                nuevoProducto.pNombre = prod;
                nuevoProducto.pDescripcion = desc;
                nuevoProducto.pEtiquetas = tagger;
                nuevoProducto.pPrecio = price;
                var nombre_archivo_seleccionado = ima.replace(/.*[\/\\]/, '');
                //nombre_archivo_seleccionado = nombre_archivo_seleccionado.replace('.jpg','');
                nuevoProducto.pImagen = nombre_archivo_seleccionado;
                nuevoProducto.pStock = disp;
                console.log('Nuevo', nuevoProducto);
                
                arreglo.push(nuevoProducto);
                setCrudData(arreglo);
                limpiaInputs();
                Swal.fire(
                    'Exito!',
                    'Producto añadido!',
                    'success'
                );
                carga();
            }
        }else{
            let arreglo = getCrudData();
            console.log('Arreglo ', arreglo);
            arreglo[id]['nombre']=prod;
            arreglo[id]['precio']=price;
            arreglo[id]['descripcion']=desc;
            arreglo[id]['etiquetas']=tagger;
            var nombre_archivo_seleccionado = ima.replace(/.*[\/\\]/, '');
            if(nombre_archivo_seleccionado!=''){
                arreglo[id]['imagen']=nombre_archivo_seleccionado;
            }
            arreglo[id]['stock']=disp;
            setCrudData(arreglo);
            limpiaInputs();
            Swal.fire(
                'Exito!',
                'Producto Actualizado!',
                'success'
            );
            carga();
        }
    }
}

function limpiaInputs(){
    document.getElementById('product').value = '';
    document.getElementById('descrip').value = '';
    document.getElementById('etiquetas').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('imagen').value = '';
    document.getElementById('stock').value = '';
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
                    <td>${arreglo[k]['nombre']}</td>
                    <td>${arreglo[k]['precio']}</td>
                    <td>${arreglo[k]['stock']}</td>
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
    document.getElementById('descrip').value = arreglo[ind]['descripcion'];
    document.getElementById('etiquetas').value = arreglo[ind]['etiquetas'];
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