<?php
$mysqli =new mysqli('localhost','root','','drop_students');
$mysqli-> set_charset("utf8");

$consulta= $mysqli -> query("select * from student where idStudent =1");
$student= $consulta->fetch_assoc();

$consulta2 = $mysqli -> query ("select * from grupo where idGrupo =1");
$grupo= $consulta2->fetch_assoc();

//echo $student['numero_documento'];
echo $student['nombreStudent'];
echo $student['edadStudent'];
echo $grupo['nombreGrupo'];

?>