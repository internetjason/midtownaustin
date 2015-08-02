window.champNet = window.champNet || {};

champNet.getMapStyles = function() {
    return [
	{
	    "featureType": "administrative",
	    "elementType": "labels.text.fill",
	    "stylers": [
		{ "color": "#444444" }
	    ]
	},{
	    "featureType": "water",
	    "elementType": "geometry",
	    "stylers": [
		{ "color": "#1c3b55" },
		{ "lightness": -21 }
	    ]
	},{
	    "featureType": "landscape",
	    "elementType": "geometry",
	    "stylers": [
		{ "color": "#1780ce" },
		{ "lightness": -31 },
		{ "saturation": -14 }
	    ]
	},{
	    "featureType": "road",
	    "elementType": "geometry",
	    "stylers": [
		{ "color": "#1780ce" },
		{ "lightness": -17 }
	    ]
	},{
	    "featureType": "poi",
	    "elementType": "geometry",
	    "stylers": [
		{ "color": "#1780ce" },
		{ "lightness": -31 }
	    ]
	},{
	},{
	    "featureType": "transit",
	    "elementType": "geometry",
	    "stylers": [
		{ "color": "#1780ce" },
		{ "lightness": -31 }
	    ]
	},{
	    "elementType": "labels.text.stroke",
	    "stylers": [
		{ "visibility": "on" },
		{ "weight": 2 },
		{ "gamma": 0.84 },
		{ "color": "#1c3b55" },
		{ "lightness": -19 }
	    ]
	},{
	    "elementType": "labels.text.fill",
	    "stylers": [
		{ "color": "#ffffff" }
	    ]
	},{
	    "featureType": "administrative",
	    "elementType": "geometry",
	    "stylers": [
		{ "color": "#1a3541" },
		{ "weight": 0.6 }
	    ]
	},{
	    "elementType": "labels.icon",
	    "stylers": [
		{ "visibility": "off" }
	    ]
	},{
	    "featureType": "poi.park",
	    "stylers": [
		{ "color": "#517d5e" },
		{ "lightness": -19 }
	    ]
	}
    ];
};


champNet.mapInfoWindow = function(data) {
    return '<div class="row"><div class="col-md-6"><strong>' +data.title + '</strong><br />' + data.addr1 + '<br />' +
	data.addr2 + '<br /><br /><strong>Phone:</strong> ' + data.phone + '<br>'+
	'<strong>Hours:</strong> ' + data.hours + '<br /><a class="wpgmza_infowindow_link" href="' + data.pageURL +
	'" title="Visit Location Page">Visit Location Page</a></div><div class="col-md-6"><img src="' + data.imgURL + '"></img>' +
	'</div>';
};


// champNet.showPopup = function(type, msg) {
//     var alert = '<div class="alert alert-' + type + '" role="alert">' + msg + '</div>';
//     $('body').prepend(alert);
// };


champNet.verifyPersonalEmail = function(email) {
    // First make sure it's an email, otherwise alert the user
    if (champNet.validateEmail(email)) {
	highlightEmail(false); // Remove old validation msg
	// Check to see if this is a free email account
	var domain = email.substr(email.indexOf('@') + 1, email.length),
	    list = publicDomains();
	if (list.indexOf(domain) > -1){
	    highlightEmail(true, function() {
		$('#personal-email-warning').removeClass('hidden');
	    });
	}
    } else {
	highlightEmail(true);
    }

    function highlightEmail(pass, callback) {
	if (!pass) {
	    $('#free-quote-form #email').parent().removeClass('has-error');
	} else {
	    $('#free-quote-form #email').parent().addClass('has-error');
            if (typeof callback == "function") {
		callback();
	    }
	}
    }

    function publicDomains() {
	return [
	    'bigmailbox.com',
	    'dogmail.co.uk',
	    'gmail.com',
	    'mjfrogmail.com',
	    'orgmail.net',
	    'racingmail.com',
	    'rccgmail.org',
	    'singmail.com',
	    'wrongmail.com',
	    'yaho.com',
	    'yahoo.ca',
	    'yahoo.co.in',
	    'yahoo.co.jp',
	    'yahoo.co.kr',
	    'yahoo.co.nz',
	    'yahoo.co.uk',
	    'yahoo.com',
	    'yahoo.com.ar',
	    'yahoo.com.au',
	    'yahoo.com.br',
	    'yahoo.com.cn',
	    'yahoo.com.hk',
	    'yahoo.com.is',
	    'yahoo.com.mx',
	    'yahoo.com.ru',
	    'yahoo.com.sg',
	    'yahoo.de',
	    'yahoo.dk',
	    'yahoo.es',
	    'yahoo.fr',
	    'yahoo.ie',
	    'yahoo.it',
	    'yahoo.jp',
	    'yahoo.ru',
	    'yahoo.se',
	    'yahoofs.com',
	    'yalla.com',
	    'yalla.com.lb',
	    'yalook.com',
	    'ymail'
	];
    }
};


champNet.validateEmail = function (email) {
    // Use regex to validate the email address
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

