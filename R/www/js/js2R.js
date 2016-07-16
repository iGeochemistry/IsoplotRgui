// turns the options into a string to feed into R
function getOptions(prefs){
    var out = "";
    var geochronometer = prefs.settings.geochronometer;
    var plotdevice = prefs.settings.plotdevice;
    var settings = prefs.settings[plotdevice];
    switch (plotdevice){
    case 'concordia':
	var mint = isValidAge(settings.mint) ? settings.mint : null;
	var maxt = isValidAge(settings.maxt) ? settings.maxt : null;
	if (mint != null | maxt != null){
	    out += ",limits=c(";
	    if (mint == null) { out += "0"; } else { out += mint; }
	    if (maxt == null) { out += ",4500)"; } else { out += "," + maxt + ")"; }
	} else {
	    out += ",limits=NULL"
	}
	out += ",alpha=" + settings.alpha;
	out += ",wetherill=" + settings.wetherill;
	out += ",dcu=" + settings.dcu;
	out += ",show.numbers=" + settings.shownumbers;
	out += ",show.age=" + settings.showage;
	out += ",sigdig=" + settings.sigdig;
	break;
    case 'isochron':
	if (settings.minx != 'auto' & settings.maxx != 'auto')
	    out += ",xlim=c(" + settings.minx + "," + settings.maxx + ")"
	if (settings.miny != 'auto' & settings.maxy != 'auto')
	    out += ",ylim=c(" + settings.miny + "," + settings.maxy + ")"
	out += ",alpha=" + settings.alpha;
	out += ",show.numbers=" + settings.shownumbers;
	out += ",inverse=" + settings.inverse;
	out += ",sigdig=" + settings.sigdig;
	break;
    case 'KDE':
	if (settings.minx != 'auto') { out += ",from=" + settings.minx; }
	else { out += ",from=NA"; }
	if (settings.maxx != 'auto') { out += ",to=" + settings.maxx; }
	else { out += ",to=NA"; }
	if (settings.bandwidth != 'auto') { out += ",bw=" + settings.bandwidth; }
	else { out += ",bw=NA"; }
	out += ",show.hist=" + settings.showhist;
	out += ",adaptive=" + settings.adaptive;
	if (geochronometer=="detritals"){
	    out += ",samebandwidth=" + settings.samebandwidth;
	    out += ",normalise=" + settings.normalise;
	    if (settings.pchdetritals!='none') { out += ",pch=" + settings.pchdetritals; }
	} else if (geochronometer=="U-Pb"){
	    if (settings.pch!='none') { out += ",pch=" + settings.pch; }
	    out += ",cutoff.76=" + settings.cutoff76;
	    out += ",cutoff.disc=c(" + settings.mindisc + "," + settings.maxdisc + ")";
	} else {
	    if (settings.pch!='none') { out += ",pch=" + settings.pch; }
	}
	out += ",log=" + settings.log;
	if (settings.binwidth != 'auto') { out += ",binwidth=" + settings.binwidth; }
	else { out += ",binwidth=NA"; }
	break;
    case 'ages':
	out += ",dcu=" + settings.dcu;
	out += ",sigdig=" + settings.sigdig;
	break;
    default:
    }
    return out;
}

function getRcommand(prefs){
    var geochronometer = prefs.settings.geochronometer;
    var plotdevice = prefs.settings.plotdevice;
    var options = getOptions(prefs);
    var out = "dat <- selection2data(method='" + geochronometer +
	"',format=" + prefs.settings[geochronometer].format + ");";
    switch (geochronometer){
    case 'U-Pb': 
	out += "iratio('U238U235',x=" + prefs.constants.iratio.U238U235[0] + 
  	       ",e=" + prefs.constants.iratio.U238U235[1] + ");"
	out += "lambda('U238',x=" + prefs.constants.lambda.U238[0] + 
  	       ",e=" + prefs.constants.lambda.U238[1] + ");"
	out += "lambda('U235',x=" + prefs.constants.lambda.U235[0] + 
  	       ",e=" + prefs.constants.lambda.U235[1] + ");"
	break;
    case 'Ar-Ar':
	out += "iratio('Ar40Ar36',x=" + prefs.constants.iratio.Ar40Ar36[0] + 
     	       ",e=" + prefs.constants.iratio.Ar40Ar36[1] + ");"
	out += "lambda('K40',x=" + prefs.constants.lambda.K40[0] + 
  	       ",e=" + prefs.constants.lambda.K40[1] + ");"
	break;
    case 'detritals':
	break;
    }
    switch (plotdevice) {
    case 'concordia': 
	out += "concordia(dat"; 
	break;
    case 'isochron':
	out += "isochron(dat";
	break;
    case 'KDE':
	out += "kde(dat";
	break;
    case 'CAD':
	out += "cad(dat";
	break;
    case 'ages':
	out += "age(dat";
	break;
    }
    out += options +");"
    return out;
}