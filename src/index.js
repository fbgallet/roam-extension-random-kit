import createBlock from "roamjs-components/writes/createBlock";
import getCurrentPageUid from "roamjs-components/dom/getCurrentPageUid";
import getFullTreeByParentUid from "roamjs-components/queries/getFullTreeByParentUid";
import getChildrenLengthByPageUid from "roamjs-components/queries/getChildrenLengthByPageUid";

/*getChildrenLengthByPageUid,
    getTextByBlockUid,
    getTreeByBlockUid,
    getTreeByPageName,
} from "roamjs-components/queries";*/

/*
import {
    extractTag
} from "roamjs-components/util";*/

function getFocusedBlockOrCreateBlock() {
    let tUid = window.roamAlphaAPI.ui.getFocusedBlock()?.["block-uid"];
    if (tUid == null) {
      /*  tUid = createBlock({
            node: {text: ''},
            parentUid: pageUid,
            order: o
        }); */
        const pageUid = getCurrentPageUid();
        let bottom = getChildrenLengthByPageUid(pageUid);
        tUid = window.roamAlphaAPI.util.generateUID();
        window.roamAlphaAPI.createBlock(
            {"location": 
                {"parent-uid": pageUid, 
                  "order": bottom},
              "block": 
                {"string": '',
                 "uid": tUid}});
        //tUid = createdBlock;
    }
    return tUid;
}

function runRandomKitSb(tUid) {
    window.roamjs.extension.smartblocks.triggerSmartblock({
        srcName: 'Random Kit',
        targetUid: tUid,
        variables: { }
    });
}

export default {
    onload: () => {
        if (window.roamjs?.extension?.smartblocks) {
            registerSbCommand();
            console.log("Command loaded.");
        } else {
            document.body.addEventListener(
            'roamjs:smartblocks:loaded',
            () =>
                window.roamjs?.extension.smartblocks &&
                registerSbCommand()
            );
            console.log("command loaded after Sb!");
        }
        
        window.roamAlphaAPI.ui.commandPalette.addCommand({
            label: "Random Kit",
            callback: () => {
                runRandomKitSb(getFocusedBlockOrCreateBlock());
            }
        });
        
        console.log("Random Block extension loaded!");
    },
    onunload: () => {
      console.log("Random Block extension unloaded.");
    }
  };

function registerSbCommand() {
    window.roamjs.extension.smartblocks.registerCommand({
    text: 'RANDOMNUMBER',
    handler: (context) => (min,max) => [                 
        getRandomNumberInRange(min,max).toString()
    ],
    }); 
}

function getRandomNumberInRange(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + parseInt(min);
}

