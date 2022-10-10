//declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var txtTel=document.getElementById("txtTel")
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");

//creamos un procedimient para asignar la clase
function LlamarClase(m){
        error.style.display='block';
        error.innerHTML+='<li>'+m+'</li>';
}

//creamos un procedimiento para validar 
function Validar(){
    //reiniciamos el error para que se carge sin ningun mensaje
    error.innerHTML='';
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingrese sus nombres");
        LlamarClase("Por favor ingrese sus apellidos");
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor ingrese su telefono");
        LlamarClase("Por favor seleccione su sexo");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingrese sus apellidos");
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor seleccione su sexo");
        txtApe.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor seleccione su sexo");
        txtCor.focus();
    }else if(txtCor.value=="" || txtCor.value==null){
        LlamarClase("Por favor ingrese su correo");
        LlamarClase("Por favor seleccione su sexo");
        txtCor.focus();
    }else if(rbMas.checked==false && rbFem.checked==false &&rbOtr.checked==false){
        LlamarClase("Por favor seleccione su sexo");
        rbMas.focus();
    }else{
        error.style.display='none';
    }
}