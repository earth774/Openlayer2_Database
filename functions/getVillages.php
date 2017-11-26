<?php
	include 'dbconnect.php';
	include 'wkt-geojson.php';

    $strSQL = "SELECT * FROM village"; //die($strSQL);
	$results = mysqli_query($conn,$strSQL) or die (mysqli_error($conn)); 

	$wkt = new WKT();
	$output = '';

		while ($row = mysqli_fetch_assoc($results)) {
		
			if ($wkt->read($row['coord']) != '') {
				$rowOutput = '';
				$props = '';
				$geometry = '';
				
				foreach ($row as $key => $val) {
//					if ((!is_numeric($key)) && ($key != 'coord')){
					if (($key != 'coord')){
						$props .= (strlen($props) > 0 ? ',' : '') . '"' . $key . '":"' . $val . '"';
					}
				}
				$props = '"properties":{' . $props . '},';
				$geometry = '"geometry":' . $wkt->read($row['coord']);
				$rowOutput = (strlen($output) > 0 ? ',' : '') . '{"type":"Feature",' . $props . $geometry . '}';
				$output .= $rowOutput  . PHP_EOL;
				$output .= "\r\n";
			}
		
		//print_r($row); print("<br>");
		}
	mysqli_free_result($results);
	mysqli_close($conn);


	$output = '{ "type":"FeatureCollection", "features":[ ' . $output . ' ]}';
	echo $output;