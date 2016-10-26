//Cities from: https://github.com/Koenvh1/ETS2-City-Coordinate-Retriever
var cities = [
    {
        "gameName": "aalborg",
        "realName": "Aalborg",
        "country": "denmark",
        "x": "855.258",
        "y": "46.6875",
        "z": "-35995.1"
    },
    {
        "gameName": "aberdeen",
        "realName": "Aberdeen",
        "country": "uk",
        "x": "-38846.7",
        "y": "144",
        "z": "-55270.3"
    },
    {
        "gameName": "amsterdam",
        "realName": "Amsterdam",
        "country": "netherlands",
        "x": "-18562",
        "y": "105.766",
        "z": "-11736.2"
    },
    {
        "gameName": "bergen",
        "realName": "Bergen",
        "country": "norway",
        "x": "-10371.6",
        "y": "52.6406",
        "z": "-55777.6"
    },
    {
        "gameName": "berlin",
        "realName": "Berlin",
        "country": "germany",
        "x": "10183.1",
        "y": "101.914",
        "z": "-10001.2"
    },
    {
        "gameName": "bern",
        "realName": "Bern",
        "country": "switzerland",
        "x": "-12730.8",
        "y": "101.68",
        "z": "20130.1"
    },
    {
        "gameName": "bialystok",
        "realName": "Białystok",
        "country": "poland",
        "x": "44098.4",
        "y": "92.1094",
        "z": "-15083.4"
    },
    {
        "gameName": "birmingham",
        "realName": "Birmingham",
        "country": "uk",
        "x": "-45951.1",
        "y": "109.57",
        "z": "-20423"
    },
    {
        "gameName": "bratislava",
        "realName": "Bratislava",
        "country": "slovakia",
        "x": "24823.3",
        "y": "125.129",
        "z": "14831"
    },
    {
        "gameName": "bremen",
        "realName": "Bremen",
        "country": "germany",
        "x": "-4545.41",
        "y": "54.4922",
        "z": "-14326.1"
    },
    {
        "gameName": "brno",
        "realName": "Brno",
        "country": "czech",
        "x": "22273.8",
        "y": "64.8086",
        "z": "8964.95"
    },
    {
        "gameName": "brussel",
        "realName": "Brussel",
        "country": "belgium",
        "x": "-21576",
        "y": "99.3594",
        "z": "-3235.03"
    },
    {
        "gameName": "budapest",
        "realName": "Budapest",
        "country": "hungary",
        "x": "32367.8",
        "y": "123.836",
        "z": "17882.7"
    },
    {
        "gameName": "bystrica",
        "realName": "Banská Bystrica",
        "country": "slovakia",
        "x": "32657.6",
        "y": "100",
        "z": "10680.5"
    },
    {
        "gameName": "calais",
        "realName": "Calais",
        "country": "france",
        "x": "-30363",
        "y": "92.2344",
        "z": "-4985.64"
    },
    {
        "gameName": "cambridge",
        "realName": "Cambridge",
        "country": "uk",
        "x": "-36822.7",
        "y": "171.199",
        "z": "-16119.4"
    },
    {
        "gameName": "cardiff",
        "realName": "Cardiff",
        "country": "uk",
        "x": "-54005.3",
        "y": "171.398",
        "z": "-14698.4"
    },
    {
        "gameName": "carlisle",
        "realName": "Carlisle",
        "country": "uk",
        "x": "-45889.2",
        "y": "153",
        "z": "-39573.5"
    },
    {
        "gameName": "debrecen",
        "realName": "Debrecen",
        "country": "hungary",
        "x": "41641.6",
        "y": "123.836",
        "z": "17483.7"
    },
    {
        "gameName": "dijon",
        "realName": "Dijon",
        "country": "france",
        "x": "-22470",
        "y": "97.3984",
        "z": "16655.5"
    },
    {
        "gameName": "dortmund",
        "realName": "Dortmund",
        "country": "germany",
        "x": "-8266.59",
        "y": "110",
        "z": "-4718.39"
    },
    {
        "gameName": "dover",
        "realName": "Dover",
        "country": "uk",
        "x": "-33321.9",
        "y": "99.3984",
        "z": "-7884.36"
    },
    {
        "gameName": "dresden",
        "realName": "Dresden",
        "country": "germany",
        "x": "12411.8",
        "y": "101.914",
        "z": "-1606.27"
    },
    {
        "gameName": "duisburg",
        "realName": "Duisburg",
        "country": "germany",
        "x": "-13113.6",
        "y": "50",
        "z": "-6370.93"
    },
    {
        "gameName": "dusseldorf",
        "realName": "Düsseldorf",
        "country": "germany",
        "x": "-13377.2",
        "y": "97.9297",
        "z": "-4399.6"
    },
    {
        "gameName": "edinburgh",
        "realName": "Edinburgh",
        "country": "uk",
        "x": "-44900.7",
        "y": "139",
        "z": "-47219.7"
    },
    {
        "gameName": "erfurt",
        "realName": "Erfurt",
        "country": "germany",
        "x": "2436.19",
        "y": "101.914",
        "z": "-1733.77"
    },
    {
        "gameName": "esbjerg",
        "realName": "Esbjerg",
        "country": "denmark",
        "x": "-4699.43",
        "y": "69.6875",
        "z": "-27555.9"
    },
    {
        "gameName": "felixstowe",
        "realName": "Felixstowe",
        "country": "uk",
        "x": "-31664.6",
        "y": "101.398",
        "z": "-13837.2"
    },
    {
        "gameName": "frankfurt",
        "realName": "Frankfurt am Main",
        "country": "germany",
        "x": "-6304.08",
        "y": "110",
        "z": "2732.91"
    },
    {
        "gameName": "frederikshv",
        "realName": "Frederikshavn",
        "country": "denmark",
        "x": "2711.7",
        "y": "46.6875",
        "z": "-38141.5"
    },
    {
        "gameName": "gdansk",
        "realName": "Gdańsk",
        "country": "poland",
        "x": "28343.1",
        "y": "91.2305",
        "z": "-20619.5"
    },
    {
        "gameName": "gedser",
        "realName": "Gedser",
        "country": "denmark",
        "x": "6271.11",
        "y": "52.3789",
        "z": "-22000.3"
    },
    {
        "gameName": "geneve",
        "realName": "Genève",
        "country": "switzerland",
        "x": "-18099.1",
        "y": "101.68",
        "z": "23717"
    },
    {
        "gameName": "glasgow",
        "realName": "Glasgow",
        "country": "uk",
        "x": "-50384.7",
        "y": "139",
        "z": "-48471.6"
    },
    {
        "gameName": "goteborg",
        "realName": "Göteborg",
        "country": "sweden",
        "x": "7235.89",
        "y": "73.875",
        "z": "-40227.5"
    },
    {
        "gameName": "graz",
        "realName": "Graz",
        "country": "austria",
        "x": "18216.5",
        "y": "83.0938",
        "z": "20552.7"
    },
    {
        "gameName": "grimsby",
        "realName": "Grimsby",
        "country": "uk",
        "x": "-36117.9",
        "y": "124.66",
        "z": "-26575.2"
    },
    {
        "gameName": "groningen",
        "realName": "Groningen",
        "country": "netherlands",
        "x": "-12437.6",
        "y": "68.8711",
        "z": "-15468.7"
    },
    {
        "gameName": "hamburg",
        "realName": "Hamburg",
        "country": "germany",
        "x": "-1666.25",
        "y": "45.7227",
        "z": "-16912.1"
    },
    {
        "gameName": "hannover",
        "realName": "Hannover",
        "country": "germany",
        "x": "-1928.93",
        "y": "59.168",
        "z": "-8916.4"
    },
    {
        "gameName": "helsingborg",
        "realName": "Helsingborg",
        "country": "sweden",
        "x": "9405.2",
        "y": "66.1016",
        "z": "-29882.4"
    },
    {
        "gameName": "hirtshals",
        "realName": "Hirtshals",
        "country": "denmark",
        "x": "1425.47",
        "y": "54.4688",
        "z": "-38873.3"
    },
    {
        "gameName": "innsbruck",
        "realName": "Innsbruck",
        "country": "austria",
        "x": "2250.09",
        "y": "67.0859",
        "z": "19214.1"
    },
    {
        "gameName": "jonkoping",
        "realName": "Jönköping",
        "country": "sweden",
        "x": "14177.3",
        "y": "70.543",
        "z": "-39575.6"
    },
    {
        "gameName": "kalmar",
        "realName": "Kalmar",
        "country": "sweden",
        "x": "20559.5",
        "y": "70.3945",
        "z": "-33634.5"
    },
    {
        "gameName": "karlskrona",
        "realName": "Karlskrona",
        "country": "sweden",
        "x": "17145.6",
        "y": "46.6875",
        "z": "-30862.4"
    },
    {
        "gameName": "kassel",
        "realName": "Kassel",
        "country": "germany",
        "x": "-3031.32",
        "y": "85.293",
        "z": "-3898.7"
    },
    {
        "gameName": "katowice",
        "realName": "Katowice",
        "country": "poland",
        "x": "30728.8",
        "y": "144.246",
        "z": "2458.83"
    },
    {
        "gameName": "kiel",
        "realName": "Kiel",
        "country": "germany",
        "x": "188.074",
        "y": "55.832",
        "z": "-20826.7"
    },
    {
        "gameName": "klagenfurt",
        "realName": "Klagenfurt am Wörthersee",
        "country": "austria",
        "x": "13841.3",
        "y": "52.7617",
        "z": "23052.6"
    },
    {
        "gameName": "kobenhavn",
        "realName": "København",
        "country": "denmark",
        "x": "8100.74",
        "y": "58.7266",
        "z": "-28097.8"
    },
    {
        "gameName": "koln",
        "realName": "Köln",
        "country": "germany",
        "x": "-13150.8",
        "y": "97.9297",
        "z": "-2732.75"
    },
    {
        "gameName": "kosice",
        "realName": "Košice",
        "country": "slovakia",
        "x": "39843.9",
        "y": "90",
        "z": "10494.4"
    },
    {
        "gameName": "krakow",
        "realName": "Kraków",
        "country": "poland",
        "x": "34470.3",
        "y": "144.246",
        "z": "3249.68"
    },
    {
        "gameName": "kristiansand",
        "realName": "Kristiansand",
        "country": "norway",
        "x": "-4638.28",
        "y": "58",
        "z": "-42891.5"
    },
    {
        "gameName": "leipzig",
        "realName": "Leipzig",
        "country": "germany",
        "x": "7042.06",
        "y": "101.914",
        "z": "-3160.18"
    },
    {
        "gameName": "liege",
        "realName": "Liège",
        "country": "belgium",
        "x": "-17181.5",
        "y": "108.012",
        "z": "-1231.25"
    },
    {
        "gameName": "lille",
        "realName": "Lille",
        "country": "france",
        "x": "-26495.9",
        "y": "92.6211",
        "z": "-2483.4"
    },
    {
        "gameName": "linkoping",
        "realName": "Linköping",
        "country": "sweden",
        "x": "18411.7",
        "y": "68.9961",
        "z": "-43092.9"
    },
    {
        "gameName": "linz",
        "realName": "Linz",
        "country": "austria",
        "x": "13665.7",
        "y": "115.418",
        "z": "13754.6"
    },
    {
        "gameName": "liverpool",
        "realName": "Liverpool",
        "country": "uk",
        "x": "-48871.7",
        "y": "146.066",
        "z": "-29091.8"
    },
    {
        "gameName": "lodz",
        "realName": "Łódź",
        "country": "poland",
        "x": "32014.5",
        "y": "60",
        "z": "-6143.92"
    },
    {
        "gameName": "london",
        "realName": "London",
        "country": "uk",
        "x": "-39546.9",
        "y": "171.398",
        "z": "-11564.2"
    },
    {
        "gameName": "lublin",
        "realName": "Lublin",
        "country": "poland",
        "x": "43244.2",
        "y": "125.781",
        "z": "-4104.96"
    },
    {
        "gameName": "luxembourg",
        "realName": "Luxembourg",
        "country": "luxembourg",
        "x": "-16134.2",
        "y": "152.621",
        "z": "4382.97"
    },
    {
        "gameName": "lyon",
        "realName": "Lyon",
        "country": "france",
        "x": "-23869.8",
        "y": "139.359",
        "z": "25892.3"
    },
    {
        "gameName": "magdeburg",
        "realName": "Magdeburg",
        "country": "germany",
        "x": "4601.58",
        "y": "78.9102",
        "z": "-7896.8"
    },
    {
        "gameName": "malmo",
        "realName": "Malmö",
        "country": "sweden",
        "x": "10744.9",
        "y": "66.3398",
        "z": "-27481.2"
    },
    {
        "gameName": "manchester",
        "realName": "Manchester",
        "country": "uk",
        "x": "-45548.7",
        "y": "108.711",
        "z": "-27815"
    },
    {
        "gameName": "mannheim",
        "realName": "Mannheim",
        "country": "germany",
        "x": "-7722.87",
        "y": "88",
        "z": "6165.95"
    },
    {
        "gameName": "metz",
        "realName": "Metz",
        "country": "france",
        "x": "-16294.5",
        "y": "104.516",
        "z": "7463.71"
    },
    {
        "gameName": "milano",
        "realName": "Milano",
        "country": "italy",
        "x": "-6616.31",
        "y": "100.25",
        "z": "28982.8"
    },
    {
        "gameName": "munchen",
        "realName": "München",
        "country": "germany",
        "x": "3234.12",
        "y": "89.7188",
        "z": "14470"
    },
    {
        "gameName": "newcastle",
        "realName": "Newcastle-upon-Tyne",
        "country": "uk",
        "x": "-39778",
        "y": "139",
        "z": "-38787.7"
    },
    {
        "gameName": "nurnberg",
        "realName": "Nürnberg",
        "country": "germany",
        "x": "2665.54",
        "y": "106.301",
        "z": "7237.8"
    },
    {
        "gameName": "nynashamn",
        "realName": "Nynäshamn",
        "country": "sweden",
        "x": "25032",
        "y": "62.6484",
        "z": "-46079.8"
    },
    {
        "gameName": "odense",
        "realName": "Odense",
        "country": "denmark",
        "x": "1617.69",
        "y": "69.9023",
        "z": "-26700.4"
    },
    {
        "gameName": "olsztyn",
        "realName": "Olsztyn",
        "country": "poland",
        "x": "34758.6",
        "y": "92.1094",
        "z": "-17885.9"
    },
    {
        "gameName": "orebro",
        "realName": "Örebro",
        "country": "sweden",
        "x": "17087.8",
        "y": "62",
        "z": "-48374.7"
    },
    {
        "gameName": "oslo",
        "realName": "Oslo",
        "country": "norway",
        "x": "4390.91",
        "y": "52.5117",
        "z": "-53410.5"
    },
    {
        "gameName": "osnabruck",
        "realName": "Osnabrück",
        "country": "germany",
        "x": "-7702.9",
        "y": "101.094",
        "z": "-9613.47"
    },
    {
        "gameName": "ostrava",
        "realName": "Ostrava",
        "country": "czech",
        "x": "28231.9",
        "y": "125.836",
        "z": "5136.1"
    },
    {
        "gameName": "paris",
        "realName": "Paris",
        "country": "france",
        "x": "-30494.9",
        "y": "92.6211",
        "z": "6998.41"
    },
    {
        "gameName": "pecs",
        "realName": "Pécs",
        "country": "hungary",
        "x": "29039.9",
        "y": "74.6836",
        "z": "26311.6"
    },
    {
        "gameName": "plymouth",
        "realName": "Plymouth",
        "country": "uk",
        "x": "-60041.4",
        "y": "101.398",
        "z": "-7882.32"
    },
    {
        "gameName": "poznan",
        "realName": "Poznań",
        "country": "poland",
        "x": "22863.4",
        "y": "46.5508",
        "z": "-9112.2"
    },
    {
        "gameName": "prague",
        "realName": "Praha",
        "country": "czech",
        "x": "14299.7",
        "y": "142.715",
        "z": "3978.97"
    },
    {
        "gameName": "reims",
        "realName": "Reims",
        "country": "france",
        "x": "-24021.9",
        "y": "96.3086",
        "z": "5799.34"
    },
    {
        "gameName": "rostock",
        "realName": "Rostock",
        "country": "germany",
        "x": "6490.95",
        "y": "58.4961",
        "z": "-18588.9"
    },
    {
        "gameName": "rotterdam",
        "realName": "Rotterdam",
        "country": "netherlands",
        "x": "-20156",
        "y": "104.746",
        "z": "-9135.8"
    },
    {
        "gameName": "salzburg",
        "realName": "Salzburg",
        "country": "austria",
        "x": "9075.84",
        "y": "110.809",
        "z": "16564.5"
    },
    {
        "gameName": "sheffield",
        "realName": "Sheffield",
        "country": "uk",
        "x": "-42688.8",
        "y": "103.512",
        "z": "-26687.6"
    },
    {
        "gameName": "sodertalje",
        "realName": "Södertälje",
        "country": "sweden",
        "x": "23525.2",
        "y": "50.9922",
        "z": "-46319.9"
    },
    {
        "gameName": "southampton",
        "realName": "Southampton",
        "country": "uk",
        "x": "-46338.7",
        "y": "111.398",
        "z": "-7523.25"
    },
    {
        "gameName": "stavanger",
        "realName": "Stavanger",
        "country": "norway",
        "x": "-10553.7",
        "y": "62.6094",
        "z": "-48126.8"
    },
    {
        "gameName": "stockholm",
        "realName": "Stockholm",
        "country": "sweden",
        "x": "24743.6",
        "y": "68.7656",
        "z": "-47746.1"
    },
    {
        "gameName": "strasbourg",
        "realName": "Strasbourg",
        "country": "france",
        "x": "-10786.9",
        "y": "100",
        "z": "11198.7"
    },
    {
        "gameName": "stuttgart",
        "realName": "Stuttgart",
        "country": "germany",
        "x": "-4957.84",
        "y": "101.973",
        "z": "10047"
    },
    {
        "gameName": "swansea",
        "realName": "Swansea",
        "country": "uk",
        "x": "-56896",
        "y": "71.3984",
        "z": "-16881.9"
    },
    {
        "gameName": "szczecin",
        "realName": "Szczecin",
        "country": "poland",
        "x": "15052.7",
        "y": "96.5508",
        "z": "-15049.8"
    },
    {
        "gameName": "szeged",
        "realName": "Szeged",
        "country": "hungary",
        "x": "36880.7",
        "y": "74.0469",
        "z": "24565.7"
    },
    {
        "gameName": "torino",
        "realName": "Torino",
        "country": "italy",
        "x": "-12697.3",
        "y": "89.9023",
        "z": "30932"
    },
    {
        "gameName": "trelleborg",
        "realName": "Trelleborg",
        "country": "sweden",
        "x": "10808.3",
        "y": "55.3242",
        "z": "-25887"
    },
    {
        "gameName": "uppsala",
        "realName": "Uppsala",
        "country": "sweden",
        "x": "24021.5",
        "y": "77.4219",
        "z": "-51634.5"
    },
    {
        "gameName": "vasteraas",
        "realName": "Västerås",
        "country": "sweden",
        "x": "20937.7",
        "y": "62.0859",
        "z": "-50468.3"
    },
    {
        "gameName": "vaxjo",
        "realName": "Växjö",
        "country": "sweden",
        "x": "16044.4",
        "y": "82.3125",
        "z": "-34835.6"
    },
    {
        "gameName": "venezia",
        "realName": "Venezia",
        "country": "italy",
        "x": "5089.88",
        "y": "77.8789",
        "z": "30078.9"
    },
    {
        "gameName": "verona",
        "realName": "Verona",
        "country": "italy",
        "x": "39.1094",
        "y": "78.4023",
        "z": "29453.3"
    },
    {
        "gameName": "warszawa",
        "realName": "Warszawa",
        "country": "poland",
        "x": "37444.9",
        "y": "92.9883",
        "z": "-9435.84"
    },
    {
        "gameName": "wien",
        "realName": "Wien",
        "country": "austria",
        "x": "21298.3",
        "y": "114.809",
        "z": "14215.5"
    },
    {
        "gameName": "wroclaw",
        "realName": "Wrocław",
        "country": "poland",
        "x": "23502.9",
        "y": "120.508",
        "z": "-1950.98"
    },
    {
        "gameName": "zurich",
        "realName": "Zürich",
        "country": "switzerland",
        "x": "-8473.81",
        "y": "101.953",
        "z": "17968.5"
    }
];