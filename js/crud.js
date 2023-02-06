let id="no";
//localStorage.clear();
carga();

function proceso(){
    let prod = document.getElementById('product').value;
    if(prod== ''){
        Swal.fire(
            'Error!',
            'Debe ingresar un nombre!',
            'error'
        );
    }else{
        if(id=='no'){
            let arreglo = getCrudData();
            if(arreglo==null){
                let data=[prod];
                setCrudData(data);
            }else{
                arreglo.push(prod);
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
            arreglo[id]=prod;
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
            console.log(arreglo[k]['nombre']);
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
        document.getElementById('cuerpo').innerHTML = html   
    }
}

function edita(ind) {
    id=ind;
    let arreglo = getCrudData();
    document.getElementById('product').value = arreglo[ind];
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