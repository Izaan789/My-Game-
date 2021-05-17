var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;
var Zom1Health;
var Bullet;

function preload(){
  //Background-Objects
BgBarrel1Img = loadImage("Background/Objects/Barrel1.png")
BgBarrel2Img = loadImage("Background/Objects/Barrel2.png")
BgBoxImg = loadImage("Background/Objects/Box.png")
BgDoorLockedImg = loadImage("Background/Objects/DoorLocked.png")
BgDoorOpenImg = loadImage("Background/Objects/DoorOpen.png")
BgDoorUnlockedImg = loadImage("Background/Objects/DoorUnlocked.png")
SawAnim = loadAnimation("Background/Objects/Saw1.png","Background/Objects/Saw2.png","Background/Objects/Saw3.png","Background/Objects/Saw4.png")
BgSwitch1Img = loadImage("Background/Objects/Switch1.png")
BgSwitch2Img = loadImage("Background/Objects/Switch2.png")

BulletImg = loadImage("Robot/Objects/Bullet_000.png")

//Robot-Run
nRRunAnim = loadAnimation("Robot/Normal/Run/Run1.png","Robot/Normal/Run/Run2.png","Robot/Normal/Run/Run3.png","Robot/Normal/Run/Run4.png","Robot/Normal/Run/Run5.png","Robot/Normal/Run/Run6.png","Robot/Normal/Run/Run7.png","Robot/Normal/Run/Run8.png")
iRRunAnim = loadAnimation("Robot/Inverted/Run/Run1.png","Robot/Inverted/Run/Run2.png","Robot/Inverted/Run/Run3.png","Robot/Inverted/Run/Run4.png","Robot/Inverted/Run/Run5.png","Robot/Inverted/Run/Run6.png","Robot/Inverted/Run/Run7.png","Robot/Inverted//Run/Run8.png")
//Robot-Idle
nRIdleAnim = loadAnimation("Robot/Normal/Idle/Idle1.png","Robot/Normal/Idle/Idle2.png","Robot/Normal/Idle/Idle3.png","Robot/Normal/Idle/Idle4.png","Robot/Normal/Idle/Idle5.png","Robot/Normal/Idle/Idle6.png","Robot/Normal/Idle/Idle7.png","Robot/Normal/Idle/Idle8.png","Robot/Normal/Idle/Idle9.png","Robot/Normal/Idle/Idle10.png")
iRIdleAnim = loadAnimation("Robot/Inverted/Idle/Idle1.png","Robot/Inverted/Idle/Idle2.png","Robot/Inverted/Idle/Idle3.png","Robot/Inverted/Idle/Idle4.png","Robot/Inverted/Idle/Idle5.png","Robot/Inverted/Idle/Idle6.png","Robot/Inverted/Idle/Idle7.png","Robot/Inverted/Idle/Idle8.png","Robot/Inverted/Idle/Idle9.png","Robot/Inverted/Idle/Idle10.png")
//Robot-Jump
nRJumpAnim = loadAnimation("Robot/Normal/Jump/Jump1.png","Robot/Normal/Jump/Jump2.png","Robot/Normal/Jump/Jump3.png","Robot/Normal/Jump/Jump4.png","Robot/Normal/Jump/Jump5.png","Robot/Normal/Jump/Jump6.png","Robot/Normal/Jump/Jump7.png","Robot/Normal/Jump/Jump8.png","Robot/Normal/Jump/Jump9.png","Robot/Normal/Jump/Jump10.png")
iRJumpAnim = loadAnimation("Robot/Inverted/Jump/Jump1.png","Robot/Inverted/Jump/Jump2.png","Robot/Inverted/Jump/Jump3.png","Robot/Inverted/Jump/Jump4.png","Robot/Inverted/Jump/Jump5.png","Robot/Inverted/Jump/Jump6.png","Robot/Inverted/Jump/Jump7.png","Robot/Inverted/Jump/Jump8.png","Robot/Inverted/Jump/Jump9.png","Robot/Inverted/Jump/Jump10.png")
//Robot-Dead
nDeadImg = loadImage("Robot/Normal/Dead/Dead10.png")
iDeadImg = loadImage("Robot/Inverted/Dead/Dead10.png")
//Robot-Idle Shoot
nRIdleShootAnim = loadAnimation("Robot/Normal/Idle Shoot/Shoot1.png")
iRIdleShootAnim = loadAnimation("Robot/Inverted/Idle Shoot/Shoot1.png","Robot/Inverted/Idle Shoot/Shoot2.png","Robot/Inverted/Idle Shoot/Shoot3.png","Robot/Inverted/Idle Shoot/Shoot4.png")
//Robot-Jump Shoot
//Robot-Run Shoot
nRRunShoot = loadAnimation("Robot/Normal/Run Shoot/RunShoot1.png","Robot/Normal/Run Shoot/RunShoot2.png","Robot/Normal/Run Shoot/RunShoot3.png","Robot/Normal/Run Shoot/RunShoot4.png","Robot/Normal/Run Shoot/RunShoot5.png","Robot/Normal/Run Shoot/RunShoot6.png","Robot/Normal/Run Shoot/RunShoot7.png","Robot/Normal/Run Shoot/RunShoot8.png","Robot/Normal/Run Shoot/RunShoot9.png")
iRRunShoot = loadAnimation("Robot/Inverted/Run Shoot/RunShoot1.png","Robot/Inverted/Run Shoot/RunShoot2.png","Robot/Inverted/Run Shoot/RunShoot3.png","Robot/Inverted/Run Shoot/RunShoot4.png","Robot/Inverted/Run Shoot/RunShoot5.png","Robot/Inverted/Run Shoot/RunShoot6.png","Robot/Inverted/Run Shoot/RunShoot7.png","Robot/Inverted/Run Shoot/RunShoot8.png","Robot/Inverted/Run Shoot/RunShoot9.png")
//Robot-Slide
//Background-Tiles
Acid1Img = loadImage("Background/Tiles/Acid1.png")
Acid2Img = loadImage("Background/Tiles/Acid2.png")
BgTile1Img = loadImage("Background/Tiles/BgTile1.png")
BgTile2Img = loadImage("Background/Tiles/BgTile2.png")
BgTile3Img = loadImage("Background/Tiles/BgTile3.png")
BgTile4Img = loadImage("Background/Tiles/BgTile4.png")
BgTile5Img = loadImage("Background/Tiles/BgTile5.png")
BgTile6Img = loadImage("Background/Tiles/BgTile6.png")
BgTile7Img = loadImage("Background/Tiles/BgTile7.png")
Fence1Img = loadImage("Background/Tiles/Fence1.png")
Fence2Img = loadImage("Background/Tiles/Fence2.png")
Fence3Img = loadImage("Background/Tiles/Fence3.png")
SpikeImg = loadImage("Background/Tiles/Spike.png")
Tile1Img = loadImage("Background/Tiles/Tile1.png")
Tile2Img = loadImage("Background/Tiles/Tile2.png")
Tile3Img = loadImage("Background/Tiles/Tile3.png")
Tile4Img = loadImage("Background/Tiles/Tile4.png")
Tile5Img = loadImage("Background/Tiles/Tile5.png")
Tile6Img = loadImage("Background/Tiles/Tile6.png")
Tile7Img = loadImage("Background/Tiles/Tile7.png")
Tile8Img = loadImage("Background/Tiles/Tile8.png")
Tile9Img = loadImage("Background/Tiles/Tile9.png")
Tile10Img = loadImage("Background/Tiles/Tile10.png")
Tile11Img = loadImage("Background/Tiles/Tile11.png")
Tile12Img = loadImage("Background/Tiles/Tile12.png")
Tile13Img = loadImage("Background/Tiles/Tile13.png")
Tile14Img = loadImage("Background/Tiles/Tile14.png")
Tile15Img = loadImage("Background/Tiles/Tile15.png")


//Zombie-Idle
nZIdleAnim = loadAnimation("Zombies/Normal/male/Idle1.png","Zombies/Normal/male/Idle2.png","Zombies/Normal/male/Idle3.png","Zombies/Normal/male/Idle4.png","Zombies/Normal/male/Idle5.png","Zombies/Normal/male/Idle6.png","Zombies/Normal/male/Idle7.png","Zombies/Normal/male/Idle8.png","Zombies/Normal/male/Idle9.png","Zombies/Normal/male/Idle10.png","Zombies/Normal/male/Idle11.png","Zombies/Normal/male/Idle12.png","Zombies/Normal/male/Idle13.png","Zombies/Normal/male/Idle14.png","Zombies/Normal/male/Idle15.png")
iZIdleAnim = loadAnimation("Zombies/Inverted/male/Idle1.png","Zombies/Inverted/male/Idle2.png","Zombies/Inverted/male/Idle3.png","Zombies/Inverted/male/Idle4.png","Zombies/Inverted/male/Idle5.png","Zombies/Inverted/male/Idle6.png","Zombies/Inverted/male/Idle7.png","Zombies/Inverted/male/Idle8.png","Zombies/Inverted/male/Idle9.png","Zombies/Inverted/male/Idle10.png","Zombies/Inverted/male/Idle11.png","Zombies/Inverted/male/Idle12.png","Zombies/Inverted/male/Idle13.png","Zombies/Inverted/male/Idle14.png","Zombies/Inverted/male/Idle15.png")
//Zombie-Walk
nZWalkAnim = loadAnimation("Zombies/Normal/male/Walk1.png","Zombies/Normal/male/Walk2.png","Zombies/Normal/male/Walk3.png","Zombies/Normal/male/Walk4.png","Zombies/Normal/male/Walk5.png","Zombies/Normal/male/Walk6.png","Zombies/Normal/male/Walk7.png","Zombies/Normal/male/Walk8.png","Zombies/Normal/male/Walk9.png","Zombies/Normal/male/Walk10.png")
iZWalkAnim = loadAnimation("Zombies/Inverted/male/Walk1.png","Zombies/Inverted/male/Walk2.png","Zombies/Inverted/male/Walk3.png","Zombies/Inverted/male/Walk4.png","Zombies/Inverted/male/Walk5.png","Zombies/Inverted/male/Walk6.png","Zombies/Inverted/male/Walk7.png","Zombies/Inverted/male/Walk8.png","Zombies/Inverted/male/Walk9.png","Zombies/Inverted/male/Walk10.png")
//Zombie-Attack
nZAttackAnim = loadAnimation("Zombies/Normal/male/Attack1.png","Zombies/Normal/male/Attack2.png","Zombies/Normal/male/Attack3.png","Zombies/Normal/male/Attack4.png","Zombies/Normal/male/Attack5.png","Zombies/Normal/male/Attack6.png","Zombies/Normal/male/Attack7.png","Zombies/Normal/male/Attack8.png")
iZAttackAnim = loadAnimation("Zombies/Inverted/male/Attack1.png","Zombies/Inverted/male/Attack2.png","Zombies/Inverted/male/Attack3.png","Zombies/Inverted/male/Attack4.png","Zombies/Inverted/male/Attack5.png","Zombies/Inverted/male/Attack6.png","Zombies/Inverted/male/Attack7.png","Zombies/Inverted/male/Attack8.png")
//Zombie-Dead
nZDeadImg = loadImage("Zombies/Normal/male/Dead1.png")
iZDeadImg = loadImage("Zombies/Inverted/male/Dead1.png")
//GameGUI
GameOverImg = loadImage("Game Gui/GameOver.png")
LevelCompletedImg = loadImage("Game Gui/LevelComplete.png")
Next = loadImage("Game Gui/Next.png")
}

function setup() {
  createCanvas(1365,625);

  Zom1Health = 10

  for (var i = -2109; i < 4500; i=i+125){
  backgroundl1 = createSprite(i,65,20,20)
  backgroundl1.addImage("bk",BgTile3Img)
  backgroundl1.scale = 0.5

  backgroundl2 = createSprite(i,190,40,20)
  backgroundl2.addImage("bk",BgTile4Img)
  backgroundl2.scale = 0.5
  
  backgroundl3 = createSprite(i,315,60,20)
  backgroundl3.addImage("bk",BgTile3Img)
  backgroundl3.scale = 0.5

  backgroundl4 = createSprite(i,430,80,20)
  backgroundl4.addImage("bk",BgTile4Img)
  backgroundl4.scale = 0.5

  backgroundl5 = createSprite(i,555,80,20)
  backgroundl5.addImage("bk",BgTile3Img)
  backgroundl5.scale = 0.5

  backgroundl5 = createSprite(i,655,80,20)
  backgroundl5.addImage("bk",BgTile3Img)
  backgroundl5.scale = 0.5
  
  spike = createSprite(i,600,50,50)
  spike.addImage("Spk",SpikeImg)
  spike.scale = 0.5
}
  SPdoor = createSprite(200, 250, 50, 50)
  SPdoor.addImage("spawn",BgDoorOpenImg)
  SPdoor.scale = 0.4

  Door = createSprite(3750,250,20,20)
  Door.addImage("door",BgDoorUnlockedImg)
  Door.scale = 0.4

  tar1 = createSprite(870,400,260,5)
  tar1.visible = false
  tar2 = createSprite(1600,300,260,5)
  tar2.visible = false
  tar3 = createSprite(2300,250,260,5)
  tar3.visible = false
  tar4 = createSprite(3000,400,260,5)
  tar4.visible = false

  ZomGrp = new Group()
  Robo = createSprite(200, 300, 50, 50);
  Robo.addAnimation("hero",nRIdleAnim)
  Robo.scale = 0.2

  Zom1 = createSprite(1100, 400, 50, 50);
  Zom1.addAnimation("vill",nZIdleAnim)
  Zom1.scale = 0.2
  ZomGrp.add(Zom1)
  Zom2 = createSprite(1900,250, 50, 50);
  Zom2.addAnimation("vill",nZIdleAnim)
  Zom2.scale = 0.2
  ZomGrp.add(Zom2)

  Zom3 = createSprite(2500,250, 50, 50);
  Zom3.addAnimation("vill",nZIdleAnim)
  Zom3.scale = 0.2
  ZomGrp.add(Zom3)
  
  Zom4 = createSprite(3200,250, 50, 50);
  Zom4.addAnimation("vill",nZIdleAnim)
  Zom4.scale = 0.2
  ZomGrp.add(Zom4)

  temp1 = createSprite(500,400,5,100)
  temp1.visible = false
  temp2 = createSprite(500,400,5,100)
  temp2.visible = false
  temp3 = createSprite(500,400,5,100)
  temp3.visible = false
  temp4 = createSprite(500,400,5,100)
  temp4.visible = false
  temp5 = createSprite(500,400,5,100)
  temp5.visible = false

  tile1 = createSprite(0,400,20,20)
  tile1.addImage("1",Tile12Img)
  tile1.scale = 0.5
  tile3 = createSprite(50,400,20,20)
  tile3.addImage("1",Tile13Img)
  tile3.scale = 0.5
  tile5 = createSprite(150,400,20,20)
  tile5.addImage("1",Tile13Img)
  tile5.scale = 0.5
  tile7 = createSprite(250,400,20,20)
  tile7.addImage("1",Tile13Img)
  tile7.scale = 0.5
  tile9 = createSprite(350,400,20,20)
  tile9.addImage("1",Tile13Img)
  tile9.scale = 0.5

  tile11 = createSprite(800,500,20,20)
  tile11.addImage("1",Tile13Img)
  tile11.scale = 0.5
  tile13 = createSprite(900,500,20,20)
  tile13.addImage("1",Tile13Img)
  tile13.scale = 0.5
  tile15 = createSprite(1000,500,20,20)
  tile15.addImage("1",Tile13Img)
  tile15.scale = 0.5
  tile17 = createSprite(1100,500,20,20)
  tile17.addImage("1",Tile13Img)
  tile17.scale = 0.5
  tile19 = createSprite(1200,500,20,20)
  tile19.addImage("1",Tile14Img)
  tile19.scale = 0.5

  tile20 = createSprite(1500,400,20,20)
  tile20.addImage("1",Tile13Img)
  tile20.scale = 0.5
  tile21 = createSprite(1600,400,20,20)
  tile21.addImage("1",Tile13Img)
  tile21.scale = 0.5
  tile22 = createSprite(1700,400,20,20)
  tile22.addImage("1",Tile13Img)
  tile22.scale = 0.5
  tile23 = createSprite(1800,400,20,20)
  tile23.addImage("1",Tile13Img)
  tile23.scale = 0.5
  tile24 = createSprite(1900,400,20,20)
  tile24.addImage("1",Tile14Img)
  tile24.scale = 0.5

  tile25 = createSprite(2200,350,20,20)
  tile25.addImage("1",Tile13Img)
  tile25.scale = 0.5
  tile26 = createSprite(2300,350,20,20)
  tile26.addImage("1",Tile13Img)
  tile26.scale = 0.5
  tile27 = createSprite(2400,350,20,20)
  tile27.addImage("1",Tile13Img)
  tile27.scale = 0.5
  tile28 = createSprite(2500,350,20,20)
  tile28.addImage("1",Tile13Img)
  tile28.scale = 0.5
  tile29 = createSprite(2600,350,20,20)
  tile29.addImage("1",Tile14Img)
  tile29.scale = 0.5

  tile30 = createSprite(2900,500,20,20)
  tile30.addImage("1",Tile13Img)
  tile30.scale = 0.5
  tile31 = createSprite(3000,500,20,20)
  tile31.addImage("1",Tile13Img)
  tile31.scale = 0.5
  tile32 = createSprite(3100,500,20,20)
  tile32.addImage("1",Tile13Img)
  tile32.scale = 0.5
  tile33 = createSprite(3200,500,20,20)
  tile33.addImage("1",Tile13Img)
  tile33.scale = 0.5
  tile34 = createSprite(3300,500,20,20)
  tile34.addImage("1",Tile14Img)
  tile34.scale = 0.5

  tile35 = createSprite(3600,400,20,20)
  tile35.addImage("1",Tile13Img)
  tile35.scale = 0.5
  tile36 = createSprite(3700,400,20,20)
  tile36.addImage("1",Tile13Img)
  tile36.scale = 0.5
  tile37 = createSprite(3800,400,20,20)
  tile37.addImage("1",Tile13Img)
  tile37.scale = 0.5
  tile38 = createSprite(3900,400,20,20)
  tile38.addImage("1",Tile13Img)
  tile38.scale = 0.5
  tile39 = createSprite(4000,400,20,20)
  tile39.addImage("1",Tile14Img)
  tile39.scale = 0.5

  Dooropen = createSprite(3750,250,5,300)
  Dooropen.visible = false

  spikedie = createSprite(600,620,10000000000000,5)
  spikedie.visible = false
  spikecoll = createSprite(600,640,10000000000000,5)
  spikecoll.visible = false

  GameOver = createSprite(400,300)
  GameOver.addImage("over",GameOverImg)
  GameOver.visible = false
  GameOver.scale = 2

  levelCompleted = createSprite(400,300)
  levelCompleted.addImage("completed",LevelCompletedImg)
  levelCompleted.visible = false
  levelCompleted.scale = 2

  levelshow = createSprite(3800,100,5,300)
  levelshow.visible = false

  next = createSprite(3800,500,5,300)
  next.addImage("completed",Next)
  next.scale = 0.3
  next.visible = false

  BulletGrp = new Group();
}
function draw() {
  
  temp1.position.x = Zom1.position.x+40
  temp1.position.y = Zom1.position.y
  temp2.position.x = Zom2.position.x+40
  temp2.position.y = Zom2.position.y
  temp3.position.x = Zom3.position.x+40
  temp3.position.y = Zom3.position.y
  temp4.position.x = Zom4.position.x+40
  temp4.position.y = Zom4.position.y

 if (gameState === PLAY){
    
    if(Robo.isTouching(Dooropen)){
     Door.addAnimation("door",BgDoorOpenImg)
    }

  if(Robo.isTouching(tar1)){
    Zom1.velocityX = -4
    Zom1.addAnimation("vill",iZWalkAnim)
    tar1.destroy()
  }
  if(Robo.isTouching(tar2)){
    Zom2.velocityX = -4
    Zom2.addAnimation("vill",iZWalkAnim)
    tar2.destroy()
  }
  if(Robo.isTouching(tar3)){
    Zom3.velocityX = -4
    Zom3.addAnimation("vill",iZWalkAnim)
    tar3.destroy()
  }
  if(Robo.isTouching(tar4)){
    Zom4.velocityX = -4
    Zom4.addAnimation("vill",iZWalkAnim)
    tar4.destroy()
  }

  if(keyWentDown("D")){
    Robo.addAnimation("hero",nRRunAnim)
    Robo.velocityX = 8 
  }
  if(keyWentUp("D")){
    Robo.addAnimation("hero",nRIdleAnim)
    Robo.velocityX = 0
  }
  if(keyWentDown("A")){
    Robo.addAnimation("hero",iRRunAnim)
    Robo.velocityX = -8 
  }
  if(keyWentUp("A")){
    Robo.addAnimation("hero",iRIdleAnim)
    Robo.velocityX = 0
  }

  if(keyWentDown("Space") && Robo.y >= 270){
    Robo.velocityY = -10
  }
  if(keyWentDown("Q") && Robo.velocityX === 0){
    
    Robo.addAnimation("hero",nRIdleShootAnim)
      Bullet = createSprite(Robo.position.x+35,Robo.position.y-5,5,5)
      Bullet.velocityX = 12
      Bullet.addImage("hero",BulletImg)
      Bullet.scale = 0.2
      
  }
  if(keyWentUp("Q") && Robo.velocityX === 0){
    Robo.addAnimation("hero",nRIdleAnim)
  }
  if(keyWentDown("E") && Robo.velocityX === 8){
    
    Robo.addAnimation("hero",nRRunShoot)
      Bullet = createSprite(Robo.position.x+35,Robo.position.y-5,5,5)
      Bullet.velocityX = 12
      Bullet.addImage("hero",BulletImg)
      Bullet.scale = 0.2
      
  }
  if(keyWentUp("E") && Robo.velocityX === 8){
    Robo.addAnimation("hero",nRRunAnim)
  }
  if(keyWentDown("Q") && Robo.velocityX === -8){
    
    Robo.addAnimation("hero",iRRunShoot)
      Bullet = createSprite(Robo.position.x+35,Robo.position.y-5,5,5)
      Bullet.velocityX = 12
      Bullet.addImage("hero",BulletImg)
      Bullet.scale = 0.2
      BulletGrp.add(Bullet)
      }



if(keyWentUp("Q") && Robo.velocityX === -8){
    Robo.addAnimation("hero",iRRunAnim)
  }

  if(Robo.isTouching(spikedie)){
 
    spikedie.destroy()
    gameState = END;
  }
  if(Robo.isTouching(levelshow)){
    gameState = WIN;
  }
}
 
else if (gameState === WIN){
  Robo.velocityX = 0
  Robo.velocityY = 0
  Robo.addAnimation("hero",nRIdleAnim)
  levelCompleted.visible = true
  next.visible = true
  if(mousePressedOver(next)){
    gameState = PLAY
    Robo.position.x = 100
    Robo.position.y = 300
    levelCompleted.visible = false    
    next.visible = false
  }
}
else if (gameState === END){
    Robo.velocityX = 0
    Robo.velocityY = 0
    Robo.addImage("hero",nDeadImg)
    GameOver.visible = true

  }
  for(var i = 0;i<BulletGrp.length;i++){
    for(var j = 0;j<ZomGrp.length;j++){
      if(BulletGrp.get(i).isTouching(ZomGrp)){
        ZomGrp.get(i).destroy();
      }
    }
  }

  tile1.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile3.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile5.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile7.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile9.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile11.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile13.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile15.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile17.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile19.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile20.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile21.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile22.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile23.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile24.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile25.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile26.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile27.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile28.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile29.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile30.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile31.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile32.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile33.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile34.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile35.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile36.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile37.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile38.setCollider("rectangle", 0, 0, 30, 220, 0);
  tile39.setCollider("rectangle", 0, 0, 30, 220, 0);

  background(255,255,255); 
  
  camera.position.x = Robo.position.x
  GameOver.position.x = camera.position.x
  levelCompleted.position.x = camera.position.x
  next.position.x = camera.position.x
  
  Robo.velocityY = Robo.velocityY+0.5
  Zom1.velocityY = Zom1.velocityY+0.5
  Zom2.velocityY = Zom2.velocityY+0.5
  Zom3.velocityY = Zom3.velocityY+0.5
  Zom4.velocityY = Zom4.velocityY+0.5

  Robo.collide(tile1)
  Robo.collide(tile3)
  Robo.collide(tile5)
  Robo.collide(tile7)
  Robo.collide(tile9)
  Robo.collide(tile11)
  Robo.collide(tile13)
  Robo.collide(tile15)
  Robo.collide(tile17)
  Robo.collide(tile19)
  Robo.collide(tile20)
  Robo.collide(tile21)
  Robo.collide(tile22)
  Robo.collide(tile23)
  Robo.collide(tile24)
  Robo.collide(tile25)
  Robo.collide(tile26)
  Robo.collide(tile27)
  Robo.collide(tile28)
  Robo.collide(tile29)
  Robo.collide(tile30)
  Robo.collide(tile31)
  Robo.collide(tile32)
  Robo.collide(tile33)
  Robo.collide(tile34)
  Robo.collide(tile35)
  Robo.collide(tile36)
  Robo.collide(tile37)
  Robo.collide(tile38)
  Robo.collide(tile39)

  Robo.collide(spikecoll)

  Robo.collide(temp1)
  Robo.collide(temp2)
  Robo.collide(temp3)
  Robo.collide(temp4)

  Zom1.collide(tile11)
  Zom1.collide(tile13)
  Zom1.collide(tile15)
  Zom1.collide(tile17)
  Zom1.collide(tile19)

  Zom2.collide(tile20)
  Zom2.collide(tile21)
  Zom2.collide(tile22)
  Zom2.collide(tile23)
  Zom2.collide(tile24)
  
  Zom3.collide(tile25)
  Zom3.collide(tile26)
  Zom3.collide(tile27)
  Zom3.collide(tile28)
  Zom3.collide(tile29)
  
  Zom4.collide(tile30)
  Zom4.collide(tile31)
  Zom4.collide(tile32)
  Zom4.collide(tile33)
  Zom4.collide(tile34)

  console.log(gameState)
  drawSprites();

}