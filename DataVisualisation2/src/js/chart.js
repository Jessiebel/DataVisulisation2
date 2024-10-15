var vg_1 = "./json/ArrivalsMap.vg.json";
var vg_2 = "./json/ArrivalsState.vg.json";
var vg_3 = "./json/ArrivalVisas.vg.json";

vegaEmbed("#chart", vg_1).catch(console.error);
vegaEmbed("#chart2", vg_2).catch(console.error);
vegaEmbed("#chart3", vg_3).catch(console.error);
