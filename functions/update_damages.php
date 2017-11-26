<?php
	include 'dbconnect.php';
	if(move_uploaded_file($_FILES["filUpload"]["tmp_name"],"../images/".$_FILES["filUpload"]["name"]))
	{
		$sql="UPDATE `damages` SET `description`='".$_POST['des']."',`attach`='".$_FILES['filUpload']['name']."',`reportBy`='".$_POST['tel']."' WHERE `id`=".$_POST['id'];
		@unlink("../images/".$_POST['image']);
	}else{
		$sql="UPDATE `damages` SET `description`='".$_POST['des']."',`attach`='".$_POST['image']."',`reportBy`='".$_POST['tel']."' WHERE `id`=".$_POST['id'];

	}
	if ($conn->query($sql) === TRUE) {
	    	?>
	   		<script type="text/javascript">
	    		window.location.href = 'http://localhost/webmap/streets.php';
	    	</script>
			<?php
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
	$conn->close();
?>