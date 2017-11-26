<?php
	include 'dbconnect.php';
	$tb;
	if($_POST['tb']==1){
		$tb='damages';
	}
	$sql = "DELETE FROM ".$tb." WHERE `id`=".$_POST['id'];
	if ($conn->query($sql) === TRUE) {
    	echo "Delete Data Success.";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();
?>