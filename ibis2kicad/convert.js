const fs = require('fs');
const _ = require('lodash');

//Find the definition of PartName in IBISFile and convert it into a KiCAD component
function ibisToKiCadComponent(ibisFile) {


    try {
        const data = fs.readFileSync(ibisFile, 'UTF-8');
        const pins = getPinsFromString(data).map(x => ({ id: parseInt(x[1]), name: x[2].toUpperCase(), type: x[3].toUpperCase() }));

        const gndPins = _.orderBy(pins.filter(x => x.type === 'GND'), "name");
        const powerPins = _.orderBy(pins.filter(x => x.type === 'POWER'), "name");
        const ncPins = _.orderBy(pins.filter(x => x.type === 'NC'), "name");

        const outputPins = _.orderBy(pins.filter(x => x.type.startsWith('IO') || (x.type.startsWith('IO') && x.name.indexOf("TX") !== -1)), "name");
        const inputPins = _.orderBy(pins.filter(x => x.type.startsWith('INPUT') || (x.type.startsWith('IO') && x.name.indexOf("RX") !== -1)), "name");



        const substractPins = gndPins.concat(powerPins);
        const otherPins = _.orderBy(_.differenceWith(pins, substractPins, _.isEqual), "name", "desc");

        const maxVerticalPins = gndPins.length;

        const symbolHeight = (maxVerticalPins * 50) + 400


        let longestComponentName = _.maxBy(pins, (x) => x.name.length).name.length;

        let maxHorizontalPins = Math.max(gndPins.length, powerPins.length)

        const symbolWidth = ((longestComponentName - (longestComponentName % 2)) + maxHorizontalPins) * 50



        let component = renderFileHeader("KSZ9567S");


        let locX = 0;
        let locY = 0;
        let pinCountCreated = 0;

        // create all the GND pins
        if (gndPins.length % 2) {
            locX = (-100 * (gndPins.length / 2))  //  # odd number so center at 0
        }
        else {
            locX = (-100 * (gndPins.length / 2)) + 50  // # even number so center around 0
        }
        locY = (-1 * symbolHeight)

        for (const pin of gndPins) {
            component += "X " + pin.name + " " + pin.id + " " + locX + " " + locY + " 150 U 40 40 1 1 W\n"
            locX = locX + 100;
            pinCountCreated++;
        }

        // create all the Power pins
        if (powerPins.length % 2) {
            locX = (-100 * (powerPins.length / 2))    // odd number so center at 0
        } else {
            locX = (-100 * (powerPins.length / 2)) + 50   // even number so center around 0
        }
        locY = symbolHeight
        for (const pin of powerPins) {
            component += "X " + pin.name + " " + pin.id + " " + locX + " " + locY + " 150 D 40 40 1 1 W\n"
            locX = locX + 100
            pinCountCreated++;
        }

        // // create all the Left pins
        // if (inputPins.length % 2) {
        //     locY = (-100 * (inputPins.length / 2))    // odd number so center at 0
        // } else {
        //     locY = (-100 * (inputPins.length / 2)) + 50   // even number so center around 0
        // }

        // locX = (-1 * symbolWidth)

        // for (const pin of inputPins) {
        //     component += "X " + pin.name + " " + pin.id + " " + locX + " " + locY + " 150 R 40 40 1 1 I\n"
        //     locY = locY + 100
        //     pinCountCreated++;
        // }


        //create all the Right pins
        if (otherPins.length % 2) {
            locY = (-100 * (otherPins.length / 2))    // odd number so center at 0
        }
        else {
            locY = (-100 * (otherPins.length / 2)) + 50   // even number so center around 0
        }
        locX = symbolWidth
        for (const pin of otherPins) {
            if (pin.type === "NC") {
                if (pin.name === "NC") {
                    component += "X " + pin.name + " " + pin.id + " " + locX + " " + locY + " 150 L 40 40 1 1 N\n"
                } else {
                    component += "X " + pin.name + " " + pin.id + " " + locX + " " + locY + " 150 L 40 40 1 1 P\n"
                }
            } else {
                component += "X " + pin.name + " " + pin.id + " " + locX + " " + locY + " 150 L 40 40 1 1 B\n"
            }

            locY = locY + 100
            pinCountCreated = pinCountCreated + 1
        }

        component += renderFileBody();
        console.log(component);
        fs.writeFileSync('../CM4CB/CM4CB.generated.lib', component, "utf8");

    } catch (err) {
        console.error(err);
    }


}

function renderFileHeader(componentName) {
    return `EESchema-LIBRARY Version 2.4
#encoding utf-8
#
# ` + componentName + `
#
DEF ` + componentName + ` U 0 40 Y Y 1 F N
F0 "U" 0 0 50 H V C CNN
F1 "` + componentName + `" 0 0 50 H V C CNN
F2 "" 0 0 50 H I C CNN
F3 "" 0 0 50 H I C CNN
DRAW\n`;
}

function renderFileBody() {
    return `ENDDRAW
ENDDEF
#
#End Library`;
}

function getPinsFromString(data) {
    const regex = /^\s*(\d+)\s+([^\s]+)\s+([^\s]+)/gm;
    let matches;

    let pins = [];
    matches = data.matchAll(regex);
    for (const match of matches) {
        pins.push(match);
    }
    return pins;
}



ibisToKiCadComponent('ksz9567s.ibs', 'KSZ9567S');

