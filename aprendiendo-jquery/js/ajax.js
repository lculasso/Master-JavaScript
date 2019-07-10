$(document).ready(function(){
    'use strict';

    /*==============================================================================================
    CARGAR LOAD 
    ==============================================================================================*/

    // $("#datos").load("https://reqres.in/");

    /*==============================================================================================
    METODO GET
    ==============================================================================================*/

    $.get("https://reqres.in/api/users", {page: 3}, function(response){
        response.data.forEach((element,index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
    });

    /*==============================================================================================
    METODO POST
    ==============================================================================================*/

    $("#formulario").submit(function(e){
        e.preventDefault();
        var usuario = {
            name: $('input[name = "name]').val(), 
            web: $('input[web = "web"]').val()
        };

        console.log(usuario);

        $.post($(this).attr("action"), usuario, function (response) {
            console.log(response);
        }).done(function(){
            alert("Usuario añadido correctamente");
        });
        return false;
    });

});