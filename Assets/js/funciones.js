let tblUsuarios;
document.addEventListener("DOMContentLoaded", function () {
    tblUsuarios = $('#tblUsuarios').DataTable( {
        ajax: {
            url: base_url + "Usuarios/listar",
            dataSrc: ''
        },
        columns: [
            {
                'data' : 'id',
            },
            {
                'data' : 'usuario',
            },
            {
                'data' : 'nombre',
            },
            {
                'data' : 'caja',
            },
            {
                'data' : 'estado',
            },
            {
                'data': 'acciones'
            }
        ]
    } );
})
function frmLogin(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario");
    const clave = document.getElementById("clave");

    if (usuario.value == "") {
        clave.classList.remove("is-invalid");
        usuario.classList.add("is-invalid");
        usuario.focus();
    }else if (clave.value == "") {
        usuario.classList.remove("is-invalid");
        clave.classList.add("is-invalid");
        clave.focus();
    }else{
        const url = base_url + "Usuarios/validar";
        const frm = document.getElementById("frmLogin");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText);
                if (res == "QUE SORPRESA:D, ¡EXISTÍS!") {
                    window.location = base_url + "Usuarios";
                }else{
                    document.getElementById("alert").classList.remove("d-none");
                    document.getElementById("alert").innerHTML = res;
                }
            }
        }
    }
}
function frmUsuarios() {
    document.getElementById("title").innerHTML = "Nuevo usuario";
    document.getElementById("btnAccion").innerHTML = "Registrar";
    document.getElementById("claves").classList.remove("d-none");
    document.getElementById("frmUsuario").reset();

    $("#nuevo_usuario").modal("show");
}
function registrarUser(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario");
    const nombre = document.getElementById("nombre");
    const clave = document.getElementById("clave");
    const confirmar = document.getElementById("confirmar");
    const caja = document.getElementById("caja");

    if (usuario.value == "" || nombre.value == "" || clave.value == "" || caja.value == "") {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Todos los campos son requeridos',
            showConfirmButton: false,
            timer: 2000
          })
    }else if (clave.value != confirmar.value) {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Las contraseñas no coinciden',
            showConfirmButton: false,
            timer: 2000
          })
    }else{
        const url = base_url + "Usuarios/registrar";
        const frm = document.getElementById("frmUsuario");
        const http = new XMLHttpRequest();
        http.open("POST", url, true);
        http.send(new FormData(frm));
        http.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const res = JSON.parse(this.responseText)

                if (res == "Usuario registrado con éxito") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Usuario registrado con éxito',
                        showConfirmButton: false,
                        timer: 2000
                      })
                      frm.reset();
                      $("#nuevo_usuario").modal("hide");
                }else{
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: res,
                        showConfirmButton: false,
                        timer: 2000
                      })
                }
            }
        }
    }
}
function btnEditarUser(id) {
    document.getElementById("title").innerHTML = "Actualizar usuario";
    document.getElementById("btnAccion").innerHTML = "Modificar";

    const url = base_url + "Usuarios/editar/" + id;
    const http = new XMLHttpRequest();

    http.open("GET", url, true);
    http.send();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const res = JSON.parse(this.responseText);

            document.getElementById("id").value = res.id;
            document.getElementById("usuario").value = res.usuario;
            document.getElementById("nombre").value = res.nombre;
            document.getElementById("caja").value = res.id_caja;
            document.getElementById("claves").classList.add("d-none");
            
            $("#nuevo_usuario").modal("show");
        }
    }

}
// +595 973646420
// Basosys Software