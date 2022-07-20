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

