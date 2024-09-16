
//Link to Pixel Graphic Engine: https://www.khanacademy.org/computer-programming/pixel-graphic-engine-for-world-of-blocks/6741753422331904

//Link to Mob Engine (beta): https://www.khanacademy.org/computer-programming/mob-engine-for-wob/5199525846630400
var username="_ingot_";


//seed. change to any number, same numbers will result in same starting worlds. try seed 26235
var seed=random(0,10000);
randomSeed(seed);
smooth();
/*
*********************************************************************************************//**
██╗███╗   ██╗ ██████╗  ██████╗ ████████╗              
██║████╗  ██║██╔════╝ ██╔═══██╗╚══██╔══╝              
██║██╔██╗ ██║██║  ███╗██║   ██║   ██║                 
██║██║╚██╗██║██║   ██║██║   ██║   ██║                 
██║██║ ╚████║╚██████╔╝╚██████╔╝   ██║                 
╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚═════╝    ╚═╝                 **//*
                                                      
 ██████╗  █████╗ ███╗   ███╗███████╗                  
██╔════╝ ██╔══██╗████╗ ████║██╔════╝                  
██║  ███╗███████║██╔████╔██║█████╗                    
██║   ██║██╔══██║██║╚██╔╝██║██╔══╝                    
╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗                  
 ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝                  *//**
                                                      
██████╗ ███████╗██╗   ██╗                             
██╔══██╗██╔════╝██║   ██║                             
██║  ██║█████╗  ██║   ██║                             
██║  ██║██╔══╝  ╚██╗ ██╔╝                             
██████╔╝███████╗ ╚████╔╝                              
╚═════╝ ╚══════╝  ╚═══╝                               **//*
                                                      
███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗ ███████╗
██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗██╔════╝
███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║███████╗
╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║╚════██║
███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝███████║
╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝ ╚══════╝  *//**
********************************************************************************************//**
* 
* 
**/


/**
 * @TODO:
 * 
 * Blocks:
 * 
 * 
 *  apple
 *  tnt*
 *  plank
 *  dirt
 *  rock
 *  (air)
 *  grass
 *  sapling
 *  wood
 *  leaf
 *  gold
 *  gold_ore 
 *  diamond_ore
 *  diamond
 *  iron
 *  iron_ore
 *  border
 *  iSapling
 *  wood-diamond_pickaxe
 * 
 * *cannot be obtained
 * 
 * Codelog:
 * 
 *  v0.0: all blocks up to gold (or leaves), gen, trees.
 *  v0.1:
 *  added camera
 *  v0.2:
 *  added infinite worlds
 *  v0.3:
 *  Blocks take time to break. However, no inven yet (you place rock always)
 *  v0.4 (5/3/2024):
 *  Blocks have a texture when breaking (cracks) +Guess What! I did not do it manually! check function drawOverLay for the code. (and point defenition)
 *   -Added gold ore in world!
 * v0.5(Sat May 4 2024)"
 *  Finally added all the ores! (gold, iron, dims!)
 * - added iron and diamond, and realized that its just not fun typing 'dimond' ops i mean 'damind' ops i mean 'diamond'. Its because of the short form 'dim'
 * - added border!
 * -added onlyUpdateVisibleBlocks lag control.
 * v0.6(May 10)
 * -FINALLY added stacking!!!!!!! IT WAZ WAY TOOOO HARD FOR HOW SIMPLE IT IS!
 * -Reworked collisions (Now updated by block and allows for mobs to be added better later)
 * -Summer Break. i did little.
 * -Aug 3 (end of summer break) 2024: FINNNNNNNALLLLLY COLLISIONS WORK. its sooo muuuch betar. no phasing. i can check dat if the todo list.
 * v0.7;
 * -Aug 4. fixed saplings. deleted tree code because it waz UGLLLLY. will work on it later. also added gridlines because they came slightly after i reworked the collisions for some reason. ALSO ADDED SEEEEDS. no. not seeds. random seeds so that you can share starting worlds w/ your friends!
 * -Aug 10. Added nice skies.
 * -Aug 11. Fixed a glitch where if you place dirt blocks next to the build limit the game crashes, because saplings spawn outside the world --> X_X
 * -Aug 12. Added time and moon
 * v0.8 Fixed Vibrating!
 * i forgot to update this log, so: Added TNT v0.9, Added Crafting v1.0, Added Mobs, v1.1
And now its Sep 3 2024
 *
 * v1.2:
 * Added lighting!
 * 
 * - Sep 0-6: Added all the pickaxes. So now the game is officially playable.
 * v1.3: I need to make this a new version because it was a big thing to do though it was easy;
 *  ... ... ... ....  REVAMPED CRAFTING!!!  (aka added symbols to the crafting menu instead of just plain ol' text.)
 * 
 * 
 * 
**/
 var setKALoopTimer = function() {
this[["KAInfiniteLoopCount"]] = -Infinity;
};

//no indent for try catch
//try{
//menu stuff
var scene = 0;
var chooseText = null;
//changables:
var delag=false;//set to true if graphics make it laggy.

var onlyUpdateVisibleBlocks = false;//set to true if lagging to much.

//Not a changable:
// 0-24. 24hour clock:
var time=0;


//Replace Textures w/ your own texture if you like! Does not affect gameplay. Do not change blocksize

var shade=1;
var blockSize = 10;

//Textures:{
    var drawStonePickaxe=function(x,y){
        var pixels=[
            
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(69,69,69,255),color(69,69,69,255),color(69,69,69,255),color(69,69,69,255),color(69,69,69,255),color(255,0,0,0),],
[color(255,0,0,0),color(69,69,69,255),color(255,0,0,0),color(69,69,69,255),color(69,69,69,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(61,44,0,255),color(69,69,69,255),color(69,69,69,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(69,69,69,255),color(69,69,69,255),color(61,44,0,255),color(61,44,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(69,69,69,255),color(69,69,69,255),color(69,69,69,255),color(61,44,0,255),color(61,44,0,255),color(145,118,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(69,69,69,255),color(69,69,69,255),color(255,0,0,0),color(255,0,0,0),color(69,69,69,255),color(61,44,0,255),color(69,69,69,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(69,69,69,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(145,118,0,255),color(61,44,0,255),color(145,118,0,255),color(255,0,0,0),color(255,0,0,0),],
[color(69,69,69,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(69,69,69,255),color(61,44,0,255),color(69,69,69,255),color(255,0,0,0),],
[color(69,69,69,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(145,118,0,255),color(61,44,0,255),color(145,118,0,255),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(69,69,69,255),color(61,44,0,255),],


  
        ];
        
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=blockSize/pixels.length;
                rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
            }
        }
    
    };
    var drawIronPickaxe=function(x,y){
        var pixels=[
            
[color(210,164,157,255),color(206,164,158,255),color(255,0,0,0),color(255,0,0,0),color(214,149,165,255),color(200,168,165,255),color(200,148,165,255),color(201,167,156,255),color(213,151,151,255),color(255,0,0,0),],
[color(218,154,148,255),color(255,0,0,0),color(214,161,156,255),color(215,156,164,255),color(64,53,6,255),color(64,41,9,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(216,167,165,255),color(202,158,158,255),color(63,37,2,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(207,163,168,255),color(56,46,0,255),color(59,34,0,255),color(204,162,160,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(208,158,157,255),color(58,54,0,255),color(255,0,0,0),color(203,161,164,255),color(212,148,160,255),color(145,118,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(217,153,152,255),color(61,37,1,255),color(255,0,0,0),color(255,0,0,0),color(145,118,0,255),color(203,163,150,255),color(213,151,156,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(217,166,165,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(216,149,161,255),color(200,148,154,255),color(150,117,9,255),color(255,0,0,0),color(255,0,0,0),],
[color(210,158,163,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(136,118,5,255),color(215,153,153,255),color(205,155,149,255),color(255,0,0,0),],
[color(211,166,150,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(198,150,156,255),color(211,149,159,255),color(138,123,6,255),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(141,116,10,255),color(199,162,148,255),],

  
        ];
        
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=blockSize/pixels.length;
                rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
            }
        }
    
    };
    
    var drawDiamondPickaxe=function(x,y){
        var pixels=[

[color(0,251,255,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(255,0,0,0),],
[color(255,0,0,0),color(0,251,255,255),color(0,251,255,255),color(0,251,255,255),color(0,251,255,255),color(0,251,255,255),color(0,251,255,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(0,251,255,255),color(0,251,255,255),color(145,118,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(0,251,255,255),color(145,118,0,255),color(0,251,255,255),color(145,118,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(0,251,255,255),color(255,0,0,0),color(145,118,0,255),color(61,44,0,255),color(61,44,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(0,251,255,255),color(255,0,0,0),color(255,0,0,0),color(61,44,0,255),color(0,251,255,255),color(61,44,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(0,255,255,255),color(0,251,255,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(61,44,0,255),color(61,44,0,255),color(145,118,0,255),color(255,0,0,0),color(255,0,0,0),],
[color(0,255,255,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(145,118,0,255),color(0,251,255,255),color(145,118,0,255),color(255,0,0,0),],
[color(0,255,255,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(61,44,0,255),color(61,44,0,255),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(145,118,0,255),],

  
        ];
        
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=blockSize/pixels.length;
                rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
            }
        }
    
    };
    var drawGoldPickaxe = function(x,y){
        var pixels=[
            
            
            
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(227,212,0,255),color(227,212,0,255),color(227,212,0,255),color(227,212,0,255),color(227,212,0,255),color(255,0,0,0),],
[color(255,0,0,0),color(227,212,0,255),color(255,0,0,0),color(227,212,0,255),color(227,212,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(61,44,0,255),color(227,212,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(227,212,0,255),color(227,212,0,255),color(61,44,0,255),color(145,118,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(227,212,0,255),color(255,0,0,0),color(61,44,0,255),color(227,212,0,255),color(61,44,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(227,212,0,255),color(227,212,0,255),color(255,0,0,0),color(255,0,0,0),color(145,118,0,255),color(61,44,0,255),color(145,118,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(227,212,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(61,44,0,255),color(227,212,0,255),color(61,44,0,255),color(255,0,0,0),color(255,0,0,0),],
[color(227,212,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(145,118,0,255),color(61,44,0,255),color(145,118,0,255),color(255,0,0,0),],
[color(227,212,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(61,44,0,255),color(227,212,0,255),color(61,44,0,255),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(145,118,0,255),color(61,44,0,255),],

        ];
        
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=blockSize/pixels.length;
                rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
            }
        }
    
    };
        var drawTorch = function(x,y){
        
        var pixelSize=40;
        var pixels=[

[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(248,221,39,255),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(248,221,20,255),color(248,204,18,255),color(154,111,8,255),color(139,108,4,255),],
[color(255,0,0,0),color(255,0,0,0),color(248,228,18,255),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],



];
        
        if(pixels.length===0){
            fill(97, 47, 0);
            rect(x,y,blockSize,blockSize);
        }else{
            for(var i=0;i<pixels.length;i++){
                for(var j=0;j<pixels.length;j++){
                    noStroke();
                    fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                    var pixSize=blockSize/pixels.length;
                    rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
                }
            }
        }
    };
    var drawGold = function(x,y){
        fill(252*shade, 164*shade,0);
        
        rect(x,y,blockSize,blockSize);
    };
    var drawSapling = function(x,y){
            //var pixelSize=80;
        var pixels=[

[color(255,0,0,0),color(255,0,0,0),color(38,79,13,255),color(255,0,0,0),color(255,0,0,0),],
[color(38,79,13,255),color(255,0,0,0),color(255,0,0,0),color(38,79,13,255),color(255,0,0,0),],
[color(255,0,0,0),color(38,79,13,255),color(38,79,13,255),color(38,79,13,255),color(38,79,13,255),],
[color(255,0,0,0),color(255,0,0,0),color(38,79,13,255),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(38,79,13,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],


];
        
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=blockSize/pixels.length;
                rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
            }
        }
        
    };
    var drawBedrock = function(x,y){
        fill(41, 41, 41);
        rect(x,y,blockSize,blockSize);
    };
    var drawWoodPickaxe=function(x,y){
        var pixels=[
            
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(146,112,5,255),color(138,116,0,255),color(136,117,0,255),color(154,110,0,255),color(154,120,0,255),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(145,119,0,255),color(64,53,6,255),color(64,41,9,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(136,121,0,255),color(63,37,2,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(143,128,2,255),color(56,46,0,255),color(59,34,0,255),color(145,118,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(151,120,0,255),color(58,54,0,255),color(255,0,0,0),color(145,118,0,255),color(54,37,0,255),color(145,118,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(146,126,0,255),color(61,37,1,255),color(255,0,0,0),color(255,0,0,0),color(145,118,0,255),color(68,36,0,255),color(145,118,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(144,120,3,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(145,118,0,255),color(64,39,8,255),color(150,117,9,255),color(255,0,0,0),color(255,0,0,0),],
[color(142,117,0,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(136,118,5,255),color(64,40,0,255),color(137,117,0,255),color(255,0,0,0),],
[color(153,122,6,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(143,118,7,255),color(51,52,0,255),color(138,123,6,255),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(141,116,10,255),color(69,36,9,255),],

  
        ];
        
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=blockSize/pixels.length;
                rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
            }
        }
    
    };
    var drawIron = function(x,y){
        fill(166, 166, 166);
        rect(x,y,blockSize,blockSize);
    };
    var drawDiamond = function(x,y){
        fill(76, 204, 224);
        rect(x,y,blockSize,blockSize);
    };
    var drawBackground = function(px,py){
        var sunOffsetX=sin((time/24)*365)*95;
        var sunOffsetY=cos((time/24)*365)*-95;
        
        background(constrain(sin(((time/24)*365)-270)*(255/2)+(255/2)+70,0,255)/1.5,constrain(sin(((time/24)*365)-270)*(255/2)+(255/2)+70,0,255)/1.5,constrain(sin(((time/24)*365)-270)*(255/2)+(255/2)+50,0,255));
        
        noStroke();
        //MOON{
            fill(0, 0, 0);
            rect(px-sunOffsetX+1,py-sunOffsetY+1,15,15);
            fill(255, 255, 255);
            rect(px-sunOffsetX,py-sunOffsetY,15,15);
            
            
            fill(130, 130, 130);
            rect(px-sunOffsetX+9,py-sunOffsetY+6,4,4);
            
            rect(px-sunOffsetX+5,py-sunOffsetY+10,3,3);
            
            rect(px-sunOffsetX+2,py-sunOffsetY+3,5,5);
            
            noStroke();
        //}SUN{
            fill(255);
            rect(px+sunOffsetX,py+sunOffsetY,20,20);
        //}

        fill(constrain(sin(((time/24)*365)-270)*(255/2)+(255/2)+70,0,255));
        //println(sin((time*24))*(255/2)+(255/2));
        for(var i=0;i<20;i++){
            //fill(255, 205, 97,40);
            fill(255, 253, 122,sin(((time/24)*365)-270)*20);
            ellipse(px+10+sunOffsetX,py+10+sunOffsetY,i*15,i*15);
            fill(168, 168, 168,4);
            ellipse(px+15/2-sunOffsetX,py+15/2-sunOffsetY,i*5,i*5);
        }
        
        
    };
    var drawGoldOre = function(x,y){
        //low quality:
        fill(97*shade);
        rect(x,y,blockSize,blockSize);
        fill(255*shade, 255*shade, 0*shade);
        rect(x+blockSize/5,y+blockSize/5,blockSize/5,+blockSize/5);
        rect(x+blockSize/2,y+blockSize/2,blockSize/3.3333333,blockSize/3.33333333);
    };
    var drawIronOre = function(x,y){
        fill(90*shade);
        rect(x,y,blockSize,blockSize);
        fill(112*shade);
        rect(x+blockSize/5,y+blockSize/5,blockSize/5,+blockSize/5);
        rect(x+blockSize/2,y+blockSize/2,blockSize/3.3333333,blockSize/3.33333333);
    };
    var drawCoalOre = function(x,y){
        fill(97*shade);
        rect(x,y,blockSize,blockSize);
        fill(0, 0, 0);
        rect(x+blockSize/5,y+blockSize/5,blockSize/5,+blockSize/5);
        rect(x+blockSize/2,y+blockSize/2,blockSize/3.3333333,blockSize/3.33333333);
    };
    var drawDiamondOre = function(x,y){
        fill(97*shade);
        rect(x,y,blockSize,blockSize);
        fill(0, 255*shade, 247*shade);
        rect(x+blockSize/5,y+blockSize/5,blockSize/5,+blockSize/5);
        rect(x+blockSize/2,y+blockSize/2,blockSize/3.3333333,blockSize/3.33333333);
    };
    var drawCopperOre = function(x,y){
        fill(97*shade);
        rect(x,y,blockSize,blockSize);
        fill(184*shade, 98*shade, 0);
        rect(x+blockSize/5,y+blockSize/5,blockSize/5,+blockSize/5);
        rect(x+blockSize/2,y+blockSize/2,blockSize/3.3333333,blockSize/3.33333333);
    };
    var drawBorder = function(x,y){
        fill(255, 255, 255);
        rect(x,y,blockSize,blockSize);
        fill(0, 221*shade, 255*shade);
        rect(x+blockSize/2.5,y,blockSize/5,blockSize);
        rect(x,y+blockSize/2.5,blockSize,blockSize/5);
        
    };
    var drawDirt = function(x,y){
        fill(90*shade, 50*shade, 0*shade);
        rect(x,y,blockSize,blockSize);
    };
    var drawGrass = function(x,y){
        fill(90*shade, 50*shade, 0);
        rect(x,y,blockSize,blockSize);
        fill(0, 100*shade, 20*shade);
        rect(x,y,blockSize,blockSize/4);
    };
    var drawSand = function(x,y){
        fill(240*shade, 237*shade, 195*shade);
        rect(x,y,blockSize,blockSize);
    };
    var drawCobbleStone = function(x,y){
        fill(69, 69, 69);
        rect(x,y,blockSize,blockSize);
        fill(255, 255, 255);
        stroke(255, 255, 255);
        rect(x,y,blockSize/10,blockSize/10);
        rect(x+blockSize-2,y,blockSize/10,blockSize/10);
        rect(x,y+blockSize-2,blockSize/10,blockSize/10);
        rect(x+blockSize-2,y+blockSize-2,blockSize/10,blockSize/10);
        stroke(0, 0, 0);
    };
    var drawWater = function(x,y){
        fill(0, 119, 255);
        noStroke();
        rect(x,y,blockSize,blockSize);
        stroke(0, 0, 0);
    };
    var drawObsidian = function(x,y){
        fill(13, 2, 61);
        rect(x,y,blockSize,blockSize);
        
    };
    var drawWood = function(x,y){
        fill(61, 35, 0);
        rect(x,y,blockSize,blockSize);
    };
    var drawLeaf = function(x,y){
        fill(40*shade, 80*shade, 10*shade);
        rect(x,y,blockSize,blockSize);
    };
    var drawRock = function(x,y){
        fill(96*shade,96*shade,96*shade);
        rect(x,y,blockSize,blockSize);
    };
    var drawTNT = function(x,y){
        var pixels=[
            

[color(221,10,0,255),color(232,8,0,255),color(227,7,4,255),color(0,0,0,255),color(249,255,255,255),color(255,250,250,255),color(251,255,247,255),color(255,15,15,255),color(255,15,15,255),color(255,15,15,255),],
[color(255,15,15,255),color(255,15,15,255),color(255,15,15,255),color(0,0,0,255),color(0,0,0,255),color(0,0,0,255),color(0,0,0,255),color(229,0,0,255),color(232,3,0,255),color(220,0,0,255),],
[color(233,1,0,255),color(223,6,8,255),color(233,9,1,255),color(0,0,0,255),color(255,255,255,255),color(255,248,253,255),color(255,253,255,255),color(255,15,15,255),color(255,15,15,255),color(255,15,15,255),],
[color(255,15,15,255),color(255,15,15,255),color(255,15,15,255),color(0,0,0,255),color(0,0,0,255),color(0,0,0,255),color(0,0,0,255),color(229,7,6,255),color(224,0,0,255),color(236,0,0,255),],
[color(234,0,0,255),color(237,2,0,255),color(235,0,0,255),color(255,255,255,255),color(0,0,0,255),color(255,246,255,255),color(255,255,249,255),color(255,15,15,255),color(255,15,15,255),color(255,15,15,255),],
[color(255,15,15,255),color(255,15,15,255),color(255,15,15,255),color(255,254,255,255),color(249,245,255,255),color(0,0,0,255),color(247,253,255,255),color(225,2,7,255),color(224,0,0,255),color(230,4,1,255),],
[color(230,0,3,255),color(217,3,6,255),color(236,8,0,255),color(0,0,0,255),color(0,0,0,255),color(0,0,0,255),color(0,0,0,255),color(255,15,15,255),color(255,15,15,255),color(255,15,15,255),],
[color(255,15,15,255),color(255,15,15,255),color(255,15,15,255),color(0,0,0,255),color(250,255,255,255),color(250,255,249,255),color(255,249,255,255),color(235,10,5,255),color(221,0,0,255),color(230,0,0,255),],
[color(219,1,0,255),color(232,0,0,255),color(218,3,5,255),color(0,0,0,255),color(0,0,0,255),color(0,0,0,255),color(0,0,0,255),color(255,15,15,255),color(255,15,15,255),color(255,15,15,255),],
[color(255,15,15,255),color(255,15,15,255),color(255,15,15,255),color(0,0,0,255),color(255,255,255,255),color(255,255,255,255),color(255,253,255,255),color(220,6,10,255),color(231,0,3,255),color(228,2,9,255),],
            

            
            
        ];
        
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=blockSize/pixels.length;
                rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
            }
        }
    
    };
    var drawPlank = function(x,y){
        
        //var pixelSize=80;
        var pixels=[

[color(163,118,0,255),color(199,163,32,255),color(159,120,4,255),color(212,165,41,255),color(171,109,9,255),],
[color(161,123,0,255),color(159,120,0,255),color(155,117,1,255),color(203,171,30,255),color(214,159,42,255),],
[color(157,122,4,255),color(216,172,46,255),color(166,117,7,255),color(215,173,33,255),color(155,112,0,255),],
[color(154,126,1,255),color(216,162,34,255),color(197,177,31,255),color(207,168,33,255),color(165,119,5,255),],
[color(198,161,43,255),color(200,165,49,255),color(155,127,4,255),color(202,166,34,255),color(169,120,7,255),],


];
        
        
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=blockSize/pixels.length;
                rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
            }
        }
    
    
    };
    var drawApple=function(x,y){
        var pixels=[
            
            
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(228,0,0,255),color(233,0,0,255),color(219,0,0,255),],
[color(255,0,0,0),color(30,215,0,255),color(243,0,0,255),color(233,0,0,255),color(226,0,0,255),],
[color(255,0,0,0),color(255,0,0,0),color(237,0,0,255),color(205,0,0,255),color(228,0,0,255),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
 

            
            
        ];
        
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=blockSize/pixels.length;
                rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
            }
        }
    
    };
    var drawRawPork = function(x,y){
        pixels = [[color(199,109,199,255),color(255,0,0,255),color(255,0,0,255),color(199,109,199,255),color(255,0,0,255),],
[color(199,109,199,255),color(199,109,199,255),color(199,109,199,255),color(199,109,199,255),color(255,0,0,255),],
[color(255,0,0,255),color(199,109,199,255),color(199,109,199,255),color(199,109,199,255),color(255,0,0,255),],
[color(199,109,199,255),color(199,109,199,255),color(199,109,199,255),color(199,109,199,255),color(199,109,199,255),],
[color(199,109,199,255),color(199,109,199,255),color(199,109,199,255),color(255,0,0,255),color(255,0,0,255),],];
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=blockSize/pixels.length;
                rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
            }
        }
    };
    var drawRottenFlesh = function(x,y){
        pixels = [[color(255,0,0,255),color(26,128,0,255),color(26,128,0,255),color(255,0,0,255),color(255,0,0,255),],
[color(26,128,0,255),color(255,0,0,255),color(26,128,0,255),color(255,0,0,255),color(26,128,0,255),],
[color(255,0,0,255),color(26,128,0,255),color(26,128,0,255),color(26,128,0,255),color(26,128,0,255),],
[color(26,128,0,255),color(255,0,0,255),color(26,128,0,255),color(26,128,0,255),color(255,0,0,255),],
[color(26,128,0,255),color(255,0,0,255),color(26,128,0,255),color(255,0,0,255),color(26,128,0,255),],];
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=blockSize/pixels.length;
                rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
            }
        }
    };
    //normal
    if(!delag){
        
        
        var drawRedstone = function(x,y){
            pixels = [
                [color(125,126,123),color(126,50,35),color(126,125,122),color(122,124,126),color(125,126,124),],
    [color(122,126,123),color(126,26,25),color(126,37,13),color(126,123,124),color(126,34,12),],
    [color(123,124,126),color(125,125,126),color(126,14,14),color(126,17,8),color(122,124,126),],
    [color(123,123,126),color(126,32,12),color(125,126,125),color(126,28,11),color(126,30,13),],
    [color(126,21,7),color(123,125,126),color(123,126,124),color(126,30,15),color(126,125,121),],
            ];
            if(pixels.length===0){
                fill(66, 66, 66);        
                rect(x,y,blockSize,blockSize);
            }
    };
        var drawGoldOre = function(x,y){
            var pixels=[
                
                
    [color(65,65,65),color(249,208,74),color(67,67,67),color(60,60,60),],
    [color(75,75,75),color(93,93,93),color(89,89,89),color(249,241,66),],
    [color(249,202,73),color(83,80,48),color(249,218,61),color(55,55,55),],
    [color(65,65,65),color(249,199,61),color(91,91,91),color(76,76,76),],
    
                
                
            ];
            if(pixels.length===0){
                fill(66, 66, 66);        
                rect(x,y,blockSize,blockSize);
                
            }
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=blockSize/pixels.length;
                rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
            }
        }
    };
        var drawIronOre = function(x,y){
            var pixels=[
                [color(65,65,65),color(176,175,173),color(67,67,67),color(60,60,60),],
                [color(75,75,75),color(93,93,93),color(89,89,89),color(169,169,176),],
                [color(176,171,176),color(72,72,72),color(170,175,176),color(55,55,55),],
                [color(65,65,65),color(175,176,166),color(91,91,91),color(76,76,76),],
                
                
                
            ];
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=blockSize/pixels.length;
                rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
            }
        }
            
            if(pixels.length===0){
                fill(79, 79, 79);        
                rect(x,y,blockSize,blockSize);
            }
    };
        var drawDiamondOre = function(x,y){
            var pixels=[
                [color(65,65,65),color(14,239,250),color(67,67,67),color(60,60,60),],
    [color(75,75,75),color(93,93,93),color(89,89,89),color(17,219,250),],
    [color(21,250,236),color(38,98,103),color(13,219,250),color(55,55,55),],
    [color(65,65,65),color(15,232,250),color(91,91,91),color(76,76,76),],
    
                
                
            ];
            if(pixels.length===0){
                fill(79, 79, 79);        
                rect(x,y,blockSize,blockSize);
            }else {
                for(var i=0;i<pixels.length;i++){
                    for(var j=0;j<pixels.length;j++){
                        noStroke();
                        fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                        var pixSize=blockSize/pixels.length;
                        rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
                    }
                }
            }
    };
        var drawDirt = function(x,y){
            
            var pixelSize=40;
            var pixels=[
    
    
    [color(86,56,0),color(103,52,0),color(82,58,0),color(111,55,0),],
    [color(114,50,0),color(95,58,0),color(104,56,0),color(83,55,0),],
    [color(106,58,0),color(110,54,0),color(94,59,0),color(82,58,0),],
    [color(115,56,0),color(109,53,0),color(103,58,0),color(117,56,0),],
    
    
    ];
            if(pixels.length===0){
                fill(97, 47, 0);
                rect(x,y,blockSize,blockSize);
            }else{
                for(var i=0;i<pixels.length;i++){
                    for(var j=0;j<pixels.length;j++){
                        noStroke();
                        fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                        var pixSize=blockSize/pixels.length;
                        rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
                    }
                }
            }
    };
    var drawCoalOre = function(x,y){
    var pixels=[
        
[color(13,13,13,255),color(57,57,57,255),color(67,67,67,255),color(60,60,60,255),],
[color(75,75,75,255),color(93,93,93,255),color(13,13,13,255),color(72,72,72,255),],
[color(87,87,87,255),color(72,72,72,255),color(55,55,55,255),color(13,13,13,255),],
[color(65,65,65,255),color(13,13,13,255),color(91,91,91,255),color(76,76,76,255),],

        
        
    ];
    
    if(pixels.length===0){
        fill(79, 79, 79);        
        rect(x,y,blockSize,blockSize);
    }else{
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=blockSize/pixels.length;
                rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
            }
        }
        
    }
    };
        var drawRock = function(x,y){
                //var pixelSize=80;
            var pixels=[
    
    [color(65,65,65),color(57,57,57),color(67,67,67),color(60,60,60),],
    [color(75,75,75),color(93,93,93),color(89,89,89),color(72,72,72),],
    [color(87,87,87),color(72,72,72),color(55,55,55),color(55,55,55),],
    [color(65,65,65),color(83,83,83),color(91,91,91),color(76,76,76),],
    
    
    ];
            if(pixels.length===0){
                fill(79, 79, 79);        
                rect(x,y,blockSize,blockSize);
            }else{
                for(var i=0;i<pixels.length;i++){
                    for(var j=0;j<pixels.length;j++){
                        noStroke();
                        fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                        var pixSize=blockSize/pixels.length;
                        rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
                    }
                }
            }
        
    };
        var drawGrass = function(x,y){
            
            //var pixelSize=80;
            var pixels=[
    
    
    [color(71,112,32),color(103,52,0),color(82,58,0),color(111,55,0),],
    [color(41,85,23),color(38,72,18),color(104,56,0),color(83,55,0),],
    [color(31,72,26),color(110,54,0),color(94,59,0),color(82,58,0),],
    [color(38,72,21),color(109,53,0),color(103,58,0),color(117,56,0),],
    
    ];
            if(delag){
                pixels=[[color(56,129,48),color(96,69,18),],
    [color(51,145,34),color(96,82,12),]];
            }
            if(pixels.length===0){
                fill(0,120,16);        
                rect(x,y,blockSize,blockSize);
            }else{
                for(var i=0;i<pixels.length;i++){
                    for(var j=0;j<pixels.length;j++){
                        noStroke();
                        fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                        var pixSize=blockSize/pixels.length;
                        rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
                    }
                }
            }
        
    };
        var drawWood = function(x,y){
            
            //var pixelSize=80;
            var pixels=[
    
    
    [color(77,55,19),color(77,64,18),color(77,62,19),color(77,72,16),color(73,59,11),],
    [color(61,41,11),color(96,84,25),color(40,33,13),color(40,33,10),color(40,31,6),],
    [color(86,75,11),color(77,73,9),color(77,63,17),color(77,65,9),color(86,58,14),],
    [color(40,28,11),color(40,33,9),color(40,29,10),color(47,43,14),color(96,73,18),],
    [color(61,41,11),color(96,84,20),color(44,40,11),color(96,86,20),color(86,77,31),],
    
    
    ];
            if(pixels.length===0){
                fill(0,120,16);        
                rect(x,y,blockSize,blockSize);
            }else{
                for(var i=0;i<pixels.length;i++){
                    for(var j=0;j<pixels.length;j++){
                        noStroke();
                        
                        fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                        var pixSize=blockSize/pixels.length;
                        rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
                    }
                }
            }
        
    };
        var drawLeaf = function(x,y){
            var pixels=[
    
    
    
    [color(38,79,13),color(22,78,20),color(38,79,13),color(16,67,8),color(38,79,13),],
    [color(4,67,9),color(50,99,23),color(25,82,18),color(35,78,27),color(23,108,12),],
    [color(38,79,13),color(25,67,13),color(7,78,12),color(42,82,8),color(38,79,13),],
    [color(42,108,23),color(38,79,13),color(15,82,18),color(38,79,13),color(23,78,13),],
    [color(31,67,9),color(32,78,26),color(9,67,10),color(38,79,13),color(27,67,12),],
    
    
    
    ];
            if(pixels.length===0){
                fill(0,120,16);        
                rect(x,y,blockSize,blockSize);
            }else{
                for(var i=0;i<pixels.length;i++){
                    for(var j=0;j<pixels.length;j++){
                        noStroke();
                        fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                        var pixSize=blockSize/pixels.length;
                        rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
                    }
                }
            }
        
    };
    }
    //extremely high quality
    if(delag===8){
        var drawGoldOre = function(x,y){
        var pixels = [[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(255,187,0,255),color(255,187,0,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],];
        if(pixels.length === 0){
            fill(75, 75, 75);
            rect(x,y,blockSize,blockSize);
        }else{
            for(var i=0;i<pixels.length;i++){
                for(var j=0;j<pixels.length;j++){
                    noStroke();
                    fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                    var pixSize=blockSize/pixels.length;
                    rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
                }
            }
        }
    };
        var drawDiamondOre = function(x,y){
            var pixels = [[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(0,255,255,255),color(0,255,255,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],];
            if(pixels.length===0){
                fill(0,120,16);        
                rect(x,y,blockSize,blockSize);
            }else{
                for(var i=0;i<pixels.length;i++){
                    for(var j=0;j<pixels.length;j++){
                        noStroke();
                        fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                        var pixSize=blockSize/pixels.length;
                        rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
                    }
                }
            }
        };
        var drawIronOre = function(x,y){
            var pixels = [[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(150,150,150,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],
[color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(150,150,150,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),color(75,75,75,255),],];
            if(pixels.length===0){
                fill(0,120,16);        
                rect(x,y,blockSize,blockSize);
            }else{
                for(var i=0;i<pixels.length;i++){
                    for(var j=0;j<pixels.length;j++){
                        noStroke();
                        fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                        var pixSize=blockSize/pixels.length;
                        rect(x+i*(pixSize),y+j*pixSize,pixSize,pixSize);
                    }
                }
            }
        };
        var drawWood = function(x,y){
            var pixels = [];
        };
    }

//}
//scale(0.1);
//this[['KAIfniteLoopProtect']]=false;
//where the player spawns:
var spawnPoint=new PVector(100,50);
var inventory=[];
var blocks=[];
var selected=0;


//dimentions:
var worldHeight=40;
var worldWidth=30;

var hillHeight=0.8;
var hillWidth=5;
var playerHeight=18;
var playerWidth=7;
var amountOfSinesForMountinains=10;
var depthOfBlocks=worldHeight-30;
var dirtHeight=5+depthOfBlocks;
var ticks=100000;
//keycontrol
var keys=[];

//elem rareness{
    var coalRareness=9; // one out of [coalRareness] rock becomes coal ore.
    var coalMaxHeight=30;
    var coalMinHeight=20;
    
    var goldRareness=100; // one out of [goldRareness] rock becomes gold ore.
    var goldMaxHeight=40;
    var goldMinHeight=25;
    
    var ironRareness=50; // one out of [ironRareness] rock becomes iron ore.
    var ironMaxHeight=30;
    var ironMinHeight=20;
    
    var diamondRareness=150; // one out of [dimRareness] rock becomes dim ore.
    var diamondMaxHeight=40;
    var diamondMinHeight=30;
    

//}
var structures={
    treeStage1:{
        key:["wood","leaf"],
        blocks:[
            [  ,   ,   ],
            [  , 1 ,   ],
            [ 1, 1 , 1 ],
            [ 1, 0 , 1 ],
            [  , 0 ,   ],
            [  , 0 ,   ]
        ],
        center: [1,5]
    },
    treeStage2:{
        key:["wood","leaf"],
        blocks:[
            [  , 1 , 1 ,1 ,  ],
            [1 , 1 , 0 ,1 ,  ],
            [1 , 0 , 0 ,1 ,1 ],
            [1 , 1 , 0 ,0 ,1 ],
            [  , 1 , 0 ,1 ,  ],
            [  ,   , 0 ,  ,  ],
            [  ,   , 0 ,  ,  ],
            [  ,   , 0 ,  ,  ]
        ],
        center: [2,7]
    },
    cavePart:{
        key:["rock","air"],
        blocks:[
            [0,0,0,0,0,0,0,0],
            [0,0,1,1,1,1,1,0],
            [0,1,1,1,1,1,1,1],
            [0,0,1,0,1,1,1,0]
        ],
        center: [0,0]
    }
};
function placeStructure(structure,i,j){
    //in here are all the structures, trees, other stuff
    
    var structObj;
    switch(structure){
        case "treeStage1":
            structObj=structures.treeStage1;
        break;
        case "treeStage2":
            structObj=structures.treeStage2;
            break;
        case "cave":
            
            structObj=structures.cavePart;
    }
    blocks[i][j].break();
    var blockName;
    for(var subI=0;subI<structObj.blocks.length;subI++){
        for(var subJ=0;subJ<structObj.blocks[0].length+1;subJ++){
            try{
                var blockName=structObj.key[structObj.blocks[subI][subJ]];
                if(blockName){
                    
                    blocks [i + subJ - structObj.center[0]] 
                            [j + subI - structObj.center[1]] .break();
                    blocks [i + subJ - structObj.center[0]] 
                            [j + subI - structObj.center[1]] .place(blockName);
                }
                    
            }catch(e){}
        }
    }
}

var loadAheadRand=0;
function loadingScreen(){
    
        //frameRate(100000);
        background(0, 0, 0);
        
        textAlign(CENTER,CENTER);
        
        textSize(50);
        
        //loadAheadRand/=5;
        fill(128, 128, 128);
        
        
        fill(255, 255, 255);
        if(ticks>200 && ticks<205){
            loadAheadRand+=1;
        }
        if(ticks>100 && ticks<120){
            loadAheadRand+=1;
        }
        if(ticks>240){
            loadAheadRand-=0.3;
        }
        arc(200,200,100,100,ticks*10,ticks*1.1*10);
        fill(0, 0, 0);
        ellipse(200,200,90,90);
        //if()
        fill(255, 255, 255);
        text("Loading "+(round(constrain((ticks/4)/0.8+loadAheadRand,0,100)))+"%",200,100);
}
var breakingStages=10;
keyPressed=function(){ keys[keyCode]=true; };
keyReleased=function(){ keys[keyCode]=false; };
/* converts array obj into array*/
function unpack(arr){
    var outArr=[];
    for(var i=0;i<arr.length;i++){
        outArr.push(arr[i]);
    }
}function rectRectCollision(x1, y1, w1, h1, x2, y2, w2, h2) {
    if ((x1 < x2 + w2) && (x1 + w1 > x2) && (y1 < y2 + h2) && (y1 + h1 > y2)) {
        
        // Calculate the overlap in both directions
        var overlapX = Math.min(x1 + w1, x2 + w2) - Math.max(x1, x2);
        var overlapY = Math.min(y1 + h1, y2 + h2) - Math.max(y1, y2);

        // Determine the direction of the collision
        if (overlapX < overlapY) {
            // Horizontal collision
            if (x1 < x2) {
                return { direction: "right", amount: overlapX };
            } else {
                return { direction: "left", amount: overlapX };
            }
        } else {
            // Vertical collision
            if (y1 < y2) {
                return { direction: "bottom", amount: overlapY };
            } else {
                return { direction: "top", amount: overlapY };
            }
        }
    }
    return { direction: "none", amount: 0 };
}



// Draws the cracks over a block when mined 
    var points=[[]];
    for(var i=0;i<breakingStages+1;i++){
        if(i>1){
        }
        for(var j=0;j<10;j++){
            
            points[i].push(new PVector(floor(random(0,blockSize)),floor(random(0,blockSize))));
        }
        points.push([]);
    }
    //draw the cracks over the block:
    function drawOverLay(x,y,strength){
        
        var stage=(-floor(strength*breakingStages))+breakingStages;
        for(var i=0;i<stage;i++){
            for(var j=0;j<points[i].length;j++){
                stroke(0, 0, 0);
                strokeWeight(1.01);
                point(points[i][j].x+x,points[i][j].y+y);
            }
        }
        strokeWeight(1);
        
    }

var player;
//kill player
function kill(how){
    resetMatrix();
    fill(255, 0, 0,100);
    rect(0,0,400,400);
    textAlign(CENTER,CENTER);
    noLoop();
    textSize(10);
    resetMatrix();
    fill(0, 0, 0);
    fill(15, 15, 15);
    resetMatrix();
    textSize(15);
    text("YOU DIED! " + username + " "+how,200,200);

}
//menu
var tex = function(tex,x,y){
    
    fill(0, 0, 0);
    text(tex,x,y);
    text(tex,x+1,y+1);
    text(tex,x+2,y+2);
    text(tex,x+3,y+3);
    
    fill(71, 71, 71);
    text(tex,x+4,y+4);
    
};
var button = function(x,y,w,h,sc){
    stroke(0, 0, 0);
    fill(168, 168, 168);
    if(mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h){
        fill(97, 97, 97);
        rect(x-1,y-1,w+2,h+2,10);
    }else{
        rect(x,y,w,h,10);
    }
    
    if(mouseX>x&&mouseX<x+w&&mouseY>y&&mouseY<y+h&&mouseIsPressed){
        scene = sc;
    }
};
var sayings = {
    stuff:["Hi there!","made in china!","laaaaaaggggggggggg...","Do people read these?","we're not very skilled","donate to stop cancer(or charity?)","Time for more updates?","don't touch grass","100% of intro to JS","collab!","?woh","veritasium!","water breaks laws of physics!","is there such a thing as textMode(); ?","chromebooks crash when you load google docs!","bloxd.io controls!","Happy birthday to someone...","2d!","now unedible!","Copyright 2024", "WE SHALL OVERTHROW THE KINGDOM OF BENUMUS"]
};
chooseText = round(random(0,sayings.stuff.length));
while(chooseText === " "){
    chooseText = round(random(0,sayings.stuff.length));
}
var Y = 0;
var LOAD = function(){
    for(var i = 0;i<1600;i++){
        if(i===400){
            Y +=10;
        }
        fill(random(64,163),random(31,79), 0);
        rect(i*10,Y,10,10);
    }
};
var about = function(){
    LOAD();
    fill(255, 255, 255);
    textSize(20);
    fill(255, 255, 255);
    text("  credits:\n      agni(collisions,world gen,inventory, mobs)\n      Inlogical(textures,bug testing)\n      Kirill\n Ron (for existing)",10,50);
    fill(107, 107, 107);
    button(0,350,100,50,0);
    fill(0, 0, 0);
    text("BACK",20,365);
};
//hot bar 
function selecting (){
    if(keys[48]){selected=9;}
    if(keys[49]){selected=0;}
    if(keys[50]){selected=1;}
    if(keys[51]){selected=2;}
    if(keys[52]){selected=3;}
    if(keys[53]){selected=4;}
    if(keys[54]){selected=5;}
    if(keys[55]){selected=6;}
    if(keys[56]){selected=7;}
    if(keys[57]){selected=8;}
}

var Terrain=function(){
    
    this.sines=[];
    this.terrain=[];
    this.offset=random(-50,50);
    
};

var pMousePressed=false;
//gen terrain: its a sum of sine waves!
Terrain.prototype.initialize=function(){
    for(var i=0;i<amountOfSinesForMountinains;i++){
        //               fq:frequncy      ht:height
        this.sines.push({fq: random(10,50), ht: random(0,1)});
    }
    
    for(var i=0;i<worldWidth;i++){
        //randomly change the sines,to have different mountinains. (joind by cliffs)
        if(floor(random(0,100))===0){
            this.sines=[];
            for(var j=0;j<amountOfSinesForMountinains;j++){
                this.sines.push({fq: random(10,50), ht: random(0,1)});
            }
        
    
        }
        
        var output=0;
        for(var j=0;j<amountOfSinesForMountinains;j++){
            output+=sin(i*this.sines[j].fq+this.offset)*this.sines[j].ht;
        }
        
        this.terrain.push(output*hillHeight);
    }
};
//continue terrain
Terrain.prototype.cont=function(){
        if(floor(random(0,100))===0){
            
            this.sines=[];
            for(var j=0;j<amountOfSinesForMountinains;j++){
                this.sines.push({fq: random(10,50), ht: random(0,1)});
            }
        }
        
        var output=0;
        for(var j=0;j<amountOfSinesForMountinains;j++){
            output+=sin((worldWidth)*this.sines[j].fq+this.offset)*this.sines[j].ht;
        }
        
        this.terrain.push(output*hillHeight);
};

Terrain.prototype.get = function(x){
    try{
        return this.terrain[x];
    }catch(e){
        return 0;
    }
};
//crate a terrain
var terrain = new Terrain();
terrain.initialize();

var entities;

var Entity=function(x,y,type){
    
    this.x=x;
    this.y=y;
    this.type=type;
    this.vx=0;
    this.vy=0;
    this.isOnGround=false;
    switch(type){
        case "pig":
            this.health = 20;
            this.h=10;
            this.w=10;
        break;
        case "zombie":
            this.health = 20;
            this.h=13;
            this.w=5;
        break;
    }
    this.addVel=false;
    
    
    this.isJumping=false;
    this.isGoingLeft=true;
    this.isGoingRight=false;
};
var zoom;
var drop;
Entity.prototype.draw= function(){
    switch(this.type){
        case "pig":
        fill(255, 54, 215);
        rect(this.x,this.y,this.w,this.h);
        break;
        case "zombie":
            fill(255, 0, 0);
            //ellipse(player.x+mouseX/zoom-100,player.y+mouseY/zoom-100,10,10);
            fill(49, 184, 0);
            rect(this.x,this.y,this.w,this.h);
            var x=this.x;
            var y=this.y;
            
            try{
                if(blocks[round(this.x/10)][round(this.y/10)].light>1){
                    fill(255+random(0,-100), 255+random(0,-100), 0);
                    rect(this.x,this.y,this.w,-3);
                }
            }catch(e){
                entities.splice(entities.indexOf(this),1);
            }
        break;
    }
};
Entity.prototype.update=function(){
    
    if(player.health<0){
        kill("was killed by a "+this.type);
    }if(this.health<=0){
        
        switch(this.type){
            case "pig":
                drop("raw_pork",this.x,this.y);
            break;
            case "zombie":
                drop("rotten_flesh",this.x,this.y);
            break;
        }
        
        entities.splice(entities.indexOf(this),1);
        
    }
    if(player.x+mouseX/zoom-100>this.x && player.x+mouseX/zoom-100<this.x+this.w){
        if(player.y+mouseY/zoom-100>this.y && player.y+mouseY/zoom-100<this.y+this.h && mouseIsPressed &&!pMousePressed){
            this.y-=10;
            this.x+=random(-1,1);
            this.health-=5;
            
        }
    }

    if(dist(this.x,this.y,player.x,player.y)>100 && random(0,200)<1){
        entities.splice(entities.indexOf(this),1);
    }
    
   switch(this.type){
       
        case "pig":
        break;
        case "zombie":
            
            if(dist(this.x,this.y,player.x,player.y)<20&&random(0,10)<1){
                player.health-=0.5;
                player.vx+=random(-5,5);
                
                player.vy-=random(1,1);
            }
            try{
                if(blocks[round(this.x/10)][round(this.y/10)].light>0.7){
                    this.health-=0.1;
                }
            }catch(e){
                entities.splice(entities.indexOf(this),1);
            }
    }
    if(random(0,100)<2){
        this.isGoingLeft=!this.isGoingLeft;
        
        this.isGoingRight=!this.isGoingRight;
    }
    
    
    
    this.x+=this.vx;
    this.y+=this.vy;
    if(this.addVel){
        
        this.x-=this.vx;
        this.addVel=false;
    }
    this.vy+=0.1;
    if(this.isOnGround){
        
        if(this.isJumping){
            this.vy=-1.7;
            if(random(0,10)<1){
                this.isJumping=false;
            }
        }
        
    }
    this.vx=0; 
    if(this.isGoingLeft){
        this.vx=-1;
    }
    
    if(this.isGoingRight){
        this.vx=1;
    }
    this.isOnGround=false;
    
};

entities=[];



//player
var Player=function(x,y){
    
    this.x=x;
    this.y=y;
    this.vx=0;
    this.vy=0;
    this.isOnGround=false;
    this.health = 20;
    this.addVel=false;
    this.energy = 100;
};
Player.prototype.draw = function() {
    if(delag || "USE HORRIBLE TEXTURE... yes it does suck..."){
        fill(196, 169, 96);
        rect(this.x-playerWidth+1,this.y-playerHeight,playerWidth-2,playerHeight-12);
        fill(97, 85, 40);
        rect(this.x-playerWidth+1,this.y-playerHeight,playerWidth-2,playerHeight-16);
        stroke(0, 0, 0);
        point(this.x-playerWidth+2,this.y-playerHeight+3);
        point(this.x-playerWidth+4,this.y-playerHeight+3);
        strokeWeight(0.5);
        line(this.x-playerWidth+3,this.y-playerHeight+5,this.x-playerWidth+4,this.y-playerHeight+5);
        fill(35, 99, 49);
        noStroke();
        rect(this.x-playerWidth+1,this.y-playerHeight+7,playerWidth-2,playerHeight-13);
        fill(0, 2, 130);
        rect(this.x-playerWidth+1,this.y-playerHeight+12,playerWidth-2,playerHeight-12);
        fill(0, 34, 156);
        rect(this.x-playerWidth+1,this.y-playerHeight+12,playerWidth-4.5,playerHeight-12);
        fill(176, 126, 57);
        rect(this.x-playerWidth+2,this.y-playerHeight+6,playerWidth-4,playerHeight-17);
        fill(8, 150, 27);
        rect(this.x-playerWidth+6,this.y-playerHeight+7,playerWidth-6,playerHeight-12);
        rect(this.x-playerWidth,this.y-playerHeight+7,playerWidth-6,playerHeight-12);
    }else{
        var pixels=[
            
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(63,5,255,255),color(52,53,165,255),color(0,0,255,255),color(0,0,234,255),color(53,29,255,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(39,13,5,255),color(7,3,2,255),color(129,100,15,255),color(155,93,15,255),color(255,0,0,0),color(233,192,55,255),color(255,90,255,255),color(255,0,166,255),color(255,48,255,255),color(255,74,255,255),color(255,255,0,255),color(177,0,0,255),color(255,41,18,255),color(220,0,2,255),color(184,88,0,255),color(206,0,0,255),color(255,0,0,255),],
[color(255,0,0,0),color(255,0,0,0),color(39,21,7,255),color(39,27,6,255),color(129,97,15,255),color(129,79,23,255),color(21,17,8,255),color(155,111,35,255),color(255,0,160,255),color(242,255,82,255),color(181,219,0,255),color(255,96,255,255),color(151,255,58,255),color(255,255,0,255),color(226,11,0,255),color(255,1,0,255),color(255,96,0,255),color(255,0,0,255),color(185,0,0,255),color(255,97,15,255),],
[color(255,0,0,0),color(255,0,0,0),color(39,26,9,255),color(39,21,6,255),color(129,98,17,255),color(129,82,21,255),color(21,9,4,255),color(155,92,21,255),color(255,20,157,255),color(230,173,2,255),color(173,169,0,255),color(255,0,255,255),color(255,212,0,255),color(211,255,0,255),color(0,0,136,255),color(0,0,112,255),color(0,18,134,255),color(0,0,85,255),color(0,36,111,255),color(0,0,116,255),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(39,21,6,255),color(7,3,3,255),color(129,87,26,255),color(129,82,25,255),color(255,0,0,0),color(236,177,0,255),color(255,0,255,255),color(255,0,255,255),color(255,37,255,255),color(255,40,156,255),color(160,255,0,255),color(0,36,133,255),color(21,0,74,255),color(0,0,118,255),color(0,25,78,255),color(0,0,143,255),color(0,16,122,255),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(0,84,189,255),color(19,0,255,255),color(43,86,165,255),color(0,44,167,255),color(0,93,255,255),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
[color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),color(255,0,0,0),],
            
            
        ];
        
        for(var i=0;i<pixels.length;i++){
            for(var j=0;j<pixels.length;j++){
                noStroke();
                fill(red(pixels[i][j])*shade,green(pixels[i][j])*shade,blue(pixels[i][j])*shade,alpha(pixels[i][j]));
                var pixSize=21/pixels.length;
                rect(this.x+i*(pixSize)-13,this.y+j*pixSize-playerWidth*2-7,pixSize,pixSize);
            }
        }
    }
    //HP && ENERGY:
    
    fill(0, 0, 0);
    rect(this.x-95-1,this.y+80-1,20*4.5,10);
    rect(this.x+5-1,this.y+80-1,20*4.5,10);
    fill(255, 0, 0);
    rect(this.x-95,this.y+80,this.health*4.5,10);
    fill(255, 255, 0);
    rect(this.x+5,this.y+80,this.energy/1.1,10);
};
Player.prototype.update = function(){
    this.x+=this.vx;
    this.y+=this.vy;
    if(this.energy>90&&this.health<20){
        this.health+=0.01;
    }
    if(this.energy>100){
        this.energy=100;
    }
    if(this.health>20){
        this.health=20;
    }
    if(this.addVel){
        this.x-=this.vx;
        this.addVel=false;
    }
    this.vy+=0.1;
    if(this.isOnGround){
        if(keys[38]||keys[87]){
            this.vy=-1.7;
            this.energy-=0.1;
        }
        
    }
    this.energy-=0.01;
    this.vx=0; 
    if(keys[37] || keys[65]){
        this.vx=-1;
        
        if(keys[16]){
            this.vx-=0.7;
            this.energy-=0.05;
        }
    }
    
    if(keys[39] || keys[68]){
        this.vx=1;
        if(keys[16]){
            this.vx+=0.7;
            this.energy-=0.05;
        }
    }
    this.isOnGround=false;
    
    if(this.health<10){
        fill(255, 0, 0,(10-this.health-this.energy/10)*10);
        rect(this.x-300,this.y-300,700,700);
    }
    if(this.energy<0){
        this.health-=3;
        this.energy+=5;
        if(this.health<0){
            kill("hunger","starved");
        }
    }
    
    
};

//Transparent means if you can move through it. 
function isBlockTransparent(block){
    //give each block a hardness. 
    switch(block){
        //glitch. when blocks have special hardnesses, like 3-4, or 0-1, when broken the game crashes
        case "wood_pickaxe":
            this.isTransparent=true;
        break;
        
        case "stone_pickaxe":
            this.isTransparent=true;
        break;
        case "iron_pickaxe":
            this.isTransparent=true;
        break;
        
        case "diamond_pickaxe":
            this.isTransparent=true;
        break;
        case "gold_pickaxe":
            this.isTransparent=true;
        break;
        case "iSapling":
            this.isTransparent=false;
        break;
        case "torch":
            
            this.isTransparent=true;
            break;
        case "dirt":
            
            this.isTransparent=false;
            
        break;
        case "rock":
            
            this.isTransparent=false;
            
        break;
        case "air":
            
            this.isTransparent=true;
            break;
        case "gold":
            
            this.isTransparent=false;
            
        break;
        case "bedrock":
            this.isTransparent=false;
        break;
        case "wood":
            
            this.isTransparent=true;
            
        break;
        case "leaf":
            
            this.isTransparent=true;
            
        break;
        case "sapling":
            
            this.isTransparent=true;
            
        break;
        case "gold_ore":
            
            this.isTransparent=false;
            
        break;
        case "diamond_ore":
            
            this.isTransparent=false;

            
        break;
        case "TNT":
            
            this.isTransparent=false;
        break;
        case "apple":
            
            
            this.isTransparent=true;
        break;
        case "iron_ore":
            
            this.isTransparent=false;
            
        break;
        
        case "coal_ore":
            
            this.isTransparent=false;
            
        break;
        case "iron":
            
            this.isTransparent=false;
            
        break;
        case "diamond":
            
            this.isTransparent=false;
            
        break;
        case "border":
            
            this.isTransparent=false;
        break;
        case "grass":
            
            this.isTransparent=false;
        break;
        case "plank":
            this.isTransparent=false;
        break;
    }
    return this.isTransparent;
}
function giveHardness(block){
    //give each block a hardness. 
    switch(block){
        //glitch. when blocks have special hardnesses, like 3-4, or 0-1, when broken the game crashes
        case "bedrock":
            this.hardness=Infinity;
        break;
        case "iSapling":
            this.hardness=Infinity;
        break;
        
        case "TNT":
            
            this.hardness=5;
        break;
        case "grass":
            this.hardness=10;
            break;
            
        case "torch":
            
            this.hardness=5;
        break;
        case "dirt":
            
            this.hardness=5;
            
        break;
        case "rock":
            
            this.hardness=50;
            
        break;
        case "air":
            this.hardness=Infinity;
            break;
        case "gold":
            
            this.hardness=60;
            
        break;
        case "wood":
            
            this.hardness=20;
            
        break;
        case "leaf":
            
            this.hardness=4;
            
        break;
        case "sapling":
            
            this.hardness=1;
            
        break;
        
        case "stone_pickaxe":
            
            this.hardness=10;
            break;
            
        case "stone_pickaxe":
            
            this.hardness=10;
            break;
        case "wood_pickaxe":
            
            this.hardness=10;
            break;
            
        case "diamond_pickaxe":
            this.hardness=10;
            break;
        case "iron_pickaxe":
            
            this.hardness=10;
            break;
        case "gold_pickaxe":
            
            this.hardness=10;
        break;
        case "plank":
            
            this.hardness=30;
        break;
        case "apple":
            this.hardness=Infinity;
        break;
        case "gold_ore":
            
            this.hardness=55;
            
        break;
        case "diamond_ore":
            
            this.hardness=60;
            
        break;
        case "iron_ore":
            
            this.hardness=50;
            
        break;
        
        case "coal_ore":
            
            this.hardness=50;
            
        break;
        case "iron":
            
            this.hardness=50;
            
        break;
        case "diamond":
            
            this.hardness=70;
            
        break;
        case "border":
            
            this.hardness=Infinity;
        break;
        
    }
    return this.hardness;
    
}


//create a player:
var player = new Player(spawnPoint.x,spawnPoint.y);

var hotbar=[];

var worldItems=[];
function drawItem(item,x,y){
    shade=1;
    fill(255, 0, 0);
    textSize(15);
    textAlign(CENTER, CENTER);
    
    pushMatrix();
    translate(x, y);
    scale(0.75);
    switch (item) {
        case "rotten_flesh":
            drawRottenFlesh(0,-10);
        break;
        case "raw_pork":
            drawRawPork(0,-10);
        break;
        case "TNT":
            drawTNT(0,-10);
        break;
        
        case "wood_pickaxe":
            
            drawWoodPickaxe(0,-10);
            break;
            
        case "stone_pickaxe":
            
            drawStonePickaxe(0,-10);
            break;
            
        case "diamond_pickaxe":
            
            drawDiamondPickaxe(0,-10);
            break;
        case "iron_pickaxe":
            
            drawIronPickaxe(0,-10);
            break;
        case "gold_pickaxe":
            
            drawGoldPickaxe(0,-10);
        break;
        case "plank":
            drawPlank(0,-10);
        break;
        case "apple":
            drawApple(0,-10);
        break;
        case "bedrock":
            drawBedrock(0, -10);
        break;
        case "dirt":
            drawDirt(0, -10);
            break;
            
        case "torch":
            drawTorch(0, -10);
            break;
        case "rock":
            drawRock(0, -10);
            break;
        case "grass":
            drawGrass(0, -10);
            break;
        case "sapling":
            drawSapling(0, -10);
            break;
        case "wood":
            drawWood(0, -10);
            break;
        case "leaf":
            drawLeaf(0, -10);
            break;
        case "gold":
            drawGold(0, -10);
            break;
        case "gold_ore":
            drawGoldOre(0, -10);
            break;
        case "diamond_ore":
            drawDiamondOre(0, -10);
            break;
        case "diamond":
            drawDiamond(0, -10);
            break;
        case "iron":
            drawIron(0, -10);
            break;
        case "iron_ore":
            drawIronOre(0, -10);
            break;
            
        case "coal_ore":
            drawCoalOre(0, -10);
            break;
        case "border":
            drawBorder(0, -10);
            break;
        case "iSapling":
            fill(0, 255, 187);
            rect(0,0,10,10);
            break;
        default:
    }
    
    popMatrix();

}







var Item=function(x,y,item,number){
    this.x=x+1.5;
    this.y=y;
    this.vx=0;
    this.vy=0;
    this.item=item;
    this.number=number || 1;
    this.durability=1;
    
};

Item.prototype.draw = function() {
    
    drawItem(this.item,this.x,this.y);
    
};

Item.prototype.update = function() {

    try{
        if(!isBlockTransparent(blocks[floor(this.x/blockSize)][floor(this.y/blockSize)].block)){
            if(this.vy>5){
                this.y-=this.vy/2;//noLoop();
            }
            this.vy=0;
            
            this.vx=0;
            if(isBlockTransparent(blocks[floor(this.x/blockSize)][floor(this.y-15/blockSize)].block)){
                this.y-=4;
                //this.vx=0;
            }
        }
        
        
    }catch(e){}
    this.y+=this.vy;
    this.x+=this.vx;
    this.vy++;
    if(dist(this.x+4, this.y+4,  player.x-playerWidth/2, player.y)<10&&hotbar.length<10){
        
        
        
        hotbar.push(new Item(this.x,this.y,this.item,1));
        worldItems.splice(worldItems.indexOf(this),1);
        
        
        
    }
};
var isTool;
function organize(){
    var hotbarBlocks=[];
    for(var i=0;i<hotbar.length;i++){
        
        hotbarBlocks.push(hotbar[i].item);
    }
    for(var i=0;i<hotbar.length;i++){
        if(hotbarBlocks.indexOf(hotbarBlocks[i])!==i && !isTool(hotbarBlocks[i])){
            
            try{
                hotbar[hotbarBlocks.indexOf(hotbarBlocks[i])].number+=hotbar[i].number;
                hotbar.splice(i,1);
            }catch(e){}
        }

        
    }
    for(var i=0;i<hotbar.length;i++){
        if(hotbar[i].number<=0){
            hotbar.splice(i,1);
        }
    }
}

var isTool=function(block){
    var tool=false;
    switch(block){
        case "wood_pickaxe":
            tool=true;
        break;
        case "iron_pickaxe":
            tool=true;
        break;
        case "stone_pickaxe":
            tool=true;
        break;
        case "gold_pickaxe":
            tool=true;
        break;
        case "diamond_pickaxe":
            tool=true;
        break;
    }
    return tool;
};
function drop(item,x,y){
    
    worldItems.push(new Item(x,y,item,1));
}

//Create a block class
var Block=function(block,i,j,data){
    this.block=block;
    this.strength=1;
    this.data=data;
    this.i=i;
    this.j=j;
    //give hardness:
    this.hardness=giveHardness(block);
    
    //scale 0-5. 0 -> black, 5 -> very bright.
    this.light=0;
    this.turnIndex= (j*5+i) % 5;
    this.isTool=isTool(this.block);
    

};
var whichItemToDrop=function(block){
    switch(block){
        case "leaf":
            if(random(0,100)>20){
                return "leaf";
            }return "apple";
            
            
        case "grass":
            return "dirt";
        default:
            return block;
    }
};
var miningSpeed=function(tool,block){
    switch(tool){
        case "wood_pickaxe":
            switch(block){
                case "rock":
                    return 6;
                default:
                    return 1;
            }
            return;
        case "iron_pickaxe":
            switch(block){
                case "rock":
                    return 16;
                default:
                    return 1.4;
            }
            return;
            
        case "diamond_pickaxe":
            switch(block){
                case "rock":
                    return 32;
                default:
                    return 2;
            }
            return;
        case "gold_pickaxe":
            switch(block){
                case "rock":
                    return 21;
                default:
                    return 1.6;
            }
            return;
        
        case "stone_pickaxe":
            switch(block){
                case "rock":
                    return 10;
                default:
                    return 1.2;
            }
        return;
        default:
            return 1;
    }
};





//Place a block
Block.prototype.place = function(block){
    
    this.block = block;
    this.data={};
    //hardness = strength/durability of block
    this.hardness=giveHardness(block);
    //strength=fraction of broken block.
    this.strength=1;
    this.isTool=isTool(block);
};
//Insta break block (even if strength is Infinity)
Block.prototype.break=function(shouldDrop){
    
    this.strength=1;
    if(shouldDrop){
        drop(whichItemToDrop(this.block),this.i*blockSize,this.j*blockSize);
    }
    this.block="air";
    this.data={};
    
    this.isTool=false;
};
//mine a block:
Block.prototype.mine=function(speed){
    try{
        this.strength-=speed/this.hardness;
    }catch(e){
        this.break();
    }
    
};
//draw a block
Block.prototype.draw = function() {
    //draw every single block:
    shade=this.light;
    stroke(255, 255, 255);
    strokeWeight(0.05);
    
    if(shade<0.05){
        fill(13, 13, 13);
        noStroke();
        rect(this.i*blockSize,this.j*blockSize,10,10);
    }else{

        fill(13,13,13,10/constrain(this.light-0.5,0,5));
        noStroke();
        rect(this.i*blockSize,this.j*blockSize,10,10);
        switch (this.block){
            
            
            case "apple":
                drawApple(this.i*blockSize,this.j*blockSize);
            break;
            
            case "wood_pickaxe":
                
                drawWoodPickaxe(this.i*blockSize,this.j*blockSize);
            break;
            
            case "stone_pickaxe":
                
                drawStonePickaxe(this.i*blockSize,this.j*blockSize);
            break;
            case "iron_pickaxe":
                
                drawIronPickaxe(this.i*blockSize,this.j*blockSize);
                break;
                
            case "diamond_pickaxe":
                
                drawDiamondPickaxe(this.i*blockSize,this.j*blockSize);
                break;
            case "gold_pickaxe":
                
                drawGoldPickaxe(this.i*blockSize,this.j*blockSize);
            break;
            case "plank":
                drawPlank(this.i*blockSize,this.j*blockSize);
            break;
            case "bedrock":
                drawBedrock(this.i*blockSize,this.j*blockSize);
            break;
            case "iSapling":
                fill(255, 0, 0);
                rect(this.i*blockSize,this.j*blockSize,blockSize,blockSize);
            break;
            case "dirt":
                drawDirt(this.i*blockSize,this.j*blockSize);
            break;
            case "torch":
                
                drawTorch(this.i*blockSize,this.j*blockSize);
                break;
            case "rock":
                drawRock(this.i*blockSize,this.j*blockSize);
            break;
            case "grass":
                drawGrass(this.i*blockSize,this.j*blockSize);
            break;
            case "TNT":
                if(this.red){
                    drawTNT(this.i*blockSize,this.j*blockSize);
                }else{
                    fill(255, 255, 255);
                    rect(this.i*blockSize,this.j*blockSize,10,10);
                }
            break;
            case "sapling":
                drawSapling(this.i*blockSize,this.j*blockSize);
            break;
            case "wood":
                
                drawWood(this.i*blockSize,this.j*blockSize);
            break;
            case "leaf":
                drawLeaf(this.i*blockSize,this.j*blockSize);
            break;
            case "gold":
                drawGold(this.i*blockSize,this.j*blockSize);
            break;
            case "gold_ore":
                drawGoldOre(this.i*blockSize,this.j*blockSize);
            break;
            case "diamond_ore":
                drawDiamondOre(this.i*blockSize,this.j*blockSize);
            break;
            
            case "coal_ore":
                drawCoalOre(this.i*blockSize,this.j*blockSize);
            break;
            case "iron_ore":
                drawIronOre(this.i*blockSize,this.j*blockSize);
            break;
            case "iron":
                drawIron(this.i*blockSize,this.j*blockSize);
            break;
            case "diamond":
                drawDiamond(this.i*blockSize,this.j*blockSize);
            break;
            case "border":
                drawBorder(this.i*blockSize,this.j*blockSize);
            break;
            case "rotten_flesh":
                drawRottenFlesh(this.i*blockSize,this.j*blockSize);
            break;
            
            case "raw_pork":
                drawRawPork(this.i*blockSize,this.j*blockSize);
            break;
            case "air":
        }
    }
    noStroke();
    
    //draws the cracks on the block if not air.
    if(this.block!=="air"){
        drawOverLay(this.i*blockSize,this.j*blockSize,this.strength);
    }
};
Block.prototype.update=function(){
    if(this.isTool){
        hotbar.push(new Item(0,0,this.block,1));
        this.break();
    }
    //this.light*=0.6;

    var output=0;
    
    var denominator=0;
    if((frameCount+this.turnIndex) % 5 === 0){
    for(var i=-1;i<=1;i++){
        for(var j=-1;j<=1;j++){
            if(!(i === 0 && j===0)){
                //println(i);
                try{
                    
                    
                    /*if(isBlockTransparent(blocks[this.i+i][this.j+j].block)){
                        //if(this.light<blocks[this.i+i][this.j+j].light-2){
                        output += blocks[this.i+i][this.j+j].light;
                        denominator++;
                        //}
                    }else{
                        //output+=0.1;  
                    }*/
                    if(isBlockTransparent(this.block)){
                        if(isBlockTransparent(blocks[this.i+i][this.j+j].block)){
                            output+=blocks[this.i+i][this.j+j].light;
                            denominator++;
                        }
                    }else{
                        if(isBlockTransparent(blocks[this.i+i][this.j+j].block)){
                            if(blocks[this.i+i][this.j+j].light>this.light){
                                output+=blocks[this.i+i][this.j+j].light;
                                
                                denominator+=1;
                            }
                            blocks[this.i+i][this.j+j].light*=0.99;
                        }
                    }
                        
                    
                }catch(e){
                    
                }
            }
        }
    }
    if(!isBlockTransparent(this.block)){
        this.light*=0.98;
    }
    //output /= 8;
    }
    //this.light=1;
    //this.light-=0.1;
    
    if(denominator !== 0){
        this.light=(output)/denominator;
    }
    if(this.j===0){
        this.light=constrain(sin(((time/24)*365)-270)*(255/2)+(255/2)+70,0,255)/255*1.8;
    }
    if(this.light>5){
        this.light=5;
    }
    /**if(dist(player.x-playerWidth/2,player.y-playerHeight/2,this.i*blockSize,this.j*blockSize)<30){
        this.light ++;
        this.light *=0.8;
    }
    **/
    //i){
    //    this.light=1.5;
    //}
    //println(block this.i][this.j].light);
    if(this.strength<1){
        this.strength+=0.05/this.hardness;
    }
    if(!isBlockTransparent(this.block)){
        
        var collision=rectRectCollision(player.x-playerWidth,player.y-playerHeight,playerWidth,playerHeight,this.i*blockSize,this.j*blockSize,blockSize,blockSize);
        
        if(collision.direction==="bottom"){
            player.isOnGround=true;
            if(collision.amount>0.1){
                if(20*(player.vx/10)/12>5){
                    player.health-=20*(player.vx/10)/12;
                    if(player.health<0){
                        kill("was touching "+this.block);
                    }
                }
                player.vy=-collision.amount/2;
                player.isOnGround=true;
                
            }
        
        }
        if(collision.direction==="top"){

            if(collision.amount>0.1){
                player.vy=+collision.amount/2;
                //player.isOnGround=;
            }
        
        }
        if(collision.direction==="left"){
            //i)
            
            if(collision.amount>0.1){
                if(keys[37] || keys[65]){
                    player.addVel=true;
                }
                if(keys[39] || keys[68]){
                    player.vx+=0.1;
                }
                player.vx=+collision.amount;
                if(collision.amount>1){
                    player.vx=0;
                }
                //player.x=this.i*blockSize+blockSize+playerWidth-0.7;
                //player.isOnGround=;
                
                
                //if(keys[39] || keys[68]){this.vx=1;}
            }
            //if(keys[37] || keys[69]){this.vx=0;}
        
        }
        if(collision.direction==="right"){

            if(collision.amount>0.1){
                if(keys[39] || keys[68]){
                    player.addVel=true;
                }
                if(keys[37] || keys[65]){
                    player.vx-=0.1;
                }
                player.vx=-collision.amount;
                
                if(collision.amount>1){
                    player.vx=0;
                    
                }
                //player.isOnGround=;
            }
        
        }
    }
    for(var i=0;i<entities.length;i++){
        if(!isBlockTransparent(this.block)){
            var collision=rectRectCollision(entities[i].x,entities[i].y,entities[i].w,entities[i].h,this.i*blockSize,this.j*blockSize,blockSize,blockSize);
            
            if(collision.direction==="bottom"){
                entities[i].isOnGround=true;
                if(collision.amount>0.1){
                    entities[i].vy=-collision.amount/2;
                    entities[i].isOnGround=true;
                    
                }
            
            }
            if(collision.direction==="top"){
    
                if(collision.amount>0.1){
                    entities[i].vy=+collision.amount/2;
                }
            
            }
            if(collision.direction==="left"){
                //i)
            
                if(collision.amount>0.1){
                    if(this.isGoingLeft){
                        entities[i].addVel=true;
                    }
                    
                    entities[i].vx=+collision.amount/2;
                    if(collision.amount>1){
                        entities[i].vx=0;
                    }
                    entities[i].isGoingLeft=false;
                    
                    entities[i].isGoingRight=true;
                    entities[i].isJumping=true;
                    //player.x=this.i*blocksize+blockSize+playerWidth-0.7;
                    //player.isOnGround=;
                    
                    
                    //if(keys[39] || keys[68]){this.vx=1;}
                }
                //if(keys[37] || keys[69]){this.vx=0;}
            
            }
            if(collision.direction==="right"){
                
                if(collision.amount>0.1){
                    if(this.isGoingRight){
                        entities[i].addVel=true;
                    }
                    entities[i].vx=-collision.amount/2;
                    
                    if(collision.amount>1){
                        entities[i].vx=0;
                        
                    }
                    
                    entities[i].isGoingRight=false;
                    
                    entities[i].isGoingLeft=true;
                    
                    entities[i].isJumping=true;
                    //player.isOnGround=;
                }
            
            }
        }
    }
    try{
        //if(rectRectCollision)
        switch (this.block){
            case "iSapling":
                if(this.i<worldWidth-3){
                    placeStructure("treeStage2",this.i,this.j);
                }
            break;
            case "dirt":
                //grow a sapling or grass if true.
                
                
                if(blocks[this.i][this.j-1].block==="air"&&blocks[this.i][this.j-2].block==="air"&&floor(random(0,200))===0&&this.j<15){
                    
                    if(floor(random(0,10))===0 && this.i>3){
                        try{
                            blocks[this.i][this.j-1].place("sapling");
                        }catch(e){
                            //out of bounds
                            this.break();
                            this.place("grass");
                        }
                    }else{
                        this.break();
                        this.place("grass");
                    }
                    
                }
                
                break;
            case "grass":
                
            break;
            case "air":
                if(random(0,50000)<1 && entities.length  < 30){
                    if(this.light<1){
                        entities.push(new Entity(this.i*blockSize,this.j*blockSize-10,"zombie"));
                    }else{
                        entities.push(new Entity(this.i*blockSize,this.j*blockSize-10,"pig"));
                    }
                }
                break;
            case "rock":break;
            case "wood":
                if(this.data.stage===1 && this.data.isBottom){
                    //place tree stage2
                    if(random(0,200)<1){
                        this.break();
                        placeStructure("treeStage2",this.i,this.j);
                    }
                }
            break;
            case "leaf":break;
            case "torch":
                this.light=2.5;
                break;
            case "sapling":
                try{
                    
                    //give the sapling a life. i mean time from birth because saplings do not have a life (:<
                    if(!this.data.life){
                        
                        this.data.life=1;
                        
                    }else{
                        
                        this.data.life+=1;
                        
                    }
                    
                    if(blocks[this.i][this.j+1].block==="dirt"){
                        
                        if(blocks[this.i][this.j-1].block==="air"){
                            //tree is on a flat surface.
                            //so grow straight up.
                            if(random(0,100)<1){
                                placeStructure("treeStage1",this.i,this.j);
                                this.data.isBottom=true;
                                this.data.stage=1;
                            }
                            
                        }
                        
                    }else if(blocks[this.i][this.j+1].block==="grass"&&random(0,100)){
                        
                        blocks[this.i][this.j+1].block="dirt";
                        
                    }
                        
                }catch(e){
                    //kill tree
                    this.break();
                    
                }
            break;
            
            case "gold_ore":
                
            break;
            
            case "diamond_ore":
                
            break;
            
            case "iron_ore":
                
            break;
            
            
            case "coal_ore":
                
            break;
            case "diamond":
                
            break;
            
            case "iron":
                
            break;
            
            case "border":
                
            break;
            
            case "bedrock":
                
            break;
            case "plank":
            break;
            case "TNT":
                if(!this.life){
                    this.life=0;
                    
                    this.explosionStrength=20;
                }this.life++;
                if(this.life*this.life*this.life%5===0){
                    this.red=!this.red;
                }
                
                try{
                    if(this.life>50){
                        if(300/dist(player.x,player.y,this.i*10,this.j*10)>5){
                            player.health-=300/dist(player.x,player.y,this.i*10,this.j*10);
                            var angleToPlayer=atan2(player.y-this.j*10,player.x-this.i*10);
                            player.vx=(cos(angleToPlayer)*100)/dist(player.x,player.y,this.i*10,this.j*10);
                            
                            
                            player.vy=(sin(angleToPlayer)*100)/dist(player.x,player.y,this.i*10,this.j*10)-1;
                        }
                        for(var i=0;i<entities.length;i++){
                            if(300/dist(entities[i].x,entities[i].y,this.i*10,this.j*10)>5){
                                entities[i].health-=300/dist(entities[i].x,entities[i].y,this.i*10,this.j*10);
                                var angleToEntity=atan2(entities[i].y-this.j*10,entities[i].x-this.i*10);
                                entities[i].vx=(cos(angleToEntity)*100)/dist(entities[i].x,entities[i].y,this.i*10,this.j*10);
                                
                                
                                entities[i].vy=(sin(angleToEntity)*100)/dist(entities[i].x,entities[i].y,this.i*10,this.j*10)-1;
                            }
                            
                        }
                        if(player.health<0){
                            
                            //background(255, 0, 0);
                            resetMatrix();
                            draw= function() {
                                kill("was expodernated");
                            };
                            //noLoop();
                        }
                        for(var i=-this.explosionStrength; i<this.explosionStrength;i++){
                            for(var j=-this.explosionStrength; j<this.explosionStrength;j++){
                                try{
                                    if(i!==0 || j!==0){
                                        if(dist(0,0,i,j)<this.explosionStrength){
                                            try{
                                                if(blocks[i+this.i][j+this.j].block !== "TNT"){
                                                    blocks[i+this.i][j+this.j].mine((10*this.explosionStrength)/(dist(0,0,i*i*i,j*j*j)));
                                                }else{
                                                    
                                                    blocks[i+this.i][j+this.j].life=50;
                                                    blocks[i+this.i][j+this.j].explosionStrength=20;
                                                }
                                                //(dist(0,0,i*i,j*j));
                                            }catch(e){}
                                        }
                                    }
                                }catch(e){}
                            }
                        }
                        if(this.life>51){
                            
                            this.life=undefined;
                            this.break();
                            
                            
                            for(var i=0;i<worldItems.length;i++){
                                
                                var angleToItem=atan2(worldItems[i].y-this.j*10,worldItems[i].x-this.i*10);
                                worldItems[i].vx=(cos(angleToItem)*1000)/dist(player.x,player.y,this.i*10,this.j*10);
                                
                                
                                worldItems[i].vy=(sin(angleToItem)*1000)/dist(player.x,player.y,this.i*10,this.j*10)-1;
                            }
                        }
                    }
                }catch(e){}
            break;
            case "apple":
                if(!this.life){
                    this.life=0;
                }this.life++;
                player.vx *=0.1;
                if(this.life>25){
                    
                    player.energy+=20;
                    this.break();
                }
            break;
            case "raw_pork":
                if(!this.life){
                    this.life=0;
                }this.life++;
                player.vx *=0.1;
                if(this.life>25){
                    player.energy+=25;
                    this.break();
                }
            break;
            case "rotten_flesh":
                if(!this.life){
                    this.life=0;
                }this.life++;
                player.vx *=0.1;
                if(this.life>25){
                    player.energy-=15;
                    player.health+=5;
                    this.break();
                }
            break;

        }
    }catch(e){}
    
    //check if block is broken:
    if(this.strength<=0){
        //break means insta mine
        this.break(true);
        
    }
};



function drawAllBlocksForMenu(){
    
    //create the world blocks:
    for(var i=0;i<36;i++){
        
        for(var j=0;j<30;j++){
            
            if(j>dirtHeight+terrain.get(i)+cos(i*245)){
                
                drawRock(i*blockSize,j*blockSize);
                
            }
            else if(j>depthOfBlocks+terrain.get(i)+1){
                
                drawDirt(i*blockSize,j*blockSize);
                
            }
            else if(j>depthOfBlocks+terrain.get(i)){
                
                drawGrass(i*blockSize,j*blockSize);
                
            }
            
        }
    }
}



//scenes
var menu = function(){
    time=1;
    
    drawBackground(0, 200, 255);
    
    scale(2);
    drawAllBlocksForMenu();
    scale(1/2);
    time=18;
    //sayings
    
    
    
    fill(255, 242, 0);
    pushMatrix();
    rotate(10);
    textAlign(CENTER,CENTER);
    textSize(cos(frameCount*6)*4+10);
    text(sayings.stuff[chooseText],300,80);
    popMatrix();
    //options
    fill(166, 166, 166);
    button(100,150,200,50,1);
    //button(100,200,200,50,2);
    fill(100);
    rect(100,200,200,50,10);
    fill(0, 0, 0);
    textSize(20);
    textAlign(LEFT,TOP);
    text("Single Player",140,165);
    
    text("Multiplayer",150,210);
    
    //background
    fill(4, 255, 0);
    //title
    fill(255, 0, 0);
    
    textSize(50);
    tex("World Of Blocks",15,50);
    //about
    fill(184, 184, 184);
    button(350,350,50,50,3);
    fill(0, 0, 0);
    tex("?",360,345);
    
    
    
};
//create the world blocks:
for(var i=0;i<worldWidth;i++){
    blocks.push([]);
    
    for(var j=0;j<worldHeight;j++){
        
        if(j>dirtHeight+terrain.get(i)+random(0,4)){
            
            blocks[i].push(new Block("rock",i,j,{}));
            
            if(floor(random(0,goldRareness))===0&&j<goldMaxHeight&&j>goldMinHeight){
                
                blocks[i][j].block="gold_ore";
                
            }if(floor(random(0,diamondRareness))===0&&j<diamondMaxHeight&&j>diamondMinHeight){
                
                blocks[i][j].block="diamond_ore";
                
            }if(floor(random(0,ironRareness))===0&&j<ironMaxHeight&&j>ironMinHeight){
                
                blocks[i][j].block="iron_ore";
            }if(floor(random(0,coalRareness))===0&&j<coalMaxHeight&&j>coalMinHeight){
                
                blocks[i][j].block="coal_ore";
            }
            
        }
        else if(j>depthOfBlocks+terrain.get(i)){
            
            blocks[i].push(new Block("dirt",i,j,{}));
            
        }else{
            
            blocks[i].push(new Block("air",i,j,{}));
            
        }
        if(j===worldHeight){
            
            blocks[i][j].break();
            blocks[i][j].place("bedrock");
            
        }
    }
}

//With terrain, extend the world by one block.
function appendTerrainToBlocks(){
    
    blocks.push([]);
    
    for(var j=0;j<worldHeight;j++){
        
        if(j>dirtHeight+terrain.get(worldWidth)+random(0,4)){
            
            blocks[worldWidth].push(new Block("rock",worldWidth,j,{}));
            
            
            if(floor(random(0,goldRareness))===0&&j<goldMaxHeight&&j>goldMinHeight){
                
                blocks[worldWidth][j].block="gold_ore";
                
            }
            if(floor(random(0,diamondRareness))===0&&j<diamondMaxHeight&&j>diamondMinHeight){
                
                blocks[worldWidth][j].block="diamond_ore";
                
            }
            if(floor(random(0,ironRareness))===0&&j<ironMaxHeight&&j>ironMinHeight){
                
                blocks[worldWidth][j].block="iron_ore";
            }
        }
        else if(j>depthOfBlocks+terrain.get(worldWidth)){
            
            blocks[worldWidth].push(new Block("dirt",worldWidth,j,{}));
            
        }else{
            
            blocks[worldWidth].push(new Block("air",worldWidth,j,{}));
        }
    }
    for(var j=0;j<worldHeight;j++){
        try{
            if(blocks[worldWidth][j].block === "dirt"&&blocks[worldWidth][j-1].block === "air"&&random(0,10)<1){
                
                blocks[worldWidth][j-1].block = "iSapling";
                
            }else if(blocks[worldWidth][j].block === "dirt"&&blocks[worldWidth][j-1].block === "air"){
                
                blocks[worldWidth][j].block = "grass";
            }
        }catch(e){}
        
    }

    worldWidth++;
    if(random(0,100)<10){
        try{
            placeStructure("cave",worldWidth-10,random(15,worldHeight));
        }catch(e){}
    }
}



//selected in hotbar:
var mouseIndexX=floor(mouseX/blockSize);
var mouseIndexY=floor(mouseY/blockSize);

function checkForMiningAndPlacing(){
    //mine and place
    try{
        rect(mouseIndexX*blockSize,mouseIndexY*blockSize,blockSize,blockSize);
        
        if(mouseIsPressed&&mouseButton===LEFT&&blocks[mouseIndexX][mouseIndexY].block!=="air"){
            //println(miningSpeed(hotbar[i].item,1));
            try{
                blocks[mouseIndexX][mouseIndexY].mine(miningSpeed(hotbar[selected].item,blocks[mouseIndexX][mouseIndexY].block));
                if(isTool(hotbar[selected].block)){
                    hotbar[selected].durability-=0.5/miningSpeed(hotbar[selected].item,blocks[mouseIndexX][mouseIndexY].block);
                }
            if(hotbar[selected].durability<=0){
                hotbar.splice(selected,1);
            }
            }catch(e){
            blocks[mouseIndexX][mouseIndexY].mine(1);
            }
            
            
        }
        if((mouseIsPressed&&mouseButton===RIGHT)&&blocks[mouseIndexX][mouseIndexY].block==="air"){
            
            if(ticks>500){
                blocks[mouseIndexX][mouseIndexY].place(hotbar[selected].item);
            }
            if(hotbar[selected].number===1){
                
                hotbar.splice(selected,1);
                
            }else{
                
                hotbar[selected].number--;
                
            }
            //selectedInhotbar++;
            
        }
    }catch(e){
        //out of bounds
    }
}

for(var i=0;i<10;i++){
    inventory.push([]);
    
    for(var j=0;j<3;j++){ 
        
        inventory[i][j]=new Item(null,null,"air",i*10+j);
        
    }
    
    
}
function moveToInventory(hotbarIndex) {
    
    for (var i = 0; i < 10; i++) {
        
        for (var j = 0; j < 3; j++) {
            
            if (inventory[i][j].item === 'air') {
                
                inventory[i][j].item = hotbar[hotbarIndex].item;
                
                inventory[i][j].number = hotbar[hotbarIndex].number;
                
                hotbar[hotbarIndex].item = "air";  // Clear the hotbar slot
                
                hotbar[hotbarIndex].number=0;
                
                return;
            }
        }
    }
    return;
}

function drawhotbar(){
    
    for(var i=0;i<10;i++){
        
        rect(i*(width/10)+22.5-10,350-10+2.5-10,15,15);
        if(hotbar[i]!==undefined){
            if(hotbar[i].item==="air"){
                hotbar.splice(i,1);
            }else{
                try{
                    if(selected===i){
                        fill(135, 0, 0);
                    }else{
                      fill(0, 0, 0);
                    }
                    
                    
                    
                    textSize(15);
                    pushMatrix();
                    rect(i*(width/10)+30-10+2.5-10,350-10+2.5-10,15,15);
                    drawItem(hotbar[i].item,i*(width/10)+26-10,350+4-10);
                    fill(255, 255, 255);
                    ellipse(i*(width/10)+30+10-10,350,10,10);
                    fill(0, 0, 0);
                    textSize(10);
                    text(hotbar[i].number,i*(width/10)+40-10,350);
                    popMatrix();
                    
                    
                    
                    if(dist(mouseX,mouseY,i*(width/10)+20,340)<10&&mouseIsPressed){
                        
                        moveToInventory(i);
                        
                    }
                }catch(e){}
            }
        }
        
    }
    
}



var MIX;
var MIY;
var zoom;


function drawInventory(){

    for(var i=0;i<10;i++){
        
        for(var j=0;j<3;j++){ 
            
            fill(255, 255, 255);
            stroke(0, 0, 0);
            try{
                rect(i*20+player.x-100,j*20+player.y-50,19,20);
                drawItem(inventory[i][j].item,i*20+player.x-100+5,j*20+player.y-40);
                if(inventory[i][j].item !== "air"){
                    
                    textSize(5);
                    fill(0, 0, 0);
                    text(inventory[i][j].number,i*20+player.x-100+15,j*20+player.y-40);
                    
                }
            }catch(e){}
            if(dist(i*20+player.x-100+9,j*20+player.y-40-4,mouseX/zoom+player.x-100,(mouseY)/zoom+player.y-100)<20&&mouseIsPressed){
                if(hotbar.length<9&&inventory[i][j].item !== "air"){
                    
                    hotbar.push(new Item(inventory[i][j].x,inventory[i][j].y,inventory[i][j].item,hotbar.length-1));
                    
                    hotbar[hotbar.length-1].number=inventory[i][j].number;
                    
                    
                    inventory[i][j].item="air";
                }
            }
        }
    }
    
}
//frameRate(1);
//initialize MIX & MIY

var zoom=2;
//main loop:wdwa
time=18;


//frameRate(4);
var prevE=keys[69];
var isInvyOpen=false;
time=10;

var isCrafting=false;
var craftingRecipies=[
    {//1
    
        in:[new Item(0,0,"leaf",10)],
        out:[new Item(0,0,"apple",1)]
        
    },
    
    {//2
        in:[new Item(0,0,"wood",1)],
        out:[new Item(0,0,"plank",4)]
        
    },
    
    {//3
        in:[new Item(0,0,"plank",4)],
        out:[new Item(0,0,"wood_pickaxe",1)]
        
    },
    
    
    {//4
        in:[new Item(0,0,"iron",3)],
        out:[new Item(0,0,"iron_pickaxe",1)]
        
    },
    {//5
        out:[new Item(0,0,"torch",4)],
        in:[new Item(0,0,"wood",1),new Item(0,0,"plank",1)]
        
    },
    
    {//6
        in:[new Item(0,0,"iron_ore",1)],
        out:[new Item(0,0,"iron",1)]
        
    },
    
    {//7
        in:[new Item(0,0,"rock",4)],
        out:[new Item(0,0,"stone_pickaxe",1)]
        
    },
    {//8
        in:[new Item(0,0,"iron",4)],
        out:[new Item(0,0,"iron_pickaxe",1)]
        
    },
    {//9
        in:[new Item(0,0,"gold_ore",1)],
        out:[new Item(0,0,"gold",1)]
    },
    {//10
        in:[new Item(0,0,"gold",3)],
        out:[new Item(0,0,"gold_pickaxe",1)]
    },
    {//11
        
        in:[new Item(0,0,"diamond",3)],
        out:[new Item(0,0,"diamond_pickaxe",1)]
    },
    {//12
        
        in:[new Item(0,0,"diamond_ore",1)],
        out:[new Item(0,0,"diamond",1)]
    },
    
    {//13
        
        in:[new Item(0,0,"coal_ore",4)],
        out:[new Item(0,0,"TNT",1)]
    }
    
];
function doesHotbarContainItem(item_){
    
    for(var i=0;i<hotbar.length;i++){
        if(hotbar[i].item === item_.item){
            if(hotbar[i].number>=item_.number){
                return true;
            }else{
                return false;
            }
            
        }
    }
    
    return false;
    
}


function removeItem(item_){
    for(var i=0;i<hotbar.length;i++){
        if(hotbar[i].item === item_.item){
            hotbar[i].number-=item_.number;
            return;
        }
        
        
    }//noLoop();
    // resetMatrix();
    // background(255, 0, 0);
    // println("CANNOT REMOVE ITEM FROM HOTBAR. PLS CHECK CODE, BAD DEV. (if your not a dev, sorry)");
    
    
    
}




var recipieSelected=0;
var prevP=keys[80];
function craft(){
    
    var newHotbar=hotbar;
    
    //scale(zoom);
    fill(255, 255, 255);
    
    var possibleRecipies=[];
    
    for(var i=0;i<craftingRecipies.length;i++){
        
        var isCraftable=true;
        
        for(var j=0;j<craftingRecipies[i].in.length;j++){
            
            if(!doesHotbarContainItem(craftingRecipies[i].in[j])){
                
                isCraftable=false;
                
            }
            
        }
        if(isCraftable){
            
            possibleRecipies.push(i);
            
        }
        
    }
    
    resetMatrix();
    rect(30,30,340,300);
    fill(0, 0, 0);
    textSize(20);
    textAlign(LEFT,TOP);
    if(recipieSelected>=possibleRecipies.length){
        recipieSelected=0;
    }
    var txt="";
    try{
        
    for(var i=0;i<craftingRecipies[possibleRecipies[recipieSelected]].out.length;i++){
        txt+="\n";//"("+craftingRecipies[possibleRecipies[recipieSelected]].out[i].number+") "+craftingRecipies[possibleRecipies[recipieSelected]].out[i].item+"\n";
        scale(3);
        drawItem(craftingRecipies[possibleRecipies[recipieSelected]].out[i].item,15+i*15,47);
        scale(0.3333);
        fill(0, 0, 0);
        text(craftingRecipies[possibleRecipies[recipieSelected]].out[i].number,72+i*45,48*3);
    }txt+="for:\n";
    for(var i=0;i<craftingRecipies[possibleRecipies[recipieSelected]].in.length;i++){
        //txt+="("+craftingRecipies[possibleRecipies[recipieSelected]].in[i].number+") "+craftingRecipies[possibleRecipies[recipieSelected]].in[i].item+"\n";
        scale(3);
        drawItem(craftingRecipies[possibleRecipies[recipieSelected]].in[i].item,15+15*i,70);
        scale(0.3333);
        
        fill(0, 0, 0);
        text(craftingRecipies[possibleRecipies[recipieSelected]].in[i].number,72+i*45,72*3);
    }
    
    }catch(e){}
    fill(0, 0, 0);
    textSize(20);
    textAlign(TOP,LEFT);
    text("(Press Space To Craft,  [ and ] to find recipies)\nGet: \n"+txt+"\n\n",40,40,300,260);
    if(keys[32]&&(!prevP)){
        
        for(var i=0;i<craftingRecipies[possibleRecipies[recipieSelected]].in.length;i++){
            removeItem(new Item(0,0,craftingRecipies[possibleRecipies[recipieSelected]].in[i].item,craftingRecipies[possibleRecipies[recipieSelected]].in[i].number));
            
        }
        
        
            
        for(var i=0;i<craftingRecipies[possibleRecipies[recipieSelected]].out.length;i++){
           hotbar.push(new Item(0,0,craftingRecipies[possibleRecipies[recipieSelected]].out[i].item,craftingRecipies[possibleRecipies[recipieSelected]].out[i].number));
        }
        
        
    }prevP=keys[32];
    
}


var prevC=keys[67];
var prevSqBrktR=keys[221];
var prevSqBrktL=keys[219];

var pMousePressed=false;
//frameRate(1);
function play(){
    //println()
    //println(" "+keys[67]+" "+prevC);
    //time++;
    time = time % 24;
    ticks++;
    
    selecting();
    if(keys[221]&&(!prevSqBrktR)){
        recipieSelected++;
    }
    if(keys[219]&&(!prevSqBrktL)){
        
        recipieSelected--;
    }
    
    prevSqBrktR=keys[221];
    prevSqBrktL=keys[219];
    if(recipieSelected<0){
        recipieSelected=0;
    }
    if(keys[69]&&(!prevE)){
        isInvyOpen=!isInvyOpen;
    }
    prevE=keys[69];
    //playerWidth=cos(ticks/100)*20+20;
    time+=0.003;
    organize();
    
    if(selected>hotbar.length){
        selected=hotbar.length;
    }
    
    if(selected < 0){
        selected=0;
    }
    pushMatrix();
    //move the world
    scale(zoom);
    
    translate(-player.x+(200/zoom),-player.y+(200/zoom));
    
    //get mouses index on the blocks
    
    mouseIndexX=floor(((mouseX-200)/zoom+player.x)/blockSize);
    mouseIndexY=floor(((mouseY-200)/zoom+player.y)/blockSize);
    if(ticks>500){
        checkForMiningAndPlacing();
    }
    
    drawBackground(player.x,player.y);
    //line(0,0,100,0);
    if(!onlyUpdateVisibleBlocks){
        
        for(var i=0;i<worldWidth;i++){
            
            for(var j=0;j<worldHeight;j++){
                
                fill(255, 0, 0);
                blocks[i][j].update();
                
            }
            
        }
        //draw all blocks next to player.
        for(var i=constrain(floor((player.x-400/zoom)/blockSize),0,Infinity);i<floor((player.x+400/zoom)/blockSize);i++){
            
            for(var j=0;j<worldHeight;j++){
                
                fill(0, 0, 0);
                
                translate(-(-player.x),-(-player.y));
                scale(1/1.03);
                translate((-player.x),(-player.y));
                //blocks[i][j].draw();
                if(!isBlockTransparent(blocks[i][j].block)){
                    stroke(0);
                    rect(i*blockSize-0.5,j*blockSize-0.5,11,11);
                }else{
                    blocks[i][j].draw();
                }
                
                
                translate(-(-player.x),-(-player.y));
                scale(1.03);
                translate((-player.x),(-player.y));
                
                
                
            }
            
        }
        for(var i=constrain(floor((player.x-400/zoom)/blockSize),0,Infinity);i<floor((player.x+400/zoom)/blockSize);i++){
            
            for(var j=0;j<worldHeight;j++){
                
                fill(255, 0, 0);
                //scale(1.01);
                //translate(-player.x,-player.y);
                
                if(!isBlockTransparent(blocks[i][j].block)){
                    blocks[i][j].draw();
                }
                
                
                
            }
            
        }
    }
    else{
        
        //draw and update all blocks next to player:
        
        for(var i=constrain(floor((player.x-400/zoom)/blockSize),0,Infinity);i<floor((player.x+400/zoom)/blockSize);i++){
            
            for(var j=0;j<worldHeight;j++){
                
                fill(0, 0, 0);
                
                translate(-(-player.x),-(-player.y));
                scale(1/1.03);
                translate((-player.x),(-player.y));
                blocks[i][j].update();
                //blocks[i][j].draw();
                if(!isBlockTransparent(blocks[i][j].block)){
                    stroke(0);
                    
                    rect(i*blockSize-0.5,j*blockSize-0.5,11,11);
                    
                }else{
                    blocks[i][j].draw();
                }
                
                translate(-(-player.x),-(-player.y));
                
                scale(1.03);
                
                translate((-player.x),(-player.y));
                
                
            }
            
        }
        for(var i=constrain(floor((player.x-400/zoom)/blockSize),0,Infinity);i<floor((player.x+400/zoom)/blockSize);i++){
            
            for(var j=0;j<worldHeight;j++){
                fill(255, 0, 0);
                try{
                if(!isBlockTransparent(blocks[i][j].block)){
                    
                    blocks[i][j].draw();
                    
                }
                }catch(e){}
                
                
            }
            
        }
        
    }
    //loop through all items
    for(var i=0;i<worldItems.length;i++){
        
        worldItems[i].draw();
        worldItems[i].update();
        
    }
    player.draw();
    player.update();
    for(var i=0;i<entities.length;i++){
        entities[i].draw();
        entities[i].update();
    }
    //Add a border
    
    if(player.x<10){
        player.x++;
    }
    
    //Extend the terrain if player is coming close to end, so you get infinite gen.
    
    if(player.x+400>(worldWidth*blockSize)){
        terrain.cont();
        appendTerrainToBlocks();
    }
    
    
    
    if(isInvyOpen){
        drawInventory();
    }
    fill(0,0,0,0);
    stroke(0, 0, 0);
    
    try{
        
        rect(mouseIndexX*blockSize,mouseIndexY*blockSize,blockSize,blockSize);
        
    }
    catch(e){
        //do nothing
    }
    popMatrix();
    
    fill(0, 0, 0);
    drawhotbar();
    //loadAheadRand+=random(0,10);
    
    if(ticks<500&&scene===1){
        
        loadingScreen();
        
    }if(player.y>worldHeight*blockSize+100){
        
        
        kill("was never seen again...");
        
    }
    
    
    if(keys[67] && (!prevC)){
        isCrafting=!isCrafting;
    }
    
    if(isCrafting){
        craft();
    }
    prevC=keys[67];// && frameCount%2===0;
    
    
    pMousePressed=mouseIsPressed;
    
    
}



draw= function() {
    
    switch(scene){
        case 0:
            menu();
            Y = 0;
        break;
        case 2:
            
        break;
        case 1:
            try{
                play();
            }catch(e){
                try{
                    play();
                }catch(r){
                    
                    
                    try{
                        play();
                    }catch(t){
                        
                        try{
                            play();
                        }catch(y){
                            noLoop();
                            popMatrix();
                            fill(11, 88, 143,100);
                            rect(0,0,400,400);
                            text("SORRY THERE HAS BEEN AN ERROR\n"+y,200,200);
                        }
                    }
                }
            }
            //we do not look here
            //{
            //}
        break;
        case 3:
            about();
    }
};








/* 
End! 


Credits: Agni: 51%, Sisheng: 49%
That one percent is for the idea.
Rest: 0% for emotional support

*/


//CREDITING UNLICENCE - Agni Rammohan
/*

A license with no conditions which dedicates works to the public domain except giving credit. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code but must have credits to me. Credits must have my full name, and accesible
easily. If they are on Khan Academy, they may be put within the 1st 150 lines of code or last 150 lines.
Also, you must state what you used the code for and why.

If you do not follow these regulations, I WILL

NOT

ban

you and I won't care. I just hope I get credit.

*/













