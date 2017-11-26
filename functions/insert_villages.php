<?php
	include 'dbconnect.php';

	$sql = "INSERT INTO `village`(`name`, `coord`, `type`) VALUES ('".$_POST['name']."','".$_POST['coord']."',".$_POST['type'].")";
		// INSERT INTO `damages` ( `description`, `attach`, `staus`, `coord`, `reportBy`) VALUES ( 'dsadsa', '', '1', 'Point(43.94531249999989 20.46818922264122)', '0864280331')
		echo $sql;
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