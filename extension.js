export default {
    onload: () => {
        if (window.roamjs?.extension?.smartblocks) {
            registerSbCommand();
            console.log("command loaded!");
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
                const tUid = window.roamAlphaAPI.ui.getFocusedBlock()?.["block-uid"];
                window.roamjs.extension.smartblocks.triggerSmartblock({
                    srcName: 'Random Kit',
                    targetUid: tUid,
                    variables: { }
                });
            }
        });
        
        console.log("Random Block extension loaded.");
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

