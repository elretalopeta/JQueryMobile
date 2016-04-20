function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    $('#login').click(home);
    
    //$('#demo').click(demo);

    $('#home-load').click(function(){
        load(1);
    });
    $('#detalle-load').click(function(){
        load(2);
    });

    $('#add').click(contenido);
    $('#añadir').click(contenido);

    $('#guardar').click(guardar);
    $('.ir').click(detalle);
    
}

function demo(){
    alert('a');
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
    //alert('Tipo 2');
    navigator.camera.getPicture(detallePictureSuccess, onFail, {
         quality: 100
    , saveToPhotoAlbum: true
        ,destinationType: navigator.camera.DestinationType.DATA_URL
        , sourceType: navigator.camera.PictureSourceType.CAMERA
    });

    break;

   }
};

var id = 1;
function detallePictureSuccess(imageData) { 
    if(id>3)id=1;
    var imagen = $('#detalle-img-'+id);
    imagen.attr('src', "data:image/jpeg;base64," + imageData);
    id++;
}

var imagen;
function homePictureSuccess(imageData) {   
    imagen = $('#img');
    imagen.attr('src', "data:image/jpeg;base64," + imageData);
}

function guardar(){
    //var elemento = $('<li class="ui-li-has-thumb ui-last-child"><a href="#detalle" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="'+ imagen.attr('src')+'" /><h2>Broken Bells</h2><p>Broken Bells</p></a></a></li>');
    //var objeto = imagen;
    //var elemento = $('<li class="ui-li-has-thumb ui-last-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r"> <h2>Broken Bells</h2><p>Broken Bells</p></a></li>');
    //elemento.$("a").after(imagen);

    var nombre = $('#nombre').val();
    var anchura = $('#anchura').val();
    var altura = $('#altura').val();
    var profundida = $('#profundidad').val();
    var objeto = [nombre, anchura, altura, profundida];

    //JSON.stringify

    localStorage.setItem("objeto", JSON.stringify(objeto));

    var id = $('#ubicacion').val();
    //$("#"+id).after(elemento);
};

function contenido(){
    //var imagen = $('<li class="ui-li-has-thumb ui-last-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="img/cocina.jpg"><h2>Broken Bells</h2> <p>Broken Bells</p></a></a></li>');
    //$('#comedor').after(imagen);

    var anchura = $('#anchura').val();
    $('#ver').html(anchura);
}

function detalle(){
    var objeto = JSON.parse(localStorage.getItem("objeto"));
    //var objeto = localStorage.getItem("objeto");
    //document.getElementById("ver2").innerHTML = objeto[0];
    //document.getElementById("ver2").append = objeto[0];
    $("#nombre-detalle").append(objeto[0]);
    $("#anchura-detalle").append(objeto[1]);
    $("#altura-detalle").append(objeto[2]);
    $("#profundidad-detalle").append(objeto[3]);
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
