<?php
    /* Establece la zona horario para Lima */
    date_default_timezone_set('America/Lima');
    //Datos para conexion con la base de datos
    $servidor="localhost";
    $usuario="root";
    $clave="";
    $basedatos="bd_36617";

    $conex=mysqli_connect($servidor,$usuario,$clave,$basedatos);    
?>