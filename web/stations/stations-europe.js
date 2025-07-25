var stations = {/*
    "christmas": [
        {
            name: "Christmas Channel",
            logo: "stations/images-europe/0_christmas/Christmas Channel.png",
            url: "https://christmas-high.rautemusik.fm/listen"
        },
        {
            name: "Christmas Lounge",
            logo: "stations/images-europe/0_christmas/Christmas Lounge.png",
            url: "https://ice6.somafm.com/christmas-256-mp3"
        },
        {
            name: "Christmas Rocks!",
            logo: "stations/images-europe/0_christmas/Christmas Rocks!.png",
            url: "https://ice2.somafm.com/xmasrocks-128-mp3"
        },
        {
            name: "Christmas FM",
            logo: "stations/images-europe/0_christmas/Christmas FM.png",
            url: "https://christmasfm.cdnstream1.com/2547_128.mp3"
        },
        {
            name: "Evergreen Christmas Radio",
            logo: "stations/images-europe/0_christmas/Evergreen Christmas Radio.png",
            url: "https://emg.streamguys1.com/evergreen-website"
        },
        {
            name: "JulRadio",
            logo: "stations/images-europe/0_christmas/JulRadio.png",
            url: "https://relay.julradio.se/julradio"
        },
        {
            name: "Radio Natale",
            logo: "stations/images-europe/0_christmas/Radio Natale.png",
            url: "https://streaming.radiostreamlive.com/radionatale_devices"
        },
        {
            name: "Radio Noël",
            logo: "stations/images-europe/0_christmas/Radio Noël.png",
            url: "https://www.radioking.com/play/radio-noel/298042"
        },
        {
            name: "Snowy Radio",
            logo: "stations/images-europe/0_christmas/Snowy Radio.png",
            url: "http://gemini.shoutca.st:8036/stream"
        },
        {
            name: "Weihnachtsmusik FM",
            logo: "stations/images-europe/0_christmas/Weihnachtsmusik FM.png",
            url: "https://streams.weihnachtsmusik.fm/hits/mp3-192/weihnachtsradiofm"
        },
        {
            name: "Stations for Grinches upcoming...",
            logo: "stations/images-europe/0_christmas/Grinch.png",
            url: ""
        },
        {
            name: "Power 181",
            logo: "stations/images-europe/0_christmas/181.fm.png",
            url: "http://listen.livestreamingservice.com/181-power_64k.aac"
        },
        {
            name: "The Office",
            logo: "stations/images-europe/0_christmas/181.fm.png",
            url: "http://listen.livestreamingservice.com/181-office_64k.aac"
        },
        {
            name: "Energy 98",
            logo: "stations/images-europe/0_christmas/181.fm.png",
            url: "http://listen.livestreamingservice.com/181-energy98_64k.aac"
        },
        {
            name: "Classic Hits 181",
            logo: "stations/images-europe/0_christmas/181.fm.png",
            url: "http://listen.livestreamingservice.com/181-greatoldies_64k.aac"
        },
        {
            name: "Awesome 80's",
            logo: "stations/images-europe/0_christmas/181.fm.png",
            url: "http://listen.livestreamingservice.com/181-awesome80s_64k.aac"
        },
        {
            name: "The Point",
            logo: "stations/images-europe/0_christmas/181.fm.png",
            url: "http://listen.livestreamingservice.com/181-thepoint_64k.aac"
        },
        {
            name: "Rock 181",
            logo: "stations/images-europe/0_christmas/181.fm.png",
            url: "http://listen.livestreamingservice.com/181-rock_64k.aac"
        },
        {
            name: "The Buzz",
            logo: "stations/images-europe/0_christmas/181.fm.png",
            url: "http://listen.livestreamingservice.com/181-buzz_64k.aac"
        },
        {
            name: "The Beat",
            logo: "stations/images-europe/0_christmas/181.fm.png",
            url: "http://listen.livestreamingservice.com/181-beat_64k.aac"
        },
    ],*/
    "aland": [
        {
            name: "SR P1",
            logo: "stations/images-europe/sweden/Sveriges Radio P1.png",
            url: "http://http-live.sr.se/p1-mp3-192"
        },
        {
            name: "SR P2",
            logo: "stations/images-europe/sweden/Sveriges Radio P2.png",
            url: "http://http-live.sr.se/p2-mp3-192"
        },
        {
            name: "SR P3",
            logo: "stations/images-europe/sweden/Sveriges Radio P3.png",
            url: "http://http-live.sr.se/p3-mp3-192"
        },
        {
            name: "Yle Vega",
            logo: "stations/images-europe/finland/YLE Vega.png",
            url: "https://yleradiolive.akamaized.net/hls/live/2027712/in-YleVegaOsterbotten/master.m3u8"
        },
        {
            name: "Yle X3M",
            logo: "stations/images-europe/finland/Yle X3M.png",
            url: "https://yleradiolive.akamaized.net/hls/live/2027678/in-YleX3M/master.m3u8"
        },
        {
            name: "Ålands Radio",
            logo: "stations/images-europe/aland/Ålands Radio.png",
            url: "https://stream.alandsradio.ax/stream.ogg"
        },
        {
            name: "Mix Megapol",
            logo: "stations/images-europe/sweden/Mix Megapol.png",
            url: "https://live-bauerse-fm.sharp-stream.com/mixmegapol_instream_se_aacp"
        },
        {
            name: "Rockklassiker",
            logo: "stations/images-europe/sweden/Rockklassiker.png",
            url: "https://live-bauerse-fm.sharp-stream.com/rockklassiker_instream_se_aacp"
        },
        {
            name: "Steel FM",
            logo: "stations/images-europe/aland/Steel FM.png",
            url: "https://ice6.securenetsystems.net/STEELFM"
        },
    ],
    "albania": [
        {
            name: "Radio Tirana 1",
            logo: "stations/images-europe/albania/Radio Tirana 1.png",
            url: "http://79.106.48.2:8000/radiotirana1"
        },
        {
            name: "Radio Tirana 2",
            logo: "stations/images-europe/albania/Radio Tirana 2.png",
            url: "http://79.106.48.2:8000/radiotirana2"
        },
        {
            name: "Radio Tirana 3",
            logo: "stations/images-europe/albania/Radio Tirana 3.png",
            url: "http://79.106.48.2:8000/radiotirana3"
        },
        {
            name: "Club FM",
            logo: "stations/images-europe/albania/Club FM.png",
            url: "https://cp1.sednastream.com/proxy/clubfm?mp=%2F%3Bstream.mp3&_=1"
        },
        {
            name: "NRG",
            logo: "stations/images-europe/albania/NRG.png",
            url: "https://ice31.securenetsystems.net/AL09"
        },
        {
            name: "play Radio",
            logo: "stations/images-europe/albania/play Radio.png",
            url: "https://business.playfm.al:8170/paperplay"
        },
        {
            name: "Radio 1",
            logo: "stations/images-europe/albania/Radio 1.png",
            url: "http://video.radio1.al/broadwavehigh.mp3"
        },
        {
            name: "Radio 7",
            logo: "stations/images-europe/albania/Radio 7.png",
            url: "https://cp1.sednastream.com/proxy/radio7albania?mp=/live"
        },
        {
            name: "Radio Ngjallja",
            logo: "stations/images-europe/albania/Radio Ngjallja.png",
            url: "http://84.20.84.114:1234/radiongjallja"
        },
        {
            name: "Radio One",
            logo: "stations/images-europe/albania/Radio One.png",
            url: "https://cp1.sednastream.com/proxy/radioone94?mp=/stream"
        },
        {
            name: "Radio Travel",
            logo: "stations/images-europe/albania/Radio Travel.png",
            url: "https://cp1.sednastream.com/proxy/radiotravel?mp=/stream"
        },
        {
            name: "RFI Monde Albania",
            logo: "stations/images-europe/albania/RFI Monde Albania.png",
            url: "http://live02.rfi.fr/rfimonde-64.mp3"
        },
        {
            name: "Top Albania Radio",
            logo: "stations/images-europe/albania/Top Albania Radio.png",
            url: "https://live.top-media.al/tar"
        },
    ],
    "algier": [
        {
            name: "Chaîne 1",
            logo: "stations/images-europe/algier/Chaîne 1.png",
            url: "https://webradio.tda.dz/Chaine1_64K.mp3"
        },
        {
            name: "Chaîne 2",
            logo: "stations/images-europe/algier/Chaîne 2.png",
            url: "https://webradio.tda.dz/Chaine2_64K.mp3"
        },
        {
            name: "Chaîne 3",
            logo: "stations/images-europe/algier/Chaîne 3.png",
            url: "https://webradio.tda.dz/Chaine3_64K.mp3"
        },
        {
            name: "Radio Algérie Internationale",
            logo: "stations/images-europe/algier/Radio Algérie Internationale.png",
            url: "https://webradio.tda.dz/Internationale_64K.mp3"
        },
        {
            name: "Radio Coran",
            logo: "stations/images-europe/algier/Radio Coran.png",
            url: "https://webradio.tda.dz/Coran_64K.mp3"
        },
    ],
    "andorra": [
        {
            name: "Ràdio Nacional d'Andorra",
            logo: "stations/images-europe/andorra/RNA.png",
            url: "https://play.cdn.enetres.net/56495F77FD124FECA75590A906965F2C023/023/playlist.m3u8"
        },
        {
            name: "Andorra Música",
            logo: "stations/images-europe/andorra/Andorra Música.png",
            url: "https://play.cdn.enetres.net/56495F77FD124FECA75590A906965F2C024/024/playlist.m3u8"
        },
        {
            name: "Flaixbac Andorra",
            logo: "stations/images-europe/andorra/Flaixbac Andorra.png",
            url: "https://streaming.giraweb.com/8010/stream"
        },
        {
            name: "Flaix FM Andorra",
            logo: "stations/images-europe/andorra/Flaix FM Andorra.png",
            url: "https://streaming.giraweb.com/8020/stream"
        },
        {
            name: "KISS FM",
            logo: "stations/images-europe/spain/KISS FM.png",
            url: "https://adhandler.kissfmradio.cires21.com/get_link?url=https://bbkissfm.kissfmradio.cires21.com/bbkissfm.mp3"
        },
        {
            name: "Pròxima FM",
            logo: "stations/images-europe/andorra/Pròxima FM.png",
            url: "http://91.187.93.115:8000/;stream/1"
        },
        {
            name: "Ràdio Valira",
            logo: "stations/images-europe/andorra/Ràdio Valira.png",
            url: "https://mars.streamerr.co/8236/stream"
        },
    ],
    "armenia": [
        {
            name: "Հայաստանի Հանրային Ռադիո",
            logo: "stations/images-europe/armenia/Հայաստանի Հանրային Ռադիո.png",
            url: "https://eu1.stream4cast.com/proxy/publicra/stream"
        },
        {
            name: "Ռադիո Հայ",
            logo: "stations/images-europe/armenia/Ռադիո Հայ Ցանց.png",
            url: "http://14678.cloudrad.io:9440/live"
        },
        {
            name: "Yerevan FM",
            logo: "stations/images-europe/armenia/Yerevan FM.png",
            url: "https://eu1.stream4cast.com/proxy/arradioi/stream?1648992323080"
        },
    ],
    "austria": [
        {
            name: "ORF Ö1",
            logo: "stations/images-europe/austria/ORF Ö1.png",
            url: "https://orf-live.ors-shoutcast.at/oe1-q2a"
        },
        {
            name: "Radio Wien",
            logo: "stations/images-europe/austria/Radio Wien.png",
            url: "https://orf-live.ors-shoutcast.at/wie-q2a"
        },
        {
            name: "Hitradio Ö3",
            logo: "stations/images-europe/austria/Hitradio Ö3.png",
            url: "https://orf-live.ors-shoutcast.at/oe3-q2a"
        },
        {
            name: "Antenne HIT",
            logo: "stations/images-europe/austria/Antenne HIT.png",
            url: "https://frontend.streamonkey.net/antennehit-live"
        },
        {
            name: "Antenne Österreich",
            logo: "stations/images-europe/austria/Antenne Österreich.png",
            url: "https://frontend.streamonkey.net/antoesterreich-live"
        },
        {
            name: "Beats Radio",
            logo: "stations/images-europe/germany/Beats Radio.png",
            url: "https://stream.klassikradio.de/beats-at/mp3-192/"
        },
        {
            name: "ENERGY ÖSTERREICH",
            logo: "stations/images-europe/austria/ENERGY ÖSTERREICH.png",
            url: "https://scdn.nrjaudio.fm/adwz1/at/36001/aac_64.mp3"
        },
        {
            name: "ERF Süd",
            logo: "stations/images-europe/austria/ERF Süd.png",
            url: "http://stream.erf.at/erfplus_320"
        },
        {
            name: "FM4",
            logo: "stations/images-europe/austria/FM4.png",
            url: "https://orf-live.ors-shoutcast.at/fm4-q2a"
        },
        {
            name: "Flash 90s",
            logo: "stations/images-europe/austria/Flash 90s.png",
            url: "https://stream.flash90s.at/flash90s/mp3-320/"
        },
        {
            name: "jö.live",
            logo: "stations/images-europe/austria/jö.live.png",
            url: "https://live.stream.maxfive.com/max5-joelive"
        },
        {
            name: "Klassik Radio Digital",
            logo: "stations/images-europe/germany/Klassik Radio.png",
            url: "https://live.streams.klassikradio.de/klassikradio-oesterreich"
        },
        {
            name: "kronehit",
            logo: "stations/images-europe/austria/KroneHit.png",
            url: "https://secureonair.krone.at/kronehit-hp.mp3"
        },
        {
            name: "Life Radio",
            logo: "stations/images-europe/austria/Life Radio.png",
            url: "https://liferadio.streamabc.net/lfr-lr-mp3-128-9299368"
        },
        {
            name: "LoungeFM",
            logo: "stations/images-europe/austria/LoungeFM.png",
            url: "https://s35.derstream.net/digital.mp3"
        },
        {
            name: "Mein Kinderradio",
            logo: "stations/images-europe/austria/Mein Kinderradio.png",
            url: "https://stream01.zogl.net:8907/stream"
        },
        {
            name: "NOSTALGIE",
            logo: "stations/images-europe/germany/NOSTALGIE.png",
            url: "https://scdn.nrjaudio.fm/adwz1/at/58914/aac_64.mp3"
        },
        {
            name: "oe24 Radio",
            logo: "stations/images-europe/austria/oe24 Radio.png",
            url: "https://onair.securestream.radioaustria.at/radioaustria"
        },
        {
            name: "radio 88.6",
            logo: "stations/images-europe/austria/Radio 88.6.png",
            url: "https://frontend.streamonkey.net/radio886-onair/stream/mp3"
        },
        {
            name: "Radio Arabella",
            logo: "stations/images-europe/austria/Radio Arabella.png",
            url: "https://frontend.streams.arabella.at/arabella-wien"
        },
        {
            name: "arabella HOT",
            logo: "stations/images-europe/austria/arabella HOT.png",
            url: "https://frontend.streams.arabella.at/arabella-hot"
        },
        {
            name: "arabella MAGIC",
            logo: "stations/images-europe/austria/arabella MAGIC.png",
            url: "https://frontend.streams.arabella.at/arabella-magic"
        },
        {
            name: "Radio Flamingo",
            logo: "stations/images-europe/austria/Radio Flamingo.png",
            url: "https://live.antenne.at/rf"
        },
        {
            name: "Radio Bollerwagen",
            logo: "stations/images-europe/germany-nds/Radio Bollerwagen.png",
            url: "https://stream.ffn.de/radiobollerwagen/mp3-192"
        },
        {
            name: "Radio GÖD",
            logo: "stations/images-europe/austria/Radio GÖD.png",
            url: "https://radiogoed.securestream.kapper.net/stream"
        },
        {
            name: "Radio Maria Österreich",
            logo: "stations/images-europe/austria/Radio Maria Österreich.png",
            url: "http://live.radiomaria.at:8000/rma"
        },
        {
            name: "Radio ONE",
            logo: "stations/images-europe/austria/Radio ONE.png",
            url: "https://stream.radiotechnikum.at/TECHONE"
        },
        {
            name: "Radio SOL",
            logo: "stations/images-europe/austria/Radio SOL.png",
            url: "https://stream.radiosol.at/webstream"
        },
        {
            name: "radio klassik Stephansdom",
            logo: "stations/images-europe/austria/radio klassik Stephansdom.png",
            url: "https://radioklassikstephansdom.ice.infomaniak.ch/radioklassikstephansdom.mp3"
        },
        {
            name: "ROCK ANTENNE Österreich",
            logo: "stations/images-europe/austria/ROCK ANTENNE Österreich.png",
            url: "https://s4-webradio.rockantenne.at/rockantenne-oesterreich"
        },
        {
            name: "Rot Weiss Rot",
            logo: "stations/images-europe/austria/Rot Weiss Rot.png",
            url: "https://secureonair.krone.at/rwr.aac"
        },
        {
            name: "Super 80s",
            logo: "stations/images-europe/austria/Super 80s.png",
            url: "https://secureonair.krone.at/super80s.aac"
        },
        {
            name: "Superfly.fm",
            logo: "stations/images-europe/austria/Superfly.fm.png",
            url: "https://web.stream.superfly.fm/superfly-live"
        },
        {
            name: "VM1",
            logo: "stations/images-europe/austria/VM1.png",
            url: "https://radiovm1.fluidstream.eu/radiovm1.mp3"
        },
        {
            name: "WELLE 1",
            logo: "stations/images-europe/austria/Welle 1.png",
            url: "https://live.welle1.at:19000/live"
        },
        {
            name: "XXXLutz Das Radio",
            logo: "stations/images-europe/austria/XXXLutz Das Radio.png",
            url: "https://stream.xxxlutz-dasradio.at/live/mp3-192/"
        },
    ],
    "azerbaijan": [
        {
            name: "Azərbaycan Radiosu",
            logo: "stations/images-europe/azerbaijan/Azərbaycan Radiosu.png",
            url: "https://str2.yodacdn.net/radio_respublica/index.m3u8"
        },
        {
            name: "ARAZ FM",
            logo: "stations/images-europe/azerbaijan/ARAZ FM.png",
            url: "https://s14.myradiostream.com/:30454/listen.mp3"
        },
        {
            name: "Media FM",
            logo: "stations/images-europe/azerbaijan/Media FM.png",
            url: "https://icecast.livetv.az/mediafm"
        },
    ],
    "basque": [
        {
            name: "Radio Euskadi",
            logo: "stations/images-europe/basque/Radio Euskadi.png",
            url: "http://mp3-eitb.stream.flumotion.com/eitb/radioeuskadi.mp3"
        },
        {
            name: "Euskadi Irratia",
            logo: "stations/images-europe/basque/Euskadi Irratia.png",
            url: "http://mp3-eitb.stream.flumotion.com/eitb/euskadiirratia.mp3"
        },
        {
            name: "EITB Musika",
            logo: "stations/images-europe/basque/EITB Musika.png",
            url: "http://mp3-eitb.stream.flumotion.com/eitb/eitbmusika.mp3"
        },
        {
            name: "Arrate Irratia",
            logo: "stations/images-europe/basque/Arrate Irratia.png",
            url: "https://online.arrateirratia.eus/zuzenean"
        },
        {
            name: "Bizkaia Irratia",
            logo: "stations/images-europe/basque/Bizkaia Irratia.png",
            url: "https://nerbioi.radiopopular.eus/bizkaiairratia2"
        },
        {
            name: "Gaztea",
            logo: "stations/images-europe/basque/Gaztea.png",
            url: "http://mp3-eitb.stream.flumotion.com/eitb/gaztea.mp3"
        },
        {
            name: "Naiz Irratia",
            logo: "stations/images-europe/basque/Naiz Irratia.png",
            url: "https://zuzenean.naiz.eus/naiz_irratia.mp3"
        },
        {
            name: "Radio Nervión",
            logo: "stations/images-europe/basque/Radio Nervión.png",
            url: "https://radionervion.streaming-pro.com:6132/radionervion"
        },
        {
            name: "Radio Popular",
            logo: "stations/images-europe/basque/Radio Popular.png",
            url: "https://nerbioi.radiopopular.eus/radiopopular3"
        },
    ],
    "belarus": [
        {
            name: "1 канал",
            logo: "stations/images-europe/belarus/1 канал.png",
            url: "https://stream2.datacenter.by/1kanal"
        },
        {
            name: "Канал Культура",
            logo: "stations/images-europe/belarus/Канал Культура.png",
            url: "https://stream2.datacenter.by/kultura"
        },
        {
            name: "Alfa Radio",
            logo: "stations/images-europe/belarus/Alfa Radio.png",
            url: "https://stream.sb.by/alpha"
        },
        {
            name: "Душевное радио",
            logo: "stations/images-europe/belarus/Душевное радио.png",
            url: "https://stream2.datacenter.by/dushevnoe"
        },
        {
            name: "Europa Plus Belarus",
            logo: "stations/images-europe/belarus/Europa Plus Belarus.png",
            url: "https://ep128.hostingradio.ru:8030/ep128"
        },
        {
            name: "Легенды FM",
            logo: "stations/images-europe/belarus/Легенды FM.png",
            url: "http://live.legendy.by:8000/legendyfm"
        },
        {
            name: "Радиус FM",
            logo: "stations/images-europe/belarus/Радиус FM.png",
            url: "https://stream2.datacenter.by/radiusfm_main"
        },
        {
            name: "Радыё Беларусь",
            logo: "stations/images-europe/belarus/Радыё Беларусь.png",
            url: "https://stream2.datacenter.by/belarus"
        },
        {
            name: "Радио Сталіца",
            logo: "stations/images-europe/belarus/Радио Сталіца.png",
            url: "https://stream2.datacenter.by/stalica"
        },
        {
            name: "Радио Минск",
            logo: "stations/images-europe/belarus/Радио Минск.png",
            url: "https://radio.mk.by:8443/radiominsk"
        },
        {
            name: "Радио Мир",
            logo: "stations/images-europe/belarus/Радио Мир.png",
            url: "https://stream2.datacenter.by/radiomir"
        },
        {
            name: "Unistar",
            logo: "stations/images-europe/belarus/Unistar.png",
            url: "https://stream.unistar.by/unistar_main_internal/unistar_main/playlist.m3u8"
        },
        {
            name: "Радио РОКС",
            logo: "stations/images-europe/belarus/Радио РОКС.png",
            url: "https://stream.roks.com:8443/live256"
        },
        {
            name: "Радио Юмор ФМ",
            logo: "stations/images-europe/belarus/Радио Юмор ФМ.png",
            url: "http://live.humorfm.by:8000/veseloeradio"
        },
        {
            name: "Новое Радио",
            logo: "stations/images-europe/belarus/Новое Радио.png",
            url: "https://live.novoeradio.by:444/live/novoeradio_aac128/icecast.audio"
        },
        {
            name: "Пилот FM",
            logo: "stations/images-europe/belarus/Пилот FM.png",
            url: "https://stream2.datacenter.by/pilotfm"
        },
        {
            name: "Цэнтр FM",
            logo: "stations/images-europe/belarus/Цэнтр FM.png",
            url: "https://stream2.datacenter.by/stream"
        },
    ],
    "belgium-nl": [
        {
            name: "Radio 1",
            logo: "stations/images-europe/belgium-nl/Radio 1.png",
            url: "http://icecast.vrtcdn.be/radio1-high.mp3"
        },
        {
            name: "Radio2",
            logo: "stations/images-europe/belgium-nl/Radio2.png",
            url: "http://icecast.vrtcdn.be/ra2ant-high.mp3"
        },
        {
            name: "Radio Bene",
            logo: "stations/images-europe/belgium-nl/Radio Bene.png",
            url: "http://icecast.vrtcdn.be/radio2_benebene-high.mp3"
        },
        {
            name: "Klara",
            logo: "stations/images-europe/belgium-nl/Klara.png",
            url: "http://icecast.vrtcdn.be/klara-high.mp3"
        },
        {
            name: "Klara Continuo",
            logo: "stations/images-europe/belgium-nl/Klara Continuo.png",
            url: "http://icecast.vrtcdn.be/klaracontinuo-high.mp3"
        },
        {
            name: "MNM",
            logo: "stations/images-europe/belgium-nl/MNM.png",
            url: "http://icecast.vrtcdn.be/mnm-high.mp3"
        },
        {
            name: "MNM Hits",
            logo: "stations/images-europe/belgium-nl/MNM Hits.png",
            url: "https://icecast.vrtcdn.be/mnm_hits-high.mp3"
        },
        {
            name: "Studio Brussel",
            logo: "stations/images-europe/belgium-nl/Studio Brussel.png",
            url: "http://icecast.vrtcdn.be/stubru-high.mp3"
        },
        {
            name: "De Tijdloze",
            logo: "stations/images-europe/belgium-nl/De Tijdloze.png",
            url: "http://icecast.vrtcdn.be/stubru_tijdloze-high.mp3"
        },
        {
            name: "BBC World Service",
            logo: "stations/images-europe/netherlands/BBC World Service.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_world_service.m3u8",
        },
        {
            name: "JOE",
            logo: "stations/images-europe/belgium-nl/Joe.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/JOEAAC_SC"
        },
        {
            name: "JOE 80s & 90s",
            logo: "stations/images-europe/belgium-nl/JOE 80s & 90s.png",
            url: "https://icecast-qmusicbe-cdp.triple-it.nl/joe_80s_90s.aac"
        },
        {
            name: "JOE Easy",
            logo: "stations/images-europe/belgium-nl/JOE Easy.png",
            url: "https://icecast-qmusicbe-cdp.triple-it.nl/joe_easy.aac"
        },
        {
            name: "JOE Gold",
            logo: "stations/images-europe/belgium-nl/JOE Gold.png",
            url: "https://icecast-qmusicbe-cdp.triple-it.nl/joe-gold.aac"
        },
        {
            name: "MENTpop",
            logo: "stations/images-europe/belgium-nl/MENTpop.png",
            url: "https://s29.myradiostream.com/19742/listen.mp3"
        },
        {
            name: "Play Nostalgie",
            logo: "stations/images-europe/belgium-nl/Play Nostalgie.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/NOSTALGIEWHATAFEELINGAAC_SC"
        },
        {
            name: "Nostalgie Plus",
            logo: "stations/images-europe/belgium-nl/Nostalgie Plus.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/NOSTALGIEPLUSAAC_SC"
        },
        {
            name: "NRJ België",
            logo: "stations/images-europe/belgium-nl/Energy.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/NRJBELGIEAAC_SC"
        },
        {
            name: "One World Radio",
            logo: "stations/images-europe/belgium-nl/One World Radio.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/OWR_INTERNATIONAL_SC"
        },
        {
            name: "Qmusic",
            logo: "stations/images-europe/belgium-nl/Qmusic.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/QMUSICAAC_SC"
        },
        {
            name: "Q-Allstars",
            logo: "stations/images-europe/belgium-nl/Q-Allstars.png",
            url: "https://icecast-qmusicbe-cdp.triple-it.nl/q-allstars.aac"
        },
        {
            name: "Q-Foute Radio",
            logo: "stations/images-europe/belgium-nl/Q-Foute Radio.png",
            url: "https://icecast-qmusicbe-cdp.triple-it.nl/q-foute-radio.aac"
        },
        {
            name: "Radio Maria",
            logo: "stations/images-europe/belgium-nl/Radio Maria.png",
            url: "https://stream.radiomaria.be:8443/RadioMaria-96"
        },
        {
            name: "RTBF Mix",
            logo: "stations/images-europe/belgium-nl/RTBF Mix.png",
            url: "https://radios.rtbf.be/rtbfmix-64.aac"
        },
        {
            name: "Stadsradio Vlaanderen",
            logo: "stations/images-europe/belgium-nl/Stadsradio Vlaanderen.png",
            url: "http://randstad.wirelessbelgie.be:8330/stream.mp3"
        },
        {
            name: "TOPradio",
            logo: "stations/images-europe/belgium-nl/TOPradio.png",
            url: "https://str.topradio.be/topradio.aac"
        },
        {
            name: "TOP2",
            logo: "stations/images-europe/belgium-nl/TOP2.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TOP_ZILLION_SC"
        },
        {
            name: "Willy",
            logo: "stations/images-europe/belgium-nl/Willy.png",
            url: "https://icecast-qmusicbe-cdp.triple-it.nl/willy.aac"
        },
        {
            name: "Willy Class X",
            logo: "stations/images-europe/belgium-nl/Willy Class X.png",
            url: "https://icecast-qmusicbe-cdp.triple-it.nl/willy-class-x.aac"
        },
    ],
    "belgium-fr": [
        {
            name: "La Première",
            logo: "stations/images-europe/belgium-fr/La Première.png",
            url: "https://radios.rtbf.be/laprem1ere-64.aac"
        },
        {
            name: "Classic 21",
            logo: "stations/images-europe/belgium-fr/Classic 21.png",
            url: "https://radios.rtbf.be/classic21-64.aac"
        },
        {
            name: "Musiq 3",
            logo: "stations/images-europe/belgium-fr/Musiq 3.png",
            url: "https://radios.rtbf.be/musiq3-128.aac"
        },
        {
            name: "Jam",
            logo: "stations/images-europe/belgium-fr/Jam.png",
            url: "https://radios.rtbf.be/jam-64.aac"
        },
        {
            name: "Tarmac",
            logo: "stations/images-europe/belgium-fr/Tarmac.png",
            url: "https://radios.rtbf.be/tarmac-64.aac"
        },
        {
            name: "Tipik",
            logo: "stations/images-europe/belgium-fr/Tipik.png",
            url: "https://radios.rtbf.be/pure-64.aac"
        },
        {
            name: "Vivacité",
            logo: "stations/images-europe/belgium-fr/Vivacité.png",
            url: "http://radios.rtbf.be/vivabxl-64.aac"
        },
        {
            name: "VivaPlus",
            logo: "stations/images-europe/belgium-fr/VivaPlus.png",
            url: "http://radios.rtbf.be/vivaplus-64.aac"
        },
        {
            name: "Viva Sport",
            logo: "stations/images-europe/belgium-fr/Viva Sport.png",
            url: "http://radios.rtbf.be/vivasport-64.aac"
        },
        {
            name: "1RCF Belgique",
            logo: "stations/images-europe/france/RCF.png",
            url: "https://rcf.streamakaci.com/rcfbe.mp3",
        },
        {
            name: "Bel RTL",
            logo: "stations/images-europe/belgium-fr/Bel RTL.png",
            url: "https://belrtl.ice.infomaniak.ch/belrtl-mp3-128"
        },
        {
            name: "BRF1",
            logo: "stations/images-europe/belgium-fr/BRF1.png",
            url: "https://streaming.brf.be/brf1-high.mp3"
        },
        {
            name: "BRF2",
            logo: "stations/images-europe/belgium-fr/BRF2.png",
            url: "https://streaming.brf.be/brf2-high.mp3"
        },
        {
            name: "Fun Radio",
            logo: "stations/images-europe/belgium-fr/Fun Radio.png",
            url: "http://funradiobe.ice.infomaniak.ch/funradiobe-high.mp3"
        },
        {
            name: "LN Radio",
            logo: "stations/images-europe/belgium-fr/LN Radio.png",
            url: "https://stream.rcs.revma.com/anew1ctrgzzuv"
        },
        {
            name: "Nostalgie",
            logo: "stations/images-europe/belgium-fr/Nostalgie.png",
            url: "https://stream.rcs.revma.com/5gd04cwptg0uv"
        },
        {
            name: "Nostalgie Plus",
            logo: "stations/images-europe/belgium-fr/Nostalgie Plus.png",
            url: "https://stream.rcs.revma.com/s9mkgtsqtg0uv"
        },
        {
            name: "NRJ Belgique",
            logo: "stations/images-europe/belgium-fr/Energy.png",
            url: "https://stream.rcs.revma.com/xh00fwuptg0uv"
        },
        {
            name: "NRJ Plus",
            logo: "stations/images-europe/belgium-fr/NRJ Plus.png",
            url: "https://stream.rcs.revma.com/1a6hdnzbebuvv"
        },
        {
            name: "Radio Contact",
            logo: "stations/images-europe/belgium-fr/Radio Contact.png",
            url: "https://radiocontact.ice.infomaniak.ch/radiocontact-mp3-128.mp3"
        },
        {
            name: "Radio Contact MAX",
            logo: "stations/images-europe/belgium-fr/Radio Contact MAX.png",
            url: "https://contactmax.ice.infomaniak.ch/contactmax-128.mp3"
        },
        {
            name: "Sud Radio Belgique",
            logo: "stations/images-europe/belgium-fr/Sud Radio Belgique.png",
            url: "https://stream.ceit.be/sudradio-belgique"
        }
    ],
    "bosnia": [
        {
            name: "BHR1",
            logo: "stations/images-europe/bosnia/BHR1.png",
            url: "https://webtvstream.bhtelecom.ba/bh_radio1.m3u8"
        },
        {
            name: "BIG 2",
            logo: "stations/images-europe/bosnia/BIG 2.png",
            url: "https://big2.bigportal.ba:8080/big2"
        },
        {
            name: "Bobar Radio",
            logo: "stations/images-europe/bosnia/Bobar Radio.png",
            url: "http://94.130.11.28:9010/stream/1/"
        },
        {
            name: "Federalni Radio",
            logo: "stations/images-europe/bosnia/Federalni Radio.png",
            url: "https://s2.free-shoutcast.com/stream/18170/;stream.mp3"
        },
        {
            name: "Kalman Radio",
            logo: "stations/images-europe/bosnia/Kalman Radio.png",
            url: "http://188.40.62.20:8004/;*.mp3"
        },
        {
            name: "Nes radio",
            logo: "stations/images-europe/bosnia/Nes radio.png",
            url: "http://188.40.62.20:8070/stream"
        },
        {
            name: "ORV",
            logo: "stations/images-europe/bosnia/ORV.png",
            url: "https://otv.ovh/live_radio/orv/icecast.audio"
        },
        {
            name: "Radio BIR",
            logo: "stations/images-europe/bosnia/Radio BIR.png",
            url: "http://188.40.62.20:8090/;"
        },
        {
            name: "Radio BN",
            logo: "stations/images-europe/bosnia/Radio BN.png",
            url: "http://stream.rtvbn.com/;stream.mp3"
        },
        {
            name: "Radio HB",
            logo: "stations/images-europe/bosnia/Radio HB.png",
            url: "https://s3.free-shoutcast.com/stream/18038"
        },
        {
            name: "Radio M",
            logo: "stations/images-europe/bosnia/Radio M.png",
            url: "http://team-data.ba:8030/;"
        },
        {
            name: "Radio Marija",
            logo: "stations/images-europe/bosnia/Radio Marija.png",
            url: "https://dreamsiteradiocp2.com/proxy/rmbosnia2?mp=/stream"
        },
        {
            name: "Radio Mir",
            logo: "stations/images-europe/bosnia/Radio Mir.png",
            url: "https://mirm.live/mir.mp3"
        },
        {
            name: "Radio Mix",
            logo: "stations/images-europe/bosnia/Radio Mix.png",
            url: "https://stream.rsgmedia.ba/listen/radio_mix/radio.mp3"
        },
        {
            name: "RSG Radio",
            logo: "stations/images-europe/bosnia/RSG Radio.png",
            url: "http://stream.rsg.ba:9000/;stream"
        },
        {
            name: "RTRS",
            logo: "stations/images-europe/bosnia/RTRS.png",
            url: "https://radio.rtrs.tv/radio/live/playlist.m3u8"
        },
    ],
    "bulgaria": [
        {
            name: "БНР Хоризонт",
            logo: "stations/images-europe/bulgaria/БНР Хоризонт.png",
            url: "https://lb-hls.cdn.bg/2032/fls/Horizont.stream/playlist.m3u8"
        },
        {
            name: "БНР Христо Ботев",
            logo: "stations/images-europe/bulgaria/БНР Христо Ботев.png",
            url: "https://lb-hls.cdn.bg/2032/fls/HrBotev.stream/playlist.m3u8"
        },
        {
            name: "БГ Радио",
            logo: "stations/images-europe/bulgaria/БГ Радио.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/BG_RADIOAAC_L_SC"
        },
        {
            name: "Bulgaria ON AIR",
            logo: "stations/images-europe/bulgaria/Bulgaria ON AIR.png",
            url: "https://live.radio.bgonair.bg/RadioBOA"
        },
        {
            name: "Darik",
            logo: "stations/images-europe/bulgaria/Darik.png",
            url: "https://darikradio.by.host.bg:8000/S2-128"
        },
        {
            name: "ENERGY",
            logo: "stations/images-europe/bulgaria/ENERGY.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_ENERGYAAC_L_SC"
        },
        {
            name: "FM Plus",
            logo: "stations/images-europe/bulgaria/FM-Plus.png",
            url: "http://193.108.24.21:8000/fmplus?file=.mp3"
        },
        {
            name: "NJOY",
            logo: "stations/images-europe/bulgaria/NJOY.png",
            url: "https://cdn.bweb.bg/radio/njoy.mp3"
        },
        {
            name: "NOVA NEWS",
            logo: "stations/images-europe/bulgaria/NOVA NEWS.png",
            url: "https://radio.nova.bg/novanews.ogg"
        },
        {
            name: "Радио 1",
            logo: "stations/images-europe/bulgaria/Радио 1.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_1AAC_L_SC"
        },
        {
            name: "Радио CITY",
            logo: "stations/images-europe/bulgaria/Radio City.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_CITYAAC_L_SC"
        },
        {
            name: "Радио Фокус",
            logo: "stations/images-europe/bulgaria/Радио Фокус.png",
            url: "https://focusradio.dataserv.cc/1"
        },
        {
            name: "Radio Fresh!",
            logo: "stations/images-europe/bulgaria/Radio Fresh!.png",
            url: "http://193.108.24.21:8000/fresh?file=.mp3"
        },
        {
            name: "Радио Веселина",
            logo: "stations/images-europe/bulgaria/Радио Веселина.png",
            url: "https://bss1.neterra.tv/veselina/veselina.m3u8"
        },
        {
            name: "Радио Витоша",
            logo: "stations/images-europe/bulgaria/Радио Витоша.png",
            url: "https://bss1.neterra.tv/vitosha/vitosha.m3u8"
        },
        {
            name: "Z-ROCK",
            logo: "stations/images-europe/bulgaria/Z-ROCK.png",
            url: "https://cdn.bweb.bg/radio/z-rock.mp3"
        },
    ],
    "catalonia": [
        {
            name: "Ràdio 4",
            logo: "stations/images-europe/catalonia/RNE Ràdio 4.png",
            url: "https://dispatcher.rndfnk.com/crtve/rner4/main/mp3/high"
        },
        {
            name: "Catalunya Ràdio",
            logo: "stations/images-europe/catalonia/Catalunya Ràdio.png",
            url: "https://shoutcast.ccma.cat/ccma/catalunyaradioHD.mp3"
        },
        {
            name: "Catalunya Informació",
            logo: "stations/images-europe/catalonia/Catalunya Informació.png",
            url: "https://shoutcast.ccma.cat/ccma/catalunyainformacioHD.mp3"
        },
        {
            name: "Catalunya Música",
            logo: "stations/images-europe/catalonia/Catalunya Música.png",
            url: "https://shoutcast.ccma.cat/ccma/catalunyamusicaHD.mp3"
        },
        {
            name: "Digital Hits FM",
            logo: "stations/images-europe/catalonia/Digital Hits FM.png",
            url: "https://dhits.frilab.com:8443/dhits"
        },
        {
            name: "iCat",
            logo: "stations/images-europe/catalonia/iCat.png",
            url: "https://shoutcast.ccma.cat/ccma/icatHD.mp3"
        },
        {
            name: "Flaix FM",
            logo: "stations/images-europe/catalonia/Flaix FM.png",
            url: "https://stream.flaixfm.cat/icecast"
        },
        {
            name: "Flaixbac",
            logo: "stations/images-europe/catalonia/Flaixbac.png",
            url: "https://stream.flaixbac.cat/icecast"
        },
        {
            name: "RAC1",
            logo: "stations/images-europe/catalonia/RAC1.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RAC_1_SC"
        },
        {
            name: "RAC105",
            logo: "stations/images-europe/catalonia/RAC105.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RAC105_SC"
        },
        {
            name: "Ràdio Estel",
            logo: "stations/images-europe/catalonia/Ràdio Estel.png",
            url: "https://srv6021.dns-lcinternet.com:10244/stream"
        },
        {
            name: "Radio TeleTaxi",
            logo: "stations/images-europe/catalonia/Radio TeleTaxi.png",
            url: "https://radiott-web.streaming-pro.com:6103/radiott.mp3"
        },
        {
            name: "SER Catalunya",
            logo: "stations/images-europe/catalonia/SER Catalunya.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/SER_CATAAC_SC"
        },
    ],
    "china": [
        {
            name: "中国之声",
            logo: "stations/images-europe/china/CNR.png",
            url: "https://ngcdn001.cnr.cn/live/zgzs/index.m3u8"
        },
        {
            name: "经济之声",
            logo: "stations/images-europe/china/CNR.png",
            url: "https://ngcdn002.cnr.cn/live/jjzs/index.m3u8"
        },
    ],
    "croatia": [
        {
            name: "HR 1",
            logo: "stations/images-europe/croatia/HR 1.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM1AAC_SC"
        },
        {
            name: "HR 2",
            logo: "stations/images-europe/croatia/HR 2.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM2AAC_SC"
        },
        {
            name: "HR 3",
            logo: "stations/images-europe/croatia/HR 3.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/PROGRAM3_SC"
        },
        {
            name: "HR Klasik",
            logo: "stations/images-europe/croatia/HR 3.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/HR_CLASSICSAAC_SC"
        },
        {
            name: "bravo!",
            logo: "stations/images-europe/croatia/bravo!.png",
            url: "http://c5.hostingcentar.com:8059/;"
        },
        {
            name: "CMC Radio",
            logo: "stations/images-europe/croatia/CMC Radio.png",
            url: "https://radio-stream.cmc.com.hr:9011/live"
        },
        {
            name: "EXTRA FM",
            logo: "stations/images-europe/croatia/EXTRA FM.png",
            url: "http://streams.extrafm.hr:8110/stream"
        },
        {
            name: "Happy FM",
            logo: "stations/images-europe/croatia/Happy FM.png",
            url: "http://c5.hostingcentar.com:8446/;"
        },
        {
            name: "Hrvatski Katolički Radio",
            logo: "stations/images-europe/croatia/Hrvatski Katolički Radio.png",
            url: "http://stream.hkr.hr:8000/hkr.mp3"
        },
        {
            name: "Nacional Radio",
            logo: "stations/images-europe/croatia/Nacional Radio.png",
            url: "https://nnc1-bpmmc501.radioca.st/stream"
        },
        {
            name: "Otvoreni",
            logo: "stations/images-europe/croatia/Otvoreni.png",
            url: "https://stream2.otvoreni.hr/otvoreni"
        },
        {
            name: "Radio Kaj",
            logo: "stations/images-europe/croatia/Radio Kaj.png",
            url: "http://s8.iqstreaming.com:8050/stream"
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
            name: "ant1 Radio",
            logo: "stations/images-europe/cyprus/ant1 Radio.png",
            url: "https://stream.rcs.revma.com/f4xvg13btc9uv"
        },
        {
            name: "Bayrak FM",
            logo: "stations/images-europe/cyprus/Bayrak.png",
            url: "http://sc.brtk.net:8000/;"
        },
        {
            name: "Bayrak Klasik",
            logo: "stations/images-europe/cyprus/Bayrak.png",
            url: "http://sc.brtk.net:8006/;"
        },
        {
            name: "Bayrak Radyosu",
            logo: "stations/images-europe/cyprus/Bayrak.png",
            url: "http://sc.brtk.net:8002/;"
        },
        {
            name: "Bayrak Radyo Haber",
            logo: "stations/images-europe/cyprus/Bayrak.png",
            url: "http://sc.brtk.net:8008/;"
        },
        {
            name: "BFBS Cyprus",
            logo: "stations/images-europe/cyprus/BFBS Cyprus.png",
            url: "https://listen-ssvcbfbs.sharp-stream.com/ssvcbfbs8.aac"
        },
        {
            name: "BFBS Radio 2",
            logo: "stations/images-europe/cyprus/BFBS Radio 2.png",
            url: "https://listen-ssvcbfbs.sharp-stream.com/ssvcbfbs2.aac"
        },
        {
            name: "Dance FM",
            logo: "stations/images-europe/cyprus/Dance FM.png",
            url: "http://live.nrgplay.com/stream/1/;"
        },
        {
            name: "Deejay Radio",
            logo: "stations/images-europe/cyprus/Deejay Radio.png",
            url: "https://eradio.networksolutions.com.cy:1943/DeeJay/DeeJay.stream/playlist.m3u8"
        },
        {
            name: "Δίεση",
            logo: "stations/images-europe/cyprus/Δίεση.png",
            url: "https://r1.cloudskep.com/radio/diesi/icecast.audio"
        },
        {
            name: "Dromos FM",
            logo: "stations/images-europe/cyprus/Dromos FM.png",
            url: "https://stream.rcs.revma.com/10q3enqxbfhvv"
        },
        {
            name: "Kanali 6",
            logo: "stations/images-europe/cyprus/Kanali 6.png",
            url: "http://live3.istoikona.net:8372/stream/2/Title1=Kanali"
        },
        {
            name: "Kanali 7",
            logo: "stations/images-europe/cyprus/Kanali 7.png",
            url: "http://live.radioalphaomega.com:4012/;"
        },
        {
            name: "KISS",
            logo: "stations/images-europe/cyprus/KISS.png",
            url: "https://securestreams3.autopo.st:1417/89FM"
        },
        {
            name: "Klik FM",
            logo: "stations/images-europe/cyprus/Klik FM.png",
            url: "http://eco.onestreaming.com:8310/;"
        },
        {
            name: "Love FM",
            logo: "stations/images-europe/cyprus/Love FM.png",
            url: "http://eradio.networksolutions.com.cy:1935/LoveRadio/Loveradio.stream/playlist.m3u8"
        },
        {
            name: "Mix FM",
            logo: "stations/images-europe/cyprus/Mix FM.png",
            url: "https://link.radiojar.com/c27wx6pdh8vtv"
        },
        {
            name: "NJOY",
            logo: "stations/images-europe/cyprus/NJOY.png",
            url: "https://stream.radiojar.com/mg7kftnzka3vv"
        },
        {
            name: "Ο αληθινός Λόγος",
            logo: "stations/images-europe/cyprus/Ο αληθινός Λόγος.png",
            url: "http://r1.cloudskep.com/radio/agiosdemetrios/icecast.audio"
        },
        {
            name: "ΠΟΛΙΤΗΣ",
            logo: "stations/images-europe/cyprus/ΠΟΛΙΤΗΣ.png",
            url: "https://cdn.istoikona.com/politis/live/icecast.audio"
        },
        {
            name: "Ράδιο Πρώτο",
            logo: "stations/images-europe/cyprus/Ράδιο Πρώτο.png",
            url: "https://live3.istoikona.net:18191/stream"
        },
        {
            name: "sfera",
            logo: "stations/images-europe/cyprus/sfera.png",
            url: "https://securestreams3.autopo.st:1417/sfera"
        },
        {
            name: "Radyo Güven",
            logo: "stations/images-europe/cyprus/Radyo Güven.png",
            url: "http://uk7freenew.listen2myradio.com:6140/;"
        },
        {
            name: "Русское Радио Кипр",
            logo: "stations/images-europe/cyprus/Русское Радио Кипр.png",
            url: "https://stream.veblot.net/proxy/russianradio/stream/"
        },
        {
            name: "Super FM",
            logo: "stations/images-europe/cyprus/Super FM.png",
            url: "https://live3.istoikona.net:18826/stream"
        },
        {
            name: "Super Sport FM",
            logo: "stations/images-europe/cyprus/Super Sport FM.png",
            url: "https://sportfm-cyprus.live24.gr/sportfm-cyprus"
        },
    ],
    "czech": [
        {
            name: "ČRo D-dur",
            logo: "stations/images-europe/czech/ČRo D-dur.png",
            url: "https://rozhlas.stream/ddur_high.aac"
        },
        {
            name: "ČRo Dvojka",
            logo: "stations/images-europe/czech/ČRo Dvojka.png",
            url: "http://amp.cesnet.cz:8000/cro2-256.ogg"
        },
        {
            name: "ČRo Jazz",
            logo: "stations/images-europe/czech/ČRo Jazz.png",
            url: "https://rozhlas.stream/jazz_high.aac"
        },
        {
            name: "ČRo Plus",
            logo: "stations/images-europe/czech/ČRo Plus.png",
            url: "https://rozhlas.stream/plus_high.aac"
        },
        {
            name: "ČRo Pohoda",
            logo: "stations/images-europe/czech/ČRo Pohoda.png",
            url: "https://rozhlas.stream/pohoda_high.aac"
        },
        {
            name: "ČRo Radiožurnál",
            logo: "stations/images-europe/czech/ČRo Radiožurnál.png",
            url: "http://amp.cesnet.cz:8000/cro1-256.ogg"
        },
        {
            name: "ČRo Radiožurnál Sport",
            logo: "stations/images-europe/czech/ČRo Radiožurnál Sport.png",
            url: "https://rozhlas.stream/radiozurnal_sport_high.aac"
        },
        {
            name: "ČRo Brno",
            logo: "stations/images-europe/czech/ČRo Brno.png",
            url: "https://rozhlas.stream/brno_high.aac"
        },
        {
            name: "ČRo České Budějovice",
            logo: "stations/images-europe/czech/ČRo České Budějovice.png",
            url: "https://rozhlas.stream/ceske_budejovice_high.aac"
        },
        {
            name: "ČRo Liberec",
            logo: "stations/images-europe/czech/ČRo Liberec.png",
            url: "https://rozhlas.stream/liberec_high.aac"
        },
        {
            name: "ČRo Pardubice",
            logo: "stations/images-europe/czech/ČRo Pardubice.png",
            url: "https://rozhlas.stream/pardubice_high.aac"
        },
        {
            name: "ČRo Plzeň",
            logo: "stations/images-europe/czech/ČRo Plzeň.png",
            url: "https://rozhlas.stream/plzen_high.aac"
        },
        {
            name: "ČRo Střední Čechy",
            logo: "stations/images-europe/czech/ČRo Střední Čechy.png",
            url: "https://rozhlas.stream/region_high.aac"
        },
        {
            name: "ČRo Vltava",
            logo: "stations/images-europe/czech/ČRo Vltava.png",
            url: "http://amp.cesnet.cz:8000/cro3-256.ogg"
        },
        {
            name: "Radio Wave",
            logo: "stations/images-europe/czech/Radio Wave.png",
            url: "https://rozhlas.stream/radio_wave_high.aac"
        },
        {
            name: "Rádio Junior",
            logo: "stations/images-europe/czech/Rádio Junior.png",
            url: "https://rozhlas.stream/radio_junior_high.aac"
        },
        {
            name: "Rádio Praha",
            logo: "stations/images-europe/czech/Rádio Praha.png",
            url: "https://rozhlas.stream/radio_dab_praha_high.aac"
        },
        {
            name: "Country Radio",
            logo: "stations/images-europe/czech/Country Radio.png",
            url: "http://icecast4.play.cz/country128.mp3"
        },
        {
            name: "Český Impuls",
            logo: "stations/images-europe/czech/Český Impuls.png",
            url: "https://icecast6.play.cz/cesky-impuls.mp3"
        },
        {
            name: "DAB PLUS TOP 40",
            logo: "stations/images-europe/czech/DAB PLUS TOP 40.png",
            url: "https://icecast6.play.cz/dabplus-top40.mp3"
        },
        {
            name: "Evropa 2",
            logo: "stations/images-europe/czech/Evropa 2.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/EVROPA2AAC_SC"
        },
        {
            name: "Fajn Rádio",
            logo: "stations/images-europe/czech/Fajn Radio.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/FAJN_RADIO_128.mp3"
        },
        {
            name: "Frekvence 1",
            logo: "stations/images-europe/czech/Frekvence 1.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/FREKVENCE1AAC_SC"
        },
        {
            name: "HEY Radio",
            logo: "stations/images-europe/czech/HEY Radio.png",
            url: "https://icecast3.play.cz/hey-radio128.mp3"
        },
        {
            name: "Hitrádio City",
            logo: "stations/images-europe/czech/Hitrádio City.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/HITRADIO_CITY_PRAHAAAC_SC"
        },
        {
            name: "Radio 1",
            logo: "stations/images-europe/czech/Radio 1.png",
            url: "https://stream.rcs.revma.com/stk8hrvb938uv"
        },
        {
            name: "Rádio 7",
            logo: "stations/images-europe/czech/Rádio 7.png",
            url: "https://icecast1.play.cz/radio7cz128.ogg"
        },
        {
            name: "Rádio Beat",
            logo: "stations/images-europe/czech/Rádio Beat.png",
            url: "https://stream.rcs.revma.com/3d47nqvb938uv"
        },
        {
            name: "Rádio Blaník",
            logo: "stations/images-europe/czech/Rádio Blaník.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_BLANIK_128.mp3"
        },
        {
            name: "Rádio Bonton",
            logo: "stations/images-europe/czech/Rádio Bonton.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/BONTONAAC_SC"
        },
        {
            name: "Rádio Impuls",
            logo: "stations/images-europe/czech/Rádio Impuls.png",
            url: "http://icecast1.play.cz:80/impuls128.mp3"
        },
        {
            name: "Radio Kiss",
            logo: "stations/images-europe/czech/Kiss.png",
            url: "http://icecast4.play.cz/kiss128.mp3"
        },
        {
            name: "Radio Proglas",
            logo: "stations/images-europe/czech/Radio Proglas.png",
            url: "https://icecast1.play.cz/proglas96aac"
        },
        {
            name: "Radio SPIN",
            logo: "stations/images-europe/czech/Radio SPIN.png",
            url: "https://stream.rcs.revma.com/xcvkqtvb938uv"
        },
        {
            name: "Rádio Ukrajina",
            logo: "stations/images-europe/czech/Rádio Ukrajina.png",
            url: "https://rozhlasstream.eu/ur1.mp3"
        },
        {
            name: "Rock Radio",
            logo: "stations/images-europe/czech/Rock Radio.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/ROCK_RADIOAAC_SC"
        },
        {
            name: "RockZone",
            logo: "stations/images-europe/czech/RockZone.png",
            url: "https://icecast5.play.cz/rockzone128.mp3"
        },
        {
            name: "Signál Rádio",
            logo: "stations/images-europe/czech/Signál Rádio.png",
            url: "https://stream.rcs.revma.com/9sw1nuvb938uv"
        },
        {
            name: "ZUN rádio",
            logo: "stations/images-europe/czech/ZUN rádio.png",
            url: "https://icecast9.play.cz/zun192.mp3"
        },
    ],
    "denmark": [
        {
            name: "DR P1",
            logo: "stations/images-europe/denmark/DR P1.png",
            url: "http://live-icy.gslb01.dr.dk/A/A03H.mp3"
        },
        {
            name: "DR P2",
            logo: "stations/images-europe/denmark/DR P2.png",
            url: "http://live-icy.gss.dr.dk/A/A04L.mp3"
        },
        {
            name: "DR P3",
            logo: "stations/images-europe/denmark/DR P3.png",
            url: "http://live-icy.gss.dr.dk/A/A05L.mp3"
        },
        {
            name: "DR P4",
            logo: "stations/images-europe/denmark/DR P4.png",
            url: "http://live-icy.gss.dr.dk/A/A08L.mp3"
        },
        {
            name: "DR P5",
            logo: "stations/images-europe/denmark/DR P5.png",
            url: "http://live-icy.gss.dr.dk/A/A25L.mp3"
        },
        {
            name: "DR P6",
            logo: "stations/images-europe/denmark/DR P6.png",
            url: "http://live-icy.gss.dr.dk/A/A29H.mp3"
        },
        {
            name: "DR P8",
            logo: "stations/images-europe/denmark/DR P8.png",
            url: "http://live-icy.gss.dr.dk/A/A22H.mp3"
        },
        {
            name: "Classic FM",
            logo: "stations/images-europe/denmark/Classic FM.png",
            url: "https://netradio.classicfm.dk/cla8d"
        },
        {
            name: "Classic Rock",
            logo: "stations/images-europe/denmark/Classic Rock.png",
            url: "https://netradio.classicfm.dk/classicrock"
        },
        {
            name: "mix 7",
            logo: "stations/images-europe/denmark/mix 7.png",
            url: "https://live-bauerdk.sharp-stream.com/Mix7.mp3"
        },
        {
            name: "myROCK",
            logo: "stations/images-europe/denmark/myROCK.png",
            url: "https://live-bauerdk.sharp-stream.com/myrock_dk_mp3"
        },
        {
            name: "NOVA",
            logo: "stations/images-europe/denmark/NOVA.png",
            url: "https://live-bauerdk.sharp-stream.com/nova_dk_mp3"
        },
        {
            name: "PodRadio",
            logo: "stations/images-europe/denmark/PodRadio.png",
            url: "https://stream.rcs.revma.com/czgf2408w33vv"
        },
        {
            name: "Pop FM",
            logo: "stations/images-europe/denmark/Pop FM.png",
            url: "https://live-bauerdk.sharp-stream.com/popfm_dk_mp3"
        },
        {
            name: "Pop FM 80'er",
            logo: "stations/images-europe/denmark/Pop FM 80'er.png",
            url: "https://live-bauerdk.sharp-stream.com/popfm80.mp3"
        },
        {
            name: "Planet Rock",
            logo: "stations/images-europe/denmark/Planet Rock.png",
            url: "https://live-bauerdk.sharp-stream.com/DK_HQ_RP40.aac"
        },
        {
            name: "Radio 100",
            logo: "stations/images-europe/denmark/Radio 100.png",
            url: "https://live-bauerdk.sharp-stream.com/radio100_dk_mp3"
        },
        {
            name: "Radio ALFA",
            logo: "stations/images-europe/denmark/Radio ALFA.png",
            url: "https://radioserver.dk/alfamidt"
        },
        {
            name: "Radio Mars",
            logo: "stations/images-europe/denmark/Radio Mars.png",
            url: "https://radio2.digidi.net/listen/mars/radio_mid.mp3"
        },
        {
            name: "Radio Soft",
            logo: "stations/images-europe/denmark/Radio Soft.png",
            url: "https://live-bauerdk.sharp-stream.com/radiosoft_dk_mp3"
        },
        {
            name: "Radio Vinyl",
            logo: "stations/images-europe/denmark/Radio Vinyl.png",
            url: "https://live-bauerdk.sharp-stream.com/Vinyl_dk.mp3"
        },
        {
            name: "RADIO4",
            logo: "stations/images-europe/denmark/RADIO4.png",
            url: "https://netradio.radio4.dk/radio4"
        },
        {
            name: "Skala.fm",
            logo: "stations/images-europe/denmark/Skala.fm.png",
            url: "https://netradio.skala.fm/ska8d"
        },
        {
            name: "The Voice",
            logo: "stations/images-europe/denmark/The Voice.png",
            url: "https://live-bauerdk.sharp-stream.com/thevoice_dk_mp3"
        },
    ],
    "egypt": [
        {
            name: "ERTU Al Quran al Kareem",
            logo: "stations/images-europe/egypt/ERTU.png",
            url: "http://stream.radiojar.com/8s5u5tpdtwzuv"
        },/*
        {
            name: "ERTU Al Orobi",
            logo: "stations/images-europe/egypt/ERTU.png",
            url: "https://livestreaming5.onlinehorizons.net/hls-live/ElBernamegElOrobi/_definst_/liveevent/livestream.m3u8"
        },
        {
            name: "MIX FM 87.8",
            logo: "stations/images-europe/egypt/MIX FM 87.8.png",
            url: "https://stream.zeno.fm/na3vpvn10qruv"
        },*/
        {
            name: "Radio Hits 88.2",
            logo: "stations/images-europe/egypt/Radio Hits 88.2.png",
            url: "https://radiohits882.radioca.st/;"
        },
        {
            name: "El Radio 9090 FM",
            logo: "stations/images-europe/egypt/El Radio 9090 FM.png",
            url: "http://9090streaming.mobtada.com/9090FMEGYPT"
        },
        {
            name: "95 FM",
            logo: "stations/images-europe/egypt/95 FM.png",
            url: "https://radio95.radioca.st/;"
        },
        {
            name: "Mega FM",
            logo: "stations/images-europe/egypt/Mega FM.png",
            url: "http://nebula.shoutca.st:8211/mp3"
        },
        {
            name: "Nagham FM",
            logo: "stations/images-europe/egypt/Nagham FM.png",
            url: "https://ahmsamir.radioca.st/stream"
        },
        {
            name: "Nile FM",
            logo: "stations/images-europe/egypt/Nile FM.png",
            url: "https://audio.nrpstream.com/listen/nile_fm/radio.mp3"
        },
        {
            name: "Nogoum FM",
            logo: "stations/images-europe/egypt/Nogoum FM.png",
            url: "https://audio.nrpstream.com/listen/nogoumfm/radio.mp3"
        },
        {
            name: "NRJ Egypt",
            logo: "stations/images-europe/egypt/NRJ Egypt.png",
            url: "https://nrjstreaming.ahmed-melege.com/nrjegypt"
        },/*
        {
            name: "Radio Masr",
            logo: "stations/images-europe/egypt/Radio Masr.png",
            url: "https://streaming.radio.co/scc13a6b96/listen"
        },*/
    ],
    "estonia": [
        {
            name: "Vikerraadio",
            logo: "stations/images-europe/estonia/Vikerraadio.png",
            url: "http://icecast.err.ee/vikerraadio.mp3"
        },
        {
            name: "Raadio 2",
            logo: "stations/images-europe/estonia/Raadio 2.png",
            url: "http://icecast.err.ee/raadio2.mp3"
        },
        {
            name: "Klassikaraadio",
            logo: "stations/images-europe/estonia/Klassikaraadio.png",
            url: "http://icecast.err.ee/klassikaraadio.mp3"
        },
        {
            name: "Raadio 4",
            logo: "stations/images-europe/estonia/Raadio 4.png",
            url: "http://icecast.err.ee/raadio4madal.mp3"
        },
        {
            name: "MyHits",
            logo: "stations/images-europe/estonia/MyHits.png",
            url: "http://router.euddn.net/8103046e16b71d15d692b57c187875c7/myhits.aac"
        },
        {
            name: "Power Hit Radio",
            logo: "stations/images-europe/estonia/Power Hit Radio.png",
            url: "https://ice.leviracloud.eu/phr96-aac"
        },
        {
            name: "Raadio Elmar",
            logo: "stations/images-europe/estonia/Raadio Elmar.png",
            url: "https://router.euddn.net/8103046e16b71d15d692b57c187875c7/elmar.aac"
        },
        {
            name: "Raadio Kuku",
            logo: "stations/images-europe/estonia/Raadio Kuku.png",
            url: "http://router.euddn.net/8103046e16b71d15d692b57c187875c7/kuku.aac"
        },
        {
            name: "Relax FM",
            logo: "stations/images-europe/estonia/Relax FM.png",
            url: "https://stream.relaxfm.ee/relax"
        },
        {
            name: "Retro FM",
            logo: "stations/images-europe/estonia/Retro FM.png",
            url: "https://stream.skymedia.ee/live/RETRO"
        },
        {
            name: "Ruskoe Radio",
            logo: "stations/images-europe/estonia/Ruskoe Radio.png",
            url: "https://stream.skymedia.ee/live/RR"
        },
        {
            name: "Sky Plus",
            logo: "stations/images-europe/estonia/Sky Plus.png",
            url: "https://stream.skymedia.ee/live/SKYPLUS"
        },
        {
            name: "Star FM",
            logo: "stations/images-europe/estonia/Star FM.png",
            url: "https://ice.leviracloud.eu/star96-aac"
        },
    ],
    "faroe": [
        {
            name: "FM1",
            logo: "stations/images-europe/faroe/FM1.png",
            url: "http://stream.midlar.fo/ras2"
        },
        {
            name: "Kringvarp Føroya",
            logo: "stations/images-europe/faroe/Kringvarp Føroya.png",
            url: "http://netvarp.kringvarp.fo:443/uvhm"
        },
        {
            name: "Lindin",
            logo: "stations/images-europe/faroe/Lindin.png",
            url: "https://high.lindin.fo/"
        },
        {
            name: "Radio.fo",
            logo: "stations/images-europe/faroe/Radio.fo.png",
            url: "https://streaming.radio.co/s4d14b9fcc/listen"
        },
        {
            name: "VoxPop",
            logo: "stations/images-europe/faroe/VoxPop.png",
            url: "http://stream.midlar.fo/voxpop"
        },
    ],
    "finland": [
        {
            name: "Yle Radio 1",
            logo: "stations/images-europe/finland/YLE Radio 1.png",
            url: "https://yleradiolive.akamaized.net/hls/live/2027672/in-YleRadio1/master.m3u8"
        },
        {
            name: "Yle Radio Suomi",
            logo: "stations/images-europe/finland/YLE Radio Suomi.png",
            url: "https://yleradiolive.akamaized.net/hls/live/2027675/in-YleRS/master.m3u8"
        },
        {
            name: "Yle Vega",
            logo: "stations/images-europe/finland/YLE Vega.png",
            url: "https://yleradiolive.akamaized.net/hls/live/2027712/in-YleVegaOsterbotten/master.m3u8"
        },
        {
            name: "YleX",
            logo: "stations/images-europe/finland/YleX.png",
            url: "https://yleradiolive.akamaized.net/hls/live/2027674/in-YleX/master.m3u8"
        },
        {
            name: "Yle X3M",
            logo: "stations/images-europe/finland/Yle X3M.png",
            url: "https://yleradiolive.akamaized.net/hls/live/2027678/in-YleX3M/master.m3u8"
        },
        {
            name: "Aito Iskelmä",
            logo: "stations/images-europe/finland/Aito Iskelmä.png",
            url: "https://ms-live-aitoiskelma.nm-elemental.nelonenmedia.fi/master.m3u8"
        },
        {
            name: "Basso",
            logo: "stations/images-europe/finland/Basso.png",
            url: "https://stream-redirect.bauermedia.fi/basso/bassoradio_64.aac?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein"
        },
        {
            name: "Classic Hits",
            logo: "stations/images-europe/finland/Classic Hits.png",
            url: "https://ms-live-classichits.nm-elemental.nelonenmedia.fi/master.m3u8"
        },
        {
            name: "Easy Hits",
            logo: "stations/images-europe/finland/Easy Hits.png",
            url: "https://ms-live-easyhits.nm-elemental.nelonenmedia.fi/master.m3u8"
        },
        {
            name: "ENERGY",
            logo: "stations/images-europe/finland/Energy.png",
            url: "https://stream-redirect.bauermedia.fi/nrj/nrj_64.aac?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein"
        },
        {
            name: "Groove FM",
            logo: "stations/images-europe/finland/Groove FM.png",
            url: "https://ms-live-groove.nm-elemental.nelonenmedia.fi/master.m3u8"
        },
        {
            name: "HitMix",
            logo: "stations/images-europe/finland/HitMix.png",
            url: "https://ms-live-hitmix.nm-elemental.nelonenmedia.fi/master.m3u8"
        },
        {
            name: "Iskelmä",
            logo: "stations/images-europe/finland/Iskelmä.png",
            url: "https://stream-redirect.bauermedia.fi/iskelma/iskelma_64.aac?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein"
        },
        {
            name: "Järviradio",
            logo: "stations/images-europe/finland/Järviradio.png",
            url: "https://jarviradio.radiotaajuus.fi:9000/jr"
        },
        {
            name: "Kasari",
            logo: "stations/images-europe/finland/Kasari.png",
            url: "https://stream-redirect.bauermedia.fi/kasari/kasari_64.aac?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein"
        },
        {
            name: "Loop",
            logo: "stations/images-europe/finland/Loop.png",
            url: "https://ms-live-loop.nm-elemental.nelonenmedia.fi/master.m3u8"
        },
        {
            name: "POPfm",
            logo: "stations/images-europe/finland/POPfm.png",
            url: "https://stream.madmenmedia.se/popfm"
        },
        {
            name: "Radio City",
            logo: "stations/images-europe/finland/Radio City.png",
            url: "https://stream-redirect.bauermedia.fi/radiocity/radiocity_128.mp3?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein"
        },
        {
            name: "Radio Classic",
            logo: "stations/images-europe/finland/Radio Classic.png",
            url: "https://stream-redirect.bauermedia.fi/classic/classic_64.aac?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein"
        },
        {
            name: "Radio Dei",
            logo: "stations/images-europe/finland/Radio Dei.png",
            url: "http://isojako.radiodei.fi:8000/yleisohjelma"
        },
        {
            name: "Radio Nostalgia",
            logo: "stations/images-europe/finland/Radio Nostalgia.png",
            url: "https://stream-redirect.bauermedia.fi/nostalgia/nostalgia_128.mp3?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein"
        },
        {
            name: "Radio Nova",
            logo: "stations/images-europe/finland/Radio Nova.png",
            url: "https://stream-redirect.bauermedia.fi/radionova/radionova_64.aac?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein"
        },
        {
            name: "Radio Patmos",
            logo: "stations/images-europe/finland/Radio Patmos.png",
            url: "https://s3.yesstreaming.net:7011/radio"
        },
        {
            name: "Radio POOKI",
            logo: "stations/images-europe/finland/Radio Pooki.png",
            url: "https://stream-redirect.bauermedia.fi/radiopooki/radiopooki_64.aac?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein"
        },
        {
            name: "Radio Rock",
            logo: "stations/images-europe/finland/Radio Rock.png",
            url: "https://ms-live-radiorock.nm-elemental.nelonenmedia.fi/master.m3u8"
        },
        {
            name: "Radio Suomipop",
            logo: "stations/images-europe/finland/Radio Suomipop.png",
            url: "https://ms-live-suomipop.nm-elemental.nelonenmedia.fi/master.m3u8"
        },
        {
            name: "SuomiRäp",
            logo: "stations/images-europe/finland/Suomiräp.png",
            url: "https://stream-redirect.bauermedia.fi/suomirap/suomirap_64.aac?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein"
        },
        {
            name: "SuomiRock",
            logo: "stations/images-europe/finland/SuomiRock.png",
            url: "https://stream-redirect.bauermedia.fi/suomirock/suomirock_64.aac?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein"
        },
        {
            name: "Top51",
            logo: "stations/images-europe/finland/Top51.png",
            url: "https://stream-redirect.bauermedia.fi/top51/top51_64.aac?aw_0_1st.bauer_loggedin=false&aw_0_1st.playerid=BMUK_tunein"
        },
    ],
    "france": [
        {
            name: "Ici",
            logo: "stations/images-europe/france/Ici.png",
            url: "https://icecast.radiofrance.fr/fbevenementiel-midfi.mp3"
        },
        {
            name: "France Culture",
            logo: "stations/images-europe/france/France Culture.png",
            url: "http://direct.franceculture.fr/live/franceculture-midfi.mp3"
        },
        {
            name: "France Info",
            logo: "stations/images-europe/france/France Info.png",
            url: "http://direct.franceinfo.fr/live/franceinfo-midfi.mp3"
        },
        {
            name: "France Inter",
            logo: "stations/images-europe/france/France Inter.png",
            url: "http://direct.franceinter.fr/live/franceinter-midfi.mp3"
        },
        {
            name: "France Musique",
            logo: "stations/images-europe/france/France Musique.png",
            url: "http://direct.francemusique.fr/live/francemusique-midfi.mp3"
        },
        {
            name: "Ado",
            logo: "stations/images-europe/france/Ado.png",
            url: "https://start-adofm.ice.infomaniak.ch/start-adofm-high.mp3"
        },
        {
            name: "AirZen",
            logo: "stations/images-europe/france/AirZen.png",
            url: "https://stream.rcs.revma.com/vuumdncf368uv"
        },
        {
            name: "Alouette",
            logo: "stations/images-europe/france/Alouette.png",
            url: "https://alouette-nantes.ice.infomaniak.ch/alouette-nantes-128.mp3"
        },
        {
            name: "Autoroute Info",
            logo: "stations/images-europe/france/Autoroute Info.png",
            url: "http://media.autorouteinfo.fr:8000/direct_nord.mp3"
        },
        {
            name: "Beur FM",
            logo: "stations/images-europe/france/Beur FM.png",
            url: "https://beurfm.ice.infomaniak.ch/beurfm-high.mp3"
        },
        {
            name: "BFM Radio",
            logo: "stations/images-europe/france/BFM Radio.png",
            url: "https://audio.bfmtv.com/bfmradio_128.mp3"
        },
        {
            name: "BFM Business",
            logo: "stations/images-europe/france/BFM Business.png",
            url: "https://audio.bfmtv.com/bfmbusiness_128.mp3"
        },
        {
            name: "CAPSAO",
            logo: "stations/images-europe/france/CAPSAO.png",
            url: "https://capsaohdf.ice.infomaniak.ch/capsaohdf-128.aac"
        },
        {
            name: "Chante France",
            logo: "stations/images-europe/france/Chante France.png",
            url: "https://chantefrance.ice.infomaniak.ch/chantefrance-96.aac"
        },
        {
            name: "Chérie FM",
            logo: "stations/images-europe/france/Chérie FM.png",
            url: "http://cdn.nrjaudio.fm/audio1/fr/30201/mp3_128.mp3?origine=listenlive"
        },
        {
            name: "Crooner Radio",
            logo: "stations/images-europe/france/Crooner Radio.png",
            url: "https://croonerradio.ice.infomaniak.ch/croonerradio-midfi.mp3"
        },
        {
            name: "Europe 1",
            logo: "stations/images-europe/france/Europe 1.png",
            url: "https://stream.europe1.fr/europe1.aac"
        },
        {
            name: "Europe 2",
            logo: "stations/images-europe/france/Europe 2.svg",
            url: "https://europe2.lmn.fm/europe2.aac"
        },
        {
            name: "FIP",
            logo: "stations/images-europe/france/FIP.png",
            url: "http://direct.fipradio.fr/live/fip-midfi.mp3"
        },
        {
            name: "FORUM",
            logo: "stations/images-europe/france/FORUM.png",
            url: "https://start-forum.ice.infomaniak.ch/start-forum-high.mp3"
        },
        {
            name: "Fun Radio",
            logo: "stations/images-europe/france/Fun Radio.png",
            url: "http://ais.rtl.fr:80/fun-1-44-128"
        },
        {
            name: "Generations",
            logo: "stations/images-europe/france/Generations.png",
            url: "https://generationfm.ice.infomaniak.ch/generationfm-high.aac"
        },
        {
            name: "Jazz Radio",
            logo: "stations/images-europe/france/Jazz Radio.png",
            url: "https://jazzradio.ice.infomaniak.ch/jazzradio-high.mp3"
        },
        {
            name: "KTO Radio",
            logo: "stations/images-europe/france/KTO Radio.png",
            url: "https://live-radio-kto.akamaized.net/hls/live/2103303-b/KTO/index.m3u8"
        },
        {
            name: "La Radio Plus",
            logo: "stations/images-europe/france/La Radio Plus.png",
            url: "https://laradioplus.ice.infomaniak.ch/laradioplus-high.mp3"
        },
        {
            name: "Latina",
            logo: "stations/images-europe/france/Latina.png",
            url: "https://start-latina.ice.infomaniak.ch/start-latina-high.mp3"
        },
        {
            name: "M Radio",
            logo: "stations/images-europe/france/M Radio.png",
            url: "http://mfm.ice.infomaniak.ch/mfm-128.mp3"
        },
        {
            name: "Melody Vintage Radio",
            logo: "stations/images-europe/france/Melody Vintage Radio.png",
            url: "https://stream.rcs.revma.com/5a05fstup42vv"
        },
        {
            name: "Mouv'",
            logo: "stations/images-europe/france/Mouv'.png",
            url: "https://direct.mouv.fr/live/mouv-midfi.mp3"
        },
        {
            name: "Nostalgie",
            logo: "stations/images-europe/france/Nostalgie.png",
            url: "http://cdn.nrjaudio.fm/audio1/fr/30601/mp3_128.mp3?origine=listenlive"
        },
        {
            name: "NRJ",
            logo: "stations/images-europe/france/NRJ.png",
            url: "http://cdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3?origine=listenlive"
        },
        {
            name: "Ouï FM",
            logo: "stations/images-europe/france/Ouï FM.png",
            url: "https://ouifm.ice.infomaniak.ch/ouifm-high.mp3"
        },
        {
            name: "Radio Bonheur",
            logo: "stations/images-europe/france/Radio Bonheur.png",
            url: "https://radiobonheur.ice.infomaniak.ch/radiobonheur-128-1.mp3"
        },
        {
            name: "Radio Classique",
            logo: "stations/images-europe/france/Radio Classique.png",
            url: "https://radioclassique.ice.infomaniak.ch/radioclassique-high.mp3"
        },
        {
            name: "Radio FG",
            logo: "stations/images-europe/france/Radio FG.png",
            url: "http://radiofg.impek.com/fg.mp3"
        },
        {
            name: "Radio Nova",
            logo: "stations/images-europe/france/Radio Nova.png",
            url: "https://novazz.ice.infomaniak.ch/novazz-128.mp3"
        },
        {
            name: "Radio Orient",
            logo: "stations/images-europe/france/Radio Orient.png",
            url: "https://stream.rcs.revma.com/7hnrkawf4p8uv"
        },
        {
            name: "Radio Scoop",
            logo: "stations/images-europe/france/Radio Scoop.png",
            url: "https://radioscooplyon.ice.infomaniak.ch/radioscoop-lyon-64.aac"
        },
        {
            name: "Radio Vinci Autoroutes",
            logo: "stations/images-europe/france/Radio Vinci Autoroutes.png",
            url: "http://str0.creacast.com/radio_vinci_autoroutes_6"
        },
        {
            name: "RCF",
            logo: "stations/images-europe/france/RCF.png",
            url: "https://rcf.streamakaci.com/rcf41.mp3"
        },
        {
            name: "RFM",
            logo: "stations/images-europe/france/RFM.png",
            url: "https://stream.rfm.fr/rfm.aac"
        },
        {
            name: "Rire et Chansons",
            logo: "stations/images-europe/france/Rire et Chansons.png",
            url: "http://cdn.nrjaudio.fm/audio1/fr/30401/mp3_128.mp3?origine=fluxradios"
        },
        {
            name: "RMC",
            logo: "stations/images-europe/france/RMC.png",
            url: "https://audio.bfmtv.com/rmcradio_128.mp3"
        },
        {
            name: "RTL",
            logo: "stations/images-europe/france/RTL.png",
            url: "http://ais.rtl.fr:80/rtl-1-44-128"
        },
        {
            name: "RTL 2",
            logo: "stations/images-europe/france/RTL 2.png",
            url: "http://ais.rtl.fr:80/rtl2-1-44-128"
        },
        {
            name: "Sanef 107.7",
            logo: "stations/images-europe/france/Sanef 107.7.png",
            url: "https://sanef.ice.infomaniak.ch/sanef1077-idf.mp3"
        },
        {
            name: "Skyrock",
            logo: "stations/images-europe/france/Skyrock.png",
            url: "http://icecast.skyrock.net/s/natio_mp3_128k"
        },
        {
            name: "Skyrock Klassiks",
            logo: "stations/images-europe/france/Skyrock Klassiks.png",
            url: "https://icecast.skyrock.net/s/klassiks_aac_128k"
        },
        {
            name: "Sud Radio",
            logo: "stations/images-europe/france/Sud Radio.png",
            url: "http://start-sud.ice.infomaniak.ch/start-sud-high.mp3"
        },
        {
            name: "TOTEM",
            logo: "stations/images-europe/france/TOTEM.png",
            url: "https://aratotem.ice.infomaniak.ch/tarn-et-garonne.mp3"
        },
        {
            name: "TSF Jazz",
            logo: "stations/images-europe/france/TSF Jazz.png",
            url: "https://tsfjazz.ice.infomaniak.ch/tsfjazz-high.mp3"
        },
        {
            name: "Vibration",
            logo: "stations/images-europe/france/Vibration.png",
            url: "https://webvib-region.ice.infomaniak.ch/webvib-region-128.mp3"
        },
        {
            name: "Virgin Radio",
            logo: "stations/images-europe/france/Virgin Radio.png",
            url: "https://virginradio.ice.infomaniak.ch/virgin-radio.mp3"
        },
    ],
    "georgia": [
        {
            name: "რადიო 1",
            logo: "stations/images-europe/georgia/რადიო 1.png",
            url: "https://tv.cdn.xsg.ge/gpb-radio1/index.m3u8"
        },
        {
            name: "იმედი",
            logo: "stations/images-europe/georgia/იმედი.png",
            url: "https://tv.cdn.xsg.ge/radioimedi/stream01/index.m3u8"
        },
        {
            name: "Avtoradio",
            logo: "stations/images-europe/georgia/Avtoradio.png",
            url: "http://188.93.95.83/cld9-0386/avtoradio/index.m3u8"
        },
        {
            name: "არ დაიდარდო",
            logo: "stations/images-europe/georgia/არ დაიდარდო.png",
            url: "http://188.93.95.83/cld9-0386/ardaidardo/index.m3u8"
        },
        {
            name: "Fortuna",
            logo: "stations/images-europe/georgia/Fortuna.png",
            url: "http://188.93.95.83/cld9-0386/fortuna/index.m3u8"
        },
        {
            name: "Fortuna Plus",
            logo: "stations/images-europe/georgia/Fortuna Plus.png",
            url: "http://188.93.95.83/cld9-0386/fortunaplus/index.m3u8"
        },
        {
            name: "მთავარი გვერდი",
            logo: "stations/images-europe/georgia/მთავარი გვერდი.png",
            url: "https://live.radio.odishi.ge/odishi.mp3"
        },
        {
            name: "რადიო აჭარა",
            logo: "stations/images-europe/georgia/რადიო აჭარა.png",
            url: "https://edge.mixlr.com/channel/bzorq"
        },
        {
            name: "რადიო მაესტროს",
            logo: "stations/images-europe/georgia/Radio Maestro.png",
            url: "http://nue01-edge01.itdc.ge/fm-maestro-94.7/index.m3u8"
        },
        {
            name: "Radio Palitra",
            logo: "stations/images-europe/georgia/Radio Palitra.png",
            url: "https://radiostream.palitra.ge/stream.mp3"
        },
        {
            name: "Sputnik Абхазия",
            logo: "stations/images-europe/georgia/Sputnik Абхазия.png",
            url: "https://icecast-rian.cdnvideo.ru/voicesuh"
        },
        {
            name: "Voice Of Abkhazia",
            logo: "stations/images-europe/georgia/Voice Of Abkhazia.png",
            url: "http://109.172.136.60:8081/broadwavelow.mp3"
        },
    ],
    "germany": [
        {
            name: "Deutschlandfunk",
            logo: "stations/images-europe/germany/Deutschlandfunk.png",
            url: "https://st01.sslstream.dlf.de/dlf/01/high/aac/stream.aac"
        },
        {
            name: "Deutschlandfunk Kultur",
            logo: "stations/images-europe/germany/Deutschlandfunk Kultur.png",
            url: "https://st02.sslstream.dlf.de/dlf/02/high/aac/stream.aac"
        },
        {
            name: "Deutschlandfunk Nova",
            logo: "stations/images-europe/germany/Deutschlandfunk Nova.png",
            url: "https://st03.sslstream.dlf.de/dlf/03/high/aac/stream.aac"
        },
        {
            name: "DRadio DokDeb",
            logo: "stations/images-europe/germany/DRadio DokDeb.png",
            url: "https://st04.sslstream.dlf.de/dlf/04/high/aac/stream.aac"
        },
        {
            name: "80s80s",
            logo: "stations/images-europe/germany/80s80s.png",
            url: "https://regiocast.streamabc.net/regc-80s80smweb2517500-mp3-192-1672667"
        },
        {
            name: "90s90s",
            logo: "stations/images-europe/germany/90s90s.png",
            url: "https://streams.90s90s.de/pop/mp3-192"
        },
        {
            name: "Absolut Bella",
            logo: "stations/images-europe/germany/Absolut Bella.png",
            url: "https://absolut-bella.live-sm.absolutradio.de/absolut-bella"
        },
        {
            name: "Absolut Germany",
            logo: "stations/images-europe/germany/Absolut Germany.png",
            url: "https://absolut-germany.live-sm.absolutradio.de/absolut-germany"
        },
        {
            name: "Absolut HOT",
            logo: "stations/images-europe/germany/Absolut HOT.png",
            url: "https://absolut-hot.live-sm.absolutradio.de/absolut-hot"
        },
        {
            name: "Absolut Oldie Classics",
            logo: "stations/images-europe/germany/Absolut Oldie Classics.png",
            url: "https://absolut-oldieclassics.live-sm.absolutradio.de/absolut-oldieclassics"
        },
        {
            name: "Absolut Relax",
            logo: "stations/images-europe/germany/Absolut Relax.png",
            url: "https://absolut-relax.live-sm.absolutradio.de/absolut-relax"
        },
        {
            name: "Absolut TOP",
            logo: "stations/images-europe/germany/Absolut TOP.png",
            url: "https://absolut-top.live-sm.absolutradio.de/absolut-top"
        },
        {
            name: "AIDAradio",
            logo: "stations/images-europe/germany/AIDAradio.png",
            url: "https://frontend.streamonkey.net/aidaradio-meergefuehl"
        },
        {
            name: "Ballermann Radio",
            logo: "stations/images-europe/germany/Ballermann Radio.png",
            url: "https://audio.bmr-radio.de/ballermann/mp3-192/"
        },
        {
            name: "Brillux Radio",
            logo: "stations/images-europe/germany/Brillux Radio.png",
            url: "https://web.streams.brillux.radio/brillux-radio"
        },
        {
            name: "ENERGY Digital",
            logo: "stations/images-europe/germany/Energy.png",
            url: "https://frontend.streamonkey.net/energy-digital/stream/mp3"
        },
        {
            name: "ERF Plus",
            logo: "stations/images-europe/germany/ERF Plus.png",
            url: "https://addrad.io/44599kb"
        },
        {
            name: "Klassik Radio Digital",
            logo: "stations/images-europe/germany/Klassik Radio.png",
            url: "https://live.streams.klassikradio.de/klassikradio-deutschland"
        },
        {
            name: "Beats Radio",
            logo: "stations/images-europe/germany/Beats Radio.png",
            url: "https://live.streams.klassikradio.de/beats-radio/stream/mp3"
        },
        {
            name: "NOSTALGIE",
            logo: "stations/images-europe/germany/NOSTALGIE.png",
            url: "https://frontend.streamonkey.net/nostalgie-live/stream/mp3"
        },
        {
            name: "OLDIE ANTENNE",
            logo: "stations/images-europe/germany/OLDIE ANTENNE.png",
            url: "https://s3-webradio.oldie-antenne.de/oldie-antenne/stream"
        },
        {
            name: "RADIO BOB!",
            logo: "stations/images-europe/germany/Radio BOB.png",
            url: "https://streams.radiobob.de/bob-national/mp3-192"
        },
        {
            name: "Radio Horeb",
            logo: "stations/images-europe/germany/Radio Horeb.png",
            url: "https://rs16.stream24.net/horeb.mp3"
        },
        {
            name: "ROCK ANTENNE",
            logo: "stations/images-europe/germany/ROCK ANTENNE.png",
            url: "https://s7-webradio.rockantenne.de/rockantenne/stream/mp3"
        },
        {
            name: "RTL Radio",
            logo: "stations/images-europe/germany/RTL Radio.png",
            url: "https://stream.rtlradio.de/rtl-de-national/mp3-128/konsole"
        },
        {
            name: "Radio Schlagerparadies",
            logo: "stations/images-europe/germany/Radio Schlagerparadies.png",
            url: "http://surfmusik.radioschlagerparadies.de/schlagerparadies128k.mp3"
        },
        {
            name: "Schwarzwaldradio",
            logo: "stations/images-europe/germany/Schwarzwaldradio.png",
            url: "https://frontend.streamonkey.net/fho-schwarzwaldradiolive/stream/mp3"
        },
        {
            name: "sunshine live",
            logo: "stations/images-europe/germany/Sunshine live.png",
            url: "https://stream.sunshine-live.de/live/mp3-192"
        },
        {
            name: "TOGGO Radio",
            logo: "stations/images-europe/germany/TOGGO Radio.png",
            url: "https://radio.toggo.de/live/mp3-192"
        },
    ],
    "germany-br": [
        {
            name: "Bayern 1",
            logo: "stations/images-europe/germany-br/Bayern 1.png",
            url: "https://dispatcher.rndfnk.com/br/br1/obb/mp3/mid"
        },
        {
            name: "Bayern 2",
            logo: "stations/images-europe/germany-br/Bayern 2.png",
            url: "https://dispatcher.rndfnk.com/br/br2/live/mp3/mid"
        },
        {
            name: "Bayern 3",
            logo: "stations/images-europe/germany-br/Bayern 3.png",
            url: "https://dispatcher.rndfnk.com/br/br3/live/mp3/mid"
        },
        {
            name: "BR Schlager",
            logo: "stations/images-europe/germany-br/BR Schlager.png",
            url: "https://dispatcher.rndfnk.com/br/brschlager/live/mp3/mid"
        },
        {
            name: "BR Heimat",
            logo: "stations/images-europe/germany-br/BR Heimat.png",
            url: "https://dispatcher.rndfnk.com/br/brheimat/live/mp3/mid"
        },
        {
            name: "BR Klassik",
            logo: "stations/images-europe/germany-br/BR-Klassik.png",
            url: "https://dispatcher.rndfnk.com/br/brklassik/live/mp3/high"
        },
        {
            name: "BR24",
            logo: "stations/images-europe/germany-br/BR24.png",
            url: "https://dispatcher.rndfnk.com/br/br24/live/mp3/mid"
        },
        {
            name: "BR24live",
            logo: "stations/images-europe/germany-br/BR24live.png",
            url: "https://dispatcher.rndfnk.com/br/br24live/live/mp3/mid"
        },
        {
            name: "PULS",
            logo: "stations/images-europe/germany-br/BR Puls.png",
            url: "https://dispatcher.rndfnk.com/br/puls/live/mp3/mid"
        },
        {
            name: "AFN Bavaria",
            logo: "stations/images-europe/germany-br/AFN Bavaria.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/AFNE_BAVAAC_SC"
        },
        {
            name: "Antenne Bayern",
            logo: "stations/images-europe/germany-br/Antenne Bayern.png",
            url: "https://s1-webradio.webradio.de/antenne"
        },
        {
            name: "egoFM",
            logo: "stations/images-europe/germany-br/egoFM.png",
            url: "http://www.egofm.de/stream/128kb"
        },
        {
            name: "Radio Arabella Bayern",
            logo: "stations/images-europe/germany-br/Radio Arabella Bayern.png",
            url: "https://live.stream.radioarabella.de/radioarabella-bayern/stream/mp3"
        },
        {
            name: "TOP FM",
            logo: "stations/images-europe/germany-br/TOP FM.png",
            url: "https://topfm-live.cast.addradio.de/topfm/live/mp3/high"
        },
    ],
    "germany-bremen": [
        {
            name: "Bremen Eins",
            logo: "stations/images-europe/germany-ndr/Bremen Eins.png",
            url: "https://icecast.radiobremen.de/rb/bremeneins/live/mp3/128/stream.mp3"
        },
        {
            name: "Bremen Zwei",
            logo: "stations/images-europe/germany-ndr/Bremen Zwei.png",
            url: "https://icecast.radiobremen.de/rb/bremenzwei/live/mp3/128/stream.mp3"
        },
        {
            name: "Bremen Vier",
            logo: "stations/images-europe/germany-ndr/Bremen Vier.png",
            url: "https://icecast.radiobremen.de/rb/bremenvier/live/mp3/128/stream.mp3"
        },
        {
            name: "Bremen NEXT",
            logo: "stations/images-europe/germany-ndr/Bremen NEXT.png",
            url: "https://icecast.radiobremen.de/rb/bremennext/live/mp3/128/stream.mp3"
        },
        {
            name: "COSMO",
            logo: "stations/images-europe/germany/COSMO.png",
            url: "https://dispatcher.rndfnk.com/wdr/cosmo/live/mp3/128/stream.mp3"
        },
        {
            name: "ENERGY Bremen",
            logo: "stations/images-europe/germany/Energy.png",
            url: "https://stream.ffn.de/energybremen/mp3-192/livestream.mp3"
        },
        {
            name: "NORDSEEWELLE 2",
            logo: "stations/images-europe/germany-ndr/NORDSEEWELLE 2.png",
            url: "https://nsw.streamabc.net/nsw-radionsw2-mp3-128-3629106"
        },
        {
            name: "Radio Roland",
            logo: "stations/images-europe/germany-nds/Radio Roland.png",
            url: "https://stream.ffn.de/radioroland/mp3-192/stream.mp3"
        },
        {
            name: "Radio Weser.TV",
            logo: "stations/images-europe/germany-nds/Radio Weser.TV.png",
            url: "http://radiocast-radiowesertv.video-stream-hosting.de:8000/rwtvhb"
        },
        {
            name: "STAR FM",
            logo: "stations/images-europe/germany-rbb/STAR FM.png",
            url: "https://stream.starfm.de/national/mp3-192/webseite"
        },
    ],
    "germany-bw": [
        {
            name: "SWR1 BW",
            logo: "stations/images-europe/germany-swr/SWR1.png",
            url: "https://dispatcher.rndfnk.com/swr/swr1/bw/mp3/128/stream.mp3"
        },
        {
            name: "SWR4 BW",
            logo: "stations/images-europe/germany-swr/SWR4.png",
            url: "https://dispatcher.rndfnk.com/swr/swr4/bw/mp3/128/stream.mp3"
        },
        {
            name: "Antenna Baden-Württemberg",
            logo: "stations/images-europe/germany-bw/Antenna Baden-Württemberg.png",
            url: "https://antennabw.ip-streaming.net/antennabw"
        },
        {
            name: "antenne 1",
            logo: "stations/images-europe/germany-bw/Antenne 1.png",
            url: "http://stream.antenne1.de/a1stg/livestream2.mp3"
        },
        {
            name: "baden.fm",
            logo: "stations/images-europe/germany-bw/baden.fm.png",
            url: "https://frontend.streams.baden.fm/badenfm-onair"
        },
        {
            name: "bigFM",
            logo: "stations/images-europe/germany-rp/bigFM.png",
            url: "https://stream.bigfm.de/bw/aac-128/homepage/"
        },
        {
            name: "Donau 3 FM",
            logo: "stations/images-europe/germany-bw/Donau 3 FM.png",
            url: "https://frontend.streamonkey.net/donau3fm-live/stream/mp3"
        },
        {
            name: "Die neue Welle",
            logo: "stations/images-europe/germany-bw/Die neue Welle.png",
            url: "http://stream.meine-neue-welle.de/dnw_128.mp3"
        },
        {
            name: "Die neue 107.7",
            logo: "stations/images-europe/germany-bw/Die neue 107.7.png",
            url: "http://dieneue1077.cast.addradio.de/dieneue1077/simulcast/high/stream.mp3"
        },
        {
            name: "egoFM",
            logo: "stations/images-europe/germany-br/egoFM.png",
            url: "http://www.egofm.de/stream/128kb"
        },
        {
            name: "ENERGY Stuttgart",
            logo: "stations/images-europe/germany-bw/Energy.png",
            url: "https://frontend.streamonkey.net/energy-stuttgart/stream/mp3"
        },
        {
            name: "Hitradio Ohr",
            logo: "stations/images-europe/germany-bw/Hitradio Ohr.png",
            url: "https://frontend.streamonkey.net/fho-hitradioohrlive/stream/mp3"
        },
        {
            name: "Radio 7",
            logo: "stations/images-europe/germany-bw/Radio 7.png",
            url: "https://radio7.streamabc.net/87-radio7dab-mp3-192-2906603"
        },
        {
            name: "Radio Regenbogen",
            logo: "stations/images-europe/germany-bw/Radio Regenbogen.png",
            url: "https://stream.regenbogen.de/mannheim/aac-128"
        },
        {
            name: "ROCK FM",
            logo: "stations/images-europe/germany-bw/ROCK FM.png",
            url: "https://stream.regenbogen2.de/dab/aac-128/homepage/"
        },
        {
            name: "Das neue Radio Seefunk",
            logo: "stations/images-europe/germany-bw/Das neue Radio Seefunk.png",
            url: "https://webradio.radio-seefunk.de/bodensee-oberschwaben"
        },
        {
            name: "Radio TEDDY",
            logo: "stations/images-europe/germany-rbb/Radio TEDDY.png",
            url: "https://streamtdy.ir-media-tec.com/sc-rlp-bw/mp3-128/dmhubweb/play.mp3"
        },
        {
            name: "Radio Ton",
            logo: "stations/images-europe/germany-bw/Radio Ton.png",
            url: "https://live.radioton.de/rt-live-bw"
        },
    ],
    "germany-hh": [
        {
            name: "NDR 90,3",
            logo: "stations/images-europe/germany-hh/NDR 90,3.png",
            url: "https://icecast.ndr.de/ndr/ndr903/hamburg/mp3/128/stream.mp3"
        },
        {
            name: "ffn",
            logo: "stations/images-europe/germany-ndr/FFN.png",
            url: "https://stream.ffn.de/ffn/mp3-192/;"
        },
        {
            name: "Antenne Schlager",
            logo: "stations/images-europe/germany-nds/Antenne Schlager.png",
            url: "https://stream.antenne-schlager.de/schlager-live/mp3-192/web/"
        },
        {
            name: "HAMBURG ZWEI",
            logo: "stations/images-europe/germany-hh/HAMBURG ZWEI.png",
            url: "https://frontend.streamonkey.net/hh2-950"
        },
        {
            name: "TIDE 96.0",
            logo: "stations/images-europe/germany-hh/TIDE 96.0.png",
            url: "https://rcstream0001.redcastle.net/radio/8000/tide-192.mp3"
        },
        {
            name: "ENERGY Hamburg",
            logo: "stations/images-europe/germany/Energy.png",
            url: "https://frontend.streamonkey.net/energy-hamburg/stream/mp3"
        },
        {
            name: "MEGARADIOmix",
            logo: "stations/images-europe/germany-hh/MEGARADIOmix.png",
            url: "https://play.megaradiomix.de/megaradiomix-berlin/mp3-192/"
        },
        {
            name: "Radio Hamburg",
            logo: "stations/images-europe/germany-hh/Radio Hamburg.png",
            url: "https://frontend.streamonkey.net/rhh-1036"
        },
        {
            name: "Radio Paloma",
            logo: "stations/images-europe/germany-rbb/Radio Paloma.png",
            url: "https://stream.silvacast.com/RPLive/mp3-128/RadioPaloma_Homepage"
        },
        {
            name: "STARSAT RADIO",
            logo: "stations/images-europe/germany-hh/STARSAT RADIO.png",
            url: "https://starsat-live.cast.addradio.de/starsat/live/mp3/high/stream.mp3"
        },
        {
            name: "Trigger.FM",
            logo: "stations/images-europe/germany-hh/Trigger.FM.png",
            url: "https://hd-radio.triggerfm.de/"
        },
    ],
    "germany-hr": [
        {
            name: "hr1",
            logo: "stations/images-europe/germany-hr/hr1.png",
            url: "https://dispatcher.rndfnk.com/hr/hr1/live/mp3/128/stream.mp3"
        },
        {
            name: "hr2",
            logo: "stations/images-europe/germany-hr/hr2.png",
            url: "https://dispatcher.rndfnk.com/hr/hr2/live/mp3/128/stream.mp3"
        },
        {
            name: "hr3",
            logo: "stations/images-europe/germany-hr/hr3.png",
            url: "https://dispatcher.rndfnk.com/hr/hr3/live/mp3/128/stream.mp3"
        },
        {
            name: "hr4",
            logo: "stations/images-europe/germany-hr/hr4.png",
            url: "https://dispatcher.rndfnk.com/hr/hr4/live/mp3/128/stream.mp3"
        },
        {
            name: "hr-iNFO",
            logo: "stations/images-europe/germany-hr/hr-info.png",
            url: "https://dispatcher.rndfnk.com/hr/hrinfo/live/mp3/128/stream.mp3"
        },
        {
            name: "YOU FM",
            logo: "stations/images-europe/germany-hr/YOU FM.png",
            url: "https://dispatcher.rndfnk.com/hr/youfm/live/mp3/128/stream.mp3"
        },
        {
            name: "harmony.fm",
            logo: "stations/images-europe/germany-hr/harmony.fm.png",
            url: "https://mp3.harmonyfm.de/harmonyfm/hqlivestream.aac"
        },
        {
            name: "FFH",
            logo: "stations/images-europe/germany-hr/FFH.png",
            url: "https://mp3.ffh.de/radioffh/hqlivestream.aac"
        },
        {
            name: "planet radio",
            logo: "stations/images-europe/germany-hr/Planet Radio.png",
            url: "https://mp3.planetradio.de/planetradio/hqlivestream.aac"
        },
        {
            name: "Radio BOB!",
            logo: "stations/images-europe/germany-hr/Radio BOB.png",
            url: "https://streams.radiobob.de/bob-live/mp3-192"
        },
        {
            name: "Radio Bollerwagen",
            logo: "stations/images-europe/germany-nds/Radio Bollerwagen.png",
            url: "https://stream.ffn.de/radiobollerwagen/mp3-192"
        },
        {
            name: "Radio TEDDY",
            logo: "stations/images-europe/germany-hr/Radio TEDDY.png",
            url: "https://streamtdy.ir-media-tec.com/sc-hessen/mp3-128/radioplayer_web/play.mp3"
        },
        {
            name: "Radio Vidovdan",
            logo: "stations/images-europe/germany-hr/Radio Vidovdan.png",
            url: "https://solid48.streamupsolutions.com/proxy/vipugplg/stream"
        },
        {
            name: "The Wolf",
            logo: "stations/images-europe/germany-nds/The Wolf.png",
            url: "https://streams.radio21.de/thewolf/mp3-192/konsoleplayer"
        },
    ],
    "germany-koeln": [
        {
            name: "Antenne Düsseldorf",
            logo: "stations/images-europe/germany-koeln/Antenne Düsseldorf.png",
            url: "https://addrad.io/444z5n3"
        },
        {
            name: "DOMRADIO",
            logo: "stations/images-europe/germany-koeln/DOMRADIO.png",
            url: "https://dom.audiostream.io/domradio/1000/mp3/128/domradio-rp.mp3"
        },
        {
            name: "Kölncampus",
            logo: "stations/images-europe/germany-koeln/Kölncampus.png",
            url: "https://live.koelncampus.com/live"
        },
        {
            name: "Radio Erft",
            logo: "stations/images-europe/germany-koeln/Radio Erft.png",
            url: "https://addrad.io/444z76t"
        },
        {
            name: "Radio Köln",
            logo: "stations/images-europe/germany-koeln/Radio Köln.png",
            url: "https://addrad.io/444z7kb"
        },
        {
            name: "Radio Neandertal",
            logo: "stations/images-europe/germany-koeln/Radio Neandertal.png",
            url: "https://addrad.io/444z66t"
        },
        {
            name: "Radio Wuppertal",
            logo: "stations/images-europe/germany-koeln/Radio Wuppertal.png",
            url: "https://addrad.io/444z68k"
        },
    ],
    "germany-mdr": [
        {
            name: "MDR AKTUELL",
            logo: "stations/images-europe/germany-mdr/MDR AKTUELL.png",
            url: "http://mdr-284340-0.cast.mdr.de/mdr/284340/0/mp3/high/stream.mp3"
        },
        {
            name: "MDR Klassik",
            logo: "stations/images-europe/germany-mdr/MDR Klassik.png",
            url: "http://mdr-284350-0.cast.mdr.de/mdr/284350/0/mp3/high/stream.mp3"
        },
        {
            name: "MDR Kultur",
            logo: "stations/images-europe/germany-mdr/MDR Kultur.png",
            url: "http://mdr-284310-0.cast.mdr.de/mdr/284310/0/mp3/high/stream.mp3"
        },
        {
            name: "MDR JUMP",
            logo: "stations/images-europe/germany-mdr/MDR Jump.png",
            url: "http://mdr-284320-0.cast.mdr.de/mdr/284320/0/aac/high/stream.aac"
        },
        {
            name: "MDR Schlagerwelt",
            logo: "stations/images-europe/germany-mdr/MDR Schlagerwelt.png",
            url: "http://mdr-990801-0.cast.mdr.de/mdr/990801/0/mp3/high/stream.mp3"
        },
        {
            name: "Sputnik",
            logo: "stations/images-europe/germany-mdr/MDR Sputnik.png",
            url: "http://mdr-284330-0.cast.mdr.de/mdr/284330/0/mp3/high/stream.mp3"
        },
        {
            name: "Radio SAW",
            logo: "stations/images-europe/germany-mdr/Radio SAW.png",
            url: "http://stream.saw-musikwelt.de/saw/mp3-128/vtuner/"
        },
    ],
    "germany-mv": [
        {
            name: "NDR 1 Radio MV",
            logo: "stations/images-europe/germany-ndr/NDR 1 Radio MV.png",
            url: "https://icecast.ndr.de/ndr/ndr1radiomv/schwerin/mp3/128/stream.mp3"
        },
        {
            name: "NDR 2",
            logo: "stations/images-europe/germany-ndr/NDR 2.png",
            url: "https://icecast.ndr.de/ndr/ndr2/mecklenburgvorpommern/mp3/128/stream.mp3"
        },
        {
            name: "80s80s MV",
            logo: "stations/images-europe/germany/80s80s.png",
            url: "https://streams.80s80s.de/80s80sMV/mp3-192/homepage/"
        },
        {
            name: "Ostseewelle",
            logo: "stations/images-europe/germany-mv/Ostseewelle.png",
            url: "https://addrad.io/4454pjf"
        },
        {
            name: "Radio TEDDY",
            logo: "stations/images-europe/germany-rbb/Radio TEDDY.png",
            url: "https://irmedia.streamabc.net/irm-rtlive-mp3-128-6306268"
        },
    ],
    "germany-muenchen": [
        {
            name: "Radio 2DAY",
            logo: "stations/images-europe/germany-muenchen/Radio 2DAY.png",
            url: "https://radio2day.ip-streaming.net/radio2day"
        },
        {
            name: "ENERGY München",
            logo: "stations/images-europe/germany-muenchen/Energy.png",
            url: "https://frontend.streamonkey.net/energy-muenchen/stream/mp3"
        },
        {
            name: "95.5 Charivari",
            logo: "stations/images-europe/germany-muenchen/95.5 Charivari.png",
            url: "https://rs5.stream24.net/stream"
        },
        {
            name: "Radio Gong 96.3",
            logo: "stations/images-europe/germany-muenchen/Radio Gong 96.3.png",
            url: "http://radiogong-live.cast.addradio.de/radiogong/live/mp3/high"
        },
        {
            name: "Radio München",
            logo: "stations/images-europe/germany-muenchen/Radio München.png",
            url: "https://stream.radiomuenchen.net/rm256.mp3"
        },
        {
            name: "Radio Arabella München",
            logo: "stations/images-europe/germany-muenchen/Radio Arabella München.png",
            url: "https://live.stream.radioarabella.de/radioarabella-muenchen/stream/mp3"
        },
    ],
    "germany-ndr": [
        {
            name: "NDR 1 Welle Nord",
            logo: "stations/images-europe/germany-ndr/NDR 1 Welle Nord.png",
            url: "https://icecast.ndr.de/ndr/ndr1wellenord/kiel/mp3/128/stream.mp3"
        },
        {
            name: "NDR Info",
            logo: "stations/images-europe/germany-ndr/NDR Info.png",
            url: "https://icecast.ndr.de/ndr/ndrinfo/niedersachsen/mp3/128/stream.mp3"
        },
        {
            name: "NDR Kultur",
            logo: "stations/images-europe/germany-ndr/NDR Kultur.png",
            url: "https://icecast.ndr.de/ndr/ndrkultur/live/mp3/128/stream.mp3"
        },
        {
            name: "NDR Blue",
            logo: "stations/images-europe/germany-ndr/NDR Blue.png",
            url: "https://icecast.ndr.de/ndr/ndrblue/live/mp3/128/stream.mp3"
        },
        {
            name: "NDR Schlager",
            logo: "stations/images-europe/germany-ndr/NDR Schlager.png",
            url: "https://icecast.ndr.de/ndr/ndrschlager/live/mp3/128/stream.mp3"
        },
        {
            name: "NDR 2",
            logo: "stations/images-europe/germany-ndr/NDR 2.png",
            url: "https://icecast.ndr.de/ndr/ndr2/niedersachsen/mp3/128/stream.mp3"
        },
        {
            name: "N-JOY",
            logo: "stations/images-europe/germany-ndr/N-Joy.png",
            url: "https://icecast.ndr.de/ndr/njoy/live/mp3/128/stream.mp3"
        },
        {
            name: "delta radio",
            logo: "stations/images-europe/germany-ndr/delta radio.png",
            url: "http://streams.deltaradio.de/delta-live/mp3-192/streams.deltaradio.de/"
        },
        {
            name: "NORDSEEWELLE",
            logo: "stations/images-europe/germany-ndr/NORDSEEWELLE.png",
            url: "https://stream.radio-nordseewelle.de/live/mp3-192/radioplayer"
        },
    ],
    "germany-nds": [
        {
            name: "NDR 1 Niedersachsen",
            logo: "stations/images-europe/germany-nds/NDR 1 Niedersachsen.png",
            url: "https://icecast.ndr.de/ndr/ndr1niedersachsen/hannover/mp3/128/stream.mp3"
        },
        {
            name: "Antenne Niedersachsen",
            logo: "stations/images-europe/germany-nds/Antenne Niedersachsen.png",
            url: "https://stream.antenne.com/antenne-nds/mp3-128/radioplayer/"
        },
        {
            name: "Antenne Schlager",
            logo: "stations/images-europe/germany-nds/Antenne Schlager.png",
            url: "https://stream.antenne-schlager.de/schlager-live/mp3-192/web/"
        },
        {
            name: "89.0 RTL",
            logo: "stations/images-europe/germany-sachsen_anhalt/89.0 RTL.png",
            url: "http://stream.89.0rtl.de/live/mp3-256"
        },
        {
            name: "bigFM",
            logo: "stations/images-europe/germany-rp/bigFM.png",
            url: "https://stream.bigfm.de/niedersachsen/aac-128/homepage/"
        },
        {
            name: "ffn",
            logo: "stations/images-europe/germany-ndr/FFN.png",
            url: "https://stream.ffn.de/ffn/mp3-192/;"
        },
        {
            name: "JAM FM",
            logo: "stations/images-europe/germany-rbb/JAM FM.png",
            url: "https://stream.jam.fm/jamfm-live/mp3-128/konsole"
        },
        {
            name: "RADIO 21",
            logo: "stations/images-europe/germany-nds/RADIO 21.png",
            url: "https://streams.radio21.de/hannover/mp3-192/web/"
        },
        {
            name: "Radio Bollerwagen",
            logo: "stations/images-europe/germany-nds/Radio Bollerwagen.png",
            url: "https://stream.ffn.de/radiobollerwagen/mp3-192"
        },
        {
            name: "The Wolf",
            logo: "stations/images-europe/germany-nds/The Wolf.png",
            url: "https://streams.radio21.de/thewolf/mp3-192/konsoleplayer"
        },
    ],
    "germany-rbb": [
        {
            name: "COSMO",
            logo: "stations/images-europe/germany/COSMO.png",
            url: "https://dispatcher.rndfnk.com/wdr/cosmo/live/mp3/128/stream.mp3"
        },
        {
            name: "Radio Fritz",
            logo: "stations/images-europe/germany-rbb/Radio Fritz.png",
            url: "https://dispatcher.rndfnk.com/rbb/fritz/live/mp3/mid"
        },
        {
            name: "radioeins",
            logo: "stations/images-europe/germany-rbb/radioeins.png",
            url: "https://dispatcher.rndfnk.com/rbb/radioeins/live/mp3/mid"
        },
        {
            name: "rbb 88.8",
            logo: "stations/images-europe/germany-rbb/rbb 88.8.png",
            url: "https://dispatcher.rndfnk.com/rbb/rbb888/live/mp3/mid"
        },
        {
            name: "rbb24 Inforadio",
            logo: "stations/images-europe/germany-rbb/rbb24 Inforadio.png",
            url: "https://dispatcher.rndfnk.com/rbb/inforadio/live/mp3/mid"
        },
        {
            name: "rbb radio3",
            logo: "stations/images-europe/germany-rbb/rbb radio3.png",
            url: "https://dispatcher.rndfnk.com/rbb/rbbkultur/live/mp3/high"
        },
        {
            name: "Antenne Brandenburg",
            logo: "stations/images-europe/germany-rbb/Antenne Brandenburg.png",
            url: "https://dispatcher.rndfnk.com/rbb/antennebrandenburg/live/mp3/mid"
        },
        {
            name: "BB Radio",
            logo: "stations/images-europe/germany-rbb/BB Radio.png",
            url: "https://irmedia.streamabc.net/irm-bbradiolive-mp3-192-2174969"
        },
        {
            name: "bigFM",
            logo: "stations/images-europe/germany-rp/bigFM.png",
            url: "https://stream.bigfm.de/berlin/aac-128/homepage/"
        },
        {
            name: "Radio TEDDY",
            logo: "stations/images-europe/germany-rbb/Radio TEDDY.png",
            url: "https://irmedia.streamabc.net/irm-rtlive-mp3-128-6306268"
        },
        {
            name: "94,3 rs2",
            logo: "stations/images-europe/germany-rbb/94,3 rs2.png",
            url: "https://stream.rs2.de/rs2/mp3-192"
        },
        {
            name: "98.8 KISS FM",
            logo: "stations/images-europe/germany-rbb/98.8 KISS FM.png",
            url: "https://topradio-de-hz-fal-stream05-cluster01.radiohost.de/kissfm_mp3-192"
        },
        {
            name: "104.6 RTL",
            logo: "stations/images-europe/germany-rbb/104.6 RTL.png",
            url: "https://stream.104.6rtl.com/rtl-live/mp3-128/konsole"
        },
        {
            name: "105'5 Spreeradio",
            logo: "stations/images-europe/germany-rbb/105'5 Spreeradio.png",
            url: "https://stream.spreeradio.de/spree-live/mp3-128/konsole/"
        },
        {
            name: "Berliner Rundfunk 91.4",
            logo: "stations/images-europe/germany-rbb/Berliner Rundfunk 91.4.png",
            url: "https://stream.berliner-rundfunk.de/brf/mp3-192/homepage/"
        },
        {
            name: "ENERGY Berlin",
            logo: "stations/images-europe/germany/Energy.png",
            url: "https://frontend.streamonkey.net/energy-berlin/stream/mp3"
        },
        {
            name: "FluxFM 100.6",
            logo: "stations/images-europe/germany-rbb/FluxFM.png",
            url: "http://streams.fluxfm.de/live/mp3-320/audio/"
        },
        {
            name: "JAM FM",
            logo: "stations/images-europe/germany-rbb/JAM FM.png",
            url: "https://stream.jam.fm/jamfm-live/mp3-128/konsole"
        },
        {
            name: "Power Radio",
            logo: "stations/images-europe/germany-rbb/Power Radio.png",
            url: "http://stream.power-radio.de:8020/"
        },
        {
            name: "Radio BHeins",
            logo: "stations/images-europe/germany-rbb/Radio BHeins.png",
            url: "http://46.163.75.84:8000/;"
        },
        {
            name: "Radio Cottbus",
            logo: "stations/images-europe/germany-rbb/Radio Cottbus.png",
            url: "https://radiogroup-stream09.radiohost.de/radio-cottbus_mp3-192"
        },
        {
            name: "Radio Holiday",
            logo: "stations/images-europe/germany-rbb/Radio Holiday.png",
            url: "https://radiogroup-stream32.radiohost.de/radio-holiday_mp3-192"
        },
        {
            name: "Radio Paloma",
            logo: "stations/images-europe/germany-rbb/Radio Paloma.png",
            url: "https://stream.silvacast.com/RPLive/mp3-128/RadioPaloma_Homepage"
        },
        {
            name: "Radio Paradiso",
            logo: "stations/images-europe/germany-rbb/Radio Paradiso.png",
            url: "https://radio-paradiso.api.radiosphere.io/channels/Radio_Paradiso/stream.aac"
        },
        {
            name: "Radio Potsdam",
            logo: "stations/images-europe/germany-rbb/Radio Potsdam.png",
            url: "https://stream.radiogroup.de/radio-potsdam/mp3-192/"
        },
        {
            name: "Schlager Radio",
            logo: "stations/images-europe/germany-rbb/Schlager Radio.png",
            url: "https://addrad.io/4454r8d"
        },
        {
            name: "STAR FM",
            logo: "stations/images-europe/germany-rbb/STAR FM.png",
            url: "https://stream.starfm.de/national/mp3-192/webseite"
        },
    ],
    "germany-rp": [
        {
            name: "SWR1 Rheinland-Pfalz",
            logo: "stations/images-europe/germany-swr/SWR1.png",
            url: "https://dispatcher.rndfnk.com/swr/swr1/rp/mp3/128/stream.mp3"
        },
        {
            name: "SWR4 Rheinland-Pfalz",
            logo: "stations/images-europe/germany-swr/SWR4.png",
            url: "https://dispatcher.rndfnk.com/swr/swr4/rp/mp3/128/stream.mp3"
        },
        {
            name: "bigFM",
            logo: "stations/images-europe/germany-rp/bigFM.png",
            url: "https://streams.bigfm.de/bigfm-deutschland-128-mp3"
        },
        {
            name: "Rockland Radio",
            logo: "stations/images-europe/germany-rp/Rockland Radio.png",
            url: "https://streams.rockland.de/mainz/mp3-192/web/"
        },
        {
            name: "RPR1.",
            logo: "stations/images-europe/germany-rp/RPR1..png",
            url: "https://streams.rpr1.de/rpr-simulcast-128-aac"
        },
    ],
    "germany-sachsen": [
        {
            name: "MDR Sachsen",
            logo: "stations/images-europe/germany-sachsen/MDR Sachsen.png",
            url: "http://mdr-284280-0.cast.mdr.de/mdr/284280/0/mp3/high/stream.mp3"
        },
        {
            name: "89.0 RTL",
            logo: "stations/images-europe/germany-sachsen_anhalt/89.0 RTL.png",
            url: "http://stream.89.0rtl.de/live/mp3-256"
        },
        {
            name: "90s90s Sachsen",
            logo: "stations/images-europe/germany/90s90s.png",
            url: "https://streams.90s90s.de/sachsenradio/mp3-128/homepage/"
        },
        {
            name: "Antenne Sachsen",
            logo: "stations/images-europe/germany-sachsen/Antenne Sachsen.png",
            url: "https://web.radio.antennesachsen.de/antsa-dresden"
        },
        {
            name: "detektor.fm Wort",
            logo: "stations/images-europe/germany-sachsen/detektor.fm.png",
            url: "https://streams.detektor.fm/wort/mp3-256/website-player/"
        },
        {
            name: "ENERGY Sachsen",
            logo: "stations/images-europe/germany/Energy.png",
            url: "https://scdn.nrjaudio.fm/adwz1/de/33013/mp3_128.mp3"
        },
        {
            name: "Galaxy Sachsen",
            logo: "stations/images-europe/germany-sachsen/Galaxy.png",
            url: "https://frontend.streamonkey.net/fhn-galaxysachsen/stream/mp3"
        },
        {
            name: "Hitradio RTL",
            logo: "stations/images-europe/germany-sachsen/Hitradio RTL.png",
            url: "https://web.radio.hitradio-rtl.de/hrrtl-dresden"
        },
        {
            name: "JAM FM",
            logo: "stations/images-europe/germany-rbb/JAM FM.png",
            url: "https://stream.jam.fm/jamfm-live/mp3-128/konsole"
        },
        {
            name: "Radio Ostrock",
            logo: "stations/images-europe/germany-sachsen/Radio Ostrock.png",
            url: "https://stream.radio-ostrock.de/"
        },
        {
            name: "Radio PSR",
            logo: "stations/images-europe/germany-sachsen/Radio PSR.png",
            url: "http://streams.radiopsr.de/psr-live/mp3-192/streams.radiopsr.de/"
        },
        {
            name: "Radio TEDDY",
            logo: "stations/images-europe/germany-rbb/Radio TEDDY.png",
            url: "https://streamtdy.ir-media-tec.com/sc-san/mp3-128/dmhubweb/"
        },
        {
            name: "R.SA",
            logo: "stations/images-europe/germany-sachsen/R.SA.png",
            url: "https://streams.rsa-sachsen.de/rsa-live/mp3-192/homepage/?context=fHA6LTE="
        },
        {
            name: "Rundfunk-Kombinat Sachsen",
            logo: "stations/images-europe/germany-sachsen/Rundfunk-Kombinat Sachsen.png",
            url: "https://streaming.fueralle.org/rfk"
        },
        {
            name: "Schlager Radio",
            logo: "stations/images-europe/germany-rbb/Schlager Radio.png",
            url: "https://addrad.io/4454r8d"
        },
        {
            name: "SecondRadio",
            logo: "stations/images-europe/germany-sachsen/SecondRadio.png",
            url: "https://stream.secondradio.de/"
        },
        {
            name: "STAR FM",
            logo: "stations/images-europe/germany-rbb/STAR FM.png",
            url: "https://stream.starfm.de/sachsen/mp3-192/webseite"
        },
    ],
    "germany-sachsen_anhalt": [
        {
            name: "MDR Sachsen-Anhalt",
            logo: "stations/images-europe/germany-sachsen_anhalt/MDR Sachsen-Anhalt.png",
            url: "http://mdr-284290-0.cast.mdr.de/mdr/284290/0/mp3/high/stream.mp3"
        },
        {
            name: "1A Deutsche Hits",
            logo: "stations/images-europe/germany-sachsen_anhalt/1A Deutsche Hits.png",
            url: "https://stream.1a-webradio.de/saw-deutsch/mp3-192/Radioplayer1A-de/stream.mp3"
        },
        {
            name: "89.0 RTL",
            logo: "stations/images-europe/germany-sachsen_anhalt/89.0 RTL.png",
            url: "http://stream.89.0rtl.de/live/mp3-256"
        },
        {
            name: "89.0 RTL In The Mix",
            logo: "stations/images-europe/germany-sachsen_anhalt/89.0 RTL In The Mix.jpg",
            url: "https://stream.89.0rtl.de/mix/mp3-256"
        },
        {
            name: "Radio Brocken",
            logo: "stations/images-europe/germany-sachsen_anhalt/Radio Brocken.png",
            url: "https://fhhalle.streamabc.net/fhhal-rblive-mp3-128-7094006"
        },
        {
            name: "ROCKLAND.fm",
            logo: "stations/images-europe/germany-sachsen_anhalt/ROCKLAND.fm.png",
            url: "https://saw-de-hz-fal-stream05.radiohost.de/rockland_mp3-192"
        },
    ],
    "germany-sh": [
        {
            name: "R.SH",
            logo: "stations/images-europe/germany-sh/R.SH.png",
            url: "https://rsh.streamabc.net/regc-rshlive-mp3-192-6238539"
        },
        {
            name: "Ostseewelle",
            logo: "stations/images-europe/germany-mv/Ostseewelle.png",
            url: "https://ostseewelle-nord.cast.addradio.de/ostseewelle/nord/mp3/high"
        },
        {
            name: "RADIO 21",
            logo: "stations/images-europe/germany-nds/RADIO 21.png",
            url: "https://streams.radio21.de/kiel/mp3-192/konsoleplayer"
        },
        {
            name: "Radio BOB!",
            logo: "stations/images-europe/germany-sh/Radio BOB!.png",
            url: "https://streams.radiobob.de/bob-shlive/mp3-192"
        },
        {
            name: "Radio Hamburg",
            logo: "stations/images-europe/germany-hh/Radio Hamburg.png",
            url: "https://frontend.streamonkey.net/rhh-1036"
        },
        {
            name: "Radio Wellenrausch",
            logo: "stations/images-europe/germany-sh/Radio Wellenrausch.png",
            url: "https://stream.radio-wellenrausch.de/rwrlive/mp3-192/homepage"
        },
        {
            name: "ROCK ANTENNE Hamburg",
            logo: "stations/images-europe/germany/ROCK ANTENNE.png",
            url: "https://s6-webradio.rockantenne.hamburg/rockantenne-hamburg/stream/mp3"
        },
        {
            name: "STAR FM",
            logo: "stations/images-europe/germany-rbb/STAR FM.png",
            url: "https://stream.starfm.de/national/mp3-192/webseite"
        },
    ],
    "germany-swr": [
        {
            name: "SWR Kultur",
            logo: "stations/images-europe/germany-swr/SWR Kultur.png",
            url: "https://liveradio.swr.de/sw282p3/swr2/play.mp3"
        },
        {
            name: "SWR3",
            logo: "stations/images-europe/germany-swr/SWR3.png",
            url: "https://liveradio.swr.de/sw282p3/swr3/play.mp3"
        },
        {
            name: "SWR Aktuell",
            logo: "stations/images-europe/germany-swr/SWR Aktuell.png",
            url: "https://liveradio.swr.de/sw282p3/swraktuell/play.mp3"
        },
        {
            name: "DASDING",
            logo: "stations/images-europe/germany-swr/DASDING.png",
            url: "https://liveradio.swr.de/sw282p3/dasding/play.mp3"
        },
        {
            name: "Radio Regenbogen",
            logo: "stations/images-europe/germany-swr/Radio Regenbogen.png",
            url: "https://audiotainment-sw.streamabc.net/atsw-regenbogen1028-mp3-128-4823027"
        },
    ],
    "germany-thueringen": [
        {
            name: "MDR Thüringen",
            logo: "stations/images-europe/germany-thueringen/MDR Thüringen.png",
            url: "http://mdr-284300-0.cast.mdr.de/mdr/284300/0/mp3/high/stream.mp3"
        },
        {
            name: "89.0 RTL",
            logo: "stations/images-europe/germany-sachsen_anhalt/89.0 RTL.png",
            url: "http://stream.89.0rtl.de/live/mp3-256"
        },
        {
            name: "Antenne Thüringen",
            logo: "stations/images-europe/germany-thueringen/Antenne Thüringen.png",
            url: "https://stream.antennethueringen.de/live/mp3-192/web"
        },
        {
            name: "Antenne Thüringen Classics",
            logo: "stations/images-europe/germany-thueringen/Antenne Thüringen Classics.png",
            url: "https://stream.antennethueringen.de/classics/mp3-192/web"
        },
        {
            name: "Antenne Ostalgie",
            logo: "stations/images-europe/germany-thueringen/Antenne Ostalgie.png",
            url: "https://stream.antenneostalgie.de/ostalgie/mp3-192/web"
        },
        {
            name: "LandesWelle Thüringen",
            logo: "stations/images-europe/germany-thueringen/LandesWelle Thüringen.png",
            url: "https://stream.landeswelle.de/lwt/mp3-192/web/stream.mp3"
        },
        {
            name: "Radio Holiday",
            logo: "stations/images-europe/germany-rbb/Radio Holiday.png",
            url: "https://radiogroup-stream32.radiohost.de/radio-holiday_mp3-192"
        },
        {
            name: "Radio TEDDY",
            logo: "stations/images-europe/germany-thueringen/Radio TEDDY.png",
            url: "https://irmedia.streamabc.net/irm-tdyscthringen-mp3-128-3054154"
        },
        {
            name: "radio TOP 40",
            logo: "stations/images-europe/germany-thueringen/radio TOP 40.png",
            url: "https://stream.radiotop40.de/live/mp3-192/web"
        },
        {
            name: "Schlager Radio",
            logo: "stations/images-europe/germany-rbb/Schlager Radio.png",
            url: "https://addrad.io/4454r8d"
        },
    ],
    "germany-wdr": [
        {
            name: "WDR 2",
            logo: "stations/images-europe/germany-wdr/WDR 2.png",
            url: "http://wdr-wdr2-ruhrgebiet.icecast.wdr.de/wdr/wdr2/ruhrgebiet/mp3/128/stream.mp3"
        },
        {
            name: "WDR 3",
            logo: "stations/images-europe/germany-wdr/WDR 3.png",
            url: "http://wdr-wdr3-live.icecast.wdr.de/wdr/wdr3/live/mp3/256/stream.mp3"
        },
        {
            name: "WDR 4",
            logo: "stations/images-europe/germany-wdr/WDR 4.png",
            url: "http://wdr-wdr4-live.icecast.wdr.de/wdr/wdr4/live/mp3/128/stream.mp3"
        },
        {
            name: "WDR 5",
            logo: "stations/images-europe/germany-wdr/WDR 5.png",
            url: "http://wdr-wdr5-live.icecast.wdr.de/wdr/wdr5/live/mp3/128/stream.mp3"
        },
        {
            name: "1LIVE",
            logo: "stations/images-europe/germany-wdr/1LIVE.png",
            url: "http://wdr-1live-live.icecast.wdr.de/wdr/1live/live/mp3/128/stream.mp3"
        },
        {
            name: "1LIVE DIGGI",
            logo: "stations/images-europe/germany-wdr/1LIVE DIGGI.png",
            url: "https://wdr-1live-diggi.icecast.wdr.de/wdr/1live/diggi/mp3/128/stream.mp3"
        },
        {
            name: "Antenne NRW",
            logo: "stations/images-europe/germany-wdr/Antenne NRW.png",
            url: "https://s8-webradio.antenne.nrw/antenne-nrw/stream"
        },
        {
            name: "bigFM",
            logo: "stations/images-europe/germany-rp/bigFM.png",
            url: "https://stream.bigfm.de/nrw/aac-128/homepage/"
        },
        {
            name: "COSMO",
            logo: "stations/images-europe/germany-wdr/COSMO.png",
            url: "https://dispatcher.rndfnk.com/wdr/cosmo/live/mp3/128/stream.mp3"
        },
        {
            name: "ENERGY NRW",
            logo: "stations/images-europe/germany/Energy.png",
            url: "https://frontend.streamonkey.net/energy-nrw/stream/mp3"
        },
        {
            name: "harmony.fm",
            logo: "stations/images-europe/germany-hr/harmony.fm.png",
            url: "https://mp3.harmonyfm.de/harmonyfm/hqlivestream.aac"
        },
        {
            name: "kulthitRADIO",
            logo: "stations/images-europe/germany-wdr/kulthitRADIO.png",
            url: "https://frontend.streamonkey.net/kulthitradio-nrw"
        },
        {
            name: "NOXX",
            logo: "stations/images-europe/germany-wdr/NOXX.png",
            url: "https://noxx--di--rnrw-ais-01--04--cdn.cast.addradio.de/noxx/simulcast/mp3/high"
        },
        {
            name: "NRW1",
            logo: "stations/images-europe/germany-wdr/NRW1.png",
            url: "https://nrw1.streamabc.net/92-nrw1-mp3-128-5352676"
        },
        {
            name: "RADIO 21",
            logo: "stations/images-europe/germany-nds/RADIO 21.png",
            url: "https://streams.radio21.de/nrw/mp3-192/radioplayer"
        },
        {
            name: "Radio Bollerwagen",
            logo: "stations/images-europe/germany-nds/Radio Bollerwagen.png",
            url: "https://stream.ffn.de/radiobollerwagen/mp3-192"
        },
        {
            name: "Radio Holiday",
            logo: "stations/images-europe/germany-rbb/Radio Holiday.png",
            url: "https://radiogroup-stream32.radiohost.de/radio-holiday_mp3-192"
        },
        {
            name: "Radio Paloma",
            logo: "stations/images-europe/germany-rbb/Radio Paloma.png",
            url: "https://stream.silvacast.com/RPLive/mp3-128/RadioPaloma_Homepage"
        },
        {
            name: "Radio Paradiso",
            logo: "stations/images-europe/germany-rbb/Radio Paradiso.png",
            url: "https://radio-paradiso.api.radiosphere.io/channels/Radio_Paradiso_NRW/stream.aac"
        },
        {
            name: "Radio TEDDY",
            logo: "stations/images-europe/germany-rbb/Radio TEDDY.png",
            url: "https://streamtdy.ir-media-tec.com/sc-nrw/mp3-128/dmhubweb/play.mp3"
        },
        {
            name: "Schlager Radio",
            logo: "stations/images-europe/germany-rbb/Schlager Radio.png",
            url: "https://addrad.io/4454r8d"
        },
        {
            name: "STAR FM",
            logo: "stations/images-europe/germany-rbb/STAR FM.png",
            url: "https://stream.starfm.de/nrw/mp3-192/webseite"
        },
    ],
    "gibraltar": [
        {
            name: "BFBS Gibraltar",
            logo: "stations/images-europe/gibraltar/BFBS Gibraltar.png",
            url: "https://listen-ssvcbfbs.sharp-stream.com/ssvcbfbs7.aac"
        },
        {
            name: "BFBS Radio 2",
            logo: "stations/images-europe/gibraltar/BFBS Radio 2.png",
            url: "https://listen-ssvcbfbs.sharp-stream.com/ssvcbfbs2.aac"
        },
        {
            name: "Radio Gibraltar",
            logo: "stations/images-europe/gibraltar/Radio Gibraltar.png",
            url: "https://sh.uk.audio-stream.com/proxy/gibralta?mp=/stream"
        },
        {
            name: "Radio Gibraltar PLUS",
            logo: "stations/images-europe/gibraltar/Radio Gibraltar Plus.png",
            url: "https://s2.myradiostream.com/32910/listen.mp3"
        },
    ],
    "greece_ert": [
        {
            name: "ΕΡΤ Πρώτο πρόγραμμα",
            logo: "stations/images-europe/greece/ΕΡΤ Πρώτο πρόγραμμα.png",
            url: "http://radiostreaming.ert.gr/ert-proto"
        },
        {
            name: "ΕΡΤ Δεύτερο Πρόγραμμα",
            logo: "stations/images-europe/greece/ΕΡΤ Δεύτερο Πρόγραμμα.png",
            url: "http://radiostreaming.ert.gr/ert-deftero"
        },
        {
            name: "ΕΡΤ Τρίτο Πρόγραμμα",
            logo: "stations/images-europe/greece/ΕΡΤ Τρίτο Πρόγραμμα.png",
            url: "http://radiostreaming.ert.gr/ert-trito"
        },
        {
            name: "ΕΡΑ Σπορ",
            logo: "stations/images-europe/greece/ΕΡΑ Σπορ.png",
            url: "http://radiostreaming.ert.gr/ert-erasport"
        },
    ],
    "greece": [
        {
            name: "DeeJay",
            logo: "stations/images-europe/greece/DeeJay.png",
            url: "https://s6.e-resellers.gr/8010/stream.mp3"
        },
        {
            name: "Χρώμα FM",
            logo: "stations/images-europe/greece/Χρώμα FM.png",
            url: "http://hroma1058thess.live24.gr/hroma1058thess"
        },
        {
            name: "KISS",
            logo: "stations/images-europe/greece/KISS.png",
            url: "https://kissfm.live24.gr/kissfmathens"
        },
        {
            name: "Μελωδια",
            logo: "stations/images-europe/greece/Μελωδια.png",
            url: "https://stream.radiojar.com/melodia992"
        },
        {
            name: "Mythos Radio",
            logo: "stations/images-europe/greece/Mythos Radio.png",
            url: "http://s2.free-shoutcast.com:18560/stream/;.mp3"
        },
        {
            name: "ΣΚΑΪ",
            logo: "stations/images-europe/greece/ΣΚΑΪ.png",
            url: "https://skai.live24.gr/skai1003"
        },
        {
            name: "ΣΠΟΡ FM",
            logo: "stations/images-europe/greece/ΣΠΟΡ FM.png",
            url: "https://sportfm.live24.gr/sportfm7712"
        },
    ],
    "greece_argostoli": [
        {
            name: "InKefalonia 89.2",
            logo: "stations/images-europe/greece/argostoli/InKefalonia 89.2.png",
            url: "https://sp3.streams.ovh/8096/stream"
        },
        {
            name: "Ionian Galaxy 90.8",
            logo: "stations/images-europe/greece/argostoli/Ionian Galaxy 90.8.png",
            url: "https://srv.radiocaster.gr/9302/stream"
        },
        {
            name: "ΕΡΤ Ζακύνθου 93.2",
            logo: "stations/images-europe/greece/argostoli/ΕΡΤ Ζακύνθου.png",
            url: "https://radiostreaming.ert.gr/ert-zakynthos"
        },
        {
            name: "Νησί 93.9",
            logo: "stations/images-europe/greece/argostoli/Νησί 93.9.png",
            url: "https://sp3.streams.ovh/8054/stream"
        },
        {
            name: "Cosmos 96.5",
            logo: "stations/images-europe/greece/argostoli/Cosmos 96.5.png",
            url: "https://sp3.streams.ovh/8064/stream"
        },
        {
            name: "Palmos 98.3",
            logo: "stations/images-europe/greece/argostoli/Palmos 98.3.png",
            url: "https://netradio.live24.gr/palmos983"
        },
        {
            name: "100.6 KISS",
            logo: "stations/images-europe/greece/argostoli/100.6 KISS.png",
            url: "https://listen-kissfm1006.sharp-stream.com/kissfm1006hqprem.mp3"
        },
    ],
    "greece_athens": [
        {
            name: "En Lefko 87.7",
            logo: "stations/images-europe/greece/athens/En Lefko 87.7.png",
            url: "https://stream.rcs.revma.com/kwste9dz1duvv"
        },
        {
            name: "HiT 88.9",
            logo: "stations/images-europe/greece/athens/HiT 88.9.png",
            url: "https://stream.rcs.revma.com/r0yaerez1duvv"
        },
        {
            name: "Music 89.2",
            logo: "stations/images-europe/greece/athens/Music 89.2.png",
            url: "https://netradio.live24.gr/music892"
        },
        {
            name: "ΔΡΟΜΟΣ 89.8",
            logo: "stations/images-europe/greece/athens/ΔΡΟΜΟΣ 89.8.png",
            url: "https://stream.rcs.revma.com/10q3enqxbfhvv"
        },
        {
            name: "Κανάλι Ένα 90.4",
            logo: "stations/images-europe/greece/athens/Κανάλι Ένα 90.4.png",
            url: "https://netradio.live24.gr/kanali1peiraia"
        },
        {
            name: "best 92.6",
            logo: "stations/images-europe/greece/athens/best 92.6.png",
            url: "https://best.live24.gr/best1222"
        },
        {
            name: "ΕΡΤ Κόσμος 93.6",
            logo: "stations/images-europe/greece/athens/ΕΡΤ Κόσμος.png",
            url: "https://radiostreaming.ert.gr/ert-kosmos"
        },
        {
            name: "ΣΠΟΡ FM 94.6",
            logo: "stations/images-europe/greece/ΣΠΟΡ FM.png",
            url: "https://sportfm.live24.gr/sportfm7712"
        },
        {
            name: "DeeJay 95.2",
            logo: "stations/images-europe/greece/athens/DeeJay 95.2.png",
            url: "https://az10.yesstreaming.net:8140/radio.mp3"
        },
        {
            name: "RED 96.3",
            logo: "stations/images-europe/greece/athens/RED 96.3.png",
            url: "https://stream.rcs.revma.com/e4d84zez1duvv"
        },
        {
            name: "ROCK! 96.9",
            logo: "stations/images-europe/greece/athens/ROCK! 96.9.png",
            url: "https://az10.yesstreaming.net:8060/radio.mp3"
        },
        {
            name: "easy 97.2",
            logo: "stations/images-europe/greece/athens/easy 97.2.png",
            url: "https://stream.rcs.revma.com/4vr91u5r4a0uv"
        },
        {
            name: "Love 97.5",
            logo: "stations/images-europe/greece/athens/Love 97.5.png",
            url: "https://netradio.live24.gr/loveradio-1000"
        },
        {
            name: "Αθήνα 9,84 98.3",
            logo: "stations/images-europe/greece/athens/Αθήνα 9,84.png",
            url: "https://athina984.live24.gr/athina984"
        },
        {
            name: "ΣΚΑΪ 100.3",
            logo: "stations/images-europe/greece/athens/ΣΚΑΪ 100.3.png",
            url: "https://skai.live24.gr/skai1003"
        },
        {
            name: "Nostos 100.6",
            logo: "stations/images-europe/greece/athens/Nostos 100.6.png",
            url: "https://neos.win:37878/stream"
        },
        {
            name: "δίεση 101.3",
            logo: "stations/images-europe/greece/athens/δίεση 101.3.png",
            url: "https://stream.rcs.revma.com/gkfwrhqxbfhvv"
        },
        {
            name: "Sfera 102.2",
            logo: "stations/images-europe/greece/athens/Sfera 102.2.png",
            url: "https://sfera.live24.gr/sfera4132"
        },
        {
            name: "Voice 102.5",
            logo: "stations/images-europe/greece/athens/Voice 102.5.png",
            url: "https://stream.radiojar.com/u52ufw1qayduv"
        },
        {
            name: "Αρτ FM 102.7",
            logo: "stations/images-europe/greece/athens/Αρτ FM 102.7.png",
            url: "https://radio.webmonster.gr:8030/artfm906hi"
        },
        {
            name: "Happy 104",
            logo: "stations/images-europe/greece/athens/Happy 104.png",
            url: "https://ath10400fm-radioplayer.live24.gr/ath10400fm"
        },
        {
            name: "Rebel 105.2",
            logo: "stations/images-europe/greece/athens/Rebel 105.2.png",
            url: "https://netradio.live24.gr/rebel1052"
        },
        {
            name: "105.5 ΣΤΟ ΚΟΚΚΙΝΟ",
            logo: "stations/images-europe/greece/athens/105.5 ΣΤΟ ΚΟΚΚΙΝΟ.png",
            url: "https://stream.radiojar.com/red-source"
        },
        {
            name: "FM 106.5",
            logo: "stations/images-europe/greece/athens/FM 106.5.png",
            url: "https://shoutcast.k-planet.eu/9400/stream;"
        },
        {
            name: "Zeppelin 106.7",
            logo: "stations/images-europe/greece/athens/Zeppelin 106.7.png",
            url: "https://radiostreaming.ert.gr/ert-zeppelin"
        },
        {
            name: "blue space 107.2",
            logo: "stations/images-europe/greece/athens/blue space 107.2.png",
            url: "https://sp1.19cloudsnetwork.gr/8008/stream"
        },
        {
            name: "UniWA Radio 1287",
            logo: "stations/images-europe/greece/athens/UniWA Radio 1287.png",
            url: "https://stream.zeno.fm/1102n26rcg8uv"
        },
    ],
    "greece_chios": [
        {
            name: "ΕΡΤ Πρώτο πρόγραμμα",
            logo: "stations/images-europe/greece/ΕΡΤ Πρώτο πρόγραμμα.png",
            url: "http://radiostreaming.ert.gr/ert-proto"
        },
        {
            name: "ΕΡΤ Δεύτερο Πρόγραμμα",
            logo: "stations/images-europe/greece/ΕΡΤ Δεύτερο Πρόγραμμα.png",
            url: "http://radiostreaming.ert.gr/ert-deftero"
        },
        {
            name: "Pirate Radio GR",
            logo: "stations/images-europe/greece/chios/Pirate Radio GR.png",
            url: "https://live.piratefm.net/top"
        },
        {
            name: "Παλμός 94.1",
            logo: "stations/images-europe/greece/chios/Παλμός 94.1.png",
            url: "https://tls-chrome.live24.gr/1688?"
        },
        {
            name: "Radio Alpha Omega",
            logo: "stations/images-europe/greece/chios/Radio Alpha Omega.png",
            url: "http://live.radioalphaomega.com:4008/stream"
        },
        {
            name: "Ράδιο Αλήθεια",
            logo: "stations/images-europe/greece/chios/Ράδιο Αλήθεια.png",
            url: "https://radio.webhosting4u.gr/stream/alithia"
        },
        {
            name: "Ράδιο Μαστίχα",
            logo: "stations/images-europe/greece/chios/Ράδιο Μαστίχα.png",
            url: "https://radiomastixa.top:48000/"
        },
        {
            name: "Sfera 98,9",
            logo: "stations/images-europe/greece/chios/Sfera 98,9.png",
            url: "https://netradio.live24.gr/sfera989"
        },
        {
            name: "Χιακός 102.4",
            logo: "stations/images-europe/greece/chios/Χιακός 102.4.png",
            url: "https://cast2.radiohost.ovh/xiakos?mp=/stream"
        },
    ],
    "greece_ioannina": [
        {
            name: "ΕΡΤ Ιωαννίνων 88.2",
            logo: "stations/images-europe/greece/ioannina/ΕΡΤ Ιωαννίνων 88.2.png",
            url: "https://radiostreaming.ert.gr/ert-ioannina"
        },
        {
            name: "DeeJay 89.6",
            logo: "stations/images-europe/greece/ioannina/DeeJay 89.6.png",
            url: "https://sp3.streams.ovh/8089/stream"
        },
        {
            name: "4u Radio 90.7",
            logo: "stations/images-europe/greece/ioannina/4u Radio 90.7.png",
            url: "https://netradio.live24.gr/4uradio931"
        },
        {
            name: "KISS 91.1",
            logo: "stations/images-europe/greece/ioannina/KISS 91.1.png",
            url: "https://rdst.win:59110/stream"
        },
        {
            name: "Studio 3 92.7",
            logo: "stations/images-europe/greece/ioannina/Studio 3 92.7.png",
            url: "https://sh.onweb.gr/8408/stream"
        },
        {
            name: "Hit 93.5",
            logo: "stations/images-europe/greece/ioannina/Hit 93.5.png",
            url: "https://radio.escape-media.gr:8008/stream"
        },
        {
            name: "Melody 94.9",
            logo: "stations/images-europe/greece/ioannina/Melody 94.9.png",
            url: "http://i2.streams.ovh:7121/stream"
        },
        {
            name: "Ράδιο Σπίνος 96.0",
            logo: "stations/images-europe/greece/ioannina/Ράδιο Σπίνος 96.0.png",
            url: "https://cast.streams.ovh:12079/live"
        },
        {
            name: "Sky Radio 99.2",
            logo: "stations/images-europe/greece/ioannina/Sky Radio 99.2.png",
            url: "https://s12.ssl-stream.com/8048/stream"
        },
        {
            name: "Energy 101.5",
            logo: "stations/images-europe/greece/ioannina/Energy 101.5.png",
            url: "https://stream.radiojar.com/apb4wybq36duv"
        },
        {
            name: "Studio E 103.0",
            logo: "stations/images-europe/greece/ioannina/Studio E 103.0.png",
            url: "http://music.1host.gr:9045/stream"
        },
        {
            name: "Super FM 104.3",
            logo: "stations/images-europe/greece/ioannina/Super FM 104.3.png",
            url: "https://stream2.rcast.net/70305"
        },
        {
            name: "Giga FM 105.4",
            logo: "stations/images-europe/greece/ioannina/Giga FM 105.4.png",
            url: "https://s46.myradiostream.com/:7322/listen.mp3"
        },
        {
            name: "Nitro Radio 106.7",
            logo: "stations/images-europe/greece/ioannina/Nitro Radio 106.7.png",
            url: "https://politisradios.live24.gr/streameenitro"
        },
    ],
    "greece_chania": [
        {
            name: "Radio Amore 87.5",
            logo: "stations/images-europe/greece/crete/chania/Radio Amore 87.5.png",
            url: "https://sh.onweb.gr:7072/;"
        },
        {
            name: "Γαύδος 88.8",
            logo: "stations/images-europe/greece/crete/chania/Γαύδος.png",
            url: "https://sc2.streamwithq.com:2000/stream/GavdosFm/"
        },
        {
            name: "Ραδιο Παλαιοχωρα 89.3",
            logo: "stations/images-europe/greece/crete/chania/Ραδιο Παλαιοχωρα.png",
            url: "http://s6.onweb.gr:8068/stream"
        },
        {
            name: "Zarpa Radio 89.6",
            logo: "stations/images-europe/greece/crete/chania/Zarpa Radio 89.6.png",
            url: "https://sh.onweb.gr/8454/stream"
        },
        {
            name: "Δίκτυο FM 91.5",
            logo: "stations/images-europe/greece/crete/chania/Δίκτυο FM 91.5.png",
            url: "https://eu10.fastcast4u.com:7800/1"
        },
        {
            name: "Radio Faros 91.8",
            logo: "stations/images-europe/greece/crete/chania/Radio Faros 91.8.png",
            url: "http://s3.onweb.gr:8012/;"
        },
        {
            name: "Ράδιο Ριζίτες 92.4",
            logo: "stations/images-europe/greece/crete/chania/Ράδιο Ριζίτες.png",
            url: "http://s1.onweb.gr:8040/stream"
        },
        {
            name: "easy 93.2",
            logo: "stations/images-europe/greece/crete/chania/easy 93.2.png",
            url: "https://solid48.streamupsolutions.com/proxy/lhlamody?mp=/;type=mp"
        },
        {
            name: "Ράδιο Ένταση 93.5",
            logo: "stations/images-europe/greece/crete/chania/Ράδιο Ένταση 93.5.png",
            url: "https://entasistream.tuc.gr:8000/main.mp3"
        },
        {
            name: "Original 94.4",
            logo: "stations/images-europe/greece/crete/chania/Original 94.4.png",
            url: "http://eu10.fastcast4u.com:8990/;"
        },
        {
            name: "D-code 96.2",
            logo: "stations/images-europe/greece/crete/chania/D-code 96.2.png",
            url: "https://s15.myradiostream.com/:13980/listen.mp3"
        },
        {
            name: "Αντέννα Δυτ. Κρήτης 97.1",
            logo: "stations/images-europe/greece/crete/chania/Αντέννα Δυτ. Κρήτης 97.1.png",
            url: "https://sc2.streamwithq.com:8008/;stream.mp3"
        },
        {
            name: "Star 97.7",
            logo: "stations/images-europe/greece/crete/chania/Star 97.7.png",
            url: "https://solid55.streamupsolutions.com/proxy/vkpzhens/stream"
        },
        {
            name: "Magic FM 98.2",
            logo: "stations/images-europe/greece/crete/chania/Magic FM.png",
            url: "https://netradio.live24.gr/magic982"
        },
        {
            name: "Chania Radio 99.6",
            logo: "stations/images-europe/greece/crete/chania/Chania Radio 99.6.png",
            url: "https://sh.onweb.gr/8434/stream"
        },
        {
            name: "max 100.2",
            logo: "stations/images-europe/greece/crete/chania/max 100.2.png",
            url: "https://solid9.streamupsolutions.com/proxy/abuyunbd?mp=/;type=mp3"
        },
        {
            name: "myradio 104.6",
            logo: "stations/images-europe/greece/crete/chania/myradio 104.6.png",
            url: "https://streaming.myradio1046.fm/myradio1046"
        },
        {
            name: "Fresh 105",
            logo: "stations/images-europe/greece/crete/chania/Fresh 105.png",
            url: "https://webradio.neatv.gr:8443/stream"
        },
        {
            name: "Δρόμος 105.4",
            logo: "stations/images-europe/greece/crete/chania/Δρόμος 105.4.png",
            url: "https://sc2.streamwithq.com:8124/stream"
        },
        {
            name: "top fm 106.5",
            logo: "stations/images-europe/greece/crete/chania/top fm 106.5.png",
            url: "http://sc2.streamwithq.com:8086/;stream.nsv"
        },
        {
            name: "AFN Souda Bay 107.3",
            logo: "stations/images-europe/greece/crete/chania/AFN Souda Bay.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/AFNE_SDBAAC_SC"
        },
    ],
    "greece_crete": [
        {
            name: "Κρήτη FM",
            logo: "stations/images-europe/greece/crete/Κρήτη FM.png",
            url: "http://s3.onweb.gr:8878/stream"
        },
        {
            name: "Κρητικόραμα",
            logo: "stations/images-europe/greece/crete/Κρητικόραμα.png",
            url: "http://prech.kritikorama.eu:9382/prech"
        },
        {
            name: "Ράδιο Κρήτη",
            logo: "stations/images-europe/greece/crete/Ράδιο Κρήτη.png",
            url: "https://6182bfa7cd933.streamlock.net:8843/Radiokriti/Radiokriti/playlist.m3u8"
        },
    ],
    "greece_heraklion": [
        {
            name: "Ερωτόκριτος FM 87.9",
            logo: "stations/images-europe/greece/crete/heraklion/Ερωτόκριτος FM 87.9.png",
            url: "http://stream2.proradio.gr:8004/erotokritos"
        },
        {
            name: "Fly 88.1",
            logo: "stations/images-europe/greece/crete/heraklion/Fly 88.1.png",
            url: "http://eco.onestreaming.com:8602/;"
        },
        {
            name: "Radio me 88.4",
            logo: "stations/images-europe/greece/crete/heraklion/Radio me 88.4.png",
            url: "https://eco.onestreaming.com/proxy/radiome/stream"
        },
        {
            name: "Κρητικός 88,7",
            logo: "stations/images-europe/greece/crete/heraklion/Κρητικός 88,7.png",
            url: "http://dione.shoutca.st:8443/;"
        },
        {
            name: "Radio Family 89.5",
            logo: "stations/images-europe/greece/crete/heraklion/Radio Family.png",
            url: "https://www.fmlive.gr/8002/stream"
        },
        {
            name: "super 90.4",
            logo: "stations/images-europe/greece/crete/heraklion/super 90.4.png",
            url: "https://super904-spirosb.radioca.st/;"
        },
        {
            name: "dream 90.7",
            logo: "stations/images-europe/greece/crete/heraklion/dream 90.7.png",
            url: "http://neos.win:8420/stream"
        },
        {
            name: "Ράδιο Ανάμνηση 91.0",
            logo: "stations/images-europe/greece/crete/heraklion/Ράδιο Ανάμνηση.png",
            url: "https://netradio.live24.gr/radioanamnisi910"
        },
        {
            name: "Traffic FM 91.8",
            logo: "stations/images-europe/greece/crete/heraklion/Traffic FM 91.8.png",
            url: "http://s5.onweb.gr:8506/stream"
        },
        {
            name: "ΣΚΑΙ Κρήτης 92.1",
            logo: "stations/images-europe/greece/crete/heraklion/ΣΚΑΙ Κρήτης 92.1.png",
            url: "https://sc2.streamwithq.com:2000/stream/SkaiKritis"
        },
        {
            name: "up 92.9",
            logo: "stations/images-europe/greece/crete/heraklion/up 92.9.png",
            url: "https://netradio.live24.gr/lampsi929herakleio"
        },
        {
            name: "KISS 96.1",
            logo: "stations/images-europe/greece/crete/heraklion/KISS 96.1.png",
            url: "https://antares.dribbcast.com/proxy/kiss961?mp=/stream"
        },
        {
            name: "Ράδιο 98.4",
            logo: "stations/images-europe/greece/crete/heraklion/Ράδιο 98.4.png",
            url: "https://cast4.my-control-panel.com/proxy/anastas2/stream"
        },
        {
            name: "Sfera 98.7",
            logo: "stations/images-europe/greece/crete/heraklion/Sfera.png",
            url: "https://i5.streams.ovh:2200/sc/web100/stream"
        },
        {
            name: "ο Εύδιος Λιμήν 101.9",
            logo: "stations/images-europe/greece/crete/heraklion/ο Εύδιος Λιμήν.png",
            url: "https://eco.onestreaming.com/proxy/imga/stream"
        },
        {
            name: "Love Radio Κρήτης 102.8",
            logo: "stations/images-europe/greece/crete/heraklion/Love Radio Κρήτης 102.8.png",
            url: "https://loveradio-her.live24.gr/loveradio-her2"
        },
        {
            name: "Λατώ FM 103.3",
            logo: "stations/images-europe/greece/crete/heraklion/Λατώ FM 103.3.png",
            url: "https://stream.latofm.gr/latofm"
        },
        {
            name: "Mousiko Kanali 105.1",
            logo: "stations/images-europe/greece/crete/heraklion/Mousiko Kanali 105.1.png",
            url: "https://stream1.mousikokanali.gr/mc"
        },
        {
            name: "Music Club 105.8",
            logo: "stations/images-europe/greece/crete/heraklion/Music Club 105.8.png",
            url: "https://antares.dribbcast.com/proxy/music1058?mp=/stream"
        },
        {
            name: "Υδρόγειος 106.9",
            logo: "stations/images-europe/greece/crete/heraklion/Υδρόγειος 106.9.png",
            url: "https://netradio.live24.gr/ydrogeios1069her"
        },
        {
            name: "derti 107.7",
            logo: "stations/images-europe/greece/crete/heraklion/derti 107.7.png",
            url: "https://i5.streams.ovh:2200/sc/web101/stream"
        },
    ],
    "greece_kavala": [
        {
            name: "Μελωδία 88.3",
            logo: "stations/images-europe/greece/kavala/Μελωδία 88.3.png",
            url: "https://stream.rcs.revma.com/melodia992"
        },
        {
            name: "Alpha Radio 88.6",
            logo: "stations/images-europe/greece/kavala/Alpha Radio 88.6.png",
            url: "https://stream3.proradio.gr/listen/alpharadio/alpharadio"
        },
        {
            name: "Ena Radio 90.5",
            logo: "stations/images-europe/greece/kavala/Ena Radio 90.5.png",
            url: "https://rdst.win:48000/stream?type=.mp3"
        },
        {
            name: "Νεάπολις Radio 90.8",
            logo: "stations/images-europe/greece/kavala/Νεάπολις Radio 90.8.png",
            url: "https://radio.divographics.com:8030/radio.mp3"
        },
        {
            name: "Love Radio 91.7",
            logo: "stations/images-europe/greece/kavala/Love Radio 91.7.png",
            url: "https://i5.streams.ovh:14036/live"
        },
        {
            name: "Cosmos 93.2",
            logo: "stations/images-europe/greece/kavala/Cosmos 93.2.png",
            url: "https://neos.win:59320/stream"
        },
        {
            name: "Πρωινή FM 93.7",
            logo: "stations/images-europe/greece/kavala/Πρωινή FM 93.7.png",
            url: "http://62.103.31.151:8000/stream"
        },
        {
            name: "ΕΡΤ Καβάλας 96.3",
            logo: "stations/images-europe/greece/kavala/ΕΡΤ Καβάλας 96.3.png",
            url: "https://radiostreaming.ert.gr/ert-kavala"
        },
        {
            name: "Stoxos FM 98.9",
            logo: "stations/images-europe/greece/kavala/Stoxos FM 98.9.png",
            url: "http://s3.onweb.gr:8016/stream"
        },
        {
            name: "Λελέβωσε 101.3",
            logo: "stations/images-europe/greece/kavala/Λελέβωσε 101.3.png",
            url: "https://tls-chrome.live24.gr/972"
        },
        {
            name: "KavalaNews 102.8",
            logo: "stations/images-europe/greece/kavala/KavalaNews 102.8.png",
            url: "https://sp3.streams.ovh/8052/stream"
        },
        {
            name: "Παλμός 103.2",
            logo: "stations/images-europe/greece/kavala/Παλμός 103.2.png",
            url: "https://netradio.live24.gr/palmos1032"
        },
        {
            name: "Λάμψη 105.7",
            logo: "stations/images-europe/greece/kavala/Λάμψη 105.7.png",
            url: "https://stream3.proradio.gr/listen/lampsi/lampsifm"
        },
        {
            name: "Ράδιο Μακεδόνισσα 106.4",
            logo: "stations/images-europe/greece/kavala/Ράδιο Μακεδόνισσα 106.4.png",
            url: "https://netradio.live24.gr/makedonissa1064"
        },
        {
            name: "Capital 107",
            logo: "stations/images-europe/greece/kavala/Capital 107.png",
            url: "https://neos.win:59350/stream"
        },
    ],
    "greece_mitilini": [
        {
            name: "ΕΡΤ Β.Αιγαίου",
            logo: "stations/images-europe/greece/mitilini/ΕΡΤ Β.Αιγαίου.png",
            url: "https://radiostreaming.ert.gr/ert-aigaiou"
        },
        {
            name: "ΕΡΤ Τρίτο Πρόγραμμα",
            logo: "stations/images-europe/greece/ΕΡΤ Τρίτο Πρόγραμμα.png",
            url: "http://radiostreaming.ert.gr/ert-trito"
        },
        {
            name: "Αίολος",
            logo: "stations/images-europe/greece/mitilini/Αίολος.png",
            url: "https://eco.onestreaming.com/proxy/aeolos/stream"
        },
        {
            name: "astra 93.2",
            logo: "stations/images-europe/greece/mitilini/astra 93.2.png",
            url: "https://eco.onestreaming.com/proxy/astra/stream"
        },
        {
            name: "Love Radio",
            logo: "stations/images-europe/greece/mitilini/Love Radio.png",
            url: "https://solid1.streamupsolutions.com/proxy/apzxhsah?mp=/stream"
        },
        {
            name: "Ράδιο Καλλονή",
            logo: "stations/images-europe/greece/mitilini/Ράδιο Καλλονή.png",
            url: "https://solid55.streamupsolutions.com/proxy/pelsssbw?mp=/;type=mp3"
        },
        {
            name: "Ράδιο Μυτιλήνη",
            logo: "stations/images-europe/greece/mitilini/Ράδιο Μυτιλήνη.png",
            url: "https://cast5.magicstreams.gr/sc/radiomitilini90/stream"
        },
        {
            name: "Ρυθμός 91.6",
            logo: "stations/images-europe/greece/mitilini/Ρυθμός 91.6.png",
            url: "https://cast5.magicstreams.gr/sc/rythmos916/stream"
        },
        {
            name: "ΣΚΑΪ ΑΙΓΑΙΟΥ",
            logo: "stations/images-europe/greece/mitilini/ΣΚΑΪ ΑΙΓΑΙΟΥ.png",
            url: "http://live.isol.biz:8500/stream"
        },
        {
            name: "SLAM!",
            logo: "stations/images-europe/greece/mitilini/SLAM! 101.5.png",
            url: "https://eco.onestreaming.com/proxy/slam/stream"
        },
        {
            name: "Στο Νησί 99",
            logo: "stations/images-europe/greece/mitilini/Στο Νησί 99.png",
            url: "https://eco.onestreaming.com/proxy/stonisi99/stream"
        },
    ],
    "greece_rhodes": [
        {
            name: "Radio 1 88.0",
            logo: "stations/images-europe/greece/rhodes/Ράδιο 1.png",
            url: "http://111.gr:8000/;"
        },
        {
            name: "Ρόδος FM 90.7",
            logo: "stations/images-europe/greece/rhodes/Ρόδος FM.png",
            url: "https://i.streams.ovh:9327/stream"
        },
        {
            name: "Ράδιο Λυχνάρι 91.4",
            logo: "stations/images-europe/greece/rhodes/Ράδιο Λυχνάρι.png",
            url: "https://eco.onestreaming.com/proxy/lyxnari/stream"
        },
        {
            name: "ΕΡΤ Νοτίου Αιγαίου 93.1",
            logo: "stations/images-europe/greece/rhodes/ΕΡΤ Νοτίου Αιγαίου 93.1.png",
            url: "https://radiostreaming.ert.gr/ert-rodos"
        },
        {
            name: "Kosmos 93.8",
            logo: "stations/images-europe/greece/rhodes/Kosmos 93.8.png",
            url: "https://netradio.live24.gr/kosmos938rodos"
        },
        {
            name: "Rythmos 94.5",
            logo: "stations/images-europe/greece/rhodes/Rythmos 94.5.png",
            url: "https://netradio.live24.gr/rythmos945rodos"
        },
        {
            name: "Notos News 97.8",
            logo: "stations/images-europe/greece/rhodes/Notos News.png",
            url: "https://i.streams.ovh:9331/stream"
        },
        {
            name: "Radio Galaxy 99",
            logo: "stations/images-europe/greece/rhodes/Radio Galaxy 99.png",
            url: "https://solid1.streamupsolutions.com/proxy/tfcgioyq?mp=/stream"
        },
        {
            name: "Real Voice 99.5",
            logo: "stations/images-europe/greece/rhodes/Real Voice.png",
            url: "https://radio.streamings.gr/proxy/realvoice995?mp=/stream"
        },
        {
            name: "Sky Rodos 100.8",
            logo: "stations/images-europe/greece/rhodes/Sky Rodos.png",
            url: "https://s6.myradiostream.com:45076/;listen.mp3"
        },
        {
            name: "Αρχάγγελος 101.7",
            logo: "stations/images-europe/greece/rhodes/Αρχάγγελος.png",
            url: "https://eco.onestreaming.com/proxy/arhagelos/stream"
        },
        {
            name: "TOP FM 102.4",
            logo: "stations/images-europe/greece/rhodes/TOP FM.png",
            url: "https://eco.onestreaming.com/proxy/topfm/stream"
        },
        {
            name: "BEST FM 103.1",
            logo: "stations/images-europe/greece/rhodes/BEST.png",
            url: "https://softloop.gr/8004/stream"
        },
        {
            name: "Μελωδία Ρόδου 103.7",
            logo: "stations/images-europe/greece/rhodes/Μελωδία Ρόδου.png",
            url: "https://eco.onestreaming.com/proxy/melodiarodou/stream"
        },
        {
            name: "Box Radio 104.9",
            logo: "stations/images-europe/greece/rhodes/Box Radio.png",
            url: "https://feelgood.radioca.st/stream"
        },
    ],
    "greece_thessaloniki": [
        {
            name: "89 Rainbow",
            logo: "stations/images-europe/greece/thessaloniki/89 Rainbow.png",
            url: "https://stream.radiojar.com/083wqknmsuhvv"
        },
        {
            name: "we 89.4",
            logo: "stations/images-europe/greece/thessaloniki/we 89.4.png",
            url: "https://centova.gr-net.gr/proxy/we894/stream"
        },
        {
            name: "Ζοο 90.8",
            logo: "stations/images-europe/greece/thessaloniki/Ζοο 90.8.png",
            url: "https://metromedia.live24.gr/zoo908thess"
        },
        {
            name: "RSO 91.7",
            logo: "stations/images-europe/greece/thessaloniki/RSO 91.7.png",
            url: "https://rso917greece.radioca.st/stream"
        },
        {
            name: "Karamela 92.3",
            logo: "stations/images-europe/greece/thessaloniki/Karamela 92.3.png",
            url: "https://netradio.live24.gr/924fm-thess"
        },
        {
            name: "Ράδιο Θεσσαλονίκη 94.5",
            logo: "stations/images-europe/greece/thessaloniki/Ράδιο Θεσσαλονίκη 94.5.png",
            url: "https://eu7.fastcast4u.com/proxy/nmarog02?mp=/1"
        },
        {
            name: "Metropolis 95.5",
            logo: "stations/images-europe/greece/thessaloniki/Metropolis 95.5.png",
            url: "http://metropolis.live24.gr/metropolis955thess"
        },
        {
            name: "Μινόρε 96.1",
            logo: "stations/images-europe/greece/thessaloniki/Μινόρε 96.1.png",
            url: "https://eu3.fastcast4u.com/proxy/nmarog00?mp=/1"
        },
        {
            name: "96.8 Velvet",
            logo: "stations/images-europe/greece/thessaloniki/96.8 Velvet.png",
            url: "https://metromedia.live24.gr/velvet968thess"
        },
        {
            name: "Flash 99.4",
            logo: "stations/images-europe/greece/thessaloniki/Flash 99.4.png",
            url: "https://webradio.northbridge.gr/proxy/flash994/source"
        },
        {
            name: "Τρανζίστορ 100.3",
            logo: "stations/images-europe/greece/thessaloniki/Τρανζίστορ 100.3.png",
            url: "https://metromedia.live24.gr/tranzistor1003thess"
        },
        {
            name: "Yellow Radio 100.7",
            logo: "stations/images-europe/greece/thessaloniki/Yellow Radio 100.7.png",
            url: "https://ice.greekstream.net/yellow"
        },
        {
            name: "Plus 102.6",
            logo: "stations/images-europe/greece/thessaloniki/Plus 102.6.png",
            url: "https://plusradio.gr/stream1"
        },
        {
            name: "Focus FM 103.6",
            logo: "stations/images-europe/greece/thessaloniki/Focus FM 103.6.png",
            url: "https://ice.greekstream.net/focusfm"
        },
        {
            name: "FLY 104",
            logo: "stations/images-europe/greece/thessaloniki/FLY 104.png",
            url: "https://imagine2.radioca.st/stream"
        },
        {
            name: "Shook 104.4",
            logo: "stations/images-europe/greece/thessaloniki/Shook 104.4.png",
            url: "https://sh.onweb.gr/8812/;/chillout.mp3"
        },
        {
            name: "105.5 ROCK",
            logo: "stations/images-europe/greece/thessaloniki/105.5 ROCK.png",
            url: "https://radio.1055rock.gr:31056/live"
        },
        {
            name: "City 106.1",
            logo: "stations/images-europe/greece/thessaloniki/City 106.1.png",
            url: "https://radio.lancom.gr:9012/stream5"
        },
        {
            name: "Music 107.1",
            logo: "stations/images-europe/greece/thessaloniki/Music 107.1.png",
            url: "https://netradio.live24.gr/music1071thess"
        },
        {
            name: "Libero 107.4",
            logo: "stations/images-europe/greece/thessaloniki/Libero 107.4.png",
            url: "https://radio.libero.fm:10750/live"
        },
    ],
    "greenland": [
        {
            name: "Kalaallit Nunaata Radioa",
            logo: "stations/images-europe/greenland/Kalaallit Nunaata Radioa.svg",
            url: "https://www.knr.gl/radiolivestream"
        },
        {
            name: "Nanoq FM",
            logo: "stations/images-europe/greenland/Nanoq FM.png",
            url: "https://getnanoq.retro-radio.dk/Nanoq-TX-1"
        },
    ],
    "hungary": [
        {
            name: "Kossuth Rádió",
            logo: "stations/images-europe/hungary/Kossuth Rádió.png",
            url: "https://icast.connectmedia.hu/4726/mr1ex.mp3"
        },
        {
            name: "Petőfi Rádió",
            logo: "stations/images-europe/hungary/Petőfi Rádió.png",
            url: "https://mr-stream.connectmedia.hu/4738/mr2.mp3"
        },
        {
            name: "Bartók Rádió",
            logo: "stations/images-europe/hungary/Bartók Rádió.png",
            url: "https://mr-stream.connectmedia.hu/4741/mr3.mp3"
        },
        {
            name: "Dankó Rádió",
            logo: "stations/images-europe/hungary/Dankó Rádió.png",
            url: "https://mr-stream.connectmedia.hu/4748/mr7.mp3"
        },
        {
            name: "Best FM",
            logo: "stations/images-europe/hungary/Best FM.png",
            url: "https://icast.connectmedia.hu/5101/live.mp3/"
        },
        {
            name: "Hír FM",
            logo: "stations/images-europe/hungary/Hír FM.png",
            url: "https://stream.rcs.revma.com/wevb267khf9uv"
        },
        {
            name: "Magyar Katolikus Rádió",
            logo: "stations/images-europe/hungary/Magyar Katolikus Rádió.png",
            url: "https://katolikusradio.hu:8001/live_hi.mp3"
        },
        {
            name: "Mária Rádió",
            logo: "stations/images-europe/hungary/Mária Rádió.png",
            url: "https://stream.mariaradio.hu:8000/mr"
        },
        {
            name: "Rádió 1",
            logo: "stations/images-europe/hungary/Rádió 1.png",
            url: "https://icast.connectmedia.hu/5201/live.mp3"
        },
        {
            name: "Retro Rádió",
            logo: "stations/images-europe/hungary/Retro Rádió.png",
            url: "https://icast.connectmedia.hu/5001/live.mp3"
        },
        {
            name: "Szent István Rádió",
            logo: "stations/images-europe/hungary/Szent István Rádió.png",
            url: "http://online.szentistvanradio.hu:7000/adas"
        },
    ],
    "iceland": [
        {
            name: "Rás 1",
            logo: "stations/images-europe/iceland/Rás 1.png",
            url: "http://netradio.ruv.is/ras1.mp3"
        },
        {
            name: "Rás 2",
            logo: "stations/images-europe/iceland/Rás 2.png",
            url: "http://netradio.ruv.is/ras2.mp3"
        },
        {
            name: "Bylgjan",
            logo: "stations/images-europe/iceland/Bylgjan.png",
            url: "https://live.visir.is/hls-radio/bylgjan/playlist.m3u8"
        },
        {
            name: "FM957",
            logo: "stations/images-europe/iceland/FM957.png",
            url: "https://live.visir.is/hls-radio/fm957/playlist.m3u8"
        },
        {
            name: "K100",
            logo: "stations/images-europe/iceland/K100.png",
            url: "https://ice-11.spilarinn.is/kaninnmobile"
        },
        {
            name: "KISS FM",
            logo: "stations/images-europe/iceland/KISS FM.png",
            url: "https://ice-11.spilarinn.is/kissfm"
        },
        {
            name: "Lindin",
            logo: "stations/images-europe/faroe/Lindin.png",
            url: "http://62.145.147.50:8001/stream.aac"
        },
        {
            name: "Útvarp Saga",
            logo: "stations/images-europe/iceland/Útvarp Saga.png",
            url: "https://stream.utvarpsaga.is/Hljodver"
        },
        {
            name: "X977",
            logo: "stations/images-europe/iceland/X977.png",
            url: "https://live.visir.is/hls-radio/x977/playlist.m3u8"
        },
    ],
    "iom": [
        {
            name: "3FM",
            logo: "stations/images-europe/iom/3FM.png",
            url: "https://stream.rcs.revma.com/0kv9v43t87zuv"
        },
        {
            name: "Energy FM",
            logo: "stations/images-europe/iom/Energy FM.png",
            url: "https://ukwesta.streaming.broadcast.radio/energyfm"
        },
        {
            name: "Manx Radio",
            logo: "stations/images-europe/iom/Manx Radio.png",
            url: "https://listen-manxradio.sharp-stream.com/manxradiofm.aac"
        },
        {
            name: "Manx Radio Gold",
            logo: "stations/images-europe/iom/Manx Radio Gold.png",
            url: "https://listen-manxradio.sharp-stream.com/manxgoldlow.aac"
        },
    ],
    "iraq": [
        {
            name: "إذاعة الكفيل",
            logo: "stations/images-europe/iraq/إذاعة الكفيل.png",
            url: "https://stream.alkafeel.net/live/radio/playlist.m3u8"
        },
        {
            name: "راديو الآن",
            logo: "stations/images-europe/iraq/راديو الآن.png",
            url: "https://c20.radioboss.fm/stream/543"
        },
        {
            name: "راديو الحياة الجديدة",
            logo: "stations/images-europe/iraq/راديو الحياة الجديدة.png",
            url: "https://s2.radio.co/sd3c7f8539/listen"
        },
        {
            name: "Sumer FM",
            logo: "stations/images-europe/iraq/Sumer FM.png",
            url: "https://l3.itworkscdn.net/itwaudio/9012/stream"
        },
    ],
    "ireland": [
        {
            name: "RTÉ Radio 1",
            logo: "stations/images-europe/ireland/RTÉ Radio 1.png",
            url: "https://icy1.rte.ie/radio1"
        },
        {
            name: "RTÉ 2FM",
            logo: "stations/images-europe/ireland/RTÉ 2fm.png",
            url: "https://icy1.rte.ie/2fm"
        },
        {
            name: "RTÉ lyric fm",
            logo: "stations/images-europe/ireland/RTÉ Lyric FM.png",
            url: "https://icy1.rte.ie/lyric"
        },
        {
            name: "RTÉ Raidió na Gaeltachta",
            logo: "stations/images-europe/ireland/RTÉ Raidió na Gaeltachta.png",
            url: "https://icy1.rte.ie/rnag"
        },
        {
            name: "Classic Hits",
            logo: "stations/images-europe/ireland/Classic Hits.png",
            url: "https://edge2.audioxi.com/CLASSIC"
        },
        {
            name: "iRadio",
            logo: "stations/images-europe/ireland/iRadio.png",
            url: "https://live-bauerie.sharp-stream.com/IRADNW"
        },
        {
            name: "Newstalk",
            logo: "stations/images-europe/ireland/Newstalk.png",
            url: "https://stream.audioxi.com/NT"
        },
        {
            name: "Today FM",
            logo: "stations/images-europe/ireland/Today FM.png",
            url: "https://stream.audioxi.com/TD"
        },
    ],
    "israel": [
        {
            name: "כאן 88",
            logo: "stations/images-europe/israel/KAN 88.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KAN_88_SC"
        },
        {
            name: "רדיו לב המדינה",
            logo: "stations/images-europe/israel/רדיו לב המדינה.png",
            url: "https://cdn.cybercdn.live/Lev_Hamedina/Audio/icecast.audio"
        },
        {
            name: "כאן ב",
            logo: "stations/images-europe/israel/KAN BET.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KAN_BET_SC"
        },
        {
            name: "כאן גימל",
            logo: "stations/images-europe/israel/KAN GIMMEL.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KAN_GIMMEL_SC"
        },
        {
            name: "כאן קול המוסיקה",
            logo: "stations/images-europe/israel/KAN Kol HaMusika.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KAN_KOL_HAMUSICA_SC"
        },
        {
            name: "כאן רקע",
            logo: "stations/images-europe/israel/KAN Reka.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KAN_REKA_SC"
        },
        {
            name: "כאן מורשת",
            logo: "stations/images-europe/israel/KAN Moreshet.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KAN_MORESHET_SC"
        },
        {
            name: "כאן תרבות",
            logo: "stations/images-europe/israel/KAN Tarbut.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/KAN_TARBUT_SC"
        },
        {
            name: "רדיו מַכַּאן",
            logo: "stations/images-europe/israel/Radio Makan.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_MAKAN_SC"
        },
        {
            name: "גלגלצ",
            logo: "stations/images-europe/israel/GalGalatz.png",
            url: "https://glzwizzlv.bynetcdn.com/glglz_mp3"
        },
        {
            name: "מנגן עכשיו",
            logo: "stations/images-europe/israel/Galei Zahal.png",
            url: "https://glzwizzlv.bynetcdn.com/glz_mp3"
        },
        {
            name: "100FM רדיוס",
            logo: "stations/images-europe/israel/100FM רדיוס.png",
            url: "https://cp.multix.co.il/100FmLiveVideo/index.m3u8"
        },
    ],
    "italy": [
        {
            name: "Rai Radio 1",
            logo: "stations/images-europe/italy/RAI Radio 1.png",
            url: "https://radiounoest-live.akamaized.net/hls/live/2032586/radiounoest/radiounoest/playlist.m3u8"
        },
        {
            name: "Rai Radio 2",
            logo: "stations/images-europe/italy/RAI Radio 2.png",
            url: "https://radiodue-live.akamaized.net/hls/live/2032592/radiodue/radiodue/playlist.m3u8"
        },
        {
            name: "Rai Radio 3",
            logo: "stations/images-europe/italy/RAI Radio 3.png",
            url: "https://radiotre-live.akamaized.net/hls/live/2032594/radiotre/radiotre/playlist.m3u8"
        },
        {
            name: "Rai Radio Tutta Italiana",
            logo: "stations/images-europe/italy/Rai Radio Tutta Italiana.png",
            url: "https://radiotuttaitaliana-live.akamaized.net/hls/live/2032596/radiotuttaitaliana/radiotuttaitaliana/playlist.m3u8"
        },
        {
            name: "Rai Isoradio",
            logo: "stations/images-europe/italy/RAI IsoRadio.png",
            url: "https://isoradioest-live.akamaized.net/hls/live/2032602/isoradioest/isoradioest/playlist.m3u8"
        },
        {
            name: "Rai GR Parlamento",
            logo: "stations/images-europe/italy/Rai GR Parlamento.png",
            url: "https://radioparlamento-live.akamaized.net/hls/live/2032597/radioparlamento/radioparlamento/playlist.m3u8"
        },
        {
            name: "No Name Radio",
            logo: "stations/images-europe/italy/No Name Radio.png",
            url: "https://radiodueindie-live.akamaized.net/hls/live/2032593/radiodueindie/radiodueindie/playlist.m3u8"
        },
        {
            name: "ACI Radio",
            logo: "stations/images-europe/italy/ACI Radio.png",
            url: "https://nr7.newradio.it:18003/stream2"
        },
        {
            name: "BBC World Service",
            logo: "stations/images-europe/italy/BBC World Service.png",
            url: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service"
        },
        {
            name: "InBlu2000",
            logo: "stations/images-europe/italy/InBlu2000.png",
            url: "https://cld05wz.tv2000.it/HLS/RadioInBlu/webradiolive/chunklist.m3u8"
        },
        {
            name: "m2o",
            logo: "stations/images-europe/italy/m2o.png",
            url: "https://4c4b867c89244861ac216426883d1ad0.msvdn.net/radiom2o/radiom2o/master_ma.m3u8"
        },
        {
            name: "m2o Dance",
            logo: "stations/images-europe/italy/m2o Dance.png",
            url: "https://4c4b867c89244861ac216426883d1ad0.msvdn.net/radiom2odance/radiom2odance/play1.m3u8"
        },
        {
            name: "R101",
            logo: "stations/images-europe/italy/R101.png",
            url: "http://icecast.unitedradio.it/r101"
        },
        {
            name: "Radio 105",
            logo: "stations/images-europe/italy/Radio 105 FM.png",
            url: "https://icecast.unitedradio.it/Radio105.mp3"
        },
        {
            name: "Radio 24",
            logo: "stations/images-europe/italy/Radio 24.png",
            url: "https://ilsole24ore-radio.akamaized.net/hls/live/2035301/radio24/playlist.m3u8"
        },
        {
            name: "Radio Bruno",
            logo: "stations/images-europe/italy/Radio Bruno.png",
            url: "http://onair18.xdevel.com:7968/;"
        },
        {
            name: "Radio Capital",
            logo: "stations/images-europe/italy/Radio Capital.png",
            url: "https://streamcdnb1-4c4b867c89244861ac216426883d1ad0.msvdn.net/radiocapital/radiocapital/play1.m3u8"
        },
        {
            name: "Radio Capital Funky Town",
            logo: "stations/images-europe/italy/Radio Capital.png",
            url: "https://4c4b867c89244861ac216426883d1ad0.msvdn.net/radiocapitalfunkytown/radiocapitalfunkytown/play1.m3u8"
        },
        {
            name: "Radio Deejay",
            logo: "stations/images-europe/italy/Radio Deejay.png",
            url: "https://streamcdnb1-4c4b867c89244861ac216426883d1ad0.msvdn.net/radiodeejay/radiodeejay/play1.m3u8"
        },
        {
            name: "Deejay 30 Songs",
            logo: "stations/images-europe/italy/Deejay 30 Songs.png",
            url: "https://4c4b867c89244861ac216426883d1ad0.msvdn.net/radiodeejay30songs/radiodeejay30songs/play1.m3u8"
        },
        {
            name: "RDS",
            logo: "stations/images-europe/italy/RDS.png",
            url: "https://stream.rds.radio/audio/rds.stream_aac/playlist.m3u8"
        },
        {
            name: "RDS Relax",
            logo: "stations/images-europe/italy/RDS Relax.png",
            url: "https://stream.rds.radio/audio/rdsrelax.stream_aac64/playlist.m3u8"
        },
        {
            name: "Radiofreccia",
            logo: "stations/images-europe/italy/Radiofreccia.png",
            url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S3160845/D6MENOraq6Qy/playlist_audio.m3u8"
        },
        {
            name: "Radio Italia",
            logo: "stations/images-europe/italy/Radio Italia.png",
            url: "https://radioitaliasmi.akamaized.net/hls/live/2093120/RISMI/stream01/streamPlaylist.m3u8"
        },
        {
            name: "Radio Italia Trend",
            logo: "stations/images-europe/italy/Radio Italia Trend.png",
            url: "https://stream4.xdevel.com/audio0s976608-1379/stream/icecast.audio"
        },
        {
            name: "Radio Kiss Kiss",
            logo: "stations/images-europe/italy/Radio Kiss Kiss.png",
            url: "https://ice08.fluidstream.net/KissKiss.aac"
        },
        {
            name: "Radio Maria",
            logo: "stations/images-europe/italy/Radio Maria.png",
            url: "https://dreamsiteradiocp5.com/proxy/rmitalia?mp=/stream"
        },
        {
            name: "Radio Maria Albania",
            logo: "stations/images-europe/italy/Radio Maria Albania.png",
            url: "https://dreamsiteradiocp2.com/proxy/rmalbania2?mp=/stream"
        },
        {
            name: "Radio Libertà",
            logo: "stations/images-europe/italy/Radio Libertà.png",
            url: "https://stream1.xdevel.com/audio0s975360-306/stream/icecast.audio"
        },
        {
            name: "Radio Monte Carlo",
            logo: "stations/images-europe/italy/Radio Monte Carlo.png",
            url: "https://icy.unitedradio.it/RMC.mp3"
        },
        {
            name: "Radio Radicale",
            logo: "stations/images-europe/italy/Radio Radicale.png",
            url: "https://live.radioradicale.it/live.mp3"
        },
        {
            name: "Radio Sportiva",
            logo: "stations/images-europe/italy/Radio Sportiva.png",
            url: "https://sportiva.inmystream.it/stream/sportiva"
        },
        {
            name: "Radio Subasio XL",
            logo: "stations/images-europe/italy/Radio Subasio XL.png",
            url: "https://icy.unitedradio.it/SubasioXL.mp3"
        },
        {
            name: "Radio Vaticana",
            logo: "stations/images-europe/italy/Radio Vaticana.png",
            url: "https://radio.vaticannews.va/stream-it"
        },
        {
            name: "Radio Zeta",
            logo: "stations/images-europe/italy/Radio Zeta.png",
            url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S9346184/clhI2IJWRnn7/playlist_audio.m3u8"
        },
        {
            name: "RTL 102.5",
            logo: "stations/images-europe/italy/RTL 102.5.png",
            url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S97044836/WjpMtPyNjHwj/playlist_audio.m3u8"
        },
        {
            name: "RTL 102.5 Best",
            logo: "stations/images-europe/italy/RTL 102.5 Best.png",
            url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S76960628/fYNIdrsfP3xC/playlist_audio.m3u8"
        },
        {
            name: "RTL 102.5 Bro&Sis",
            logo: "stations/images-europe/italy/RTL 102.5 Bro&Sis.png",
            url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S75007890/HZKHO8FO5MwA/playlist_audio.m3u8"
        },
        {
            name: "RTL 102.5 Caliente",
            logo: "stations/images-europe/italy/RTL 102.5 Caliente.png",
            url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S8448465/TxhFMf45Q7cw/playlist_audio.m3u8"
        },
        {
            name: "RTL 102.5 Disco",
            logo: "stations/images-europe/italy/RTL 102.5 Disco.png",
            url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S51100361/Sz3kCA55PrRh/playlist_audio.m3u8"
        },
        {
            name: "RTL 102.5 Napulè",
            logo: "stations/images-europe/italy/RTL 102.5 Napulè.png",
            url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S27134503/jL8HEhj1u65W/playlist_audio.m3u8"
        },
        {
            name: "RTL 102.5 Traffic",
            logo: "stations/images-europe/italy/RTL 102.5 Traffic.png",
            url: "https://dd782ed59e2a4e86aabf6fc508674b59.msvdn.net/live/S38122967/aJMOUBAFc2Bc/playlist_audio.m3u8"
        },
        {
            name: "Virgin Radio",
            logo: "stations/images-europe/italy/Virgin Radio.png",
            url: "https://icecast.unitedradio.it/Virgin.mp3"
        },
    ],/*
    "japan": [
        {
            name: "NHK-FM放送",
            logo: "stations/images-europe/japan/NHK-FM放送.png",
            url: "https://jppx.azurewebsites.net/browse.php?u=https://radio-stream.nhk.jp/hls/live/2023507/nhkradiruakfm/master.m3u8"
        },
        {
            name: "NHK Radio 1",
            logo: "stations/images-europe/japan/NHKラジオ第1放送.png",
            url: "https://jppx.azurewebsites.net/browse.php?u=https://radio-stream.nhk.jp/hls/live/2023229/nhkradiruakr1/master.m3u8"
        },
    ],*/
    "jordan": [
        {
            name: "اذاعة القرآن الكريم",
            logo: "stations/images-europe/jordan/اذاعة القرآن الكريم.png",
            url: "https://jrtv-live.ercdn.net/jrradio/quranradiovideo.m3u8"
        },
        {
            name: "Radio Jordan",
            logo: "stations/images-europe/jordan/Radio Jordan.png",
            url: "https://jrtv-live.ercdn.net/jrradio/englishradiovideo.m3u8"
        },
        {
            name: "اذاعة عمان اف ام",
            logo: "stations/images-europe/jordan/اذاعة عمان اف ام.png",
            url: "https://jrtv-live.ercdn.net/jrradio/ammanradiovideo.m3u8"
        },
        {
            name: "الإذاعة الأردنية",
            logo: "stations/images-europe/jordan/الإذاعة الأردنية.png",
            url: "https://jrtv-live.ercdn.net/jrradio/jordanradiovideo.m3u8"
        },
        {
            name: "مونت كارلو الدولية",
            logo: "stations/images-europe/jordan/مونت كارلو الدولية.svg",
            url: "https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya.mp3"
        },
        {
            name: "راديو هلا",
            logo: "stations/images-europe/jordan/راديو هلا.png",
            url: "https://hala-alrayamedia.radioca.st/;"
        },
    ],
    "kazakhstan": [
        {
            name: "Qazaq radiosy",
            logo: "stations/images-europe/kazakhstan/Qazaq radiosy.png",
            url: "https://radio-streams.kaztrk.kz/qazradio/qazradio/icecast.audio"
        },
        {
            name: "Shalqar radiosy",
            logo: "stations/images-europe/kazakhstan/Shalqar radiosy.png",
            url: "https://radio-streams.kaztrk.kz/shalqar/shalqar/icecast.audio"
        },
        {
            name: "Авторадио Казахстан",
            logo: "stations/images-europe/kazakhstan/Авторадио.png",
            url: "http://178.88.167.62:8080/AVTORADIO_256"
        },
        {
            name: "Европа Плюс Казахстан",
            logo: "stations/images-europe/kazakhstan/Европа Плюс Казахстан.png",
            url: "https://hls-01-regions.emgsound.ru/11_kazakhstan/playlist.m3u8"
        },
        {
            name: "Love Radio",
            logo: "stations/images-europe/kazakhstan/Love Radio.png",
            url: "https://stream.gakku.kz:8443/love128.mp3"
        },
        {
            name: "Lux FM",
            logo: "stations/images-europe/kazakhstan/Lux FM.png",
            url: "https://icecast.luxfm.kz/luxfm"
        },
        {
            name: "Народное Радио",
            logo: "stations/images-europe/kazakhstan/Народное Радио.png",
            url: "http://178.88.167.62:8080/DALA_320"
        },
        {
            name: "Радио Дача",
            logo: "stations/images-europe/kazakhstan/Радио Дача.png",
            url: "https://stream.gakku.kz:8443/dacha"
        },
        {
            name: "Ретро FM Казахстан",
            logo: "stations/images-europe/kazakhstan/Ретро FM Казахстан.png",
            url: "http://retroserver.streamr.ru:8043/retro128"
        },
        {
            name: "Русское Радио Азия",
            logo: "stations/images-europe/kazakhstan/Русское Радио Азия.png",
            url: "https://rusradioreg.hostingradio.ru/asia.rusradio128.mp3"
        },
        {
            name: "Radio NS",
            logo: "stations/images-europe/kazakhstan/Radio NS.png",
            url: "https://icecast.ns.kz/radions"
        },
        {
            name: "Той Думан",
            logo: "stations/images-europe/kazakhstan/Той Думан.png",
            url: "https://stream.gakku.kz:8443/live.mp3"
        },
        {
            name: "Жаңа FM",
            logo: "stations/images-europe/kazakhstan/Жаңа FM.png",
            url: "https://live.zhanafm.kz:8443/zhanafm_onair"
        },
        {
            name: "Жұлдыз FM",
            logo: "stations/images-europe/kazakhstan/Жұлдыз FM.png",
            url: "http://91.201.214.229:8000/zhulduz"
        },
    ],
    "kosovo": [
        {
            name: "Radio Kosova 1",
            logo: "stations/images-europe/kosovo/Radio Kosova 1.png",
            url: "http://82.114.72.2:8088/;"
        },
        {
            name: "Radio Kosova 2",
            logo: "stations/images-europe/kosovo/Radio Kosova 2.png",
            url: "http://82.114.72.2:8098/;"
        },
        {
            name: "GLAM Radio",
            logo: "stations/images-europe/kosovo/GLAM Radio.png",
            url: "https://stream.glamradio.fm:8443/glamradio"
        },/*
        {
            name: "Radio 21",
            logo: "stations/images-europe/kosovo/Radio 21.png",
            url: "https://cdn.mediavisionuae.com:1935/live/radio21.stream/index.m3u8"
        },*/
        {
            name: "Radio Dukagjini",
            logo: "stations/images-europe/kosovo/Radio Dukagjini.png",
            url: "https://s2.voscast.com:8825/radiodukagjini"
        },
        {
            name: "Radio KFOR",
            logo: "stations/images-europe/kosovo/Radio KFOR.png",
            url: "http://fm.radiokfor.com:8080/stream"
        },
        {
            name: "Radio Prishtina",
            logo: "stations/images-europe/kosovo/Radio Prishtina.png",
            url: "https://stream.radio.co/sbe73908d2/listen"
        },
    ],
    "latvia": [
        {
            name: "LR1",
            logo: "stations/images-europe/latvia/Latvijas Radio 1.png",
            url: "https://5a44e5b800a41.streamlock.net/shoutcast/mp4:lr1a.stream/playlist.m3u8"
        },
        {
            name: "LR2",
            logo: "stations/images-europe/latvia/Latvijas Radio 2.png",
            url: "https://5a44e5b800a41.streamlock.net/shoutcast/mp4:lr2a.stream/playlist.m3u8"
        },
        {
            name: "LR3 Klasika",
            logo: "stations/images-europe/latvia/Latvijas Radio 3.png",
            url: "https://5a44e5b800a41.streamlock.net/shoutcast/mp4:lr3a.stream/playlist.m3u8"
        },
        {
            name: "LR4 Doma Laukums",
            logo: "stations/images-europe/latvia/Latvijas Radio 4.png",
            url: "https://5a44e5b800a41.streamlock.net/shoutcast/mp4:lr4a.stream/playlist.m3u8"
        },
        {
            name: "LR5 Pieci.lv",
            logo: "stations/images-europe/latvia/Latvijas Radio 5.png",
            url: "https://5a44e5b800a41.streamlock.net/pieci/mp4:k2/playlist.m3u8"
        },
        {
            name: "NABA",
            logo: "stations/images-europe/latvia/NABA.png",
            url: "https://5a44e5b800a41.streamlock.net/shoutcast/mp4:naba.stream/playlist.m3u8"
        },
        {
            name: "EHR",
            logo: "stations/images-europe/latvia/EHR.png",
            url: "https://stream.ehrhiti.lv:8000/ehr.aac"
        },
        {
            name: "EHR SuperHits",
            logo: "stations/images-europe/latvia/EHR Superhits.png",
            url: "https://stream.ehrhiti.lv:8000/Stream_21.aac"
        },
        {
            name: "Latvijas Kristīgais Radio",
            logo: "stations/images-europe/latvia/Latvijas Kristīgais Radio.png",
            url: "http://shoutcast.lkr.lv:7007/;"
        },
        {
            name: "Radio Marija",
            logo: "stations/images-europe/latvia/Radio Marija.png",
            url: "http://195.122.25.178:8000/;stream.mp3"
        },
        {
            name: "Radio Skonto",
            logo: "stations/images-europe/latvia/Radio Skonto.png",
            url: "https://stream.radioskonto.lv:8443/stereo"
        },
        {
            name: "Radio SWH",
            logo: "stations/images-europe/latvia/Radio SWH.png",
            url: "http://80.232.162.149:8000/swh96mp3"
        },
        {
            name: "Radio SWH Rock",
            logo: "stations/images-europe/latvia/Radio SWH Rock.png",
            url: "https://live.radioswh.lv:8443/rockmp3"
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
            url: "https://topradio.live.advailo.com/topradio/aac/icecast.audio"
        },
    ],
    "lebanon": [
        {
            name: "Radio Liban",
            logo: "stations/images-europe/lebanon/Radio Liban.png",
            url: "https://edge.mixlr.com/channel/qtqeb"
        },
        {
            name: "Al Bachaer",
            logo: "stations/images-europe/lebanon/Al Bachaer.png",
            url: "https://l3.itworkscdn.net/itwaudio/9014/stream"
        },
        {
            name: "Al Nour",
            logo: "stations/images-europe/lebanon/Al Nour.png",
            url: "https://l3.itworkscdn.net/itwaudio/9066/stream"
        },
        {
            name: "Charity Radio",
            logo: "stations/images-europe/lebanon/Charity Radio.png",
            url: "https://cast6.asurahosting.com/proxy/voiceofc/stream"
        },/*
        {
            name: "صوت الحرية",
            logo: "stations/images-europe/lebanon/صوت الحرية.jpg",
            url: "http://vps1.osina.cloud:9302/;"
        },*/
        {
            name: "Fame FM",
            logo: "stations/images-europe/lebanon/Fame FM.png",
            url: "https://l3.itworkscdn.net/itwaudio/9044/stream"
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
            name: "Radio Strike",
            logo: "stations/images-europe/lebanon/Radio Strike.png",
            url: "https://stream.zeno.fm/zbm72tcd2d0uv"
        },
        {
            name: "RFI Moyen Orient",
            logo: "stations/images-europe/lebanon/RFI Moyen Orient.png",
            url: "https://rfiafrique64k.ice.infomaniak.ch/rfiafrique-64.mp3"
        },
        {
            name: "RLL",
            logo: "stations/images-europe/lebanon/RLL.png",
            url: "https://edge.mixlr.com/channel/qtqeb"
        },
        {
            name: "صـوت لبنــان",
            logo: "stations/images-europe/lebanon/صـوت لبنــان.png",
            url: "https://l3.itworkscdn.net/itwaudio/9054/stream"
        },
        {
            name: "Sawt El Ghad",
            logo: "stations/images-europe/lebanon/Sawt El Ghad.png",
            url: "https://l3.itworkscdn.net/itwaudio/9030/stream"
        },
        {
            name: "Sawt El Shaeb",
            logo: "stations/images-europe/lebanon/Sawt El Shaeb.png",
            url: "https://audio.osina.cloud:9320/stream"
        },
        {
            name: "Virgin Radio Lebanon",
            logo: "stations/images-europe/lebanon/Virgin Radio Lebanon.png",
            url: "https://stream.zeno.fm/p3m819pkha0uv"
        },
    ],
    "lithuania": [
        {
            name: "LRT Radijas",
            logo: "stations/images-europe/lithuania/LRT Radijas.png",
            url: "https://stream-live.lrt.lt/radio_radijas/lrt_radijas.m3u8"
        },
        {
            name: "LRT Klasika",
            logo: "stations/images-europe/lithuania/LRT Klasika.png",
            url: "https://stream-live.lrt.lt/radio_klasika/lrt_klasika.m3u8"
        },
        {
            name: "LRT Opus",
            logo: "stations/images-europe/lithuania/LRT Opus.png",
            url: "https://stream-live.lrt.lt/radio_opus/lrt_opus.m3u8"
        },
        {
            name: "extra FM",
            logo: "stations/images-europe/lithuania/extra FM.png",
            url: "https://online.extrafm.lt:8443/extrafm.mp3"
        },
        {
            name: "Gold FM",
            logo: "stations/images-europe/lithuania/Gold FM.png",
            url: "http://82.135.234.195:8000/goldfm.aac"
        },
        {
            name: "Lietus",
            logo: "stations/images-europe/lithuania/Lietus.png",
            url: "https://stream.m-1.fm/lietus/aacp64"
        },
        {
            name: "M-1",
            logo: "stations/images-europe/lithuania/M-1.png",
            url: "https://stream.m-1.fm/m1/aacp64"
        },
        {
            name: "M-1 Plius",
            logo: "stations/images-europe/lithuania/M-1 Plius.png",
            url: "https://radio.m-1.fm/m1plius/aacp64"
        },
        {
            name: "Marijos Radijas",
            logo: "stations/images-europe/lithuania/Marijos Radijas.png",
            url: "http://stream.marijosradijas.lt:8001/marijosradijas.mp3"
        },
        {
            name: "Power Hit Radio",
            logo: "stations/images-europe/lithuania/Power Hit Radio.png",
            url: "https://stream.powerhitradio.lt/PHR_AAC"
        },
        {
            name: "Pūkas",
            logo: "stations/images-europe/lithuania/Pūkas.png",
            url: "http://82.135.234.195:8000/pukas.mp3"
        },
        {
            name: "Pūkas 2",
            logo: "stations/images-europe/lithuania/Pūkas.png",
            url: "http://82.135.234.195:8000/pukas2.mp3"
        },
        {
            name: "Radiocentras",
            logo: "stations/images-europe/lithuania/Radiocentras.png",
            url: "https://stream1.rc.lt/rc128.mp3"
        },
        {
            name: "Radio R",
            logo: "stations/images-europe/lithuania/Radio R.png",
            url: "http://stream1.rusradio.lt/rrb128.mp3"
        },
        {
            name: "Relax FM",
            logo: "stations/images-europe/lithuania/Relax FM.png",
            url: "https://stream2.relaxfm.lt/relaxfm128.mp3"
        },
        {
            name: "XFM",
            logo: "stations/images-europe/lithuania/XFM.png",
            url: "http://88.119.151.74:8001/xfm"
        },
        {
            name: "Žinių Radijas",
            logo: "stations/images-europe/lithuania/Žinių Radijas.png",
            url: "https://netradio.ziniur.lt/ziniur.mp3"
        },
        {
            name: "ZIP FM",
            logo: "stations/images-europe/lithuania/ZIP FM.png",
            url: "https://transliacija.zipfm.lt/zipfm128.mp3"
        },
    ],
    "luxembourg": [
        {
            name: "RTL Radio Lëtzebuerg",
            logo: "stations/images-europe/luxembourg/RTL Radio Lëtzebuerg.png",
            url: "http://sc-rtllive.newmedia.lu:80/;"
        },
        {
            name: "RTL Radio",
            logo: "stations/images-europe/germany/RTL Radio.png",
            url: "https://stream.rtlradio.de/rtl-de-ukw/mp3-128/konsole/"
        },
        {
            name: "EldoRadio",
            logo: "stations/images-europe/luxembourg/EldoRadio.png",
            url: "https://stream.eldo.lu/data/live/radio/eldo/playlist.m3u8"
        },
        {
            name: "L'essentiel Radio",
            logo: "stations/images-europe/luxembourg/L'essentiel Radio.png",
            url: "http://lessentielradio.ice.infomaniak.ch/lessentielradio-128.mp3"
        },
        {
            name: "Radio ARA",
            logo: "stations/images-europe/luxembourg/Radio ARA.png",
            url: "https://s1.voscast.com:11187/RadioARA.mp3"
        },
        {
            name: "Radio Latina",
            logo: "stations/images-europe/luxembourg/Radio Latina.png",
            url: "https://ice.creacast.com/radio-latina-lu-mp3"
        },
        {
            name: "radio 100,7",
            logo: "stations/images-europe/luxembourg/radio 100,7.png",
            url: "https://100komma7.cast.addradio.de/100komma7/live/mp3/128/stream.mp3"
        },
    ],
    "macedonia": [
        {
            name: "МР1",
            logo: "stations/images-europe/macedonia/MP1.png",
            url: "https://vod-c57.interspace.com/channel_abr/47/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ni8yMS8yMDIyIDI6MjQ6NDIgUE0maGFzaF92YWx1ZT0rWmhaeWdQcTV4Ry9KS1ZsNXF2Sm9nPT0mdmFsaWRtaW51dGVzPTMwJmlkPTYyYjFkNGFhNDlmYTE="
        },
        {
            name: "МР2",
            logo: "stations/images-europe/macedonia/MP2.png",
            url: "https://vod-c57.interspace.com/channel_abr/48/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ni8yMS8yMDIyIDI6MjU6NDUgUE0maGFzaF92YWx1ZT0wT2txc09QQktzZ01ZK0NsbnpiZld3PT0mdmFsaWRtaW51dGVzPTMwJmlkPTYyYjFkNGU5N2M4MzU="
        },
        {
            name: "МР3",
            logo: "stations/images-europe/macedonia/MP3.png",
            url: "https://vod-c57.interspace.com/channel_abr/49/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ni8yMS8yMDIyIDI6MjY6MTYgUE0maGFzaF92YWx1ZT1BcEtyclNuRktQN3RwL1RWenFSS2RRPT0mdmFsaWRtaW51dGVzPTMwJmlkPTYyYjFkNTA4MTQ4NDA="
        },
        {
            name: "Antenna 5",
            logo: "stations/images-europe/macedonia/Antenna 5.png",
            url: "http://antenna5stream.neotel.mk:8000/live128"
        },
        {
            name: "Jon Radio",
            logo: "stations/images-europe/macedonia/Jon Radio.png",
            url: "http://radiostream.neotel.mk:8000/jonradio"
        },
        {
            name: "Канал 77",
            logo: "stations/images-europe/macedonia/Канал 77.png",
            url: "https://radiocnd.mms.mk/proxy/player/stream"
        },
        {
            name: "Metropolis Radio",
            logo: "stations/images-europe/macedonia/Metropolis Radio.png",
            url: "https://eu4.fastcast4u.com/proxy/metradio?mp=/1"
        },
    ],
    "malta": [
        {
            name: "Radju Malta",
            logo: "stations/images-europe/malta/Radju Malta.png",
            url: "https://s38.myradiostream.com/6982/listen.mp3"
        },
        {
            name: "Radju Malta 2",
            logo: "stations/images-europe/malta/Radju Malta 2.png",
            url: "https://s11.myradiostream.com/:4954/listen.mp3"
        },
        {
            name: "88.7 Vibe FM",
            logo: "stations/images-europe/malta/88.7 Vibe FM.png",
            url: "https://s9.voscast.com:7825/1"
        },
        {
            name: "89.7 Bay",
            logo: "stations/images-europe/malta/89.7 Bay.png",
            url: "https://stream.v3.network/proxy/897bay/stream.mp3"
        },
        {
            name: "Bay Easy",
            logo: "stations/images-europe/malta/Bay Easy.png",
            url: "http://stream.v3.network:8018/;"
        },
        {
            name: "BKR 94.5",
            logo: "stations/images-europe/malta/BKR 94.5.png",
            url: "https://s3.voscast.com:10893/stream"
        },
        {
            name: "103 Malta's Heart",
            logo: "stations/images-europe/malta/103 Malta's Heart.png",
            url: "https://s2.radio.co/s955b1ced9/listen#.mp3"
        },
        {
            name: "Calypso Radio 101.8",
            logo: "stations/images-europe/malta/Calypso Radio 101.8.png",
            url: "https://s4.radio.co/sf3aa4c25a/listen"
        },
        {
            name: "Campus FM 103.7",
            logo: "stations/images-europe/malta/Campus FM 103.7.png",
            url: "https://campusfm.radioca.st/campusfm_live"
        },/*
        {
            name: "Deejay's Radio 95.6FM",
            logo: "stations/images-europe/malta/Deejay's Radio 95.6FM.png",
            url: "http://freeuk30.listen2myradio.com:39939/;"
        },*/
        {
            name: "Magic 91.7",
            logo: "stations/images-europe/malta/Magic 91.7.png",
            url: "https://s46.myradiostream.com/:6076/;"
        },
        {
            name: "MICS Radio 93.3",
            logo: "stations/images-europe/malta/MICS Radio 93.3.png",
            url: "http://micsradio.ddns.net:90/;"
        },
        {
            name: "NET FM",
            logo: "stations/images-europe/malta/NET FM.png",
            url: "https://s2.voscast.com:11393/default"
        },
        {
            name: "ONE Radio",
            logo: "stations/images-europe/malta/ONE Radio.png",
            url: "http://s10.voscast.com:8202/stream"
        },
        {
            name: "Radio 105",
            logo: "stations/images-europe/malta/Radio 105.png",
            url: "https://radio105-radio105network.radioca.st/;"
        },
        {
            name: "Radju Bambina 98.3",
            logo: "stations/images-europe/malta/Radju Bambina 98.3.png",
            url: "https://az.wannastream.com/radio/8050/radjubambina"
        },/*
        {
            name: "Radio City 98 FM",
            logo: "stations/images-europe/malta/Radio City 98 FM.png",
            url: "http://freeuk18.listen2myradio.com:28250/;"
        },
        {
            name: "Radju Ghazziela",
            logo: "stations/images-europe/malta/Radju Ghazziela.png",
            url: "http://freeuk30.listen2myradio.com:14100/;"
        },*/
        {
            name: "Radio LBV 104",
            logo: "stations/images-europe/malta/Radio LBV 104.png",
            url: "https://az.wannastream.com/radio/8010/radjulehenil-beltvictoria"
        },
        {
            name: "Radju Leħen il-Belt Gorgjana",
            logo: "stations/images-europe/malta/Radju Leħen il-Belt Gorgjana.png",
            url: "http://s37.myradiostream.com:9088/listen.mp3"
        },
        {
            name: "Radju Luminaria",
            logo: "stations/images-europe/malta/Radju Luminaria.png",
            url: "https://az.wannastream.com/radio/8000/radjuluminaria"
        },
        {
            name: "Radju Marija",
            logo: "stations/images-europe/malta/Radju Marija.png",
            url: "https://dreamsiteradiocp2.com/proxy/rmmalta2?mp=/stream"
        },
        {
            name: "Radio Xeb er ras",
            logo: "stations/images-europe/malta/Radio Xeb er ras.png",
            url: "http://uk15freenew.listen2myradio.com:35709/;"
        },
        {
            name: "Smash Radio 104.6FM",
            logo: "stations/images-europe/malta/Smash Radio 104.6FM.png",
            url: "https://radio.smashmalta.com/stream"
        },
    ],
    "monaco": [
        {
            name: "Hits 1",
            logo: "stations/images-europe/monaco/Hits 1.png",
            url: "https://hits1-audiomediaradio.radioca.st/hits1"
        },
        {
            name: "Le Figaro Radio",
            logo: "stations/images-europe/monaco/Le Figaro Radio.png",
            url: "https://stream.rcs.revma.com/hbm385tup42vv"
        },
        {
            name: "medi1",
            logo: "stations/images-europe/monaco/medi1.png",
            url: "https://streaming1.medi1tv.com/radio/radio_mag.stream_aac/playlist.m3u8"
        },
        {
            name: "Radio Monaco",
            logo: "stations/images-europe/monaco/Radio Monaco.png",
            url: "https://radiomonaco.ice.infomaniak.ch/radiomonaco-96.aac"
        },
        {
            name: "Radio Ethic",
            logo: "stations/images-europe/monaco/Radio Ethic.png",
            url: "http://163.172.37.18:8000/radioethic.mp3"
        },
        {
            name: "Riviera Radio",
            logo: "stations/images-europe/monaco/Riviera Radio.png",
            url: "https://rivieraradio.ice.infomaniak.ch/rivieraradio-high.mp3"
        },
    ],
    "montenegro": [
        {
            name: "RCG",
            logo: "stations/images-europe/montenegro/RCG.png",
            url: "https://rtcg.ipradio.rs:9008/;"
        },
        {
            name: "R98",
            logo: "stations/images-europe/montenegro/R98.png",
            url: "https://r98.ipradio.rs:10100/;"
        },
        {
            name: "Antena M",
            logo: "stations/images-europe/montenegro/Antena M.png",
            url: "http://radioservis.me:8010/antenamlive"
        },
        {
            name: "DRS",
            logo: "stations/images-europe/montenegro/DRS.png",
            url: "https://eu2.fastcast4u.com/proxy/mic0?mp=/stream&1623505984682"
        },
        {
            name: "Play",
            logo: "stations/images-europe/montenegro/Play radio.png",
            url: "https://stream.playradio.me:8443/play-me.aac"
        },
        {
            name: "Radio D",
            logo: "stations/images-europe/montenegro/Radio D.png",
            url: "http://tachyon.shoutca.st:8289/xstream"
        },
        {
            name: "Radio D Plus",
            logo: "stations/images-europe/montenegro/Radio D Plus.png",
            url: "http://tachyon.shoutca.st:8303/xstream"
        },
        {
            name: "Radio Fatih",
            logo: "stations/images-europe/montenegro/Radio Fatih.png",
            url: "http://radioservis.me:8070/radiofatih"
        },
        {
            name: "Radio S1",
            logo: "stations/images-europe/montenegro/Radio S1.png",
            url: "https://53be5ef2d13aa.streamlock.net/asmedia/radios1-cg/playlist.m3u8"
        },
        {
            name: "Radio Svetigora",
            logo: "stations/images-europe/montenegro/Radio Svetigora.png",
            url: "https://svetigoralive.com/Radio%20Svetigora;"
        },
        {
            name: "TDI Radio",
            logo: "stations/images-europe/montenegro/TDI Radio.png",
            url: "https://streaming.tdiradio.com/crnagora.mp3"
        },
    ],
    "moldova": [
        {
            name: "Radio Moldova",
            logo: "stations/images-europe/moldova/Radio Moldova.png",
            url: "http://radiolive.trm.md:8000/PGM1_256kb"
        },
        {
            name: "Radio Moldova Muzical",
            logo: "stations/images-europe/moldova/Radio Moldova Muzical.png",
            url: "http://radiolive.trm.md:8000/RM-muzical-256"
        },
        {
            name: "Radio Moldova Tineret",
            logo: "stations/images-europe/moldova/Radio Moldova Tineret.png",
            url: "http://radiolive.trm.md:8000/RM-tineret-256"
        },
        {
            name: "Diaspora FM",
            logo: "stations/images-europe/moldova/Diaspora FM.png",
            url: "https://hls.radiosolution.fr/n8k9kUqbV2W6B5a4v6RX/index.m3u8"
        },
        {
            name: "Eco FM",
            logo: "stations/images-europe/moldova/Eco FM.png",
            url: "https://astreaming.ecofm.md:8443/ecoFM"
        },
        {
            name: "KISS FM",
            logo: "stations/images-europe/moldova/Kiss FM.png",
            url: "https://live.kissfm.md/kissfm.chisinau"
        },
        {
            name: "HIT FM",
            logo: "stations/images-europe/moldova/HIT FM.png",
            url: "https://stream.dixi.md:9443/HitFM"
        },
        {
            name: "Jurnal FM",
            logo: "stations/images-europe/moldova/Jurnal FM.png",
            url: "https://audio.jurnalfm.md/hq"
        },
        {
            name: "Новое Радио Молдова",
            logo: "stations/images-europe/moldova/Новое Радио.png",
            url: "https://stream.newradio.md/stream"
        },
        {
            name: "Publika FM",
            logo: "stations/images-europe/moldova/Publika FM.png",
            url: "http://live.maestrofm.md:8000/publikafm"
        },
        {
            name: "Radio Chișinău",
            logo: "stations/images-europe/moldova/Radio Chișinău.png",
            url: "http://95.65.9.171:8000/radiochisinau"
        },
        {
            name: "Radio Dar",
            logo: "stations/images-europe/moldova/Radio Dar.png",
            url: "http://188.138.191.214:8000/RadioDar"
        },
        {
            name: "Radio Micul Samaritean",
            logo: "stations/images-europe/moldova/Radio Micul Samaritean.png",
            url: "https://s5.radio.co/sfff7b7e97/listen"
        },
        {
            name: "Radio Noroc",
            logo: "stations/images-europe/moldova/Radio Noroc.png",
            url: "https://stream.noroc.tv/radionoroc_aac"
        },
        {
            name: "Radio Plai",
            logo: "stations/images-europe/moldova/Radio Plai.png",
            url: "http://stream.radioplai.md:8000/live"
        },
        {
            name: "Radio Relax",
            logo: "stations/images-europe/moldova/Radio Relax.png",
            url: "https://stream.dixi.md/RadioRelax"
        },
        {
            name: "Radio Vocea Speranţei",
            logo: "stations/images-europe/moldova/Radio Vocea Speranţei.png",
            url: "https://air.rvs.md:8443/rvsmoldova"
        },
        {
            name: "Vocea Basarabiei",
            logo: "stations/images-europe/moldova/Vocea Basarabiei.png",
            url: "https://stream.noroc.tv/radiovb_aac"
        },
    ],
    "netherlands": [
        {
            name: "NPO Radio 1",
            logo: "stations/images-europe/netherlands/NPO Radio 1.png",
            url: "https://icecast.omroep.nl/radio1-bb-mp3"
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
            name: "NPO Klassiek",
            logo: "stations/images-europe/netherlands/NPO Klassiek.png",
            url: "http://icecast.omroep.nl/radio4-bb-mp3"
        },
        {
            name: "NPO Radio 5",
            logo: "stations/images-europe/netherlands/NPO Radio 5.png",
            url: "http://icecast.omroep.nl/radio5-bb-mp3"
        },
        {
            name: "NPO BLEND",
            logo: "stations/images-europe/netherlands/NPO BLEND.png",
            url: "https://icecast.omroep.nl/npoblend-bb-mp3"
        },
        {
            name: "NPO Campus",
            logo: "stations/images-europe/netherlands/NPO Campus.png",
            url: "https://icecast.omroep.nl/3fm-serioustalent-mp3"
        },
        {
            name: "NPO FunX",
            logo: "stations/images-europe/netherlands/FunX.png",
            url: "http://icecast.omroep.nl/funx-bb-mp3"
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
        {
            name: "4EVER49 Radio",
            logo: "stations/images-europe/netherlands/4EVER49 Radio.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/4EVER49_SC",
        },
        {
            name: "Arrow Classic Rock",
            logo: "stations/images-europe/netherlands/Arrow Classic Rock.jpg",
            url: "https://stream.player.arrow.nl/arrow"
        },
        {
            name: "BBC World Service",
            logo: "stations/images-europe/netherlands/BBC World Service.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_world_service.m3u8",
        },
        {
            name: "BNR Nieuwsradio",
            logo: "stations/images-europe/netherlands/BNR Nieuwsradio.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/BNR_NIEUWSRADIOAAC_SC",
        },
        {
            name: "CREAM",
            logo: "stations/images-europe/netherlands/CREAM.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/CREAMAAC_SC",
        },
        {
            name: "GOD Radio",
            logo: "stations/images-europe/netherlands/GOD Radio.png",
            url: "https://stream.wildfm.nl/GOD_Radio"
        },
        {
            name: "GLXY.RADIO",
            logo: "stations/images-europe/netherlands/GLXY.RADIO.png",
            url: "https://mediaserv73.live-streams.nl:18044/stream"
        },
        {
            name: "Grand Prix Radio",
            logo: "stations/images-europe/netherlands/Grand Prix Radio.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/GRAND_PRIX_RADIOAAC_SC"
        },
        {
            name: "Groot Nieuws Radio",
            logo: "stations/images-europe/netherlands/Groot Nieuws Radio.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/GNRAAC_SC"
        },
        {
            name: "Groot Nieuws Radio Non-stop",
            logo: "stations/images-europe/netherlands/Groot Nieuws Radio Non-stop.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/GNRNONSTOPAAC_SC"
        },
        {
            name: "JOE",
            logo: "stations/images-europe/netherlands/JOE.png",
            url: "https://icecast-qmusicnl-cdp.triple-it.nl/Joe_nl_high.aac"
        },
        {
            name: "Joy Radio",
            logo: "stations/images-europe/netherlands/Joy Radio.png",
            url: "https://stream.joyradio.nl/joyradio"
        },
        {
            name: "KINK",
            logo: "stations/images-europe/netherlands/KINK.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KINKAAC_SC",
        },
        {
            name: "KINK 80s",
            logo: "stations/images-europe/netherlands/KINK 80s.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KINK_DNAAAC_SC",
        },
        {
            name: "KINK DISTORTION",
            logo: "stations/images-europe/netherlands/KINK DISTORTION.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/KINK_DISTORTIONAAC_SC",
        },
        {
            name: "Magic FM",
            logo: "stations/images-europe/netherlands/Magic FM.png",
            url: "https://stream.magicfm.nl/magicfm"
        },
        {
            name: "NH Radio",
            logo: "stations/images-europe/netherlands/NH Radio.png",
            url: "https://ice.cr6.streamzilla.xlcdn.com:8000/sz=nhnieuws=NHRadio_mp3"
        },
        {
            name: "538",
            logo: "stations/images-europe/netherlands/538.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/RADIO538AAC_SC",
        },
        {
            name: "538 Classics",
            logo: "stations/images-europe/netherlands/538 Classics.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR08AAC_SC",
        },
        {
            name: "538 NON-STOP",
            logo: "stations/images-europe/netherlands/538 NON-STOP.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR09AAC_SC",
        },
        {
            name: "One World Radio",
            logo: "stations/images-europe/belgium-nl/One World Radio.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/OWR_WORLD_RADIO_NLAAC_SC"
        },
        {
            name: "Qmusic",
            logo: "stations/images-europe/netherlands/Qmusic.png",
            url: "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_live_high.aac",
        },
        {
            name: "Qmusic 90s & 00s",
            logo: "stations/images-europe/netherlands/Qmusic 90s & 00s.png",
            url: "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_90s00s_high.aac",
        },
        {
            name: "Qmusic Foute Uur",
            logo: "stations/images-europe/netherlands/Qmusic Foute Uur.png",
            url: "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_fouteuur_high.aac",
        },
        {
            name: "Qmusic Non-Stop",
            logo: "stations/images-europe/netherlands/Qmusic Non-Stop.png",
            url: "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_nonstop_high.aac",
        },
        {
            name: "Qmusic Top 40",
            logo: "stations/images-europe/netherlands/Qmusic Top 40.png",
            url: "https://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_top40_high.aac",
        },
        {
            name: "Radio 10",
            logo: "stations/images-europe/netherlands/Radio 10.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO10AAC_SC",
        },
        {
            name: "Radio 10 60's & 70's Hits",
            logo: "stations/images-europe/netherlands/Radio 10 60's & 70's Hits.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR18AAC_SC",
        },
        {
            name: "Radio 10 80's",
            logo: "stations/images-europe/netherlands/Radio 10 80's.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR20AAC_SC",
        },
        {
            name: "Radio Maria",
            logo: "stations/images-europe/netherlands/Radio Maria.png",
            url: "https://stream.radiomaria.nl/mp3"
        },
        {
            name: "RadioNL",
            logo: "stations/images-europe/netherlands/RadioNL.png",
            url: "http://stream.radionl.fm/radionl",
        },
        {
            name: "Radio Nordzee",
            logo: "stations/images-europe/netherlands/Radio Nordzee.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/TLPSTR17AAC_SC",
        },
        {
            name: "Radio Veronica",
            logo: "stations/images-europe/netherlands/Radio Veronica.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/VERONICAAAC_SC"
        },
        {
            name: "Radio Veronica Goud van Oud",
            logo: "stations/images-europe/netherlands/Radio Veronica Goud van Oud.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/DAB01_AAC_SC"
        },
        {
            name: "Radio Veronica Non-Stop",
            logo: "stations/images-europe/netherlands/Radio Veronica Non-Stop.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/DAB02_AAC_SC"
        },
        {
            name: "Sky Radio",
            logo: "stations/images-europe/netherlands/Sky Radio.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/SKYRADIOAAC_SC",
        },
        {
            name: "Sky Radio Non-Stop Hits",
            logo: "stations/images-europe/netherlands/Sky Radio Non-Stop Hits.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR01AAC_SC",
        },
        {
            name: "SLAM!",
            logo: "stations/images-europe/netherlands/Slam!.png",
            url: "http://stream.slam.nl/slam",
        },
        {
            name: "Sublime FM",
            logo: "stations/images-europe/netherlands/Sublime FM.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/SUBLIMEAAC_SC",
        },
        {
            name: "Tukker FM",
            logo: "stations/images-europe/netherlands/Tukker FM.png",
            url: "https://stream.tukkerfm.nl/tukkerfm"
        },
        {
            name: "Vibe Radio",
            logo: "stations/images-europe/netherlands/Vibe Radio.png",
            url: "https://stream.viberadio.nl/viberadio"
        },
        {
            name: "Yoursafe Radio",
            logo: "stations/images-europe/netherlands/Yoursafe Radio.png",
            url: "https://radiostream.yoursafe.nl/stream"
        },
    ],
    "nireland": [
        {
            name: "BBC Radio Ulster",
            logo: "stations/images-europe/nireland/BBC Radio Ulster.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_ulster.m3u8"
        },
        {
            name: "BBC Radio Foyle",
            logo: "stations/images-europe/nireland/BBC Radio Foyle.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_foyle.m3u8"
        },
        {
            name: "Absolute Classic Rock",
            logo: "stations/images-europe/nireland/Absolute Classic Rock.png",
            url: "http://84.32.44.251/radiofeeds.php?station=absoluteclassicrockhigh-aac"
        },
        {
            name: "Cool FM",
            logo: "stations/images-europe/nireland/Cool FM.png",
            url: "http://84.32.44.251/radiofeeds.php?station=coolfm-aac"
        },
        {
            name: "Downtown Radio",
            logo: "stations/images-europe/nireland/Downtown Radio.png",
            url: "http://84.32.44.251/radiofeeds.php?station=downtown-aac"
        },
        {
            name: "Downtown Country",
            logo: "stations/images-europe/nireland/Downtown Country.png",
            url: "http://84.32.44.251/radiofeeds.php?station=downtowncountry-aac"
        },
        {
            name: "Hits Radio",
            logo: "stations/images-europe/uk/Hits Radio.png",
            url: "http://84.32.44.251/radiofeeds.php?station=hits-aac"
        },
        {
            name: "Hits Radio Pride",
            logo: "stations/images-europe/uk/Hits Radio Pride.png",
            url: "http://84.32.44.251/radiofeeds.php?station=hitsradiopride-aac"
        },
        {
            name: "Greatest Hits Radio",
            logo: "stations/images-europe/nireland/Greatest Hits Radio.png",
            url: "http://84.32.44.251/radiofeeds.php?station=net2national-aac"
        },
        {
            name: "Magic Soul",
            logo: "stations/images-europe/nireland/Magic Soul.png",
            url: "http://84.32.44.251/radiofeeds.php?station=magicsoul-aac"
        },
        {
            name: "U105",
            logo: "stations/images-europe/nireland/U105.png",
            url: "https://gbradio.cdn.tibus.net/U105"
        },
        {
            name: "Q Radio",
            logo: "stations/images-europe/nireland/Q Radio.png",
            url: "https://direct-qradio.sharp-stream.com/qr1060.mp3"
        },
    ],
    "norway": [
        {
            name: "NRK P1",
            logo: "stations/images-europe/norway/NRK P1.png",
            url: "https://lyd.nrk.no/icecast/aac/high/s0w7hwn47m/p1"
        },
        {
            name: "NRK P1+",
            logo: "stations/images-europe/norway/NRK P1 plus.png",
            url: "https://lyd.nrk.no/icecast/aac/high/s0w7hwn47m/p1pluss"
        },
        {
            name: "NRK P2",
            logo: "stations/images-europe/norway/NRK P2.png",
            url: "https://lyd.nrk.no/icecast/aac/high/s0w7hwn47m/p2"
        },
        {
            name: "NRK P3",
            logo: "stations/images-europe/norway/NRK P3.png",
            url: "https://lyd.nrk.no/icecast/aac/high/s0w7hwn47m/p3"
        },
        {
            name: "NRK Klassisk",
            logo: "stations/images-europe/norway/NRK Klassisk.png",
            url: "https://lyd.nrk.no/icecast/aac/high/s0w7hwn47m/klassisk"
        },
        {
            name: "NRK Nyheter",
            logo: "stations/images-europe/norway/NRK Nyheter.png",
            url: "https://lyd.nrk.no/icecast/aac/high/s0w7hwn47m/nyheter"
        },
        {
            name: "NRK Folkemusikk",
            logo: "stations/images-europe/norway/NRK Folkemusikk.png",
            url: "https://lyd.nrk.no/icecast/aac/high/s0w7hwn47m/folkemusikk"
        },
        {
            name: "NRK Sámi Radio",
            logo: "stations/images-europe/norway/NRK Sámi Radio.png",
            url: "https://lyd.nrk.no/icecast/aac/high/s0w7hwn47m/sapmi"
        },
        {
            name: "NRK Jazz",
            logo: "stations/images-europe/norway/NRK Jazz.png",
            url: "https://lyd.nrk.no/icecast/aac/high/s0w7hwn47m/jazz"
        },
        {
            name: "NRK P13",
            logo: "stations/images-europe/norway/NRK P13.png",
            url: "https://lyd.nrk.no/icecast/aac/high/s0w7hwn47m/p13"
        },
        {
            name: "NRK mP3",
            logo: "stations/images-europe/norway/NRK mP3.png",
            url: "https://lyd.nrk.no/icecast/aac/high/s0w7hwn47m/mp3"
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
            name: "P11 Dance",
            logo: "stations/images-europe/norway/P11 Dance.png",
            url: "https://p11.p4groupaudio.com/P11_MM"
        },
        {
            name: "P12 Hitmix",
            logo: "stations/images-europe/norway/P12 Hitmix.png",
            url: "https://p12.p4groupaudio.com/P12_MM"
        },
        {
            name: "NRJ Norge",
            logo: "stations/images-europe/norway/Energy.png",
            url: "https://live-bauerno.sharp-stream.com/simulcast2_no.aac"
        },
        {
            name: "P24-7 FUN",
            logo: "stations/images-europe/norway/P24-7 FUN.png",
            url: "https://live-bauerno.sharp-stream.com/station10_no_aac"
        },
        {
            name: "P24-7 Hot Country",
            logo: "stations/images-europe/norway/P24-7 Hot Country.png",
            url: "https://live-bauerno.sharp-stream.com/norskpop_no_aac"
        },
        {
            name: "P24-7 KOS",
            logo: "stations/images-europe/norway/P24-7 KOS.png",
            url: "https://live-bauerno.sharp-stream.com/p247kos_no_aac"
        },
        {
            name: "P24-7 Mix",
            logo: "stations/images-europe/norway/P24-7 Mix.png",
            url: "https://live-bauerno.sharp-stream.com/p247mix_no_aac"
        },
        {
            name: "Podplay",
            logo: "stations/images-europe/norway/Podplay.png",
            url: "https://live-bauerno.sharp-stream.com/podplay_no_aac"
        },
        {
            name: "Radio 1",
            logo: "stations/images-europe/norway/Radio 1.png",
            url: "http://live-bauerno.sharp-stream.com/radio1_no_aac"
        },
        {
            name: "Radio Norge",
            logo: "stations/images-europe/norway/Radio Norge.png",
            url: "http://live-bauerno.sharp-stream.com/radionorge_no_aac"
        },
        {
            name: "Radio ROCK",
            logo: "stations/images-europe/norway/Radio ROCK.png",
            url: "http://live-bauerno.sharp-stream.com/radiorock_no_aac"
        },
        {
            name: "Topp 40",
            logo: "stations/images-europe/norway/Topp 40.png",
            url: "https://live-bauerno.sharp-stream.com/top40_no_aac"
        },
        {
            name: "Vinyl",
            logo: "stations/images-europe/norway/Vinyl.png",
            url: "https://live-bauerno.sharp-stream.com/vinyl_no_aac"
        },
    ],
    "poland": [
        {
            name: "Polskie Radio 1",
            logo: "stations/images-europe/poland/Polskie Radio 1.png",
            url: "http://mp3.polskieradio.pl:8900/;.mp3"
        },
        {
            name: "Polskie Radio 2",
            logo: "stations/images-europe/poland/Polskie Radio 2.png",
            url: "http://stream3.polskieradio.pl:8952/;.mp3"
        },
        {
            name: "Polskie Radio 3",
            logo: "stations/images-europe/poland/Polskie Radio 3.png",
            url: "http://mp3.polskieradio.pl:8904/;.mp3"
        },
        {
            name: "Polskie Radio 4",
            logo: "stations/images-europe/poland/Polskie Radio 4.png",
            url: "http://stream3.polskieradio.pl:8906/;.mp3"
        },
        {
            name: "Polskie Radio 24",
            logo: "stations/images-europe/poland/Polskie Radio 24.png",
            url: "http://stream3.polskieradio.pl:8080/;.mp3"
        },
        {
            name: "Polskie Radio Chopin",
            logo: "stations/images-europe/poland/Polskie Radio Chopin.png",
            url: "https://stream85.polskieradio.pl/live/rytm.sdp/playlist.m3u8"
        },
        {
            name: "Polskie Radio dla Zagranicy",
            logo: "stations/images-europe/poland/Polskie Radio dla Zagranicy.png",
            url: "https://stream85.polskieradio.pl/pr5/pr5_dab.sdp/playlist.m3u8"
        },
        {
            name: "Polskie Radio Kierowców",
            logo: "stations/images-europe/poland/Polskie Radio Kierowców.png",
            url: "https://stream10.polskieradio.pl/prk/rdk.sdp/playlist.m3u8"
        },
        {
            name: "Antyradio",
            logo: "stations/images-europe/poland/Antyradio.png",
            url: "https://r.dcs.redcdn.pl/sc/o2/Eurozet/live/antyradio.livx"
        },
        {
            name: "ESKA",
            logo: "stations/images-europe/poland/ESKA.png",
            url: "http://waw.ic.smcdn.pl/2380-1.aac"
        },
        {
            name: "ESKA 2",
            logo: "stations/images-europe/poland/ESKA 2.png",
            url: "https://waw.ic.smcdn.pl/1380-1.aac"
        },
        {
            name: "ESKA ROCK",
            logo: "stations/images-europe/poland/ESKA ROCK.png",
            url: "https://waw.ic.smcdn.pl/5990-1.aac"
        },
        {
            name: "Meloradio",
            logo: "stations/images-europe/poland/Meloradio.png",
            url: "https://r.dcs.redcdn.pl/sc/o2/Eurozet/live/meloradio.livx"
        },
        {
            name: "Radio Maryja",
            logo: "stations/images-europe/poland/Radio Maryja.png",
            url: "https://radiomaryja.fastcast4u.com/proxy/radiomaryja?mp=/1"
        },
        {
            name: "Radio Plus",
            logo: "stations/images-europe/poland/Radio Plus.png",
            url: "https://pl04.cdn.eurozet.pl/plu-waw.mp3"
        },
        {
            name: "RadioZET",
            logo: "stations/images-europe/poland/Radio Zet.png",
            url: "https://r.dcs.redcdn.pl/sc/o2/Eurozet/live/audio.livx"
        },
        {
            name: "chilliZET",
            logo: "stations/images-europe/poland/chilliZET.png",
            url: "https://r.dcs.redcdn.pl/sc/o2/Eurozet/live/chillizet.livx"
        },
        {
            name: "Radio Złote Przeboje",
            logo: "stations/images-europe/poland/Radio Złote Przeboje.png",
            url: "https://radiostream.pl/tuba9-1.mp3"
        },
        {
            name: "RMF FM",
            logo: "stations/images-europe/poland/RMF FM.png",
            url: "https://rs102-krk-cyfronet.rmfstream.pl/RMFFM48"
        },
        {
            name: "RMF MAXX",
            logo: "stations/images-europe/poland/RMF MAXX.png",
            url: "https://rs201-krk.rmfstream.pl/RMFMAXXX48"
        },
        {
            name: "RMF Classic",
            logo: "stations/images-europe/poland/RMF Classic.png",
            url: "https://rs203-krk-cyfronet.rmfstream.pl/RMFCLASSIC48"
        },
        {
            name: "TOK FM",
            logo: "stations/images-europe/poland/Tok FM.png",
            url: "https://radiostream.pl/tuba10-1.mp3"
        },
        {
            name: "VOX FM",
            logo: "stations/images-europe/poland/Radio VOX FM.png",
            url: "https://radio.stream.smcdn.pl/icradio-p/3990-1.aac/playlist.m3u8"
        },
    ],
    "portugal": [
        {
            name: "Antena 1",
            logo: "stations/images-europe/portugal/RTP Antena 1.png",
            url: "https://streaming-live.rtp.pt/liveradio/antena180a/playlist.m3u8"
        },
        {
            name: "Antena 2",
            logo: "stations/images-europe/portugal/RTP Antena 2.png",
            url: "https://streaming-live.rtp.pt/liveradio/antena280a/playlist.m3u8"
        },
        {
            name: "Antena 3",
            logo: "stations/images-europe/portugal/RTP Antena 3.png",
            url: "https://streaming-live.rtp.pt/liveradio/antena380a/playlist.m3u8"
        },
        {
            name: "Cidade FM",
            logo: "stations/images-europe/portugal/Cidade FM.png",
            url: "https://stream-icy.bauermedia.pt/cidade.mp3"
        },
        {
            name: "Mega Hits",
            logo: "stations/images-europe/portugal/Mega Hits.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/MEGA_HITSAAC_SC"
        },
        {
            name: "M80 Rádio",
            logo: "stations/images-europe/portugal/M80 Rádio.png",
            url: "https://stream-icy.bauermedia.pt/m80.mp3"
        },
        {
            name: "Rádio Comercial",
            logo: "stations/images-europe/portugal/Rádio Comercial.png",
            url: "https://stream-icy.bauermedia.pt/comercial.mp3"
        },
        {
            name: "Rádio Renascença",
            logo: "stations/images-europe/portugal/Rádio Renascença.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIO_RENASCENCAAAC_SC"
        },
        {
            name: "RFM",
            logo: "stations/images-europe/portugal/RFM.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RFMAAC_SC"
        },
        {
            name: "TSF Rádio Notícias",
            logo: "stations/images-europe/portugal/TSF Rádio Notícias.png",
            url: "https://directo.tsf.pt/tsfdirecto.mp3"
        },
    ],
    "romania": [
        {
            name: "Radio România Actualitati",
            logo: "stations/images-europe/romania/Radio România Actualitati.png",
            url: "http://stream2.srr.ro:8008/;"
        },
        {
            name: "Radio România Cultural",
            logo: "stations/images-europe/romania/Radio România Cultural.png",
            url: "http://stream2.srr.ro:8012/;"
        },
        {
            name: "Radio România Muzical",
            logo: "stations/images-europe/romania/Radio România Muzical.png",
            url: "http://stream2.srr.ro:8022/;"
        },
        {
            name: "Radio România Antena Satelor",
            logo: "stations/images-europe/romania/Radio România Satelor.png",
            url: "http://stream2.srr.ro:8046/;"
        },
        {
            name: "DigiFM",
            logo: "stations/images-europe/romania/DigiFM.png",
            url: "http://edge76.rdsnet.ro:84/digifm/digifm.mp3"
        },
        {
            name: "Europa FM",
            logo: "stations/images-europe/romania/Europa FM.png",
            url: "https://astreaming.edi.ro:8443/EuropaFM_aac"
        },
        {
            name: "Itsy Bitsy FM",
            logo: "stations/images-europe/romania/Itsy Bitsy FM.png",
            url: "http://live.itsybitsy.ro:8000/itsybitsy"
        },
        {
            name: "KISS FM",
            logo: "stations/images-europe/romania/Kiss FM.png",
            url: "https://live.kissfm.ro/kissfm.aacp"
        },
        {
            name: "Magic FM",
            logo: "stations/images-europe/romania/Magic FM.png",
            url: "https://live.magicfm.ro/magicfm.aacp"
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
            name: "Radio Guerrilla",
            logo: "stations/images-europe/romania/Radio Guerrilla.png",
            url: "https://live.guerrillaradio.ro:8443/stream4.aac"
        },
        {
            name: "Radio Impuls",
            logo: "stations/images-europe/romania/Radio Impuls.png",
            url: "https://live.radio-impuls.ro/stream"
        },
        {
            name: "Radio TRINITAS",
            logo: "stations/images-europe/romania/Radio Trinitas.png",
            url: "http://live.radiotrinitas.ro:8000/;"
        },
        {
            name: "Radio ZU",
            logo: "stations/images-europe/romania/Radio Zu.png",
            url: "https://live7digi.antenaplay.ro/radiozu/radiozu-48000.m3u8"
        },
        {
            name: "RFI România",
            logo: "stations/images-europe/romania/RFI România.png",
            url: "https://asculta.radiorfi.ro/live.aac"
        },
        {
            name: "Rock FM",
            logo: "stations/images-europe/romania/Rock FM.png",
            url: "https://live.rockfm.ro/rockfm.aacp"
        },
        {
            name: "Virgin Radio",
            logo: "stations/images-europe/romania/Virgin Radio.png",
            url: "https://astreaming.edi.ro:8443/VirginRadio_aac"
        },
    ],
    "russia": [
        {
            name: "Радио России",
            logo: "stations/images-europe/russia/Радио России - Radio Rossii.png",
            url: "https://icecast-vgtrk.cdnvideo.ru/rrzonam_mp3_192kbps"
        },
        {
            name: "Маяк",
            logo: "stations/images-europe/russia/Маяк - Mayak.png",
            url: "http://icecast.vgtrk.cdnvideo.ru/mayakfm_mp3_192kbps"
        },
        {
            name: "Авторадио",
            logo: "stations/images-europe/russia/Авторадио - Avtoradio.png",
            url: "https://pub0202.101.ru:8443/stream/air/aac/64/100"
        },
        {
            name: "Comedy Radio",
            logo: "stations/images-europe/russia/Comedy Radio.png",
            url: "https://srv21.gpmradio.ru:8443/stream/air/aac/64/202"
        },
        {
            name: "Детское Радио",
            logo: "stations/images-europe/russia/Детское Радио - Detskoe Radio.png",
            url: "https://srv21.gpmradio.ru:8443/stream/air/aac/64/199"
        },
        {
            name: "DFM",
            logo: "stations/images-europe/russia/DFM.png",
            url: "https://dfm.hostingradio.ru/dfm96.aacp"
        },
        {
            name: "Дорожное FM",
            logo: "stations/images-europe/russia/Дорожное FM - Dorozhnoe FM.png",
            url: "https://hls-01-regions.emgsound.ru/15_msk/playlist.m3u8"
        },
        {
            name: "Европа Плюс",
            logo: "stations/images-europe/russia/Европа Плюс - Europa Plus.png",
            url: "https://hls-01-regions.emgsound.ru/11_msk/playlist.m3u8"
        },
        {
            name: "ENERGY",
            logo: "stations/images-europe/russia/ENERGY.png",
            url: "http://ic6.101.ru:8000/stream/air/aac/64/99"
        },
        {
            name: "Хит FM",
            logo: "stations/images-europe/russia/Хит FM - HIT FM.png",
            url: "https://hitfm.hostingradio.ru/hitfm96.aacp"
        },
        {
            name: "Юмор FM",
            logo: "stations/images-europe/russia/Юмор FM - Humor FM.png",
            url: "https://pub0202.101.ru:8443/stream/reg/mp3/128/region_humor_6"
        },
        {
            name: "Like FM",
            logo: "stations/images-europe/russia/Like FM.png",
            url: "https://srv21.gpmradio.ru:8443/stream/air/aac/64/219"
        },
        {
            name: "Love Radio",
            logo: "stations/images-europe/russia/Love Radio.png",
            url: "https://microit2.n340.ru:8443/VgMv0WV17ZVx1uuo_12_love_64"
        },
        {
            name: "НАШЕ Радио",
            logo: "stations/images-europe/russia/НАШЕ Радио - Nashe Radio.png",
            url: "http://nashe1.hostingradio.ru/nashespb128.mp3"
        },
        {
            name: "Новое Радио",
            logo: "stations/images-europe/russia/Новое Радио - New Radio.png",
            url: "https://stream.newradio.ru/novoe96.aacp"
        },
        {
            name: "Radio 7",
            logo: "stations/images-europe/russia/Radio 7.png",
            url: "https://hls-01-regions.emgsound.ru/13_msk/playlist.m3u8"
        },
        {
            name: "Радио АСТВ",
            logo: "stations/images-europe/russia/Радио АСТВ - Radio ASTV.png",
            url: "https://misato.ru-hoster.com:8000/stream"
        },
        {
            name: "Радио Шансон",
            logo: "stations/images-europe/russia/Радио Шансон - Radio Chanson.png",
            url: "https://chanson.hostingradio.ru:8041/chanson128.mp3"
        },
        {
            name: "Радио Дача",
            logo: "stations/images-europe/russia/Радио Дача - Radio Dacha.png",
            url: "https://microit2.n340.ru:8443/VgMv0WV17ZVx1uuo_14_dacha_64"
        },
        {
            name: "Радио Кп",
            logo: "stations/images-europe/russia/Радио Кп - Radio KP.png",
            url: "https://kpradio.hostingradio.ru:8000/64"
        },
        {
            name: "Маруся Фм",
            logo: "stations/images-europe/russia/Маруся Фм - Marusya FM.png",
            url: "https://radio-holding.ru:9433/marusya_default"
        },
        {
            name: "Милицейская Волна",
            logo: "stations/images-europe/russia/Милицейская Волна - Militseyskaya Volna.png",
            url: "https://radiomv.hostingradio.ru:80/radiomv128.mp3"
        },
        {
            name: "ПИ FM",
            logo: "stations/images-europe/russia/ПИ FM - Pi FM.png",
            url: "https://cdn.pifm.ru/mp3web"
        },
        {
            name: "Радио Гордость",
            logo: "stations/images-europe/russia/Радио Гордость - Radio Gordost.png",
            url: "https://rgordost.hostingradio.ru/rgordost64.aacp"
        },
        {
            name: "Радио Звезда",
            logo: "stations/images-europe/russia/Радио Звезда - Radio Zvezda.png",
            url: "https://zvezda-radio-rzv.mediacdn.ru/radio/zvezda/zvezda_128"
        },
        {
            name: "Радио Искатель",
            logo: "stations/images-europe/russia/Радио Искатель - Radio Iskatel.png",
            url: "https://iskatel.hostingradio.ru:8015/iskatel-128.mp3"
        },
        {
            name: "Радио Мир",
            logo: "stations/images-europe/russia/Радио Мир - Radio Mir.png",
            url: "https://icecast-mirtv.cdnvideo.ru/radio_mir_256"
        },
        {
            name: "Radio Monte Carlo",
            logo: "stations/images-europe/russia/Radio Monte Carlo.png",
            url: "https://montecarlo.hostingradio.ru/montecarlo96.aacp"
        },
        {
            name: "Radio Record",
            logo: "stations/images-europe/russia/Radio Record.png",
            url: "https://hls-01-radiorecord.hostingradio.ru/record/playlist.m3u8"
        },
        {
            name: "Радио Родных Дорог",
            logo: "stations/images-europe/russia/Радио Родных Дорог - Radio Rodnykh Dorog.png",
            url: "https://stream1.radiord.ru:8000/live128.mp3"
        },
        {
            name: "Радио ВАНЯ",
            logo: "stations/images-europe/russia/Радио ВАНЯ - Radio Vanya.png",
            url: "https://icecast-radiovanya.cdnvideo.ru/radiovanya"
        },
        {
            name: "Радио ВЕРА",
            logo: "stations/images-europe/russia/Радио ВЕРА - Radio Vera.png",
            url: "https://hls-01-radiovera.hostingradio.ru/rewind/radiovera/playlist.m3u8"
        },
        {
            name: "Ретро FM",
            logo: "stations/images-europe/russia/Ретро FM - Retro FM.png",
            url: "https://hls-01-retro.emgsound.ru/12/playlist.m3u8"
        },
        {
            name: "Русское Радио",
            logo: "stations/images-europe/russia/Русское Радио - Ruskoe Radio.png",
            url: "https://rusradio.hostingradio.ru/rusradio96.aacp"
        },
        {
            name: "Серебряный Дождь",
            logo: "stations/images-europe/russia/Серебряный Дождь - Silver Rain.png",
            url: "https://silverrain.hostingradio.ru/silver128.mp3"
        },
        {
            name: "Вести FM",
            logo: "stations/images-europe/russia/Вести FM - Vesti FM.png",
            url: "https://icecast-vgtrk.cdnvideo.ru/vestifm_mp3_192kbps"
        },
    ],
    "saudia": [
        {
            name: "إذاعة الرياض",
            logo: "stations/images-europe/saudi/إذاعة الرياض.png",
            url: "https://live.kwikmotion.com/sbrksariyadhradiolive/ksariyadhradio/playlist.m3u8"
        },
        {
            name: "إذاعة جدة",
            logo: "stations/images-europe/saudi/إذاعة جدة.png",
            url: "https://live.kwikmotion.com/sbrksajeddahradiolive/ksajeddahradio/playlist.m3u8"
        },
        {
            name: "إذاعة القران الكريم",
            logo: "stations/images-europe/saudi/إذاعة القران الكريم.png",
            url: "https://live.kwikmotion.com/sbrksaquranradiolive/ksaquranradio/playlist.m3u8"
        },
        {
            name: "إذاعة نداء الإسلام",
            logo: "stations/images-europe/saudi/إذاعة نداء الإسلام.png",
            url: "https://live.kwikmotion.com/sbrksanedaradiolive/ksanedaradio/playlist.m3u8"
        },
        {
            name: "Saudia Radio",
            logo: "stations/images-europe/saudi/Saudia Radio.png",
            url: "https://live.kwikmotion.com/sbrksasaudiaradiolive/ksasaudiaradio/playlist.m3u8"
        },
        {
            name: "Alif Alif FM",
            logo: "stations/images-europe/saudi/Alif Alif FM.png",
            url: "https://alifalifjobs.com/radio/8000/AlifAlifLive.mp3"
        },
        {
            name: "MBC FM",
            logo: "stations/images-europe/saudi/MBC FM.png",
            url: "https://mbcfm-riyadh-prod-dub.shahid.net/out/v1/69c8a03f507e422f99cf5c07291c9e3a/index.m3u8"
        },
        {
            name: "MIX FM",
            logo: "stations/images-europe/saudi/MIX FM.png",
            url: "https://s1.voscast.com:11377/live.mp3"
        },
        {
            name: "Panorama FM",
            logo: "stations/images-europe/saudi/Panorama FM.png",
            url: "https://shls-panoramafm-prod-dub.shahid.net/out/v1/66262e420d824475aaae794dc2d69f14/index_7.m3u8"
        },
        {
            name: "Rotana",
            logo: "stations/images-europe/saudi/Rotana.png",
            url: "https://rotanafm128.radioca.st/;"
        },
        {
            name: "اذاعة UFM",
            logo: "stations/images-europe/saudi/اذاعة UFM.png",
            url: "https://stream.ufmradio.com:8003/;"
        },
    ],
    "scotland": [
        {
            name: "BBC Radio Scotland",
            logo: "stations/images-europe/scotland/BBC Radio Scotland.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_scotland_fm.m3u8"
        },
        {
            name: "BBC Radio nan Gàidheal",
            logo: "stations/images-europe/scotland/BBC Radio nan Gàidheal.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_nan_gaidheal.m3u8"
        },
        {
            name: "Capital FM",
            logo: "stations/images-europe/scotland/Capital FM Scotland.png",
            url: "https://media-ssl.musicradio.com/CapitalGlasgow"
        },
        {
            name: "Go Radio",
            logo: "stations/images-europe/scotland/Go Radio.png",
            url: "https://streaming.broadcastradio.com:8252/goradio"
        },
        {
            name: "heart",
            logo: "stations/images-europe/scotland/heart.png",
            url: "http://icecast.thisisdax.com/HeartGlasgow"
        },
        {
            name: "Nation Radio",
            logo: "stations/images-europe/scotland/Nation Radio Scotland.png",
            url: "https://edge-ads-05-gos2.sharp-stream.com/nationscotlandi.aac"
        },
        {
            name: "Smooth",
            logo: "stations/images-europe/scotland/Smooth.png",
            url: "http://icecast.thisisdax.com/SmoothScotland"
        },
    ],
    "serbia": [
        {
            name: "Radio Beograd 1",
            logo: "stations/images-europe/serbia/Radio Beograd 1.png",
            url: "https://rtsradio-live.morescreens.com/RTS_2_001/playlist.m3u8"
        },
        {
            name: "Radio Beograd 2",
            logo: "stations/images-europe/serbia/Radio Beograd 2.png",
            url: "https://rtsradio-live.morescreens.com/RTS_2_002/playlist.m3u8"
        },
        {
            name: "Radio Beograd 3",
            logo: "stations/images-europe/serbia/Radio Beograd 3.png",
            url: "https://rtsradio-live.morescreens.com/RTS_2_003/playlist.m3u8"
        },
        {
            name: "Beograd 202",
            logo: "stations/images-europe/serbia/Beograd 202.png",
            url: "https://rtsradio-live.morescreens.com/RTS_2_004/playlist.m3u8"
        },
        {
            name: "Radio Pletenica",
            logo: "stations/images-europe/serbia/Radio Pletenica.png",
            url: "https://rtsradio-live.morescreens.com/RTS_2_005/playlist.m3u8"
        },
        {
            name: "Radio Rokenroler",
            logo: "stations/images-europe/serbia/Radio Rokenroler.png",
            url: "https://rtsradio-live.morescreens.com/RTS_2_006/playlist.m3u8"
        },
        {
            name: "Radio Džuboks",
            logo: "stations/images-europe/serbia/Radio Džuboks.png",
            url: "https://rtsradio-live.morescreens.com/RTS_2_007/playlist.m3u8"
        },
        {
            name: "Radio Vrteška",
            logo: "stations/images-europe/serbia/Radio Vrteška.png",
            url: "https://rtsradio-live.morescreens.com/RTS_2_008/playlist.m3u8"
        },
        {
            name: "Hit FM",
            logo: "stations/images-europe/serbia/Hit FM.png",
            url: "https://streaming.hitfm.rs/hit.mp3"
        },
        {
            name: "Karolina",
            logo: "stations/images-europe/serbia/Karolina.png",
            url: "https://streaming.karolina.rs/karolina.mp3"
        },
        {
            name: "Naxi Radio",
            logo: "stations/images-europe/serbia/Naxi Radio.png",
            url: "https://naxi64ssl.streaming.rs:9162/;stream.nsv"
        },
        {
            name: "Play Radio",
            logo: "stations/images-europe/serbia/Play Radio.png",
            url: "https://stream.playradio.rs:8443/play.mp3"
        },
        {
            name: "Radio AS FM",
            logo: "stations/images-europe/serbia/Radio AS FM.png",
            url: "https://asfmonair-masterasfm.radioca.st/stream"
        },
        {
            name: "Radio Lola",
            logo: "stations/images-europe/serbia/Radio Lola.png",
            url: "https://streaming.karolina.rs/radiolola.mp3"
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
        {
            name: "Radio S3",
            logo: "stations/images-europe/serbia/Radio S3.png",
            url: "http://edge-rs-01.maksnet.tv/asmedia/pingvin/playlist.m3u8"
        },
        {
            name: "Radio S4",
            logo: "stations/images-europe/serbia/Radio S4.png",
            url: "http://edge-rs-01.maksnet.tv/asmedia/gradski/playlist.m3u8"
        },
        {
            name: "RNS 1",
            logo: "stations/images-europe/serbia/RNS 1.png",
            url: "http://212.200.230.50:1935/rns1/prviprogram/livestream/playlist.m3u8"
        },
        {
            name: "RNS 2",
            logo: "stations/images-europe/serbia/RNS 2.png",
            url: "http://212.200.230.50:1935/rns2/drugiprogram/livestream/playlist.m3u8"
        },
        {
            name: "RNS 3",
            logo: "stations/images-europe/serbia/RNS 3.png",
            url: "http://212.200.230.50:1935/rns3/treciprogram/livestream/playlist.m3u8"
        },
        {
            name: "TDI Radio",
            logo: "stations/images-europe/serbia/TDI Radio.png",
            url: "https://streaming.tdiradio.com/tdiradio.mp3"
        },
        {
            name: "WTF Radio",
            logo: "stations/images-europe/serbia/WTF Radio.png",
            url: "https://live.wtfradio.rs/wtfradio.mp3"
        },
    ],
    "shetland": [
        {
            name: "BBC Radio 1",
            logo: "stations/images-europe/uk/BBC Radio 1.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_one.m3u8"
        },
        {
            name: "BBC Radio 2",
            logo: "stations/images-europe/uk/BBC Radio 2.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_two.m3u8"
        },
        {
            name: "BBC Radio 3",
            logo: "stations/images-europe/uk/BBC Radio 3.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_three.m3u8"
        },
        {
            name: "BBC Radio Shetland",
            logo: "stations/images-europe/shetland/BBC Radio Shetland.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_scotland_mw.m3u8"
        },
        {
            name: "BBC Radio 4",
            logo: "stations/images-europe/uk/BBC Radio 4.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_fourfm.m3u8"
        },
        {
            name: "60 North Radio",
            logo: "stations/images-europe/shetland/60 North Radio.png",
            url: "https://cdn1.zetcast.net/stream"
        },
        {
            name: "SIBC",
            logo: "stations/images-europe/shetland/SIBC.png",
            url: "http://tx9.zetcast.net:8100/stream"
        },
    ],
    "slovakia": [
        {
            name: "Rádio Slovensko",
            logo: "stations/images-europe/slovakia/Rádio Slovensko.png",
            url: "https://icecast.stv.livebox.sk/slovensko_128.mp3"
        },
        {
            name: "Rádio Devin",
            logo: "stations/images-europe/slovakia/Rádio Devin.png",
            url: "https://icecast.stv.livebox.sk/devin_128.mp3"
        },
        {
            name: "Rádio_FM",
            logo: "stations/images-europe/slovakia/Rádio_FM.png",
            url: "https://icecast.stv.livebox.sk/fm_128.mp3"
        },
        {
            name: "Rádio Patria",
            logo: "stations/images-europe/slovakia/Rádio Patria.png",
            url: "https://icecast.stv.livebox.sk/patria_128.mp3"
        },
        {
            name: "Rádio Regina",
            logo: "stations/images-europe/slovakia/Rádio Regina.png",
            url: "https://icecast.stv.livebox.sk/regina-ba_128.mp3"
        },
        {
            name: "Europa 2",
            logo: "stations/images-europe/slovakia/Europa 2.png",
            url: "https://stream.bauermedia.sk/europa2.mp3"
        },
        {
            name: "Fun Rádio",
            logo: "stations/images-europe/slovakia/Fun rádio.png",
            url: "https://stream.funradio.sk:8000/fun192.mp3"
        },
        {
            name: "Rádio 7",
            logo: "stations/images-europe/slovakia/Rádio 7.png",
            url: "https://play.radio7.sk/128"
        },
        {
            name: "Rádio Best FM",
            logo: "stations/images-europe/slovakia/Rádio Best FM.png",
            url: "https://stream3.bestfm.sk:8000/160.aac"
        },
        {
            name: "Rádio Expres",
            logo: "stations/images-europe/slovakia/Rádio Expres.png",
            url: "https://stream.bauermedia.sk/128.mp3"
        },
        {
            name: "Rádio Melody",
            logo: "stations/images-europe/slovakia/Rádio Melody.png",
            url: "https://stream.bauermedia.sk/melody-hi.mp3"
        },
        {
            name: "Rádio Košice",
            logo: "stations/images-europe/slovakia/Rádio Košice.png",
            url: "https://stream.21.sk/radiokosice-128.mp3"
        },
        {
            name: "Rádio Lumen",
            logo: "stations/images-europe/slovakia/Rádio Lumen.png",
            url: "https://audio.lumen.sk/live128.mp3"
        },
        {
            name: "Rádio Vlna",
            logo: "stations/images-europe/slovakia/Rádio Vlna.png",
            url: "https://stream.radiovlna.sk/vlna-hi.mp3"
        },
        {
            name: "Rádio WOW",
            logo: "stations/images-europe/slovakia/Rádio WOW.png",
            url: "https://radioserver.online:9816/radiowow.mp3"
        },
    ],
    "slovenia": [
        {
            name: "ARS",
            logo: "stations/images-europe/slovenia/ARS.png",
            url: "https://mp3.rtvslo.si/ars"
        },
        {
            name: "Radio Prvi",
            logo: "stations/images-europe/slovenia/Radio Prvi.png",
            url: "https://mp3.rtvslo.si/ra1"
        },
        {
            name: "Radio Si",
            logo: "stations/images-europe/slovenia/Radio Si.png",
            url: "http://mp3.rtvslo.si/rsi"
        },
        {
            name: "Val 202",
            logo: "stations/images-europe/slovenia/Val 202.png",
            url: "https://mp3.rtvslo.si/val202"
        },
        {
            name: "Hitradio Center",
            logo: "stations/images-europe/slovenia/Hitradio Center.png",
            url: "http://stream3.radiocenter.si:8000/;center/1"
        },
        {
            name: "Radio 1",
            logo: "stations/images-europe/slovenia/Radio 1.png",
            url: "https://live.radio1.si/Radio1"
        },
        {
            name: "Radio 1 80-a",
            logo: "stations/images-europe/slovenia/Radio 1 80-a.png",
            url: "https://live.radio.si/Radio80"
        },
        {
            name: "Radio 1 Rock",
            logo: "stations/images-europe/slovenia/Radio 1 Rock.png",
            url: "https://live.radio.si/Radio1Rock"
        },
        {
            name: "Radio Aktual",
            logo: "stations/images-europe/slovenia/Radio Aktual.png",
            url: "https://live.radio.si/Aktual"
        },
        {
            name: "Radio Antena",
            logo: "stations/images-europe/slovenia/Radio Antena.png",
            url: "https://live.radio.si/Antena"
        },
        {
            name: "Radio City",
            logo: "stations/images-europe/slovenia/Radio City.png",
            url: "https://stream1.radiocity.si/CityMp3128.mp3"
        },
        {
            name: "Radio Ekspres",
            logo: "stations/images-europe/slovenia/Radio Ekspres.png",
            url: "https://stream.nextmedia.si/proxy/ekspres1?mp=/stream"
        },
        {
            name: "Radio NET FM",
            logo: "stations/images-europe/slovenia/Radio NET FM.png",
            url: "http://reflector.radionet.si:8000/stream.ogg"
        },
        {
            name: "Radio Ognjišče",
            logo: "stations/images-europe/slovenia/Radio Ognjišče.png",
            url: "https://live.radio.si/ognjisce.mp3"
        },
        {
            name: "Radio Salomon",
            logo: "stations/images-europe/slovenia/Radio Salomon.png",
            url: "https://live.radio.si/Salomon"
        },
        {
            name: "Radio Študent",
            logo: "stations/images-europe/slovenia/Radio Študent.png",
            url: "https://kruljo.radiostudent.si:8001/hiq"
        },
        {
            name: "Radio Veseljak",
            logo: "stations/images-europe/slovenia/Radio Veseljak.png",
            url: "https://live.radio.si/Veseljak"
        },
        {
            name: "Rock Radio",
            logo: "stations/images-europe/slovenia/Rock Radio.png",
            url: "http://stream.rockradio.si:9034/rock"
        },
        {
            name: "Toti Radio",
            logo: "stations/images-europe/slovenia/Toti Radio.png",
            url: "https://live.radio.si/Toti"
        },
    ],
    "spain": [
        {
            name: "Radio Nacional",
            logo: "stations/images-europe/spain/RNE Radio Nacional.png",
            url: "https://dispatcher.rndfnk.com/crtve/rne1/main/mp3/high"
        },
        {
            name: "Radio Clásica",
            logo: "stations/images-europe/spain/RNE Radio Clásica.png",
            url: "https://dispatcher.rndfnk.com/crtve/rnerc/main/mp3/high"
        },
        {
            name: "Radio 3",
            logo: "stations/images-europe/spain/RNE Radio 3.png",
            url: "https://dispatcher.rndfnk.com/crtve/rner3/main/mp3/high"
        },
        {
            name: "Radio 5",
            logo: "stations/images-europe/spain/RNE Radio 5.png",
            url: "https://dispatcher.rndfnk.com/crtve/rne5/main/mp3/high"
        },
        {
            name: "Cadena 100",
            logo: "stations/images-europe/spain/Cadena 100.png",
            url: "https://cadena100-cope-rrcast.flumotion.com/cope/cadena100-low.mp3"
        },
        {
            name: "Cadena Dial",
            logo: "stations/images-europe/spain/Cadena Dial.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/CADENADIALAAC_SC"
        },
        {
            name: "Cadena SER",
            logo: "stations/images-europe/spain/Cadena SER.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/CADENASERAAC_SC"
        },
        {
            name: "COPE",
            logo: "stations/images-europe/spain/Cope.png",
            url: "https://flucast14-h-cloud.flumotion.com/cope/net1.mp3"
        },
        {
            name: "Europa FM",
            logo: "stations/images-europe/spain/Europa FM.png",
            url: "https://agregadores-atres-live.atresmedia.com/tunein/live/europafm/master.m3u8"
        },
        {
            name: "esRadio",
            logo: "stations/images-europe/spain/esRadio.png",
            url: "https://libertaddigital-radio-live1.flumotion.com/libertaddigital/ld-live1-med.aac"
        },
        {
            name: "Éxito Radio",
            logo: "stations/images-europe/spain/Éxito Radio.png",
            url: "https://eu1.lhdserver.es:8009/stream"
        },
        {
            name: "HIT FM",
            logo: "stations/images-europe/spain/HIT FM.png",
            url: "https://adhandler.kissfmradio.cires21.com/get_link?url=https://bbhitfm.kissfmradio.cires21.com/bbhitfm.mp3"
        },
        {
            name: "KISS FM",
            logo: "stations/images-europe/spain/KISS FM.png",
            url: "https://adhandler.kissfmradio.cires21.com/get_link?url=https://bbkissfm.kissfmradio.cires21.com/bbkissfm.mp3"
        },
        {
            name: "Loca FM",
            logo: "stations/images-europe/spain/Loca FM.png",
            url: "http://s3.we4stream.com:8045/liv"
        },
        {
            name: "Loca Urban",
            logo: "stations/images-europe/spain/Loca Urban.png",
            url: "http://locafm02.we4stream.com:8015/live"
        },
        {
            name: "LOS40",
            logo: "stations/images-europe/spain/LOS40.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/LOS40AAC_SC"
        },
        {
            name: "LOS40 Dance",
            logo: "stations/images-europe/spain/LOS40 Dance.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/LOS40_DANCEAAC_SC"
        },
        {
            name: "LOS40 Classic",
            logo: "stations/images-europe/spain/LOS40 Classic.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/LOS40_CLASSICAAC_SC"
        },
        {
            name: "LOS40 Urban",
            logo: "stations/images-europe/spain/LOS40 Urban.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/LOS40_URBANAAC_SC"
        },
        {
            name: "Melodía FM",
            logo: "stations/images-europe/spain/Melodía FM.png",
            url: "https://agregadores-atres-live.atresmedia.com/tunein/live/melodiafm/master.m3u8"
        },
        {
            name: "Onda Cero",
            logo: "stations/images-europe/spain/Onda Cero.png",
            url: "https://agregadores-atres-live.atresmedia.com/tunein/live/ondacero/master.m3u8"
        },
        {
            name: "Radio Intereconomía",
            logo: "stations/images-europe/spain/Radio Intereconomía.png",
            url: "https://streaming.intereconomia.com/siliconorg"
        },
        {
            name: "Radiolé",
            logo: "stations/images-europe/spain/Radiolé.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIOLEAAC_SC"
        },
        {
            name: "Radio MARCA",
            logo: "stations/images-europe/spain/Radio MARCA.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIOMARCA_NACIONALAAC_SC"
        },
        {
            name: "Radio María España",
            logo: "stations/images-europe/spain/Radio María España.png",
            url: "https://dreamsiteradiocp4.com/proxy/rmspain1?mp=/stream/1/"
        },
        {
            name: "Radio Solidaria",
            logo: "stations/images-europe/spain/Radio Solidaria.png",
            url: "http://www.rkmradio.com:8000/stream/1/"
        },
        {
            name: "Rock FM",
            logo: "stations/images-europe/spain/Rock FM.png",
            url: "https://rockfm-cope.flumotion.com/playlist.m3u8"
        },
    ],
    "spain-madrid": [
        {
            name: "Dynamisradio 87.5",
            logo: "stations/images-europe/spain-madrid/Dynamisradio 87.5.png",
            url: "https://control.streaming-pro.com:8014/stream"
        },
        {
            name: "Ucrania FM 87.7",
            logo: "stations/images-europe/spain-madrid/Ucrania FM 87.7.png",
            url: "https://sonicpanel.streaming10.net:8084/stream"
        },
        {
            name: "Pepe Radio 89.3",
            logo: "stations/images-europe/spain-madrid/Pepe Radio 89.3.png",
            url: "https://server10.emitironline.com:8032/"
        },
        {
            name: "HIT FM 89.9",
            logo: "stations/images-europe/spain-madrid/HIT FM 89.9.png",
            url: "https://adhandler.kissfmradio.cires21.com/get_link?url=https://bbhitfm.kissfmradio.cires21.com/bbhitfm.mp3"
        },
        {
            name: "Super Latina 90.1",
            logo: "stations/images-europe/spain-madrid/Super Latina 90.1.png",
            url: "https://securestream.radioshd.info:7037/;"
        },
        {
            name: "Radio Tentación 91.4",
            logo: "stations/images-europe/spain-madrid/Radio Tentación 91.4.png",
            url: "http://88.26.228.190:8010/;"
        },
        {
            name: "Master FM 93.7",
            logo: "stations/images-europe/spain-madrid/Master FM 93.7.png",
            url: "https://radios.lamaster.es:8000/madrid"
        },
        {
            name: "Loca Urban 95.4",
            logo: "stations/images-europe/spain/Loca Urban.png",
            url: "http://locafm02.we4stream.com:8015/live"
        },
        {
            name: "Diversa Radio 96.7",
            logo: "stations/images-europe/spain-madrid/Diversa Radio 96.7.png",
            url: "https://italia.101servicios.com:9060/stream"
        },
        {
            name: "TOP Radio 97.2",
            logo: "stations/images-europe/spain-madrid/TOP Radio 97.2.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/TOPRADIOAAC_SC"
        },
        {
            name: "La Mega Estacion 98.2",
            logo: "stations/images-europe/spain-madrid/La Mega Estacion 98.2.png",
            url: "https://eu1.lhdserver.es:9049/stream"
        },
        {
            name: "La Viña Radio 100.2",
            logo: "stations/images-europe/spain-madrid/La Viña Radio 100.2.png",
            url: "https://babel.ddns.net/lavina"
        },
        {
            name: "Vaughan Radio 100.4",
            logo: "stations/images-europe/spain-madrid/Vaughan Radio 100.4.png",
            url: "https://vaughanradioweb.streaming-pro.com:8058/vaughanradio.mp3"
        },
        {
            name: "MegaStarFM 100.9",
            logo: "stations/images-europe/spain-madrid/MegaStarFM 100.9.png",
            url: "https://megastar-cope.flumotion.com/playlist.m3u8"
        },
        {
            name: "Onda Madrid 101.3",
            logo: "stations/images-europe/spain-madrid/Onda Madrid 101.3.png",
            url: "http://media.telemadrid.es/telemadrid/ondemand/radio/entrevista%20destacada1305.mp3"
        },
        {
            name: "Kandela Te Prende 101.9",
            logo: "stations/images-europe/spain-madrid/Kandela Te Pretende 101.9.png",
            url: "https://securestream.radioshd.info:7067/;"
        },
        {
            name: "Únika FM 103.0",
            logo: "stations/images-europe/spain-madrid/Únika FM 103.0.png",
            url: "https://stream.radiojar.com/7qyvpnex9vzuv"
        },
        {
            name: "Capital Radio 103.2",
            logo: "stations/images-europe/spain-madrid/Capital Radio 103.2.png",
            url: "https://capitalradio-live.flumotion.com/capital-radio/capitalradio.mp3"
        },
        {
            name: "COPE Madrid 106.3",
            logo: "stations/images-europe/spain-madrid/Cope.png",
            url: "https://flucast01-o-cloud.flumotion.com/cope/net1.mp3"
        },
    ],
    "sweden": [
        {
            name: "SR P1",
            logo: "stations/images-europe/sweden/Sveriges Radio P1.png",
            url: "http://http-live.sr.se/p1-mp3-192"
        },
        {
            name: "SR P2",
            logo: "stations/images-europe/sweden/Sveriges Radio P2.png",
            url: "http://http-live.sr.se/p2-mp3-192"
        },
        {
            name: "SR P3",
            logo: "stations/images-europe/sweden/Sveriges Radio P3.png",
            url: "http://http-live.sr.se/p3-mp3-192"
        },
        {
            name: "SR P4 Stockholm",
            logo: "stations/images-europe/sweden/Sveriges Radio P4.png",
            url: "http://http-live.sr.se/p4stockholm-mp3-192"
        },
        {
            name: "Bandit Rock",
            logo: "stations/images-europe/sweden/Bandit Rock.png",
            url: "https://fm02-ice.stream.khz.se/fm02_mp3"
        },
        {
            name: "Lugna Favoriter",
            logo: "stations/images-europe/sweden/Lugna Favoriter.png",
            url: "https://fm03-ice.stream.khz.se/fm03_mp3"
        },
        {
            name: "Mix Megapol",
            logo: "stations/images-europe/sweden/Mix Megapol.png",
            url: "https://live-bauerse-fm.sharp-stream.com/mixmegapol_instream_se_aacp"
        },
        {
            name: "NRJ",
            logo: "stations/images-europe/sweden/Energy.png",
            url: "https://live-bauerse-fm.sharp-stream.com/nrj_instreamtest_se_aacp"
        },
        {
            name: "RIX FM",
            logo: "stations/images-europe/sweden/Rix FM.png",
            url: "https://fm01-ice.stream.khz.se/fm01_mp3"
        },
        {
            name: "Rockklassiker",
            logo: "stations/images-europe/sweden/Rockklassiker.png",
            url: "https://live-bauerse-fm.sharp-stream.com/rockklassiker_instream_se_aacp"
        },
        {
            name: "Star FM",
            logo: "stations/images-europe/sweden/Star FM.png",
            url: "http://fm05-ice.stream.khz.se/fm05_mp3"
        },
        {
            name: "Vinyl FM",
            logo: "stations/images-europe/sweden/Vinyl FM.png",
            url: "https://live-bauerse-fm.sharp-stream.com/vinylfm_instream_se_aacp"
        },
    ],
    "switzerland-de": [
        {
            name: "SRF 1",
            logo: "stations/images-europe/switzerland-de/SRF 1.png",
            url: "http://stream.srg-ssr.ch/m/drs1/mp3_128"
        },
        {
            name: "SRF 2",
            logo: "stations/images-europe/switzerland-de/SRF 2.png",
            url: "http://stream.srg-ssr.ch/m/drs2/mp3_128"
        },
        {
            name: "SRF 3",
            logo: "stations/images-europe/switzerland-de/SRF 3.png",
            url: "http://stream.srg-ssr.ch/m/drs3/mp3_128"
        },
        {
            name: "SRF 4",
            logo: "stations/images-europe/switzerland-de/SRF 4.png",
            url: "http://stream.srg-ssr.ch/m/drs4news/mp3_128"
        },
        {
            name: "SRF Musikwelle",
            logo: "stations/images-europe/switzerland-de/SRF Musikwelle.png",
            url: "https://stream.srg-ssr.ch/m/drsmw/mp3_128"
        },
        {
            name: "SRF Virus",
            logo: "stations/images-europe/switzerland-de/SRF Virus.png",
            url: "https://stream.srg-ssr.ch/m/drsvirus/mp3_128"
        },
        {
            name: "Radio Swiss Classic",
            logo: "stations/images-europe/switzerland-de/Radio Swiss Classic.png",
            url: "https://stream.srg-ssr.ch/m/rsc_de/mp3_128"
        },
        {
            name: "Radio Swiss Jazz",
            logo: "stations/images-europe/switzerland-de/Radio Swiss Jazz.png",
            url: "https://stream.srg-ssr.ch/m/rsj/mp3_128"
        },
        {
            name: "Radio Swiss Pop",
            logo: "stations/images-europe/switzerland-de/Radio Swiss Pop.png",
            url: "https://stream.srg-ssr.ch/m/rsp/mp3_128"
        },
        {
            name: "Radio RTR",
            logo: "stations/images-europe/switzerland-de/Radio RTR.png",
            url: "https://stream.srg-ssr.ch/m/rr/mp3_128"
        },
        {
            name: "ENERGY Basel",
            logo: "stations/images-europe/switzerland-de/ENERGY Basel.png",
            url: "https://energybasel.ice.infomaniak.ch/energybasel-high.mp3"
        },
        {
            name: "ENERGY Bern",
            logo: "stations/images-europe/switzerland-de/ENERGY Bern.png",
            url: "https://energybern.ice.infomaniak.ch/energybern-high.mp3"
        },
        {
            name: "ENERGY Zürich",
            logo: "stations/images-europe/switzerland-de/ENERGY Zürich.png",
            url: "https://energyzuerich.ice.infomaniak.ch/energyzuerich-high.mp3"
        },
        {
            name: "ERF Plus",
            logo: "stations/images-europe/switzerland-de/ERF Plus.png",
            url: "https://stream1.lifechannel.ch/ERFPLUS"
        },
        {
            name: "FLASHBACK FM",
            logo: "stations/images-europe/switzerland-de/FLASHBACK FM.png",
            url: "https://stream.streambase.ch/ffm/mp3-192/chmedia-radio-web"
        },
        {
            name: "FM1",
            logo: "stations/images-europe/switzerland-de/FM1.png",
            url: "https://stream.streambase.ch/radiofm1/mp3-192/chmedia-radio-web"
        },
        {
            name: "Life Channel",
            logo: "stations/images-europe/switzerland-de/Life Channel.png",
            url: "https://stream1.lifechannel.ch/LIFECHANNEL"
        },
        {
            name: "MaXXima",
            logo: "stations/images-europe/switzerland-fr/MaXXima.png",
            url: "https://maxxima.mine.nu/maxxima.mp3"
        },
        {
            name: "my105 DJ RADIO",
            logo: "stations/images-europe/switzerland-de/my105 DJ RADIO.png",
            url: "https://play.my105.ch/my105djradio.mp3"
        },
        {
            name: "open broadcast radio",
            logo: "stations/images-europe/switzerland-de/open broadcast radio.png",
            url: "http://stream.openbroadcast.ch/256.mp3"
        },
        {
            name: "Radio 24",
            logo: "stations/images-europe/switzerland-de/Radio 24.png",
            url: "https://stream.streambase.ch/radio24/mp3-192/chmedia-radio-web"
        },
        {
            name: "Radio Argovia",
            logo: "stations/images-europe/switzerland-de/Radio Argovia.png",
            url: "https://stream.streambase.ch/argovia/mp3-192/chmedia-radio-web"
        },
        {
            name: "Radio Central",
            logo: "stations/images-europe/switzerland-de/Radio Central.png",
            url: "https://stream.streambase.ch/rcentral/mp3-192/chmedia-radio-web"
        },
        {
            name: "Radio Eviva",
            logo: "stations/images-europe/switzerland-de/Radio Eviva.png",
            url: "https://stream.streambase.ch/reviva/mp3-192/chmedia-radio-web"
        },
        {
            name: "Radio Grischa",
            logo: "stations/images-europe/switzerland-de/Radio Grischa.png",
            url: "https://stream.radiogrischa.ch/radiogrischa/mp3_128"
        },
        {
            name: "Radio LoRa",
            logo: "stations/images-europe/switzerland-de/Radio LoRa.png",
            url: "https://lora.ice.infomaniak.ch/lora.mp3"
        },
        {
            name: "Radio Maria Schweiz",
            logo: "stations/images-europe/switzerland-de/Radio Maria Schweiz.png",
            url: "https://streaming2.elitecomunicacion.es:9000/radiomaria_lo"
        },
        {
            name: "Radio Melody",
            logo: "stations/images-europe/switzerland-de/Radio Melody.png",
            url: "https://stream.streambase.ch/rm/mp3-192/chmedia-radio-web/"
        },
        {
            name: "Radio Pilatus",
            logo: "stations/images-europe/switzerland-de/Radio Pilatus.png",
            url: "https://stream.streambase.ch/radiopilatus/mp3-192/chmedia-radio-web"
        },
        {
            name: "Radio Tell",
            logo: "stations/images-europe/switzerland-de/Radio Tell.png",
            url: "https://radiotell.dmd2streaming.com/radiotell.mp3"
        },
        {
            name: "Radio TOP",
            logo: "stations/images-europe/switzerland-de/Radio TOP.png",
            url: "http://icecast.radiotop.ch/radiotop_128"
        },
        {
            name: "Radio Zürisee",
            logo: "stations/images-europe/switzerland-de/Radio Zürisee.png",
            url: "https://mp3.radio.ch/radiozuerisee128k"
        },
        {
            name: "Vintage Radio",
            logo: "stations/images-europe/switzerland-de/Vintage Radio.png",
            url: "https://vintageradio.ice.infomaniak.ch/vintageradio-high.mp3"
        },
        {
            name: "Virgin Radio",
            logo: "stations/images-europe/switzerland-de/Virgin Radio.png",
            url: "https://stream.streambase.ch/vrock/mp3-192/chmedia-radio-web"
        },
    ],
    "switzerland-fr": [
        {
            name: "RTS Première",
            logo: "stations/images-europe/switzerland-fr/RTS Première.png",
            url: "http://stream.srg-ssr.ch/m/la-1ere/mp3_128"
        },
        {
            name: "RTS Espace 2",
            logo: "stations/images-europe/switzerland-fr/RTS Espace 2.png",
            url: "http://stream.srg-ssr.ch/m/espace-2/mp3_128"
        },
        {
            name: "RTS Couleur 3",
            logo: "stations/images-europe/switzerland-fr/RTS Couleur 3.png",
            url: "http://stream.srg-ssr.ch/m/couleur3/mp3_128"
        },
        {
            name: "RTS Option Musique",
            logo: "stations/images-europe/switzerland-fr/RTS Option Musique.png",
            url: "http://stream.srg-ssr.ch/m/option-musique/mp3_128"
        },
        {
            name: "Radio Swiss Classic",
            logo: "stations/images-europe/switzerland-fr/Radio Swiss Classic.png",
            url: "https://stream.srg-ssr.ch/m/rsc_de/mp3_128"
        },
        {
            name: "Radio Swiss Jazz",
            logo: "stations/images-europe/switzerland-fr/Radio Swiss Jazz.png",
            url: "https://stream.srg-ssr.ch/m/rsj/mp3_128"
        },
        {
            name: "Radio Swiss Pop",
            logo: "stations/images-europe/switzerland-fr/Radio Swiss Pop.png",
            url: "https://stream.srg-ssr.ch/m/rsp/mp3_128"
        },
        {
            name: "Radio RTR",
            logo: "stations/images-europe/switzerland-fr/Radio RTR.png",
            url: "https://stream.srg-ssr.ch/m/rr/mp3_128"
        },
        {
            name: "GRRIF",
            logo: "stations/images-europe/switzerland-fr/GRRIF.png",
            url: "http://84.32.44.251/index.php?u=https://grrif.ice.infomaniak.ch/grrif-128.aac"
        },
        {
            name: "IP music",
            logo: "stations/images-europe/switzerland-fr/IP music.png",
            url: "https://live7.avf.ch/ipmusicaacplus96"
        },
        {
            name: "LFM",
            logo: "stations/images-europe/switzerland-fr/LFM.png",
            url: "https://lausannefm.ice.infomaniak.ch/lausannefm-high.mp3"
        },
        {
            name: "MaXXima",
            logo: "stations/images-europe/switzerland-fr/MaXXima.png",
            url: "https://maxxima.mine.nu/maxxima.mp3"
        },
        {
            name: "One FM",
            logo: "stations/images-europe/switzerland-fr/One FM.png",
            url: "https://onefm.ice.infomaniak.ch/onefm-high.mp3"
        },
        {
            name: "open broadcast radio",
            logo: "stations/images-europe/switzerland-de/open broadcast radio.png",
            url: "http://stream.openbroadcast.ch/256.mp3"
        },
        {
            name: "Radio Chablais",
            logo: "stations/images-europe/switzerland-fr/Radio Chablais.png",
            url: "http://radiochablais.ice.infomaniak.ch/radiochablais-high.mp3"
        },
        {
            name: "Radio Fribourg",
            logo: "stations/images-europe/switzerland-fr/Radio Fribourg.png",
            url: "https://radiofribourg.ice.infomaniak.ch/radiofribourg-high.mp3"
        },
        {
            name: "RadioFr. Fresh",
            logo: "stations/images-europe/switzerland-fr/RadioFr. Fresh.png",
            url: "https://radiofresh.ice.infomaniak.ch/radiofresh.aac"
        },
        {
            name: "Radio Lac",
            logo: "stations/images-europe/switzerland-fr/Radio Lac.png",
            url: "https://radiolac.ice.infomaniak.ch/radiolac-high.mp3"
        },
        {
            name: "RadionetPlus",
            logo: "stations/images-europe/switzerland-fr/RadionetPlus.png",
            url: "https://radionetplus.ice.infomaniak.ch/radionetplus-high.mp3"
        },
        {
            name: "Rhône FM",
            logo: "stations/images-europe/switzerland-fr/Rhône FM.png",
            url: "https://rhonefm.ice.infomaniak.ch/rhonefm-high.mp3"
        },
        {
            name: "Rouge FM",
            logo: "stations/images-europe/switzerland-fr/Rouge FM.png",
            url: "http://rougefm.ice.infomaniak.ch/rougefm-high.mp3"
        },
        {
            name: "Spoon Rock Radio",
            logo: "stations/images-europe/switzerland-fr/Spoon Radio.png",
            url: "https://ic2527.c972.fastserv.com/spoonradio_aacp_96"
        },
        {
            name: "Spoon Classic Rock",
            logo: "stations/images-europe/switzerland-fr/Spoon Radio.png",
            url: "https://spoonradioclassicrock.ice.infomaniak.ch/spoon-classicrock-hd.aac"
        },
        {
            name: "Spoon Rock Ballads",
            logo: "stations/images-europe/switzerland-fr/Spoon Radio.png",
            url: "https://spoonradiorockballads.ice.infomaniak.ch/spoon-rockballads-hd.aac"
        },
        {
            name: "Vertical Radio",
            logo: "stations/images-europe/switzerland-fr/Vertical Radio.png",
            url: "https://verticalradio.ice.infomaniak.ch/verticalradio-128.mp3"
        },
        {
            name: "VIVA FM",
            logo: "stations/images-europe/switzerland-fr/VIVA FM.png",
            url: "https://vivafm.ice.infomaniak.ch/vivafm-96.mp3"
        },
    ],
    "switzerland-it": [
        {
            name: "Rete Uno",
            logo: "stations/images-europe/switzerland-it/Rete Uno.png",
            url: "http://lsaplus.swisstxt.ch/audio/reteuno_96.stream/playlist.m3u8"
        },
        {
            name: "Rete Due",
            logo: "stations/images-europe/switzerland-it/Rete Due.png",
            url: "http://lsaplus.swisstxt.ch/audio/retedue_96.stream/playlist.m3u8"
        },
        {
            name: "Rete Tre",
            logo: "stations/images-europe/switzerland-it/Rete Tre.png",
            url: "http://lsaplus.swisstxt.ch/audio/retetre_96.stream/playlist.m3u8"
        },
        {
            name: "Radio Swiss Classic",
            logo: "stations/images-europe/switzerland-fr/Radio Swiss Classic.png",
            url: "https://stream.srg-ssr.ch/m/rsc_de/mp3_128"
        },
        {
            name: "Radio Swiss Jazz",
            logo: "stations/images-europe/switzerland-fr/Radio Swiss Jazz.png",
            url: "https://stream.srg-ssr.ch/m/rsj/mp3_128"
        },
        {
            name: "Radio Swiss Pop",
            logo: "stations/images-europe/switzerland-fr/Radio Swiss Pop.png",
            url: "https://stream.srg-ssr.ch/m/rsp/mp3_128"
        },
        {
            name: "Radio RTR",
            logo: "stations/images-europe/switzerland-it/Radio RTR.png",
            url: "https://stream.srg-ssr.ch/m/rr/mp3_128"
        },
        {
            name: "ELLIPTICUM",
            logo: "stations/images-europe/switzerland-it/ELLIPTICUM.png",
            url: "https://live.ellipticum.radio/elli_it.aac"
        },
        {
            name: "MaXXima",
            logo: "stations/images-europe/switzerland-fr/MaXXima.png",
            url: "https://maxxima.mine.nu/maxxima.mp3"
        },
        {
            name: "my105 DJ RADIO",
            logo: "stations/images-europe/switzerland-de/my105 DJ RADIO.png",
            url: "https://play.my105.ch/my105djradio.mp3"
        },
        {
            name: "One Dance",
            logo: "stations/images-europe/switzerland-it/One Dance.png",
            url: "https://ice04.fluidstream.net/rn1_2.aac"
        },
        {
            name: "open broadcast radio",
            logo: "stations/images-europe/switzerland-de/open broadcast radio.png",
            url: "http://stream.openbroadcast.ch/256.mp3"
        },
        {
            name: "Radio3i",
            logo: "stations/images-europe/switzerland-it/Radio3i.png",
            url: "https://icecast.gruppocdt.ch/radio3i-256.mp3"
        },
        {
            name: "Radio Number One",
            logo: "stations/images-europe/switzerland-it/Radio Number One.png",
            url: "https://rn1.fluidstream.eu/rn1.mp3"
        },
        {
            name: "Radio Gwendalyn",
            logo: "stations/images-europe/switzerland-it/Radio Gwendalyn.png",
            url: "https://stream.radiojar.com/h6eddm4h9quvv"
        },
        {
            name: "Radio MANBASSA Ticino",
            logo: "stations/images-europe/switzerland-it/Radio MANBASSA Ticino.png",
            url: "https://stream.radioterlizzistereo.it/rmbticino"
        },
        {
            name: "Radio Morcote International",
            logo: "stations/images-europe/switzerland-it/Radio Morcote International.png",
            url: "http://streaming.radiomorcoteinternational.com:8000/;"
        },
        {
            name: "Radio Studio Star",
            logo: "stations/images-europe/switzerland-it/Radio Studio Star.png",
            url: "https://nr5.newradio.it/proxy/madresti?mp=/stream"
        },
        {
            name: "Radio Ticino",
            logo: "stations/images-europe/switzerland-it/Radio Ticino.png",
            url: "https://streaming.smartradio.ch:8502/stream"
        },
        {
            name: "Radio Ticino Pop",
            logo: "stations/images-europe/switzerland-it/Radio Ticino Pop.png",
            url: "https://streaming.smartradio.ch:8503/stream"
        },
        {
            name: "RTO",
            logo: "stations/images-europe/switzerland-it/RTO.png",
            url: "https://sc.streamingfm.it:8184/rto"
        },
    ],
    "syria": [
        {
            name: "اذاعة دمشق",
            logo: "stations/images-europe/syria/اذاعة دمشق.png",
            url: "http://radiolive.rtv.gov.sy:1935/RDimshq/RDimshqLive/playlist.m3u8"
        },
        {
            name: "صوت الشباب",
            logo: "stations/images-europe/syria/صوت الشباب.png",
            url: "http://radiolive.rtv.gov.sy:1935/RShabab/RShababLive/playlist.m3u8"
        },
        {
            name: "راديو الآن",
            logo: "stations/images-europe/syria/راديو الآن.png",
            url: "https://c20.radioboss.fm/stream/543"
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
            logo: "stations/images-europe/tunis/Mosaïque FM.png",
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
            url: "https://live.ifm.tn/radio/8000/ifmlive?1585267848"
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
            url: "https://trt.radyotvonline.net/trt1"
        },
        {
            name: "TRT FM",
            logo: "stations/images-europe/turkey/TRT FM.png",
            url: "https://trt.radyotvonline.net/trtfm"
        },
        {
            name: "TRT Radyo 3",
            logo: "stations/images-europe/turkey/TRT Radyo 3.png",
            url: "https://rd-trtradyo3.medya.trt.com.tr/master.m3u8"
        },
        {
            name: "TRT Nağme",
            logo: "stations/images-europe/turkey/TRT Nağme.png",
            url: "https://rd-trtnagme.medya.trt.com.tr/master.m3u8"
        },
        {
            name: "TRT Türkü",
            logo: "stations/images-europe/turkey/TRT Türkü.png",
            url: "https://rd-trtturku.medya.trt.com.tr/master.m3u8"
        },
        {
            name: "TRT Radyo Haber",
            logo: "stations/images-europe/turkey/TRT Radyo Haber.png",
            url: "https://trt.radyotvonline.net/trthaber"
        },
        {
            name: "A Haber Radyo",
            logo: "stations/images-europe/turkey/A Haber Radyo.png",
            url: "https://trkvz-radyolar.ercdn.net/ahaberradyo/playlist.m3u8"
        },
        {
            name: "Akra FM",
            logo: "stations/images-europe/turkey/Akra FM.png",
            url: "https://cdn3.akradyo.net/akracanli2/_definst_/livestream_aac/playlist.m3u8"
        },
        {
            name: "Alem FM",
            logo: "stations/images-europe/turkey/Alem FM.png",
            url: "https://turkmedya.radyotvonline.net/alemfmaac"
        },
        {
            name: "A Spor Radyo",
            logo: "stations/images-europe/turkey/A Spor Radyo.png",
            url: "https://trkvz-radyolar.ercdn.net/asporradyo/playlist.m3u8"
        },
        {
            name: "Bayram FM",
            logo: "stations/images-europe/turkey/Bayram FM.png",
            url: "https://sslyayin.netyayin.net:10962/live"
        },
        {
            name: "Best FM",
            logo: "stations/images-europe/turkey/Best FM.png",
            url: "https://bestfm.turkhosted.com/;stream.mp3"
        },
        {
            name: "CNN Türk Radyo",
            logo: "stations/images-europe/turkey/CNN Türk Radyo.png",
            url: "https://moondigitaledge2.radyotvonline.net/cnnturk/playlist.m3u8"
        },
        {
            name: "CRI TÜRK",
            logo: "stations/images-europe/turkey/CRI TÜRK.png",
            url: "https://criturk.radyotvonline.net/criturk?/"
        },
        {
            name: "Diyanet Radyo",
            logo: "stations/images-europe/turkey/Diyanet Radyo.png",
            url: "https://eustr73.mediatriple.net/videoonlylive/mtikoimxnztxlive/broadcast_5e3c1171d7d2a.smil/playlist.m3u8"
        },
        {
            name: "Diyanet Kur'an Radyo",
            logo: "stations/images-europe/turkey/Diyanet Kur'an Radyo.png",
            url: "https://eustr73.mediatriple.net/videoonlylive/mtikoimxnztxlive/broadcast_5e3c14192aa92.smil/playlist.m3u8"
        },
        {
            name: "Diyanet Risalet Radyo",
            logo: "stations/images-europe/turkey/Diyanet Risalet Radyo.png",
            url: "https://eustr73.mediatriple.net/videoonlylive/mtikoimxnztxlive/broadcast_5e3c1520b2626.smil/playlist.m3u8"
        },
        {
            name: "Erkam Radyo",
            logo: "stations/images-europe/turkey/Erkam Radyo.png",
            url: "https://api-tv5.yayin.com.tr:8002/mp3"
        },
        {
            name: "Joy Türk",
            logo: "stations/images-europe/turkey/Joy Türk.png",
            url: "https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_TURKAAC_SC"
        },
        {
            name: "Kafa Radyo",
            logo: "stations/images-europe/turkey/Kafa Radyo.png",
            url: "https://live.kafaradyo.com/radyoland/kafaradyo.stream/playlist.m3u8"
        },
        {
            name: "KRAL FM",
            logo: "stations/images-europe/turkey/KRAL FM.png",
            url: "https://dygedge2.radyotvonline.net/kralfm/playlist.m3u8"
        },
        {
            name: "KRAL POP",
            logo: "stations/images-europe/turkey/KRAL POP.png",
            url: "https://dygedge.radyotvonline.net/kralpop/playlist.m3u8"
        },
        {
            name: "Lig Radyo 92.3",
            logo: "stations/images-europe/turkey/Lig Radyo 92.3.png",
            url: "https://ligradyo.radyotvonline.net/ligradyo"
        },
        {
            name: "Meteorolojinin Sesi Radyosu",
            logo: "stations/images-europe/turkey/Meteorolojinin Sesi Radyosu.png",
            url: "http://radyomgm.canliyayinda.com/;stream.mp3"
        },
        {
            name: "Metro FM",
            logo: "stations/images-europe/turkey/Metro FM.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/METRO_FM128AAC_SC"
        },
        {
            name: "NTV Radyo",
            logo: "stations/images-europe/turkey/NTV Radyo.png",
            url: "http://ntvrdfms.radyotvonline.com/smil/smil:ntvradyo.smil/playlist.m3u8"
        },
        {
            name: "Number 1",
            logo: "stations/images-europe/turkey/Number 1.png",
            url: "https://n10101m.mediatriple.net/numberone"
        },
        {
            name: "Pal Nostalji",
            logo: "stations/images-europe/turkey/Pal Nostalji.png",
            url: "http://shoutcast.radyogrup.com:1010/;stream/1"
        },
        {
            name: "Power FM",
            logo: "stations/images-europe/turkey/Power FM.png",
            url: "https://listen.powerapp.com.tr/powerfm/abr/playlist.m3u8"
        },
        {
            name: "Power Pop",
            logo: "stations/images-europe/turkey/Power Pop.png",
            url: "https://listen.powerapp.com.tr/powerpop/abr/playlist.m3u8"
        },
        {
            name: "Power Türk",
            logo: "stations/images-europe/turkey/Power Türk.png",
            url: "https://live.powerapp.com.tr/powerturk/abr/playlist.m3u8"
        },
        {
            name: "Radyo 7",
            logo: "stations/images-europe/turkey/Radyo 7.png",
            url: "https://ssl4.radyotvonline.com/radyo7/radyo7_test.stream/playlist.m3u8"
        },
        {
            name: "Radyo D",
            logo: "stations/images-europe/turkey/Radyo D.png",
            url: "https://moondigitaledge2.radyotvonline.net/radyod/playlist.m3u8"
        },
        {
            name: "Radyo Fenomen",
            logo: "stations/images-europe/turkey/Radyo Fenomen.png",
            url: "https://live.radyofenomen.com/fenomen/abr/playlist.m3u8"
        },
        {
            name: "Radyo Seymen",
            logo: "stations/images-europe/turkey/Radyo Seymen.png",
            url: "https://yayin.radyoseymen.com.tr:1070/stream"
        },
        {
            name: "Radyospor",
            logo: "stations/images-europe/turkey/Radyospor.png",
            url: "https://s12.canli-radyo.biz/stream/70/"
        },
        {
            name: "Radyo Turkuvaz",
            logo: "stations/images-europe/turkey/Radyo Turkuvaz.png",
            url: "https://trkvz-radyolar.ercdn.net/radyoturkuvaz/playlist.m3u8"
        },
        {
            name: "Radyo Viva",
            logo: "stations/images-europe/turkey/Radyo Viva.png",
            url: "https://radyoviva.radyotvonline.net/radyovivaaac"
        },
        {
            name: "Ribat FM",
            logo: "stations/images-europe/turkey/Ribat FM.png",
            url: "http://yayin1.canliyayin.org:7010/;"
        },
        {
            name: "Show Radyo",
            logo: "stations/images-europe/turkey/Show Radyo.png",
            url: "http://46.20.3.229/;"
        },
        {
            name: "SlowTürk",
            logo: "stations/images-europe/turkey/SlowTürk.png",
            url: "https://radyo.duhnet.tv/ak_dtvh_slowturk"
        },
        {
            name: "Süper FM",
            logo: "stations/images-europe/turkey/Süper FM.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/SUPER_FMAAC_SC"
        },
        {
            name: "TGRT FM",
            logo: "stations/images-europe/turkey/TGRT FM.png",
            url: "https://icecasttgrt.ihlasdigitalassets.com/tgrtfm"
        },
        {
            name: "Vav Radyo",
            logo: "stations/images-europe/turkey/Vav Radyo.png",
            url: "https://trkvz-radyolar.ercdn.net/radyovav/playlist.m3u8"
        },
        {
            name: "Virgin Radio",
            logo: "stations/images-europe/turkey/Virgin Radio.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/VIRGIN_RADIOAAC_SC"
        },
        {
            name: "Yön Radyo",
            logo: "stations/images-europe/turkey/Yön Radyo.png",
            url: "https://stream.radyolarburada.com/radio/8020/yonradyo"
        },
    ],
    "uk": [
        {
            name: "BBC Radio 1",
            logo: "stations/images-europe/uk/BBC Radio 1.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_one.m3u8"
        },
        {
            name: "BBC Radio 1Xtra",
            logo: "stations/images-europe/uk/BBC Radio 1Xtra.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_1xtra.m3u8"
        },
        {
            name: "BBC Radio 2",
            logo: "stations/images-europe/uk/BBC Radio 2.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_two.m3u8"
        },
        {
            name: "BBC Radio 3",
            logo: "stations/images-europe/uk/BBC Radio 3.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_three.m3u8"
        },
        {
            name: "BBC Radio 4",
            logo: "stations/images-europe/uk/BBC Radio 4.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_fourfm.m3u8"
        },
        {
            name: "BBC Radio 4 Extra",
            logo: "stations/images-europe/uk/BBC Radio 4 Extra.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_four_extra.m3u8"
        },
        {
            name: "BBC Radio 5 Live",
            logo: "stations/images-europe/uk/BBC Radio 5 Live.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_five_live.m3u8"
        },
        {
            name: "BBC Radio 6 Music",
            logo: "stations/images-europe/uk/BBC Radio 6 Music.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_6music.m3u8"
        },
        {
            name: "Absolute Radio",
            logo: "stations/images-europe/uk/Absolute Radio.png",
            url: "http://84.32.44.251/radiofeeds.php?station=absoluteradiohigh-aac"
        },
        {
            name: "Absolute 80s",
            logo: "stations/images-europe/uk/Absolute 80s.png",
            url: "http://84.32.44.251/radiofeeds.php?station=absolute80shigh-aac"
        },
        {
            name: "Absolute 90s",
            logo: "stations/images-europe/uk/Absolute 90s.png",
            url: "http://84.32.44.251/radiofeeds.php?station=absolute90shigh-aac"
        },
        {
            name: "Absolute Classic Rock",
            logo: "stations/images-europe/uk/Absolute Classic Rock.png",
            url: "http://84.32.44.251/radiofeeds.php?station=absoluteclassicrockhigh-aac"
        },
        {
            name: "Absolute Country",
            logo: "stations/images-europe/uk/Absolute Country.png",
            url: "http://84.32.44.251/radiofeeds.php?station=absolutecountryhigh-aac"
        },
        {
            name: "BFBS UK",
            logo: "stations/images-europe/uk/BFBS UK.png",
            url: "https://listen-ssvcbfbs.sharp-stream.com/ssvcbfbs1.aac"
        },
        {
            name: "Boom Radio",
            logo: "stations/images-europe/uk/Boom Radio.png",
            url: "https://listen-boomradio.sharp-stream.com/65_boom_radio_live_64"
        },
        {
            name: "Capital FM",
            logo: "stations/images-europe/uk/Capital FM.png",
            url: "https://media-ssl.musicradio.com/CapitalUK"
        },
        {
            name: "Capital Anthems",
            logo: "stations/images-europe/uk/Capital Anthems.png",
            url: "https://media-ssl.musicradio.com/CapitalAnthems"
        },
        {
            name: "Capital Dance",
            logo: "stations/images-europe/uk/Capital Dance.png",
            url: "https://media-ssl.musicradio.com/CapitalDance"
        },
        {
            name: "Capital XTRA",
            logo: "stations/images-europe/uk/Capital Xtra.png",
            url: "https://media-ssl.musicradio.com/CapitalXTRANational"
        },
        {
            name: "Capital XTRA Reloaded",
            logo: "stations/images-europe/uk/Capital XTRA Reloaded.png",
            url: "https://media-ssl.musicradio.com/CapitalXTRAReloaded"
        },
        {
            name: "Classic FM",
            logo: "stations/images-europe/uk/Classic FM.png",
            url: "https://media-ssl.musicradio.com/ClassicFM"
        },
        {
            name: "Fix Radio",
            logo: "stations/images-europe/uk/Fix Radio.png",
            url: "https://stream.rcs.revma.com/pq7npt2nzbuvv"
        },
        {
            name: "Fun Kids",
            logo: "stations/images-europe/uk/Fun Kids.png",
            url: "https://listen-funkids.sharp-stream.com/funkids.mp3"
        },
        {
            name: "GB News Radio",
            logo: "stations/images-europe/uk/GB News Radio.png",
            url: "https://listen-gbnews.sharp-stream.com/gbnews.mp3"
        },
        {
            name: "Greatest Hits Radio",
            logo: "stations/images-europe/uk/Greatest Hits Radio.png",
            url: "http://84.32.44.251/radiofeeds.php?station=net2national-aac"
        },
        {
            name: "Greatest Hits Radio 60s",
            logo: "stations/images-europe/uk/Greatest Hits Radio 60s.png",
            url: "http://84.32.44.251/radiofeeds.php?station=ghr60s-aac"
        },
        {
            name: "Greatest Hits Radio 70s",
            logo: "stations/images-europe/uk/Greatest Hits Radio 70s.png",
            url: "http://84.32.44.251/radiofeeds.php?station=ghr70s-aac"
        },
        {
            name: "Greatest Hits Radio 80s",
            logo: "stations/images-europe/uk/Greatest Hits Radio 80s.png",
            url: "http://84.32.44.251/radiofeeds.php?station=ghr80s-aac"
        },
        {
            name: "Gold Radio",
            logo: "stations/images-europe/uk/Gold Radio.png",
            url: "https://media-ssl.musicradio.com/Gold"
        },
        {
            name: "Heart",
            logo: "stations/images-europe/uk/Heart UK.png",
            url: "https://media-ssl.musicradio.com/HeartUK"
        },
        {
            name: "Heart Dance",
            logo: "stations/images-europe/uk/Heart-Dance.png",
            url: "https://media-ssl.musicradio.com/HeartDance"
        },
        {
            name: "Heart 70s",
            logo: "stations/images-europe/uk/Heart 70s.png",
            url: "https://media-ssl.musicradio.com/Heart70s"
        },
        {
            name: "Heart 80s",
            logo: "stations/images-europe/uk/Heart 80s.png",
            url: "https://media-ssl.musicradio.com/Heart80s"
        },
        {
            name: "Heart 90s",
            logo: "stations/images-europe/uk/Heart 90s.png",
            url: "https://media-ssl.musicradio.com/Heart90s"
        },
        {
            name: "Heart 00s",
            logo: "stations/images-europe/uk/Heart 00s.png",
            url: "https://media-ssl.musicradio.com/Heart00s"
        },
        /*{
            name: "Heart Xmas",
            logo: "stations/images-europe/uk/Heart Xmas.png",
            url: "https://media-ssl.musicradio.com/HeartXmas"
        },*/
        {
            name: "Hits Radio",
            logo: "stations/images-europe/uk/Hits Radio.png",
            url: "http://84.32.44.251/radiofeeds.php?station=hits-aac"
        },
        {
            name: "Hits Radio 90s",
            logo: "stations/images-europe/uk/Hits Radio 90s.png",
            url: "http://84.32.44.251/radiofeeds.php?station=hitsradio90s-aac"
        },
        {
            name: "Hits Radio 00s",
            logo: "stations/images-europe/uk/Hits Radio 00s.png",
            url: "http://84.32.44.251/radiofeeds.php?station=hitsradio00s-aac"
        },
        {
            name: "Hits Radio Chilled",
            logo: "stations/images-europe/uk/Hits Radio Chilled.png",
            url: "http://84.32.44.251/radiofeeds.php?station=magicchilled-aac"
        },
        {
            name: "Hits Radio Pride",
            logo: "stations/images-europe/uk/Hits Radio Pride.png",
            url: "http://84.32.44.251/radiofeeds.php?station=hitsradiopride-aac"
        },
        {
            name: "Jazz FM",
            logo: "stations/images-europe/uk/Jazz FM.png",
            url: "http://84.32.44.251/radiofeeds.php?station=jazzhigh-aac"
        },
        {
            name: "Kerrang! Radio",
            logo: "stations/images-europe/uk/Kerrang! Radio.png",
            url: "http://84.32.44.251/radiofeeds.php?station=kerrang-aac"
        },
        {
            name: "KISS",
            logo: "stations/images-europe/uk/Kiss.png",
            url: "http://84.32.44.251/radiofeeds.php?station=kissnational-aac"
        },
        {
            name: "KISSTORY",
            logo: "stations/images-europe/uk/Kisstory.png",
            url: "http://84.32.44.251/radiofeeds.php?station=kisstory-aac"
        },
        {
            name: "KISSTORY R&B",
            logo: "stations/images-europe/uk/KISSTORY R&B.png",
            url: "http://84.32.44.251/radiofeeds.php?station=kisstoryrb-aac"
        },
        {
            name: "LBC",
            logo: "stations/images-europe/uk/LBC.png",
            url: "https://media-ssl.musicradio.com/LBCUK"
        },
        {
            name: "LBC News",
            logo: "stations/images-europe/uk/LBC News.png",
            url: "https://media-ssl.musicradio.com/LBCNewsUK"
        },
        {
            name: "Magic Radio",
            logo: "stations/images-europe/uk/Magic Radio.png",
            url: "http://84.32.44.251/radiofeeds.php?station=magicnational-aac"
        },
        {
            name: "Magic Classical",
            logo: "stations/images-europe/uk/Magic Classical.png",
            url: "http://84.32.44.251/radiofeeds.php?station=scala-aac"
        },
        {
            name: "Magic at the Musicals",
            logo: "stations/images-europe/uk/Magic at the Musicals.png",
            url: "http://84.32.44.251/radiofeeds.php?station=magicmusicals-aac"
        },
        {
            name: "Magic Mellow",
            logo: "stations/images-europe/uk/Magic Mellow.png",
            url: "http://84.32.44.251/radiofeeds.php?station=magicmellow-aac"
        },
        {
            name: "Magic Soul",
            logo: "stations/images-europe/uk/Magic Soul.png",
            url: "http://84.32.44.251/radiofeeds.php?station=magicsoul-aac"
        },
        {
            name: "Planet Rock",
            logo: "stations/images-europe/uk/Planet Rock.png",
            url: "http://84.32.44.251/radiofeeds.php?station=planetrock-aac"
        },
        {
            name: "Premier Christian Radio",
            logo: "stations/images-europe/uk/Premier Christian Radio.png",
            url: "https://pcr.streamguys1.com/pcrnational-96k.aac"
        },
        {
            name: "Premier Praise",
            logo: "stations/images-europe/uk/Premier Praise.png",
            url: "https://pcr.streamguys1.com/ppraise-96k.aac"
        },
        {
            name: "Radio X",
            logo: "stations/images-europe/uk/Radio X.png",
            url: "https://media-ssl.musicradio.com/RadioXUK"
        },
        {
            name: "Radio X Classic Rock",
            logo: "stations/images-europe/uk/Radio X Classic Rock.png",
            url: "https://media-ssl.musicradio.com/RadioXClassicRock"
        },
        {
            name: "Smooth UK",
            logo: "stations/images-europe/uk/Smooth.png",
            url: "https://media-ssl.musicradio.com/SmoothUK"
        },
        {
            name: "Smooth 80s",
            logo: "stations/images-europe/uk/Smooth 80s.png",
            url: "https://media-ssl.musicradio.com/Smooth80s"
        },
        {
            name: "Smooth Chill",
            logo: "stations/images-europe/uk/Smooth Chill.png",
            url: "https://media-ssl.musicradio.com/SmoothChill"
        },
        {
            name: "Smooth Country",
            logo: "stations/images-europe/uk/Smooth Country.png",
            url: "https://media-ssl.musicradio.com/SmoothCountry"
        },
        {
            name: "Smooth Relax",
            logo: "stations/images-europe/uk/Smooth Relax.png",
            url: "https://media-ssl.musicradio.com/SmoothRelax"
        },
        {
            name: "Sunrise Radio",
            logo: "stations/images-europe/uk/Sunrise Radio.png",
            url: "https://direct.sharp-stream.com/sunriseradio.mp3"
        },
        {
            name: "TalkRadio",
            logo: "stations/images-europe/uk/TalkRadio.png",
            url: "https://radio.talkradio.co.uk/stream"
        },
        {
            name: "talkSPORT",
            logo: "stations/images-europe/uk/talkSPORT.png",
            url: "https://radio.talksport.com/stream"
        },
        {
            name: "talkSPORT 2",
            logo: "stations/images-europe/uk/talkSPORT 2.png",
            url: "https://radio.talksport.com/stream2"
        },
        {
            name: "Times Radio",
            logo: "stations/images-europe/uk/Times Radio.png",
            url: "https://timesradio.wireless.radio/stream"
        },
        {
            name: "UCB 1",
            logo: "stations/images-europe/uk/UCB 1.png",
            url: "https://edge-audio-04-gos1.sharp-stream.com/ucbuk.mp3"
        },
        {
            name: "UCB 2",
            logo: "stations/images-europe/uk/UCB 2.png",
            url: "https://edge-audio-02-gos1.sharp-stream.com/ucbinspirational.mp3"
        },
        {
            name: "Virgin Radio UK",
            logo: "stations/images-europe/uk/Virgin Radio UK.png",
            url: "https://radio.virginradio.co.uk/stream"
        },
        {
            name: "Virgin Radio Chilled",
            logo: "stations/images-europe/uk/Virgin Radio Chilled.png",
            url: "https://radio.virginradio.co.uk/stream-chilled"
        },
        {
            name: "Virgin Radio Legends",
            logo: "stations/images-europe/uk/Virgin Radio Legends.png",
            url: "https://radio.virginradio.co.uk/stream-legends"
        },
    ],
    "ukraine": [
        {
            name: "Українське Радіо",
            logo: "stations/images-europe/ukraine/Українське Радіо.png",
            url: "http://radio.nrcu.gov.ua:8000/ur1-mp3"
        },
        {
            name: "Радіо Промінь",
            logo: "stations/images-europe/ukraine/Радіо Промінь.png",
            url: "http://radio.nrcu.gov.ua:8000/ur2-mp3"
        },
        {
            name: "Радіо Культура",
            logo: "stations/images-europe/ukraine/Радіо Культура.png",
            url: "http://radio.nrcu.gov.ua:8000/ur3-mp3"
        },
        { 
            name: "Авто Радіо",
            logo: "stations/images-europe/ukraine/Авто Радіо.png",
            url: "https://cast.mediaonline.net.ua/avtoradio"
        },
        {
            name: "Армія FM",
            logo: "stations/images-europe/ukraine/Армія FM.png",
            url: "https://icecast.armyfm.com.ua:8443/ArmyFM"
        },
        {
            name: "DJ FM",
            logo: "stations/images-europe/ukraine/DJ FM.png",
            url: "https://cast.fex.net/djfm_x"
        },
        {
            name: "Xiт FM",
            logo: "stations/images-europe/ukraine/Xiт FM.png",
            url: "https://online.hitfm.ua/HitFM_HD"
        },
        {
            name: "KISS FM",
            logo: "stations/images-europe/ukraine/KISS FM.png",
            url: "https://online.kissfm.ua/KissFM_HD"
        },
        {
            name: "Країна ФМ",
            logo: "stations/images-europe/ukraine/Країна ФМ.png",
            url: "http://185.65.246.132:8000/kiev128s.mp3"
        },
        {
            name: "Мелодія FM",
            logo: "stations/images-europe/ukraine/Мелодія FM.png",
            url: "https://online.melodiafm.ua/MelodiaFM_HD"
        },
        {
            name: "НАШЕ Радио",
            logo: "stations/images-europe/ukraine/НАШЕ Радио.png",
            url: "https://online.nasheradio.ua/NasheRadio_HD"
        },
        {
            name: "Радіо Люкс ФМ",
            logo: "stations/images-europe/ukraine/Радіо Люкс ФМ.png",
            url: "https://streamvideo.luxnet.ua/lux/smil:lux.stream.smil/playlist.m3u8"
        },
        {
            name: "NRJ Украина",
            logo: "stations/images-europe/ukraine/Energy.png",
            url: "https://cast.mediaonline.net.ua/nrj320"
        },
        {
            name: "Радіо НВ",
            logo: "stations/images-europe/ukraine/Радіо НВ.png",
            url: "https://online-radio.nv.ua/radionv.mp3"
        },
        {
            name: "Power FM",
            logo: "stations/images-europe/ukraine/Power FM.png",
            url: "https://cast.fex.net/power_x"
        },
        {
            name: "Radio Relax",
            logo: "stations/images-europe/ukraine/Radio Relax.png",
            url: "https://online.radiorelax.ua/RadioRelax_HD"
        },
        {
            name: "RadioROKS",
            logo: "stations/images-europe/ukraine/RadioROKS.png",
            url: "http://online.radioroks.ua/RadioROKS_HD"
        },
        {
            name: "Радіо Максимум",
            logo: "stations/images-europe/ukraine/Радіо Максимум.png",
            url: "https://streamvideo.luxnet.ua/maximum/smil:maximum.stream.smil/playlist.m3u8"
        },
        {
            name: "Радіо П'ятниця",
            logo: "stations/images-europe/ukraine/Радіо П'ятниця.png",
            url: "https://cast.mediaonline.net.ua/radiopyatnica320"
        },
        {
            name: "Радіо БАЙРАКТАР",
            logo: "stations/images-europe/ukraine/Радіо БАЙРАКТАР.png",
            url: "https://online.radiobayraktar.ua/RadioBayraktar_HD"
        },
        {
            name: "Стильне радіо Перец FM",
            logo: "stations/images-europe/ukraine/Стильне радіо Перец FM.png",
            url: "https://radio.perec.fm/radio-stilnoe"
        },
        {
            name: "Шлягер FM",
            logo: "stations/images-europe/ukraine/Шлягер FM.png",
            url: "https://cast.fex.net/shanson_x"
        },
    ],
    "uzbekistan": [
        // TODO: manage tokenized streams
        /*{
            name: "Radio O'zbekiston",
            logo: "stations/images-europe/uzbekistan/Radio O'zbekiston.png",
            url: "https://st2.mediabay.tv/Radio_Uzbekistan/playlist.m3u8?token=ca2521aa8e234e7ec4b74ae277ca00ed0af81b1d-24aa7a8236d700a4975061b8f57d8442-1735556951-1735546151"
        },
        {
            name: "Radio Yoshlar",
            logo: "stations/images-europe/uzbekistan/Radio Yoshlar.png",
            url: "https://st2.mediabay.tv/Radio_Yoshlar/playlist.m3u8?token=a27865010d3bce995f244753f955a55d56c717f3-21bb0294c0e6e1a7d25eb0eb151bec41-1735556951-1735546151"
        },
        {
            name: "Radio Mahalla",
            logo: "stations/images-europe/uzbekistan/Radio Mahalla.png",
            url: "https://st2.mediabay.tv/Radio_Mahalla/playlist.m3u8?token=f31a4e9654b01eb5190e4dd516249f6c9f7a051b-83ec327ce84d6d74dd718bed71d60130-1735556951-1735546151"
        },*/
        {
            name: "Oriat Dono",
            logo: "stations/images-europe/uzbekistan/Oriat Dono.png",
            url: "http://194.5.152.248:8000/dono"
        },
        {
            name: "O'zbegim Taronasi",
            logo: "stations/images-europe/uzbekistan/O'zbegim Taronasi.png",
            url: "http://fm101.uz:9900/fm101_low.aac"
        },
        /*{
            name: "Vodiy Sadosi",
            logo: "stations/images-europe/uzbekistan/Эхо Долины.png",
            url: "https://st2.mediabay.tv/Radio_Echo/playlist.m3u8?token=5149f572e31f0865fb6fa437ec16782594d0494b-ec86110324fd969684384a839988af93-1735556951-1735546151"
        },*/

    ],
    "wales": [
        {
            name: "BBC Radio Wales",
            logo: "stations/images-europe/wales/BBC Radio Wales.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_wales_fm.m3u8"
        },
        {
            name: "BBC Radio Cymru",
            logo: "stations/images-europe/wales/BBC Radio Cymru.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_cymru.m3u8"
        },
        {
            name: "BBC Radio Cymru 2",
            logo: "stations/images-europe/wales/BBC Radio Cymru 2.png",
            url: "https://a.files.bbci.co.uk/ms6/live/3441A116-B12E-4D2F-ACA8-C1984642FA4B/audio/simulcast/hls/nonuk/audio_syndication_low_sbr_v1/aks/bbc_radio_cymru_2.m3u8"
        },
    ],
    "westbank": [
        {
            name: "راديو أجيال",
            logo: "stations/images-europe/westbank/راديو أجيال.png",
            url: "https://streamer.mada.ps:8208/ajyal"
        },
        {
            name: "راديو انغام",
            logo: "stations/images-europe/westbank/راديو انغام.png",
            url: "http://streamer.mada.ps:8010/ANGHAM"
        },
        {
            name: "Radio 101",
            logo: "stations/images-europe/westbank/Radio 101.png",
            url: "http://streamer.mada.ps:8027/onefm"
        },
        {
            name: "راديو كلاسيك",
            logo: "stations/images-europe/westbank/راديو كلاسيك.png",
            url: "http://streamer.mada.ps:8037/classic"
        },
        {
            name: "راديو الموسيقى",
            logo: "stations/images-europe/westbank/راديو الموسيقى.png",
            url: "http://streamer.mada.ps:8039/musiconly"
        },
        {
            name: "راديو طرب",
            logo: "stations/images-europe/westbank/راديو طرب.png",
            url: "http://streamer.mada.ps:8012/tarab"
        },
        {
            name: "راديو رام الله",
            logo: "stations/images-europe/westbank/راديو رام الله.png",
            url: "http://streamer.mada.ps:8031/radioramallah"
        },
        {
            name: "راديو رام الله للقران الكريم",
            logo: "stations/images-europe/westbank/راديو رام الله للقران الكريم.png",
            url: "http://streamer.mada.ps:8029/quranfm"
        },
    ]
};

//stations["belgium"] = stations["belgium-nl"].concat(stations["belgium-fr"]);
//stations["switzerland"] = stations["switzerland-de"].concat(stations["switzerland-fr"]);
