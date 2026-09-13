// Documentary-only History Channel catalog.
// Every playable entry is a full historical documentary from an official PBS source.
(function () {
  "use strict";

  const rows = [
    ["The Mission That Redefined Our View of Earth",3600,"APpb4fX8RcY","Space History","PBS American Experience"],
    ["The Tragic Romance of Bonnie & Clyde",3600,"fHCWbsRWvPc","American History","PBS American Experience"],
    ["The American Vice President",3600,"I7uXCTZOYMU","Government History","PBS American Experience"],
    ["The Untold Story of the Space Race",3600,"uWmd-6vsdus","Space History","PBS American Experience"],
    ["Why the U.S. Hid the Truth About the Atomic Bomb",3700,"Pp8mh8iZTe4","Military & Science History","PBS NOVA"],
    ["Clinton — Episode 1",6600,"yQci_Z3DIrw","Presidential History","PBS American Experience"],
    ["Fly With Me",6900,"AN0BMDkeQrQ","Aviation & Social History","PBS American Experience"],
    ["The Poison Squad",6600,"LXAQ_-Em89g","Public Health History","PBS American Experience"],
    ["The Race Underground",3300,"BnNw-og3wjM","Cities & Innovation History","PBS American Experience"]
  ];

  const forbidden = /pawn|reality|competition|auction|treasure hunt|celebrity|game show/i;
  if (rows.some(row => forbidden.test(row.join(" ")))) {
    throw new Error("History Channel rejected non-documentary programming.");
  }

  window.HERMIT_CATALOG = rows.map(function (row, index) {
    return {
      id:"HISTORY-DOC-" + String(index + 1).padStart(3,"0"),
      title:row[0],
      year:null,
      collection:row[3] + " · Full Documentary",
      runtimeSeconds:row[1],
      videoId:row[2],
      source:row[4],
      networkChannel:"HISTORY",
      contentClass:"History Documentary",
      rating:"Documentary",
      cleared:true,
      posterUrl:""
    };
  });

  window.HISTORY_VAULT = [
    "Ancient Worlds","American History","World History","Wars & Conflict",
    "Presidents & Government","Science & Invention","Cities & Industry",
    "Archaeology","Biographies","Space History","Public Health","Social History"
  ];

  window.INFINITY_CHANNEL = {
    id:"HISTORY",
    sourcePolicy:"Full historical documentaries only. Reality television, pawn-shop shows, competitions and entertainment programming are rejected.",
    schedulePolicy:"Nine documentary slots fill each viewer-local day. The order changes at midnight and stays synchronized for everyone in the same local day."
  };

  window.HERMIT_COMMERCIALS = [
    {id:"HISTORY-BREAK-1",title:"History Channel intermission",durationSeconds:60,videoId:"",cleared:true},
    {id:"HISTORY-BREAK-2",title:"Next in the archive",durationSeconds:60,videoId:"",cleared:true},
    {id:"HISTORY-BREAK-3",title:"Documentary continues shortly",durationSeconds:60,videoId:"",cleared:true}
  ];
})();