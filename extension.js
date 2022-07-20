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

function registerSbCommand() {
    window.roamjs.extension.smartblocks.registerCommand({
    text: 'RANDOMNUMBER',
    handler: (context) => (min,max) => [                 
        getRandomNumberInRange(min,max)
    ],
    }); 
}

function getRandomNumberInRange(min,max) {
  
}
