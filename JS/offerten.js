

var setOffertUp = (function(){

    var eventHandelers = function(){
        var menuNavItems = document.querySelectorAll("#side-bar-nav > li > a");
        var checkoutContent = document.querySelector('#checkout-wrapper');
        var extrasButton = document.querySelector('.extra-roof-dropBtn');
        var standardObsticles = document.querySelectorAll('.standard-choices input');
        var firstNavItem = document.querySelector('.menu-1 > a');
        var backForthNavButton = document.querySelectorAll('.back-forth-menu > a');
        var selectedRoofModel = document.querySelectorAll('#takModell > input');
        var sideContent1 = document.querySelector("#side-content1")
        var sideContentImg = document.querySelector("#side-content1 > .container > img");
        var sideContent2 = document.querySelector("#side-content2")
        var sideContent3 = document.querySelector("#side-content3")
        var resetedExtras = document.querySelector(".roofMetrics > .wrapper > .extras").innerHTML;
        var logisticsBoxes = document.querySelectorAll("#roofPaperAndScaffold > .box-Holder > input[type=checkbox]")
        var submitButton = document.getElementById("submit-offert")
        var offertForm = $("#offertForm")


        //Insert factors for each roof
        var standardSet = [
            {
                model:"tak1",
                name: "Sadeltak",
                obstacles:["#ventilation", "#spigot", "#weatherproofing", "#roofDownpipes", "#roofGutters", "#footRinse"],
                vindskivaFaktor: 0.2,
                fotrannaFaktor:0.11,
                snowProtectionFactor:0.11,
                gutterFactor: 0.11
            },
            {
                model:"tak2",
                name: "Pulpettak",
                obstacles:["#ventilation", "#spigot", "#weatherproofing", "#roofDownpipes", "#roofGutters", "#footRinse"],
                vindskivaFaktor: 0.3,
                fotrannaFaktor: 0.11,
                snowProtectionFactor:0.11,
                gutterFactor: 0.11
            },
            {
                model:"tak3",
                name: "Halvvalmat sadeltak",
                obstacles:["#ventilation", "#spigot", "#weatherproofing", "#roofDownpipes", "#roofGutters", "#footRinse"],
                vindskivaFaktor: 0.2,
                fotrannaFaktor: 0.11,
                snowProtectionFactor:0.11,
                gutterFactor: 0.11
            },
            {
                model:"tak4",
                name: "Vinkeltak",
                obstacles:["#ventilation", "#spigot", "#roofDownpipes", "#roofGutters", "#footRinse", "#angleChute", "#nock"],
                vinkelrannaFaktor: 0.06,
                nockFaktor: 0.15,
                fotrannaFaktor:0.27,
                snowProtectionFactor:0.27,
                gutterFactor: 0.27
            },
            {
                model:"tak5",
                name: "Helvalmat sadeltak",
                obstacles:["#ventilation", "#spigot", "#roofDownpipes", "#roofGutters", "#nock", "#footRinse"],
                nockFaktor: 0.28,
                fotrannaFaktor: 0.40,
                snowProtectionFactor:0.40,
                gutterFactor: 0.40
            },
            {
                model:"tak6",
                name: "Mansardtak",
                obstacles:["#ventilation", "#spigot", "#weatherproofing", "#roofDownpipes", "#roofGutters", "#nock", "#footRinse", "#roofBreak"],
                nockFaktor: 0.7,
                fotrannaFaktor: 0.14,
                snowProtectionFactor:0.14,
                gutterFactor: 0.14,
                takbrottFaktor: 0.14,
                vindskivaFaktor:0.2
            },
            {
                model:"tak7",
                name: "Halvvalmat masardtak",
                obstacles:["#ventilation", "#spigot", "#roofDownpipes", "#roofGutters", "#nock", "#footRinse", "#roofBreak"],
                nockFaktor: 0.7,
                fotrannaFaktor: 0.14,
                snowProtectionFactor:.14,
                gutterFactor: 0.14,
                takbrottFaktor: 0.14
            },
            {
                model:"tak8",
                name: "Helvalmat mansardtak",
                obstacles:["#ventilation", "#spigot", "#roofDownpipes", "#roofGutters", "#nock", "#footRinse", "#roofBreak"],
                nockFaktor: 0.21,
                fotrannaFaktor: 0.24,
                snowProtectionFactor:.24,
                gutterFactor:0.24,
                takbrottFaktor: 0.21
            },
            {
                model:"tak9",
                name: "Pyramidtak",
                obstacles:["#ventilation", "#spigot", "#roofDownpipes", "#roofGutters", "#nock", "#footRinse"],
                nockFaktor: 0.28,
                fotrannaFaktor: 0.4,
                snowProtectionFactor:0.4,
                gutterFactor: 0.4
            },
            {
                model:"tak10",
                name: "Valmat pyramidtak",
                obstacles:["#ventilation", "#spigot", "#roofDownpipes", "#roofGutters", "#nock", "#footRinse", "#roofBreak"],
                nockFaktor: 0.21,
                fotrannaFaktor: 0.24,
                snowProtectionFactor:.24,
                gutterFactor: 0.24,
                takbrottFaktor: 0.21
            },
            {
                model:"tak11",
                name: "Motfallstak",
                obstacles:["#ventilation", "#spigot", "#roofGenzimGutters", "#angleChute"],
                vinkelrannaFaktor:0.1,
                gezimFaktor:0.1
            },
            {
                model:"tak12",
                name: "Korstak",
                obstacles:["#ventilation", "#spigot", "#weatherproofing", "#roofDownpipes", "#roofGutters"],
                vinkelrannaFaktor:0.1,
                vindskivaFaktor:0.2,
                fotrannaFaktor:0.11,
                snowProtectionFactor:0.11,
                gutterFactor: 0.11
            },
            {
                model:"tak13",
                name: "Bågtak",
                obstacles:["#ventilation", "#spigot", "#roofDownpipes", "#roofGutters"],
                nockFaktor: 0.2,
                fotrannaFaktor: 0.2,
                snowProtectionFactor:0.2,
                gutterFactor: 0.2,
                takbrottFaktor: 0.2
            },
            {
                model:"tak14",
                name: "Kyrktorn",
                obstacles:["#roofDownpipes", "#roofGutters"],
                nockFaktor: 0.2,
                fotrannaFaktor: 0.2,
                snowProtectionFactor:0.2,
                gutterFactor: 0.2,
                takbrottFaktor: 0.2
            }
        ];

        const setActivated = function(element){
            var oldTarget = document.querySelector('.activated');
            oldTarget.classList.remove('activated')
            element.classList.add('activated');
            setCheckoutUp(element);
        }

        const countLogisticsPrice = () => {
            let checkedLogistics = getPaperScaffolds()
            let logisticPriceObject = getLogistics()
            let totalPrice = checkedLogistics.reduce((price, logistic) => {
                for (let j = 0; j < logisticPriceObject.length; j++){
                    logisticPriceObject[j].name == logistic.name ? price += logisticPriceObject[j].total() * logistic.quantity : price
                }
                return Math.round(price)
            }, 0)

            let punkt = "."
            totalprice_String = JSON.stringify(totalPrice)

            if (totalprice_String.length == 5){
                totalprice_String
                totalprice_String = [totalprice_String.slice(0, 2), punkt, totalprice_String.slice(2)].join('')
            }

            document.querySelector('#logisticCosts').innerHTML = "Övriga kostnader: " + totalprice_String + " kr"
        }

        const setCheckoutUp = function(element){
            if( element.id == "checkoutMenuItem" ){
                let currentShowing = document.querySelector("main.showing")
                currentShowing.classList.remove("showing")
                checkoutContent.classList.add('showing')

                let algoParameters = setAlgoParameters(standardSet)
                let thePriceObj = calculatingPrice(algoParameters)
                setUpSummary(thePriceObj)
            } else if(element.id == "jobToDoMenuItem"){
                let currentShowing = document.querySelector("main.showing")
                currentShowing.classList.remove("showing")
                sideContent1.classList.add('showing')
            } else if(element.id == "detailsMenuItem"){
                let currentShowing = document.querySelector("main.showing")
                currentShowing.classList.remove("showing")
                sideContent2.classList.add('showing')
            } else if(element.id == "whoMenuItem"){
                let currentShowing = document.querySelector("main.showing")
                currentShowing.classList.remove("showing")
                sideContent3.classList.add('showing')
            }
        }

        const setupStandardObsticle = () => {
            resetStandard(resetedExtras);
            let standardRoof = document.querySelector("#takModell > input[type=radio]:checked").id
            //let clickedValue = document.querySelector("#takModell > input[type=radio]:checked").value
            /*
            clickedValue = clickedValue.split(' ').join('_')
            clickedValue = clickedValue.split('å').join('a')
            let theUrl = "../img/taktyper/" + clickedValue + ".svg"
            sideContentImg.src = theUrl
            */
            showSVG(standardRoof)
            setStandards(standardRoof, standardSet);
        }

        const showSVG = (roofID) => {
            document.querySelector("#side-content1 > .container > .roof-showing").classList.remove('roof-showing')
            document.querySelector("#side-content1 > .container > ." + roofID).classList.add("roof-showing")
        }

        for (var i = 0; i < selectedRoofModel.length; i++){
            selectedRoofModel[i].addEventListener('click', function(){
                setupStandardObsticle()
            })
        }

        for (var i = 0; i < menuNavItems.length; i++){
            menuNavItems[i].addEventListener('click', function(event) {
                event.preventDefault();
                setActivated(this);
            });
        };

        for ( var i = 0; i < backForthNavButton.length; i++){
            backForthNavButton[i].addEventListener('click', function(event){
                event.preventDefault();
                var clickedThis = this;
                var theData = this.dataset.where;
                var newPage = document.querySelector('#side-bar-nav > .' + theData + ' > a');
                setActivated(newPage);
            })
        }

        for (let i = 0; i < logisticsBoxes.length; i++){
            logisticsBoxes[i].addEventListener('change', function(){
                countLogisticsPrice()
            })
        }

        if ( extrasButton !== null ){
            var theCaret = document.querySelector('.extra-roof-dropBtn > span');
            var theExtras = document.querySelector('.extras');
            var prevRad = null;

            var showExtraSection = function(theSection, theArrow){
                if ( hasClass(extrasButton, 'showing') ){
                    removeShowing(theArrow);
                }
                else {
                    addShowing(theSection, theArrow);
                }
            };

            var removeShowing = function(theArrow){
                $(extrasButton).removeClass('showing');
                $('.extras').removeClass('showing');
                theArrow.className = 'caret';
            }

            var addShowing = function(theSection, theArrow){
                if (hasClass(extrasButton, 'showing')){
                    return;
                }
                else{
                    addClass('showing', extrasButton);
                    addClass('showing', theSection);
                    theArrow.className = "caret-up";
                }
            };

            extrasButton.addEventListener('click', function(event){
                event.preventDefault();
                showExtraSection(theExtras, theCaret);
            });

            for (var j = 0; j < standardObsticles.length; j++){
                standardObsticles[j].addEventListener('click', function(){
                    var standardRoof = document.querySelector("#takModell > input[type=radio]:checked").id;
                    if (this.id == "standard-choice"){
                        resetStandard(resetedExtras);
                        setStandards(standardRoof, standardSet);
                        removeShowing(theCaret);
                    }
                    else if(this.id == "own-obstacles"){
                        addShowing(theExtras, theCaret);
                    }
                    else{
                        resetStandard(resetedExtras);
                        var theSetOfStandards = standardSet.filter(function(standardModel){
                            return standardModel.model === standardRoof
                        })[0];
                        setDisabled(theSetOfStandards)
                        addShowing(theExtras, theCaret);
                    }
                });
            };
        };

        Setup_AddSubtractObstacleEvents();
        setupStandardObsticle()
        setUptSVG()
        firstNavItem.focus();
    }

    const setAlgoParameters = function(standards){
        let algoObject = [
            {work: document.querySelector("#toDoCheckBoxes > .box-Holder > input[type=radio]:checked").value},
            {model: getRoofModel(standards)},
            {material: document.querySelector("#roofMaterial > .box-Holder > input[type=radio]:checked").value},
            {measures: [
                {kvm: document.querySelector("#offert-roofSquared").value.trim()},
                {angle: document.querySelector("#offert-roofAngle").value.trim()},
                {height: document.querySelector("#offert-roofHeight").value.trim()}
            ]},
            {obstacles: getCheckedObsticles(standards)},
            {who: document.querySelector("#roofToWho > .box-Holder > input[type=radio]:checked").value},
            {timeSchedule: document.querySelector("#roofWhatMonthToBegin").value},
            {message:document.querySelector("#contact-message").value}
        ]
        return algoObject
    }

    //Get the collecion of materials and the relevant costs for calculating the suggested price. This code can be found in ./materialcosts.js
    const theOffertCosts = {
        materialCosts: getroofMaterial(),
        hinderCosts: getHinder(),
        roofSec: getRoofSecurity(),
        roofGarnish: getGarnish(),
        roofDrainage: getWaterDrainage(),
        roofExtraHinder: getExtraHinder(),
    };

    const getRoofModel = (models) => {
        let modelID = document.querySelector("#takModell > input[type=radio]:checked").id
        return models.filter((roofMod) => {
            return roofMod.model == modelID
        })
    }

    //Calculate and return the suggested Price based on user input
    const calculatingPrice = userInputs => {
        let squareParameter = getSquareParameter(userInputs)
        let obsParameter = getObsticleParameter(userInputs)

        let obsWorkPrice = totalObsticleWorkPrice(obsParameter)
        let obsMaterialPrice = totalObsMaterialPrice(obsParameter)

        let kvmWorkPrice = totalKvmWorkPrice(squareParameter[0].timmPeng, userInputs[3].measures[0].kvm)
        let kvmMaterialPrice = totalKvmMaterialPrice(squareParameter[0].prisKvm, userInputs[3].measures[0].kvm)

        let calcThis = {
            "workPriceObsticles": obsWorkPrice,
            "kvmWorkprice": kvmWorkPrice,
            "slopeFactor": squareParameter[0].faktor,
            "kvmMaterialPrice": kvmMaterialPrice,
            "obsMaterialPrice": obsMaterialPrice
        }

        let finalPriceSuggestion = priceAlgorithm(calcThis)

        return {
            "material": squareParameter,
            "obsticles": obsParameter,
            "price": finalPriceSuggestion,
            "ourInputs":userInputs
        }
    }

    const setUptSVG = () => {
        jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
                if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                    $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
                }

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        })
    }

    const getObsticleContentList = theCalcObj => {
        let obsticleContetnList = $('ul.obsticle-summary')
        $(obsticleContetnList).empty()

        for(let i = 0; i < theCalcObj.obsticles.length; i++){
            switch (theCalcObj.obsticles[i].name) {
                case 'Stor skorsten':
                    $('<li/>', {html: theCalcObj.obsticles[i].name
                        + ': <span>'
                        + theCalcObj.obsticles[i].quantity
                        + 'st</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Liten skorsten':
                    $('<li/>', {html: theCalcObj.obsticles[i].name
                        + ': <span>'
                        + theCalcObj.obsticles[i].quantity + 'st</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Avluftstos':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + theCalcObj.obsticles[i].quantity + 'st</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Takfönster':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + theCalcObj.obsticles[i].quantity + 'st</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Ventilationshuv':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + theCalcObj.obsticles[i].quantity + 'st</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Taklucka':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + theCalcObj.obsticles[i].quantity + 'st</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Köksfläktshuv / Vent stor':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + theCalcObj.obsticles[i].quantity + 'st</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Takkupa mindre än 10 kvm':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + theCalcObj.obsticles[i].quantity + 'st</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Takkupa större än 10 kvm':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + theCalcObj.obsticles[i].quantity + 'st</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Takbrygga':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + Math.round(theCalcObj.obsticles[i].quantity) + 'm</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Snörasskydd':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + Math.round(theCalcObj.obsticles[i].quantity) + 'm</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Takstege':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + Math.round(theCalcObj.obsticles[i].quantity) + 'm</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Skorstensstege':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + Math.round(theCalcObj.obsticles[i].quantity) + 'm</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Luftad nock':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + Math.round(theCalcObj.obsticles[i].quantity) + 'm&sup2</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Vindskivor':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + Math.round(theCalcObj.obsticles[i].quantity) + 'm&sup2</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Hängrännor':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + Math.round(theCalcObj.obsticles[i].quantity) + 'm</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Stuprör':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + Math.round(theCalcObj.obsticles[i].quantity) + 'm</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Fotränna':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + Math.round(theCalcObj.obsticles[i].quantity) + 'm</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Ytterhörn fotränna':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + theCalcObj.obsticles[i].quantity + 'st</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Nock':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + Math.round(theCalcObj.obsticles[i].quantity) + 'm&sup2</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Takbrott':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + Math.round(theCalcObj.obsticles[i].quantity) + 'm&sup2</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Vinkelränna':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + Math.round(theCalcObj.obsticles[i].quantity) + 'm&sup2</span>'}).appendTo(obsticleContetnList)
                    break;
                case 'Genzimrännor':
                $('<li/>', {html: theCalcObj.obsticles[i].name
                    + ': <span>'
                    + Math.round(theCalcObj.obsticles[i].quantity) + 'm</span>'}).appendTo(obsticleContetnList)
                    break;
                default:
                break;
            }
        }
        return obsticleContetnList
    }

    const setUpSummary = (calcObj) => {
        let sumWork = document.querySelector('#roof-summary > ul > li > #sumWork')
        let sumModel = document.querySelector('#roof-summary > ul > li > #sumModel')
        let sumMaterial = document.querySelector('#roof-summary > ul > li > #sumMaterial')
        let sumSize = document.querySelector('#roof-summary > ul > li > #sumSize')
        let sumAngle = document.querySelector('#roof-summary > ul > li > #sumAngle')
        let sumHeight = document.querySelector('#roof-summary > ul > li > #sumHeight')

        let contracter = document.querySelector('#contact-summary > ul > li > #contracter')
        let timePlane = document.querySelector('#contact-summary > ul > li > #timePlan')
        let customMessage = document.querySelector('#contact-summary > ul > li > #customMessage')


        let priceSuggestion = document.querySelector('#price-suggestion')
        let totalPrice = calcObj.price.work + calcObj.price.material
        let lowerPriceEdge = Math.round((Math.ceil((totalPrice - (totalPrice * 0.1)) / 100) * 100) / 1000) * 1000
        let upperPriceEdge = Math.round((Math.ceil((totalPrice + (totalPrice * 0.1)) / 100) * 100) / 1000) * 1000

        lowerPriceEdge = Math.floor(lowerPriceEdge)
        upperPriceEdge = Math.floor(upperPriceEdge)

        lowerPriceEdge_String = JSON.stringify(lowerPriceEdge)
        upperPriceEdge_String = JSON.stringify(upperPriceEdge)

        let punkt = "."
        if (lowerPriceEdge_String.length == 5){
            lowerPriceEdge_String = [lowerPriceEdge_String.slice(0, 2), punkt, lowerPriceEdge_String.slice(2)].join('')
        }else if (lowerPriceEdge_String.length == 6){
            lowerPriceEdge_String = [lowerPriceEdge_String.slice(0, 3), punkt, lowerPriceEdge_String.slice(3)].join('')
        }else if (lowerPriceEdge_String.length == 7){
            lowerPriceEdge_String = [lowerPriceEdge_String.slice(0, 1), punkt, lowerPriceEdge_String.slice(1)].join('')
            lowerPriceEdge_String = [lowerPriceEdge_String.slice(0, 5), punkt, lowerPriceEdge_String.slice(5)].join('')
        }else if (lowerPriceEdge_String.length >= 8){
            lowerPriceEdge_String = [lowerPriceEdge_String.slice(0, 2), punkt, lowerPriceEdge_String.slice(2)].join('')
            lowerPriceEdge_String = [lowerPriceEdge_String.slice(0, 6), punkt, lowerPriceEdge_String.slice(6)].join('')
        }

        if (upperPriceEdge_String.length == 5){
            upperPriceEdge_String = [upperPriceEdge_String.slice(0, 2), punkt, upperPriceEdge_String.slice(2)].join('')
        }else if (upperPriceEdge_String.length == 6){
            upperPriceEdge_String = [upperPriceEdge_String.slice(0, 3), punkt, upperPriceEdge_String.slice(3)].join('')
        }else if (upperPriceEdge_String.length == 7){
            upperPriceEdge_String = [upperPriceEdge_String.slice(0, 1), punkt, upperPriceEdge_String.slice(1)].join('')
            upperPriceEdge_String = [upperPriceEdge_String.slice(0,5), punkt, upperPriceEdge_String.slice(5)].join('')
        }else if (upperPriceEdge_String.length >= 8){
            upperPriceEdge_String = [upperPriceEdge_String.slice(0, 2), punkt, upperPriceEdge_String.slice(2)].join('')
            upperPriceEdge_String = [upperPriceEdge_String.slice(0, 6), punkt, upperPriceEdge_String.slice(6)].join('')
        }


        getObsticleContentList(calcObj)

        sumWork.innerHTML = calcObj.ourInputs[0].work
        sumModel.innerHTML = calcObj.ourInputs[1].model[0].name
        sumMaterial.innerHTML = calcObj.material[0].materialName
        sumSize.innerHTML = calcObj.ourInputs[3].measures[0].kvm
        sumAngle.innerHTML = calcObj.ourInputs[3].measures[1].angle
        sumHeight.innerHTML = calcObj.ourInputs[3].measures[2].height

        contracter.innerHTML = calcObj.ourInputs[5].who
        timePlane.innerHTML = calcObj.ourInputs[6].timeSchedule
        customMessage.innerHTML = calcObj.ourInputs[7].message

        //contactSummary.innerHTML = generatedCustomerContent

        let priceString = calcObj.ourInputs[1].model[0].name == "Kyrktorn" ? "Kontakta oss så hjälper vi dig" : lowerPriceEdge_String
        + ' - '
        + upperPriceEdge_String
        + " kr"

        priceSuggestion.innerHTML = priceString

        document.getElementById("submit-offert").addEventListener('click', function(e) {
            e.preventDefault()
            doingForm(offertForm, calcObj)
            console.log('')
            /*
            if(doingForm(offertForm, calcObj)){
                swal({
                    title:'Preliminärt prisförslag',
                    text: priceString,
                    icon:'success',
                    button: 'yeehaw'
                })
            } else {
                swal({
                    title:'Något gick fel',
                    text: "Ett fel uppstod",
                    icon:'error',
                    button: 'oops'
                })
            }
            */
            //form validation etc
        })
    }

    const doingForm = (theForm, inputInfo) => {

            console.log(inputInfo)
            let inputMaterial = inputInfo.material[0].materialName
            let inputWork = inputInfo.ourInputs[0].work
            let inputModel = inputInfo.ourInputs[1].model[0].name
            let inputSquare = inputInfo.ourInputs[3].measures[0].kvm
            let inputAngle = inputInfo.ourInputs[3].measures[1].angle
            let inputHeight = inputInfo.ourInputs[3].measures[2].height
            let inputWho = inputInfo.ourInputs[5].who
            let inputTime = inputInfo.ourInputs[6].timeSchedule
            let inputMessage = inputInfo.ourInputs[7].message

            let calculatedMaterialPrice = inputInfo.price.material
            let calucaltedWorkPrice = inputInfo.price.work

            let formName = $('#offert-firstname').val()
            let formSurname = $('#offert-lastname').val()
            let formCompany = $('#offert-companyName').val()
            let formAdress = $('#offert-gata').val()
            let formZipnumber = $('#offert-postnummer').val()
            let formCity = $('#offert-city').val()
            let formPhonenumber = $('#offert-phone').val()
            let formEmail = $('#offert-email').val()

            let dataString = "****Kontaktuppgifter****"
                            + "\nNamn: " + formName
                            + "\nEfternamn: " + formSurname
                            + "\nFöretag: " + formCompany
                            + "\nAdress: " + formAdress
                            + "\nPostnr: " + formZipnumber
                            + "\nStad: " + formCity
                            + "\nTelefon: " + formPhonenumber
                            + "\nEmail" + formEmail
                            + "\n\n****Uppdraget****"
                            + "\nMaterial: " + inputMaterial
                            + "\nJobb: " + inputWork
                            + "\nTakmodell: " + inputModel
                            + "\nKvm: " + inputSquare
                            + "\nVinkel: " + inputAngle
                            + "\nHöjd: " + inputHeight
                            + "\nBeställare: " + inputWho
                            + "\nTidshorisont: " + inputTime
                            + "\nMeddelande: " + inputMessage
                            + "\nMaterialpris: " + calculatedMaterialPrice
                            + "\nJobbpris: " + calucaltedWorkPrice
                            + "\n\n****Hinder****"


            for (let i = 0; i < inputInfo.obsticles.length; i++){
                var obsInfo = "Hinder: " + inputInfo.obsticles[i].name + ", Mängd: " + inputInfo.obsticles[i].quantity
                dataString += "\n" + obsInfo
            }

            console.log($(theForm).attr('action'))

            let theData = {
                name: formName + " " + formSurname,
                email: formEmail,
                content: dataString
                //captcha:grecaptcha.getResponse()
            }
            console.log(theData)
            $.ajax({
                type: 'POST',
                url: $(offertForm).attr('action'),
                crossdomain: true,
                data: theData,
                done: function(response){
                    console.log("It went through: " + response)
                    return true
                },
                fail: function(response){
                    console.log("Error: " + response)
                    return false;
                }
            })
    }

    const generatedPrice = () => {
        let priceString = userInputObject[1].model[0].name == "Kyrktorn" ? "Kontakta oss så hjälper vi dig" : 'Enligt våra beräkningar skulle en offert på detta jobb hamna mellan: ' + Math.floor(lowerPriceEdge)
        + ' - '
        + Math.floor(upperPriceEdge)
        + "kr"

        return priceString
    }

    const totalObsticleWorkPrice = obsticles => {
        let theTotalPrice = obsticles.reduce((theValue, oneObsticle) => {
            theValue += oneObsticle.quantity * oneObsticle.workPrice
            return theValue
        }, 0)
        return theTotalPrice
    }

    const totalKvmWorkPrice = (workCost, squareMeter) => {
        return workCost * squareMeter
    }

    const totalObsMaterialPrice = obsticles => {
        let totalMaterialValue = obsticles.reduce((theVal, theObs) => {
            theVal += theObs.materialPrice
            return theVal
        }, 0)
        return totalMaterialValue
    }

    const totalKvmMaterialPrice = (materialCost, kvmInput) => {
        return materialCost * kvmInput
    }

    const priceAlgorithm = (calculationObject) => {
        let work = (calculationObject.kvmWorkprice + calculationObject.workPriceObsticles) * calculationObject.slopeFactor

        let material = calculationObject.kvmMaterialPrice + calculationObject.obsMaterialPrice

        let price = {
            "work": work,
            "material": material
        }
        return price
    }

    //Calculate and return the total price of all the obsticles based on user input:
    // * (Obsticles > 0) x (amount of obsticle)
    const getObsticleParameter = userInputs => {
        let calculatedPrice = 0
        let userObs = userInputs[4].obstacles
        let allObsticles = [
            ...theOffertCosts.hinderCosts,
            ...theOffertCosts.roofSec,
            ...theOffertCosts.roofGarnish,
            ...theOffertCosts.roofDrainage,
            ...theOffertCosts.roofExtraHinder
        ]

        // Create an array with the selected Obsticles and calculate the total price of the specific obsticle. obsticle price * quantity
        let calculatedObs = userObs.reduce((calculated, userOb) => {
            allObsticles.forEach( each => {
                if ( userOb.name == each.name ){
                    userOb.workPrice = each.work
                    userOb.materialPrice = each.materialCost
                    userOb.totalPrice = userOb.quantity * each.total()
                    calculated.push(userOb)
                }
            })
            return calculated
        }, [])

        calculatedObs.forEach( o => calculatedPrice += o.totalPrice)
        return calculatedObs
    }

    //Find and return the material object based on user input:
    // * material (currently by string-matching, should be refactored to id format in the offert.html document, eg data-materialID: #)
    // * angle
    const getSquareParameter = userInputs => {
        let userAngle = parseInt(userInputs[3].measures[1].angle)
        let whatMaterial = theOffertCosts.materialCosts.filter(x => {
            return x.material === userInputs[2].material
        })[0]

        let materialAngle = whatMaterial.vinklar.reduce((theArray ,theAngle) => {
            let rangeSplit = theAngle.vinkel.split("-")
            rangeSplit[0] = parseInt(rangeSplit[0])
            rangeSplit[1] = parseInt(rangeSplit[1])

            if(userAngle >= rangeSplit[0] && userAngle <= rangeSplit[1]){
                theAngle.materialName = whatMaterial.material
                theArray.push(theAngle)
            }
            return theArray
        }, [])

        return materialAngle
    }

    //Get the objects(hinder) of the table in the offert.html
    const getTableObs = () => $.map(
        document.querySelectorAll("table > tbody > tr"),
        function(value){
            return[value]
        })
        .filter((genomForing) => {
            return genomForing.children[1].innerHTML > 0
        })
        .reduce((hinder, tableRow) => {
            hinder.push({
                name: tableRow.children[0].children[0].innerHTML,
                quantity: tableRow.children[1].innerHTML.trim()
            })
            return hinder
        }, []);
        //Get hinder ENDS

        const calcMeter = (factor, squareM) => {
            return factor * squareM
        }

        const getCheckedWaterObs = (roof) => $.map(
            document.querySelectorAll("#waterCheckBoxes > .box-Holder > input[type=checkbox]:checked"),
            function(thevalue){
                return[thevalue]
            })
            .reduce((waterSafetyArray, measure) => {
                switch(measure.value){
                    case "Hängrännor":
                    waterSafetyArray.push({
                        name: measure.value,
                        quantity: calcMeter(roof[0].gutterFactor, document.querySelector("#offert-roofSquared").value.trim())
                    })
                    break;
                    case "Stuprör":
                    waterSafetyArray.push({
                        name: measure.value,
                        quantity: document.querySelector("#offert-roofSquared").value.trim() > 200 ? document.querySelector("#offert-roofHeight").value.trim() * 4 : document.querySelector("#offert-roofHeight").value.trim() * 2
                    })
                    break;
                    case "Genzimrännor":
                    waterSafetyArray.push({
                        name: measure.value,
                        quantity: calcMeter(roof[0].gezimFaktor, document.querySelector("#offert-roofSquared").value.trim())
                    })
                    break;
                    default:
                    break;
                }
                return waterSafetyArray
            }, []);

            const getCheckedSafety = (roof) => $.map(
                document.querySelectorAll("#roof-security > .box-Holder > input[type=checkbox]:checked"),
                function(theVal){
                    return[theVal]
                })
                .reduce((safetyArray, safetyMeasure) => {
                    switch(safetyMeasure.value){
                        case "Takstege":
                        safetyArray.push({
                            name:safetyMeasure.value,
                            quantity: 5
                        })
                        break;
                        case "Skorstensstege":
                        safetyArray.push({
                            name:safetyMeasure.value,
                            quantity: 5
                        })
                        break;
                        case "Takbrygga":
                        safetyArray.push({
                            name:safetyMeasure.value,
                            quantity: 1
                        })
                        break;
                        case "Snörasskydd":
                        safetyArray.push({
                            name:safetyMeasure.value,
                            quantity: calcMeter(roof[0].snowProtectionFactor, document.querySelector("#offert-roofSquared").value.trim())
                        })
                        break;
                    }
                    return safetyArray
                }, [])

            const getCheckedGarnish = (roof) => $.map(
                document.querySelectorAll("#roof-garnish > .box-Holder > input[type=checkbox]:checked"),
                function(theVal){
                    return[theVal]
                })
                .reduce((garnishArray, oneGarnish) =>{
                    switch(oneGarnish.value){
                        case "Nock":
                        garnishArray.push({
                            name:oneGarnish.value,
                            quantity: calcMeter(roof[0].nockFaktor, document.querySelector("#offert-roofSquared").value.trim())
                        })
                        break;
                        case "Luftad nock":
                        garnishArray.push({
                            name:oneGarnish.value,
                            quantity: calcMeter(roof[0].nockFaktor, document.querySelector("#offert-roofSquared").value.trim())
                        })
                        break;
                        case "Vindskivor":
                        garnishArray.push({
                            name:oneGarnish.value,
                            quantity: calcMeter(roof[0].vindskivaFaktor, document.querySelector("#offert-roofSquared").value.trim())
                        })
                        break;
                        default:
                        break;
                    }

                    return garnishArray
                }, [])

            const getCheckedExtras = (roof) => $.map(
                document.querySelectorAll("#roof-extras > .box-Holder > input[type=checkbox]:checked"),
                function(theVal){
                    return[theVal]
                })
                .reduce((extras, obj) => {
                    switch(obj.value){
                        case "Fotränna":
                        extras.push({
                            name:obj.value,
                            quantity: calcMeter(roof[0].fotrannaFaktor, document.querySelector("#offert-roofSquared").value.trim())
                        })
                        extras.push({
                            name:"Ytterhörn fotränna",
                            quantity: 4
                        })
                        break;
                        case "Vinkelränna":
                        extras.push({
                            name:obj.value,
                            quantity: calcMeter(roof[0].vinkelrannaFaktor, document.querySelector("#offert-roofSquared").value.trim())
                        })
                        break;
                        case "Takbrott":
                        extras.push({
                            name:obj.value,
                            quantity: calcMeter(roof[0].takbrottFaktor, document.querySelector("#offert-roofSquared").value.trim())
                        })
                        break;
                        default:
                        break;
                    }
                    return extras
                }, [])

            const getPaperScaffolds = (logisticObject) => $.map(
                document.querySelectorAll("#roofPaperAndScaffold > .box-Holder > input[type=checkbox]:checked"),
                function(val){
                    return[val]
                })
                .reduce((logistics, whatLogistic) => {
                    switch (whatLogistic.value){
                        case "Takpapp":
                        logistics.push({
                            name: whatLogistic.value,
                            quantity: document.querySelector("#offert-roofSquared").value.trim()
                        })
                        break;
                        case "Byggnadsställning":
                        logistics.push({
                            name:whatLogistic.value,
                            quantity: document.querySelector("#offert-roofHeight").value.trim()
                        })
                        break;
                        case "Container":
                        logistics.push({
                            name:whatLogistic.value,
                            quantity: 1
                        })
                        break;
                        case "Transport / lyft":
                        logistics.push({
                            name:whatLogistic.value,
                            quantity: 1
                        })
                        break;
                        case "Rivning":
                        logistics.push({
                            name:whatLogistic.value,
                            quantity: document.querySelector("#offert-roofSquared").value.trim()
                        })
                        break;
                        default:
                        break;
                    }
                    return logistics
                }, [])
                //get extras ENDS

                const getCheckedObsticles = (standards) => {
                    let theModelId = document.querySelector("#takModell > input[type=radio]:checked").id
                    let roofMod = standards.filter((takmod) => takmod.model == theModelId)

                    let allObsticales = [...getTableObs(), ...getCheckedWaterObs(roofMod), ...getCheckedSafety(roofMod), ...getCheckedGarnish(roofMod), ...getCheckedExtras(roofMod)]
                    return allObsticales
                }
                //get checked obstacles ends

                const Setup_AddSubtractObstacleEvents = function(){
                    let ownChoices = document.querySelector('#own-obstacles')
                    var addObstacleButton = document.querySelectorAll('.quant > .quant-up');
                    var subtractObstacleButton = document.querySelectorAll('.quant > .quant-down');
                    for (var i = 0; i < addObstacleButton.length; i++){
                        addObstacleButton[i].addEventListener('click', function(event){
                            event.preventDefault();
                            var addObs = this;
                            addObstacle(addObs);
                            if (ownChoices.checked == false){
                                ownChoices.checked = true
                            }
                        })
                    };

                    for (var i = 0; i < subtractObstacleButton.length; i++){
                        subtractObstacleButton[i].addEventListener('click', function(event){
                            event.preventDefault();
                            var subObs = this;
                            subtractObstacle(subObs);
                            if (ownChoices.checked == false){
                                ownChoices.checked = true
                            }
                        })
                    };
                }

                const setDisabled = (theSet) => {
                    if(theSet.nockFaktor){
                        document.getElementById("airedNock").disabled = false
                        document.getElementById("nock").disabled = false
                    } else{
                        document.getElementById("airedNock").disabled = true
                        document.getElementById("nock").disabled = true
                    }

                    if(theSet.gezimFaktor){
                        document.getElementById("roofGenzimGutters").disabled = false
                        document.getElementById("roofGutters").disabled = true
                    } else{
                        document.getElementById("roofGenzimGutters").disabled = true
                        document.getElementById("roofGutters").disabled = false
                    }

                    if(theSet.takbrottFaktor){
                        document.getElementById("weatherproofing").disabled = false
                    } else{
                        document.getElementById("weatherproofing").disabled = true
                    }

                    if(theSet.takbrottFaktor){
                        document.getElementById("roofBreak").disabled = false
                    } else{
                        document.getElementById("roofBreak").disabled = true
                    }

                    if(theSet.vinkelrannaFaktor){
                        document.getElementById("angleChute").disabled = false
                    } else{
                        document.getElementById("angleChute").disabled = true
                    }

                    if(theSet.vindskivaFaktor){
                        document.getElementById("weatherproofing").disabled = false
                    } else{
                        document.getElementById("weatherproofing").disabled = true
                    }

                    if(theSet.fotrannaFaktor){
                        document.getElementById("footRinse").disabled = false
                    } else{
                        document.getElementById("footRinse").disabled = true
                    }

                    if(theSet.snowProtectionFactor){
                        document.getElementById("snowSecurity").disabled = false
                    } else{
                        document.getElementById("snowSecurity").disabled = true
                    }


                }

                const setStandards = function(takmodell, setOfStandards){
                    var selectedStandardSet = setOfStandards.filter(function(standardModel){
                        return standardModel.model === takmodell
                    })[0];
                    let ul = document.getElementById('standard-obstacle-list');
                    let standardHeader = document.getElementById("roof-model-standard-obstacles")

                    standardHeader.innerHTML = selectedStandardSet.name
                    $(ul).empty()
                    for (j = 0; j < selectedStandardSet.obstacles.length; j++){
                        let li = document.createElement('li');
                        let obstObj = document.querySelector(''+ selectedStandardSet.obstacles[j] +'')

                        if(obstObj.tagName == "STRONG"){
                            li.appendChild(document.createTextNode(''
                            + obstObj.innerHTML
                            + ''))
                        } else if(obstObj.tagName == "INPUT"){
                            li.appendChild(document.createTextNode(''
                            + obstObj.value
                            + ''))
                        }
                        ul.appendChild(li)
                        addObstacle(selectedStandardSet.obstacles[j])
                    }
                    setDisabled(selectedStandardSet)
                };

                const resetStandard = function(resetedList){
                    document.querySelector(".roofMetrics >.wrapper > .extras").innerHTML = resetedList;
                    Setup_AddSubtractObstacleEvents();
                }


                const subtractObstacle = function(subObs){
                    let countElement = $(subObs).parent().siblings('td.item-count');
                    if ($(countElement).text() > 0){
                        countElement.text(parseInt(countElement.text())-1);
                        return;
                    }
                }


                const addObstacle = function(addObs){
                    let countElement = $(addObs)

                    if($(countElement).is(':checkbox')){
                        countElement.prop("checked", true)
                    }
                    else{
                        let countElement = $(addObs).parent().siblings('td.item-count');
                        countElement.text(parseInt(countElement.text())+1)
                    }
                    return;
                }


                const addClass = function(classToAdd, theElement){
                    var existingClass = theElement.className;

                    if (existingClass !== ""){
                        classToAdd = " " + classToAdd;
                    }
                    theElement.className = existingClass + classToAdd;
                }


                const hasClass = function(element, theClass){
                    return (" " + element.className + " ").indexOf( " " + theClass + " " ) > -1;
                }


                return{
                    eventHandelers:eventHandelers,
                }

            }());


const init = function(){
    setOffertUp.eventHandelers();
}

window.onload = init;
