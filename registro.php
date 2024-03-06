<?php
    if($_SERVER["REQUEST_METHOD"]=="POST"){

        include("con_db.php");
        // si la conexion tuvo exito
        if($conex==true)
        {
            // echo 'Conexion Exitosa a base de datos';
            // leer los datos de los campos del formulario
            $nombre = $_POST["txtnombres"];
            $correo = $_POST["txtcorreo"];
            $celular = $_POST["txtcelular"];
            $tema = $_POST["txttema"];
            $consultoria = $_POST["lstconsultoria"];
            $mensaje = $_POST["txtmensaje"];
            $fecharegistro = date("d/m/Y H:i:s");  
            
            // generando la consulta sql para insertar el contacto
            $consulta="INSERT INTO contactos (nombre,
            correo, celular, tema,
            consultoria, mensaje,
            fecharegistro) VALUES 
            ('$nombre','$correo','$celular',
            '$tema','$consultoria','$mensaje',
            '$fecharegistro') ";
            
            // Ejecutar la consulta de INSERCIÓN
            $resultado = mysqli_query($conex,$consulta);

            // Si ejecutó la consulta de INSERCIÓN CON EXITO...
            if($resultado==true) { /* añadio con exito la nueva fila */
                ?>
                <h2 class="inscripcion_ok">
                    ¡Registro exitoso! En breve nos comunicaremos contigo
                </h2>
                <?php
            } else {
                ?>
                <h2 class="error">
                    ¡Ha ocurrido un error al grabar el registro!
                </h2>
                <?php
            }

        } else{
            echo 'Ha ocurrido un error de conexión a su base de datos';

        } 
    }
?>