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

function homePictureSuccess(imageData) {   
    var imagen = $('#img');
    imagen.attr('src', "data:image/jpeg;base64," + imageData);
}

function guardar(){
    var elemento = $('<li class="ui-li-has-thumb ui-last-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+imagen+'<h2>Broken Bells</h2><p>Broken Bells</p></a></a></li>');
    var anchura = $('#anchura').html();

    $("#ver").html(anchura);

    var id = $('#ubicacion').val();
    $("#"+id).after(elemento);
};

function contenido(){
    //var imagen = $('<li class="ui-li-has-thumb ui-last-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r"><img src="img/cocina.jpg"><h2>Broken Bells</h2> <p>Broken Bells</p></a></a></li>');
    //$('#comedor').after(imagen);

    var anchura = $('#prueba').val();
    $('#ver').html(anchura);
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
