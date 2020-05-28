//window.open("http:" + TuneIn.payload.Station.broadcast.StreamUrl)
var stations = {
    "aland": [
        {
            name: "Ålands Radio",
            logo: "stations/images-europe/aland/Ålands Radio.png",
            url: "http://194.110.182.131:8000/stream.ogg"
        },
        {
            name: "Steel FM",
            logo: "stations/images-europe/aland/Steel FM.jpg",
            url: "http://ice6.securenetsystems.net/STEELFM?playSessionID=F8DB637D-A3F9-8829-BBF2043C7F009883"
        },
    ],
    "albania": [
        {
            name: "Radio Tirana 1",
            logo: "stations/images-europe/albania/Radio Tirana 1.jpg",
            url: "http://149.202.220.47:8888/radiotirana1"
        },
        {
            name: "Radio Tirana 2",
            logo: "stations/images-europe/albania/Radio Tirana 2.jpg",
            url: "http://149.202.220.47:8888/radiotirana2"
        },
        {
            name: "Radio Tirana 3",
            logo: "stations/images-europe/albania/Radio Tirana 3.jpg",
            url: "http://149.202.220.47:8888/radiotirana3"
        },
        {
            name: "Top Albania Radio",
            logo: "stations/images-europe/albania/Top Albania Radio.png",
            url: "http://93.190.141.15:8452/;"
        },
        {
            name: "Top Gold",
            logo: "stations/images-europe/albania/Top Gold.png",
            url: "http://live.topgold.al:9080/;"
        },
    ],
    "algier": [
        {
            name: "Chaîne 1",
            logo: "stations/images-europe/algier/Chaîne 1.jpg",
            url: "http://broadcast.infomaniak.ch/ch1-64.aac"
        },
        {
            name: "Chaîne 2",
            logo: "stations/images-europe/algier/Chaîne 2.jpg",
            url: "http://broadcast.infomaniak.ch/ch2-64.aac"
        },
        {
            name: "Chaîne 3",
            logo: "stations/images-europe/algier/Chaîne 3.jpg",
            url: "http://broadcast.infomaniak.ch/ch3-64.aac"
        },
        {
            name: "Radio Algérie Internationale",
            logo: "stations/images-europe/algier/Radio Algérie Internationale.jpg",
            url: "http://rai.ice.infomaniak.ch/rai-64.aac"
        }
    ],
    "andorra": [
        {
            name: "Andorra Difusió RNA",
            logo: "stations/images-europe/andorra/AndorraDifusió.png",
            url: "http://videos.rtva.ad:1935/live/rna/playlist.m3u8"
        },
        {
            name: "Andorra Difusió AM",
            logo: "stations/images-europe/andorra/AndorraDifusió.png",
            url: "http://videos.rtva.ad:1935/live/am/playlist.m3u8"
        },
        /*
        {
            name: "Catalunya Ràdio",
            logo: "stations/images-europe/andorra/Catalunya Ràdio.svg",
            url: "http://ccma-radioa-int-abertis-live.hls.adaptive.level3.net/int/mp4:catradio/chunklist.m3u8"
        },
        */
    ],
    "armenia": [
        {
            name: "Armenian Pulse Radio",
            logo: "stations/images-europe/armenia/Armenian Pulse Radio.jpeg",
            url: "http://radiotrucker.com/tr/play/1949/501"
        },
        {
            name: "Lav Radio",
            logo: "stations/images-europe/armenia/Lav Radio.jpg",
            url: "http://radiotrucker.com/tr/play/1949/499"
        },
        {
            name: "Radio Jan",
            logo: "stations/images-europe/armenia/Radio Jan.jpg",
            url: "http://radiotrucker.com/tr/play/1949/500"
        },
    ],
    "austria": [
        {
            name: "ORF Ö1",
            logo: "stations/images-europe/austria/ORF Ö1.png",
            url: "http://mp3stream3.apasf.apa.at/;stream.mp3"
        },
        {
            name: "ORF Ö2 (Wien)",
            logo: "stations/images-europe/austria/ORF Ö2.png",
            url: "http://mp3stream2.apasf.apa.at/;stream.mp3"
        },
        {
            name: "ORF Ö3",
            logo: "stations/images-europe/austria/ORF Ö3.png",
            url: "http://mp3stream7.apasf.apa.at/;stream.mp3"
        },
        {
            name: "ORF FM4",
            logo: "stations/images-europe/austria/ORF FM4.png",
            url: "http://mp3stream1.apasf.apa.at/;stream.mp3"
        },
        {
            name: "KroneHit",
            logo: "stations/images-europe/austria/KroneHit.png",
            url: "http://onair-ha1.krone.at/kronehit-hp.mp3"
        },
        {
            name: "Life Radio",
            logo: "stations/images-europe/austria/Life Radio.jpg",
            url: "http://stream1.liferadio.at/"
        },
        {
            name: "Radio 88.6",
            logo: "stations/images-europe/austria/Radio 88.6.png",
            url: "https://radio886.fluidstream.eu/886_live.mp3"
        },
        {
            name: "Welle 1 (Salzburg)",
            logo: "stations/images-europe/austria/Welle 1.png",
            url: "http://live.welle1.at:8128/;"
        },
    ],
    "basque": [
        {
            name: "Euskadi Irratia",
            logo: "stations/images-europe/basque/Euskadi Irratia.png",
            url: "http://mp3-eitb.stream.flumotion.com/eitb/euskadiirratia.mp3"
        },
        {
            name: "Radio Euskadi",
            logo: "stations/images-europe/basque/Radio Euskadi.png",
            url: "http://mp3-eitb.stream.flumotion.com/eitb/radioeuskadi.mp3"
        },
        {
            name: "Gaztea",
            logo: "stations/images-europe/basque/Gaztea.png",
            url: "http://mp3-eitb.stream.flumotion.com/eitb/gaztea.mp3"
        },
        {
            name: "EITB Musika",
            logo: "stations/images-europe/basque/EITB Musika.png",
            url: "http://mp3-eitb.stream.flumotion.com/eitb/eitbmusika.mp3"
        },
        {
            name: "Bizkaia Irratia FM",
            logo: "stations/images-europe/basque/Bizkaia Irratia FM.png",
            url: "http://188.93.73.98:8076/;"
        },
        {
            name: "Radio 7",
            logo: "stations/images-europe/basque/Radio 7.jpg",
            url: "http://radio7.streaming-pro.com:7501/;"
        },
    ],
    "belarus": [
        {
            name: "1 канал",
            logo: "stations/images-europe/belarus/1 канал.jpg",
            url: "http://video.tvr.by:8000/radio1"
        },
        {
            name: "Канал Культура",
            logo: "stations/images-europe/belarus/Канал Культура.jpg",
            url: "http://video.tvr.by:8000/culture"
        },
        {
            name: "Радиус-FM",
            logo: "stations/images-europe/belarus/Радиус-FM.png",
            url: "http://video.tvr.by:8000/radiusfm"
        },
        {
            name: "Радыё Беларусь",
            logo: "stations/images-europe/belarus/Радыё Беларусь.png",
            url: "http://video.tvr.by:8000/belfm"
        },
        {
            name: "Радио Сталіца",
            logo: "stations/images-europe/belarus/Радио Сталіца.jpg",
            url: "http://video.tvr.by:8000/stolica"
        },
        {
            name: "Радио BA",
            logo: "stations/images-europe/belarus/Радио BA.png",
            url: "http://93.125.106.180:8000/BA128?1531145287388.mp3"
        },
        {
            name: "Радио Минск",
            logo: "stations/images-europe/belarus/Радио Минск.jpg",
            url: "http://93.84.113.142:8000/radio"
        },
        {
            name: "Радио Мир",
            logo: "stations/images-europe/belarus/Радио Мир.jpg",
            url: "http://217.23.126.106:8002/radio2.mir"
        },
        /*
        {
            name: "Радио Unistar",
            logo: "stations/images-europe/belarus/Радио Unistar.png",
            url: "http://unistar.by:8000/unistar-128kb"
        },
        */
        {
            name: "Радио РОКС",
            logo: "stations/images-europe/belarus/Радио РОКС.png",
            url: "http://de.streams.radioplayer.by:8000/live"
        },
        {
            name: "Радио Юмор ФМ",
            logo: "stations/images-europe/belarus/Радио Юмор ФМ.png",
            url: "http://live.humorfm.by:8000/veseloeradio"
        },
        {
            name: "Новое Радио",
            logo: "stations/images-europe/belarus/Новое Радио.jpg",
            url: "http://www.live.bn.by:8000/novoeradio_128"
        },
        {
            name: "Пилот FM",
            logo: "stations/images-europe/belarus/Пилот FM.png",
            url: "https://pf.volna.top/PilotBy48"
        },
    ],
    "belgium-nl": [
        {
            name: "VRT Radio 1",
            logo: "stations/images-europe/belgium-nl/VRT Radio 1.gif",
            url: "http://icecast.vrtcdn.be/radio1-high.mp3"
        },
        {
            name: "VRT Radio 2 Antwerpen",
            logo: "stations/images-europe/belgium-nl/VRT Radio 2 Antwerpen.png",
            url: "http://icecast.vrtcdn.be/ra2ant-high.mp3"
        },
        {
            name: "VRT Klara",
            logo: "stations/images-europe/belgium-nl/VRT Klara.png",
            url: "http://icecast.vrtcdn.be/klara-high.mp3"
        },
        {
            name: "VRT Studio Brussel",
            logo: "stations/images-europe/belgium-nl/VRT Studio Brussel.png",
            url: "http://icecast.vrtcdn.be/stubru-high.mp3"
        },
        {
            name: "VRT MNM",
            logo: "stations/images-europe/belgium-nl/VRT MNM.png",
            url: "http://icecast.vrtcdn.be/mnm-high.mp3"
        },
        {
            name: "Club FM",
            logo: "stations/images-europe/belgium-nl/Club FM.png",
            url: "http://www.clubfmserver.be:8000/clubfm.mp3"
        },
        {
            name: "Nostalgie (Vlaanderen)",
            logo: "stations/images-europe/belgium-nl/Nostalgie.png",
            url: "http://nostalgiewhatafeeling.ice.infomaniak.ch/nostalgiewhatafeeling-128.mp3"
        },
        {
            name: "Family Radio",
            logo: "stations/images-europe/belgium-nl/Family Radio.png",
            url: "http://www.clubfmserver.be:8000/family.mp3"
        },
        {
            name: "Q-Music (Vlaanderen)",
            logo: "stations/images-europe/belgium-nl/Q-Music.svg",
            url: "http://icecast-qmusic.cdp.triple-it.nl/Qmusic_be_live_64.aac?rnd=3680314053584514"
        },
        {
            name: "Radio FG",
            logo: "stations/images-europe/belgium-nl/Radio FG.png",
            url: "http://radiofg.impek.com:80/fga"
        },
        {
            name: "TOPradio",
            logo: "stations/images-europe/belgium-nl/TOPradio.png",
            url: "http://lb.topradio.be/topradio.mp3"
        },
    ],
    "belgium-fr": [
        {
            name: "RTBF La Première",
            logo: "stations/images-europe/belgium-fr/RTBF La Première.png",
            url: "http://radios.rtbf.be/laprem1ere-64.aac"
        },
        {
            name: "RTBF Classic 21",
            logo: "stations/images-europe/belgium-fr/RTBF Classic 21.png",
            url: "http://radios.rtbf.be/classic21-64.aac"
        },
        {
            name: "RTBF Musiq 3",
            logo: "stations/images-europe/belgium-fr/RTBF Musiq 3.png",
            url: "https://radios.rtbf.be/musiq3-128.aac"
        },
        {
            name: "RTBF Pure FM",
            logo: "stations/images-europe/belgium-fr/RTBF Pure FM.png",
            url: "http://radios.rtbf.be/pure-64.aac"
        },
        {
            name: "RTBF Vivacité",
            logo: "stations/images-europe/belgium-fr/RTBF Vivacité.png",
            url: "http://radios.rtbf.be/vivabxl-64.aac"
        },
        {
            name: "Bel RTL",
            logo: "stations/images-europe/belgium-fr/Bel RTL.jpg",
            url: "http://audiostream.rtl.be/belrtl128"
        },
        {
            name: "Fun Radio",
            logo: "stations/images-europe/belgium-fr/Fun Radio.png",
            url: "http://funradiobe.ice.infomaniak.ch/funradiobe-high.mp3"
        },
        {
            name: "Nostalgie",
            logo: "stations/images-europe/belgium-fr/Nostalgie.png",
            url: "https://streamingp.shoutcast.com/NostalgiePremium-mp3?aw_0_1st.playerid=nobe216web&aw_0_req.gdpr=true&&listenerid=1555254776"
        },
        {
            name: "NRJ",
            logo: "stations/images-europe/belgium-fr/NRJ.svg",
            url: "https://streamingp.shoutcast.com/NRJ?gdpr=true&gdpr_consent=BOorpfjOorpfjAKAZBENCr-AAAArl7_______9______9uz_Ov_v_f__33e8__9v_l_7_-___u_-3zd4u_1vf99yfm1-7etr3tp_87ues2_Xur__79__3z3_9phP78k89r7337Ew-v-3o8LzBA&lang=nl&userref=AERiMm8YdO2fTjsxgmK4tMEXt98AWt1571491649943"
        },
        {
            name: "Radio Contact",
            logo: "stations/images-europe/belgium-fr/Radio Contact.png",
            url: "http://audiostream.rtl.be/contactfr192"
        },
        {
            name: "BRF1",
            logo: "stations/images-europe/belgium-fr/BRF1.svg",
            url: "https://streaming.brf.be/brf1-high.mp3"
        },
        {
            name: "BRF2",
            logo: "stations/images-europe/belgium-fr/BRF2.svg",
            url: "https://streaming.brf.be/brf2-high.mp3"
        },
    ],
    "bosnia": [
        {
            name: "Bobar Radio",
            logo: "stations/images-europe/bosnia/Bobar Radio.png",
            url: "http://94.130.11.28:9010/stream/1/"
        },
        {
            name: "Radiopostaja Mir Međugorje",
            logo: "stations/images-europe/bosnia/Radiopostaja Mir Međugorje.jpg",
            url: "http://85.25.135.86:23565/;"
        },
        {
            name: "Radio BIR",
            logo: "stations/images-europe/bosnia/Radio BIR.png",
            url: "http://188.40.62.20:8090/;"
        },
        {
            name: "Radio M",
            logo: "stations/images-europe/bosnia/Radio M.png",
            url: "http://206.190.135.28:8968/;"
        },
        {
            name: "Radio RSG",
            logo: "stations/images-europe/bosnia/Radio RSG.jpg",
            url: "http://195.201.112.14:9000/;stream"
        },
        {
            name: "Radio Bihac",
            logo: "stations/images-europe/bosnia/Radio Bihac.jpg",
            url: "http://188.40.62.20:8004/;"
        },
    ],
    "bulgaria": [
        {
            name: "БНР Хоризонт",
            logo: "stations/images-europe/bulgaria/БНР Хоризонт.png",
            url: "http://stream.bnr.bg:8002/horizont.mp3"
        },
        {
            name: "БНР Христо Ботев",
            logo: "stations/images-europe/bulgaria/БНР Христо Ботев.png",
            url: "http://stream.bnr.bg:8012/hristo-botev.aac"
        },
        // {
        //     name: "Alpha Radio",
        //     logo: "stations/images-europe/bulgaria/Alpha Radio.png",
        //     url: "http://alpharadio.bg:8000/stream"
        // },
        {
            name: "БГ Радио",
            logo: "stations/images-europe/bulgaria/БГ Радио.png",
            url: "http://149.13.0.81/bgradio128"
        },
        {
            name: "Bulgaria ON AIR",
            logo: "stations/images-europe/bulgaria/Bulgaria ON AIR.png",
            url: "http://lb-hls.cdn.bg/2006/fls/onair.stream/playlist.m3u8?at=84383cd0ed2c1c0ae2f55f43d4941c3b"
        },
        {
            name: "Дарик Радио",
            logo: "stations/images-europe/bulgaria/Дарик Радио.png",
            url: "http://darikradio.by.host.bg:8000/S2-128"
        },
        {
            name: "Радио 1",
            logo: "stations/images-europe/bulgaria/Радио 1.png",
            url: "http://play.global.audio/radio1.opus"
        },
        {
            name: "Радио FM+",
            logo: "stations/images-europe/bulgaria/Радио FMplus.jpg",
            url: "http://193.108.24.21:8000/fmplus?file=.mp3"
        },
        {
            name: "Radio Energy",
            logo: "stations/images-europe/bulgaria/Radio Energy.png",
            url: "http://149.13.0.80/nrj128"
        },
        {
            name: "Радио Верига Фокус",
            logo: "stations/images-europe/bulgaria/Радио Верига Фокус.png",
            url: "http://online.focus-radio.net:8100/bs"
        },
        {
            name: "Радио Fresh!",
            logo: "stations/images-europe/bulgaria/Радио Fresh!.png",
            url: "http://193.108.24.21:8000/fresh"
        },
        {
            name: "Радио Веселина",
            logo: "stations/images-europe/bulgaria/Радио Веселина.png",
            url: "https://bss.neterra.tv/rtplive/veselinaradio_live.stream/playlist.m3u8"
        },
    ],
    "catalonia": [
        {
            name: "Catalunya Ràdio",
            logo: "stations/images-europe/catalonia/Catalunya Ràdio.svg",
            url: "https://directes-radio-int.ccma.cat/int/mp4:catradio/playlist.m3u8"
        },
        {
            name: "Catalunya Informació",
            logo: "stations/images-europe/catalonia/Catalunya Informació.png",
            url: "https://directes-radio-int.ccma.cat/int/mp4:catinform/playlist.m3u8"
        },
        {
            name: "Catalunya Música",
            logo: "stations/images-europe/catalonia/Catalunya Música.png",
            url: "https://directes-radio-int.ccma.cat/int/mp4:catmusica/playlist.m3u8"
        },
        {
            name: "Flaix FM",
            logo: "stations/images-europe/catalonia/Flaix FM.png",
            url: "http://flaixfmweb.streaming-pro.com:8000/;"
        },
        {
            name: "RAC1",
            logo: "stations/images-europe/catalonia/RAC1.jpg",
            url: "http://rac1.radiocat.net/;*.nsv"
        },
        {
            name: "RAC105",
            logo: "stations/images-europe/catalonia/RAC105.png",
            url: "https://streaming.rac105.cat/"
        },
        {
            name: "RàdioEstel",
            logo: "stations/images-europe/catalonia/RàdioEstel.png",
            url: "http://srv3021.lcinternet.com:8019/live"
        },
        {
            name: "Ràdio Flaixbac",
            logo: "stations/images-europe/catalonia/Ràdio Flaixbac.png",
            url: "http://radiostream.radioflaixbac.cat:8004/;"
        },
    ],
    "croatia": [
        {
            name: "HR1 Prvi",
            logo: "stations/images-europe/croatia/HR1 Prvi.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM1.mp3"
        },
        {
            name: "HR2 Drugi",
            logo: "stations/images-europe/croatia/HR1 Prvi.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM2.mp3"
        },
        {
            name: "HR3 Treci",
            logo: "stations/images-europe/croatia/HR1 Prvi.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM3.mp3"
        },
        {
            name: "Hrvatski katolički radio",
            logo: "stations/images-europe/croatia/Hrvatski katolički radio.jpg",
            url: "http://stream.hkr.hr:8000/hkr.mp3"
        },
        {
            name: "Narodni radio",
            logo: "stations/images-europe/croatia/Narodni radio.svg",
            url: "http://live.narodni.hr:8059/;"
        },
        {
            name: "Otvoreni radio",
            logo: "stations/images-europe/croatia/Otvoreni radio.png",
            url: "http://proxima.shoutca.st:8357/;"
        },
    ],
    "cyprus": [
        {
            name: "ΡΙΚ ΠΡΩΤΟ",
            logo: "stations/images-europe/cyprus/ΡΙΚ ΠΡΩΤΟ.png",
            url: "http://r1.cloudskep.com/cybcr/cybc1/icecast.audio"
        },
        {
            name: "ΡΙΚ ΔΕΥΤΕΡΟ",
            logo: "stations/images-europe/cyprus/ΡΙΚ ΔΕΥΤΕΡΟ.png",
            url: "http://r1.cloudskep.com/cybcr/cybc2/icecast.audio"
        },
        {
            name: "ΡΙΚ ΤΡΙΤΟ",
            logo: "stations/images-europe/cyprus/ΡΙΚ ΤΡΙΤΟ.png",
            url: "http://r1.cloudskep.com/cybcr/cybc3/icecast.audio"
        },
        {
            name: "ΡΙΚ ΤΕΤΑΡΤΟ",
            logo: "stations/images-europe/cyprus/ΡΙΚ ΤΕΤΑΡΤΟ.png",
            url: "http://r1.cloudskep.com/cybcr/cybc4/icecast.audio"
        },
        {
            name: "ANT1 FM",
            logo: "stations/images-europe/cyprus/ANT1 FM.jpg",
            url: "http://r1.cloudskep.com/radio2/ant1fm/icecast.audio"
        },
        {
            name: "Astra",
            logo: "stations/images-europe/cyprus/Astra.jpg",
            url: "http://radio.dialogos.com.cy:8000/stream"
        },
        {
            name: "Bayrak Radyosu",
            logo: "stations/images-europe/cyprus/Bayrak Radyosu.png",
            url: "http://sc.brtk.net:8002/;"
        },
        {
            name: "Mix FM",
            logo: "stations/images-europe/cyprus/Mix FM.png",
            url: "http://eco.onestreaming.com:8127/;"
        },
        {
            name: "Radio Sfera",
            logo: "stations/images-europe/cyprus/Radio Sfera.png",
            url: "http://r1.phileradio.com:8193/sfera"
        },
        {
            name: "Sunshine Radio",
            logo: "stations/images-europe/cyprus/Sunshine Radio.webp",
            url: "http://5.63.151.52:7172/stream/;stream.mp3?_=1"
        },
        /*
        {
            name: "BFBS Cyprus",
            logo: "stations/images-europe/cyprus/Bayrak Radyosu.png",
            url: "http://edge-audio-01-cr.sharp-stream.com/ssvcbfbs8.aac"
        },
        */
        /*
        {
            name: "Capital Radio",
            logo: "stations/images-europe/cyprus/Capital Radio.jpg",
            url: "http://78.159.112.254:8308/listen.pls"
        },
        */
    ],
    "czech": [
        {
            name: "ČRo Radiožurnál",
            logo: "stations/images-europe/czech/ČRo Radiožurnál.svg",
            url: "http://amp.cesnet.cz:8000/cro1-256.ogg"
        },
        {
            name: "ČRo Dvojka",
            logo: "stations/images-europe/czech/ČRo Dvojka.svg",
            url: "http://amp.cesnet.cz:8000/cro2-256.ogg"
        },
        {
            name: "ČRo Vltava",
            logo: "stations/images-europe/czech/ČRo Vltava.svg",
            url: "http://amp.cesnet.cz:8000/cro3-256.ogg"
        },
        {
            name: "Country Radio",
            logo: "stations/images-europe/czech/Country Radio.png",
            url: "http://icecast4.play.cz/country128.mp3"
        },
        {
            name: "Evropa 2",
            logo: "stations/images-europe/czech/Evropa 2.png",
            url: "https://20043.live.streamtheworld.com/EVROPA2AAC.aac"
        },
        {
            name: "Fajn Radio",
            logo: "stations/images-europe/czech/Fajn Radio.png",
            url: "http://ice.abradio.cz/fajn128.mp3"
        },
        {
            name: "Frekvence 1",
            logo: "stations/images-europe/czech/Frekvence 1.png",
            url: "http://icecast4.play.cz:80/frekvence1-128.mp3"
        },
        {
            name: "Impuls Ráááádio",
            logo: "stations/images-europe/czech/Impuls Ráááádio.png",
            url: "http://icecast1.play.cz:80/impuls128.mp3"
        },
        {
            name: "Kiss",
            logo: "stations/images-europe/czech/Kiss.png",
            url: "http://icecast4.play.cz/kiss128.mp3"
        },
        {
            name: "Rádio Beat",
            logo: "stations/images-europe/czech/Rádio Beat.png",
            url: "http://icecast5.play.cz/radiobeat128.mp3"
        },
        {
            name: "Rádio Blaník",
            logo: "stations/images-europe/czech/Rádio Blaník.png",
            url: "http://ice.abradio.cz/blanikfm128.mp3"
        },
    ],
    "denmark": [
        {
            name: "DR P1",
            logo: "stations/images-europe/denmark/DR P1.png",
            url: "http://live-icy.gss.dr.dk:8000/A/A03H.mp3"
        },
        {
            name: "DR P2",
            logo: "stations/images-europe/denmark/DR P2.png",
            url: "http://live-icy.gss.dr.dk:8000/A/A04H.mp3"
        },
        {
            name: "DR P3",
            logo: "stations/images-europe/denmark/DR P3.png",
            url: "http://live-icy.gss.dr.dk:8000/A/A05H.mp3"
        },
        {
            name: "DR P4 (København)",
            logo: "stations/images-europe/denmark/DR P4.png",
            url: "http://live-icy.gss.dr.dk:8000/A/A08H.mp3"
        },
        {
            name: "DR P5",
            logo: "stations/images-europe/denmark/DR P5.png",
            url: "http://live-icy.gss.dr.dk:8000/A/A25H.mp3"
        },
        {
            name: "DR P6 Beat",
            logo: "stations/images-europe/denmark/DR P6 Beat.png",
            url: "http://live-icy.gss.dr.dk:8000/A/A29H.mp3"
        },
        {
            name: "DR P8 Jazz",
            logo: "stations/images-europe/denmark/DR P8 Jazz.png",
            url: "http://live-icy.gss.dr.dk:8000/A/A22H.mp3"
        },
        {
            name: "myROCK",
            logo: "stations/images-europe/denmark/myROCK.jpg",
            url: "http://edge-bauerdk-02-gos1.sharp-stream.com/myrock_dk_mp3"
        },
        {
            name: "Nova FM",
            logo: "stations/images-europe/denmark/Nova FM.svg",
            url: "http://stream.novafm.dk:80/nova128"
        },
        {
            name: "Pop FM",
            logo: "stations/images-europe/denmark/Pop FM.jpg",
            url: "http://edge-bauerdk-01-cr.sharp-stream.com/popfm_dk_mp3"
        },
        {
            name: "Radio 100",
            logo: "stations/images-europe/denmark/Radio 100.png",
            url: "http://onair.100fmlive.dk:80/100fm_live.mp3"
        },
        {
            name: "Radio Soft",
            logo: "stations/images-europe/denmark/Radio Soft.jpg",
            url: "http://edge-bauerdk-02-gos1.sharp-stream.com/radiosoft_dk_mp3"
        },
        {
            name: "The Voice",
            logo: "stations/images-europe/denmark/The Voice.png",
            url: "http://195.184.101.203/voice128"
        },
    ],
    "egypt": [
        {
            name: "إذاعة الأغاني",
            logo: "stations/images-europe/egypt/إذاعة الأغاني.jpg",
            url: "https://msertupoc.streaming.mediaservices.windows.net/a332673c-2105-4923-a624-722c4c0212bc/c2f194e0-26de-463c-8701-ae702888f76a.ism/manifest(format=m3u8-aapl)?.m3u8"
        },
        {
            name: "راديو مصر 88.7 FM",
            logo: "stations/images-europe/egypt/راديو مصر 88.7 FM.png",
            url: "http://live.radiomasr.net:8060/RADIOMASR"
        },
        {
            name: "El Radio 9090 FM",
            logo: "stations/images-europe/egypt/El Radio 9090 FM.png",
            url: "http://9090streaming.mobtada.com/9090FMEGYPT"
        },
    ],
    "estonia": [
        {
            name: "Vikerraadio",
            logo: "stations/images-europe/estonia/Vikerraadio.png",
            url: "http://icecast.err.ee:80/vikerraadio.mp3"
        },
        {
            name: "Raadio 2",
            logo: "stations/images-europe/estonia/Raadio 2.png",
            url: "http://icecast.err.ee:80/raadio2.mp3"
        },
        {
            name: "Klassikaraadio",
            logo: "stations/images-europe/estonia/Klassikaraadio.png",
            url: "http://icecast.err.ee:80/klassikaraadio.mp3"
        },
        {
            name: "Raadio 4",
            logo: "stations/images-europe/estonia/Raadio 4.png",
            url: "http://icecast.err.ee:80/raadio4.mp3"
        },
        {
            name: "MyHits",
            logo: "stations/images-europe/estonia/MyHits.png",
            url: "http://striiming.trio.ee:8008/myhits_low.mp3"
        },
        {
            name: "Power Hit Radio",
            logo: "stations/images-europe/estonia/Power Hit Radio.svg",
            url: "https://phr.babahhcdn.com/phr?t1564238193923"
        },
        {
            name: "Raadio Elmar",
            logo: "stations/images-europe/estonia/Raadio Elmar.png",
            url: "http://217.146.71.24:80/elmar.mp3"
        },
        {
            name: "Raadio Kuku",
            logo: "stations/images-europe/estonia/Raadio Kuku.png",
            url: "http://217.146.71.24/kuku.mp3"
        },
        {
            name: "Retro FM",
            logo: "stations/images-europe/estonia/Retro FM.png",
            url: "http://retro.babahhcdn.com/RETRO?/retrofm_hi.mp3"
        },
        {
            name: "Sky Plus",
            logo: "stations/images-europe/estonia/Sky Plus.png",
            url: "http://skyplus.babahhcdn.com/SKYPLUS?/skyplus_hi.mp3"
        },
        {
            name: "Star FM",
            logo: "stations/images-europe/estonia/Star FM.png",
            url: "http://starfm.babahhcdn.com:8000/starfm"
        },
    ],
    "faroe": [
        {
            name: "Kringvarp Føroya",
            logo: "stations/images-europe/faroe/Kringvarp Føroya.jpg",
            url: "http://netvarp.kringvarp.fo:443/uvhm"
        },
        {
            name: "R7 Kringvarp",
            logo: "stations/images-europe/faroe/R7 Kringvarp.svg",
            url: "http://lurta.r7.fo:8082/r7_high.ogg"
        },
        {
            name: "Rás2",
            logo: "stations/images-europe/faroe/Rás2.png",
            url: "http://stream.midlar.fo/ras2-128"
        },
        {
            name: "VoxPop",
            logo: "stations/images-europe/faroe/VoxPop.png",
            url: "http://stream.midlar.fo/voxpop-128"
        },
    ],
    "finland": [
        {
            name: "YLE Radio 1",
            logo: "stations/images-europe/finland/YLE Radio 1.png",
            url: "http://yleuni-f.akamaihd.net/i/yleliveradiohd_1@113878/master.m3u8"
        },
        {
            name: "YLE Puhe",
            logo: "stations/images-europe/finland/YLE Puhe.png",
            url: "http://yleuni-f.akamaihd.net/i/yleliveradiohd_5@113882/master.m3u8"
        },
        {
            name: "YLE Klassinen",
            logo: "stations/images-europe/finland/YLE Klassinen.png",
            url: "http://yleuni-f.akamaihd.net/i/yleliveradiohd_4@113881/master.m3u8"
        },
        {
            name: "YLE Radio Suomi",
            logo: "stations/images-europe/finland/YLE Radio Suomi.png",
            url: "http://yleuni-f.akamaihd.net/i/yleliveradiohd_3@113880/master.m3u8"
        },
        {
            name: "YLE Vega",
            logo: "stations/images-europe/finland/YLE Vega.png",
            url: "http://yleuni-f.akamaihd.net/i/yleliveradiohd_32@113909/master.m3u8"
        },
        {
            name: "YleX",
            logo: "stations/images-europe/finland/YleX.png",
            url: "http://yleuni-f.akamaihd.net/i/yleliveradiohd_2@113879/master.m3u8"
        },
        /*
        {
            name: "Bassoradio",
            logo: "stations/images-europe/finland/Bassoradio.jpg",
            url: "http://stream.basso.fi:8000/stream"
        },
        */
        {
            name: "Helmiradio",
            logo: "stations/images-europe/finland/Helmiradio.png",
            url: "https://digitacdn.akamaized.net/hls/live/629243/radiohelmi/master.m3u8"
        },
        {
            name: "Iskelmä",
            logo: "stations/images-europe/finland/Iskelmä.png",
            url: "https://stream.bauermedia.fi/iskelma/iskelma_64.aac"
        },
        {
            name: "Järviradio",
            logo: "stations/images-europe/finland/Järviradio.png",
            url: "https://jarviradio.radiotaajuus.fi:9000/jr"
        },
        {
            name: "Kiss",
            logo: "stations/images-europe/finland/Kiss.png",
            url: "https://stream.bauermedia.fi/kiss/kiss_64.aac"
        },
        {
            name: "Radio Aalto",
            logo: "stations/images-europe/finland/Radio Aalto.png",
            url: "https://digitacdn.akamaized.net/hls/live/629243/radioaalto/master.m3u8"
        },
        {
            name: "Radio City",
            logo: "stations/images-europe/finland/Radio City.svg",
            url: "https://stream.bauermedia.fi/radiocity/hki_128.mp3?direct=true"
        },
        /*
        {
            name: "Radio Moreeni",
            logo: "stations/images-europe/finland/Radio Moreeni.png",
            url: "http://153.1.15.29:8080/moreeni.mp3"
        },
        */
        {
            name: "Radio Dei",
            logo: "stations/images-europe/finland/Radio Dei.png",
            url: "http://isojako.radiodei.fi:8000/yleisohjelma"
        },
        {
            name: "Radio Loop",
            logo: "stations/images-europe/finland/Radio Loop.png",
            url: "https://digitacdn.akamaized.net/hls/live/629243/loop/master.m3u8"
        },
        {
            name: "Radio Nostalgia",
            logo: "stations/images-europe/finland/Radio Nostalgia.png",
            url: "http://stream.bauermedia.fi/nostalgia/nostalgia_128.mp3"
        },
        {
            name: "Radio Nova",
            logo: "stations/images-europe/finland/Radio Nova.svg",
            url: "http://stream.bauermedia.fi/radionova/radionova_64.aac?direct=true&listenerid=undefined&amsparams=playerid:SBS_RP_WEB;skey:1529788184;&awparams=loggedin:false;&aw_0_req.gdpr=true"
        },
        {
            name: "Radio NRJ",
            logo: "stations/images-europe/finland/Radio NRJ.svg",
            url: "http://cdn.nrjaudio.fm/adwz1/fi/35001/mp3_128.mp3"
        },
        {
            name: "Radio Rock",
            logo: "stations/images-europe/finland/Radio Rock.png",
            url: "https://digitacdn.akamaized.net/hls/live/629243/radiorock/master.m3u8"
        },
        {
            name: "Radio Suomipop",
            logo: "stations/images-europe/finland/Radio Suomipop.png",
            url: "https://digitacdn.akamaized.net/hls/live/629243/radiosuomipop/master.m3u8"
        },
        /*
        {
            name: "Radio Vaasa",
            logo: "stations/images-europe/finland/Radio Vaasa.jpg",
            url: "http://stream.radiovaasa.fi:8000/radiovaasa.mp3"
        },
        */
    ],
    "france": [
        {
            name: "FIP (national)",
            logo: "stations/images-europe/france/FIP (national).png",
            url: "http://direct.fipradio.fr/live/fip-midfi.mp3"
        },
        {
            name: "France Inter",
            logo: "stations/images-europe/france/France Inter.png",
            url: "http://direct.franceinter.fr/live/franceinter-midfi.mp3"
        },
        {
            name: "France Info",
            logo: "stations/images-europe/france/France Info.png",
            url: "http://direct.franceinfo.fr/live/franceinfo-midfi.mp3"
        },
        {
            name: "France Musique",
            logo: "stations/images-europe/france/France Musique.png",
            url: "http://direct.francemusique.fr/live/francemusique-midfi.mp3"
        },
        {
            name: "France Culture",
            logo: "stations/images-europe/france/France Culture.png",
            url: "http://direct.franceculture.fr/live/franceculture-midfi.mp3"
        },
        {
            name: "Autoroute Info",
            logo: "stations/images-europe/france/Autoroute Info.gif",
            url: "http://media.autorouteinfo.fr:8000/direct_nord.mp3"
        },
        {
            name: "Chérie FM",
            logo: "stations/images-europe/france/Chérie FM.png",
            url: "http://cdn.nrjaudio.fm/audio1/fr/30201/mp3_128.mp3?origine=listenlive"
        },
        {
            name: "Europe 1",
            logo: "stations/images-europe/france/Europe 1.png",
            url: "http://ais-live.cloud-services.paris:8000/europe1.mp3?aw_0_1st.playerid=lgrdrnwsTuneInE1"
        },
        {
            name: "Fun Radio",
            logo: "stations/images-europe/france/Fun Radio.png",
            url: "http://ais.rtl.fr:80/fun-1-44-128"
        },
        {
            name: "MFM Radio",
            logo: "stations/images-europe/france/MFM Radio.png",
            url: "http://mfm.ice.infomaniak.ch/mfm-128.mp3"
        },
        {
            name: "Mouv'",
            logo: "stations/images-europe/france/Mouv'.jpg",
            url: "http://direct.mouv.fr/live/mouv-midfi.mp3"
        },
        {
            name: "Nostalgie",
            logo: "stations/images-europe/france/Nostalgie.png",
            url: "http://cdn.nrjaudio.fm/audio1/fr/30601/mp3_128.mp3?origine=listenlive"
        },
        {
            name: "NRJ",
            logo: "stations/images-europe/france/NRJ.svg",
            url: "http://cdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3?origine=listenlive"
        },
        {
            name: "Radio Classique",
            logo: "stations/images-europe/france/Radio Classique.png",
            url: "http://radioclassique.ice.infomaniak.ch/radioclassique-high.mp3"
        },
        {
            name: "Radio FG",
            logo: "stations/images-europe/france/Radio FG.png",
            url: "http://radiofg.impek.com/fg.mp3"
        },
        {
            name: "Radio Scoop",
            logo: "stations/images-europe/france/Radio Scoop.png",
            url: "http://broadcast.infomaniak.net/radioscoop-lyon-128.mp3"
        },
        {
            name: "Radio Vinci Autoroutes",
            logo: "stations/images-europe/france/Radio Vinci Autoroutes.gif",
            url: "http://str0.creacast.com/radio_vinci_autoroutes_6"
        },
        {
            name: "RFM",
            logo: "stations/images-europe/france/RFM.png",
            url: "https://ais-live.cloud-services.paris:8443/rfm.aac"
        },
        {
            name: "Rire et Chansons",
            logo: "stations/images-europe/france/Rire et Chansons.png",
            url: "http://cdn.nrjaudio.fm/audio1/fr/30401/mp3_128.mp3?origine=fluxradios"
        },
        {
            name: "RMC",
            logo: "stations/images-europe/france/RMC.jpg",
            url: "http://rmc.bfmtv.com/rmcinfo-mp3"
        },
        {
            name: "RTL",
            logo: "stations/images-europe/france/RTL.png",
            url: "http://ais.rtl.fr:80/rtl-1-44-128"
        },
        {
            name: "RTL2",
            logo: "stations/images-europe/france/RTL2.jpg",
            url: "http://ais.rtl.fr:80/rtl2-1-44-128"
        },
        {
            name: "Skyrock",
            logo: "stations/images-europe/france/Skyrock.jpg",
            url: "http://icecast.skyrock.net/s/natio_mp3_128k"
        },
        {
            name: "Sud Radio",
            logo: "stations/images-europe/france/Sud Radio.png",
            url: "http://start-sud.ice.infomaniak.ch/start-sud-high.mp3"
        },
        {
            name: "Virgin Radio",
            logo: "stations/images-europe/france/Virgin Radio.png",
            url: "https://ais-live.cloud-services.paris:8443/virgin.aac"
        },
    ],
    "georgia": [
        {
            name: "რადიო 1",
            logo: "stations/images-europe/georgia/რადიო 1.jpg",
            url: "https://cors-anywhere.herokuapp.com/https://tv.cdn.xsg.ge/gpb-radio1studia/tracks-v1a1/index.m3u8"
        },
    ],
    "germany": [
        {
            name: "Deutschlandfunk",
            logo: "stations/images-europe/germany/Deutschlandfunk.png",
            url: "http://st01.dlf.de/dlf/01/128/mp3/stream.mp3"
        },
        {
            name: "Deutschlandfunk Kultur",
            logo: "stations/images-europe/germany/Deutschlandfunk Kultur.png",
            url: "http://st02.dlf.de/dlf/02/128/mp3/stream.mp3"
        },
        {
            name: "Absolut Relax",
            logo: "stations/images-europe/germany/Absolut Relax.png",
            url: "http://stream.absolutradio.de/relax/mp3-128/surfmusik/"
        },
        {
            name: "NRJ",
            logo: "stations/images-europe/germany/NRJ.png",
            url: "http://cdn.nrjaudio.fm/adwz1/de/33003/mp3_128.mp3"
        },
        {
            name: "Radio BOB",
            logo: "stations/images-europe/germany/Radio BOB.svg",
            url: "https://streams.radiobob.de/bob-live/mp3-192/homepage/"
        },
        {
            name: "Schlagerparadies",
            logo: "stations/images-europe/germany/Schlagerparadies.png",
            url: "http://surfmusik.radioschlagerparadies.de/schlagerparadies128k.mp3"
        },
        {
            name: "Schwarzwaldradio",
            logo: "stations/images-europe/germany/Schwarzwaldradio.png",
            url: "http://str0.creacast.com/schwarzwaldradio"
        },
        {
            name: "Sunshine live",
            logo: "stations/images-europe/germany/Sunshine live.svg",
            url: "http://stream.sunshine-live.de/live/mp3-192/Webradio-Player/"
        },
    ],
    "germany-br": [
        {
            name: "Bayern 1",
            logo: "stations/images-europe/germany-br/Bayern 1.jpg",
            url: "http://br-br1-franken.cast.addradio.de/br/br1/franken/mp3/128/stream.mp3"
        },
        {
            name: "Bayern 2",
            logo: "stations/images-europe/germany-br/Bayern 2.jpg",
            url: "http://br-br2-sued.cast.addradio.de/br/br2/sued/mp3/128/stream.mp3"
        },
        {
            name: "Bayern 3",
            logo: "stations/images-europe/germany-br/Bayern 3.png",
            url: "http://br-br3-live.cast.addradio.de/br/br3/live/mp3/128/stream.mp3"
        },
        {
            name: "Bayern plus",
            logo: "stations/images-europe/germany-br/Bayern plus.png",
            url: "http://br-bayernplus-live.cast.addradio.de/br/bayernplus/live/mp3/128/stream.mp3"
        },
        {
            name: "BR Heimat",
            logo: "stations/images-europe/germany-br/BR Heimat.png",
            url: "http://br-brheimat-live.cast.addradio.de/br/brheimat/live/mp3/128/stream.mp3"
        },
        {
            name: "BR-Klassik",
            logo: "stations/images-europe/germany-br/BR-Klassik.png",
            url: "http://br-brklassik-live.cast.addradio.de/br/brklassik/live/mp3/128/stream.mp3"
        },
        {
            name: "B5 aktuell",
            logo: "stations/images-europe/germany-br/B5 aktuell.png",
            url: "http://br-b5aktuell-live.cast.addradio.de/br/b5aktuell/live/mp3/128/stream.mp3"
        },
        {
            name: "B5 plus",
            logo: "stations/images-europe/germany-br/B5 plus.png",
            url: "http://br-b5plus-live.cast.addradio.de/br/b5plus/live/mp3/128/stream.mp3"
        },
        {
            name: "Puls",
            logo: "stations/images-europe/germany-br/Puls.gif",
            url: "http://br-puls-live.cast.addradio.de/br/puls/live/mp3/128/stream.mp3"
        },
        {
            name: "Antenne Bayern",
            logo: "stations/images-europe/germany-br/Antenne Bayern.png",
            url: "http://mp3channels.webradio.antenne.de:80/antenne"
        },
        {
            name: "egoFM",
            logo: "stations/images-europe/germany-br/egoFM.png",
            url: "http://www.egofm.de/stream/128kb"
        },
        {
            name: "Rock Antenne 7.1 Surround",
            logo: "stations/images-europe/germany-br/Rock Antenne 7.1 Surround.svg",
            url: "http://surround.webradio.rockantenne.de"
        },
    ],
    "germany-bremen": [
        {
            name: "Bremen Eins",
            logo: "stations/images-europe/germany-ndr/Bremen Eins.png",
            url: "http://rb-bremeneins-live.cast.addradio.de/rb/bremeneins/live/mp3/128/stream.mp3"
        },
        {
            name: "Bremen Vier",
            logo: "stations/images-europe/germany-ndr/Bremen Vier.svg",
            url: "http://rb-bremenvier-live.cast.addradio.de/rb/bremenvier/live/mp3/128/stream.mp3"
        },
        {
            name: "Nordwestradio",
            logo: "stations/images-europe/germany-ndr/Nordwestradio.png",
            url: "http://rb-bremenzwei-live.cast.addradio.de/rb/bremenzwei/live/mp3/128/stream.mp3"
        },
        {
            name: "Bremen NEXT",
            logo: "stations/images-europe/germany-ndr/Bremen NEXT.png",
            url: "http://rb-bremennext-live.cast.addradio.de/rb/bremennext/live/mp3/128/stream.mp3"
        },
        {
            name: "Cosmo",
            logo: "stations/images-europe/germany-ndr/WDR Cosmo.svg",
            url: "http://addrad.io/4WRN3Y"
        },
    ],
    "germany-hr": [
        {
            name: "hr1",
            logo: "stations/images-europe/germany-hr/hr1.png",
            url: "http://hr-hr1-live.cast.addradio.de/hr/hr1/live/mp3/128/stream.mp3"
        },
        {
            name: "hr2",
            logo: "stations/images-europe/germany-hr/hr2.png",
            url: "http://hr-hr2-live.cast.addradio.de/hr/hr2/live/mp3/128/stream.mp3"
        },
        {
            name: "hr3",
            logo: "stations/images-europe/germany-hr/hr3.png",
            url: "http://hr-hr3-live.cast.addradio.de/hr/hr3/live/mp3/128/stream.mp3"
        },
        {
            name: "hr4",
            logo: "stations/images-europe/germany-hr/hr4.svg",
            url: "http://hr-hr4-live.cast.addradio.de/hr/hr4/live/mp3/128/stream.mp3"
        },
        {
            name: "hr-info",
            logo: "stations/images-europe/germany-hr/hr-info.png",
            url: "http://hr-hrinfo-live.cast.addradio.de/hr/hrinfo/live/mp3/128/stream.mp3"
        },
        {
            name: "YOU FM",
            logo: "stations/images-europe/germany-hr/YOU FM.png",
            url: "http://hr-youfm-live.cast.addradio.de/hr/youfm/live/mp3/128/stream.mp3"
        },
        {
            name: "harmony.fm",
            logo: "stations/images-europe/germany-hr/harmony.fm.png",
            url: "http://mp3.harmonyfm.de/harmonyfm/hqlivestream.mp3"
        },
        {
            name: "Hit Radio FFH",
            logo: "stations/images-europe/germany-hr/Hit Radio FFH.png",
            url: "http://mp3.ffh.de/radioffh/hqlivestream.mp3"
        },
        {
            name: "Planet Radio",
            logo: "stations/images-europe/germany-hr/Planet Radio.png",
            url: "http://mp3.planetradio.de/planetradio/hqlivestream.mp3"
        },
        {
            name: "Radio TEDDY",
            logo: "stations/images-europe/germany-hr/Radio TEDDY.png",
            url: "http://ir-media.hoerradar.de/teddy-live-mp3-mq?sABC=58697o07%231%2326nr8094s1012no571r7np7896r19p4p%23jro&amsparams=playerid:web;skey:1483307783"
        },
    ],
    "germany-mdr": [
        {
            name: "MDR Sachsen",
            logo: "stations/images-europe/germany-mdr/MDR Sachsen.png",
            url: "http://mdr-284280-0.cast.mdr.de/mdr/284280/0/mp3/high/stream.mp3"
        },
        {
            name: "MDR Sachsen-Anhalt",
            logo: "stations/images-europe/germany-mdr/MDR Sachsen-Anhalt.png",
            url: "http://mdr-284290-0.cast.mdr.de/mdr/284290/0/mp3/high/stream.mp3"
        },
        {
            name: "MDR Thüringen",
            logo: "stations/images-europe/germany-mdr/MDR Thüringen.png",
            url: "http://mdr-284300-0.cast.mdr.de/mdr/284300/0/mp3/high/stream.mp3"
        },
        {
            name: "MDR Jump",
            logo: "stations/images-europe/germany-mdr/MDR Jump.svg",
            url: "http://mdr-284320-0.cast.mdr.de/mdr/284320/0/mp3/high/stream.mp3"
        },
        {
            name: "MDR Aktuell",
            logo: "stations/images-europe/germany-mdr/MDR AKTUELL.png",
            url: "http://mdr-284340-0.cast.mdr.de/mdr/284340/0/mp3/high/stream.mp3"
        },
        {
            name: "MDR Sputnik",
            logo: "stations/images-europe/germany-mdr/MDR Sputnik.png",
            url: "http://mdr-284330-0.cast.mdr.de/mdr/284330/0/mp3/high/stream.mp3"
        },
        {
            name: "MDR Klassik",
            logo: "stations/images-europe/germany-mdr/MDR Klassik.svg",
            url: "http://mdr-284350-0.cast.mdr.de/mdr/284350/0/mp3/high/stream.mp3"
        },
        {
            name: "MDR Kultur",
            logo: "stations/images-europe/germany-mdr/MDR Kultur.png",
            url: "http://mdr-284310-0.cast.mdr.de/mdr/284310/0/mp3/high/stream.mp3"
        },
        {
            name: "MDR Schlagerwelt",
            logo: "stations/images-europe/germany-mdr/MDR Schlagerwelt.png",
            url: "http://mdr-990801-0.cast.mdr.de/mdr/990801/0/mp3/high/stream.mp3"
        },
        {
            name: "89.0 RTL",
            logo: "stations/images-europe/germany-mdr/89.0 RTL.png",
            url: "http://stream.89.0rtl.de/live/mp3-256"
        },
        {
            name: "Antenne Thüringen",
            logo: "stations/images-europe/germany-mdr/Antenne Thüringen.png",
            url: "https://antenne-th.divicon-stream.net/antth_atlive_sfS8-mp3-192?sABC=5o5o2r70%230%23q470q1567q61q7pnn66op03433485s07%23jro&amsparams=playerid:web;skey:1532702320"
        },
        {
            name: "Hitradio RTL",
            logo: "stations/images-europe/germany-mdr/Hitradio RTL.svg",
            url: "https://streams.bcs-systems.de/hrrtl/live/sachsen/mp3/radioplayer/web"
        },
        {
            name: "Radio PSR",
            logo: "stations/images-europe/germany-mdr/Radio PSR.png",
            url: "http://streams.radiopsr.de/psr-live/mp3-192/streams.radiopsr.de/"
        },
        {
            name: "Radio SAW",
            logo: "stations/images-europe/germany-mdr/Radio SAW.png",
            url: "http://stream.saw-musikwelt.de/saw/mp3-128/vtuner/"
        },
        {
            name: "R.SA Sachsen Partywelle",
            logo: "stations/images-europe/germany-mdr/R.SA Sachsen Partywelle.png",
            url: "https://streams.rsa-sachsen.de/rsa-live/mp3-192/homepage/?context=fHA6LTE="
        },
    ],
    "germany-ndr": [
        {
            name: "NDR 1 Niedersachsen",
            logo: "stations/images-europe/germany-ndr/NDR 1 Niedersachsen.png",
            url: "http://ndr-ndr1niedersachsen-hannover.cast.addradio.de/ndr/ndr1niedersachsen/hannover/mp3/128/stream.mp3"
        },
        {
            name: "NDR 1 Welle Nord",
            logo: "stations/images-europe/germany-ndr/NDR 1 Welle Nord.png",
            url: "http://ndr-ndr1wellenord-kiel.cast.addradio.de/ndr/ndr1wellenord/kiel/mp3/128/stream.mp3"
        },
        {
            name: "NDR 1 Radio MV",
            logo: "stations/images-europe/germany-ndr/NDR 1 Radio MV.png",
            url: "http://ndr-ndr1radiomv-schwerin.cast.addradio.de/ndr/ndr1radiomv/schwerin/mp3/128/stream.mp3"
        },
        {
            name: "NDR 2",
            logo: "stations/images-europe/germany-ndr/NDR 2.svg",
            url: "http://ndr-ndr2-niedersachsen.cast.addradio.de/ndr/ndr2/niedersachsen/mp3/128/stream.mp3"
        },
        {
            name: "NDR Info",
            logo: "stations/images-europe/germany-ndr/NDR Info.svg",
            url: "http://ndr-ndrinfo-niedersachsen.cast.addradio.de/ndr/ndrinfo/niedersachsen/mp3/128/stream.mp3"
        },
        {
            name: "NDR Kultur",
            logo: "stations/images-europe/germany-ndr/NDR Kultur.svg",
            url: "http://ndr-ndrkultur-live.cast.addradio.de/ndr/ndrkultur/live/mp3/128/stream.mp3"
        },
        {
            name: "N-Joy",
            logo: "stations/images-europe/germany-ndr/N-Joy.svg",
            url: "http://ndr-njoy-live.cast.addradio.de/ndr/njoy/live/mp3/128/stream.mp3"
        },
        {
            name: "NDR Blue",
            logo: "stations/images-europe/germany-ndr/NDR Blue.png",
            url: "http://ndr-ndrblue-live.cast.addradio.de/ndr/ndrblue/live/mp3/128/stream.mp3"
        },
        {
            name: "NDR Plus",
            logo: "stations/images-europe/germany-ndr/NDR Plus.png",
            url: "http://ndr-ndrplus-live.cast.addradio.de/ndr/ndrplus/live/mp3/128/stream.mp3"
        },
        {
            name: "Antenne MV",
            logo: "stations/images-europe/germany-ndr/Antenne MV.png",
            url: "https://antennemv.hoerradar.de/antennemv-live-mp3-hq"
        },
        {
            name: "Antenne Niedersachsen",
            logo: "stations/images-europe/germany-ndr/Antenne Niedersachsen.png",
            url: "https://stream.antenne.com/antenne-nds/mp3-128/radioplayer/"
        },
        {
            name: "delta radio",
            logo: "stations/images-europe/germany-ndr/delta radio.png",
            url: "http://streams.deltaradio.de/delta-live/mp3-192/streams.deltaradio.de/"
        },
        {
            name: "FFN",
            logo: "stations/images-europe/germany-ndr/FFN.png",
            url: "http://stream.ffn.de/ffn/mp3-192/;stream.nsv"
        },
        {
            name: "Ostseewelle Hit-Radio",
            logo: "stations/images-europe/germany-ndr/Ostseewelle Hit-Radio.png",
            url: "http://ostseewelle-ais-edge-3006.fra-eco.cdn.addradio.net/ostseewelle/nord/mp3/high"
        },
        {
            name: "Radio 21",
            logo: "stations/images-europe/germany-ndr/Radio 21.png",
            url: "http://188.94.97.91/radio21.mp3"
        },
        {
            name: "R.SH (Radio Schleswig-Holstein)",
            logo: "stations/images-europe/germany-ndr/R.SH (Radio Schleswig-Holstein).png",
            url: "https://rsh.hoerradar.de/rsh-live-mp3-hq"
        },
    ],
    "germany-rbb": [
        {
            name: "RBB Antenne Brandenburg",
            logo: "stations/images-europe/germany-rbb/RBB Antenne Brandenburg.png",
            url: "https://rbb-antennebrandenburg-live.sslcast.addradio.de/rbb/antennebrandenburg/live/mp3/128/stream.mp3"
        },
        {
            name: "RBB Fritz",
            logo: "stations/images-europe/germany-rbb/RBB Fritz.png",
            url: "https://rbb-fritz-live.sslcast.addradio.de/rbb/fritz/live/mp3/128/stream.mp3"
        },
        {
            name: "RBB Radio Eins",
            logo: "stations/images-europe/germany-rbb/RBB Radio Eins.png",
            url: "https://rbb-radioeins-live.sslcast.addradio.de/rbb/radioeins/live/mp3/128/stream.mp3"
        },
        {
            name: "RBB Inforadio",
            logo: "stations/images-europe/germany-rbb/RBB Inforadio.png",
            url: "https://rbb-inforadio-live.sslcast.addradio.de/rbb/inforadio/live/mp3/128/stream.mp3"
        },
        {
            name: "RBB Radio Berlin 88,8",
            logo: "stations/images-europe/germany-rbb/RBB Radio Berlin 88,8.png",
            url: "https://rbb-radioberlin-live.sslcast.addradio.de/rbb/radioberlin/live/mp3/128/stream.mp3"
        },
        {
            name: "RBB Kulturradio",
            logo: "stations/images-europe/germany-rbb/RBB Kulturradio.png",
            url: "http://rbb-kulturradio-live.cast.addradio.de/rbb/kulturradio/live/mp3/128/stream.mp3"
        },
        {
            name: "Cosmo",
            logo: "stations/images-europe/germany-rbb/WDR Cosmo.svg",
            url: "http://addrad.io/4WRN3Y"
        },
        {
            name: "104.6 RTL",
            logo: "stations/images-europe/germany-rbb/104.6 RTL.svg",
            url: "http://stream.104.6rtl.com/rtl-live/mp3-128/konsole/"
        },
        {
            name: "BB Radio",
            logo: "stations/images-europe/germany-rbb/BB Radio.svg",
            url: "http://streambbr.ir-media-tec.com/live/mp3-128/radioplayer_web/play.mp3"
        },
        {
            name: "FluxFM",
            logo: "stations/images-europe/germany-rbb/FluxFM.png",
            url: "http://streams.fluxfm.de/live/mp3-320/audio/"
        },
        {
            name: "Radio TEDDY",
            logo: "stations/images-europe/germany-rbb/Radio TEDDY.png",
            url: "http://ir-media.hoerradar.de/teddy-live-mp3-mq?sABC=58697nn6%231%2326nr8094s1012no571r7np7896r19p4p%23jro&amsparams=playerid:web;skey:1483307686"
        },
        {
            name: "rs2",
            logo: "stations/images-europe/germany-rbb/rs2.png",
            url: "https://stream.rs2.de/rs2/mp3-128/radioplayerde/;stream.nsv"
        },
    ],
    "germany-swr": [
        {
            name: "SWR1 Baden-Württemberg",
            logo: "stations/images-europe/germany-swr/SWR1 Baden-Württemberg.png",
            url: "http://swr-swr1-bw.cast.addradio.de/swr/swr1/bw/mp3/128/stream.mp3"
        },
        {
            name: "SWR1 Rheinland-Pfalz",
            logo: "stations/images-europe/germany-swr/SWR1 Rheinland-Pfalz.png",
            url: "http://swr-swr1-rp.cast.addradio.de/swr/swr1/rp/mp3/128/stream.mp3"
        },
        {
            name: "SWR2",
            logo: "stations/images-europe/germany-swr/SWR2.png",
            url: "http://swr-swr2-live.cast.addradio.de/swr/swr2/live/mp3/256/stream.mp3"
        },
        {
            name: "SWR3",
            logo: "stations/images-europe/germany-swr/SWR3.svg",
            url: "http://swr-swr3-live.cast.addradio.de/swr/swr3/live/mp3/128/stream.mp3"
        },
        {
            name: "SWR4 Baden-Württemberg",
            logo: "stations/images-europe/germany-swr/SWR4.png",
            url: "http://swr-swr4-bw.cast.addradio.de/swr/swr4/bw/mp3/128/stream.mp3"
        },
        {
            name: "SWR4 Rheinland-Pfalz",
            logo: "stations/images-europe/germany-swr/SWR4.png",
            url: "http://swr-swr4-rp.cast.addradio.de/swr/swr4/rp/mp3/128/stream.mp3"
        },
        {
            name: "SWR aktuell",
            logo: "stations/images-europe/germany-swr/SWR aktuell.jpg",
            url: "http://swr-swraktuell-live.cast.addradio.de/swr/swraktuell/live/mp3/128/stream.mp3"
        },
        {
            name: "DASDING",
            logo: "stations/images-europe/germany-swr/DASDING.png",
            url: "http://swr-dasding-live.cast.addradio.de/swr/dasding/live/mp3/128/stream.mp3"
        },
        {
            name: "Antenne 1",
            logo: "stations/images-europe/germany-swr/Antenne 1.png",
            url: "http://stream.antenne1.de/a1stg/livestream2.mp3"
        },
        {
            name: "bigFM",
            logo: "stations/images-europe/germany-swr/bigFM.svg",
            url: "https://streams.bigfm.de/bigfm-deutschland-128-mp3"
        },
        {
            name: "Die neue 107.7",
            logo: "stations/images-europe/germany-swr/Die neue 107.7.png",
            url: "http://dieneue1077.cast.addradio.de/dieneue1077/simulcast/high/stream.mp3"
        },
        {
            name: "Die neue Welle",
            logo: "stations/images-europe/germany-swr/Die neue Welle.svg",
            url: "http://stream.meine-neue-welle.de/dnw_128.mp3"
        },
        {
            name: "Radio 7",
            logo: "stations/images-europe/germany-swr/Radio 7.jpg",
            url: "http://stream.radio7.de/stream1/livestream.mp3"
        },
        {
            name: "Radio Regenbogen",
            logo: "stations/images-europe/germany-swr/Radio Regenbogen.png",
            url: "http://scast.regenbogen.de/live"
        },
    ],
    "germany-wdr": [
        {
            name: "WDR 1LIVE",
            logo: "stations/images-europe/germany-wdr/WDR 1LIVE.svg",
            url: "http://wdr-1live-live.icecast.wdr.de/wdr/1live/live/mp3/128/stream.mp3"
        },
        {
            name: "WDR 2",
            logo: "stations/images-europe/germany-wdr/WDR 2.svg",
            url: "http://wdr-wdr2-ruhrgebiet.icecast.wdr.de/wdr/wdr2/ruhrgebiet/mp3/128/stream.mp3"
        },
        {
            name: "WDR 3",
            logo: "stations/images-europe/germany-wdr/WDR 3.svg",
            url: "http://wdr-wdr3-live.icecast.wdr.de/wdr/wdr3/live/mp3/256/stream.mp3"
        },
        {
            name: "WDR 4",
            logo: "stations/images-europe/germany-wdr/WDR 4.svg",
            url: "http://wdr-wdr4-live.icecast.wdr.de/wdr/wdr4/live/mp3/128/stream.mp3"
        },
        {
            name: "WDR 5",
            logo: "stations/images-europe/germany-wdr/WDR 5.svg",
            url: "http://wdr-wdr5-live.icecast.wdr.de/wdr/wdr5/live/mp3/128/stream.mp3"
        },
        {
            name: "WDR VerkehrsRadio",
            logo: "stations/images-europe/germany-wdr/WDR VerkehrsRadio.png",
            url: "http://addrad.io/4WRNgG"
        },
        {
            name: "Cosmo",
            logo: "stations/images-europe/germany-wdr/WDR Cosmo.svg",
            url: "http://addrad.io/4WRN3Y"
        },
        {
            name: "Domradio",
            logo: "stations/images-europe/germany-wdr/Domradio.png",
            url: "http://domradio-mp3-m.akacast.akamaistream.net/7/148/237368/v1/gnl.akacast.akamaistream.net/domradio-mp3-m"
        },
        {
            name: "KiRaKa - KinderRadioKanal",
            logo: "stations/images-europe/germany-wdr/KiRaKa - KinderRadioKanal.svg",
            url: "http://addrad.io/4WRNd_"
        },
        /*
        {
            name: "News89.4",
            logo: "stations/images-europe/germany-wdr/News89.4.gif",
            url: "http://edge.live.mp3.mdn.newmedia.nacamar.net/ps-news894/livestream.mp3"
        },
        {
            name: "Radio RSG",
            logo: "stations/images-europe/germany-wdr/Radio RSG.svg",
            url: "http://edge.live.mp3.mdn.newmedia.nacamar.net/radiorsg/livestream.mp3"
        },
        */
        {
            name: "RPR1",
            logo: "stations/images-europe/germany-wdr/RPR1.png",
            url: "http://streams.rpr1.de/rpr-ludwigshafen-128-aac"
        },
    ],
    "gibraltar": [
        {
            name: "BFBS Gibraltar",
            logo: "stations/images-europe/gibraltar/BFBS Gibraltar.png",
            url: "https://tx.sharp-stream.com/http_live.php?i=ssvcbfbs7.aac&device=bfbs_gibraltar"
        },
        {
            name: "BFBS Radio 2",
            logo: "stations/images-europe/gibraltar/BFBS Radio 2.png",
            url: "https://tx.sharp-stream.com/http_live.php?i=ssvcbfbs2.aac&device=bfbs_radio2"
        },
        {
            name: "Radio Gibraltar",
            logo: "stations/images-europe/gibraltar/Radio Gibraltar.jpg",
            url: "http://37.123.118.13:8041/stream"
        },
        {
            name: "Radio Gibraltar Plus",
            logo: "stations/images-europe/gibraltar/Radio Gibraltar.jpg",
            url: "http://s2.myradiostream.com:32910/;stream.nsv&type=mp3"
        },
    ],
    "greece": [
        {
            name: "ΕΡΤ Πρώτο Πρόγραμμα",
            logo: "stations/images-europe/greece/ΕΡΤ Πρώτο Πρόγραμμα.png",
            url: "http://radiostreaming.ert.gr/ert-proto"
        },
        {
            name: "ΕΡΤ Δεύτερο Πρόγραμμα",
            logo: "stations/images-europe/greece/ΕΡΤ Δεύτερο Πρόγραμμα.png",
            url: "http://radiostreaming.ert.gr/ert-deftero"
        },
        {
            name: "ΕΡΤ Τρίτο Πρόγραμμα",
            logo: "stations/images-europe/greece/ΕΡΤ Τρίτο Πρόγραμμα.jpg",
            url: "http://radiostreaming.ert.gr/ert-trito"
        },
        {
            name: "Μελωδια",
            logo: "stations/images-europe/greece/Μελωδια.png",
            url: "https://stream.radiojar.com/melodia992"
        },
        {
            name: "Rythmos FM",
            logo: "stations/images-europe/greece/Rythmos FM.png",
            url: "http://ample-10.radiojar.com/g4tyehk5yvduv?rj-ttl=5&rj-token=AAABYTfr6LcyzlBtcDzLiw3qph6r3X7oRS_PO28pTSHS9xEI3FO90Q"
        },
        {
            name: "ΣΚΑΪ 100,3",
            logo: "stations/images-europe/greece/ΣΚΑΪ 100,3.svg",
            url: "http://liveradio.skai.gr/skaihd/skai/playlist.m3u8"
        },
        {
            name: "Star FM",
            logo: "stations/images-europe/greece/Star FM.png",
            url: "http://s1.onweb.gr:8800/;"
        },
    ],
    "hungary": [
        {
            name: "MR1-Kossuth Rádió",
            logo: "stations/images-europe/hungary/MR1-Kossuth Rádió.jpg",
            url: "http://icast.connectmedia.hu/4726/mr1ex.mp3"
        },
        {
            name: "MR2-Petofi Rádió",
            logo: "stations/images-europe/hungary/MR2-Petofi Rádió.jpeg",
            url: "http://icast.connectmedia.hu/4738/mr2.mp3"
        },
        {
            name: "MR3-Bartók Rádió",
            logo: "stations/images-europe/hungary/MR3-Bartók Rádió.png",
            url: "http://mr-stream.mediaconnect.hu/4741/mr3.mp3"
        },
        {
            name: "MR6-Dankó Rádió",
            logo: "stations/images-europe/hungary/Dankó Rádió.png",
            url: "http://icast.connectmedia.hu/4748/mr7.mp3"
        },
        {
            name: "Radio 1",
            logo: "stations/images-europe/hungary/Radio 1.png",
            url: "http://www.bytestorm.hu/radio1Stream/"
        },
        {
            name: "Retro Rádió",
            logo: "stations/images-europe/hungary/Retro Rádió.png",
            url: "http://stream.retroradio.hu/mid.mp3?time=1540043852?time=1540043885744"
        },
    ],
    "iceland": [
        {
            name: "Rás 1",
            logo: "stations/images-europe/iceland/Rás 1.png",
            url: "https://ruv-ras1-live-hls.secure.footprint.net/hls-live/ruv-ras1/_definst_/live.m3u8"
        },
        {
            name: "Rás 2",
            logo: "stations/images-europe/iceland/Rás 2.png",
            url: "https://ruv-ras2-live-hls.secure.footprint.net/hls-live/ruv-ras2/_definst_/live.m3u8"
        },
        {
            name: "Bylgjan 98,9",
            logo: "stations/images-europe/iceland/Bylgjan 98,9.jpg",
            url: "http://vcache1.365net.is/hls-radio/bylgjan/playlist.m3u8?DVR"
        },
        {
            name: "FM957",
            logo: "stations/images-europe/iceland/FM957.png",
            url: "http://icecast.365net.is:8000/orbFm957.aac"
        },
        {
            name: "Lindin",
            logo: "stations/images-europe/iceland/Lindin.png",
            url: "http://62.145.147.50:8001/lindin"
        },
        {
            name: "Útvarp Saga",
            logo: "stations/images-europe/iceland/Útvarp Saga.png",
            url: "http://radio.is:443/saga"
        },
        {
            name: "X-ið 977",
            logo: "stations/images-europe/iceland/X-ið 977.png",
            url: "http://icecast.365net.is:8000/orbXid.aac"
        },
    ],
    "iom": [
        {
            name: "3FM",
            logo: "stations/images-europe/iom/3FM.jpg",
            url: "http://tx.sharp-stream.com/icecast.php?i=3fmhigh.mp3"
        },
        {
            name: "Manx Radio",
            logo: "stations/images-europe/iom/Manx Radio.png",
            url: "http://tx.sharp-stream.com/http_live.php?i=manxradiofm.mp3&device=ukradioplayermobile"
        },
    ],
    "iraq": [
        {
            name: "راديو سوا",
            logo: "stations/images-europe/iraq/راديو سوا.png",
            url: "https://mbnvaudioingest-i.akamaihd.net/hls/live/1004561/MBNV_SAWA_IRAQ/merge.m3u8"
        },
        {
            name: "إذاعة الكفيل",
            logo: "stations/images-europe/iraq/إذاعة الكفيل.png",
            url: "https://stream.alkafeel.net/live/radio/manifest.m3u8"
        },
        {
            name: "راديو الآن",
            logo: "stations/images-europe/iraq/راديو الآن.svg",
            url: "https://streamingcdn.alaan.tv/fm/fm/playlist.m3u8"
        },
        {
            name: "Nawa",
            logo: "stations/images-europe/iraq/Nawa.png",
            url: "http://nawaradio2.primcast.com:1344/;stream.mp3"
        },
    ],
    "ireland": [
        {
            name: "RTÉ Radio 1",
            logo: "stations/images-europe/ireland/RTÉ Radio 1.png",
            url: "http://icecast1.rte.ie/radio1"
        },
        {
            name: "RTÉ 2fm",
            logo: "stations/images-europe/ireland/RTÉ 2fm.png",
            url: "http://icecast1.rte.ie/2fm"
        },
        {
            name: "RTÉ Lyric FM",
            logo: "stations/images-europe/ireland/RTÉ Lyric FM.png",
            url: "http://icecast1.rte.ie/lyric"
        },
        {
            name: "RTÉ Raidió na Gaeltachta",
            logo: "stations/images-europe/ireland/RTÉ Raidió na Gaeltachta.png",
            url: "http://icecast1.rte.ie/rnag"
        },
        {
            name: "RTÉ Gold",
            logo: "stations/images-europe/ireland/RTÉ Gold.png",
            url: "http://icecast1.rte.ie/gold"
        },
        {
            name: "RTÉ Pulse",
            logo: "stations/images-europe/ireland/RTÉ Pulse.png",
            url: "http://icecast1.rte.ie/pulse"
        },
        {
            name: "Classic Hits 4FM",
            logo: "stations/images-europe/ireland/Classic Hits 4FM.png",
            url: "http://178.32.62.172:8166/;"
        },
        {
            name: "iRadio",
            logo: "stations/images-europe/ireland/iRadio.png",
            url: "https://stream.audioxi.com/IRADNW"
        },
        {
            name: "News Talk 106-108 FM",
            logo: "stations/images-europe/ireland/Newstalk 106-108 FM.jpg",
            url: "https://stream.audioxi.com/NT"
        },
        {
            name: "Raidió Rí-Rá",
            logo: "stations/images-europe/ireland/Raidió Rí-Rá.png",
            url: "http://185.80.220.12:8166/stream"
        },
        {
            name: "Today FM",
            logo: "stations/images-europe/ireland/Today FM.jpg",
            url: "https://stream.audioxi.com/TD"
        },
    ],
    "israel": [
        {
            name: "כאן ב",
            logo: "stations/images-europe/israel/KAN BET LAM.png",
            url: "http://kanliveicy.media.kan.org.il/icy/kanbet_mp3?providername=rlive"
        },
        {
            name: "כאן 88",
            logo: "stations/images-europe/israel/KAN 88 LAM.png",
            url: "http://kanliveicy.media.kan.org.il/icy/kan88_mp3?providername=rlive"
        },
        {
            name: "כאן גימל",
            logo: "stations/images-europe/israel/KAN GIMMEL LAM.png",
            url: "http://kanliveicy.media.kan.org.il/icy/kangimmel_mp3?providername=rlive"
        },
        {
            name: "כאן תרבות",
            logo: "stations/images-europe/israel/KAN TARBUT LAM.png",
            url: "http://kanliveicy.media.kan.org.il/icy/kantarbut_mp3?providername=rlive"
        },
        {
            name: "כאן קול המוסיקה",
            logo: "stations/images-europe/israel/KAN Kol HaMusika.png",
            url: "http://kanliveicy.media.kan.org.il/icy/kankolhamusica_mp3?providername=rlive"
        },
        /*
        {
            name: "גלגלצ",
            logo: "stations/images-europe/israel/GLGLZ.jpg",
            url: "https://cors-anywhere.herokuapp.com/http://glglzwizzlv.bynetcdn.com/glglz/glglz_aac/playlist.m3u8?listeningSessionID=591bd9e17b04109d_210307_HwxzCso9_MTAuMTEuMjIuMTI6ODA!_0000000KXO4&downloadSessionID=0"
        },
        {
            name: "גלי צהל‎‎",
            logo: "stations/images-europe/israel/GLZ.jpg",
            url: "https://cors-anywhere.herokuapp.com/http://glzwizzlv.bynetcdn.com/glz/glz_aac/playlist.m3u8?listeningSessionID=591bd9e17b04109d_210307_HwxzCso9_MTAuMTEuMjIuMTI6ODA!_0000000KXO4&downloadSessionID=0"
        },
        */
        {
            name: "FMרדיוס 100",
            logo: "stations/images-europe/israel/FMרדיוס 100.png",
            url: "http://100fm.streamgates.net/Radios100Fm"
        },
    ],
    "italy": [
        {
            name: "RAI Radio 1",
            logo: "stations/images-europe/italy/RAI Radio 1.png",
            url: "http://icestreaming.rai.it/1.mp3"
        },
        {
            name: "RAI Radio 2",
            logo: "stations/images-europe/italy/RAI Radio 2.png",
            url: "http://icestreaming.rai.it/2.mp3"
        },
        {
            name: "RAI Radio 3",
            logo: "stations/images-europe/italy/RAI Radio 3.png",
            url: "http://icestreaming.rai.it/3.mp3"
        },
        {
            name: "RAI FD4",
            logo: "stations/images-europe/italy/RAI FD4.png",
            url: "http://icestreaming.rai.it/4.mp3"
        },
        {
            name: "RAI IsoRadio",
            logo: "stations/images-europe/italy/RAI IsoRadio.png",
            url: "http://icestreaming.rai.it/12.mp3"
        },
        {
            name: "M2o",
            logo: "stations/images-europe/italy/M2o.gif",
            url: "http://radiom2o-lh.akamaihd.net/i/RadioM2o_Live_1@42518/master.m3u8"
        },
        {
            name: "R101",
            logo: "stations/images-europe/italy/R101.png",
            url: "http://icecast.unitedradio.it/r101"
        },
        {
            name: "Radio 105 FM",
            logo: "stations/images-europe/italy/Radio 105 FM.png",
            url: "http://icecast.unitedradio.it/Radio105.mp3"
        },
        {
            name: "Radio 24",
            logo: "stations/images-europe/italy/Radio 24.png",
            url: "http://shoutcast2.radio24.ilsole24ore.com:8000/;stream.nsv"
        },
        {
            name: "Radio Bruno",
            logo: "stations/images-europe/italy/Radio Bruno.png",
            url: "http://onair18.xdevel.com:8062/;"
        },
        {
            name: "Radio Capital",
            logo: "stations/images-europe/italy/Radio Capital.png",
            url: "http://radiocapital-lh.akamaihd.net/i/RadioCapital_Live_1@196312/master.m3u8"
        },
        {
            name: "Radio Deejay",
            logo: "stations/images-europe/italy/Radio Deejay.png",
            url: "http://radiodeejay-lh.akamaihd.net/i/RadioDeejay_Live_1@189857/master.m3u8"
        },
        {
            name: "Radio Dimensione Suono (RDS)",
            logo: "stations/images-europe/italy/Radio Dimensione Suono (RDS).png",
            url: "https://stream.rds.radio/audio/rds.stream_aac/playlist.m3u8"
        },
        {
            name: "Radio Freccia",
            logo: "stations/images-europe/italy/Radio Freccia.png",
            url: "http://shoutcast.rtl.it:3060/;"
        },
        {
            name: "Radio Italia",
            logo: "stations/images-europe/italy/Radio Italia.png",
            url: "http://radioitaliasmi-lh.akamaihd.net/i/radioitaliasmi_1@329643/master.m3u8"
        },
        {
            name: "Radio Kiss Kiss",
            logo: "stations/images-europe/italy/Radio Kiss Kiss.png",
            url: "http://ice06.fluidstream.net:8080/KissKiss.mp3"
        },
        {
            name: "Radio Monte Carlo",
            logo: "stations/images-europe/italy/Radio Monte Carlo.png",
            url: "http://icecast.unitedradio.it/RMC.mp3"
        },
        {
            name: "Radio Radicale",
            logo: "stations/images-europe/italy/Radio Radicale.png",
            url: "https://live.radioradicale.it/live.mp3"
        },
        {
            name: "Radio Sportiva",
            logo: "stations/images-europe/italy/Radio Sportiva.png",
            url: "http://46.105.114.57:8000/stream"
        },
        {
            name: "RTL 102.5",
            logo: "stations/images-europe/italy/RTL 102.5.jpg",
            url: "http://shoutcast.rtl.it:3010/stream/1/"
        },
        {
            name: "Virgin Radio",
            logo: "stations/images-europe/italy/Virgin Radio.jpg",
            url: "http://icecast.unitedradio.it/Virgin.mp3"
        },
    ],
    "japan": [
        {
            name: "NHKラジオ第1放送",
            logo: "stations/images-europe/japan/NHKラジオ第1放送.png",
            url: "http://koenvh.starfree.jp/radiko/JOAK/JP13#.m3u8"
        },
        {
            name: "NHKラジオ第2放送",
            logo: "stations/images-europe/japan/NHKラジオ第2放送.png",
            url: "http://koenvh.starfree.jp/nhk/r2/1-r2-01.m3u8"
        },
        {
            name: "NHK-FM放送",
            logo: "stations/images-europe/japan/NHK-FM放送.png",
            url: "http://koenvh.starfree.jp/radiko/JOAK-FM/JP13#.m3u8"
        },
        {
            name: "TBSラジオ",
            logo: "stations/images-europe/japan/TBS.png",
            url: "http://koenvh.starfree.jp/radiko/TBS/JP13#.m3u8"
        },
        {
            name: "文化放送",
            logo: "stations/images-europe/japan/QRR.png",
            url: "http://koenvh.starfree.jp/radiko/QRR/JP13#.m3u8"
        },
        {
            name: "ニッポン放送",
            logo: "stations/images-europe/japan/LFR.png",
            url: "http://koenvh.starfree.jp/radiko/LFR/JP13#.m3u8"
        },
        {
            name: "ラジオNIKKEI",
            logo: "stations/images-europe/japan/RN1.png",
            url: "http://koenvh.starfree.jp/radiko/RN1/JP13#.m3u8"
        },
        {
            name: "ラニィミュージック",
            logo: "stations/images-europe/japan/RN2.png",
            url: "http://koenvh.starfree.jp/radiko/RN2/JP13#.m3u8"
        },
        {
            name: "InterFM",
            logo: "stations/images-europe/japan/INT.png",
            url: "http://koenvh.starfree.jp/radiko/INT/JP13#.m3u8"
        },
        {
            name: "Tokyo FM",
            logo: "stations/images-europe/japan/FMT.png",
            url: "http://koenvh.starfree.jp/radiko/FMT/JP13#.m3u8"
        },
        {
            name: "J-WAVE",
            logo: "stations/images-europe/japan/FMJ.png",
            url: "http://koenvh.starfree.jp/radiko/FMJ/JP13#.m3u8"
        },
        {
            name: "放送大学",
            logo: "stations/images-europe/japan/HOUSOU-DAIGAKU.png",
            url: "http://koenvh.starfree.jp/radiko/HOUSOU-DAIGAKU/JP13#.m3u8"
        },
    ],
    "jordan": [
        {
            name: "الإذاعة الأردنية",
            logo: "stations/images-europe/jordan/الإذاعة الأردنية.png",
            url: "http://stream.joinvisions.net:1935/jorlive/Jordan_Radio_Audio/playlist.m3u8?DVR"
        },
        {
            name: "إذاعة عمان اف ام",
            logo: "stations/images-europe/jordan/إذاعة عمان اف ام.png",
            url: "http://stream.joinvisions.net:1935/Jordantv/Amman-FM-Audio/playlist.m3u8?DVR"
        },
        {
            name: "إذاعة القران الكريم",
            logo: "stations/images-europe/jordan/إذاعة القران الكريم.png",
            url: "http://stream.joinvisions.net:1935/jorlive/quranaudio/playlist.m3u8?DVR"
        },
        {
            name: "Radio Jordan",
            logo: "stations/images-europe/jordan/Radio Jordan.png",
            url: "http://stream.joinvisions.net:1935/live/en/playlist.m3u8"
        },
        {
            name: "مونت كارلو الدولية",
            logo: "stations/images-europe/jordan/مونت كارلو الدولية.svg",
            url: "https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya.mp3"
        },
        {
            name: "راديو هلا",
            logo: "stations/images-europe/jordan/راديو هلا.png",
            url: "http://76.164.217.100:7302/;"
        },
        {
            name: "BBC World Service Arabic",
            logo: "stations/images-europe/jordan/BBC World Service Arabic.png",
            url: "http://bbcwssc.ic.llnwd.net/stream/bbcwssc_mp1_ws-araba?s=1427311155"
        },
    ],
    "kazakhstan": [
        {
            name: "Қазақ радиосы",
            logo: "stations/images-europe/kazakhstan/Қазақ радиосы.jpg",
            url: "http://onradio.kaztrk.kz:8000/kazradio"
        },
        {
            name: "Авторадио",
            logo: "stations/images-europe/kazakhstan/Авторадио.png",
            url: "http://95.56.234.40:8080/AVTORADIO_256"
        },
        {
            name: "Radio NS",
            logo: "stations/images-europe/kazakhstan/Radio NS.png",
            url: "http://89.219.35.26:8000/radions"
        },
        {
            name: "Ретро FM",
            logo: "stations/images-europe/kazakhstan/Ретро FM.png",
            url: "http://s1.radioheart.ru:8001/retrofm-kz-128"
        },
        {
            name: "Русское Радио Азия",
            logo: "stations/images-europe/kazakhstan/Русское Радио Азия.png",
            url: "http://31.148.22.35:9000/stream"
        },
    ],
    "latvia": [
        {
            name: "Latvijas Radio 1",
            logo: "stations/images-europe/latvia/Latvijas Radio 1.png",
            url: "http://muste.radio.org.lv/shoutcast/mp4:lr1a.stream/playlist.m3u8"
        },
        {
            name: "Latvijas Radio 2",
            logo: "stations/images-europe/latvia/Latvijas Radio 2.png",
            url: "http://muste.radio.org.lv/shoutcast/mp4:lr2a.stream/playlist.m3u8"
        },
        {
            name: "Latvijas Radio 3 Klasika",
            logo: "stations/images-europe/latvia/Latvijas Radio 3 Klasika.png",
            url: "http://muste.radio.org.lv/shoutcast/mp4:lr3a.stream/playlist.m3u8"
        },
        {
            name: "Latvijas Radio 4 Домская Площадь",
            logo: "stations/images-europe/latvia/Latvijas Radio 4 Домская Площадь.png",
            url: "http://muste.radio.org.lv/shoutcast/mp4:lr4a.stream/playlist.m3u8"
        },
        {
            name: "EHR",
            logo: "stations/images-europe/latvia/EHR.png",
            url: "http://stream.europeanhitradio.com:8000/ehr.mp3"
        },
        {
            name: "EHR Superhits",
            logo: "stations/images-europe/latvia/EHR Superhits.png",
            url: "http://stream.europeanhitradio.com:8000/Stream_21.mp3"
        },
        {
            name: "Latvijas Kristīgais Radio",
            logo: "stations/images-europe/latvia/Latvijas Kristīgais Radio.png",
            url: "http://91.228.7.144:7007/;?type=http&nocache=905"
        },
        {
            name: "Radio Skonto",
            logo: "stations/images-europe/latvia/Radio Skonto.png",
            url: "http://skonto.datucentrs.eu/mp3"
        },
        {
            name: "Radio SWH",
            logo: "stations/images-europe/latvia/Radio SWH.png",
            url: "http://80.232.162.149:8000/swh96mp3"
        },
        {
            name: "Radio TEV",
            logo: "stations/images-europe/latvia/Radio TEV.png",
            url: "http://stream.radiotev.lv:8002/radiov"
        },
        {
            name: "Star FM",
            logo: "stations/images-europe/latvia/Star FM.png",
            url: "http://starfm.live.advailo.com/audio/live/playlist.m3u8"
        },
        {
            name: "TOPradio",
            logo: "stations/images-europe/latvia/TOPradio.png",
            url: "http://195.13.200.164:8000/;"
        },
    ],
    "lebanon": [
        {
            name: "Radio Liban",
            logo: "stations/images-europe/lebanon/Radio Liban.svg",
            url: "http://162.244.80.118:3160/;stream.mp3"
        },
        {
            name: "Sawt El Ghad",
            logo: "stations/images-europe/lebanon/Sawt El Ghad.png",
            url: "https://live.hibridcdn.net/ghadciel/ghadradio/playlist.m3u8"
        },
        {
            name: "صوت الحرية",
            logo: "stations/images-europe/lebanon/صوت الحرية.jpg",
            url: "http://vps1.osina.cloud:9302/;"
        },
        {
            name: "Fame FM",
            logo: "stations/images-europe/lebanon/Fame FM.png",
            url: "http://stream.famefm.com:8200/fame.mp3"
        },
        {
            name: "Radio MBS",
            logo: "stations/images-europe/lebanon/Radio MBS.png",
            url: "https://usa9.fastcast4u.com/proxy/mbs?mp=/1"
        },
        {
            name: "NRJ",
            logo: "stations/images-europe/lebanon/NRJ.png",
            url: "http://cdn.nrjaudio.fm/adwz1/lb/55219/mp3_128.mp3"
        },
        {
            name: "Radio Delta",
            logo: "stations/images-europe/lebanon/Radio Delta.png",
            url: "http://radiodelta.fm/mp3"
        },
        {
            name: "RLL",
            logo: "stations/images-europe/lebanon/RLL.png",
            url: "http://listen2.mixlr.com/ffdcedd7777d49fa8d89349d9bf3e533"
        },
        {
            name: "صـوت لبنــان",
            logo: "stations/images-europe/lebanon/صـوت لبنــان.png",
            url: "http://209.15.226.17:9054/stream"
        },
        {
            name: "Sawt El Shaeb",
            logo: "stations/images-europe/lebanon/Sawt El Shaeb.png",
            url: "http://vps1.osina.cloud:9320/;"
        },
    ],
    "liecht": [
        {
            name: "Radio Liechtenstein",
            logo: "stations/images-europe/liecht/Radio Liechtenstein.png",
            url: "http://live.radiol.li:8000/live"
        },
    ],
    "lithuania": [
        {
            name: "LRT 1",
            logo: "stations/images-europe/lithuania/LRT 1.jpg",
            url: "https://radijas.lrt.lt/radijas/lrt_radijas_cam2/playlist.m3u8"
        },
        {
            name: "LRT Klasika",
            logo: "stations/images-europe/lithuania/LRT Klasika.png",
            url: "https://radijas.lrt.lt/radijas/lrt_klasika_cam1/playlist.m3u8"
        },
        {
            name: "LRT Opus",
            logo: "stations/images-europe/lithuania/LRT Opus.png",
            url: "https://radijas.lrt.lt/radijas/lrt_opus/playlist.m3u8"
        },
        {
            name: "Lietus",
            logo: "stations/images-europe/lithuania/Lietus.jpg",
            url: "http://radio.m-1.fm:80/LIETUS"
        },
        {
            name: "M-1",
            logo: "stations/images-europe/lithuania/M-1.png",
            url: "http://radio.m-1.fm:80/m1/mp3"
        },
        {
            name: "M-1 Plius",
            logo: "stations/images-europe/lithuania/M-1 Plius.jpg",
            url: "http://radio.m-1.fm:80/M-1PLIUS"
        },
        {
            name: "PowerHitRadio",
            logo: "stations/images-europe/lithuania/PowerHitRadio.svg",
            url: "https://powerhit.ls.lv/PHR_AAC"
        },
        {
            name: "Pūkas",
            logo: "stations/images-europe/lithuania/Pūkas.jpg",
            url: "http://82.135.234.195:8000/pukas.mp3"
        },
        {
            name: "Radiocentras",
            logo: "stations/images-europe/lithuania/Radiocentras.png",
            url: "http://84.46.205.13:80/rc128.mp3"
        },
        {
            name: "Русское Радио Балтия",
            logo: "stations/images-europe/lithuania/Русское Радио Балтия.png",
            url: "http://5.20.223.18/rrb128.mp3"
        },
        {
            name: "ZIP FM",
            logo: "stations/images-europe/lithuania/ZIP FM.jpg",
            url: "http://84.46.205.13/zipfm128.mp3"
        },
    ],
    "luxembourg": [
        {
            name: "RTL Radio Lëtzebuerg",
            logo: "stations/images-europe/luxembourg/RTL Radio Lëtzebuerg.png",
            url: "http://sc-rtllive.newmedia.lu:80/;"
        },
        {
            name: "EldoRadio",
            logo: "stations/images-europe/luxembourg/EldoRadio.jpg",
            url: "http://81.92.238.33/;"
        },
    ],
    "macedonia": [
        {
            name: "МР1",
            logo: "stations/images-europe/macedonia/МР.png",
            url: "https://koenvh.nl/inc/mrt-parser.php?station=47.m3u8"
        },
        {
            name: "МР2",
            logo: "stations/images-europe/macedonia/МР.png",
            url: "https://koenvh.nl/inc/mrt-parser.php?station=48.m3u8"
        },
        {
            name: "МР3",
            logo: "stations/images-europe/macedonia/МР.png",
            url: "https://koenvh.nl/inc/mrt-parser.php?station=49.m3u8"
        },
        {
            name: "Antenna 5",
            logo: "stations/images-europe/macedonia/Antenna 5.png",
            url: "http://antenna5stream.neotel.mk:8000/live128"
        },
        {
            name: "Радио Канал 77",
            logo: "stations/images-europe/macedonia/Радио Канал 77.png",
            url: "http://kanal77.mk:8088/live.mp3"
        },
        {
            name: "Metropolis Radio",
            logo: "stations/images-europe/macedonia/Metropolis Radio.png",
            url: "http://94.23.62.189:6064/stream"
        },
    ],
    "moldova": [
        {
            name: "Radio Moldova Actualităţi",
            logo: "stations/images-europe/moldova/Radio Moldova Actualităţi.jpg",
            url: "http://radiolive.trm.md:8000/PGM1_128kb"
        },
        {
            name: "Radio Moldova Muzical",
            logo: "stations/images-europe/moldova/Radio Moldova Muzical.jpg",
            url: "http://radiolive.trm.md:8000/RM-muzical-128"
        },
        {
            name: "Radio Moldova Tineret",
            logo: "stations/images-europe/moldova/Radio Moldova Tineret.jpg",
            url: "http://radiolive.trm.md:8000/RM-tineret-128"
        },
        {
            name: "Kiss FM",
            logo: "stations/images-europe/moldova/Kiss FM.png",
            url: "http://89.28.66.205:8000/;"
        },
        {
            name: "Publika FM",
            logo: "stations/images-europe/moldova/Publika FM.jpg",
            url: "http://live.maestrofm.md:8000/publikafm"
        },
        {
            name: "Radio Micul Samaritean",
            logo: "stations/images-europe/moldova/Radio Micul Samaritean.jpg",
            url: "http://162.251.160.26:80/stream"
        },
        {
            name: "Radio Noroc",
            logo: "stations/images-europe/moldova/Radio Noroc.png",
            url: "http://live.noroc.tv:8000/radionoroc.mp3"
        },
        {
            name: "Radio Plai",
            logo: "stations/images-europe/moldova/Radio Plai.png",
            url: "http://stream.radioplai.md:8000/live"
        },
        {
            name: "Vocea Basarabiei",
            logo: "stations/images-europe/moldova/Vocea Basarabiei.png",
            url: "http://storage.voceabasarabiei.md:8000/radiovb_96kb"
        },
    ],
    "netherlands": [
        {
            name: "NPO Radio 1",
            logo: "stations/images-europe/netherlands/NPO Radio 1.png",
            url: "http://icecast.omroep.nl/radio1-bb-mp3"
        },
        {
            name: "NPO Radio 2",
            logo: "stations/images-europe/netherlands/NPO Radio 2.png",
            url: "http://icecast.omroep.nl/radio2-bb-mp3"
        },
        {
            name: "NPO 3FM",
            logo: "stations/images-europe/netherlands/NPO 3FM.png",
            url: "http://icecast.omroep.nl/3fm-bb-mp3"
        },
        {
            name: "NPO Radio 4",
            logo: "stations/images-europe/netherlands/NPO Radio 4.png",
            url: "http://icecast.omroep.nl/radio4-bb-mp3"
        },
        {
            name: "NPO Radio 5",
            logo: "stations/images-europe/netherlands/NPO Radio 5.png",
            url: "http://icecast.omroep.nl/radio5-bb-mp3"
        },
        {
            name: "NPO Soul & Jazz",
            logo: "stations/images-europe/netherlands/NPO Soul & Jazz.png",
            url: "http://icecast.omroep.nl/radio6-bb-mp3"
        },
        {
            name: "NPO SterrenNL",
            logo: "stations/images-europe/netherlands/NPO SterrenNL.png",
            url: "http://icecast.omroep.nl/radio2-sterrennl-mp3"
        },
        {
            name: "100% NL",
            logo: "stations/images-europe/netherlands/100 NL.png",
            url: "http://stream.100p.nl/100pctnl.mp3",
        },
        /*
        {
            name: "Arrow Classic Rock",
            logo: "stations/images-europe/netherlands/Arrow Classic Rock.jpg",
            url: "http://91.221.151.155:80/;"
        },
        */
        {
            name: "BNR Nieuwsradio",
            logo: "stations/images-europe/netherlands/BNR Nieuwsradio.svg",
            url: "http://icecast-bnr.cdp.triple-it.nl/bnr_aac_32_04",
        },
        {
            name: "FunX",
            logo: "stations/images-europe/netherlands/FunX.png",
            url: "http://icecast.omroep.nl/funx-bb-mp3"
        },
        {
            name: "GrootNieuwsRadio",
            logo: "stations/images-europe/netherlands/GrootNieuwsRadio.png",
            url: "http://grootnieuwsradio.streampartner.nl:8000/live"
        },
        {
            name: "Q-Music",
            logo: "stations/images-europe/netherlands/Q-Music.svg",
            url: "http://icecast-qmusic.cdp.triple-it.nl/Qmusic_nl_live_32.aac",
        },
        {
            name: "Radio 10",
            logo: "stations/images-europe/netherlands/Radio 10.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/RADIO10.mp3",
        },
        {
            name: "Radio 538",
            logo: "stations/images-europe/netherlands/Radio 538.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/RADIO538.mp3",
        },
        {
            name: "Radio 538 Top 40",
            logo: "stations/images-europe/netherlands/Radio 538.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR02.mp3",
        },
        {
            name: "Radio Maria",
            logo: "stations/images-europe/netherlands/Radio Maria.png",
            url: "http://87.233.180.73:8000/;stream.mp3"
        },
        {
            name: "Radio Veronica",
            logo: "stations/images-europe/netherlands/Radio Veronica.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/VERONICA.mp3"
        },
        {
            name: "RadioNL",
            logo: "stations/images-europe/netherlands/RadioNL.png",
            url: "http://stream.radionl.fm/radionl",
        },
        {
            name: "Sky Radio 101 FM",
            logo: "stations/images-europe/netherlands/Sky Radio 101 FM.svg",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/SKYRADIO.mp3",
        },
        {
            name: "Slam!",
            logo: "stations/images-europe/netherlands/Slam!.png",
            url: "http://stream.slam.nl/slam",
        },
        {
            name: "Sublime FM",
            logo: "stations/images-europe/netherlands/Sublime FM.png",
            url: "http://stream02.sublimefm.nl/SublimeFM_mp3",
        },
    ],
    "nireland": [
        {
            name: "BBC Radio Ulster",
            logo: "stations/images-europe/nireland/BBC Radio Ulster.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_ulster_mf_p?s=1479063391&e=1479077791&h=7456f8d848519bd3032f51100004c366"
        },
        {
            name: "U105",
            logo: "stations/images-europe/nireland/U105.png",
            url: "http://gbradio.cdn.tibus.net/U105"
        },
        {
            name: "Q Radio",
            logo: "stations/images-europe/nireland/Q Radio.png",
            url: "http://tx.sharp-stream.com/http_live.php?i=qr967.mp3&device=rpweb"
        },
    ],
    "norway": [
        {
            name: "NRK P1",
            logo: "stations/images-europe/norway/NRK P1.png",
            url: "http://lyd.nrk.no/nrk_radio_p1_ostlandssendingen_mp3_h"
        },
        {
            name: "NRK P1+",
            logo: "stations/images-europe/norway/NRK P1 plus.svg",
            url: "http://lyd.nrk.no:80/nrk_radio_p1pluss_mp3_h"
        },
        {
            name: "NRK P2",
            logo: "stations/images-europe/norway/NRK P2.png",
            url: "http://lyd.nrk.no:80/nrk_radio_p2_mp3_h"
        },
        {
            name: "NRK P3",
            logo: "stations/images-europe/norway/NRK P3.png",
            url: "http://lyd.nrk.no:80/nrk_radio_p3_mp3_h"
        },
        {
            name: "NRK Klassisk",
            logo: "stations/images-europe/norway/NRK Klassisk.png",
            url: "http://lyd.nrk.no:80/nrk_radio_klassisk_mp3_h"
        },
        {
            name: "NRK Alltid Nyheter",
            logo: "stations/images-europe/norway/NRK Alltid Nyheter.png",
            url: "http://lyd.nrk.no:80/nrk_radio_alltid_nyheter_mp3_h"
        },
        {
            name: "NRK Folkemusikk",
            logo: "stations/images-europe/norway/NRK Folkemusikk.svg",
            url: "http://lyd.nrk.no:80/nrk_radio_folkemusikk_mp3_h"
        },
        {
            name: "NRK Sámi Radio",
            logo: "stations/images-europe/norway/NRK Sámi Radio.png",
            url: "http://lyd.nrk.no:80/nrk_radio_sami_mp3_h"
        },
        {
            name: "NRK Jazz",
            logo: "stations/images-europe/norway/NRK Jazz.svg",
            url: "http://lyd.nrk.no:80/nrk_radio_jazz_mp3_h"
        },
        {
            name: "NRK P13",
            logo: "stations/images-europe/norway/NRK P13.svg",
            url: "http://lyd.nrk.no:80/nrk_radio_p13_mp3_h"
        },
        {
            name: "NRK mP3",
            logo: "stations/images-europe/norway/NRK mP3.png",
            url: "http://lyd.nrk.no:80/nrk_radio_mp3_mp3_m"
        },
        {
            name: "P4",
            logo: "stations/images-europe/norway/P4.png",
            url: "https://p4.p4groupaudio.com/P04_MM"
        },
        {
            name: "P5 Hits",
            logo: "stations/images-europe/norway/P5 Hits.png",
            url: "https://p5.p4groupaudio.com/P05_MM"
        },
        {
            name: "P6 Rock",
            logo: "stations/images-europe/norway/P6 Rock.png",
            url: "https://p6.p4groupaudio.com/P06_MM"
        },
        {
            name: "P7 Klem",
            logo: "stations/images-europe/norway/P7 Klem.png",
            url: "https://p7.p4groupaudio.com/P07_MM"
        },
        {
            name: "P8 Pop",
            logo: "stations/images-europe/norway/P8 Pop.png",
            url: "https://p8.p4groupaudio.com/P08_MM"
        },
        {
            name: "P9 Retro",
            logo: "stations/images-europe/norway/P9 Retro.png",
            url: "https://p9.p4groupaudio.com/P09_MM"
        },
        {
            name: "P10 Country",
            logo: "stations/images-europe/norway/P10 Country.png",
            url: "https://p10.p4groupaudio.com/P10_MM"
        },
        {
            name: "NRJ",
            logo: "stations/images-europe/norway/NRJ.svg",
            url: "https://nrj.p4groupaudio.com/NRJ_MM"
        },
        {
            name: "Norsk pop",
            logo: "stations/images-europe/norway/Norsk pop.jpg",
            url: "http://edge-bauerno-01-cr.sharp-stream.com/norskpop_no_mp3"
        },
        {
            name: "Radio Norge",
            logo: "stations/images-europe/norway/Radio Norge.png",
            url: "http://edge-bauerno-01-cr.sharp-stream.com/radionorge_no_mp3"
        },
        {
            name: "Radio Vinyl",
            logo: "stations/images-europe/norway/Radio Vinyl.jpg",
            url: "http://edge-bauerno-03-gos2.sharp-stream.com/vinyl_no_mp3"
        },
        {
            name: "Topp 40",
            logo: "stations/images-europe/norway/Topp 40.jpg",
            url: "https://live-bauerno.sharp-stream.com/top40_no_mp3"
        },
    ],
    "poland": [
        {
            name: "Polskie Radio 1",
            logo: "stations/images-europe/poland/Polskie Radio 1.png",
            url: "http://stream11.polskieradio.pl/pr1/pr1.sdp/playlist.m3u8"
        },
        {
            name: "Polskie Radio 2",
            logo: "stations/images-europe/poland/Polskie Radio 2.png",
            url: "http://stream12.polskieradio.pl/pr2/pr2.sdp/playlist.m3u8"
        },
        {
            name: "Polskie Radio 3",
            logo: "stations/images-europe/poland/Polskie Radio 3.png",
            url: "http://stream13.polskieradio.pl/pr3/pr3.sdp/playlist.m3u8"
        },
        {
            name: "Polskie Radio 4",
            logo: "stations/images-europe/poland/Polskie Radio 4.svg",
            url: "http://stream14.polskieradio.pl/pr4/pr4.sdp/playlist.m3u8"
        },
        {
            name: "Polskie Radio 24",
            logo: "stations/images-europe/poland/Polskie Radio 24.jpg",
            url: "http://stream15.polskieradio.pl/pr24/pr24.sdp/playlist.m3u8"
        },
        {
            name: "Antyradio",
            logo: "stations/images-europe/poland/Antyradio.png",
            url: "http://n-4-2.dcs.redcdn.pl/sc/o2/Eurozet/live/antyradio.livx?audio=5"
        },
        {
            name: "Meloradio",
            logo: "stations/images-europe/poland/Meloradio.png",
            url: "https://r.dcs.redcdn.pl/sc/o2/Eurozet/live/meloradio.livx?audio=5"
        },
        /*
        {
            name: "Planeta FM",
            logo: "stations/images-europe/poland/Planeta FM.png",
            url: "http://pla-net-01.cdn.eurozet.pl:8700/;"
        },
        */
        {
            name: "Radio ESKA",
            logo: "stations/images-europe/poland/Radio Eska.png",
            url: "http://pldm.ml/radio?url=https://www.eskago.pl/radio/eska-warszawa"
        },
        {
            name: "Radio Maryja",
            logo: "stations/images-europe/poland/Radio Maryja.png",
            url: "https://usa12.fastcast4u.com/proxy/isnesllc?mp=/1"
        },
        {
            name: "Radio Plus",
            logo: "stations/images-europe/poland/Radio Plus.jpg",
            url: "http://pldm.ml/radio?url=https://www.eskago.pl/radio/radio-plus"
        },
        {
            name: "Radio WAWA",
            logo: "stations/images-europe/poland/Radio WAWA.png",
            url: "http://pldm.ml/radio?url=https://www.eskago.pl/radio/wawa"
        },
        {
            name: "Radio ZET",
            logo: "stations/images-europe/poland/Radio Zet.svg",
            url: "http://redir.atmcdn.pl/sc/o2/Eurozet/live/audio.livx?audio=5"
        },
        /*
        {
            name: "Radio ZET Gold",
            logo: "stations/images-europe/poland/Radio ZET Gold.png",
            url: "http://zgl.cdn.eurozet.pl/ZGLHIT.mp3"
        },
        */
        {
            name: "Radio Złote Przeboje",
            logo: "stations/images-europe/poland/Radio Złote Przeboje.png",
            url: "http://lodz.radio.pionier.net.pl:8000/pl/tuba9-1.mp3"
        },
        {
            name: "RMF FM",
            logo: "stations/images-europe/poland/RMF FM.svg",
            url: "http://31.192.216.10/RMFFM48"
        },
        {
            name: "RMF MAXXX",
            logo: "stations/images-europe/poland/RMF MAXXX.png",
            url: "http://31.192.216.8:8000/rmf_maxxx"
        },
        {
            name: "RMF Classic",
            logo: "stations/images-europe/poland/RMF Classic.png",
            url: "http://31.192.216.8/RMFCLASSIC48"
        },
        {
            name: "Tok FM",
            logo: "stations/images-europe/poland/Tok FM.png",
            url: "http://wroclaw.radio.pionier.net.pl:8000/pl/tuba10-1.mp3"
        },
        {
            name: "VOX FM",
            logo: "stations/images-europe/poland/Radio VOX FM.png",
            url: "http://pldm.ml/radio?url=https://www.eskago.pl/radio/vox-fm"
        },
    ],
    "portugal": [
        {
            name: "RTP Antena 1",
            logo: "stations/images-europe/portugal/RTP Antena 1.png",
            url: "https://streaming-live.rtp.pt/liveradio/antena180a/playlist.m3u8"
        },
        {
            name: "RTP Antena 2",
            logo: "stations/images-europe/portugal/RTP Antena 2.png",
            url: "https://streaming-live.rtp.pt/liveradio/antena280a/playlist.m3u8"
        },
        {
            name: "RTP Antena 3",
            logo: "stations/images-europe/portugal/RTP Antena 3.png",
            url: "https://streaming-live.rtp.pt/liveradio/antena380a/playlist.m3u8"
        },
        {
            name: "M80 Rádio",
            logo: "stations/images-europe/portugal/M80 Rádio.svg",
            url: "http://mcrwowza5.mcr.iol.pt/m80/ngrp:m80.stream_all/playlist.m3u8?rnd=22623.10219134147"
        },
        {
            name: "Rádio Comercial",
            logo: "stations/images-europe/portugal/Rádio Comercial.png",
            url: "http://mcrwowza3.mcr.iol.pt/comercial/ngrp:comercial.stream_all/playlist.m3u8?rnd=36276.07556961788"
        },
        {
            name: "Rádio Renascença",
            logo: "stations/images-europe/portugal/Rádio Renascença.png",
            url: "https://19573.live.streamtheworld.com/RADIO_RENASCENCAAAC.aac?tdsdk=js-2.9&pname=tdwidgets&pversion=2.9&banners=none"
        },
        {
            name: "RFM",
            logo: "stations/images-europe/portugal/RFM.png",
            url: "https://19573.live.streamtheworld.com/RFMAAC.aac?tdsdk=js-2.9&pname=tdwidgets&pversion=2.9&banners=none"
        },
        {
            name: "TSF Rádio Notícias",
            logo: "stations/images-europe/portugal/TSF Rádio Notícias.png",
            url: "http://tsfdirecto.tsf.pt/tsfdirecto.mp3"
        },
    ],
    "romania": [
        {
            name: "SRR Radio România Actualitati",
            logo: "stations/images-europe/romania/SRR Radio România Actualitati.png",
            url: "http://stream2.srr.ro:8004/;"
        },
        {
            name: "SRR Radio România Cultural",
            logo: "stations/images-europe/romania/SRR Radio România Cultural.png",
            url: "http://stream2.srr.ro:8012/;"
        },
        {
            name: "SRR Radio România Muzical",
            logo: "stations/images-europe/romania/SRR Radio România Muzical.png",
            url: "http://stream2.srr.ro:8022/;"
        },
        {
            name: "DigiFM",
            logo: "stations/images-europe/romania/DigiFM.svg",
            url: "http://edge76.rdsnet.ro:84/digifm/digifm.mp3"
        },
        {
            name: "Europa FM",
            logo: "stations/images-europe/romania/Europa FM.png",
            url: "http://astreaming.europafm.ro:8000/europafm_aacp48k"
        },
        {
            name: "Kiss FM",
            logo: "stations/images-europe/romania/Kiss FM.png",
            url: "https://live.kissfm.ro/kissfm.aacp"
        },
        {
            name: "Național FM",
            logo: "stations/images-europe/romania/Național FM.png",
            url: "http://live3.nationalfm.ro:8001/;stream/1"
        },
        {
            name: "ProFM",
            logo: "stations/images-europe/romania/ProFM.png",
            url: "http://edge126.rdsnet.ro:84/profm/profm.mp3"
        },
        {
            name: "Radio Trinitas",
            logo: "stations/images-europe/romania/Radio Trinitas.png",
            url: "http://live.radiotrinitas.ro:8000/;"
        },
        {
            name: "Radio Zu",
            logo: "stations/images-europe/romania/Radio Zu.png",
            url: "https://live2ro.antenaplay.ro/radiozu/radiozu-48000.m3u8"
        },
        {
            name: "Virgin Radio",
            logo: "stations/images-europe/romania/Virgin Radio.png",
            url: "http://astreaming.virginradio.ro:8000/virgin_aacp_64k"
        },
    ],
    "russia": [
        {
            name: "Радио России",
            logo: "stations/images-europe/russia/Радио России.png",
            url: "http://icecast.vgtrk.cdnvideo.ru/rrzonam_mp3_192kbps"
        },
        {
            name: "Радио Маяк",
            logo: "stations/images-europe/russia/Радио Маяк.png",
            url: "http://icecast.vgtrk.cdnvideo.ru/mayakfm_mp3_192kbps"
        },
        {
            name: "Радио Культура",
            logo: "stations/images-europe/russia/Радио Культура.png",
            url: "http://icecast.vgtrk.cdnvideo.ru/kulturafm_mp3_192kbps"
        },
        {
            name: "Авторадио",
            logo: "stations/images-europe/russia/Авторадио.png",
            url: "http://pub0101.101.ru:8000/stream/reg/mp3/128/region_avto_tz_0"
        },
        {
            name: "Детское Радио",
            logo: "stations/images-europe/russia/Детское Радио.png",
            url: "http://ic2.101.ru:8000/v14_1?setst=-1&tok=n36EJDQFgZeSYjaJUSga78J%2BnhWdbL9gr794zXkRPTu1b8AQJHrhzg%3D%3D"
        },
        {
            name: "Дорожное радио",
            logo: "stations/images-europe/russia/Дорожное радио.png",
            url: "http://dorognoe.hostingradio.ru:8000/dorognoe"
        },
        {
            name: "Европа Плюс",
            logo: "stations/images-europe/russia/Европа Плюс.png",
            url: "http://ep128server.streamr.ru:8030/ep128"
        },
        {
            name: "Наше Радио",
            logo: "stations/images-europe/russia/Наше Радио.gif",
            url: "http://nashe1.hostingradio.ru/nashespb128.mp3"
        },
        {
            name: "Новое Радио",
            logo: "stations/images-europe/russia/Новое Радио.png",
            url: "http://emgspb.hostingradio.ru/novoespb128.mp3"
        },
        {
            name: "Комеди Радио",
            logo: "stations/images-europe/russia/Комеди радио.png",
            url: "http://ic3.101.ru:8000/a202?userid=0&setst=825m68ucig22pol2p8lkrd9fi5"
        },
        /*
        {
            name: "Радио Ваня",
            logo: "stations/images-europe/russia/Радио Ваня.png",
            url: "https://icecast-radiovanya.cdnvideo.ru/radiovanya"
        },
        */
        /*
        {
            name: "Радио Дача",
            logo: "stations/images-europe/russia/Радио Дача.png",
            url: "http://stream.radiodacha.ru/14_dacha_56?type=.aac&UID=4C8B9B2415CF97BEB64E0A5DF985DD3F"
        },
         */
        {
            name: "Радио Maximum",
            logo: "stations/images-europe/russia/Радио Maximum.jpg",
            url: "https://maximum.hostingradio.ru/maximum96.aacp"
        },
        {
            name: "Радио Родных Дорог",
            logo: "stations/images-europe/russia/Радио Родных Дорог.svg",
            url: "http://stream1.radiord.ru:8000/live96.aac"
        },
        {
            name: "Радио Рекорд",
            logo: "stations/images-europe/russia/Радио Рекорд.png",
            url: "http://air.radiorecord.ru:805/rr_320"
        },
        {
            name: "Радио Шансон",
            logo: "stations/images-europe/russia/Радио Шансон.png",
            url: "http://chanson-video.hostingradio.ru:8080/hls/chansonabr/live_hiq/index.m3u8"
        },
        {
            name: "Радио DFM",
            logo: "stations/images-europe/russia/Радио DFM.svg",
            url: "https://dfmvideo.gcdn.co/streams/1410_651/playlist.m3u8"
        },
        {
            name: "Радио ENERGY",
            logo: "stations/images-europe/russia/Радио ENERGY.png",
            url: "http://ic6.101.ru:8000/stream/air/aac/64/99"
        },
        {
            name: "Ретро FM",
            logo: "stations/images-europe/russia/Ретро FM.png",
            url: "http://hls-01-retro.emgsound.ru/12/playlist.m3u8"
        },
        {
            name: "Русское Радио",
            logo: "stations/images-europe/russia/Русское Радио.png",
            url: "https://rusradio.hostingradio.ru/rusradio96.aacp"
        },
        {
            name: "Эхо Москвы",
            logo: "stations/images-europe/russia/Эхо Москвы.svg",
            url: "http://ice912.echo.msk.ru:9120/stream"
        },
        {
            name: "Юмор FM",
            logo: "stations/images-europe/russia/Юмор FM.png",
            url: "http://ic3.101.ru:8000/v5_1"
        },
    ],
    "saudia": [
        {
            name: "إذاعة الرياض",
            logo: "stations/images-europe/saudi/إذاعة الرياض.png",
            url: "http://87.98.130.255:8234/stream"
        },
        {
            name: "إذاعة جدة",
            logo: "stations/images-europe/saudi/إذاعة جدة.png",
            url: "http://87.98.130.255:8509/stream"
        },
        {
            name: "إذاعة القران الكريم",
            logo: "stations/images-europe/saudi/إذاعة القران الكريم.png",
            url: "http://live2.badrshfaqah.sa:8027/stream"
        },
        {
            name: "Saudi Radio",
            logo: "stations/images-europe/saudi/Saudi Radio.png",
            url: "http://live2.badrshfaqah.sa:8021/stream"
        },
        {
            name: "اذاعة UFM",
            logo: "stations/images-europe/saudi/اذاعة UFM.png",
            url: "http://104.200.150.186:8000/;stream.mp3"
        },
    ],
    "scotland": [
        {
            name: "BBC Radio Scotland",
            logo: "stations/images-europe/scotland/BBC Radio Scotland.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_scotlandfm_mf_p"
        },
        {
            name: "BBC Radio nan Gàidheal",
            logo: "stations/images-europe/scotland/BBC Radio nan Gàidheal.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_nangaidheal_mf_p"
        },
    ],
    "serbia": [
        {
            name: "Радио Београд 1",
            logo: "stations/images-europe/serbia/Радио Београд 1.png",
            url: "https://rtsradio-live.morescreens.com/RTS_2_001/playlist.m3u8"
        },
        {
            name: "Радио Београд 2",
            logo: "stations/images-europe/serbia/Радио Београд 2.png",
            url: "https://rtsradio-live.morescreens.com/RTS_2_002/playlist.m3u8"
        },
        {
            name: "Радио Београд 202",
            logo: "stations/images-europe/serbia/Радио Београд 202.png",
            url: "https://rtsradio-live.morescreens.com/RTS_2_004/playlist.m3u8"
        },
        {
            name: "Hit FM",
            logo: "stations/images-europe/serbia/Hit FM.png",
            url: "http://streaming.hitfm.rs:8000/hit"
        },
        {
            name: "Play Radio",
            logo: "stations/images-europe/serbia/Play Radio.png",
            url: "http://stream.playradio.rs:8001/play.mp3"
        },
        {
            name: "Radio S1",
            logo: "stations/images-europe/serbia/Radio S1.png",
            url: "http://edge-rs-01.maksnet.tv/asmedia/radios/playlist.m3u8"
        },
        {
            name: "Radio S2",
            logo: "stations/images-europe/serbia/Radio S2.png",
            url: "http://edge-rs-01.maksnet.tv/asmedia/index/playlist.m3u8"
        },
    ],
    "slovakia": [
        {
            name: "Rádio Slovensko",
            logo: "stations/images-europe/slovakia/Rádio Slovensko.png",
            url: "http://live.slovakradio.sk:8000/Slovensko_256.mp3"
        },
        {
            name: "Rádio Devin",
            logo: "stations/images-europe/slovakia/Rádio Devin.png",
            url: "http://live.slovakradio.sk:8000/Devin_256.mp3"
        },
        {
            name: "Rádio_FM",
            logo: "stations/images-europe/slovakia/Rádio_FM.png",
            url: "http://live.slovakradio.sk:8000/FM_256.mp3"
        },
        {
            name: "Europa 2",
            logo: "stations/images-europe/slovakia/Europa 2.png",
            url: "https://stream.radioservices.sk/europa2.mp3"
        },
        {
            name: "Fun rádio",
            logo: "stations/images-europe/slovakia/Fun rádio.png",
            url: "http://stream.funradio.sk:8000/fun128.mp3"
        },
        {
            name: "Rádio Anténa Rock",
            logo: "stations/images-europe/slovakia/Rádio Anténa Rock.png",
            url: "http://stream.antenarock.sk/antena-hi.mp3"
        },
        {
            name: "Rádio Expres",
            logo: "stations/images-europe/slovakia/Rádio Expres.png",
            url: "http://85.248.7.162:8000/96.mp3"
        },
        {
            name: "Rádio Jemné",
            logo: "stations/images-europe/slovakia/Rádio Jemné.jpg",
            url: "http://stream.jemne.sk/jemne-hi.mp3"
        },
        {
            name: "Rádio Vlna",
            logo: "stations/images-europe/slovakia/Rádio Vlna.jpg",
            url: "http://stream.radiovlna.sk/vlna-hi.mp3"
        },
    ],
    "slovenia": [
        {
            name: "Radio Slovenija A1",
            logo: "stations/images-europe/slovenia/Radio Slovenija A1.png",
            url: "http://mp3.rtvslo.si:80/ra1"
        },
        {
            name: "Radio Slovenija Val202",
            logo: "stations/images-europe/slovenia/Radio Slovenija Val202.png",
            url: "http://mp3.rtvslo.si:80/val202"
        },
        {
            name: "Radio Slovenija Ars",
            logo: "stations/images-europe/slovenia/Radio Slovenija Ars.png",
            url: "http://mp3.rtvslo.si:80/ars"
        },
        {
            name: "Radio SI",
            logo: "stations/images-europe/slovenia/Radio SI.jpg",
            url: "http://mp3.rtvslo.si/rsi"
        },
        {
            name: "Hitradio Center",
            logo: "stations/images-europe/slovenia/Hitradio Center.svg",
            url: "http://stream2.radiocenter.si:8000/;"
        },
        {
            name: "Radio 1",
            logo: "stations/images-europe/slovenia/Radio 1.png",
            url: "http://live.radio.si/Radio1"
        },
        {
            name: "Radio Aktual",
            logo: "stations/images-europe/slovenia/Radio Aktual.png",
            url: "http://stream.radioaktual.si/Aktual"
        },
        {
            name: "Radio City",
            logo: "stations/images-europe/slovenia/Radio City.png",
            url: "http://82.149.22.34:8000/CityMp364mono.mp3"
        },
        {
            name: "Radio Ognjišče",
            logo: "stations/images-europe/slovenia/Radio Ognjišče.jpg",
            url: "http://real.ognjisce.si:8000/ognjisce.mp3"
        },
    ],
    "spain": [
        {
            name: "RNE Radio Nacional",
            logo: "stations/images-europe/spain/RNE Radio Nacional.png",
            url: "http://hlsliveamdgl0-lh.akamaihd.net/i/rnerne_1@586398/master.m3u8"
        },
        {
            name: "RNE Radio Clásica",
            logo: "stations/images-europe/spain/RNE Radio Clásica.png",
            url: "http://hlsliveamdgl0-lh.akamaihd.net/i/rnerc_1@586399/master.m3u8"
        },
        {
            name: "RNE Radio 3",
            logo: "stations/images-europe/spain/RNE Radio 3.png",
            url: "http://hlsliveamdgl0-lh.akamaihd.net/i/rnerne3_1@793568/master.m3u8"
        },
        {
            name: "Cadena 100",
            logo: "stations/images-europe/spain/Cadena 100.png",
            url: "http://cadena100.cope.stream.flumotion.com/cope/cadena100/playlist.m3u8"
        },
        {
            name: "Cadena Dial",
            logo: "stations/images-europe/spain/Cadena Dial.jpg",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/CADENADIAL.mp3"
        },
        {
            name: "Cadena Ser",
            logo: "stations/images-europe/spain/Cadena Ser.jpg",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/CADENASER.mp3"
        },
        {
            name: "Cope",
            logo: "stations/images-europe/spain/Cope.png",
            url: "https://flucast-b04-06.flumotion.com/cope/madrid.mp3"
        },
        {
            name: "Europa FM",
            logo: "stations/images-europe/spain/Europa FM.png",
            url: "http://212.129.60.86:9968/;"
        },
        /*
        {
            name: "Loca FM",
            logo: "stations/images-europe/spain/Loca FM.png",
            url: "http://audio-online.net:2300/live"
        },
        */
        {
            name: "Los 40 Principales",
            logo: "stations/images-europe/spain/Los 40 Principales.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/LOS40.mp3"
        },
        {
            name: "M80 Radio",
            logo: "stations/images-europe/spain/M80 Radio.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/M80RADIO.mp3"
        },
        {
            name: "Maxima FM",
            logo: "stations/images-europe/spain/Maxima FM.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/MAXIMAFM.mp3"
        },
        {
            name: "Onda Cero",
            logo: "stations/images-europe/spain/Onda Cero.png",
            url: "http://icecast-streaming.nice264.com/ondacero"
        },
        {
            name: "Radio María",
            logo: "stations/images-europe/spain/Radio María.png",
            url: "http://dreamsiteradiocp.com:8060/;stream.mp3"
        },
        {
            name: "Rock FM",
            logo: "stations/images-europe/spain/Rock FM.jpg",
            url: "http://rockfm.cope.stream.flumotion.com/cope/rockfm/playlist.m3u8"
        },
    ],
    "sweden": [
        {
            name: "Sveriges Radio P1",
            logo: "stations/images-europe/sweden/Sveriges Radio P1.png",
            url: "http://http-live.sr.se/p1-mp3-192"
        },
        {
            name: "Sveriges Radio P2",
            logo: "stations/images-europe/sweden/Sveriges Radio P2.png",
            url: "http://http-live.sr.se/p2-mp3-192"
        },
        {
            name: "Sveriges Radio P3",
            logo: "stations/images-europe/sweden/Sveriges Radio P3.png",
            url: "http://http-live.sr.se/p3-mp3-192"
        },
        {
            name: "Sveriges Radio P4 (Stockholm)",
            logo: "stations/images-europe/sweden/Sveriges Radio P4.png",
            url: "http://http-live.sr.se/p4stockholm-mp3-192"
        },
        {
            name: "Bandit Rock",
            logo: "stations/images-europe/sweden/Bandit Rock.png",
            url: "http://fm02-ice.stream.khz.se/fm02_mp3?platform=web&aw_0_1st.playerid=mtgradio-web&aw_0_1st.skey=1585237179"
        },
        {
            name: "Lugna Favoriter",
            logo: "stations/images-europe/sweden/Lugna Favoriter.png",
            url: "https://fm03-ice.stream.khz.se/fm03_mp3?platform=web&aw_0_1st.playerid=mtgradio-web&aw_0_1st.skey=1586011230"
        },
        {
            name: "Mix Megapol",
            logo: "stations/images-europe/sweden/Mix Megapol.png",
            url: "https://live-bauerse-fm.sharp-stream.com/mixmegapol_instream_se_aacp?ua=WEB&aw_0_1st.playerid=SBS_RP_WEB&aw_0_1st.skey=1531145787&companionsAds=true&listenerId=4809db15-af69-411c-821c-538ec4247a0b"
        },
        {
            name: "NRJ",
            logo: "stations/images-europe/sweden/NRJ.png",
            url: "https://live-bauerse-fm.sharp-stream.com/nrj_instreamtest_se_aacp?ua=WEB&aw_0_1st.playerid=SBS_RP_WEB&aw_0_1st.skey=1531145855&companionsAds=true&listenerId=4809db15-af69-411c-821c-538ec4247a0b"
        },
        {
            name: "Rix FM",
            logo: "stations/images-europe/sweden/Rix FM.png",
            url: "http://fm01-icecast.mtg-r.net/fm01_mp3?platform=web"
        },
        {
            name: "Rockklassiker",
            logo: "stations/images-europe/sweden/Rockklassiker.jpg",
            url: "https://live-bauerse-fm.sharp-stream.com/rockklassiker_instream_se_aacp?ua=WEB&aw_0_1st.playerid=SBS_RP_WEB&aw_0_1st.skey=1531145879&companionsAds=true&listenerId=4809db15-af69-411c-821c-538ec4247a0b"
        },
        {
            name: "Star FM",
            logo: "stations/images-europe/sweden/Star FM.png",
            url: "https://starfm.babahhcdn.com/starfm"
        },
        {
            name: "Vinyl FM",
            logo: "stations/images-europe/sweden/Vinyl FM.png",
            url: "https://live-bauerse-fm.sharp-stream.com/vinylfm_instream_se_aacp?ua=WEB&aw_0_1st.playerid=SBS_RP_WEB&aw_0_1st.skey=1531145897&companionsAds=true&listenerId=4809db15-af69-411c-821c-538ec4247a0b"
        },
    ],
    "switzerland-de": [
        {
            name: "Radio SRF 1",
            logo: "stations/images-europe/switzerland-de/Radio SRF 1.png",
            url: "http://stream.srg-ssr.ch/m/drs1/mp3_128"
        },
        {
            name: "Radio SRF 2",
            logo: "stations/images-europe/switzerland-de/Radio SRF 2.png",
            url: "http://stream.srg-ssr.ch/m/drs2/mp3_128"
        },
        {
            name: "Radio SRF 3",
            logo: "stations/images-europe/switzerland-de/Radio SRF 3.png",
            url: "http://stream.srg-ssr.ch/m/drs3/mp3_128"
        },
        {
            name: "Radio SRF 4",
            logo: "stations/images-europe/switzerland-de/Radio SRF 4.png",
            url: "http://stream.srg-ssr.ch/m/drs4news/mp3_128"
        },
        {
            name: "Energy",
            logo: "stations/images-europe/switzerland-de/Energy.svg",
            url: "http://energybern.ice.infomaniak.ch:80/energybern-high"
        },
        {
            name: "FM1",
            logo: "stations/images-europe/switzerland-de/FM1.png",
            url: "http://fm1sud.ice.infomaniak.ch/fm1sud.mp3"
        },
        {
            name: "Radio Pilatus",
            logo: "stations/images-europe/switzerland-de/Radio Pilatus.png",
            url: "http://radiopilatus.ice.infomaniak.ch/pilatus192.mp3"
        },
        {
            name: "Radio TOP",
            logo: "stations/images-europe/switzerland-de/Radio TOP.png",
            url: "http://icecast.radiotop.ch:8000/radiotop_128"
        },
        {
            name: "Radio Zürisee",
            logo: "stations/images-europe/switzerland-de/Radio Zürisee.png",
            url: "http://radio.netstream.ch:80/radiozuerisee128k"
        },
    ],
    "switzerland-fr": [
        {
            name: "RSR La Première",
            logo: "stations/images-europe/switzerland-fr/RSR La Première.png",
            url: "http://stream.srg-ssr.ch/m/la-1ere/mp3_128"
        },
        {
            name: "RSR Espace 2",
            logo: "stations/images-europe/switzerland-fr/RSR Espace 2.png",
            url: "http://stream.srg-ssr.ch/m/espace-2/mp3_128"
        },
        {
            name: "RSR Couleur 3",
            logo: "stations/images-europe/switzerland-fr/RSR Couleur 3.png",
            url: "http://stream.srg-ssr.ch/m/couleur3/mp3_128"
        },
        {
            name: "RSR Option Musique",
            logo: "stations/images-europe/switzerland-fr/RSR Option Musique.png",
            url: "http://stream.srg-ssr.ch/m/option-musique/mp3_128"
        },
        {
            name: "Rouge FM",
            logo: "stations/images-europe/switzerland-fr/Rouge FM.png",
            url: "http://rougefm.ice.infomaniak.ch/rougefm-high.mp3"
        },
    ],
    "switzerland-it": [
        {
            name: "RSI Rete Uno",
            logo: "stations/images-europe/switzerland-it/RSI Rete Uno.svg",
            url: "http://lsaplus.swisstxt.ch/audio/reteuno_96.stream/playlist.m3u8"
        },
        {
            name: "RSI Rete Due",
            logo: "stations/images-europe/switzerland-it/RSI Rete Due.svg",
            url: "http://lsaplus.swisstxt.ch/audio/retedue_96.stream/playlist.m3u8"
        },
        {
            name: "RSI Rete Tre",
            logo: "stations/images-europe/switzerland-it/RSI Rete Tre.svg",
            url: "http://lsaplus.swisstxt.ch/audio/retetre_96.stream/playlist.m3u8"
        },
        {
            name: "Radio Fiume Ticino",
            logo: "stations/images-europe/switzerland-it/Radio Fiume Ticino.jpg",
            url: "http://178.209.40.106:8002/stream"
        },
    ],
    "syria": [
        {
            name: "اذاعة دمشق",
            logo: "stations/images-europe/syria/اذاعة دمشق.png",
            url: "http://radioliveb.rtv.gov.sy:8002/RadioDimshq"
        },
        {
            name: "صوت الشباب",
            logo: "stations/images-europe/syria/صوت الشباب.png",
            url: "http://radioliveb.rtv.gov.sy:8002/RadioShabab"
        },
        {
            name: "راديو الآن",
            logo: "stations/images-europe/syria/راديو الآن.svg",
            url: "https://streamingcdn.alaan.tv/fm/fm/playlist.m3u8"
        },
        {
            name: "Ninar FM",
            logo: "stations/images-europe/syria/Ninar FM.png",
            url: "http://ninarfm.grtvstream.com:8896/;"
        },
    ],
    "tunis": [
        {
            name: "Mosaïque FM",
            logo: "stations/images-europe/tunis/Mosaïque FM.jpg",
            url: "https://radio.mosaiquefm.net/mosalive"
        },
        {
            name: "RTT Radio Tunis Chaîne Internationale",
            logo: "stations/images-europe/tunis/RTT Radio Tunis Chaîne Internationale.jpg",
            url: "http://rtstream.tanitweb.com/jeunes"
        },
        {
            name: "Radio iFM",
            logo: "stations/images-europe/tunis/Radio iFM.jpg",
            url: "http://www.ifm.tn:8000/direct"
        },
        {
            name: "RTT Radio Nationale",
            logo: "stations/images-europe/tunis/RTT Radio Nationale.jpg",
            url: "http://rtstream.tanitweb.com/nationale"
        }
    ],
    "turkey": [
        {
            name: "TRT Radyo 1",
            logo: "stations/images-europe/turkey/TRT Radyo 1.png",
            url: "http://trtcanlifm-lh.akamaihd.net/i/RADYO1_1@182345/master.m3u8"
        },
        {
            name: "TRT FM",
            logo: "stations/images-europe/turkey/TRT FM.png",
            url: "http://trtcanlifm-lh.akamaihd.net/i/TRTFM_1@181846/master.m3u8"
        },
        {
            name: "TRT Türkü",
            logo: "stations/images-europe/turkey/TRT Türkü.png",
            url: "http://trtcanlifm-lh.akamaihd.net/i/TRTTURKU_1@182246/master.m3u8"
        },
        {
            name: "Best FM",
            logo: "stations/images-europe/turkey/Best FM.png",
            url: "http://46.20.7.125:80/;"
        },
        /*
        {
            name: "Bloomberg HT Radyo",
            logo: "stations/images-europe/turkey/Bloomberg HT Radyo.jpg",
            url: "https://cors-anywhere.herokuapp.com/http://mn-l.mncdn.com/bloomberghtradyo/bloomberghtradyo/playlist.m3u8"
        },
        */
        {
            name: "Kral FM",
            logo: "stations/images-europe/turkey/Kral FM.jpg",
            url: "http://46.20.3.204:80/;"
        },
        {
            name: "Metro FM",
            logo: "stations/images-europe/turkey/Metro FM.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/METRO_FM.mp3"
        },
        {
            name: "NTV Radyo",
            logo: "stations/images-europe/turkey/NTV Radyo.png",
            url: "http://46.20.3.207:80/;"
        },
        {
            name: "Radyo 7 Nostalji",
            logo: "stations/images-europe/turkey/Radyo 7 Nostalji.png",
            url: "http://37.247.98.8/stream/25//listen.pls"
        },
        {
            name: "Radyo Fenomen",
            logo: "stations/images-europe/turkey/Radyo Fenomen.png",
            url: "https://listen.radyofenomen.com/fenomen/128/icecast.audio"
        },
        {
            name: "Show Radyo",
            logo: "stations/images-europe/turkey/Show Radyo.jpg",
            url: "http://46.20.3.234:80/;"
        },
        {
            name: "Süper FM",
            logo: "stations/images-europe/turkey/Süper FM.jpg",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/SUPER_FM.mp3"
        },
    ],
    "uk": [
        {
            name: "BBC Radio 1",
            logo: "stations/images-europe/uk/BBC Radio 1.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_p"
        },
        {
            name: "BBC Radio 1Xtra",
            logo: "stations/images-europe/uk/BBC Radio 1Xtra.svg",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1xtra_mf_p"
        },
        {
            name: "BBC Radio 2",
            logo: "stations/images-europe/uk/BBC Radio 2.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio2_mf_p"
        },
        {
            name: "BBC Radio 3",
            logo: "stations/images-europe/uk/BBC Radio 3.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio3_mf_p"
        },
        {
            name: "BBC Radio 4",
            logo: "stations/images-europe/uk/BBC Radio 4.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio4fm_mf_p"
        },
        {
            name: "BBC Radio 4 Extra",
            logo: "stations/images-europe/uk/BBC Radio 4 Extra.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio4extra_mf_p"
        },
        {
            name: "BBC Radio 5",
            logo: "stations/images-europe/uk/BBC Radio 5.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio5live_mf_p"
        },
        {
            name: "BBC Radio 6",
            logo: "stations/images-europe/uk/BBC Radio 6.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_6music_mf_p"
        },
        {
            name: "Absolute Radio",
            logo: "stations/images-europe/uk/Absolute Radio.png",
            url: "https://ais.absoluteradio.co.uk/absoluteradiomed.aac"
        },
        {
            name: "Capital FM",
            logo: "stations/images-europe/uk/Capital FM.png",
            url: "http://media-the.musicradio.com:80/CapitalMP3"
        },
        {
            name: "Classic FM",
            logo: "stations/images-europe/uk/Classic FM.svg",
            url: "http://media-sov.musicradio.com:80/ClassicFMMP3"
        },
        {
            name: "Heart",
            logo: "stations/images-europe/uk/Heart.gif",
            url: "http://media-sov.musicradio.com:80/HeartLondonMP3"
        },
        {
            name: "Heart Dance",
            logo: "stations/images-europe/uk/Heart-Dance.png",
            url: "http://media-ice.musicradio.com/HeartDanceMP3"
        },
        {
            name: "Heart 80s",
            logo: "stations/images-europe/uk/Heart 80s.png",
            url: "http://media-the.musicradio.com/Heart80s"
        },
        {
            name: "Heart Extra",
            logo: "stations/images-europe/uk/Heart Extra.png",
            url: "http://media-the.musicradio.com/Heartextra"
        },
        {
            name: "Heat radio",
            logo: "stations/images-europe/uk/Heat radio.png",
            url: "https://stream-al.planetradio.co.uk/heat.aac"
        },
        {
            name: "Kiss",
            logo: "stations/images-europe/uk/Kiss.png",
            url: "http://icy-e-ba-01-gos.sharp-stream.com/kissnational.mp3"
        },
        {
            name: "Kiss Fresh",
            logo: "stations/images-europe/uk/Kiss Fresh.jpg",
            url: "http://live-bauer-al.sharp-stream.com/kissfresh.aac"
        },
        {
            name: "Kisstory",
            logo: "stations/images-europe/uk/Kisstory.png",
            url: "http://live-bauer-al.sharp-stream.com/kisstory.aac"
        },
        {
            name: "LBC",
            logo: "stations/images-europe/uk/LBC.png",
            url: "http://media-the.musicradio.com/LBCUK"
        },
        {
            name: "LBC News",
            logo: "stations/images-europe/uk/LBC News.png",
            url: "http://media-ice.musicradio.com/LBCNewsUK"
        },
        {
            name: "Magic",
            logo: "stations/images-europe/uk/Magic.png",
            url: "https://stream-mz.planetradio.co.uk/magicnational.aac"
        },
        {
            name: "Radio X",
            logo: "stations/images-europe/uk/Radio X.jpg",
            url: "http://media-the.musicradio.com/RadioXUK"
        },
        {
            name: "Smooth",
            logo: "stations/images-europe/uk/Smooth.png",
            url: "http://media-the.musicradio.com/SmoothUK"
        },
        {
            name: "Smooth Extra",
            logo: "stations/images-europe/uk/Smooth Extra.png",
            url: "http://media-the.musicradio.com/SmoothExtra"
        },
        {
            name: "talkSPORT",
            logo: "stations/images-europe/uk/talkSPORT.png",
            url: "https://radio.talksport.com/stream"
        },
        {
            name: "UCB 1",
            logo: "stations/images-europe/uk/UCB 1.png",
            url: "http://edge-audio-03-gos2.sharp-stream.com/ucbuk.mp3?device=ukradioplayer"
        },
    ],
    "ukraine": [
        {
            name: "UR-1",
            logo: "stations/images-europe/ukraine/UR-1.png",
            url: "http://radio.nrcu.gov.ua:8000/ur1-mp3"
        },
        {
            name: "UR-2",
            logo: "stations/images-europe/ukraine/UR-2.jpg",
            url: "http://radio.nrcu.gov.ua:8000/ur2-mp3"
        },
        {
            name: "Авто Радіо",
            logo: "stations/images-europe/ukraine/Авто Радіо.png",
            url: "http://cast.radiogroup.com.ua:8000/avtoradio"
        },
        /*
        {
            name: "Ера FM",
            logo: "stations/images-europe/ukraine/Ера FM.jpg",
            url: "http://212.26.129.2:8000/era96"
        },
        */
        {
            name: "Kiss FM",
            logo: "stations/images-europe/ukraine/Kiss FM.jpg",
            url: "http://online-kissfm.tavrmedia.ua/KissFM"
        },
        {
            name: "RadioROKS",
            logo: "stations/images-europe/ukraine/RadioROKS.jpeg",
            url: "http://online-radioroks.tavrmedia.ua:7000/RadioROKS"
        },
        {
            name: "Ретро FM",
            logo: "stations/images-europe/ukraine/Ретро FM.png",
            url: "http://cast.radiogroup.com.ua:8000/retro"
        },
        {
            name: "Xiт FM",
            logo: "stations/images-europe/ukraine/Xiт FM.png",
            url: "http://online-hitfm.tavrmedia.ua/HitFM"
        },
    ],
    "wales": [
        {
            name: "BBC Radio Wales",
            logo: "stations/images-europe/wales/BBC Radio Wales.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_walesmw_mf_p"
        },
        {
            name: "BBC Radio Cymru",
            logo: "stations/images-europe/wales/BBC Radio Cymru.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_cymru_mf_q"
        },
    ],
    "westbank": [
        {
            name: "راديو أجيال",
            logo: "stations/images-europe/westbank/راديو أجيال.png",
            url: "http://streamer.mada.ps:8008/AJYAL"
        },
        {
            name: "راديو انغام",
            logo: "stations/images-europe/westbank/راديو انغام.jpg",
            url: "http://streamer.mada.ps:8010/ANGHAM"
        },
    ]
};

//stations["belgium"] = stations["belgium-nl"].concat(stations["belgium-fr"]);
//stations["switzerland"] = stations["switzerland-de"].concat(stations["switzerland-fr"]);
