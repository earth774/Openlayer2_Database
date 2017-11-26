<?php
	include 'dbconnect.php';

    if (isset($_GET['tab']))
        $tab = $_GET['tab'];
	else
		$tab = "street";
	
	$utype = 0;
	if ($tab == "street")
		$utype = 0;
	else if ($tab == "electric")
		$utype = 1;
	else if ($tab == "pipe")
		$utype = 2;
	
	$strSQL = "SELECT * FROM " . $tab;
	$results = mysqli_query($conn,$strSQL) or die (mysqli_error($conn));

	$output = '';

	while ($row = mysqli_fetch_assoc($results)) {
		$rowOutput = '';
		$props = '';
		$desc = '';
		$geometry = '';
		$geotype = '"type":';
		$geocoord ='"coordinates":';
		
		foreach ($row as $key => $val) {
			if ($key == "geotype") {
				$geotype .= '"' . $val . '"';
			}else if ($key == "coord") {
				$geocoord .= '[' . $val . ']';
			}else if (!is_numeric($key)){
				if($key == "type")
					$props .= (strlen($props) > 0 ? ',' : '') . '"' . "type" . '":"' . $val . '"';
				else
					$desc .= (strlen($desc) > 0 ? ',' : '') .  $key . '&' . $val . '';	
			}
		}
		$props = '"properties":{' . $props . ',"description":"' . $desc . (strlen($desc) > 0 ? ',' : '') . 'utype&' . $utype . '"},';
		$geometry = '"geometry":{' . $geotype . ',' . $geocoord . '}';
		$rowOutput = (strlen($output) > 0 ? ',' : '') . '{"type":"Feature",' . $props . $geometry . '}';
		$output .= $rowOutput;
	}

	mysqli_free_result($results);
	mysqli_close($conn);

	$output = '{ "type":"FeatureCollection", "features":[ ' . $output . ' ]}';
	echo $output;
?>