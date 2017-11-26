<?php
	include 'dbconnect.php';
	$tb;
	if($_POST['tb']==1){
		$tb='damages';
	}else if($_POST['tb']==2){
		$tb='street';
	}else if($_POST['tb']==3){
		$tb='village';
	}
	$sql = "DELETE FROM ".$tb." WHERE `id`=".$_POST['id'];
	if ($conn->query($sql) === TRUE) {
    	echo "Delete Data Success.";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();
?>