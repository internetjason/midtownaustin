// Make this dynamic based on the div's attributes
var mapDiv = $('#map-canvas');
if (mapDiv.length > 0) {
    var zoomLevel = (mapDiv[0].attributes['data-zoom'].nodeValue) ? (mapDiv[0].attributes['data-zoom'].nodeValue * 1) : 5;
    var centerMapStr = (mapDiv[0].attributes['data-location'].nodeValue);

    function initialize() {
	var HQ			= new google.maps.LatLng(32.9700599, -96.721227),
	    Austin		= new google.maps.LatLng(30.3744169, -97.7253151),
	    FtWorth		= new google.maps.LatLng(32.7482145, -97.0778395),
	    SanAntonio		= new google.maps.LatLng(29.4997168, -98.5558398),
	    NHouston		= new google.maps.LatLng(30.0147558, -95.4429117),
	    SHouston		= new google.maps.LatLng(29.6868938, -95.5344075),
	    Philadelphia	= new google.maps.LatLng(39.951506, -75.140779),
	    Baltimore		= new google.maps.LatLng(39.3792536, -76.53844),
	    StLouis		= new google.maps.LatLng(38.6806309, -90.4717384),
	    Orlando		= new google.maps.LatLng(28.6660859, -81.3826342),
	    NewOrleans		= new google.maps.LatLng(29.955931, -90.1871688),
	    Jackson		= new google.maps.LatLng(32.3986282, -89.4805267),
	    Atlanta		= new google.maps.LatLng(33.9634148, -84.2242585),
	    Charlotte		= new google.maps.LatLng(35.516592, -81.132848),
	    Tampa		= new google.maps.LatLng(27.946601, -82.346807),
	    Orlando		= new google.maps.LatLng(28.6660859, -81.3826342),
	    SanDiego		= new google.maps.LatLng(32.715738, -117.1610838),
	    Indianapolis	= new google.maps.LatLng(39.768403, -86.158068),
	    Birmingham		= new google.maps.LatLng(33.5206608, -86.80249),
	    Richmond		= new google.maps.LatLng(37.5407246, -77.4360481),
	    PortsmouthNorfolk	= new google.maps.LatLng(36.8354258, -76.2982742),
	    Mobile		= new google.maps.LatLng(30.6953657, -88.0398912),
	    Columbus		= new google.maps.LatLng(39.9611755, -82.9987942),
	    Delaware		= new google.maps.LatLng(38.9108325, -75.5276699),
	    Washington		= new google.maps.LatLng(38.9071923, -77.0368707),
	    NewJersey		= new google.maps.LatLng(40.0583238, -74.4056612),
	    Columbus		= new google.maps.LatLng(39.9611755, -82.9987942),
	    Denver		= new google.maps.LatLng(39.7392358, -104.990251),
	    LasVegas		= new google.maps.LatLng(36.1699412, -115.1398296),
	    Memphis		= new google.maps.LatLng(35.1495343, -90.0489801),
	    Nashville		= new google.maps.LatLng(36.1626638, -86.7816016),
	    Detroit		= new google.maps.LatLng(42.331427, -83.0457538),
	    Michigan		= new google.maps.LatLng(44.3148443, -85.6023643),
	    KansasCity		= new google.maps.LatLng(39.114053, -94.6274636),
	    OklahomaCity	= new google.maps.LatLng(35.4675602, -97.5164276);

	// Using the value from the html element, find out where to zoom the map into
	var centerMap;
	switch(centerMapStr) {
	case 'HQ'			: centerMap = HQ; break;
	case 'Austin'			: centerMap = Austin; break;
	case 'FtWorth'			: centerMap = FtWorth; break;
	case 'SanAntonio'		: centerMap = SanAntonio; break;
	case 'NHouston'			: centerMap = NHouston; break;
	case 'SHouston'			: centerMap = SHouston; break;
	case 'Philadelphia'		: centerMap = Philadelphia; break;
	case 'Baltimore'		: centerMap = Baltimore; break;
	case 'StLouis'			: centerMap = StLouis; break;
	case 'Orlando'			: centerMap = Orlando; break;
	case 'NewOrleans'		: centerMap = NewOrleans; break;
	case 'Jackson'			: centerMap = Jackson; break;
	case 'Atlanta'			: centerMap = Atlanta; break;
	case 'Charlotte'		: centerMap = Charlotte; break;
	case 'Tampa'			: centerMap = Tampa; break;
	case 'Orlando'			: centerMap = Orlando; break;
	case 'SanDiego'			: centerMap = SanDiego; break;
	case 'Indianapolis'		: centerMap = Indianapolis; break;
	case 'Birmingham'		: centerMap = Birmingham; break;
	case 'Richmond'			: centerMap = Richmond; break;
	case 'PortsmouthNorfolk'	: centerMap = PortsmouthNorfolk; break;
	case 'Mobile'			: centerMap = Mobile; break;
	case 'Columbus'			: centerMap = Columbus; break;
	case 'Delaware'			: centerMap = Delaware; break;
	case 'Washington'		: centerMap = Washington; break;
	case 'NewJersey'		: centerMap = NewJersey; break;
	case 'Columbus'			: centerMap = Columbus; break;
	case 'Denver'			: centerMap = Denver; break;
	case 'LasVegas'			: centerMap = LasVegas; break;
	case 'Memphis'			: centerMap = Memphis; break;
	case 'Nashville'		: centerMap = Nashville; break;
	case 'Detroit'			: centerMap = Detroit; break;
	case 'Michigan'			: centerMap = Michigan; break;
	case 'KansasCity'		: centerMap = KansasCity; break;
	case 'OklahomaCity'		: centerMap = OklahomaCity; break;
	};

	var featureOpts = champNet.getMapStyles();

	var MY_MAPTYPE_ID = 'champion';

	var mapOptions = {
	    zoom: zoomLevel,
	    center: centerMap,
	    scrollwheel: false,
	    mapTypeId: MY_MAPTYPE_ID
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var styledMapOptions = {
	    name: 'Champion'
	};

	var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
	map.mapTypes.set(MY_MAPTYPE_ID, customMapType);



	// Build the HTML Info Windows
	var HQDetails = champNet.mapInfoWindow({
	    title: 'Dallas (Corporate Headquarters)', addr1: '1616 Gateway Blvd', addr2: 'Richardson, TX 75080',
	    phone: '(972) 235-8844', hours: 'M - F, 8am - 4pm',
	    imgURL: 'https://www.champ.net/wp-content/uploads/dallas-tx-champion-national-security-headquarters.jpg',
	    pageURL: 'asdf'
	}),
	    AustinDetails = champNet.mapInfoWindow({
		title: 'Austin', addr1: '9101 Burnet Rd #110', addr2: 'Austin, TX 78758',
		phone: '(737) 247-3500', hours: 'M - F, 8am - 4pm',
		imgURL: 'https://www.champ.net/wp-content/uploads/austin-tx-uniformed-security-guard-services-company.jpg',
		pageURL: '../locations/austin-tx'
	    }),
	    FtWorthDetails = champNet.mapInfoWindow({
		title: 'Ft. Worth', addr1: '2008 East Randol Mill Rd', addr2: 'Arlington, TX 76011',
		phone: '(817) 226-9500', hours: 'M - F, 8am -  4pm',
		imgURL: 'https://www.champ.net/wp-content/uploads/ft-worth-armed-and-unarmed-security-guards.jpg',
		pageURL: '../locations/fort-worth-tx/'
	    }),
	    SanAntonioDetails = champNet.mapInfoWindow({
		title: 'San Antonio', addr1: '7136 Oaklawn Dr', addr2: 'San Antonio, TX 78229',
		phone: '(210) 738-8408', hours: 'M - F, 8am - 4pm',
		imgURL: 'http://www.champ.net/wp-content/uploads/san-antonio-tx-champion-national-security.jpg',
		pageURL: '../locations/san-antonio-tx/'
	    }),
	    NHoustonDetails = champNet.mapInfoWindow({
		title: 'North Houston', addr1: '16903 Red Oak Drive #226', addr2: 'Houston, TX 77090',
		phone: '(281) 214-0025', hours: 'M - F, 8am - 4pm',
		imgURL: 'http://www.champ.net/wp-content/uploads/houston-tx-location-security-guard-services.jpg',
		pageURL: '../locations/north-houston-tx/'
	    }),
	    SHoustonDetails = champNet.mapInfoWindow({
		title: 'South Houston', addr1: '9000 Southwest Freeway', addr2: 'Houston, TX 77036',
		phone: '(713) 270-8446', hours: 'M - F, 8am - 4pm',
		imgURL: 'http://www.champ.net/wp-content/uploads/houston-tx-location-security-guard-services.jpg',
		pageURL: ''
	    }),
	    PhiladelphiaDetails = champNet.mapInfoWindow({
		title: 'Philadelphia', addr1: '7 N. Christopher Columbus Blvd #7b', addr2: 'Philadelphia, PA 19106',
		phone: '(215) 922-2490', hours: 'M - F, 8am - 4pm',
		imgURL: 'http://www.champ.net/wp-content/uploads/philadelphia-pa-security-guard-services-company.jpg',
		pageURL: ''
	    }),
	    BaltimoreDetails = champNet.mapInfoWindow({
		title: 'Baltimore', addr1: '8304 Harford Rd', addr2: 'Parkville, MD 21234',
		phone: '(410) 663-8244', hours: 'M - F, 8am - 4pm',
		imgURL: 'http://www.champ.net/wp-content/uploads/washington-dc-armed-security-officers.jpg',
		pageURL: ''
	    }),
	    StLouisDetails = champNet.mapInfoWindow({
		title: 'St. Louis', addr1: '12747 Olive Blvd #300', addr2: 'St. Louis, MO',
		phone: '(314) 569-9840', hours: 'M - F, 8am - 4pm',
		imgURL: 'http://www.champ.net/wp-content/uploads/st-louis-mo-hire-sec',
		pageURL: ''
	    }),
	    OrlandoDetails = champNet.mapInfoWindow({
		title: 'Orlando', addr1: '283 Cranes Roost Blvd #111', addr2: 'Altamonte Springs, FL',
		phone: '(407) 215-0455', hours: 'M - F, 8am - 4pm',
		imgURL: 'http://www.champ.net/wp-content/uploads/orlando-florida-security-guard-contractor.jpg',
		pageURL: ''
	    }),
	    NewOrleansDetails = champNet.mapInfoWindow({
		title: 'New Orleans', addr1: '824 Elmwood Park Blvd', addr2: 'New Orleans, LA',
		phone: '(504) 731-0445', hours: 'M - F, 8am - 4pm',
		imgURL: 'http://www.champ.net/wp-content/uploads/new-orleans-security-guard-services.jpg',
		pageURL: ''
	    }),
	    JacksonDetails = champNet.mapInfoWindow({
		title: 'Jackson', addr1: '2071 Mississippi 35', addr2: 'Forest, MS 39074',
		phone: '(601) 469-9962', hours: 'M - F, 8am - 4pm',
		imgURL: 'http://www.champ.net/wp-content/uploads/jackson-mississippi-area-uniformed-security-officers.jpg',
		pageURL: ''
	    }),
	    AtlantaDetails = champNet.mapInfoWindow({
		title: 'Atlanta', addr1: '5696 Peachtree Pkwy', addr2: 'Norcross, GA 30092',
		phone: '(678) 992-2673', hours: 'M - F, 8am - 4pm',
		imgURL: 'http://www.champ.net/wp-content/uploads/atlanta-georgia-security-guard-services.jpg',
		pageURL: ''
	    }),
	    CharlotteDetails = champNet.mapInfoWindow({
		title: 'Charlotte', addr1: '9000 Southwest Freeway', addr2: 'Houston, TX 77036',
		phone: '(713) 270-8446', hours: 'M - F, 8am - 4pm',
		imgURL: 'http://www.champ.net/wp-content/uploads/charlotte-north-carolina-security-guard-services.jpg',
		pageURL: ''
	    }),
	    TampaDetails = champNet.mapInfoWindow({
		title: 'Tampa', addr1: '410 S. Ware Blvd, #619B', addr2: 'Tampa, FL 33619',
		phone: '(314) 569-9840', hours: 'M - F 8am - 4pm',
		imgURL: 'http://www.champ.net/wp-content/uploads/tampa-florida-security-guard-services.jpg',
		pageURL: ''
	    }),
	    SanDiegoDetails = '',
	    IndianapolisDetails = '',
	    BirminghamDetails = '',
	    RichmondDetails = '',
	    PortsmouthNorfolkDetails = '',
	    MobileDetails = '',
	    ColumbusDetails = '',
	    DelawareDetails = champNet.mapInfoWindow({
		title: 'Delaware', addr1: '7 N. Christopher Columbus Blvd #7b', addr2: 'Philadelphia, PA 19106',
		phone: '(215) 922-2490', hours: 'M - F, 8am - 4pm',
		imgURL: '',
		pageURL: ''
	    }),
	    WashingtonDetails = champNet.mapInfoWindow({
		title: 'Washington', addr1: '898 Airport Dr, #205C', addr2: 'Parkville, MD 21234',
		phone: '(410) 663-8244', hours: 'M - F, 8am - 4pm',
		imgURL: '',
		pageURL: ''
	    }),
	    NewJerseyDetails = champNet.mapInfoWindow({
		title: 'New Jersey', addr1: '7 N. Christopher Columbus Blvd #7b', addr2: 'Philadelphia, PA 19106',
		phone: '(215) 922-2490', hours: 'M - F, 8am - 4pm',
		imgURL: '',
		pageURL: ''
	    }),
	    ColumbusDetails = '',
	    DenverDetails = '',
	    LasVegasDetails = '',
	    MemphisDetails = '',
	    NashvilleDetails = '',
	    DetroitDetails = '',
	    MichiganDetails = '',
	    KansasCityDetails = '',
	    OklahomaCityDetails = '';

	// Instantiate the info windows
	var HQInfo			= new google.maps.InfoWindow({ content: HQDetails }),
	    AustinInfo			= new google.maps.InfoWindow({ content: AustinDetails }),
	    FtWorthInfo			= new google.maps.InfoWindow({ content: FtWorthDetails }),
	    SanAntonioInfo		= new google.maps.InfoWindow({ content: SanAntonioDetails }),
	    NHoustonInfo		= new google.maps.InfoWindow({ content: NHoustonDetails }),
	    SHoustonInfo		= new google.maps.InfoWindow({ content: SHoustonDetails }),
	    PhiladelphiaInfo		= new google.maps.InfoWindow({ content: PhiladelphiaDetails }),
	    BaltimoreInfo		= new google.maps.InfoWindow({ content: BaltimoreDetails }),
	    StLouisInfo			= new google.maps.InfoWindow({ content: StLouisDetails }),
	    OrlandoInfo			= new google.maps.InfoWindow({ content: OrlandoDetails }),
	    NewOrleansInfo		= new google.maps.InfoWindow({ content: NewOrleansDetails }),
	    JacksonInfo			= new google.maps.InfoWindow({ content: JacksonDetails }),
	    AtlantaInfo			= new google.maps.InfoWindow({ content: AtlantaDetails }),
	    CharlotteInfo		= new google.maps.InfoWindow({ content: CharlotteDetails }),
	    TampaInfo			= new google.maps.InfoWindow({ content: TampaDetails }),
	    OrlandoInfo			= new google.maps.InfoWindow({ content: OrlandoDetails }),
	    SanDiegoInfo		= new google.maps.InfoWindow({ content: SanDiegoDetails }),
	    IndianapolisInfo		= new google.maps.InfoWindow({ content: IndianapolisDetails }),
	    BirminghamInfo		= new google.maps.InfoWindow({ content: BirminghamDetails }),
	    RichmondInfo		= new google.maps.InfoWindow({ content: RichmondDetails }),
	    PortsmouthNorfolkInfo	= new google.maps.InfoWindow({ content: PortsmouthNorfolkDetails }),
	    MobileInfo			= new google.maps.InfoWindow({ content: MobileDetails }),
	    ColumbusInfo		= new google.maps.InfoWindow({ content: ColumbusDetails }),
	    DelawareInfo		= new google.maps.InfoWindow({ content: DelawareDetails }),
	    WashingtonInfo		= new google.maps.InfoWindow({ content: WashingtonDetails }),
	    NewJerseyInfo		= new google.maps.InfoWindow({ content: NewJerseyDetails }),
	    ColumbusInfo		= new google.maps.InfoWindow({ content: ColumbusDetails }),
	    DenverInfo			= new google.maps.InfoWindow({ content: DenverDetails }),
	    LasVegasInfo		= new google.maps.InfoWindow({ content: LasVegasDetails }),
	    MemphisInfo			= new google.maps.InfoWindow({ content: MemphisDetails }),
	    NashvilleInfo		= new google.maps.InfoWindow({ content: NashvilleDetails }),
	    DetroitInfo			= new google.maps.InfoWindow({ content: DetroitDetails }),
	    MichiganInfo		= new google.maps.InfoWindow({ content: MichiganDetails }),
	    KansasCityInfo		= new google.maps.InfoWindow({ content: KansasCityDetails }),
	    OklahomaCityInfo		= new google.maps.InfoWindow({ content: OklahomaCityDetails });

	var icons = {
	    'red'		: 'https://www.champ.net/wp-content/uploads/badge-map-icon-contracted-services.png',
	    'yellow'	: 'https://www.champ.net/wp-content/uploads/location-map-icon.png',
	    'hq'		: 'https://www.champ.net/wp-content/uploads/badge-map-icon.png',
	};

	// Assign the markers
	var HQmarker = new google.maps.Marker({
	    position: HQ, map: map, title: 'Dallas (Corporate Headquarters)', zIndex: 3, icon: icons.hq
	});
	var Austinmarker = new google.maps.Marker({  position: Austin, map: map, title: 'Austin', icon: icons.yellow });
	var FtWorthmarker = new google.maps.Marker({
	    position: FtWorth, map: map, title: 'FtWorth', zIndex: 2, icon: icons.yellow
	});
	var SanAntoniomarker = new google.maps.Marker({ position: SanAntonio, map: map, title: 'SanAntonio', icon: icons.yellow });
	var NHoustonmarker = new google.maps.Marker({ position: NHouston, map: map, title: 'NHouston', icon: icons.yellow });
	var SHoustonmarker = new google.maps.Marker({ position: SHouston, map: map, title: 'SHouston', icon: icons.yellow });
	var Philadelphiamarker = new google.maps.Marker({ position: Philadelphia, map: map, title: 'Philadelphia', icon: icons.yellow });
	var Baltimoremarker = new google.maps.Marker({ position: Baltimore, map: map, title: 'Baltimore', icon: icons.yellow });
	var StLouismarker = new google.maps.Marker({ position: StLouis, map: map, title: 'StLouis', icon: icons.yellow });
	var Orlandomarker = new google.maps.Marker({ position: Orlando, map: map, title: 'Orlando', icon: icons.yellow });
	var NewOrleansmarker = new google.maps.Marker({ position: NewOrleans, map: map, title: 'NewOrleans', icon: icons.yellow });
	var Jacksonmarker = new google.maps.Marker({ position: Jackson, map: map, title: 'Jackson', icon: icons.yellow });
	var Atlantamarker = new google.maps.Marker({ position: Atlanta, map: map, title: 'Atlanta', icon: icons.yellow });
	var Charlottemarker = new google.maps.Marker({ position: Charlotte, map: map, title: 'Charlotte', icon: icons.red });
	var Tampamarker = new google.maps.Marker({ position: Tampa, map: map, title: 'new', icon: icons.red });
	var Orlandomarker = new google.maps.Marker({ position: Orlando, map: map, title: 'Orlando', icon: icons.red });
	var SanDiegomarker = new google.maps.Marker({ position: SanDiego, map: map, title: 'SanDiego', icon: icons.red });
	var Indianapolismarker = new google.maps.Marker({ position: Indianapolis, map: map, title: 'Indianapolis', icon: icons.red });
	var Birminghammarker = new google.maps.Marker({ position: Birmingham, map: map, title: 'Birmingham', icon: icons.red });
	var Richmondmarker = new google.maps.Marker({ position: Richmond, map: map, title: 'Richmond', icon: icons.red });
	var PortsmouthNorfolkmarker = new google.maps.Marker({
	    position: PortsmouthNorfolk, map: map, title: 'PortsmouthNorfolk', icon: icons.red
	});
	var Mobilemarker = new google.maps.Marker({ position: Mobile, map: map, title: 'Mobile', icon: icons.red });
	var Columbusmarker = new google.maps.Marker({ position: Columbus, map: map, title: 'Columbus', icon: icons.red });
	var Delawaremarker = new google.maps.Marker({ position: Delaware, map: map, title: 'Delaware', icon: icons.red });
	var Washingtonmarker = new google.maps.Marker({ position: Washington, map: map, title: 'Washington', icon: icons.red });
	var NewJerseymarker = new google.maps.Marker({ position: NewJersey, map: map, title: 'NewJersey', icon: icons.red });
	var Columbusmarker = new google.maps.Marker({ position: Columbus, map: map, title: 'Columbus', icon: icons.red });
	var Denvermarker = new google.maps.Marker({ position: Denver, map: map, title: 'Denver', icon: icons.red });
	var LasVegasmarker = new google.maps.Marker({ position: LasVegas, map: map, title: 'LasVegas', icon: icons.red });
	var Memphismarker = new google.maps.Marker({ position: Memphis, map: map, title: 'Memphis', icon: icons.red });
	var Nashvillemarker = new google.maps.Marker({ position: Nashville, map: map, title: 'Nashville', icon: icons.red });
	var Detroitmarker = new google.maps.Marker({ position: Detroit, map: map, title: 'Detroit', icon: icons.red });
	var Michiganmarker = new google.maps.Marker({ position: Michigan, map: map, title: 'Michigan', icon: icons.red });
	var KansasCitymarker = new google.maps.Marker({ position: KansasCity, map: map, title: 'KansasCity', icon: icons.red });
	var OklahomaCitymarker = new google.maps.Marker({ position: OklahomaCity, map: map, title: 'OklahomaCity', icon: icons.red });

	var lastOpenWindow;

	// Set the Map Event Listeners for each location
	google.maps.event.addListener(HQmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } HQInfo.open(map,HQmarker);  lastOpenWindow = HQInfo;
	});
	google.maps.event.addListener(Austinmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } AustinInfo.open(map,Austinmarker);  lastOpenWindow = AustinInfo;
	});
	google.maps.event.addListener(FtWorthmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } FtWorthInfo.open(map,FtWorthmarker);  lastOpenWindow = FtWorthInfo;
	});
	google.maps.event.addListener(SanAntoniomarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } SanAntonioInfo.open(map,SanAntoniomarker);  lastOpenWindow = SanAntonioInfo;
	});
	google.maps.event.addListener(NHoustonmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } NHoustonInfo.open(map,NHoustonmarker);  lastOpenWindow = NHoustonInfo;
	});
	google.maps.event.addListener(SHoustonmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } SHoustonInfo.open(map,SHoustonmarker);  lastOpenWindow = SHoustonInfo;
	});
	google.maps.event.addListener(Philadelphiamarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } PhiladelphiaInfo.open(map,Philadelphiamarker);
	    lastOpenWindow = PhiladelphiaInfo;
	});
	google.maps.event.addListener(Baltimoremarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } BaltimoreInfo.open(map,Baltimoremarker);  lastOpenWindow = BaltimoreInfo;
	});
	google.maps.event.addListener(StLouismarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } StLouisInfo.open(map,StLouismarker);  lastOpenWindow = StLouisInfo;
	});
	google.maps.event.addListener(Orlandomarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } OrlandoInfo.open(map,Orlandomarker);  lastOpenWindow = OrlandoInfo;
	});
	google.maps.event.addListener(NewOrleansmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } NewOrleansInfo.open(map,NewOrleansmarker);  lastOpenWindow = NewOrleansInfo;
	});
	google.maps.event.addListener(Jacksonmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } JacksonInfo.open(map,Jacksonmarker);  lastOpenWindow = JacksonInfo;
	});
	google.maps.event.addListener(Atlantamarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } AtlantaInfo.open(map,Atlantamarker);  lastOpenWindow = AtlantaInfo;
	});
	google.maps.event.addListener(Charlottemarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } CharlotteInfo.open(map,Charlottemarker);  lastOpenWindow = CharlotteInfo;
	});
	google.maps.event.addListener(Tampamarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } TampaInfo.open(map,Tampamarker);  lastOpenWindow = TampaInfo;
	});
	google.maps.event.addListener(Orlandomarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } OrlandoInfo.open(map,Orlandomarker);  lastOpenWindow = OrlandoInfo;
	});
	google.maps.event.addListener(SanDiegomarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } SanDiegoInfo.open(map,SanDiegomarker);  lastOpenWindow = SanDiegoInfo;
	});
	google.maps.event.addListener(Indianapolismarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } IndianapolisInfo.open(map,Indianapolismarker);
	    lastOpenWindow = IndianapolisInfo;
	});
	google.maps.event.addListener(Birminghammarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } BirminghamInfo.open(map,Birminghammarker);  lastOpenWindow = BirminghamInfo;
	});
	google.maps.event.addListener(Richmondmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } RichmondInfo.open(map,Richmondmarker);  lastOpenWindow = RichmondInfo;
	});
	google.maps.event.addListener(PortsmouthNorfolkmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } PortsmouthNorfolkInfo.open(map,PortsmouthNorfolkmarker);
	    lastOpenWindow = PortsmouthNorfolkInfo;
	});
	google.maps.event.addListener(Mobilemarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } MobileInfo.open(map,Mobilemarker);  lastOpenWindow = MobileInfo;
	});
	google.maps.event.addListener(Columbusmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } ColumbusInfo.open(map,Columbusmarker);  lastOpenWindow = ColumbusInfo;
	});
	google.maps.event.addListener(Delawaremarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } DelawareInfo.open(map,Delawaremarker);  lastOpenWindow = DelawareInfo;
	});
	google.maps.event.addListener(Washingtonmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } WashingtonInfo.open(map,Washingtonmarker);  lastOpenWindow = WashingtonInfo;
	});
	google.maps.event.addListener(NewJerseymarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } NewJerseyInfo.open(map,NewJerseymarker);  lastOpenWindow = NewJerseyInfo;
	});
	google.maps.event.addListener(Columbusmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } ColumbusInfo.open(map,Columbusmarker);  lastOpenWindow = ColumbusInfo;
	});
	google.maps.event.addListener(Denvermarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } DenverInfo.open(map,Denvermarker);  lastOpenWindow = DenverInfo;
	});
	google.maps.event.addListener(LasVegasmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } LasVegasInfo.open(map,LasVegasmarker);  lastOpenWindow = LasVegasInfo;
	});
	google.maps.event.addListener(Memphismarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } MemphisInfo.open(map,Memphismarker);  lastOpenWindow = MemphisInfo;
	});
	google.maps.event.addListener(Nashvillemarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } NashvilleInfo.open(map,Nashvillemarker);  lastOpenWindow = NashvilleInfo;
	});
	google.maps.event.addListener(Detroitmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } DetroitInfo.open(map,Detroitmarker);  lastOpenWindow = DetroitInfo;
	});
	google.maps.event.addListener(Michiganmarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } MichiganInfo.open(map,Michiganmarker);  lastOpenWindow = MichiganInfo;
	});
	google.maps.event.addListener(KansasCitymarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } KansasCityInfo.open(map,KansasCitymarker);  lastOpenWindow = KansasCityInfo;
	});
	google.maps.event.addListener(OklahomaCitymarker, 'click', function() {
	    if (lastOpenWindow) { lastOpenWindow.close(); } OklahomaCityInfo.open(map,OklahomaCitymarker);
	    lastOpenWindow = OklahomaCityInfo;
	});
    }

    google.maps.event.addDomListener(window, 'load', initialize);
}
