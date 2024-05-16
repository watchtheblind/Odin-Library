<?php
    // conecto con la database
   /* $nombreHost = 'localhost';
    $baseDatos = 'books';
    $usuario = 'root';
    $contrasena = "";
    try {
        $conn = new PDO("mysql:host=$nombreHost;dbname=$baseDatos", $usuario, $contrasena);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $conn->prepare("INSERT INTO book (author,title,pagNum,statu) VALUES (:autor,:title,:paginas,:estado)");
        $stmt->bindParam(':autor', $_POST['author']);
        $stmt->bindParam(':title', $_POST['title']);
        $stmt->bindParam(':paginas', $_POST['numPages']);
        $stmt->bindParam(':estado', $_POST['readStatus']);
        $stmt->execute();
        if ($stmt->rowCount() > 0) {
            ?> <script>
                alert("funciona");
                </script>
        <?php }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    // inserto en la base de datos*/

    $a=$_POST['author'];
    $b=$_POST['title'];
    $c=$_POST['numPages'];
    $d=$_POST['statusSelect'];

    if($a === '' || $b === '' || $c === '' || $d === ''){
        echo json_encode('erro');
    }else{
        echo json_encode('listo : <br>a:'.$a'<br>b:'.$b'<br>c:'.$c'<br>d:'.$d'<br>');
    }
    
    
?>
   