// get the status for one particular trait
function getTraitStatus(element) {
    let classes = element.classList;
    for (let i=0; i<classes.length; i++) {
        let current_class = classes[i];
        if (current_class == "unmarked") {
            return "unmarked";
        } else if (current_class == "circled") {
            return "circled";
        } else if (current_class == "crossed-off") {
            return "crossed-off";
        }
    }
}

// get the next status for one particular trait after being clicked
function getNextTraitStatus(element) {
    let classes = element.classList;
    for (let i=0; i<classes.length; i++) {
        // unmarked --> circled --> crossed-off
        let current_class = classes[i];
        if (current_class == "unmarked") {
            return "circled"
        } else if (current_class == "circled") {
            return "crossed-off";
        } else if (current_class == "crossed-off") {
            return "unmarked";
        }
    }
}

// link function to trait elements
jQuery(document).ready(function() {
    // cycle through trait statuses when a trait is clicked
    // jQuery(".trait p").click(function() {
    $("body").on("click", ".trait p", function() {
        let current_class = getTraitStatus(this);  // "this" is the clicked element's html
        let next_class = getNextTraitStatus(this);
        jQuery(this).removeClass(current_class);
        jQuery(this).addClass(next_class);
        // console.log(this);
    } );
    // we do it again to make it work for option headers, but keep the larger size of headers in styling
    $("body").on("click", ".option p", function() {
        let current_class = getTraitStatus(this);  // "this" is the clicked element's html
        let next_class = getNextTraitStatus(this);
        jQuery(this).removeClass(current_class);
        jQuery(this).addClass(next_class);
        // console.log(this);
    } );
});



// function to populate sheet with data
function handleLoad(data) {
    // console.log("loading data");  // DEBUG
    // console.log(data);  // DEBUG

    // suspects
    let suspectsHead = jQuery("#suspects-headers");
    let suspectsHeadHTML = "<tr>";
    let suspectsTraits = jQuery("#suspects-traits");
    let suspectsTraitsHTML = "<tr>";
    // fill out headers
    for (let i = 0; i < data[0].length; i++) {
        suspectsHeadHTML += "<th class=\"option\"><p class=\"unmarked\">" + data[0][i][0] + "</p></th>";
    }
    suspectsHeadHTML += "</tr>";
    // fill out traits
    for (let i = 1; i < 4; i++) {
        suspectsTraitsHTML += "<tr>";
        for (let j = 0; j < data[0].length; j++) {
            suspectsTraitsHTML += "<td class=\"trait\"><p class=\"unmarked\">" + data[0][j][i] + "</p></td>";
        }
        suspectsTraitsHTML += "</tr>";
    }
    suspectsHead.append(suspectsHeadHTML);
    suspectsTraits.append(suspectsTraitsHTML);

    // weapons
    let weaponsHead = jQuery("#weapons-headers");
    let weaponsHeadHTML = "<tr>";
    let weaponsTraits = jQuery("#weapons-traits");
    let weaponsTraitsHTML = "<tr>";
    // fill out headers
    for (let i = 0; i < data[1].length; i++) {
        weaponsHeadHTML += "<th class=\"option\"><p class=\"unmarked\">" + data[1][i][0] + "</p></th>";
    }
    weaponsHeadHTML += "</tr>";
    // fill out traits
    for (let i = 1; i < 4; i++) {
        weaponsTraitsHTML += "<tr>";
        for (let j = 0; j < data[1].length; j++) {
            weaponsTraitsHTML += "<td class=\"trait\"><p class=\"unmarked\">" + data[1][j][i] + "</p></td>";
        }
        weaponsTraitsHTML += "</tr>";
    }
    weaponsHead.append(weaponsHeadHTML);
    weaponsTraits.append(weaponsTraitsHTML);

    // scenes
    let scenesHead = jQuery("#scenes-headers");
    let scenesHeadHTML = "<tr>";
    let scenesTraits = jQuery("#scenes-traits");
    let scenesTraitsHTML = "<tr>";
    // fill out headers
    for (let i = 0; i < data[2].length; i++) {
        scenesHeadHTML += "<th class=\"option\"><p class=\"unmarked\">" + data[2][i][0] + "</p></th>";
    }
    scenesHeadHTML += "</tr>";
    // fill out traits
    for (let i = 1; i < 4; i++) {
        scenesTraitsHTML += "<tr>";
        for (let j = 0; j < data[2].length; j++) {
            scenesTraitsHTML += "<td class=\"trait\"><p class=\"unmarked\">" + data[2][j][i] + "</p></td>";
        }
        scenesTraitsHTML += "</tr>";
    }
    scenesHead.append(scenesHeadHTML);
    scenesTraits.append(scenesTraitsHTML);

    // motives
    let motivesHead = jQuery("#motives-headers");
    let motivesHeadHTML = "<tr>";
    let motivesTraits = jQuery("#motives-traits");
    let motivesTraitsHTML = "<tr>";
    // fill out headers
    for (let i = 0; i < data[3].length; i++) {
        motivesHeadHTML += "<th class=\"option\"><p class=\"unmarked\">" + data[3][i][0] + "</p></th>";
    }
    motivesHeadHTML += "</tr>";
    // fill out traits
    for (let i = 1; i < 4; i++) {
        motivesTraitsHTML += "<tr>";
        for (let j = 0; j < data[3].length; j++) {
            motivesTraitsHTML += "<td class=\"trait\"><p class=\"unmarked\">" + data[3][j][i] + "</p></td>";
        }
        motivesTraitsHTML += "</tr>";
    }
    motivesHead.append(motivesHeadHTML);
    motivesTraits.append(motivesTraitsHTML);
}

jQuery.ajax({
    dataType: "json",
    method: "GET",
    url: "load-sheet",
    success: (data) => handleLoad(data)
});