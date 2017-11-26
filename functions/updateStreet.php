<?php
	include 'dbconnect.php';
//print_r($_POST); die();

	$arrCol = array();

	if (isset($_POST['fid']) && ($_POST['fid'] != '')) {
		$sqlText = 'SELECT * FROM street WHERE id=' . $_POST['fid'];
		$arrCol['SQL'] = $sqlText;
//echo json_encode($arrCol); die();

		$retVal = mysqli_query($conn, $sqlText) or die(mysqli_error($conn));
		if (mysqli_num_rows($retVal) > 0) { //street exist
			
			$fvalue = ' name=' . ((isset($_POST['fname'])) ? ('"' . $_POST['fname'] . '"') : '') . ',';
			$fvalue .= ' description=' . ((isset($_POST['fdesc'])) ? ('"' . $_POST['fdesc'] . '"') : '""') . ',';
	//		$fvalue .= ' type=' . ((isset($_POST['ftype'])) ? ('"' . $_POST['ftype'] . '"') : '""') . ',';
			$fvalue .= ' coord=' . ((isset($_POST['fcoord'])) ? ('"' . $_POST['fcoord'] . '"') : '');
			
			$arrCol['fid'] = $_POST['fid'];
			
			$sqlText = 'UPDATE street SET ' . $fvalue . ' WHERE id=' . $_POST['fid'];
			$arrCol['SQL'] = $sqlText;
//echo json_encode($arrCol); die();
			$retVal = mysqli_query($conn, $sqlText) or $arrCol['msg'] = mysqli_error($conn); 
			if(!$retVal ) {
				$arrCol['msg'] = 'modify street unsuccessfully: ' . $sqlText . mysqli_error($conn);
				$arrCol['succ'] = "NOK";
			} else {
				$arrCol['msg'] = 'modify street successfully';
				$arrCol['succ'] = "OK";			
			}
			
			
		} else {
			$arrCol['msg'] = 'wrong street id';
			$arrCol['succ'] = "NOK";
			$arrCol['fid'] = $fid;					
		}

	} else { //street not exist, add a new one
		$fvalue = ((isset($_POST['fname'])) ? ('"' . $_POST['fname'] . '"') : '""') . ',';
		$fvalue .= ((isset($_POST['fdesc'])) ? ('"' . $_POST['fdesc'] . '"') : '""') . ',';
//		$fvalue .= ((isset($_POST['ftype'])) ? ('"' . $_POST['ftype'] . '"') : '') . ',';
//		$fvalue .= ((isset($_POST['flength'])) ? ('"' . $_POST['flength'] . '"') : '') . ',';
		$fvalue .= '1' . ',';
		$fvalue .= '""' . ',';
		$fvalue .= ((isset($_POST['fcoord'])) ? ('"' . $_POST['fcoord'] . '"') : '""');
		$fvalue = '(' . $fvalue . ')';

		$sqlText = 'INSERT INTO street (name, description, type, geotype, coord) VALUES' . ' ' . $fvalue; 
		$arrCol['SQL'] = $sqlText;
//echo json_encode($arrCol); die();
		$retVal = mysqli_query($conn, $sqlText) or $arrCol['msg'] = mysqli_error($conn); 
		if(!$retVal ) {
			$arrCol['msg'] = 'Add street unsuccessfully: ' . mysqli_error($conn);
			$arrCol['succ'] = "NOK";
			$arrCol['SQL'] = $sqlText;
		} else {
			//get just inserted idRM1
			$fid = mysqli_insert_id($conn);

			$arrCol['msg'] = 'Add street successfully';
			$arrCol['succ'] = "OK";
			$arrCol['SQL'] = $sqlText;
			$arrCol['fid'] = $fid;			
		}

	}
		
	mysqli_close($conn);
	//sending results back to ajax
	//array_push($resultArray,$arrCol);
	echo json_encode($arrCol);
	//echo json_encode($_POST);

?>