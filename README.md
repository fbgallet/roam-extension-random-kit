# Random Kit

Insert easily random blocks (targeting a page, a block or a time period) in your workflow!

⚠️ __This extension only works with **'Random Kit' SmartBlock**: you need to install the RoamJS Smartblock extension (currently [available here](https://roamjs.com/extensions/smartblocks)) then install 'Random Kit' from the SmartBlock Store (open command palette with Ctrl-Cmd + P, then search for "SmartBlocks Store")__

![random kit](https://user-images.githubusercontent.com/74436347/180059782-e56188da-1bd0-4354-9541-411a67972ecb.gif)


## Main feature
Insert a **choosen number of random blocks** (**from a given page, or mentioning a page, or children of a block mentioning a page, or all 3 at once**) by running a command in native Roam command palette (Ctrl-Cmd + P) or triggering a SmartBlock inline or in a template, with a button (see below to learn how to configure them).
You will be asked to set the target page/tag and the number of blocks that you want to insert (as block references).
Then, a **button allows you to reload another block** if the chance did not make things well.


## Available Smartblocks:

### - Random block mention
Insert blocks which mention a given page/tag (in other words, from the 'Linked references' of a given page).
    
### - Random block from page
Insert blocks from a given page (in other words, from its body).
    
### - Random block child of page mention
Insert blocks that have as parent (direct or not) a block which mentions a given page/tag.

### - Random block - Mode choice
Open a dropdown menu to choose between the 3 previous options or to use all three alternatively, in a random way.
    
### - Random child from a given block
Insert blocks from a given list, in others words from the children of a given block (e.g. draw a list of people to form teams for a game).
    
### - Random day in the past
Insert a date which links to the corresponding DNP (Daily Note Page) in the past.
Specify the number of days within which the random date will be drawn. If you run this SmartBlock on a past DNP and say, e.g. "30 days before", the interval will be relative to this date, so you can specify any interval in the past.
    
### - Random block from random day in the past
Insert blocks from a random DNP, according to the same principle as the previous SmartBlock.

### - Random number
Insert a random number within a given (inclusive) range.

### - `<%RANDONNUMBER%>`
Smartblock command (to insert in your own smartBlocks and can be found in the autocomplete box when typing `<%`) and returning a random number, with the following arguments:
1. minimum limit of the range (1 by default)
2. maximum limit of the range (100 by default)
Example: `<%RANDOMNUMBER:50,200%>`
   
   
## How to insert theses SmartBlocks in your templates or your own SmartBlocks ?
