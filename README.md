# Random Kit

Insert easily random blocks (targeting a page, a block or a time period) in your workflows!

⚠️ __This extension only works with **'Random Kit' SmartBlock**: you need to install the RoamJS Smartblock extension (currently [available here](https://roamjs.com/extensions/smartblocks)) then install 'Random Kit' from the SmartBlock Store (open command palette with Ctrl-Cmd + P, then search for "SmartBlocks Store")__

![random kit](https://user-images.githubusercontent.com/74436347/180059782-e56188da-1bd0-4354-9541-411a67972ecb.gif)


## Main feature
Insert a **choosen number of random blocks** (**from a given page, or mentioning a page, or children of a block mentioning a page, or all 3 at once**) and
You will be asked to set the target page/tag and the number of blocks that you want to insert (as block references).
Then, a **button allows you to reload another block** if the chance did not make things well.


## How to run Random Kit ?
You can run it without any SmartBlock experience: just focus in a block, **open the native Roam command palette (Ctrl-Cmd + P) and search for "Random Kit"**. Press Enter. A dropdown menu allows you to choose among all the available features. You will then be asked to specify the page that will generally be used to target a set of blocks, and then the number of random blocks you wish to insert.
Each SmartBlock can of course be triggered inline (pressing `jj` by default). 
The interest of SmartBlocks is that the whole process can be automated with your preferred settings, in each of your workflows (your roam/templates or your SmartBlocks)
There is two options:
- You can insert a button with variables in your workklow:
The main syntax for a button is `{{Title you choose:SmartBlock:Name of the SmartBlock:variable1=value,variable2=value}}`
Variables are optional. The main variables are: 
    `pageName=page name` (page name with or without brackets)
    `repeat=x` (x is the number of block that you want to insert)
    `button=on` or `button=off` (if you want or not display the button to reload a random block)
Example of a button running block mention Smartblock, which mentions [[quote]] page, 3 times, without button:
`{{My random button:SmartBlock:Random block mention:pageName=quote,repeat=3,button=no}}`

- You can insert an automated SmartBlock command (so the choosen SmartBlock will be run automatically) (fore more experienced users)
Earch SmartBlock can be run from another SmartBlock (but not roam/templates) with `<%SMARTBLOCK:name of the Smartbloc%>` command. Variables, if needed, have to be set before the <%SMARTBLOCK%> command.
Same example as above: 
`<%SET:pageName,quote%><%SET:repeat,3%><%SET:button=no%><%SMARTBLOCK:Random block mention%>`

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
   
---
If you find my work useful and want to encourage me to continue and improve the existing extensions or produce new ones, you can buy me a coffee ☕ [https://buymeacoffee.com/fbgallet](https://buymeacoffee.com/fbgallet) and follow me on Twitter: [@fbgallet](https://twitter.com/fbgallet).
Thanks in advance for your support! 🙏
