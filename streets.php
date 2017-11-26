<!--A Design by W3layouts
Author: W3layout
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<!DOCTYPE html>
<head>
	<title>Openlayers Web Map</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="keywords" content="openlayers" />
	
	<!-- openlayers -->
    <link rel="stylesheet" href="js/Openlayers-2.13.1/theme/default/style.css" type="text/css">
    <link rel="stylesheet" href="css/style-map.css" type="text/css">
    <script src="js/Openlayers-2.13.1/OpenLayers.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
	<script src="js/streetsMap.js"></script>
	<script src="js/jquery2.0.3.min.js"></script>
	<style type="text/css">
        input, select, textarea {
            font: 0.9em Verdana, Arial, sans-serif;
        }
        #leftcol {
            position: absolute;
            top: 0;
            left: 1em;
            padding-top: 2em;
            width: 517px;
        }
        #map {
            width: 50%em;
            height: 512px;
            border: 1px solid #ccc;
        }
        #input {
            width: 512px;
        }
        #text {
            font-size: 0.85em;
            margin: 1em 0 1em 0;
            width: 100%;
            height: 10em;
        }
        #info {
            position: relative;
            padding: 2em 0;
            /*margin-left: 540px;*/
        }
        #output {
            font-size: 0.8em;
            width: 100%;
            height: 512px;
            border: 0;
        }
        p {
            margin: 0;
            padding: 0.75em 0 0.75em 0;
        } 
        .smallmap{
            margin-top:1em; 
        }
    </style>
</head>

<body>
    <div id="leftcol">
        <table>
            <td><div id="map" class="smallmap"></div></td>
            <td ng-app=""><div id="info">
    </div></td>
        </table>


        




    </div>
    
<!--     <table>
        <tr>
            <td>
                <div id="map"></div>
            </td>
            <td>
                <div id="info"></div>
            </td>
        </tr>
    </table> -->
	<script>    
		$(document).ready(function() {
			initMap();

});
       
    </script>
</body>
</html>
