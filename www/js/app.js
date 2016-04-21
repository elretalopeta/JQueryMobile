function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }

    $('#login').click(home);
    $('#home-load').click(function(){
        load(1);
    });
    $('#detalle-load').click(function(){
        load(2);
    });
    $('#guardar').click(guardar);
    $('#return').click(vaciar);
    $('.vista-detalle').click(detalle);
    
}

function demo(){
   
};

var imagen;
function changePage(){};
function onFail(){}
function load(type){
switch(type){
    case 1:
    navigator.camera.getPicture(homePictureSuccess, onFail, {
         quality: 100
    , saveToPhotoAlbum: true
        ,destinationType: navigator.camera.DestinationType.DATA_URL
        , sourceType: navigator.camera.PictureSourceType.CAMERA
    });

    break;
    case 2:
    navigator.camera.getPicture(detallePictureSuccess, onFail, {
         quality: 100
    , saveToPhotoAlbum: true
        ,destinationType: navigator.camera.DestinationType.DATA_URL
        , sourceType: navigator.camera.PictureSourceType.CAMERA
    });

    break;

   }
};

var id = 0; //key para saber imagen slider (0-2)
function detallePictureSuccess(imageData) { 
    
    if(id>2)id = 0;
    var imagenDetalle = $('#img-detalle-'+id);
    imagenDetalle.attr('src', "data:image/jpeg;base64," + imageData);
    var objetoRemplazar = JSON.parse(localStorage.getItem(idItem));
    objetoRemplazar[4][id] = imagenDetalle.attr('src');
    localStorage.setItem("item"+key, JSON.stringify(objetoRemplazar));
    id++;
    alert(id);
}

var imagen;
function homePictureSuccess(imageData) {   
    imagen = $('#img');
    imagen.attr('src', "data:image/jpeg;base64," + imageData);
}

var key = 1;
function guardar(){

    if(localStorage.getItem("key") == null){
        localStorage.setItem("key", 1);
    }else{  
      key++;
        localStorage.setItem("key", key);
    }

    var nombre = $('#nombre').val();
    var anchura = $('#anchura').val();
    var altura = $('#altura').val();
    var profundida = $('#profundidad').val();
    var imagenes = [imagen.attr('src')];
    var objeto = [nombre, anchura, altura, profundida, imagenes];
   

    var elemento = $('<li class="ui-li-has-thumb ui-last-child vista-detalle" id="item'+key+'"><a href="#detalle" class="ui-btn ui-btn-icon-right ui-icon-carat-r identificador"><img src="'+imagen.attr('src')+'"/><h2>'+nombre+'</h2></a></li>');
    localStorage.setItem("item"+key, JSON.stringify(objeto));
    var id = $('#ubicacion').val(); //seleccionar el campo tipo comedor/cocina/dormitorio
    $("#"+id).after(elemento); //añado el elemento a la lista
    $('.vista-detalle').click(detalle); //remarco para que me haga esta funcion en los elementos creados
    
    $('#nombre').val("");
    $('#anchura').val("0");
    $('#altura').val("0");
    $('#profundidad').val("0");
    $('#img').attr("src", "img/default.png");


    //$('#ver').html("Resultado: "+objeto[4][0]);
};
function vaciar(){
    $("#img-detalle-2").attr("src", "img/default.png");
    $("#img-detalle-3").attr("src", "img/default.png");
}

var idItem = 0;
function detalle(){
    idItem = $(this).attr('id');
    var objeto = JSON.parse(localStorage.getItem(idItem));
    $("#nombre-detalle").html("Nombre: "+objeto[0]);
    $("#anchura-detalle").html("Anchura: "+objeto[1]);
    $("#altura-detalle").html("Altura: "+objeto[2]);
    $("#profundidad-detalle").html("Profundidad: "+objeto[3]);
    cargarImagenes(objeto);
    id = objeto[4].length;
}

function cargarImagenes(objeto){

    switch(objeto[4].length){
        case 1:
          $("#img-detalle-0").attr("src", objeto[4][0]);
        break;

        case 2:
            $("#img-detalle-0").attr("src", objeto[4][0]);
            $("#img-detalle-1").attr("src", objeto[4][1]);
        break;
        case 3:
            $("#img-detalle-0").attr("src", objeto[4][0]);
            $("#img-detalle-1").attr("src", objeto[4][1]);
            $("#img-detalle-2").attr("src", objeto[4][2]);
        break;
    }

}

function home(){

    //window.location.href='../vistas/home.html'";
    /*
    $( ".selector" ).pagecontainer( "change" );
    $( ":mobile-pagecontainer" ).pagecontainer("change", "../vistas/home.html");

//pagecontainer("vistas/home.html");
    //console.log($.mobile.changePage( "#p2"));
    //$( ":mobile-pagecontainer" ).pagecontainer( "change", "#p2", { role: "dialog" } );
    //$.mobile.loadPage( "../vistas/home.html");
    //$.mobile.changePage( "#p2", { transition: "slideup", changeHash: false });
    //jQuery.mobile.changePage()
    */
}
document.addEventListener("app.Ready", onAppReady, false) ;
