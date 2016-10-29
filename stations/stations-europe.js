var country_properties = {
    "andorra": {
        relative_radius: 0.2,
    },
    "austria": {
        relative_radius: 1,
    },
    "belarus": {
        relative_radius: 1,
    },
    "belgium-nl": {
        relative_radius: 1,
    },
    "belgium-fr": {
        relative_radius: 1,
    },
    "bosnia": {
        relative_radius: 1,
    },
    "bulgaria": {
        relative_radius: 1,
    },
    "croatia": {
        relative_radius: 1,
    },
    "cyprus": {
        relative_radius: 1,
    },
    "czech": {
        relative_radius: 1,
    },
    "denmark": {
        relative_radius: 1,
    },
    "estonia": {
        relative_radius: 1,
    },
    "faroe": {
        relative_radius: 1,
    },
    "finland": {
        relative_radius: 1,
    },
    "france": {
        relative_radius: 1.05,
    },
    "germany": {
        relative_radius: 1,
    },
    "greece": {
        relative_radius: 1,
    },
    "hungary": {
        relative_radius: 1,
    },
    "iceland": {
        relative_radius: 1,
    },
    "iom": {
        relative_radius: 1,
    },
    "ireland": {
        relative_radius: 1,
    },
    "italy": {
        relative_radius: 1,
    },
    "jersey": {
        relative_radius: 0.1,
    },
    "latvia": {
        relative_radius: 1,
    },
    "liecht": {
        relative_radius: 0.2,
    },
    "lithuania": {
        relative_radius: 1,
    },
    "luxembourg": {
        relative_radius: 0.5,
    },
    "macedonia": {
        relative_radius: 1,
    },
    "moldova": {
        relative_radius: 1,
    },
    "netherlands": {
        relative_radius: 1,
    },
    "nireland": {
        relative_radius: 1,
    },
    "norway": {
        relative_radius: 1,
    },
    "poland": {
        relative_radius: 0.8,
    },
    "portugal": {
        relative_radius: 1,
    },
    "romania": {
        relative_radius: 1,
    },
    "russia": {
        relative_radius: 1.1,
    },
    "serbia": {
        relative_radius: 1,
    },
    "slovakia": {
        relative_radius: 1,
    },
    "slovenia": {
        relative_radius: 1,
    },
    "spain": {
        relative_radius: 1,
    },
    "sweden": {
        relative_radius: 1,
    },
    "switzerland-de": {
        relative_radius: 1,
    },
    "switzerland-fr": {
        relative_radius: 1,
    },
    "turkey": {
        relative_radius: 1,
    },
    "uk": {
        relative_radius: 1,
    },
    "ukraine": {
        relative_radius: 1,
    },
};

var stations = {
    "andorra": [
        {
            name: "RAC 1 89.0 FM",
            logo: "http://www.rac1.cat/rsc/images/logo.jpg?v=35683",
            url: "http://streaming3.radiocat.net:80/;",
        },
        {
            name: "RAC 105 FM",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Rac105.jpg/450px-Rac105.jpg",
            url: "http://37.59.18.212:8000/;"
        },

    ],
    "austria": [
        {
            name: "ORF Ö1",
            logo: "https://walls.io/files/walls/logo/uYknhUKNb32.png",
            url: "http://mp3stream3.apasf.apa.at:8000/;"
        },
        {
            name: "ORF Ö3",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Hitradio_%C3%963.svg/267px-Hitradio_%C3%963.svg.png",
            url: "http://mp3stream7.apasf.apa.at:8000/;"
        },
        {
            name: "ORF FM4",
            logo: "http://fm4.orf.at/v2static/images/fm4_logo.jpg",
            url: "http://mp3stream1.apasf.apa.at:8000/;"
        },
        {
            name: "KroneHit",
            logo: "http://www.kronehit.at/themes/main/img/logo_630x315.png",
            url: "http://raj.krone.at:80/kronehit-hd.mp3"
        },
    ],
    "belarus": [
        {
            name: "BR1",
            logo: "http://www.tvr.by/upload/iblock/6ac/6ac932b78bde184d6677820c526df3a4.jpg",
            url: "http://37.59.18.212:8000/;"
        },
        {
            name: "Радио Минск",
            logo: "http://bestradio.fm/uploads/posts/2013-05/1369028536_radio-minsk.jpg",
            url: "http://93.84.113.142:8000/radio"
        },
        {
            name: "Новое Радио",
            logo: "http://www.radiogrom.com/paint_new/logo_big/novoe_radio_online_moskva_logo_2015.jpg",
            url: "http://www.live.bn.by:8000/novoeradio_128"
        }
    ],
    "belgium-nl": [
        {
            name: "VRT Radio 1",
            logo: "https://www.muntpunt.be/sites/default/files/Activiteiten/logo_radio1_NIEUW_0.gif",
            url: "http://mp3.streampower.be/radio1-high"
        },
        {
            name: "VRT Klara",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Klara_logo.png",
            url: "http://mp3.streampower.be/klara-high"
        },
        {
            name: "VRT MNM",
            logo: "https://upload.wikimedia.org/wikipedia/en/3/36/MNM_logo.png",
            url: "http://mp3.streampower.be/mnm-high"
        },
        {
            name: "Studio Brussel",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/VRT_Studio_Brussel_logo.png/266px-VRT_Studio_Brussel_logo.png",
            url: "http://mp3.streampower.be/stubru-high"
        },
    ],
    "belgium-fr": [
        {
            name: "RTBF La Première",
            logo: "https://ssl-www.static.rtbf.be/radio/radio/images/logo/header/lapremiere.png",
            url: "http://ice1.infomaniak.ch:80/lapremiere-128.mp3"
        },
        {
            name: "RTBF Classic 21",
            logo: "https://ssl-www.static.rtbf.be/news/common/images/radio/logo/1400x1400/classic21-1400x1400.png",
            url: "http://ice4.infomaniak.ch:80/classic21-128.mp3"
        },
        {
            name: "RTBF Pure FM",
            logo: "http://marpimagecache.s3.amazonaws.com/image/11_300x170_2016-01-12-09-45-32-590.png",
            url: "http://ice5.infomaniak.ch:80/purefm-128.mp3"
        },
    ],
    "bulgaria": [
        {
            name: "BNR Horizont",
            logo: "http://static.radio.net/images/broadcasts/ea/2a/16924/c175.png",
            url: "http://stream.bnr.bg:8002/horizont.mp3"
        },
        {
            name: "Alpha Radio",
            logo: "http://cdn-radiotime-logos.tunein.com/s24925q.png",
            url: "http://alpharadio.bg:8000/stream"
        },
        {
            name: "Радио FM+",
            logo: "http://autism2014.karindom.org/bundles/autismconf/images/radio-fmplus-logo.jpg",
            url: "http://fmplus-stream.atlantis.bg:8000/fmplus.ogg"
        },
        {
            name: "Radio Melody",
            logo: "https://upload.wikimedia.org/wikipedia/en/e/e8/Melody_radio_bulgaria.png",
            url: "http://46.10.150.123:80/melody.mp3"
        },
    ],
    "czech": [
        {
            name: "ČRo Radiožurnál",
            logo: "http://www.radiotv.cz/wp-content/uploads/2009/04/radiozurnal_mainlogotyp.jpg",
            url: "http://amp.cesnet.cz:8000/cro1-256.ogg"
        },
        {
            name: "ČRo Dvojka",
            logo: "http://www.sonskladno.cz/wp-content/uploads/2015/01/52_275_5150548978753_dvojka.jpg",
            url: "http://amp.cesnet.cz:8000/cro2-256.ogg"
        },
        {
            name: "ČRo Vltava",
            logo: "http://www.janatrojanova.cz/soubory/obrazky/moderovani/cesky-rozhlas-vltava/ceskyrozhlasvltava.jpg",
            url: "http://amp.cesnet.cz:8000/cro3-256.ogg"
        },
        {
            name: "Evropa 2",
            logo: "https://img.static.lagardere.cz/evropa2/logo-evropa2.png",
            url: "http://icecast3.play.cz:80/evropa2-128.mp3"
        },
        {
            name: "Evropa 2",
            logo: "https://img.static.lagardere.cz/evropa2/logo-evropa2.png",
            url: "http://icecast3.play.cz:80/evropa2-128.mp3"
        },
        {
            name: "Frekvence 1",
            logo: "https://i.lagardere.cz/frekvence1/u/logo-f1-new.png",
            url: "http://icecast4.play.cz:80/frekvence1-128.mp3"
        },
    ],
    "denmark": [
        {
            name: "DR P1",
            logo: "https://pbs.twimg.com/profile_images/378800000774293385/9bcb1103214c0e25e701eb5da3cc22cd_400x400.jpeg",
            url: "http://live-icy.gss.dr.dk:8000/A/A03H.mp3"
        },
        {
            name: "DR P2",
            logo: "http://static.radio.dk/images/broadcasts/a0/1e/12577/c175.png",
            url: "http://live-icy.gss.dr.dk:8000/A/A04H.mp3"
        },
        {
            name: "DR P3",
            logo: "https://pbs.twimg.com/profile_images/461479340476076034/zbIhtcBh_400x400.jpeg",
            url: "http://live-icy.gss.dr.dk:8000/A/A05H.mp3"
        },
        {
            name: "DR P5",
            logo: "http://static.radio.net/images/broadcasts/9c/be/12573/c175.png",
            url: "http://live-icy.gss.dr.dk:8000/A/A25H.mp3"
        },
        {
            name: "The Voice",
            logo: "http://cdn-radiotime-logos.tunein.com/s9085q.png",
            url: "http://195.184.101.203/voice128"
        },
    ],
    "estonia": [
        {
            name: "Vikerraadio",
            logo: "http://vignette4.wikia.nocookie.net/logopedia/images/8/85/Err-vikerraadio.jpg/revision/latest?cb=20140525000140",
            url: "http://icecast.err.ee:80/vikerraadio.mp3"
        },
        {
            name: "Raadio 2",
            logo: "http://www.bassimees.eu/liblikas/wordpress/wp-content/uploads/2015/04/Raadio2.jpg",
            url: "http://icecast.err.ee:80/raadio2.mp3"
        },
        {
            name: "Klassikaraadio",
            logo: "http://static.err.ee/gridfs/26C18F3204D41DB8C7133F91246217683AF8CE1F0E7C8AC530740A1ECB548E2E.jpg?width=752&crop=(14%2C0%2C640.58%2C354)&cropxunits=650&cropyunits=354&rotate=0&s.contrast=0&s.saturation=0&s.brightness=0&s.grayscale=0&s.alpha=1&quality=95&s.roundcorners=0%2C0%2C0%2C0&format=jpg",
            url: "http://icecast.err.ee:80/klassikaraadio.mp3"
        },
        {
            name: "Raadio 4",
            logo: "http://radiovolna.net/uploads/posts/2013-10/1382877491_radio-4-raadio-4.png",
            url: "http://icecast.err.ee:80/raadio4.mp3"
        },
    ],
    "faroe": [
        {
            name: "Kringvarp Føroya",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Kringvarp_foroya.jpg/200px-Kringvarp_foroya.jpg",
            url: "http://netvarp.kringvarp.fo:443/uvhm"
        },{
            name: "Rás2",
            logo: "https://upload.wikimedia.org/wikipedia/en/6/69/Ras2logo.png",
            url: "http://stream.ras2.fo:8020/ras2"
        },
    ],
    "finland": [
        {
            name: "YLE Radio 1",
            logo: "https://pbs.twimg.com/profile_images/1874214728/Yle-Radio1-facebook_400x400.jpg",
            url: "http://yleuni-f.akamaihd.net/i/yleliveradiohd_1@113878/master.m3u8"
        },
        {
            name: "YLE Puhe",
            logo: "https://pbs.twimg.com/profile_images/1874986275/logo_400x400.jpg",
            url: "http://yleuni-f.akamaihd.net/i/yleliveradiohd_5@113882/master.m3u8"
        },
        {
            name: "Bassoradio",
            logo: "http://www.basso.fi/app/uploads/2015/07/basso_default.jpg",
            url: "http://stream.basso.fi:8000/stream"
        },
        {
            name: "Iskelmä",
            logo: "https://upload.wikimedia.org/wikipedia/fi/archive/d/d9/20150114195300!Iskelm%C3%A4.png",
            url: "http://stream2.bauermedia.fi/isk-hki.mp3"
        },
        {
            name: "Kiss",
            logo: "http://radio.nl/i/809688/webtext_image/445/970/kiss-vervangt-radiozender-the-voice-in-finland",
            url: "http://stream2.bauermedia.fi/kiss.mp3"
        },
        {
            name: "Radio Aalto",
            logo: "http://www.radioaalto.fi/channel/logo-og.png",
            url: "http://icelive0.80596-icelive0.cdn.qbrick.com/10544/80596_RadioAalto.mp3"
        },
        {
            name: "Radio City",
            logo: "http://www.radiocity.fi/templates/radiocity/images/radiocity_logo_round.svg",
            url: "http://stream2.bauermedia.fi/rc-hki.mp3"
        },
        {
            name: "Radio Moreeni",
            logo: "https://upload.wikimedia.org/wikipedia/fi/thumb/1/18/Moreeni_logo.png/220px-Moreeni_logo.png",
            url: "http://153.1.15.29:8080/moreeni.mp3"
        },
        {
            name: "Radio Nova",
            logo: "http://www.radionova.fi/templates/radionova/images/radio-nova-logo.svg",
            url: "http://stream3.bauermedia.fi/nova.mp3"
        },
        {
            name: "Radio NRJ",
            logo: "http://www.nrj.fr/img/logo-nrj.svg",
            url: "http://cdn.nrjaudio.fm/adwz1/fi/35001/mp3_128.mp3"
        },
        {
            name: "Radio Rock",
            logo: "http://cdn-radiotime-logos.tunein.com/s84138q.png",
            url: "http://icelive0.80596-icelive0.cdn.qbrick.com/10545/80596_RadioRock.mp3"
        },
        {
            name: "Radio Suomipop",
            logo: "http://www.radiosuomipop.fi/channel/logo-og.png",
            url: "http://icelive0.80596-icelive0.cdn.qbrick.com/10555/80596_RadioSuomipop.mp3"
        },
        {
            name: "Radio Vaasa",
            logo: "https://pbs.twimg.com/profile_images/904224171/radiovaasa_fb_400x400.jpg",
            url: "http://stream.radiovaasa.fi:8000/radiovaasa.mp3"
        },
        {
            name: "Sea FM",
            logo: "http://www.seafm.fi/images/SEAFM_LOGO_2015.jpg",
            url: "http://s3.myradiostream.com:4976/;"
        },
    ],
    "france": [
        {
            name: "FIP (national)",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/FIP_logo.png",
            url: "http://direct.fipradio.fr/live/fip-midfi.mp3"
        },
        {
            name: "France Inter",
            logo: "https://upload.wikimedia.org/wikipedia/commons/b/b4/France_Inter.png",
            url: "http://direct.franceinter.fr/live/franceinter-midfi.mp3?ID=f9fbk29m84"
        },
        {
            name: "France Info",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/France_Info.png",
            url: "http://direct.franceinfo.fr/live/franceinfo-midfi.mp3?ID=f9fbk29m84"
        },
        {
            name: "France Musique",
            logo: "https://upload.wikimedia.org/wikipedia/commons/c/c4/France_Musique_logo.png",
            url: "http://direct.francemusique.fr/live/francemusique-midfi.mp3?ID=f9fbk29m84"
        },
        {
            name: "France Culture",
            logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/France_Culture_logo.png",
            url: "http://direct.franceculture.fr/live/franceculture-midfi.mp3?ID=f9fbk29m84"
        },
        {
            name: "NRJ",
            logo: "http://www.nrj.fr/img/logo-nrj.svg",
            url: "http://cdn.nrjaudio.fm/audio1/fr/30001/mp3_128.mp3?origine=listenlive"
        },
        {
            name: "RTL",
            logo: "http://www.rtlgroup.com/files/png1/RTLRadiofr_262x175.png",
            url: "http://ais.rtl.fr:80/rtl-1-44-128"
        },
        {
            name: "RTL2",
            logo: "http://static.rtl2.fr/versions/www/6.0.170/img/rtl2_fb.jpg",
            url: "http://ais.rtl.fr:80/rtl2-1-44-128"
        },
        {
            name: "Fun Radio",
            logo: "https://upload.wikimedia.org/wikipedia/en/7/75/FunRadio_France.png",
            url: "http://ais.rtl.fr:80/fun-1-44-128"
        },

    ],
    "germany": [
        {
            name: "Deutschlandfunk",
            logo: "http://static.radio.de/images/broadcasts/25/3f/1521/c175.png",
            url: "http://dradio_mp3_dlf_m.akacast.akamaistream.net/7/249/142684/v1/gnl.akacast.akamaistream.net/dradio_mp3_dlf_m"
        },
        {
            name: "Deutschlandradio Kultur",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Logo_Deutschlandradio_Kultur.svg/640px-Logo_Deutschlandradio_Kultur.svg.png",
            url: "http://stream.dradio.de/7/530/142684/v1/gnl.akacast.akamaistream.net/dradio_mp3_dkultur_m"
        },
        {
            name: "Bayern 1",
            logo: "http://www.br.de/ressourcen/bilder/programmfahne_mit_logo/b1-wellenlogo100~_v-img__16__9__xl_-d31c35f8186ebeb80b0cd843a7c267a0e0c81647.jpg?version=d7e13",
            url: "http://br-mp3-bayern1obb-m.akacast.akamaistream.net/7/273/142690/v1/gnl.akacast.akamaistream.net/br_mp3_bayern1obb_m"
        },
        {
            name: "Bayern 2",
            logo: "http://www.br.de/ressourcen/bilder/programmfahne_mit_logo/b2-wellenlogo100~_v-img__16__9__xl_-d31c35f8186ebeb80b0cd843a7c267a0e0c81647.jpg?version=019e7",
            url: "http://br-mp3-bayern2sued-m.akacast.akamaistream.net/7/731/256282/v1/gnl.akacast.akamaistream.net/br_mp3_bayern2sued_m"
        },
        {
            name: "Bayern 3",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bayern3_logo_2015.svg/2000px-Bayern3_logo_2015.svg.png",
            url: "http://br-mp3-bayern3-m.akacast.akamaistream.net/7/442/142692/v1/gnl.akacast.akamaistream.net/br_mp3_bayern3_m"
        },
        {
            name: "hr1",
            logo: "https://upload.wikimedia.org/wikipedia/en/0/00/HR_Dachmarke.PNG",
            url: "http://hr-mp3-m-h1.akacast.akamaistream.net/7/783/142131/v1/gnl.akacast.akamaistream.net/hr-mp3-m-h1"
        },
        {
            name: "hr2",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/HR2.svg/2000px-HR2.svg.png",
            url: "http://hr-mp3-m-h2.akacast.akamaistream.net/7/786/142132/v1/gnl.akacast.akamaistream.net/hr-mp3-m-h2"
        },
        {
            name: "RTL Radio",
            logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/RTL_Radio_104_6.svg",
            url: "http://stream.104.6rtl.com/rtl-live/mp3-128/www.listenlive.eu:pls-rtl_air/"
        },
    ],
    "hungary": [
        {
            name: "MR1-Kossuth Rádió",
            logo: "http://radjo.hu/wp-content/uploads/2015/01/kossuth_radio_logo.jpg",
            url: "http://stream001.radio.hu:8080/mr1.mp3"
        },
        {
            name: "MR2-Petofi Rádió",
            logo: "http://www.music.hu/pictures/22/resized/11297_zene_w800_h600.jpeg",
            url: "http://stream001.radio.hu:8080/mr2.mp3"
        },
        {
            name: "MR3-Bartók Rádió",
            logo: "http://vignette1.wikia.nocookie.net/logopedia/images/c/ce/MR3-BARTOK.png/revision/latest?cb=20150704144601",
            url: "http://stream001.radio.hu:8080/mr3.mp3"
        },
        {
            name: "Music FM",
            logo: "http://www.musicfm.hu/sites/default/files/styles/head-fooldal/public/head-fooldal/em_head_foold.jpg?itok=UbLJdydP",
            url: "http://stream.musicfm.hu:8000/musicfm.mp3"
        },
    ],
    "iceland": [
        {
            name: "Rás 1",
            logo: "http://www.ruv.is/sites/default/files/ras1-main-logo.jpg",
            url: "http://sip-live.hds.adaptive.level3.net/hls-live/ruv-ras1/_definst_/live.m3u8"
        },
        {
            name: "Rás 2",
            logo: "http://www.ruv.is/sites/default/files/ras2-main-logo.jpg",
            url: "http://sip-live.hds.adaptive.level3.net/hls-live/ruv-ras2/_definst_/live.m3u8"
        },
        {
            name: "Útvarp Saga",
            logo: "http://utvarpsaga.is/file/2016/05/merki-toppur.png",
            url: "http://radio.is:443/saga"
        },
        {
            name: "Bylgjan 98,9",
            logo: "https://static-media.streema.com/media/object-images/3ce71e1f401554d4d004a91888272f7c.jpg",
            url: "http://icecast.365net.is:8000/orbbylgjan.aac"
        },
    ],
    "iom": [
        {
            name: "Manx Radio",
            logo: "https://upload.wikimedia.org/wikipedia/en/b/b1/Manx_Radio_logo.png",
            url: "http://tx.sharp-stream.com/http_live.php?i=manxradiofm.mp3&device=ukradioplayermobile"
        },
    ],
    "italy": [
        {
            name: "RAI Radio 1",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Rai_Radio_1.svg/2000px-Rai_Radio_1.svg.png",
            url: "http://icestreaming.rai.it/1.mp3"
        },
        {
            name: "RAI Radio 2",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rai_Radio_2_logo_(2010).svg/2000px-Rai_Radio_2_logo_(2010).svg.png",
            url: "http://icestreaming.rai.it/2.mp3"
        },
        {
            name: "RAI Radio 3",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Rai_Radio3_2010_Logo.png",
            url: "http://icestreaming.rai.it/3.mp3"
        },
        {
            name: "RAI FD4",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Rai_Radio_FD4_logo_(2010).svg/570px-Rai_Radio_FD4_logo_(2010).svg.png",
            url: "http://icestreaming.rai.it/4.mp3"
        },
        {
            name: "Radio Dimensione Suono (RDS)",
            logo: "http://www.storiaradiotv.it/LOGO%20RDS.gif",
            url: "http://www.rds.it:8000/stream"
        },
        {
            name: "RTL 102.5",
            logo: "http://is2.mzstatic.com/image/thumb/Purple62/v4/04/6f/c8/046fc808-4fba-0c18-fc8f-8403e544fcea/source/1200x630bf.jpg",
            url: "http://shoutcast.rtl.it:3010/stream/1/"
        },
    ],
    "latvia": [
        {
            name: "Latvijas Radio 1",
            logo: "http://vignette3.wikia.nocookie.net/logopedia/images/b/be/Latvijas_Radio_1.png/revision/latest?cb=20141212000922",
            url: "http://lr1mp1.latvijasradio.lv:8012/;"
        },
        {
            name: "Latvijas Radio 2",
            logo: "http://ww0.latvijasradio.lv/logo/lr_2_liels.jpg",
            url: "http://lr2mp1.latvijasradio.lv:8002/;"
        },
        {
            name: "European Hit Radio",
            logo: "https://static-media.streema.com/media/object-images/f9a3489060fe3d9e71924eee7536ab91.jpg",
            url: "http://stream.europeanhitradio.com:8000/ehr.ogg"
        },
        {
            name: "Radio Skonto",
            logo: "https://lh6.ggpht.com/yzVwd7vAwgnbPiSxZknu6Hpmqs4iE-8fAaBFgJ06Sd94AKQd114hxtcxm9MczMhrvijJ=w300",
            url: "http://skonto.ls.lv:8002/mp3"
        },
        {
            name: "Radio SWH",
            logo: "http://www.radioswh.lv/wp-content/uploads/logo/swh_logo_tumss_fons.png",
            url: "http://80.232.162.149:8000/swh96mp3"
        },
        {
            name: "TOPradio",
            logo: "http://www.topradio.lv/res/topradio_Best.jpg",
            url: "http://195.13.200.164:8000/;"
        },
    ],
    "liecht": [
        {
            name: "Radio Liechtenstein",
            logo: "http://static.radio.net/images/broadcasts/ce/05/4430/c175.png",
            url: "http://live.radiol.li:8000/live"
        },
    ],
    "lithuania": [
        {
            name: "Lietuvos Radijas 1",
            logo: "http://grybauskaite1.lrp.lt/images/43045/big_lietuvos_radijas.jpg",
            url: "http://82.135.234.195:8000/lr.mp3"
        },
        {
            name: "Lietuvos Radijas Klasika",
            logo: "http://www.draugauki.me/wp-content/uploads/2011/08/lietuvos-radijas_klasika.jpg",
            url: "http://82.135.234.195:8000/klasika.mp3"
        },
        {
            name: "Lietuvos Radijas Opus 3",
            logo: "http://placehold.it/80x80",
            url: "http://82.135.234.195:8000/opus3.mp3"
        },
        {
            name: "European Hit Radio",
            logo: "https://upload.wikimedia.org/wikipedia/en/d/d7/European_Hit_Radio_logo.jpg",
            url: "http://82.135.234.195:8000/ehr.mp3"
        },
        {
            name: "M-1",
            logo: "http://is3.mzstatic.com/image/thumb/Purple/d0/5f/8a/mzl.kipnfqaq.png/0x0ss-85.jpg",
            url: "http://radio.m-1.fm:80/m1/mp3"
        },
    ],
    "luxembourg": [
        {
            name: "RTL Radio Lëtzebuerg",
            logo: "http://www.liveradio.ie/files/images/106815/resized/180x172c/rtl.png",
            url: "http://sc-rtllive.newmedia.lu:80/;"
        },
        {
            name: "EldoRadio",
            logo: "https://static-media.streema.com/media/object-images/beb88af4143f9ba617663d6855e6d1f9.jpg",
            url: "http://81.92.238.33/;"
        },
    ],
    "moldova": [
        {
            name: "Radio Moldova Actualităţi",
            logo: "http://www.liveradio.ie/files/images/106871/resized/180x172c/trm.jpg",
            url: "http://radiolive.trm.md:8000/PGM1_128kb"
        },
        {
            name: "Radio Moldova Muzical",
            logo: "http://1.bp.blogspot.com/-jrNz4uIxLqI/UJFYIqcT3yI/AAAAAAAAAjU/_rCEUtq6Rtk/s320/radio-moldova-muzical.jpg",
            url: "http://radiolive.trm.md:8000/RM-muzical-128"
        },
        {
            name: "Radio Moldova Tineret",
            logo: "http://3.bp.blogspot.com/-qB5zX9ejtwI/UTxbPSbxlMI/AAAAAAAABkM/i-qyq3Xnn_E/s1600/radio-moldova-tineret.jpg",
            url: "http://radiolive.trm.md:8000/RM-tineret-128"
        },
    ],
    "netherlands": [
        {
            name: "Radio 1",
            logo: "https://www.mp3streams.nl/images/zenderlogo/radio1.png",
            url: "http://icecast.omroep.nl/radio1-bb-mp3"
        },
        {
            name: "Radio 2",
            logo: "https://www.mp3streams.nl/images/zenderlogo/radio2.png",
            url: "http://icecast.omroep.nl/radio2-bb-mp3"
        },
        {
            name: "3FM",
            logo: "https://www.paradiso.nl/upload_mm/a/7/0/11643_NPO_RD3FM_Logo_RGB_1200dpi.jpg",
            url: "http://icecast.omroep.nl/3fm-bb-mp3"
        },
        {
            name: "BNR Nieuwsradio",
            logo: "https://www.bnr.nl/img/bnr/static/touch-icon-highres.png?v=5b5df2a3",
            url: "http://icecast-bnr.cdp.triple-it.nl/bnr_aac_32_04",
        },
        {
            name: "Q-Music",
            logo: "http://i.imgur.com/NFUwo3K.jpg",
            url: "http://icecast-qmusic.cdp.triple-it.nl/Qmusic_nl_live_32.aac",
        },
        {
            name: "Radio 538",
            logo: "http://www.radiodigitaal.nl/channelimages/RADIO_538.png",
            url: "http://vip-icecast.538.lw.triple-it.nl:80/RADIO538_MP3",
        },
    ],
    "norway": [
        {
            name: "NRK P1",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/NRK_P1_logo_2011.svg/320px-NRK_P1_logo_2011.svg.png",
            url: "http://lyd.nrk.no:80/nrk_radio_p1pluss_mp3_h"
        },
        {
            name: "NRK P2",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/NRK_P2_Logo.svg/2000px-NRK_P2_Logo.svg.png",
            url: "http://lyd.nrk.no:80/nrk_radio_p2_mp3_h"
        },
        {
            name: "NRK P3",
            logo: "http://p3.no/wp-content/uploads/2014/03/NRKP3_rgb.png",
            url: "http://lyd.nrk.no:80/nrk_radio_p3_mp3_h"
        },
        {
            name: "P4",
            logo: "http://2.bp.blogspot.com/-V2JIsyw3W9k/UuKcPSNKujI/AAAAAAAAd6I/Le5q_bAujfk/s1600/P4+logo+2014.png",
            url: "http://stream.p4.no/p4_mp3_hq"
        },
    ],
    "poland": [
        {
            name: "Polskie Radio 1",
            logo: "http://seeklogo.com/images/P/Polskie_Radio_1-logo-AA6C8C9D16-seeklogo.com.gif",
            url: "http://stream3.polskieradio.pl:8900/;"
        },
        {
            name: "Polskie Radio 2",
            logo: "http://images.all-free-download.com/images/graphiclarge/polskie_radio_2_109510.jpg",
            url: "http://stream3.polskieradio.pl:8902/;"
        },
        {
            name: "Polskie Radio 3",
            logo: "http://www.gmkfreelogos.com/logos/P/img/Polskie_Radio_3.gif",
            url: "http://stream3.polskieradio.pl:8904/;"
        },
        {
            name: "RMF FM",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/RMF_FM_logo.svg",
            url: "http://195.150.20.244:8000/rmf_fm"
        },
        {
            name: "Radio Zet",
            logo: "http://gfx.radiozet.pl/design/radiozet/images/layout/logo-zet.png",
            url: "http://zet-old.cdn.eurozet.pl:8082/;"
        },
    ],
    "romania": [
        {
            name: "SRR Radio România Actualitati",
            logo: "http://radiocluj.ro/wp-content/uploads/sites/8/2014/08/Radio_Romania_Actualitati1.jpg",
            url: "http://stream2.srr.ro:8002/;"
        },
        {
            name: "SRR Radio România Cultural",
            logo: "https://upload.wikimedia.org/wikipedia/en/2/26/Rrclogo.png",
            url: "http://stream2.srr.ro:8012/;"
        },
        {
            name: "SRR Radio România Muzical",
            logo: "http://radioconstanta.ro/wp-content/uploads/sites/9/2016/03/Radio-Romania-Muzical-640x241-820x300.jpg",
            url: "http://stream2.srr.ro:8022/;"
        },
        {
            name: "Europa FM",
            logo: "http://www.jarabedepalo.com/sites/default/files/Logo.EFM%20Blanco_0.jpg",
            url: "http://astreaming.europafm.ro:8000/europafm_aacp48k"
        },
    ],
    "russia": [
        {
            name: "Радио Маяк",
            logo: "http://radiothe.com/wp-content/uploads/2015/10/Radio-Mayak-Live.png",
            url: "http://icecast.vgtrk.cdnvideo.ru/mayakfm_mp3_192kbps"
        },
        {
            name: "Авторадио",
            logo: "https://upload.wikimedia.org/wikipedia/ru/archive/3/31/20071213132033!Avtoradio.png",
            url: "http://ic4.101.ru:8000/v3_1?userid=0&setst=fvhe0090q0b79jebn6nlacto22"
        },
        {
            name: "Европа Плюс",
            logo: "https://www.benztown.com/sites/default/files/styles/programming_logo_350h/public/media/Europa-Plus-logo.png?itok=N1vFh39x",
            url: "http://ep128server.streamr.ru:8030/ep128"
        },
    ],
    "slovakia": [
        {
            name: "Rádio Slovensko",
            logo: "https://www.rtvs.sk/media/images/radiostations/radio_slovensko.png",
            url: "http://live.slovakradio.sk:8000/Slovensko_256.mp3"
        },
        {
            name: "Rádio Devin",
            logo: "https://www.radia.sk/_radia/loga/nadpis/devin.png?1458809153",
            url: "http://live.slovakradio.sk:8000/Devin_256.mp3"
        },
        {
            name: "Rádio_FM",
            logo: "https://thumbnailer.mixcloud.com/unsafe/600x600/profile/c/0/e/0/5bf7-bc8c-4b84-89f5-03ebf6d05daf.jpg",
            url: "http://live.slovakradio.sk:8000/FM_256.mp3"
        },
        {
            name: "Radio Expres",
            logo: "https://www.radia.sk/_radia/loga/coverflow/expres.png",
            url: "http://85.248.7.162:8000/96.mp3"
        },
    ],
    "slovenia": [
        {
            name: "Radio Slovenija A1",
            logo: "http://go2radio.com/wp-content/uploads/2015/12/89ac0f3235ca8a8ee1c867545bb3366e-470x215.jpg",
            url: "http://mp3.rtvslo.si:80/ra1"
        },
        {
            name: "Radio Slovenija Val202",
            logo: "http://vignette3.wikia.nocookie.net/logopedia/images/4/41/VAL_202_2015.png/revision/latest?cb=20150420121715",
            url: "http://mp3.rtvslo.si:80/val202"
        },
        {
            name: "Radio 1",
            logo: "https://upload.wikimedia.org/wikipedia/sl/8/83/Radio1_logo.jpg",
            url: "http://live.radio.si/Radio1"
        },
    ],
    "spain": [
        {
            name: "RNE Radio Nacional",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Logo_RNE.svg/2000px-Logo_RNE.svg.png",
            url: "http://rne.rtveradio.cires21.com/rne/mp3/icecast.audio"
        },
        {
            name: "RNE Radio Clásica",
            logo: "http://img.rtve.es/imagenes/rne_rclasica-live/1443454889925.png",
            url: "http://radioclasica.rtveradio.cires21.com/radioclasica/mp3/icecast.audio"
        },
        {
            name: "RNE Radio 3",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Radio_3_RNE_Spain.svg/2000px-Radio_3_RNE_Spain.svg.png",
            url: "http://radio3.rtveradio.cires21.com/radio3/mp3/icecast.audio"
        },
        {
            name: "Cadena Ser",
            logo: "http://s.libertaddigital.com/fotos/noticias/cadena_ser-mjg.jpg",
            url: "http://13873.live.streamtheworld.com:80/CADENASER_SC"
        },
    ],
    "sweden": [
        {
            name: "Sveriges Radio P1",
            logo: "http://sverigesradio.se/sida/images/3632/2276510_512_512.jpg?preset=socialmedia-share-image",
            url: "http://http-live.sr.se/p1-mp3-192"
        },
        {
            name: "Sveriges Radio P2",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/SR_P2_logo.svg/250px-SR_P2_logo.svg.png",
            url: "http://http-live.sr.se/p2-mp3-192"
        },
        {
            name: "Sveriges Radio P3",
            logo: "http://logowow.net/logos/9xnJBgkZg.png",
            url: "http://http-live.sr.se/p3-mp3-192"
        },
    ],
    "switzerland-de": [
        {
            name: "Radio SRF 1",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Radio_SRF_1.svg/2000px-Radio_SRF_1.svg.png",
            url: "http://stream.srg-ssr.ch/m/drs1/mp3_128"
        },
        {
            name: "Radio SRF 2",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Radio_SRF_2_Kultur.svg/2000px-Radio_SRF_2_Kultur.svg.png",
            url: "http://stream.srg-ssr.ch/m/drs2/mp3_128"
        },
        {
            name: "Radio SRF 3",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Radio_SRF_3.svg/2000px-Radio_SRF_3.svg.png",
            url: "http://stream.srg-ssr.ch/m/drs3/mp3_128"
        },
        {
            name: "Radio SRF 4",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Radio_SRF_4_News.svg/2000px-Radio_SRF_4_News.svg.png",
            url: "http://stream.srg-ssr.ch/m/drs4news/mp3_128"
        },
    ],
    "switzerland-fr": [
        {
            name: "RSR La Première",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/RSR_La_Premiere.svg/485px-RSR_La_Premiere.svg.png",
            url: "http://stream.srg-ssr.ch/m/la-1ere/mp3_128"
        },
        {
            name: "RSR Espace 2",
            logo: "http://api.my-radios.com/images/thumb.php?countryCode=CH&name=RSR_Espace_2.png&size=200",
            url: "http://stream.srg-ssr.ch/m/espace-2/mp3_128"
        },
        {
            name: "RSR Couleur 3",
            logo: "http://api.my-radios.com/images/thumb.php?countryCode=CH&name=RSR_Couleur_3.png&size=200",
            url: "http://stream.srg-ssr.ch/m/couleur3/mp3_128"
        },
        {
            name: "RSR Option Musique",
            logo: "http://www.rts.ch/2014/04/22/16/15/5791553.image?w=300&h=168",
            url: "http://stream.srg-ssr.ch/m/option-musique/mp3_128"
        },
    ],
    "uk": [
        {
            name: "BBC Radio 1",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/BBC_Radio_1.svg/220px-BBC_Radio_1.svg.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_p"
        },
        {
            name: "BBC Radio 2",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/84/BBC_Radio_2.svg/320px-BBC_Radio_2.svg.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio2_mf_p"
        },
        {
            name: "BBC Radio 3",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/BBC_Radio_3.svg/320px-BBC_Radio_3.svg.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio3_mf_p"
        },
        {
            name: "BBC Radio 4",
            logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/BBC_Radio_4.svg/320px-BBC_Radio_4.svg.png",
            url: "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio4fm_mf_p"
        },
    ],
    "ukraine": [
        {
            name: "UR-1",
            logo: "http://radioukr.com.ua/wp-content/uploads/2016/07/radio-logo.png",
            url: "http://nrcu.gov.ua:8000/ur1-mp3"
        },
        {
            name: "UR-2",
            logo: "http://placehold.it/80x80",
            url: "http://nrcu.gov.ua:8000/ur2-mp3"
        },
    ]
};

stations["belgium"] = stations["belgium-nl"].concat(stations["belgium-fr"]);
stations["switzerland"] = stations["switzerland-de"].concat(stations["switzerland-fr"]);