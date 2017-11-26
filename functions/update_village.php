<?php
	include 'dbconnect.php';
	$sql = "UPDATE `village` SET `name`='".$_POST['name']."',`type`=".$_POST['type']." WHERE `id`=".$_POST['id'];
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