var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_SoTandNuLUKCEHHabs_2 = new ol.format.GeoJSON();
var features_SoTandNuLUKCEHHabs_2 = format_SoTandNuLUKCEHHabs_2.readFeatures(json_SoTandNuLUKCEHHabs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoTandNuLUKCEHHabs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoTandNuLUKCEHHabs_2.addFeatures(features_SoTandNuLUKCEHHabs_2);
var lyr_SoTandNuLUKCEHHabs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SoTandNuLUKCEHHabs_2, 
                style: style_SoTandNuLUKCEHHabs_2,
                popuplayertitle: 'SoT and NuL UKCEH Habs',
                interactive: false,
    title: 'SoT and NuL UKCEH Habs<br />\
    <img src="styles/legend/SoTandNuLUKCEHHabs_2_0.png" /> Broadleaf Woodland<br />\
    <img src="styles/legend/SoTandNuLUKCEHHabs_2_1.png" /> Built-up areas<br />\
    <img src="styles/legend/SoTandNuLUKCEHHabs_2_2.png" /> Coniferous woodland<br />\
    <img src="styles/legend/SoTandNuLUKCEHHabs_2_3.png" /> Arable / Horticulture <br />\
    <img src="styles/legend/SoTandNuLUKCEHHabs_2_4.png" /> Improved grassland<br />\
    <img src="styles/legend/SoTandNuLUKCEHHabs_2_5.png" /> Semi-natural grassland<br />\
    <img src="styles/legend/SoTandNuLUKCEHHabs_2_6.png" /> Dwarf Shrub / Heath / Bog<br />\
    <img src="styles/legend/SoTandNuLUKCEHHabs_2_7.png" /> Freshwater (Standing & flowing)<br />' });
var format_ModelledSiteValues_3 = new ol.format.GeoJSON();
var features_ModelledSiteValues_3 = format_ModelledSiteValues_3.readFeatures(json_ModelledSiteValues_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ModelledSiteValues_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ModelledSiteValues_3.addFeatures(features_ModelledSiteValues_3);
var lyr_ModelledSiteValues_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ModelledSiteValues_3, 
                style: style_ModelledSiteValues_3,
                popuplayertitle: 'Modelled Site Values',
                interactive: true,
                title: '<img src="styles/legend/ModelledSiteValues_3.png" /> Modelled Site Values'
            });
var format_PredictedSpeciesRichness_4 = new ol.format.GeoJSON();
var features_PredictedSpeciesRichness_4 = format_PredictedSpeciesRichness_4.readFeatures(json_PredictedSpeciesRichness_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PredictedSpeciesRichness_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PredictedSpeciesRichness_4.addFeatures(features_PredictedSpeciesRichness_4);
var lyr_PredictedSpeciesRichness_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PredictedSpeciesRichness_4, 
                style: style_PredictedSpeciesRichness_4,
                popuplayertitle: 'Predicted Species Richness',
                interactive: true,
    title: 'Predicted Species Richness<br />\
    <img src="styles/legend/PredictedSpeciesRichness_4_0.png" /> Low<br />\
    <img src="styles/legend/PredictedSpeciesRichness_4_1.png" /> <br />\
    <img src="styles/legend/PredictedSpeciesRichness_4_2.png" /> High<br />' });
var format_PredictedAbundance_5 = new ol.format.GeoJSON();
var features_PredictedAbundance_5 = format_PredictedAbundance_5.readFeatures(json_PredictedAbundance_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PredictedAbundance_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PredictedAbundance_5.addFeatures(features_PredictedAbundance_5);
var lyr_PredictedAbundance_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PredictedAbundance_5, 
                style: style_PredictedAbundance_5,
                popuplayertitle: 'Predicted Abundance',
                interactive: true,
    title: 'Predicted Abundance<br />\
    <img src="styles/legend/PredictedAbundance_5_0.png" /> Low<br />\
    <img src="styles/legend/PredictedAbundance_5_1.png" /> <br />\
    <img src="styles/legend/PredictedAbundance_5_2.png" /> High<br />' });
var format_PredictedSimpsonsRecripricol_6 = new ol.format.GeoJSON();
var features_PredictedSimpsonsRecripricol_6 = format_PredictedSimpsonsRecripricol_6.readFeatures(json_PredictedSimpsonsRecripricol_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PredictedSimpsonsRecripricol_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PredictedSimpsonsRecripricol_6.addFeatures(features_PredictedSimpsonsRecripricol_6);
var lyr_PredictedSimpsonsRecripricol_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PredictedSimpsonsRecripricol_6, 
                style: style_PredictedSimpsonsRecripricol_6,
                popuplayertitle: 'Predicted Simpsons Recripricol',
                interactive: true,
    title: 'Predicted Simpsons Recripricol<br />\
    <img src="styles/legend/PredictedSimpsonsRecripricol_6_0.png" /> Low<br />\
    <img src="styles/legend/PredictedSimpsonsRecripricol_6_1.png" /> <br />\
    <img src="styles/legend/PredictedSimpsonsRecripricol_6_2.png" /> High<br />' });
var format_SurveyedSitesPhDReal_7 = new ol.format.GeoJSON();
var features_SurveyedSitesPhDReal_7 = format_SurveyedSitesPhDReal_7.readFeatures(json_SurveyedSitesPhDReal_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurveyedSitesPhDReal_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurveyedSitesPhDReal_7.addFeatures(features_SurveyedSitesPhDReal_7);
var lyr_SurveyedSitesPhDReal_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SurveyedSitesPhDReal_7, 
                style: style_SurveyedSitesPhDReal_7,
                popuplayertitle: 'Surveyed Sites PhD (Real)',
                interactive: true,
                title: '<img src="styles/legend/SurveyedSitesPhDReal_7.png" /> Surveyed Sites PhD (Real)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_SoTandNuLUKCEHHabs_2.setVisible(true);lyr_ModelledSiteValues_3.setVisible(true);lyr_PredictedSpeciesRichness_4.setVisible(true);lyr_PredictedAbundance_5.setVisible(true);lyr_PredictedSimpsonsRecripricol_6.setVisible(true);lyr_SurveyedSitesPhDReal_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_SoTandNuLUKCEHHabs_2,lyr_ModelledSiteValues_3,lyr_PredictedSpeciesRichness_4,lyr_PredictedAbundance_5,lyr_PredictedSimpsonsRecripricol_6,lyr_SurveyedSitesPhDReal_7];
lyr_SoTandNuLUKCEHHabs_2.set('fieldAliases', {'fid': 'fid', '_agg': '_agg', });
lyr_ModelledSiteValues_3.set('fieldAliases', {'Site ID': 'Site ID', 'Site Name': 'Site Name', 'Site Area': 'Site Area', 'Connected %': 'Connected %', 'Shape Index': 'Shape Index', 'Tree %': 'Tree %', 'Water %': 'Water %', 'Sealed %': 'Sealed %', 'Grass %': 'Grass %', 'Arable %': 'Arable %', });
lyr_PredictedSpeciesRichness_4.set('fieldAliases', {'Predicted Richness': 'Predicted Richness', });
lyr_PredictedAbundance_5.set('fieldAliases', {'Predicted Abundance': 'Predicted Abundance', });
lyr_PredictedSimpsonsRecripricol_6.set('fieldAliases', {'Predicted 1/D': 'Predicted 1/D', });
lyr_SurveyedSitesPhDReal_7.set('fieldAliases', {'qc_id': 'qc_id', 'Site ID': 'Site ID', 'Site Name': 'Site Name', 'Management': 'Management', 'A. sylvaticus': 'A. sylvaticus', 'M. musculus': 'M. musculus', 'M. glareolus': 'M. glareolus', 'M. agrestis': 'M. agrestis', 'S. araneus': 'S. araneus', 'N. fodiens': 'N. fodiens', 'Abund (Real)': 'Abund (Real)', 'S Recip (Real)': 'S Recip (Real)', 'Richness (Real)': 'Richness (Real)', });
lyr_SoTandNuLUKCEHHabs_2.set('fieldImages', {'fid': 'Hidden', '_agg': 'Hidden', });
lyr_ModelledSiteValues_3.set('fieldImages', {'Site ID': 'TextEdit', 'Site Name': 'TextEdit', 'Site Area': 'TextEdit', 'Connected %': 'TextEdit', 'Shape Index': 'TextEdit', 'Tree %': 'TextEdit', 'Water %': 'TextEdit', 'Sealed %': 'TextEdit', 'Grass %': 'TextEdit', 'Arable %': 'TextEdit', });
lyr_PredictedSpeciesRichness_4.set('fieldImages', {'Predicted Richness': 'TextEdit', });
lyr_PredictedAbundance_5.set('fieldImages', {'Predicted Abundance': 'TextEdit', });
lyr_PredictedSimpsonsRecripricol_6.set('fieldImages', {'Predicted 1/D': 'TextEdit', });
lyr_SurveyedSitesPhDReal_7.set('fieldImages', {'qc_id': '', 'Site ID': '', 'Site Name': '', 'Management': '', 'A. sylvaticus': '', 'M. musculus': '', 'M. glareolus': '', 'M. agrestis': '', 'S. araneus': '', 'N. fodiens': '', 'Abund (Real)': '', 'S Recip (Real)': '', 'Richness (Real)': '', });
lyr_SoTandNuLUKCEHHabs_2.set('fieldLabels', {});
lyr_ModelledSiteValues_3.set('fieldLabels', {'Site ID': 'inline label - visible with data', 'Site Name': 'inline label - visible with data', 'Site Area': 'inline label - visible with data', 'Connected %': 'inline label - visible with data', 'Shape Index': 'inline label - visible with data', 'Tree %': 'inline label - visible with data', 'Water %': 'inline label - visible with data', 'Sealed %': 'inline label - visible with data', 'Grass %': 'inline label - visible with data', 'Arable %': 'inline label - visible with data', });
lyr_PredictedSpeciesRichness_4.set('fieldLabels', {'Predicted Richness': 'header label - visible with data', });
lyr_PredictedAbundance_5.set('fieldLabels', {'Predicted Abundance': 'header label - visible with data', });
lyr_PredictedSimpsonsRecripricol_6.set('fieldLabels', {'Predicted 1/D': 'header label - visible with data', });
lyr_SurveyedSitesPhDReal_7.set('fieldLabels', {'qc_id': 'hidden field', 'Site ID': 'inline label - visible with data', 'Site Name': 'inline label - visible with data', 'Management': 'inline label - visible with data', 'A. sylvaticus': 'inline label - visible with data', 'M. musculus': 'inline label - visible with data', 'M. glareolus': 'inline label - visible with data', 'M. agrestis': 'inline label - visible with data', 'S. araneus': 'inline label - visible with data', 'N. fodiens': 'inline label - visible with data', 'Abund (Real)': 'inline label - visible with data', 'S Recip (Real)': 'inline label - visible with data', 'Richness (Real)': 'inline label - visible with data', });
lyr_SurveyedSitesPhDReal_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});