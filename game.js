//nap definitions - separated from game logic
const MAPS = {
  fling: {
    name: "Fling Tower",
    worldBounds: { x: 0, y: -3500, width: 500, height: 8000 }, //much taller tower
    playerStart: { x: 250, y: 4300 },
    platforms: [
      // Ground Level
      { type: 'ground', x: 250, y: 4400, w: 500, h: 40, color: 0x654321, bounce: 0.4, friction: 2.5 },
      { type: 'wall', x: 10, y: 1000, w: 20, h: 6800, color: 0x444444, bounce: 0.4, friction: 0.5 },
      { type: 'wall', x: 490, y: 1000, w: 20, h: 6800, color: 0x444444, bounce: 0.4, friction: 0.5 },
      
      //tutorial Section (Level 1)
      { type: 'platform', x: 150, y: 4250, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      { type: 'platform', x: 350, y: 4100, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      { type: 'platform', x: 100, y: 3950, w: 100, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      { type: 'platform', x: 400, y: 3800, w: 100, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      { type: 'platform', x: 200, y: 3650, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      
      //first Challenge - Narrow Platforms (Level 2)
      { type: 'narrow', x: 450, y: 3500, w: 70, h: 12, color: 0x696969, bounce: 0.2, friction: 1.2 },
      { type: 'narrow', x: 80, y: 3350, w: 60, h: 12, color: 0x696969, bounce: 0.2, friction: 1.2 },
      { type: 'narrow', x: 420, y: 3200, w: 65, h: 12, color: 0x696969, bounce: 0.2, friction: 1.2 },
      { type: 'narrow', x: 150, y: 3050, w: 70, h: 12, color: 0x696969, bounce: 0.2, friction: 1.2 },
      { type: 'narrow', x: 380, y: 2900, w: 80, h: 12, color: 0x696969, bounce: 0.2, friction: 1.2 },
      { type: 'platform', x: 200, y: 2750, w: 100, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      
      //bouncy Section (Level 3)
      { type: 'bouncy', x: 400, y: 2600, w: 90, h: 15, color: 0x00ff00, bounce: 0.8, friction: 0.1 },
      { type: 'bouncy', x: 120, y: 2450, w: 80, h: 15, color: 0x00ff00, bounce: 0.8, friction: 0.1 },
      { type: 'bouncy', x: 380, y: 2300, w: 85, h: 15, color: 0x00ff00, bounce: 0.8, friction: 0.1 },
      { type: 'bouncy', x: 180, y: 2150, w: 90, h: 15, color: 0x00ff00, bounce: 0.8, friction: 0.1 },
      { type: 'safe', x: 350, y: 2000, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      
      //ice Hell (Level 4)
      { type: 'ice', x: 150, y: 1850, w: 100, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 0.05 },
      { type: 'ice', x: 420, y: 1700, w: 80, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 0.05 },
      { type: 'ice', x: 100, y: 1550, w: 90, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 0.05 },
      { type: 'ice', x: 400, y: 1400, w: 70, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 0.05 },
      { type: 'ice', x: 200, y: 1250, w: 85, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 0.05 },
      { type: 'ice', x: 450, y: 1100, w: 60, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 0.05 },
      { type: 'safe', x: 180, y: 950, w: 140, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      
      //precision Hell (Level 5)
      { type: 'tiny', x: 450, y: 800, w: 45, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 1.5 },
      { type: 'tiny', x: 50, y: 650, w: 40, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 1.5 },
      { type: 'tiny', x: 450, y: 500, w: 35, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 1.5 },
      { type: 'tiny', x: 80, y: 350, w: 50, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 1.5 },
      { type: 'tiny', x: 420, y: 200, w: 40, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 1.5 },
      { type: 'tiny', x: 120, y: 50, w: 45, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 1.5 },
      { type: 'safe', x: 350, y: -100, w: 100, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      
      //super Bouncy Castle (Level 6)
      { type: 'super_bouncy', x: 180, y: -250, w: 80, h: 15, color: 0xff1493, bounce: 1.3, friction: 0.2 },
      { type: 'super_bouncy', x: 400, y: -400, w: 70, h: 15, color: 0xff1493, bounce: 1.3, friction: 0.2 },
      { type: 'super_bouncy', x: 120, y: -550, w: 75, h: 15, color: 0xff1493, bounce: 1.3, friction: 0.2 },
      { type: 'super_bouncy', x: 420, y: -700, w: 65, h: 15, color: 0xff1493, bounce: 1.3, friction: 0.2 },
      { type: 'super_bouncy', x: 200, y: -850, w: 80, h: 15, color: 0xff1493, bounce: 1.3, friction: 0.2 },
      { type: 'safe', x: 350, y: -1000, w: 100, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      
      //mixed Chaos (Level 7)
      { type: 'ice', x: 150, y: -1150, w: 80, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 0.05 },
      { type: 'tiny', x: 450, y: -1300, w: 40, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 1.5 },
      { type: 'bouncy', x: 100, y: -1450, w: 70, h: 15, color: 0x00ff00, bounce: 0.8, friction: 0.1 },
      { type: 'super_bouncy', x: 420, y: -1600, w: 60, h: 15, color: 0xff1493, bounce: 1.2, friction: 0.2 },
      { type: 'narrow', x: 180, y: -1750, w: 65, h: 12, color: 0x696969, bounce: 0.2, friction: 1.2 },
      { type: 'ice', x: 400, y: -1900, w: 70, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 0.05 },
      { type: 'safe', x: 200, y: -2050, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      
      //the Gauntlet (Level 8)
      { type: 'tiny', x: 450, y: -2200, w: 35, h: 8, color: 0xff6b6b, bounce: 0.1, friction: 1.8 },
      { type: 'super_bouncy', x: 80, y: -2350, w: 50, h: 12, color: 0xff1493, bounce: 1.4, friction: 0.1 },
      { type: 'ice', x: 420, y: -2500, w: 60, h: 10, color: 0x87CEEB, bounce: 0.7, friction: 0.03 },
      { type: 'tiny', x: 120, y: -2650, w: 40, h: 8, color: 0xff6b6b, bounce: 0.1, friction: 1.8 },
      { type: 'super_bouncy', x: 380, y: -2800, w: 55, h: 12, color: 0xff1493, bounce: 1.5, friction: 0.1 },
      { type: 'ice', x: 150, y: -2950, w: 50, h: 10, color: 0x87CEEB, bounce: 0.8, friction: 0.02 },
      { type: 'safe', x: 350, y: -3100, w: 100, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      
      //final Approach (Level 9)
      { type: 'narrow', x: 180, y: -3250, w: 60, h: 12, color: 0x696969, bounce: 0.2, friction: 1.2 },
      { type: 'tiny', x: 420, y: -3400, w: 45, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 1.5 },
      
      //the Summit (Level 10)
      { type: 'victory', x: 250, y: -3500, w: 200, h: 25, color: 0xFFD700, bounce: 0.0, friction: 2.0 }
    ],
    
    decorations: [
      { type: 'text', x: 250, y: -3550, text: 'CONGRATULATIONS!', style: { fontSize: '24px', fill: '#FFD700' } },
      { type: 'text', x: 250, y: -3520, text: 'You are the Jump King!', style: { fontSize: '16px', fill: '#FFD700' } }
    ]
  },

  // easy to add more maps
  tutorial: {
    name: "Tutorial",
    worldBounds: { x: 0, y: 0, width: 500, height: 2000 },
    playerStart: { x: 250, y: 1950 },
    platforms: [
      { type: 'ground', x: 250, y: 2000, w: 500, h: 40, color: 0x654321, bounce: 0.4, friction: 2.5 },
      { type: 'platform', x: 150, y: 1850, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      { type: 'platform', x: 350, y: 1700, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      { type: 'victory', x: 250, y: 1550, w: 200, h: 20, color: 0xFFD700, bounce: 0.0, friction: 2.0 }
    ],
    decorations: [
      {
        type: 'text',
        x: 245,
        y: 1150,
        text: () => currentLanguage === 'en' ? 'Tutorial' : 'チュートリアル',
        style: { fontSize: '30px', fill: '#FFD700' }
      },
      {
        type: 'text',
        x: 245,
        y: 1220,
        text: () => currentLanguage === 'en'
          ? '\n1. Use mouse click to jump\nand point in the direction\n\n2. On mobile\nTap where you want to jump'
          : '\n1. クリックでジャンプ\n方向を指定して\n\n2. モバイルでは\nタップしてジャンプします',
        style: { fontSize: '20px', fill: '#ffffff' }
      },
      {
        type: 'text',
        x: 250,
        y: 1380,
        text: () => currentLanguage === 'en'
          ? '\n\n3. And you jump and jump\nUntil you reach the summit\n\n4.It’s quite far,GOOD LUCK!\n\n5.Try the buttons below to\nswitch maps'
          : '\n\n3. ジャンプし続けて\n山頂を目指しましょう\n\n4.かなり遠いので頑張って！\n\n5.下のボタンでマップを\n切り替えられます',
        style: { fontSize: '20px', fill: '#ffffff' }
      }
    ]
  }
};

// main game configuration
const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 900,
  backgroundColor: "#1a1a2e",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
      debug: false
    }
  },
  scene: { preload, create, update }
};

//langugae
let currentLanguage = 'en'; //default: English


//game state
let player, needle, powerMeter, powerLevel = 1, directionVector, canThrow = true;
let leftEye, rightEye, leftPupil, rightPupil;
let currentMap = null;
let loadedSurfaces = [];
let loadedDecorations = [];
let currentPointer = { x: 0, y: 0 }; //track current mouse position

let hasWon = false;
let victoryUI = [];


const game = new Phaser.Game(config);

function preload() {
  this.load.image('forestBase', 'assets/8bit-jungle.jpg');
  console.log('Preloading assets...');
}

function create() {
  setupUI(this);
  setupPlayer(this);
  setupInput(this);
  
  //laoad the default map
  loadMap(this, 'tutorial');
}

function setupUI(scene) {
  const barWidth = 100;
  const barHeight = 20;
  const screenWidth = scene.scale.width;
  const screenHeight = scene.scale.height;
  const fixedX = screenWidth / 2;
  const fixedY = screenHeight - 50;

  //Power meter
  const gradientCanvas = scene.textures.createCanvas('powerGradient', barWidth, barHeight);
  const ctx = gradientCanvas.getContext();
  const grad = ctx.createLinearGradient(0, 0, barWidth, 0);
  grad.addColorStop(0, '#00ff00');
  grad.addColorStop(1, '#ff0000');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, barWidth, barHeight);
  gradientCanvas.refresh();

  powerMeter = scene.add.image(fixedX, fixedY, 'powerGradient')
    .setOrigin(0.5, 0.2).setScrollFactor(0).setDepth(98);

  scene.add.text(fixedX, fixedY + 30, 'POWER', {
    fontSize: '20px',
    fill: '#ffffff',
    fontFamily: 'Arial'
  }).setOrigin(0.5).setScrollFactor(0).setDepth(100);

  needle = scene.add.rectangle(fixedX - barWidth / 2, fixedY, 6, 20, 0x000000)
    .setOrigin(0.5, 0.2).setScrollFactor(0).setDepth(99);

  scene.tweens.add({
    targets: needle,
    x: { from: fixedX - barWidth / 2, to: fixedX + barWidth / 2 },
    duration: 500,
    yoyo: true,
    repeat: -1,
    onUpdate: (tween, target) => {
      powerLevel = Phaser.Math.Linear(0.3, 2, (target.x - (fixedX - barWidth / 2)) / barWidth);
    }
  });

  //Add map selection UI
  const buttonStyle = {
    fontSize: '18px',
    fill: '#ffffff',
    fontFamily: 'Arial',
    stroke: '#000',
    strokeThickness: 3
  };
  
  const flingBtn = scene.add.text(20, scene.scale.height - 30, '[ Fling Tower ]', buttonStyle)
    .setScrollFactor(0)
    .setDepth(100)
    .setInteractive({ useHandCursor: true })
    .on('pointerdown', () => {
      loadMap(scene, 'fling');
    });
  
  const tutorialBtn = scene.add.text(scene.scale.width - 20, scene.scale.height - 30, '[ Tutorial ]', buttonStyle)
    .setOrigin(1, 0)
    .setScrollFactor(0)
    .setDepth(100)
    .setInteractive({ useHandCursor: true })
    .on('pointerdown', () => {
      loadMap(scene, 'tutorial');
    });
  
  //language
  const langBtn = scene.add.text(scene.scale.width - 20, 20, '[日本語]', {
    fontSize: '18px',
    fill: '#ffffff',
    fontFamily: 'Arial',
    stroke: '#000',
    strokeThickness: 3
  })
  .setOrigin(1, 0)
  .setScrollFactor(0)
  .setDepth(100)
  .setInteractive({ useHandCursor: true })
  .on('pointerdown', () => {
    // Toggle language
    currentLanguage = (currentLanguage === 'en') ? 'jp' : 'en';
  
    // Optional: Show feedback
    langBtn.setText(currentLanguage === 'en' ? '[日本語] ' : '[ENG]');
  
    // Refresh decorations or tutorial text if needed
    if (currentMap.name === 'Tutorial') {
      loadMap(scene, 'tutorial');
    }
  });
  


}

function setupPlayer(scene) {
  player = scene.add.circle(250, 3900, 28, 0xaaaaaa);
  scene.physics.add.existing(player);
  player.body.setCircle(27);
  player.body.setBounce(0.5);
  player.body.setCollideWorldBounds(false); //disable world bounds collision to prevent bouncing
  player.setInteractive();
  scene.cameras.main.startFollow(player, true, 0.1, 0.1);

  //eyes setup
  const eyeOffsetX = 8;
  const eyeOffsetY = -10;
  const pupilRadius = 8;

  leftEye = scene.add.image(player.x - eyeOffsetX, player.y + eyeOffsetY, 'eyeball')
    .setScale(0.085).setDepth(100);
  rightEye = scene.add.image(player.x + eyeOffsetX, player.y + eyeOffsetY, 'eyeball')
    .setScale(0.085).setDepth(100);
  leftPupil = scene.add.circle(leftEye.x, leftEye.y, pupilRadius, 0x000).setDepth(101);
  rightPupil = scene.add.circle(rightEye.x, rightEye.y, pupilRadius, 0x000).setDepth(101);
  
  //unitialize direction vector pointing upward
  directionVector = new Phaser.Math.Vector2(0, -1);
}

function setupInput(scene) {
  const maxPupilOffset = 6;

  //track current pointer position for eyes, etc.
  scene.input.on('pointermove', pointer => {
      currentPointer.x = pointer.x;
      currentPointer.y = pointer.y;

      //update direction vector only on non-touch devices (desktop)
      if (!scene.sys.game.device.input.touch) {
          const worldPoint = pointer.positionToCamera(scene.cameras.main);
          directionVector = new Phaser.Math.Vector2(
              worldPoint.x - player.x,
              worldPoint.y - player.y
          ).normalize();
      }
  });

  // On pointer down (click or tap), trigger jump with direction based on input type
  scene.input.on('pointerdown', pointer => {
    const tapY = pointer.y;

    if (tapY < 70 || tapY > scene.scale.height - 100) {
      return;
    }
  
    if (!canThrow) return;
    canThrow = false;
  
    let jumpDirection;
  
    if (scene.sys.game.device.input.touch) {
      const worldPoint = pointer.positionToCamera(scene.cameras.main);
      jumpDirection = new Phaser.Math.Vector2(
        worldPoint.x - player.x,
        worldPoint.y - player.y
      ).normalize();
    } else {
      jumpDirection = directionVector;
    }
  
    player.body.setVelocity(
      jumpDirection.x * 300 * powerLevel,
      jumpDirection.y * 800 * powerLevel
    );
  });
  

  //Keyboard controls remain unchanged
  scene.input.keyboard.on('keydown-ONE', () => loadMap(scene, 'fling'));
  scene.input.keyboard.on('keydown-TWO', () => loadMap(scene, 'tutorial'));
}

function updateEyePositions(scene) {
  const eyeOffsetX = 18;
  const eyeOffsetY = -10;
  const maxPupilOffset = 6;

  //update eye positions to follow player
  leftEye.setPosition(player.x - eyeOffsetX, player.y + eyeOffsetY);
  rightEye.setPosition(player.x + eyeOffsetX, player.y + eyeOffsetY);

  //calculate pupil positions based on current pointer position
  //convert screen coordinates to world coordinates relative to player
  const camera = scene.cameras.main;
  const worldPointerX = currentPointer.x + camera.worldView.x;
  const worldPointerY = currentPointer.y + camera.worldView.y;

  //calculate direction from each eye to the pointer
  const leftEyeToPointer = new Phaser.Math.Vector2(
    worldPointerX - leftEye.x,
    worldPointerY - leftEye.y
  ).normalize();

  const rightEyeToPointer = new Phaser.Math.Vector2(
    worldPointerX - rightEye.x,
    worldPointerY - rightEye.y
  ).normalize();

  //apply offset with maximum distance constraint
  const leftPupilOffset = leftEyeToPointer.scale(maxPupilOffset);
  const rightPupilOffset = rightEyeToPointer.scale(maxPupilOffset);

  leftPupil.setPosition(
    leftEye.x + leftPupilOffset.x,
    leftEye.y + leftPupilOffset.y
  );

  rightPupil.setPosition(
    rightEye.x + rightPupilOffset.x,
    rightEye.y + rightPupilOffset.y
  );
}

function loadMap(scene, mapName) {

    console.log(`Loading map: ${mapName}`);
  
    victoryUI.forEach(obj => obj.destroy());
    victoryUI = [];
    scene.input.enabled = true;


  
    clearCurrentMap(scene);

    canThrow = true;
    player.body.moves = true;

  
    const mapData = MAPS[mapName];
    if (!mapData) {
      console.error(`Map '${mapName}' not found!`);
      return;
    }
  currentMap = mapData;
  
  //set world bounds
  const bounds = mapData.worldBounds;
  scene.physics.world.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
  scene.cameras.main.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);

  //position player at start
  player.setPosition(mapData.playerStart.x, mapData.playerStart.y);
  player.body.setVelocity(0, 0);
  canThrow = true;

  //Reset direction vector
  directionVector = new Phaser.Math.Vector2(0, -1);

  //Load background
  loadBackground(scene, mapData);
  
  //load platforms
  loadPlatforms(scene, mapData.platforms);
  
  //load decorations
  loadDecorations(scene, mapData.decorations);

  console.log(`Map '${mapData.name}' loaded successfully!`);
}

function clearCurrentMap(scene) {
  //clear surfaces
  loadedSurfaces.forEach(surface => {
    if (surface.rect) surface.rect.destroy();
  });
  loadedSurfaces = [];

  //clear decorations
  loadedDecorations.forEach(decoration => {
    if (decoration.object) decoration.object.destroy();
  });
  loadedDecorations = [];
}

function loadBackground(scene, mapData) {
  //add background based on map height
  const bounds = mapData.worldBounds;
  const centerY = bounds.y + bounds.height / 2;
  
  scene.add.image(250, centerY, 'forestBase')
    .setOrigin(0.5, 0.5)
    .setScale(1)
    .setAlpha(0.6)
    .setScrollFactor(0.8)
    .setDepth(-100);
}

function loadPlatforms(scene, platforms) {
  platforms.forEach(platform => {
    const rect = scene.add.rectangle(platform.x, platform.y, platform.w, platform.h, platform.color)
      .setOrigin(0.5);
    
    scene.physics.add.existing(rect, true);
    scene.physics.add.collider(player, rect);
    

  if (platform.type === 'victory') {
    rect.isVictory = true;
  }

    loadedSurfaces.push({
      rect,
      bounce: platform.bounce,
      friction: platform.friction,
      type: platform.type
    });
  });
}


//mostly the text
function loadDecorations(scene, decorations) {
  if (!decorations) return;
  
  decorations.forEach(decoration => {
    let obj;

    if (decoration.type === 'text') {
      const textValue = typeof decoration.text === 'function' ? decoration.text() : decoration.text;
      obj = scene.add.text(decoration.x, decoration.y, textValue, decoration.style)
        .setOrigin(0.5)
        .setDepth(100);
    }

    if (obj) {
      loadedDecorations.push({ object: obj, type: decoration.type });
    }
  });
}


function update() {
  //Player physics
  player.body.setVelocity(player.body.velocity.x * 0.98, player.body.velocity.y * 0.98);

  if (player.body.speed < 9) {
    player.body.setVelocity(0, 0);
    canThrow = true;
  }

  //Update eyes to follow player and track mouse
  updateEyePositions(this);
  
  //Vivtory
  if (!hasWon) {
    //touching victory platform
    loadedSurfaces.forEach(surface => {
      if (surface.rect.isVictory) {
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), surface.rect.getBounds())) {
          hasWon = true;
          handleVictory();
        }
      }
    });
  
    //or going above the map top
    if (currentMap && player.y < currentMap.worldBounds.y) {
      hasWon = true;
      handleVictory();
    }
  }
  

  //more lenient fall protection - only reset if player falls WAY below the ground
  if (currentMap) {
    const groundLevel = currentMap.worldBounds.y + currentMap.worldBounds.height;
  }
}

//victory popup
function handleVictory() {
  console.log("🎉 Victory!");
  const scene = player.scene;
  hasWon = true;
  canThrow = false;

  // Freeze player but NOT input
  player.body.setVelocity(0, 0);
  player.body.moves = false;

  // create a full-screen yellow rectangle
  const overlay = scene.add.rectangle(0, 0, scene.scale.width, scene.scale.height, 0xFFD700)
    .setOrigin(0, 0)
    .setAlpha(0)
    .setScrollFactor(0)
    .setDepth(1000);
  victoryUI.push(overlay);

  // fade it in
  scene.tweens.add({
    targets: overlay,
    alpha: 0.9,
    duration: 800,
    ease: 'Linear',
    onComplete: () => {
      const centerX = scene.scale.width / 2;
      const centerY = scene.scale.height / 2;

      const title = scene.add.text(centerX, centerY - 60, '🎉 BIG CONGRATULATIONS! 🎉\nYou won this map!', {
        fontSize: '24px',
        fill: '#ffffff',
        fontFamily: 'Arial',
        align: 'center',
        stroke: '#000',
        strokeThickness: 4
      }).setOrigin(0.5).setScrollFactor(0).setDepth(1001);
      victoryUI.push(title);

      const nextBtn = scene.add.text(centerX, centerY + 10, '[ Next Map ]', {
        fontSize: '20px',
        fill: '#ffffff',
        fontFamily: 'Arial',
        stroke: '#000',
        strokeThickness: 2
      }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setScrollFactor(0).setDepth(1001)
        .on('pointerdown', () => {
          hasWon = false;
          loadMap(scene, currentMap.name === 'Tutorial' ? 'fling' : 'tutorial');
        });
      victoryUI.push(nextBtn);

      const restartBtn = scene.add.text(centerX, centerY + 50, '[ Restart ]', {
        fontSize: '20px',
        fill: '#ffffff',
        fontFamily: 'Arial',
        stroke: '#000',
        strokeThickness: 2
      }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setScrollFactor(0).setDepth(1001)
        .on('pointerdown', () => {
          hasWon = false;
          loadMap(scene, currentMap.name === 'Fling Tower' ? 'fling' : 'tutorial');
        });
      victoryUI.push(restartBtn);
    }
  });
}


