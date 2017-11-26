<?php
	include 'dbconnect.php';
//echo json_encode($_POST); die();

	$arrCol = array();

	if (isset($_POST['fid']) && ($_POST['fid'] != '')) {
		$sqlText = 'SELECT * FROM street WHERE id=' . $_POST['fid'];
		$arrCol['SQL'] = $sqlText;
//echo json_encode($arrCol); die();

		$retVal = mysqli_query($conn, $sqlText) or die(mysqli_error($conn));
		if (mysqli_num_rows($retVal) > 0) { //street exist
			
			$arrCol['fid'] = $_POST['fid'];
			
			$sqlText = 'DELETE FROM street WHERE id=' . $_POST['fid'];
			$arrCol['SQL'] = $sqlText;
//echo json_encode($arrCol); die();
			$retVal = mysqli_query($conn, $sqlText) or $arrCol['msg'] = mysqli_error($conn); 
			if(!$retVal ) {
				$arrCol['msg'] = 'delete street unsuccessfully: ' . $sqlText . mysqli_error($conn);
				$arrCol['succ'] = "NOK";
			} else {
				$arrCol['msg'] = 'delete street successfully';
				$arrCol['succ'] = "OK";			
			}
			
			
		} else {
			$arrCol['msg'] = 'cannot delete: this street id does not exist!';
			$arrCol['succ'] = "NOK";
			$arrCol['fid'] = $_POST['fid'];					
		}

	} else { //street not exist, send error message

		$arrCol['msg'] = 'No street is selected!';
		$arrCol['succ'] = "NOK";

	}
		
	mysqli_close($conn);
	//sending results back to ajax
	echo json_encode($arrCol);

?>