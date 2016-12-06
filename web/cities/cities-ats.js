var country_properties = {
    "arizona": {
        name: "Arizona",
        english_name: "Arizona",
        code: "us-az",
        relative_radius: 2.5
    },
    "california": {
        name: "California",
        english_name: "California",
        code: "us-ca",
        relative_radius: 2
    },
    "nevada": {
        name: "Nevada",
        english_name: "Nevada",
        code: "us-nv",
        relative_radius: 3
    },
};

var city_properties = {

};

//Cities from: https://github.com/Koenvh1/ETS2-City-Coordinate-Retriever
var cities = [
    {
        "gameName": "bakersfield",
        "realName": "Bakersfield",
        "country": "california",
        "x": "-104572",
        "y": "61.457",
        "z": "6987.57"
    },
    {
        "gameName": "barstow",
        "realName": "Barstow",
        "country": "california",
        "x": "-96833.3",
        "y": "90.5898",
        "z": "12105.3"
    },
    {
        "gameName": "camp_verde",
        "realName": "Camp Verde",
        "country": "arizona",
        "x": "-73776.6",
        "y": "127.855",
        "z": "19211.8"
    },
    {
        "gameName": "carlsbad",
        "realName": "Carlsbad",
        "country": "california",
        "x": "-100687",
        "y": "61.4336",
        "z": "20602.3"
    },
    {
        "gameName": "carson_city",
        "realName": "Carson City",
        "country": "nevada",
        "x": "-101961",
        "y": "134.836",
        "z": "-11300.8"
    },
    {
        "gameName": "ehrenberg",
        "realName": "Ehrenberg",
        "country": "arizona",
        "x": "-85758.9",
        "y": "66.1992",
        "z": "21364.7"
    },
    {
        "gameName": "elko",
        "realName": "Elko",
        "country": "nevada",
        "x": "-83038.2",
        "y": "112.223",
        "z": "-19609.2"
    },
    {
        "gameName": "ely",
        "realName": "Ely",
        "country": "nevada",
        "x": "-81817",
        "y": "172.629",
        "z": "-10079.4"
    },
    {
        "gameName": "el_centro",
        "realName": "El Centro",
        "country": "california",
        "x": "-92073.9",
        "y": "64.6445",
        "z": "24709.8"
    },
    {
        "gameName": "eureka",
        "realName": "Eureka",
        "country": "california",
        "x": "-118391",
        "y": "90.7422",
        "z": "-27408.9"
    },
    {
        "gameName": "flagstaff",
        "realName": "Flagstaff",
        "country": "arizona",
        "x": "-71524.6",
        "y": "162.035",
        "z": "14406.3"
    },
    {
        "gameName": "fresno",
        "realName": "Fresno",
        "country": "california",
        "x": "-105164",
        "y": "75.7031",
        "z": "-144.297"
    },
    {
        "gameName": "g_canyon_vlg",
        "realName": "Grand Canyon Village",
        "country": "arizona",
        "x": "-73445",
        "y": "173.035",
        "z": "10298.5"
    },
    {
        "gameName": "holbrook",
        "realName": "Holbrook",
        "country": "arizona",
        "x": "-64899.9",
        "y": "130.641",
        "z": "18031.3"
    },
    {
        "gameName": "hornbrook",
        "realName": "Hornbrook",
        "country": "california",
        "x": "-110260",
        "y": "129.477",
        "z": "-31052.7"
    },
    {
        "gameName": "huron",
        "realName": "Huron",
        "country": "california",
        "x": "-109205",
        "y": "108.332",
        "z": "1883.56"
    },
    {
        "gameName": "jackpot",
        "realName": "Jackpot",
        "country": "nevada",
        "x": "-77998.7",
        "y": "180.223",
        "z": "-24885.2"
    },
    {
        "gameName": "kayenta",
        "realName": "Kayenta",
        "country": "arizona",
        "x": "-64177",
        "y": "145.051",
        "z": "7337.55"
    },
    {
        "gameName": "kingman",
        "realName": "Kingman",
        "country": "arizona",
        "x": "-82132.6",
        "y": "175.563",
        "z": "13052.4"
    },
    {
        "gameName": "las_vegas",
        "realName": "Las Vegas",
        "country": "nevada",
        "x": "-84856.9",
        "y": "199.461",
        "z": "6994.32"
    },
    {
        "gameName": "los_angeles",
        "realName": "Los Angeles",
        "country": "california",
        "x": "-103989",
        "y": "90.7422",
        "z": "16444.4"
    },
    {
        "gameName": "nogales",
        "realName": "Nogales",
        "country": "arizona",
        "x": "-72018.8",
        "y": "115",
        "z": "36925.1"
    },
    {
        "gameName": "oakdale",
        "realName": "Oakdale",
        "country": "california",
        "x": "-109113",
        "y": "74.7422",
        "z": "-7004.69"
    },
    {
        "gameName": "oakland",
        "realName": "Oakland",
        "country": "california",
        "x": "-113452",
        "y": "90.7422",
        "z": "-8458.5"
    },
    {
        "gameName": "oxnard",
        "realName": "Oxnard",
        "country": "california",
        "x": "-107309",
        "y": "52",
        "z": "13456.6"
    },
    {
        "gameName": "page",
        "realName": "Page",
        "country": "arizona",
        "x": "-69181.3",
        "y": "124.344",
        "z": "5521.9"
    },
    {
        "gameName": "phoenix",
        "realName": "Phoenix",
        "country": "arizona",
        "x": "-76543.6",
        "y": "66.9961",
        "z": "24448.1"
    },
    {
        "gameName": "pioche",
        "realName": "Pioche",
        "country": "nevada",
        "x": "-80956.8",
        "y": "177.867",
        "z": "-4638.39"
    },
    {
        "gameName": "primm",
        "realName": "Primm",
        "country": "nevada",
        "x": "-86787.6",
        "y": "84.3945",
        "z": "9272.02"
    },
    {
        "gameName": "redding",
        "realName": "Redding",
        "country": "california",
        "x": "-110650",
        "y": "93.7422",
        "z": "-24844.6"
    },
    {
        "gameName": "reno",
        "realName": "Reno",
        "country": "nevada",
        "x": "-102745",
        "y": "105.766",
        "z": "-16298"
    },
    {
        "gameName": "sacramento",
        "realName": "Sacramento",
        "country": "california",
        "x": "-111350",
        "y": "90.7422",
        "z": "-12283.6"
    },
    {
        "gameName": "santa_cruz",
        "realName": "Santa Cruz",
        "country": "california",
        "x": "-114925",
        "y": "90.7422",
        "z": "-4429.37"
    },
    {
        "gameName": "santa_maria",
        "realName": "Santa Maria",
        "country": "california",
        "x": "-111657",
        "y": "60",
        "z": "8655.99"
    },
    {
        "gameName": "san_diego",
        "realName": "San Diego",
        "country": "california",
        "x": "-98862.2",
        "y": "90.8438",
        "z": "24029.7"
    },
    {
        "gameName": "san_francisc",
        "realName": "San Francisco",
        "country": "california",
        "x": "-114531",
        "y": "90.7422",
        "z": "-10140.2"
    },
    {
        "gameName": "san_rafael",
        "realName": "San Rafael",
        "country": "california",
        "x": "-114891",
        "y": "90.7422",
        "z": "-13667.2"
    },
    {
        "gameName": "san_simon",
        "realName": "San Simon",
        "country": "arizona",
        "x": "-62858.7",
        "y": "111.145",
        "z": "33093"
    },
    {
        "gameName": "show_low",
        "realName": "Show Low",
        "country": "arizona",
        "x": "-65590.3",
        "y": "146.48",
        "z": "21658.3"
    },
    {
        "gameName": "sierra_vista",
        "realName": "Sierra Vista",
        "country": "arizona",
        "x": "-68525.5",
        "y": "125",
        "z": "36654"
    },
    {
        "gameName": "stockton",
        "realName": "Stockton",
        "country": "california",
        "x": "-110864",
        "y": "87.7422",
        "z": "-9926.91"
    },
    {
        "gameName": "tonopah",
        "realName": "Tonopah",
        "country": "nevada",
        "x": "-93600.9",
        "y": "150.676",
        "z": "-5250.63"
    },
    {
        "gameName": "truckee",
        "realName": "Truckee",
        "country": "california",
        "x": "-106289",
        "y": "146.277",
        "z": "-15493.7"
    },
    {
        "gameName": "tucson",
        "realName": "Tucson",
        "country": "arizona",
        "x": "-71475.1",
        "y": "97",
        "z": "31556.9"
    },
    {
        "gameName": "ukiah",
        "realName": "Ukiah",
        "country": "california",
        "x": "-116865",
        "y": "95.4648",
        "z": "-19252.1"
    },
    {
        "gameName": "winnemucca",
        "realName": "Winnemucca",
        "country": "nevada",
        "x": "-91334.8",
        "y": "144.754",
        "z": "-22075.4"
    },
    {
        "gameName": "yuma",
        "realName": "Yuma",
        "country": "arizona",
        "x": "-88849.8",
        "y": "64.9961",
        "z": "26463.2"
    }
];