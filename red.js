$( document ).ready(function() {
    console.log( "ready!" );

$('.selectpicker').selectpicker();


$('.printResult').on("click", function () {
      $('.wrapperResult').printThis({
        base: "https://calc.reddevweb.pro/"
      });
    });






/*$(".buttons").click(function(){   
  // $(this).next(".buttons").toggle();
  $(".text").fadeToggle(1000);
//  цена показывается, если нажата кнопка == цену скрыть, а показать блок
});*/
$('.buttons').click(function(){
		// $(this).next(".buttons").toggle();
		 // jQuery('.divchik').html('');
		 jQuery('.divchik').fadeToggle(300);
  	 $(".wrapperResult").fadeToggle(1000);
  });

    //Сухопутная доставка
    var list = {
        'iaai-ABILENE - TX':[['New York', '950']],
        'iaai-ACRON CANTON - OH':[['New York', '600']],
        'iaai-ALBANY - NY':[['New York', '370']],
        'iaai-ALBUQUERQUE - NM':[['California', '650']],
        'iaai-ALTOONA - PA':[['New York', '650']],
        'iaai-AMARILLO - TX':[['New York', '950']],
        'iaai-ANAHEIM - CA':[['California', '300']],
        'iaai-ANCHORAGE - AK':[['California', '2300']],
        'iaai-APPLETON - WI':[['New York', '750']],
        'iaai-ASHEVILLE - NC':[['New York', '650']],
        'iaai-ASHLAND - KY':[['New York', '700']],
        'iaai-ATLANTA - GA':[['New York', '800']],
        'iaai-ATLANTA EAST - GA':[['New York', '800']],
        'iaai-ATLANTA NORTH - GA':[['New York', '700']],
        'iaai-ATLANTA SOUTH - GA':[['New York', '700']],
        'iaai-AUSTIN - TX':[['New York', '959']],
        'iaai-AVENEL - NJ':[['New York', '300']],
        'iaai-BALTIMORE - MD':[['New York', '500']],
        'iaai-BATON ROUGE - LA':[['New York', '900']],
        'iaai-BILLINGS - MT':[['New York', '1200'], ['California','1200']],
        'iaai-BIRMINGHAM - AL':[['California', '750']],
        'iaai-BIRMINGHAM - BLENDED SALES - AL':[['California', '750']],
        'iaai-BOISE - ID':[['California', '800']],
        'iaai-BOSTON-SHIRLEY - MA':[['New York', '500']],
        'iaai-BOWLING GREEN - KY':[['New York', '700']],
        'iaai-BRIDGEPORT - PA':[['New York', '450']],
        'iaai-BUCKHANNON - WV':[['New York', '750']],
        'iaai-BUFFALO - NY':[['New York', '600']],
        'iaai-BURLINGTON - VT':[['New York', '600']],
        'iaai-CASPER - WY':[['California', '1400']],
        'iaai-CENTRAL NEW JERSEY - NJ':[['New York', '300']],
        'iaai-CHARLESTON - SC':[['New York', '620']],
        'iaai-CHARLOTTE - NC':[['New York', '650']],
        'iaai-CHATTANOOGA - TN':[['New York', '750']],
        'iaai-CHICAGO NORTH - IL':[['New York', '700']],
        'iaai-CHICAGO SOUTH - IL':[['New York', '700'],],
        'iaai-CHICAGO WEST - IL':[['New York', '700']],
        'iaai-CINCINNATI - OH':[['New York', '600']],
        'iaai-CINCINNATI SOUTH - OH':[['New York', '600']],
        'iaai-CLEARWATER - FL':[['New York', '700']],
        'iaai-CLEVELAND - OH':[['New York', '600']],
        'iaai-COLTON - CA':[['California', '350']],
        'iaai-COLUMBIA - SC':[['New York', '580']],
        'iaai-COLUMBUS - OH':[['New York', '600']],
        'iaai-CONCORD - NC':[['New York', '650']],
        'iaai-CORPUS CHRISTI - TX':[['New York', '950']],
        'iaai-CULPEPER - VA':[['New York', '450']],
        'iaai-DALLAS - TX':[['New York', '950']],
        'iaai-DALLAS / FT. WORTH - TX':[['New York', '950']],
        'iaai-DAVENPORT - IA':[['New York', '800']],
        'iaai-DAYTON - OH':[['New York', '600']],
        'iaai-DENVER - CO':[['California', '750']],
        'iaai-DENVER EAST - CO':[['California', '750']],
        'iaai-DES MOINES - IA':[['New York', '800']],
        'iaai-DETROIT - MI':[['New York', '650']],
        'iaai-DOTHAN - AL':[['New York', '900']],
        'iaai-DUNDALK - MD':[['New York', '500']],
        'iaai-EAST BAY - CA':[['California', '600']],
        'iaai-EL PASO - TX':[['New York', '950']],
        'iaai-ERIE - PA':[['New York', '650']],
        'iaai-EUGENE - OR':[['California', '750']],
        'iaai-FARGO - ND':[['California', '1100'], ['New York', '1100']],
        'iaai-FAYETTEVILLE - AR':[['New York', '800']],
        'iaai-FLINT - MI':[['New York', '700']],
        'iaai-FONTANA - CA':[['California', '370']],
        'iaai-FORT MYERS - FL':[['New York', '700']],
        'iaai-FORT WORTH NORTH - TX':[['New York', '950']],
        'iaai-FREMONT - CA':[['California', '550']],
        'iaai-FRESNO - CA':[['California', '500']],
        'iaai-FT.PIERCE - FL':[['New York', '750']],
        'iaai-Fredericksburg-South - VA':[['New York', '500']],
        'iaai-GRAND RAPIDS - MI':[['New York', '720']],
        'iaai-GREAT LAKES - MI':[['New York', '720']],
        'iaai-GREENSBORO - NC':[['New York', '650']],
        'iaai-GREENVILLE - SC':[['New York', '580']],
        'iaai-GRENADA - MS':[['New York', '800']],
        'iaai-GULF COAST - MS':[['New York', '800']],
        'iaai-HARTFORD SOUTH - CT':[['New York', '525']],
        'iaai-HARTFORD - CT':[['New York', '525']],
        'iaai-HIGH DESERT - CA':[['California', '450']],
        'iaai-HONOLULU - HI':[['California', '1900']],
        'iaai-HOUSTON - TX':[['New York', '950']],
        'iaai-HOUSTON NORTH - TX':[['New York', '950']],
        'iaai-HUNTSVILLE - AL':[['New York', '900']],
        'iaai-IAA CAT Houston - TX':[['New York', '950']],
        'iaai-INDIANAPOLIS - IN':[['New York', '750']],
        'iaai-JACKSON - MS':[['New York', '800']],
        'iaai-JACKSONVILLE - FL':[['New York', '700']],
        'iaai-KANSAS CITY - KS':[['New York', '850']],
        'iaai-KNOXVILLE - TN':[['New York', '800']],
        'iaai-LAFAYETTE - LA':[['New York', '900']],
        'iaai-LAS VEGAS - NV':[['California', '500']],
        'iaai-LAUREL - MD':[['New York', '550']],
        'iaai-LINCOLN - IL':[['New York', '700']],
        'iaai-LITTLE ROCK - AR':[['New York', '850']],
        'iaai-LONG ISLAND - NY':[['New York', '370']],
        'iaai-LONGVIEW - TX':[['New York', '950']],
        'iaai-LOS ANGELES - CA':[['California', '385']],
        'iaai-LOUISVILLE - KY':[['New York', '780']],
        'iaai-LOUISVILLE NORTH - KY':[['New York', '750']],
        'iaai-LUBBOCK - TX':[['New York', '950']],
        'iaai-MACON - GA':[['New York', '750']],
        'iaai-MANCHESTER - NH':[['New York', '500']],
        'iaai-MCALLEN - TX':[['New York', '950']],
        'iaai-MEMPHIS - TN':[['New York', '825']],
        'iaai-METRO - DC':[['New York', '560']],
        'iaai-MIAMI - FL':[['New York', '800']],
        'iaai-MIAMI NORTH - FL':[['New York', '700']],
        'iaai-MILWAUKEE - WI':[['New York', '750']],
        'iaai-MINNEAPOLIS/ST.PAUL - MN':[['New York', '800']],
        'iaai-MISSOULA - MT':[['California', '1175']],
        'iaai-NASHVILLE - BLENDED SALES - TN':[['New York', '700']],
        'iaai-NASHVILLE - TN':[['New York', '700']],
        'iaai-NEW CASTLE - DE':[['New York', '525']],
        'iaai-NEW ORLEANS - LA':[['New York', '900']],
        'iaai-NEW ORLEANS AND LOUISIANA FLOOD':[['New York', '900']],
        'iaai-NEW ORLEANS EAST - LA':[['New York', '900']],
        'iaai-NEWBURGH - NY':[['New York', '450']],
        'iaai-NORH HOLLYWOOD - CA':[['California', '350']],
        'iaai-NOTHERN NEW JERSEY - NJ':[['New York', '300']],
        'iaai-NOTHERN VIRGINIA - VA':[['New York', '500']],
        'iaai-OKLAHOMA CITY - OK':[['New York', '850']],
        'iaai-OMAHA - NE':[['New York', '800']],
        'iaai-ORLANDO - FL':[['New York', '800']],
        'iaai-ORLANDO NORTH - FL':[['New York', '800']],
        'iaai-PADUCAH - KY':[['New York', '750']],
        'iaai-PENSACOLA - FL':[['New York', '800']],
        'iaai-PERMIAN BASIN - TX':[['New York', '950']],
        'iaai-PHILADELPHIA - PA':[['New York', '350']],
        'iaai-PHOENIX - AZ':[['California', '450']],
        'iaai-PITTSBURGH - PA':[['New York', '650']],
        'iaai-PITTSBURGH NORTH - PA':[['New York', '650']],
        'iaai-PORTAGE - WI':[['New York', '750']],
        'iaai-PORTLAND - OR':[['California', '750']],
        'iaai-PORTLAND GORHAM - ME':[['New York', '600']],
        'iaai-PORTLAND NORTH - OR':[['California', '750']],
        'iaai-PORTLAND WEST - OR':[['California', '750']],
        'iaai-PROVIDENCE - RI':[['New York', '500']],
        'iaai-PULASKI - VA':[['New York', '525']],
        'iaai-RALEIGH - NC':[['New York', '600']],
        'iaai-RENO - NV':[['California', '600']],
        'iaai-RICHMOND - VA':[['New York', '450']],
        'iaai-ROCHESTER - NY':[['New York', '600']],
        'iaai-ROCHESTER WEST - NY':[['New York', '600']],
        'iaai-ROSEDALE - MD':[['New York', '550']],
        'iaai-SACRAMENTO - CA':[['California', '550']],
        'iaai-SALT LAKE CITY - UT':[['California', '550']],
        'iaai-SAN ANTONIO - TX':[['New York', '950']],
        'iaai-SAN ANTONIO SOUTH - TX':[['New York', '950']],
        'iaai-SAN DIEGO - CA':[['California', '350']],
        'iaai-SAVANNAH - GA':[['New York', '700']],
        'iaai-SCRANTON - PA':[['New York', '525']],
        'iaai-SEATLE - WA':[['California', '700']],
        'iaai-SEATLE SOUTH - WA':[['California', '700']],
        'iaai-SHADY SPRING - WV':[['New York', '750']],
        'iaai-SHREVEPORT - LA':[['New York', '900']],
        'iaai-SIOUX FALLS - SD':[['New York', '1100'], ['California', '1100']],
        'iaai-SOUTH BEND - IN':[['New York', '800']],
        'iaai-SOUTHERN NEW JERSEY - NJ':[['New York', '330']],
        'iaai-SPECIALTY DIVISION - IL':[['New York', '700']],
        'iaai-SPOKANE - WA':[['California', '700']],
        'iaai-SPRINGFIELD - MO':[['New York', '850']],
        'iaai-ST. LOUIS - IL':[['New York', '700']],
        'iaai-SUFFOLK - VA':[['New York', '450']],
        'iaai-SYRACUSE - NY':[['New York', '550']],
        'iaai-TAMPA - FL':[['New York', '800']],
        'iaai-TAMPA NORTH - FL':[['New York', '700']],
        'iaai-TAUNTON - MA':[['New York', '500']],
        'iaai-TIDEWATER - VA':[['New York', '500']],
        'Giaai-TIFTON - GA':[['New York', '800']],
        'iaai-TUCSON - AZ':[['California', '520']],
        'iaai-TULSA - OK':[['New York', '850']],
        'iaai-WESTERN COLORADO - CO':[['California', '900']],
        'iaai-WICHITA - KS':[['New York', '900']],
        'iaai-WILMINGTON - NC':[['New York', '600']],
        'iaai-YORK SPRINGS - PA':[['New York', '500']],
        'Copart - ABILENE - TX':[['New York', '950']],
        'Copart - ALBANY - NY':[['New York', '370']],
        'Copart - ALBUQUERQUE - NM':[['California', '650']],
        'Copart - ALTOONA - PA':[['New York', '650']],
        'Copart - AMARILLO - TX':[['New York', '950']],
        'Copart - ANCHORAGE - AK':[['California', '2000']],
        'Copart - ANDREWS-TX':[['New York', '950']],
        'Copart - ANTELOPE - CA':[['California', '550']],
        'Copart - APPLETON - WI':[['New York', '750']],
        'Copart - ATLANTA EAST - GA':[['New York', '700']],
        'Copart - ATLANTA NORTH - GA':[['New York', '700']],
        'Copart - ATLANTA SOUTH - GA':[['New York', '700']],
        'Copart - ATLANTA WEST - GA':[['New York', '700']],
        'Copart - AUSTIN - TX':[['New York', '950']],
        'Copart - BAKERSFIELD - CA':[['California', '300']],
        'Copart - BALTIMORE - MD':[['New York', '400']],
        'Copart - BATON ROUGE - LA':[['New York', '900']],
        'Copart - BILLINGS - MT':[['New York', '1100'], ['California', '1100']],
        'Copart - BIRMINGHAM - AL':[['New York', '750']],
        'Copart - BOISE - ID':[['California', '800']],
        'Copart - CANDIA - NH':[['New York', '400']],
        'Copart - CARTERSVILLE - GA':[['New York', '700']],
        'Copart - CASPER - WY':[['California', '1400']],
        'Copart - CHAMBERSBURG - PA':[['New York', '600']],
        'Copart - CHARLESTON - SC':[['New York', '600']],
        'Copart - CHARLESTON - WV':[['New York', '650']],
        'Copart - CHICAGO NORTH - IL':[['New York', '700']],
        'Copart - CHICAGO SOUTH - IL':[['New York', '700']],
        'Copart - CHINA GROVE - NC':[['New York', '600']],
        'Copart - CLEVELAND EAST - OH':[['New York', '600']],
        'Copart - CLEVELAND WEST - OH':[['New York', '600']],
        'Copart - COLORADO SPRINGS - CO':[['California', '700']],
        'Copart - COLUMBIA - MO':[['New York', '750']],
        'Copart - COLUMBIA - SC':[['New York', '650']],
        'Copart - COLUMBUS - OH':[['New York', '600']],
        'Copart - CORPUS CHRISTI - TX':[['New York', '950']],
        'Copart - CRASHEDTOYS EAST BETHEL - MN':[['New York', '800']],
        'Copart - CRASHEDTOYS ELDRIDGE - IA':[['New York', '850']],
        'Copart - CULPEPER - VA':[['New York', '700']],
        'Copart - DALLAS - TX':[['New York', '950']],
        'Copart - DALLAS SOUTH - TX':[['New York', '950']],
        'Copart - DANVILLE - VA':[['New York', '500']],
        'Copart - DAVENPORT - IA':[['New York', '750']],
        'Copart - DAYTON - OH':[['New York', '600']],
        'Copart - DENVER - CO':[['California', '700']],
        'Copart - DENVER CENTRAL - CO':[['California', '700']],
        'Copart - DENVER SOUTH - CO':[['California', '700']],
        'Copart - DES MOINES - IA':[['New York', '800']],
        'Copart - DETROIT - MI':[['New York', '650']],
        'Copart - EL PASO - TX':[['New York', '950']],
        'Copart - EUGENE - OR':[['California', '750']],
        'Copart - EXETER - RI':[['New York', '500']],
        'Copart - FAYETTEVILLE - AR':[['New York', '850']],
        'Copart - FLINT - MI':[['New York', '700']],
        'Copart - FORT WAYNE - IN':[['New York', '700']],
        'Copart - FREMONT - CA':[['California', '450']],
        'Copart - FRESNO - CA':[['California', '400']],
        'Copart - FT.PIERCE - FL':[['New York', '800']],
        'Copart - FT.WORTH - TX':[['New York', '950']],
        'Copart - GLASSBORO EAST - NJ':[['New York', '300']],
        'Copart - GRAHAM - WA':[['California', '700']],
        'Copart - GREER - SC':[['New York', '650']],
        'Copart - HAMMOND - IN':[['New York', '700']],
        'Copart - HAMPTON - VA':[['New York', '500']],
        'Copart - HARRISBURG - PA':[['New York', '450']],
        'Copart - HARTFORD - CT':[['New York', '300']],
        'Copart - HAYWARD - CA':[['California', '450']],
        'Copart - HELENA - MT':[['California', '1100'], ['New York', '1100']],
        'Copart - HONOLULU - HI':[['California', '1900']],
        'Copart - HOUSTON - TX':[['New York', '950']],
        'Copart - INDIANAPOLIS - IN':[['New York', '750']],
        'Copart - IONIA - MI':[['New York', '700']],
        'Copart - JACKSON - MS':[['New York', '800']],
        'Copart - JACKSONVILLE EAST - FL':[['New York', '750']],
        'Copart - JACKSONVILLE WEST - FL':[['New York', '750']],
        'Copart - KANSAS CITY - KS':[['New York', '850']],
        'Copart - KINCHELOE - MI':[['New York', '700']],
        'Copart - KNOXVILLE - TN':[['New York', '800']],
        'Copart - LANSING - MI':[['New York', '700']],
        'Copart - LAS VEGAS - NV':[['California', '500']],
        'Copart - LEXINGTON EAST - KY':[['New York', '700']],
        'Copart - LEXINGTON WEST - KY':[['New York', '700']],
        'Copart - LINCOLN - NE':[['New York', '800']],
        'Copart - LITTLE ROCK - AR':[['New York', '850']],
        'Copart - LONG BEACH - CA':[['California', '300']],
        'Copart - LONG ISLAND - NY':[['New York', '350']],
        'Copart - LONGVIEW - TX':[['New York', '950']],
        'Copart - LOS ANGELES - CA':[['California', '300']],
        'Copart - LOUISVILLE - KY':[['New York', '700']],
        'Copart - LUFKIN - TX':[['New York', '950']],
        'Copart - LYMAN - ME':[['New York', '550']],
        'Copart - MADISON - WI':[['New York', '750']],
        'Copart - MARTINEZ - CA':[['California', '450']],
        'Copart - MCALLEN - TX':[['New York', '950']],
        'Copart - MEBANE - NC':[['New York', '600']],
        'Copart - MEMPHIS - TN':[['New York', '800']],
        'Copart - MIAMI CENTRAL - FL':[['New York', '750']],
        'Copart - MIAMI NORTH - FL':[['New York', '750']],
        'Copart - MIAMI SOUTH - FL':[['New York', '750']],
        'Copart - MILWAUKEE - WI':[['New York', '750']],
        'Copart - MINNEAPOLIS - MN':[['New York', '800']],
        'Copart - MINNEAPOLIS NORTH - MN':[['New York', '850']],
        'Copart - MOBILE - AL':[['New York', '800']],
        'Copart - MONTGOMERY - AL':[['New York', '750']],
        'Copart - NASHVILLE - TN':[['New York', '700']],
        'Copart - NEW ORLEANS - LA':[['New York', '900']],
        'Copart - NEWBURGH - NY':[['New York', '400']],
        'Copart - NORTH BOSTON - MA':[['New York', '500']],
        'Copart - NORTH SEATTLE - WA':[['California', '750']],
        'Copart - OCALA - FL':[['New York', '750']],
        'Copart - OGDEN- UT':[['California', '550']],
        'Copart - OKLAHOMA CITY - OK':[['New York', '850']],
        'Copart - ORLANDO - FL':[['New York', '750']],
        'Copart - ORLANDO NORTH - FL':[['New York', '750']],
        'Copart - ORLANDO SOUTH - FL':[['New York', '750']],
        'Copart - PASCO - WA':[['California', '700']],
        'Copart - PEORIA - IL':[['New York', '700']],
        'Copart - PHILADELPHIA - PA':[['New York', '350']],
        'Copart - PHILADELPHIA EAST':[['New York', '350']],
        'Copart - PHILADELPHIA EAST - SUBLOT - PA':[['New York', '350']],
        'Copart - PHOENIX - AZ':[['California', '450']],
        'Copart - PITTSBURG SOUTH - PA':[['New York', '550']],
        'Copart - PITTSBURGH EAST - PA':[['New York', '550']],
        'Copart - PITTSBURGH NORTH - PA':[['New York', '550']],
        'Copart - PORTLAND NORTH - OR':[['California', '750']],
        'Copart - PORTLAND SOUTH - OR':[['California', '750']],
        'Copart - PUNTA GORDA - FL':[['New York', '800']],
        'Copart - RALEIGH - NC':[['New York', '600']],
        'Copart - RANCHO CUCAMONGA - CA':[['California', '250']],
        'Copart - RENO - NV':[['California', '600']],
        'Copart - RICHMOND - VA':[['New York', '500']],
        'Copart - ROCHESTER - NY':[['New York', '600']],
        'Copart - SACRAMENTO - CA':[['California', '450']],
        'Copart - SALT LAKE CITY - UT':[['California', '550']],
        'Copart - SAN ANTONIO - TX':[['New York', '950']],
        'Copart - SAN BERNARDINO- CA':[['California', '250']],
        'Copart - SAN DIEGO - CA':[['California', '300']],
        'Copart - SAN JOSE - CA':[['California', '450']],
        'Copart - SAVANNAH - GA':[['New York', '700']],
        'Copart - SCRANTON - PA':[['New York', '500']],
        'Copart - SEAFORD - DE':[['New York', '400']],
        'Copart - SHREVEPORT - LA':[['New York', '900']],
        'Copart - SIKESTON - MO':[['New York', '750']],
        'Copart - SO SACRAMENTO - CA':[['California', '450']],
        'Copart - SOMERVILLE - NJ':[['New York', '300']],
        'Copart - SOUTH BOSTON - MA':[['New York', '500']],
        'Copart - SOUTHERN ILLINOIS - IL':[['New York', '700']],
        'Copart - SPARTANBURG - SC':[['New York', '600']],
        'Copart - SPOKANE - WA':[['California', '700']],
        'Copart - SPRINGFIELD - MO':[['New York', '850']],
        'Copart - ST. CLOUD - MN':[['New York', '850']],
        'Copart - ST. LOUIS - MO':[['New York', '800']],
        'Copart - SUN VALLEY - CA':[['California', '300']],
        'Copart - SYRACUSE - NY':[['New York', '550']],
        'Copart - TALLAHASSEE - FL':[['New York', '800']],
        'Copart - TAMPA SOUTH - FL':[['New York', '800']],
        'Copart - TANNER - AL':[['New York', '750']],
        'Copart - TIFTON - GA':[['New York', '750']],
        'Copart - TORONTO CANADA':[['New York', '1']],
        'Copart - TRENTON - NJ':[['New York', '300']],
        'Copart - TUCSON - AZ':[['California', '500']],
        'Copart - TULSA - OK':[['New York', '850']],
        'Copart - VALLEJO - CA':[['California', '500']],
        'Copart - VAN NUYS - CA':[['California', '300']],
        'Copart - WACO - TX':[['New York', '950']],
        'Copart - WALTON - KY':[['New York', '700']],
        'Copart - WASHINGTON DC - MD':[['New York', '500']],
        'Copart - WEBSTER - NH':[['New York', '700']],
        'Copart - WEST PALM BEACH - FL':[['New York', '800']],
        'Copart - WEST WARREN - MA':[['New York', '450']],
        'Copart - WHEELING - IL':[['New York', '700']],
        'Copart - WICHITA - KS':[['New York', '900']],
        'Copart - YORK HAVEN - PA':[['New York', '450']]
    };

    jQuery('.number').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9]/g)) {
            this.value = this.value.replace(/[^0-9]/g, '');
        }
    });

    // jQuery(window).load(function(){
    //     var i = 0;
    //     jQuery.each(list, function(index,value){

    //         jQuery('.location_lot').append('<option value="' + [i] + '">' + index + '</option>');
    //         i++;
            
    //     })
    //         // console.log(index);
    // });
// электро двигател
    jQuery('.type_engine').change(function(){  
        var engine = $("div.type_engine button").attr("title");
        if (engine == "Электро") {
            jQuery('.amount').val('-----------').attr('disabled','disabled');
            //jQuery('.amount').addAttr('disabled');
        } else {
            jQuery('.amount').val('').removeAttr('disabled');
        }
    });
// !!!!!!!!!!!!
    jQuery(".location_lot").change(function(){
        var location_lot = jQuery('.location_lot option:selected').text();
        jQuery('.port_usa option').remove();

        jQuery.each(list, function(index,value){

            if (index == location_lot) {
                var i = 0;
                jQuery.each(value, function() {
                    jQuery('.port_usa').append('<option value="' + value[i][1] + '">' + value[i][0] + '</option>');
                    i++;
                })
            }

        })
    });

    jQuery('#calculate').on('click', function(){
        var value = jQuery(".value").val(); // Стоимость авто
        var amount = parseInt(jQuery(".amount").val()); // Обьем двигателя
        var year_car = parseInt(jQuery(".year_car").val()); // Год выпуска авто
        var type_action = $("div.type_action button").attr("title"); // тип аукциона
        var type_engine = $("div.type_engine button").attr("title"); // тип двигателя
        var size_auto = $("div.size_auto button").attr("title"); // размер автомобиля
        var port = jQuery(".port_usa").val(); // ближайший порт
        var port_usa = jQuery(".port_usa option:selected").text(); // ближайший порт
        var delivery_odessa; // цена доставки в Одессу
        var rate;
        var duty;
        var vat;
        var action_gathering; // коммисия аукционна
        var ukr_delivery = '250';
        var price_USA;
        var customs_clearance;
        var price_percent;
        var ukr_del_all;
        
    
     // var mgv = $("div.type_engine button").attr("title");
     //  console.log(mgv);  type_action
      // var mgw = $("div.type_action button").attr("title");
      // console.log(type_action);

        if (value != '' && jQuery(".amount").val() != '' && jQuery(".overland_delivery").val() != '' && type_engine != 0 && size_auto != 0 && port != 0) {
            // !!!!!!!!!!!!!!!!!!!!
           
           


            jQuery('.land_delivery_usa').html(port);
            
            
           



            

            // Сбор аукционов
            if (type_action == "Iaai") {
                if (value < 100) {
                    action_gathering = 60;
                } else if( (100 <= value) && (value < 200)) {
                    action_gathering = 128;
                } else if( (200 <= value) && (value < 350)) {
                    action_gathering = 163;
                } else if( (350 <= value) && (value < 400)) {
                    action_gathering = 178;
                } else if( (400 <= value) && (value < 500)) {
                    action_gathering = 188;
                } else if( (500 <= value) && (value < 600)) {
                    action_gathering = 228;
                } else if( (600 <= value) && (value < 700)) {
                    action_gathering = 243;
                } else if( (700 <= value) && (value < 800)) {
                    action_gathering = 258;
                } else if( (800 <= value) && (value < 900)) {
                    action_gathering = 273;
                } else if( (900 <= value) && (value < 1000)) {
                    action_gathering = 288;
                } else if( (1000 <= value) && (value < 1100)) {
                    action_gathering = 313;
                } else if( (1100 <= value) && (value < 1200)) {
                    action_gathering = 328;
                } else if( (1200 <= value) && (value < 1300)) {
                    action_gathering = 338;
                } else if( (1300 <= value) && (value < 1400)) {
                    action_gathering = 348;
                } else if( (1400 <= value) && (value < 1500)) {
                    action_gathering = 363;
                } else if( (1500 <= value) && (value < 1600)) {
                    action_gathering = 388;
                } else if( (1600 <= value) && (value < 1800)) {
                    action_gathering = 408;
                } else if( (1800 <= value) && (value < 2000)) {
                    action_gathering = 428;
                } else if( (2000 <= value) && (value < 2200)) {
                    action_gathering = 463;
                } else if( (2200 <= value) && (value < 2400)) {
                    action_gathering = 478;
                } else if( (2400 <= value) && (value < 2600)) {
                    action_gathering = 493;
                } else if( (2600 <= value) && (value < 2800)) {
                    action_gathering = 513;
                } else if( (2800 <= value) && (value < 3000)) {
                    action_gathering = 528;
                } else if( (3000 <= value) && (value < 3500)) {
                    action_gathering = 563;
                } else if( (3500 <= value) && (value < 4000)) {
                    action_gathering = 578;
                } else if( (4000 <= value) && (value < 4999)) {
                    action_gathering = 598;
                } else if( (5000 <= value) && (value < 999000)) {
                    action_gathering = (value * 0.01) + 598;
                    action_gathering = action_gathering;
                }

            } else if (type_action == "Copart") {
                if (value < 50) {
                    action_gathering = 60;
                } else if( (50 <= value) && (value < 100)) {
                    action_gathering = 60;
                } else if( (100 <= value) && (value < 200)) {
                    action_gathering = 123;
                } else if( (200 <= value) && (value < 300)) {
                    action_gathering = 148;
                } else if( (300 <= value) && (value < 350)) {
                    action_gathering = 173;
                } else if( (350 <= value) && (value < 400)) {
                    action_gathering = 173;
                } else if( (400 <= value) && (value < 450)) {
                    action_gathering = 208;
                } else if( (450 <= value) && (value < 500)) {
                    action_gathering = 208;
                } else if( (500 <= value) && (value < 550)) {
                    action_gathering = 233;
                } else if( (550 <= value) && (value < 600)) {
                    action_gathering = 238;
                } else if( (600 <= value) && (value < 700)) {
                    action_gathering = 248;
                } else if( (700 <= value) && (value < 800)) {
                    action_gathering = 263;
                } else if( (800 <= value) && (value < 900)) {
                    action_gathering = 278;
                } else if( (900 <= value) && (value < 1000)) {
                    action_gathering = 293;
                } else if( (1000 <= value) && (value < 1200)) {
                    action_gathering = 328;
                } else if( (1200 <= value) && (value < 1300)) {
                    action_gathering = 353;
                } else if( (1300 <= value) && (value < 1400)) {
                    action_gathering = 353;
                } else if( (1400 <= value) && (value <= 1500)) {
                    action_gathering = 378;
                } else if( (1500 <= value) && (value <= 1600)) {
                    action_gathering = 388;
                } else if( (1600 <= value) && (value <= 1700)) {
                    action_gathering = 493;
                } else if( (1700 <= value) && (value <= 1800)) {
                    action_gathering = 493;
                } else if( (1800 <= value) && (value <= 2000)) {
                    action_gathering = 523;
                } else if( (2000 <= value) && (value <= 2400)) {
                    action_gathering = 583;
                } else if( (2400 <= value) && (value <= 2500)) {
                    action_gathering = 583;
                } else if( (2500 <= value) && (value <= 3000)) {
                    action_gathering = 623;
                } else if( (3000 <= value) && (value <= 3500)) {
                    action_gathering = 733;
                } else if( (3500 <= value) && (value <= 4000)) {
                    action_gathering = 733;
                } else if( (4000 <= value) && (value <= 4500)) {
                    action_gathering = 753;
                } else if( (4500 <= value) && (value <= 5000)) {
                    action_gathering = 753;
                } else if( (5000 <= value) && (value <= 6000)) {
                    action_gathering = 853;
                } else if( (6000 <= value) && (value <= 7500)) {
                    action_gathering = 883;
                } 
                else if( (7500 <= value) && (value <= 8000)) {
                    action_gathering = 983;
                }
                else if( (8000 <= value) && (value <= 10000)) {
                    action_gathering = 1013;
                } else if( (10000 <= value) && (value <= 15000)) {
                    action_gathering = 1218;
                } else if( (15000 <= value) && (value <= 20000)) {
                    action_gathering = 1423;
                } else if( (20000 <= value) && (value <= 25000)) {
                    action_gathering = 1623;
                } else if( (25000 <= value) && (value <= 30000)) {
                    action_gathering = 1823;
                } else if( (30000 <= value) && (value <= 35000)) {
                    action_gathering = 2023;
                }  else if( (35000 <= value) && (value <= 1000000)) {
                    action_gathering = (value * 0.05) + 248;
                    action_gathering = action_gathering;
      console.log(action_gathering);
                }
          
            }
            
            jQuery('.auction_fee').html('').html(action_gathering);
            jQuery('.price_USA').html('').html(value);
            
         

            

            //Морская доставка
            if (size_auto == "Небольшое авто/купе/седан") { //маленький
                if (port_usa == 'New York') {
                    delivery_odessa = '800';
                } else if (port_usa == 'California') {
                    delivery_odessa = '1000';
                } 
            } else if (size_auto == "Кроссовер/SUV") { // Средний
                if (port_usa == 'New York') {
                    delivery_odessa = '1000';
                } else if (port_usa == 'California') {
                    delivery_odessa = '1300';
                } 
            } else if (size_auto == "Пикап/Микроавтобус/Грузовик") { // Большой
                if (port_usa == 'New York') {
                    delivery_odessa = '1200';
                } else if (port_usa == 'California') {
                    delivery_odessa = '1500';
                } 
            }
            jQuery('.delivery_port').html('').html(delivery_odessa);
            //

              
               

            if (type_engine == "Бензин") {  //бензиновый двигатель
                if (amount <= 3000) {
                    rate = '58';
                }  else if (amount > 3000){
                    rate = '115';
                }
                 jQuery('.rates').html('').html(rate);

                
                    jQuery('.expedition_odessa').html('1100');
                    jQuery('.value_service').html('800');
                  
                    jQuery('.ukr_deliverys').html('').html(ukr_delivery);
              

                   }
                    //   else if (type_engine == "Гибрид") { //дизельный двигатель
                    //     if (amount <= 35500) {
                    //         rate = '115';
                    //     } 
                    //     jQuery('.rates').html('').html(rate);
                    //     jQuery('.expedition_odessa').html('1100');
                    //     jQuery('.value_service').html('800');
                    //     jQuery('.ukr_deliverys').html('').html(ukr_delivery);



                    // }
           

                



            else if (type_engine == "Дизель") { //дизельный двигатель
                if (amount <= 3500) {
                    rate = '86';
                } else  if (amount > 3500) {
                    rate = '173';
                }
                jQuery('.rates').html('').html(rate);
               

                 
                    
                    jQuery('.expedition_odessa').html('1100');
                    jQuery('.value_service').html('800');
                    jQuery('.ukr_deliverys').html('').html(ukr_delivery);
               


            } else if (type_engine == "Электро") { //электро
                
               
                    jQuery('.expedition_odessa').html('1100');
                    jQuery('.value_service').html('800');
                    jQuery('.duty').html('');
                    jQuery('.vat').html('');
                    jQuery('.ukr_deliverys').html('').html(ukr_delivery);
                    jQuery('.customs_clearancee').html('1900');
                

            }

           


            // возраст автомобиля 
            if (year_car < 2019) {
                var excise_duty = (2019 - parseInt(jQuery(".year_car").val())) * parseInt(jQuery('.rates').text()) * parseInt(jQuery(".amount").val());
                excise_duty = excise_duty * 0.001;
            } else if (year_car == 2019){
                var excise_duty = 1 * parseInt(jQuery('.rates').text()) * parseInt(jQuery(".amount").val());
                excise_duty = excise_duty * 0.001;
            }
                
               jQuery('.excise_duty').html(excise_duty.toFixed());

               

                // Пошлина

               duty = parseInt(jQuery('.value').val()) + parseInt(jQuery('.auction_fee').text());
               duty = (duty + 500) * 0.1;
               jQuery('.duty').html('').html(duty.toFixed());

                //  НДС
                vat = parseInt(jQuery('.value').val()) + parseInt(jQuery('.auction_fee').text()) + parseInt(jQuery('.duty').text()) + parseInt(jQuery('.excise_duty').text());
                vat = (vat + 500) * 0.2;
                jQuery('.vat').html('').html(vat.toFixed());
                 //  растаможка
                customs_clearance = parseInt(jQuery('.expedition_odessa').text()) + parseInt(jQuery('.excise_duty').text()) + parseInt(jQuery('.duty').text()) + parseInt(jQuery('.vat').text()) + parseInt(jQuery('.value_service').text());

                    // jQuery('.customs_clearance').html('').html(customs_clearance);

                    jQuery('.customs_clearance').html(customs_clearance);
                    jQuery('.customs_clearancee').html(customs_clearance);
                //  доставка в Украину 
              ukr_del_all = parseInt(jQuery('.land_delivery_usa').text()) + parseInt(jQuery('.delivery_port').text()) + parseInt(jQuery('.ukr_deliverys').text());
              jQuery('.value_servicee').html(ukr_del_all);
                
                // Стоимость в США + % 
              price_percent = parseInt(jQuery('.value').val()) + parseInt(jQuery('.auction_fee').text());
              jQuery('.price_USAA').html(price_percent);
                
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            			


                if (type_engine == "Электро") {
                    var result = parseInt(jQuery('.value').val()) + parseInt(jQuery('.auction_fee').text()) + parseInt(jQuery('.land_delivery_usa').text()) + parseInt(jQuery('.delivery_port').text())  + parseInt(jQuery('.value_service').text()) + parseInt(jQuery('.expedition_odessa').text()) + parseInt(jQuery('.ukr_deliverys').text());
                    jQuery('.duty').html('0');
                    jQuery('.excise_duty').html('0');
                    jQuery('.vat').html('0');
                    jQuery('.customs_clearancee').html(parseInt(jQuery('.expedition_odessa').text()) + parseInt(jQuery('.value_service').text()));
                    
                } else {
                    var result = parseInt(jQuery('.value').val()) + parseInt(jQuery('.vat').text()) + parseInt(jQuery('.duty').text()) + parseInt(jQuery('.excise_duty').text()) + parseInt(jQuery('.auction_fee').text()) + parseInt(jQuery('.land_delivery_usa').text()) + parseInt(jQuery('.delivery_port').text())  + parseInt(jQuery('.value_service').text()) + parseInt(jQuery('.expedition_odessa').text()) + parseInt(jQuery('.ukr_deliverys').text());
                }
             
                 if (type_engine == "Электро") {
                    var result = parseInt(jQuery('.value').val()) + parseInt(jQuery('.auction_fee').text()) + parseInt(jQuery('.land_delivery_usa').text()) + parseInt(jQuery('.delivery_port').text())  + parseInt(jQuery('.value_service').text()) + parseInt(jQuery('.expedition_odessa').text()) + parseInt(jQuery('.ukr_deliverys').text());
                    jQuery('.duty').html('0');
                    jQuery('.excise_duty').html('0');
                    jQuery('.vat').html('0');
                    jQuery('.customs_clearancee').html(parseInt(jQuery('.expedition_odessa').text()) + parseInt(jQuery('.value_service').text()));
                } else {
                var result = parseInt(jQuery('.value').val()) + parseInt(jQuery('.vat').text()) + parseInt(jQuery('.duty').text()) + parseInt(jQuery('.excise_duty').text()) + parseInt(jQuery('.auction_fee').text()) + parseInt(jQuery('.land_delivery_usa').text()) + parseInt(jQuery('.delivery_port').text()) +  parseInt(jQuery('.value_service').text()) + parseInt(jQuery('.expedition_odessa').text()) + parseInt(jQuery('.ukr_deliverys').text());
            }
                
             
               
            jQuery('.result').html(result);
            jQuery('.resultt').html(result);
            
          
            
            jQuery(function(){
                function show_popup(){
                     jQuery('#message').html('').html('<span style="color:#7dc128; font-size:20px;">Остались вопросы? Свяжитесь с нами по телефону <a style="color:#7dc128 !important;" href="tel:+380973473434">+38 097 3473 434</a></span>');
                    // jQuery('#message').html('').html('<span style="color:red">Не все поля заполены</span>');
                };
                window.setTimeout( show_popup, 8000 ); // 5 seconds
            });


        } 

         else {
             jQuery('#message').html('').html('<span style="color:red; font-size:20px ">Не все поля заполены</span>');
         }
          
    });

});