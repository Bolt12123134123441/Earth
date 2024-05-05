let osm = new og.layer.XYZ("OpenStreetMap", {
    isBaseLayer: true,
    url: "//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    visibility: true,
    attribution: "Data @ OpenStreetMap contributors, ODbL"
});
  

  
let globus = new og.Globe({
    target: "earth",
    name: "Earth",
    layers: [osm]
});
