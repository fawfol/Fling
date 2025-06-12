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
    playerStart: { x: 250, y: 1900 },
    platforms: [
      { type: 'ground', x: 250, y: 2000, w: 500, h: 40, color: 0x654321, bounce: 0.4, friction: 2.5 },
      { type: 'platform', x: 150, y: 1850, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      { type: 'platform', x: 350, y: 1700, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      { type: 'victory', x: 250, y: 1550, w: 200, h: 20, color: 0xFFD700, bounce: 0.0, friction: 2.0 }
    ],
    decorations: [
      { type: 'text', x: 250, y: 1500, text: 'Tutorial Complete!', style: { fontSize: '20px', fill: '#FFD700' } }
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

//game state
let player, needle, powerMeter, powerLevel = 1, directionVector, canThrow = true;
let leftEye, rightEye, leftPupil, rightPupil;
let currentMap = null;
let loadedSurfaces = [];
let loadedDecorations = [];
let currentPointer = { x: 0, y: 0 }; //track current mouse position

let hasWon = false;

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
  loadMap(this, 'fling');
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
  scene.add.text(10, 10, 'Maps: 1-Fling King, 2-Tutorial', {
    fontSize: '14px',
    fill: '#ffffff',
    fontFamily: 'Arial'
  }).setScrollFactor(0).setDepth(100);
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
      if (!canThrow) return;
      canThrow = true;

      let jumpDirection;

      if (scene.sys.game.device.input.touch) {
          //on mobile: calculate direction from player to tap location
          const worldPoint = pointer.positionToCamera(scene.cameras.main);
          jumpDirection = new Phaser.Math.Vector2(
              worldPoint.x - player.x,
              worldPoint.y - player.y
          ).normalize();
      } else {
          //in desktop: use existing direction vector updated by mouse move
          jumpDirection = directionVector;
      }

      //Apply jump velocity scaled by power level
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
  
  //Clear existing map
  clearCurrentMap(scene);
  
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

function loadDecorations(scene, decorations) {
  if (!decorations) return;
  
  decorations.forEach(decoration => {
    let obj;
    
    if (decoration.type === 'text') {
      obj = scene.add.text(decoration.x, decoration.y, decoration.text, decoration.style)
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

  if (player.body.speed < 7) {
    player.body.setVelocity(0, 0);
    canThrow = true;
  }

  //Update eyes to follow player and track mouse
  updateEyePositions(this);
  
  //Vivtory
  if (!hasWon) {
    // Touching victory platform
    loadedSurfaces.forEach(surface => {
      if (surface.rect.isVictory) {
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), surface.rect.getBounds())) {
          hasWon = true;
          handleVictory();
        }
      }
    });
  
    // Or going above the map top
    if (currentMap && player.y < currentMap.worldBounds.y) {
      hasWon = true;
      handleVictory();
    }
  }
  

  //More lenient fall protection - only reset if player falls WAY below the ground
  if (currentMap) {
    const groundLevel = currentMap.worldBounds.y + currentMap.worldBounds.height;
  }
}

//victory popup
function handleVictory() {
  console.log("🎉 Victory!");
  canThrow = false;
  scene.input.enabled = false;
  player.body.setVelocity(0, 0);
  player.body.moves = false;

  const scene = player.scene;

  //freeze player
  player.body.setVelocity(0, 0);
  player.body.moves = false;

  //fade effect
  scene.cameras.main.fade(800, 255, 215, 0); // yellow/gold fade

  //after fade completes, show text and buttons
  scene.time.delayedCall(900, () => {
    const centerX = scene.scale.width / 2;
    const centerY = scene.scale.height / 2;

    // BIG TEXT
    scene.add.text(centerX, centerY - 60,
      '🎉 BIG CONGRATULATIONS! 🎉\nYou won this map!',
      { 
        fontSize: '24px',
        fill: '#FFD700',
        fontFamily: 'Arial',
        align: 'center',
        fontStyle: 'bold',
        stroke: '#000',
        strokeThickness: 4
      }
    ).setOrigin(0.5)
     .setScrollFactor(0)
     .setDepth(999);

    //BUTTON 1: Next Map
    scene.add.text(centerX, centerY + 10, '[ Next Map ]', {
      fontSize: '20px',
      fill: '#ffffff',
      fontFamily: 'Arial',
      stroke: '#000',
      strokeThickness: 3
    })
    .setOrigin(0.5)
    .setInteractive({ useHandCursor: true })
    .setScrollFactor(0)
    .setDepth(999)
    .on('pointerdown', () => {
      loadMap(scene, 'tutorial'); //next map later
    });

    //BUTTON 2: Restart
    scene.add.text(centerX, centerY + 50, '[ Restart ]', {
      fontSize: '20px',
      fill: '#ffffff',
      fontFamily: 'Arial',
      stroke: '#000',
      strokeThickness: 3
    })
    .setOrigin(0.5)
    .setInteractive({ useHandCursor: true })
    .setScrollFactor(0)
    .setDepth(999);
  });
}

