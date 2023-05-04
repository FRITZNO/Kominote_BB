ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32618").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Wout2_1 = new ol.format.GeoJSON();
var features_Wout2_1 = format_Wout2_1.readFeatures(json_Wout2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Wout2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wout2_1.addFeatures(features_Wout2_1);
var lyr_Wout2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wout2_1, 
                style: style_Wout2_1,
                interactive: true,
                title: '<img src="styles/legend/Wout2_1.png" /> Wout 2'
            });
var format_Lagonav_2 = new ol.format.GeoJSON();
var features_Lagonav_2 = format_Lagonav_2.readFeatures(json_Lagonav_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Lagonav_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagonav_2.addFeatures(features_Lagonav_2);
var lyr_Lagonav_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lagonav_2, 
                style: style_Lagonav_2,
                interactive: false,
                title: '<img src="styles/legend/Lagonav_2.png" /> Lagonav'
            });
var format_BiwoIKMRiral_3 = new ol.format.GeoJSON();
var features_BiwoIKMRiral_3 = format_BiwoIKMRiral_3.readFeatures(json_BiwoIKMRiral_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_BiwoIKMRiral_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BiwoIKMRiral_3.addFeatures(features_BiwoIKMRiral_3);
var lyr_BiwoIKMRiral_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BiwoIKMRiral_3, 
                style: style_BiwoIKMRiral_3,
                interactive: true,
                title: '<img src="styles/legend/BiwoIKMRiral_3.png" /> Biwo IKM Riral'
            });
var format_Estriktikominot_4 = new ol.format.GeoJSON();
var features_Estriktikominot_4 = format_Estriktikominot_4.readFeatures(json_Estriktikominot_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32618'});
var jsonSource_Estriktikominot_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estriktikominot_4.addFeatures(features_Estriktikominot_4);
var lyr_Estriktikominot_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estriktikominot_4, 
                style: style_Estriktikominot_4,
                interactive: true,
    title: 'Estrikti kominotè<br />\
    <img src="styles/legend/Estriktikominot_4_0.png" /> BRS ak Komantim<br />\
    <img src="styles/legend/Estriktikominot_4_1.png" /> Komantim<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Wout2_1.setVisible(true);lyr_Lagonav_2.setVisible(true);lyr_BiwoIKMRiral_3.setVisible(true);lyr_Estriktikominot_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Wout2_1,lyr_Lagonav_2,lyr_BiwoIKMRiral_3,lyr_Estriktikominot_4];
lyr_Wout2_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'ref': 'ref', 'type': 'type', 'oneway': 'oneway', 'bridge': 'bridge', 'Shape_Leng': 'Shape_Leng', });
lyr_Lagonav_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ID_ADM1': 'ID_ADM1', 'ADM1': 'ADM1', 'ID_ADM2': 'ID_ADM2', 'ADM2': 'ADM2', 'ID_ADM3': 'ID_ADM3', 'NOM_ADM3': 'NOM_ADM3', 'ADM3': 'ADM3', 'NO_ADM4': 'NO_ADM4', 'ID_ADM4': 'ID_ADM4', 'NOM_ADM4': 'NOM_ADM4', 'ADM4': 'ADM4', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Ar_1': 'Shape_Ar_1', });
lyr_BiwoIKMRiral_3.set('fieldAliases', {'Nom': 'Nom', 'Lat': 'Lat', 'Long': 'Long', 'Alt': 'Alt', });
lyr_Estriktikominot_4.set('fieldAliases', {'form.komin': 'Komin', 'Seksyon': 'Seksyon', 'Kominote': 'Kominote', 'Tip estrik': 'Tip estrikti ki genyen', 'Kantite ma': 'Kantite Manm', 'Lat': 'Latitid', 'Long': 'Longitid', 'Alt': 'Altitid', 'field_9': 'field_9', });
lyr_Wout2_1.set('fieldImages', {'osm_id': '', 'name': '', 'ref': '', 'type': '', 'oneway': '', 'bridge': '', 'Shape_Leng': '', });
lyr_Lagonav_2.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', 'ID_ADM1': '', 'ADM1': '', 'ID_ADM2': '', 'ADM2': '', 'ID_ADM3': '', 'NOM_ADM3': '', 'ADM3': '', 'NO_ADM4': '', 'ID_ADM4': '', 'NOM_ADM4': '', 'ADM4': '', 'Shape_Le_1': '', 'Shape_Ar_1': '', });
lyr_BiwoIKMRiral_3.set('fieldImages', {'Nom': '', 'Lat': '', 'Long': '', 'Alt': '', });
lyr_Estriktikominot_4.set('fieldImages', {'form.komin': 'TextEdit', 'Seksyon': 'TextEdit', 'Kominote': 'TextEdit', 'Tip estrik': 'TextEdit', 'Kantite ma': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Alt': 'TextEdit', 'field_9': 'TextEdit', });
lyr_Wout2_1.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'ref': 'no label', 'type': 'no label', 'oneway': 'no label', 'bridge': 'no label', 'Shape_Leng': 'no label', });
lyr_Lagonav_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ID_ADM1': 'no label', 'ADM1': 'no label', 'ID_ADM2': 'no label', 'ADM2': 'no label', 'ID_ADM3': 'no label', 'NOM_ADM3': 'no label', 'ADM3': 'no label', 'NO_ADM4': 'no label', 'ID_ADM4': 'no label', 'NOM_ADM4': 'no label', 'ADM4': 'no label', 'Shape_Le_1': 'no label', 'Shape_Ar_1': 'no label', });
lyr_BiwoIKMRiral_3.set('fieldLabels', {'Nom': 'header label', 'Lat': 'header label', 'Long': 'header label', 'Alt': 'header label', });
lyr_Estriktikominot_4.set('fieldLabels', {'form.komin': 'inline label', 'Seksyon': 'inline label', 'Kominote': 'inline label', 'Tip estrik': 'inline label', 'Kantite ma': 'inline label', 'Lat': 'inline label', 'Long': 'inline label', 'Alt': 'no label', 'field_9': 'no label', });
lyr_Estriktikominot_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});