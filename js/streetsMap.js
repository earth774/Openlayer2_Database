         OpenLayers.Control.Click = OpenLayers.Class(OpenLayers.Control, {                
                defaultHandlerOptions: {
                    'single': true,
                    'double': false,
                    'pixelTolerance': 0,
                    'stopSingle': false,
                    'stopDouble': false
                },

                initialize: function(options) {
                    this.handlerOptions = OpenLayers.Util.extend(
                        {}, this.defaultHandlerOptions
                    );
                    OpenLayers.Control.prototype.initialize.apply(
                        this, arguments
                    ); 
                    this.handler = new OpenLayers.Handler.Click(
                        this, {
                            'click': this.trigger
                        }, this.handlerOptions
                    );
                }, 

                trigger: function(e) {
                    var lonlat = map.getLonLatFromPixel(e.xy);
                    alert("You clicked near " + lonlat.lat + " N, " +
                                              + lonlat.lon + " E");
                }

            });

        var map;
        // function initMap(){

        //         map = new OpenLayers.Map('map');

        //         var ol_wms = new OpenLayers.Layer.WMS( "OpenLayers WMS",
        //             "http://vmap0.tiles.osgeo.org/wms/vmap0?", {layers: 'basic'} );

        //         map.addLayers([ol_wms]);
        //         map.addControl(new OpenLayers.Control.LayerSwitcher());
        //         // map.setCenter(new OpenLayers.LonLat(0, 0), 0);
        //         map.zoomToMaxExtent();
                
        //         var click = new OpenLayers.Control.Click();
        //         map.addControl(click);
        //         click.activate();

        //     }
  //       function initMap(){

  //           // Google uses EPSG:900913 but out data are in EPSG:4326
  //           var options = {
  //               projection: new OpenLayers.Projection("EPSG:900913"),
  //               displayProjection: new OpenLayers.Projection("EPSG:4326")
  //           };

  //            map = new OpenLayers.Map('map');


         
		// 	var gmap = 	new OpenLayers.Layer.Google(
		// 					"Google Streets", // the default
		// 					{type: google.maps.MapTypeId.ROADMAP, numZoomLevels: 20}
		// 				);
		// 	var gsat = 	new OpenLayers.Layer.Google(
		// 					"Google Satellite",
		// 					{type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 20}
		// 				);
		// 	var ghyb =	new OpenLayers.Layer.Google(
		// 					"Google Hybrid",
		// 					{type: google.maps.MapTypeId.HYBRID, numZoomLevels: 20}
		// 				);
		// 	var gphy = 	new OpenLayers.Layer.Google(
		// 					"Google Physical",
		// 					{type: google.maps.MapTypeId.TERRAIN, numZoomLevels: 20}
		// 				);
  //           map.addLayers([gmap, gphy, ghyb, gsat]);
		// 	map.setBaseLayer(gsat);

  //           //describe visual effects when features are displayed
		// 	streetStyles = new OpenLayers.StyleMap({
		// 		"default": new OpenLayers.Style({
		// 			strokeColor: "yellow",
		// 			strokeOpacity: 1,
		// 			strokeWidth: 4,
		// 			fillColor: "orange",
		// 			fillOpacity: 0.1,
		// 			pointRadius: 6,
		// 		}),
		// 		"select": new OpenLayers.Style({
		// 			strokeColor: "blue",
		// 			strokeOpacity: 1,
		// 			strokeWidth: 4,
		// 			fillColor: "blue",
		// 			fillOpacity: 0.3,
		// 			pointRadius: 6,
		// 		})
		// 	});


		//    // Make a fresh vector layer, pulling features from our script URL
  //           streets = new OpenLayers.Layer.Vector("Streets", {
  //               projection: map.displayProjection,
  //               strategies: [new OpenLayers.Strategy.Fixed()],
  //               protocol: new OpenLayers.Protocol.HTTP({
  //                   url: "functions/getStreets.php",
  //                   format: new OpenLayers.Format.GeoJSON()
  //               }),
  //               styleMap: streetStyles
  //           }); 

            
		// 	drawStyles = new OpenLayers.StyleMap({
		// 		"default": new OpenLayers.Style({
		// 			strokeColor: "orange",
		// 			strokeOpacity: 1,
		// 			strokeWidth: 4,
		// 			fillColor: "orange",
		// 			fillOpacity: 0.1,
		// 			pointRadius: 6,
		// 		}),
		// 		"select": new OpenLayers.Style({
		// 			strokeColor: "blue",
		// 			strokeOpacity: 1,
		// 			strokeWidth: 4,
		// 			fillColor: "blue",
		// 			fillOpacity: 0.3,
		// 			pointRadius: 6,
		// 		})
		// 	});

            
  //           damages = new OpenLayers.Layer.Vector("Damages", {
  //               projection: map.displayProjection,
  //               strategies: [new OpenLayers.Strategy.Fixed()],
  //               protocol: new OpenLayers.Protocol.HTTP({
  //                   url: "functions/getDamages.php",
  //                   format: new OpenLayers.Format.GeoJSON()
  //               }),
		// 		styleMap: drawStyles			
  //           }); 
						
  //           villages = new OpenLayers.Layer.Vector("Villages", {
  //               projection: map.displayProjection,
  //               strategies: [new OpenLayers.Strategy.Fixed()],
  //               protocol: new OpenLayers.Protocol.HTTP({
  //                   url: "functions/getVillages.php",
  //                   format: new OpenLayers.Format.GeoJSON()
  //               }),
		// 		styleMap: drawStyles			
  //           }); 


  //           map.addLayers([streets, damages, villages ]);
		
  //           select = new OpenLayers.Control.SelectFeature([streets, damages, villages]);            
  //           streets.events.on({
  //               "featureselected": onStreetSelect,
  //               "featureunselected": onStreetUnselect
  //           });
			
		// 	damages.events.on({
		// 		"featureselected": onDamageSelect,
		// 		"featureunselected": onDamageUnselect
		// 	});

		// 	villages.events.on({
		// 		"featureselected": onVillageSelect,
		// 		"featureunselected": onVillageUnselect
		// 	});

  //           map.addControl(select);
  //           select.activate();   

  //           map.addControl(new OpenLayers.Control.LayerSwitcher());
  //           map.addControl(new OpenLayers.Control.MousePosition());
  //           var click = new OpenLayers.Control.Click();
  //           map.addControl(click);
  //           click.activate();
  //           map.zoomToExtent(
  //               new OpenLayers.Bounds(
  //                   100.0600, 19.0775, 100.0700, 19.0875

  //               ).transform(map.displayProjection, map.projection)
  //           ); 
            
            
  //       }

		// //details to be shown in map-info <div>
		// function onStreetSelect(event) {
  //           var feature = event.feature;
			
  //           // feature.attributes are fields selected in getVillages.php
		// 	$('#info').append('<p>Name:' + feature.attributes.name + '</p>');
		// 	$('#info').append('<p>Description:' + feature.attributes.description + '</p>');
		// 	$('#info').append('<p>Type:' + feature.attributes.stype + '</p>');

		// }

		
  //       function onStreetUnselect(event) {
  //           var feature = event.feature;
		
		// 	$('#info').html('');
  //       }
		
        
		// function onDamageSelect(event) {
  //           var feature = event.feature;
  //           // feature.attributes are fields selected in getDamages.php
		// 	$('#info').append('<p>ID:' + feature.attributes.id + '</p>');
		// 	$('#info').append('<p>Name:' + feature.attributes.description + '</p>');
		// 	$('#info').append('<p>Image:<img src="images/' + feature.attributes.attach + '"></p>');
		// }

		
  //       function onDamageUnselect(event) {
  //           var feature = event.feature;
		
		// 	$('#info').html('');
  //       }
        
		// function onVillageSelect(event) {
  //           var feature = event.feature;
			
  //           // feature.attributes are fields selected in getVillages.php
		// 	$('#info').append('<p>ID:' + feature.attributes.id + '</p>');
		// 	$('#info').append('<p>Name:' + feature.attributes.name + '</p>');

		// }

		
  //       function onVillageUnselect(event) {
  //           var feature = event.feature;

		// 	$('#info').html('');
  //       }

          var map, vectors, formats;
        function updateFormats() {
            var in_options = {
                'internalProjection': map.baseLayer.projection,
                'externalProjection': new OpenLayers.Projection('EPSG:4326')
            };   
            var out_options = {
                'internalProjection': map.baseLayer.projection,
                'externalProjection': new OpenLayers.Projection('EPSG:4326')
            };
            var gmlOptions = {
                featureType: "feature",
                featureNS: "http://example.com/feature"
            };
            var gmlOptionsIn = OpenLayers.Util.extend(
                OpenLayers.Util.extend({}, gmlOptions),
                in_options
            );
            var gmlOptionsOut = OpenLayers.Util.extend(
                OpenLayers.Util.extend({}, gmlOptions),
                out_options
            );
            var kmlOptionsIn = OpenLayers.Util.extend(
                {extractStyles: true}, in_options);
            formats = {
              'in': {
                wkt: new OpenLayers.Format.WKT(in_options),
                geojson: new OpenLayers.Format.GeoJSON(in_options),
                georss: new OpenLayers.Format.GeoRSS(in_options),
                gml2: new OpenLayers.Format.GML.v2(gmlOptionsIn),
                gml3: new OpenLayers.Format.GML.v3(gmlOptionsIn),
                kml: new OpenLayers.Format.KML(kmlOptionsIn),
                atom: new OpenLayers.Format.Atom(in_options),
                gpx: new OpenLayers.Format.GPX(in_options),
                encoded_polyline: new OpenLayers.Format.EncodedPolyline(in_options)
              },
              'out': {
                wkt: new OpenLayers.Format.WKT(out_options),
                geojson: new OpenLayers.Format.GeoJSON(out_options),
                georss: new OpenLayers.Format.GeoRSS(out_options),
                gml2: new OpenLayers.Format.GML.v2(gmlOptionsOut),
                gml3: new OpenLayers.Format.GML.v3(gmlOptionsOut),
                kml: new OpenLayers.Format.KML(out_options),
                atom: new OpenLayers.Format.Atom(out_options),
                gpx: new OpenLayers.Format.GPX(out_options),
                encoded_polyline: new OpenLayers.Format.EncodedPolyline(out_options)
              }
            };
        }
        function initMap(){
		    map = new OpenLayers.Map('map',{
                projection: new OpenLayers.Projection("EPSG:900913"),
                displayProjection: new OpenLayers.Projection("EPSG:4326")
            });
            var wms = new OpenLayers.Layer.WMS( "OpenLayers WMS",
                "http://vmap0.tiles.osgeo.org/wms/vmap0?", {layers: 'basic'});
            var saveStrategy = new OpenLayers.Strategy.Save();
            vectorsStyles = new OpenLayers.StyleMap({
				"default": new OpenLayers.Style({
					strokeColor: "red",
					strokeOpacity: 1,
					strokeWidth: 4,
					fillColor: "orange",
					fillOpacity: 0.1,
					pointRadius: 6,
				}),
				"select": new OpenLayers.Style({
					strokeColor: "blue",
					strokeOpacity: 1,
					strokeWidth: 4,
					fillColor: "blue",
					fillOpacity: 0.3,
					pointRadius: 6,
				})
			});
            vectors = new OpenLayers.Layer.Vector("Vector Layer",{
            	projection: map.displayProjection,
            	styleMap: vectorsStyles
            });
            var gmap = 	new OpenLayers.Layer.Google(
							"Google Streets", // the default
							{type: google.maps.MapTypeId.ROADMAP, numZoomLevels: 20}
						);
			var gsat = 	new OpenLayers.Layer.Google(
							"Google Satellite",
							{type: google.maps.MapTypeId.SATELLITE, numZoomLevels: 20}
						);
			var ghyb =	new OpenLayers.Layer.Google(
							"Google Hybrid",
							{type: google.maps.MapTypeId.HYBRID, numZoomLevels: 20}
						);
			var gphy = 	new OpenLayers.Layer.Google(
							"Google Physical",
							{type: google.maps.MapTypeId.TERRAIN, numZoomLevels: 20}
						);
				
            map.addLayers([gphy,gmap,gsat,ghyb]);
            map.setBaseLayer(gsat);
            map.addControl(new OpenLayers.Control.LayerSwitcher());
            map.addControl(new OpenLayers.Control.MousePosition());
            map.addControl(new OpenLayers.Control.EditingToolbar(vectors));

            console.log(vectors);
            // var optins = {
            //     click: true,
            //     onSelect: serialize
            // };
            // var select1 = new OpenLayers.Control.SelectFeature(vectors, options);
            // map.addControl(select1);
            // select1.activate();
            

            map.setCenter(new OpenLayers.LonLat(0,0).transform(new OpenLayers.Projection("EPSG:4326")), 3);
        	streetStyles = new OpenLayers.StyleMap({
				"default": new OpenLayers.Style({
					strokeColor: "yellow",
					strokeOpacity: 1,
					strokeWidth: 4,
					fillColor: "orange",
					fillOpacity: 0.1,
					pointRadius: 6,
				}),
				"select": new OpenLayers.Style({
					strokeColor: "blue",
					strokeOpacity: 1,
					strokeWidth: 4,
					fillColor: "blue",
					fillOpacity: 0.3,
					pointRadius: 6,
				})
			});


		   // Make a fresh vector layer, pulling features from our script URL

            streets = new OpenLayers.Layer.Vector("Streets", {
                projection: map.displayProjection,
                strategies: [new OpenLayers.Strategy.Fixed()],
                protocol: new OpenLayers.Protocol.HTTP({
                    url: "functions/getStreets.php",
                    format: new OpenLayers.Format.GeoJSON()
                }),
                styleMap: streetStyles
            }); 

            
			drawStyles = new OpenLayers.StyleMap({
				"default": new OpenLayers.Style({
					strokeColor: "orange",
					strokeOpacity: 1,
					strokeWidth: 4,
					fillColor: "orange",
					fillOpacity: 0.1,
					pointRadius: 6,
				}),
				"select": new OpenLayers.Style({
					strokeColor: "blue",
					strokeOpacity: 1,
					strokeWidth: 4,
					fillColor: "blue",
					fillOpacity: 0.3,
					pointRadius: 6,
				})
			});

            
            damages = new OpenLayers.Layer.Vector("Damages", {
                projection: map.displayProjection,
                strategies: [new OpenLayers.Strategy.Fixed()],
                protocol: new OpenLayers.Protocol.HTTP({
                    url: "functions/getDamages.php",
                    format: new OpenLayers.Format.GeoJSON()
                }),
				styleMap: drawStyles			
            }); 
						
            villages = new OpenLayers.Layer.Vector("Villages", {
                projection: map.displayProjection,
                strategies: [new OpenLayers.Strategy.Fixed()],
                protocol: new OpenLayers.Protocol.HTTP({
                    url: "functions/getVillages.php",
                    format: new OpenLayers.Format.GeoJSON()
                }),
				styleMap: drawStyles			
            }); 
            
            
            map.addLayers([streets, damages, villages, vectors ]);

            // var options = {
            //     click: true,
            //     onSelect: serialize
            // };

            select = new OpenLayers.Control.SelectFeature([streets, damages, villages, vectors]);            
            

            vectors.events.on({
            	"featureselected": serialize,
                "featureunselected": onStreetUnselect
            });
            streets.events.on({
                "featureselected": onStreetSelect,
                "featureunselected": onStreetUnselect
            });
			
			damages.events.on({
				"featureselected": onDamageSelect,
				"featureunselected": onDamageUnselect
			});

			villages.events.on({
				"featureselected": onVillageSelect,
				"featureunselected": onVillageUnselect
			});

            map.addControl(select);
            select.activate();   
            map.zoomToExtent(
                new OpenLayers.Bounds(
                    100.1200, 19.8500, 100.1500, 19.8551

                ).transform(map.displayProjection, map.projection)
            ); 
            

            updateFormats();
            
        }

		//details to be shown in map-info <div>
		function onStreetSelect(event) {
            var feature = event.feature;
			
            // feature.attributes are fields selected in getVillages.php
            $('#info').append('<form action="./functions/update_street.php" method="post">\
            	<p>Name : <input type="text" name="name" value="' + feature.attributes.name + '"></p>\
            	<p>Description : <input type="text" name="des" value="'+feature.attributes.description+'"></p>\
            	<p>Type : <select name="type" id="type">\
								  <option  value="1">แอสฟัลท์</option>\
								  <option  value="2">คอนกรีต</option>\
								  <option  value="3">ลูกรัง</option>\
								</select></p>\
								<input type="hidden" name="id" value="'+feature.attributes.id+'">\
								<input type="submit" value="Update">\
					</form>\
				<button id="btn_d" onclick="delete_data('+feature.attributes.id+',2)"">Delete</button>');
            document.getElementById("type").value=feature.attributes.type;
		}

		
        function onStreetUnselect(event) {
            var feature = event.feature;
		
			$('#info').html('');
        }
		
        
		function onDamageSelect(event) {
            var feature = event.feature;
            // feature.attributes are fields selected in getDamages.php
            $('#info').append('<form action="./functions/update_damages.php" method="post" enctype="multipart/form-data">\
            					<p>Details : <input type="text" name="des" value="' + feature.attributes.description + '"></p>\
            					<p>Telephone : <input type="text" name="tel" value="' + feature.attributes.reportBy + '"></p>\
            					<p>image_chang : <input type="file" name="filUpload"></p>\
            					<p>Image:<img src="images/' + feature.attributes.attach + '" width="400" height="300"></p>\
            					<p><input type="hidden" name="id" value="' + feature.attributes.id + '"><input type="hidden" name="image" value="' + feature.attributes.attach + '"></p>\
            					<input type="submit" value="Update">\
            					</form>\
            					<button id="btn_d" onclick="delete_data('+feature.attributes.id+',1)">Delete</button>');
		}

		
        function onDamageUnselect(event) {
            var feature = event.feature;
		
			$('#info').html('');
        }
        
		function onVillageSelect(event) {
            var feature = event.feature;
            
            // feature.attributes are fields selected in getVillages.php
            $('#info').append('<form action="./functions/update_village.php" method="post" >\
            					<p>Name:<input type="text" name="name" value="' + feature.attributes.name + '"></p>\
            					<p>Type : <select name="type" id="type">\
								  <option  value="1">แอสฟัลท์</option>\
								  <option  value="2">คอนกรีต</option>\
								  <option  value="3">ลูกรัง</option>\
								</select></p>\
								<input type="hidden" name="id" value='+feature.attributes.id+'>\
            					<input type="submit" value="update">\
            					</form>\
            					<button id="btn_d" onclick="delete_data('+feature.attributes.id+',3)">Delete</button>');
            document.getElementById("type").value=feature.attributes.type;
		}

		
        function onVillageUnselect(event) {
            var feature = event.feature;

			$('#info').html('');
        }

        function serialize(event) {
        	var feature = event.feature;
            var type = 'geojson';
            // second argument for pretty printing (geojson only)

            var pretty = false;
            var str = formats['out'][type].write(feature, pretty);
            // not a good idea in general, just for this demo
            str = str.replace(/,/g, ', ');
            str1 = JSON.parse(str);
            if(str1.geometry.type=='Point'){
            	var input = "<form action='./functions/insert_damages.php' method='post' enctype='multipart/form-data'>\
            	Telephone : <input type='text' name='tel' value='earth'><br>\
            	Details : <input type='text' name='des' value='earth'><br>\
            	Picture : <input type='file' name='filUpload'><br>\
            	Data : <textarea name='coord'>"+str1.geometry.type+'('+str1.geometry.coordinates[0]+" "+str1.geometry.coordinates[1]+')'+"</textarea>\
            	<input type='submit' value='add'>\
            	</form>";
            	document.getElementById('info').innerHTML = input;
            	console.log(str1.geometry.type+'('+str1.geometry.coordinates[0]+" "+str1.geometry.coordinates[1]+')');
            }else if(str1.geometry.type=='LineString'){
            	var x=[];
            	for(let i =0;i<=str1.geometry.coordinates.length;i++){
            		if(i==str1.geometry.coordinates.length){
            			break;
            		}
            		x.push(str1.geometry.coordinates[i][0]+' '+str1.geometry.coordinates[i][1]);
            		
            	}
            	var input = "<form action='./functions/insert_street.php' method='post' enctype='multipart/form-data'>\
            	Name : <input type='text' name='name' value='earth'><br>\
            	Details : <input type='text' name='des' value='earth'><br>\
            	Data : <textarea name='coord'>"+str1.geometry.type+'('+x+')'+"</textarea><br>\
            	Type : <select name='type'>\
						  <option value='1'>แอสฟัลท์</option>\
						  <option value='2'>คอนกรีต</option>\
						  <option value='3'>ลูกรัง</option>\
						</select>\
            	<input type='submit' value='add'>\
            	</form>";
            	document.getElementById('info').innerHTML = input;
            	console.log(str1.geometry.type+'('+x+')');
            }else if(str1.geometry.type=='Polygon'){
            	var x=[];
            	for(let i =0;i<=str1.geometry.coordinates[0].length;i++){
            		if(i==str1.geometry.coordinates[0].length){
            			break;
            		}
            		x.push(str1.geometry.coordinates[0][i][0]+' '+str1.geometry.coordinates[0][i][1]);
            		
            	}
            	var input = "<form action='./functions/insert_villages.php' method='post' enctype='multipart/form-data'>\
            	Name : <input type='text' name='name' value='earth'><br>\
            	Data : <textarea name='coord'>"+str1.geometry.type+'('+x+')'+"</textarea><br>\
            	Type : <select name='type'>\
						  <option value='1'>แอสฟัลท์</option>\
						  <option value='2'>คอนกรีต</option>\
						  <option value='3'>ลูกรัง</option>\
						</select>\
            	<input type='submit' value='add'>\
            	</form>";
            	document.getElementById('info').innerHTML = input;
            	console.log(str1.geometry.type+'('+x+')');
            }
            
            
            document.getElementById('info').value = str;
        }
        // function deserialize() {
        //     var element = document.getElementById('text');
        //     var type = document.getElementById("formatType").value;
        //     var features = formats['in'][type].read(element.value);
        //     var bounds;
        //     if(features) {
        //         if(features.constructor != Array) {
        //             features = [features];
        //         }
        //         for(var i=0; i<features.length; ++i) {
        //             if (!bounds) {
        //                 bounds = features[i].geometry.getBounds();
        //             } else {
        //                 bounds.extend(features[i].geometry.getBounds());
        //             }

        //         }
        //         vectors.addFeatures(features);
        //         map.zoomToExtent(bounds);
        //         var plural = (features.length > 1) ? 's' : '';
        //         element.value = features.length + ' feature' + plural + ' added';
        //     } else {
        //         element.value = 'Bad input ' + type;
        //     }
        // }
         (function() {
            var roots = ["draw_point", "draw_line", "draw_polygon", "pan"];
            var onImages = [];
            var offImages = [];
            for(var i=0; i<roots.length; ++i) {
                onImages[i] = new Image();
                onImages[i].src = "../theme/default/img/" + roots[i] + "_on.png";
                offImages[i] = new Image();
                offImages[i].src = "../theme/default/img/" + roots[i] + "_on.png";
            }
        })();
		
		function delete_data(id,tb){
			console.log(id,tb);
            $("#btn_d").click(function(){
                $.post("functions/deleteDamages.php",
                {
                  id: id,
                  tb: tb,
                },
                function(data,status){
                    console.log("Data: " + data + "\nStatus: " + status);
                    window.location.href = 'http://localhost/webmap/streets.php';
                });
            });
        }
		
