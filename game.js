// Map definitions - separated from game logic
const MAPS = {
  jumpKing: {
    name: "Jump King Tower",
    worldBounds: { x: 0, y: -2000, width: 500, height: 6100 }, // Extended height to accommodate ground
    playerStart: { x: 250, y: 3900 },
    platforms: [
      //bottom Area - Tutorial (Ground is at y: 4000, so world should extend to 4100)
      { type: 'ground', x: 250, y: 4000, w: 500, h: 40, color: 0x654321, bounce: 0.4, friction: 2.5 },
      { type: 'wall', x: 10, y: 2000, w: 20, h: 4000, color: 0x444444, bounce: 0.4, friction: 0.5 },
      { type: 'wall', x: 490, y: 2000, w: 20, h: 4000, color: 0x444444, bounce: 0.4, friction: 0.5 },
      
      //ftarting platforms
      { type: 'platform', x: 150, y: 3850, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      { type: 'platform', x: 350, y: 3700, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      { type: 'platform', x: 100, y: 3550, w: 100, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      
      //first Challenge Section
      { type: 'narrow', x: 400, y: 3400, w: 80, h: 12, color: 0x696969, bounce: 0.2, friction: 1.2 },
      { type: 'narrow', x: 150, y: 3250, w: 70, h: 12, color: 0x696969, bounce: 0.2, friction: 1.2 },
      { type: 'narrow', x: 380, y: 3100, w: 90, h: 12, color: 0x696969, bounce: 0.2, friction: 1.2 },
      { type: 'bouncy', x: 200, y: 2950, w: 100, h: 15, color: 0x00ff00, bounce: 0.8, friction: 0.1 },
      
      // ice Section
      { type: 'ice', x: 350, y: 2800, w: 120, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 0.05 },
      { type: 'ice', x: 120, y: 2650, w: 100, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 0.05 },
      { type: 'ice', x: 400, y: 2500, w: 80, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 0.05 },
      { type: 'safe', x: 250, y: 2350, w: 150, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      
      //precision Section
      { type: 'tiny', x: 450, y: 2200, w: 50, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 1.5 },
      { type: 'tiny', x: 50, y: 2050, w: 50, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 1.5 },
      { type: 'tiny', x: 450, y: 1900, w: 45, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 1.5 },
      { type: 'tiny', x: 80, y: 1750, w: 60, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 1.5 },
      
      //bouncy Castle
      { type: 'super_bouncy', x: 350, y: 1600, w: 100, h: 15, color: 0xff1493, bounce: 1.2, friction: 0.3 },
      { type: 'super_bouncy', x: 150, y: 1450, w: 100, h: 15, color: 0xff1493, bounce: 1.2, friction: 0.3 },
      { type: 'super_bouncy', x: 400, y: 1300, w: 80, h: 15, color: 0xff1493, bounce: 1.2, friction: 0.3 },
      
      //mixed Staircase
      { type: 'platform', x: 80, y: 1150, w: 90, h: 12, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      { type: 'narrow', x: 200, y: 1000, w: 80, h: 12, color: 0x696969, bounce: 0.2, friction: 1.2 },
      { type: 'ice', x: 350, y: 850, w: 100, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 0.05 },
      { type: 'tiny', x: 150, y: 700, w: 70, h: 12, color: 0xff6b6b, bounce: 0.1, friction: 1.5 },
      { type: 'safe', x: 400, y: 550, w: 80, h: 12, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      
      //final challenges
      { type: 'super_bouncy', x: 100, y: 400, w: 60, h: 10, color: 0xff1493, bounce: 1.0, friction: 0.2 },
      { type: 'ice', x: 250, y: 300, w: 50, h: 10, color: 0x87CEEB, bounce: 0.7, friction: 0.05 },
      { type: 'tiny', x: 420, y: 200, w: 70, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 1.8 },
      { type: 'safe', x: 180, y: 50, w: 80, h: 12, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      { type: 'platform', x: 350, y: -100, w: 90, h: 12, color: 0x696969, bounce: 0.2, friction: 1.0 },
      
      //summit
      { type: 'victory', x: 250, y: -250, w: 200, h: 20, color: 0xFFD700, bounce: 0.0, friction: 2.0 }
    ],
    checkpoints: [
      { x: 250, y: 3800, name: "Start" },
      { x: 250, y: 2300, name: "Ice Cleared" },
      { x: 400, y: 1250, name: "Bouncy Castle" },
      { x: 400, y: 500, name: "Final Stretch" },
      { x: 250, y: -200, name: "Summit!" }
    ],
    decorations: [
      { type: 'text', x: 250, y: -300, text: 'SUMMIT REACHED!', style: { fontSize: '24px', fill: '#FFD700' } }
    ]
  },

  // Easy to add more maps
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
    checkpoints: [
      { x: 250, y: 1850, name: "Start" },
      { x: 250, y: 1500, name: "Finish!" }
    ],
    decorations: [
      { type: 'text', x: 250, y: 1500, text: 'Tutorial Complete!', style: { fontSize: '20px', fill: '#FFD700' } }
    ]
  }
};

// Main game configuration
const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 900,
  backgroundColor: "#1a1a2e",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 850 },
      debug: false
    }
  },
  scene: { preload, create, update }
};

//Game state
let player, needle, powerMeter, powerLevel = 1, directionVector, canThrow = true;
let leftEye, rightEye, leftPupil, rightPupil;
let currentMap = null;
let loadedSurfaces = [];
let loadedCheckpoints = [];
let loadedDecorations = [];
let currentCheckpoint = 0;

const game = new Phaser.Game(config);

function preload() {
  this.load.image('forestBase', 'assets/8bit-jungle.jpg');
  console.log('Preloading assets...');
}

function create() {
  setupUI(this);
  setupPlayer(this);
  setupInput(this);
  
  // Load the default map
  loadMap(this, 'jumpKing');
}

function setupUI(scene) {
  const barWidth = 100;
  const barHeight = 20;
  const screenWidth = scene.scale.width;
  const screenHeight = scene.scale.height;
  const fixedX = screenWidth / 2;
  const fixedY = screenHeight - 50;

  // Power meter
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

  // Add map selection UI
  scene.add.text(10, 10, 'Maps: 1-Jump King, 2-Tutorial', {
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
  player.body.setCollideWorldBounds(false); // Disable world bounds collision to prevent bouncing
  player.setInteractive();
  scene.cameras.main.startFollow(player, true, 0.1, 0.1);

  // Eyes setup
  const eyeOffsetX = 5;
  const eyeOffsetY = -10;
  const pupilRadius = 8;

  leftEye = scene.add.image(player.x + eyeOffsetX, player.y + eyeOffsetY, 'eyeball')
    .setScale(0.085).setDepth(100);
  rightEye = scene.add.image(player.x + eyeOffsetX, player.y + eyeOffsetY, 'eyeball')
    .setScale(0.085).setDepth(100);
  leftPupil = scene.add.circle(leftEye.x, leftEye.y, pupilRadius, 0x000).setDepth(101);
  rightPupil = scene.add.circle(leftEye.x, leftEye.y, pupilRadius, 0x000).setDepth(101);
}

function setupInput(scene) {
  const maxPupilOffset = 6;
  const eyeOffsetX = 5;
  const eyeOffsetY = -10;

  // Movement input
  scene.input.on('pointermove', pointer => {
    if (!canThrow) return;
    const worldPoint = pointer.positionToCamera(scene.cameras.main);
    directionVector = new Phaser.Math.Vector2(
      worldPoint.x - player.x,
      worldPoint.y - player.y
    ).normalize();

    // Eye tracking
    const pointerScreenX = pointer.x;
    const pointerScreenY = pointer.y;

    const dxL = Phaser.Math.Clamp(pointerScreenX - scene.cameras.main.worldView.x - (player.x - eyeOffsetX), -maxPupilOffset, maxPupilOffset);
    const dyL = Phaser.Math.Clamp(pointerScreenY - scene.cameras.main.worldView.y - (player.y + eyeOffsetY), -maxPupilOffset, maxPupilOffset);
    leftPupil.setPosition(leftEye.x + dxL, leftEye.y + dyL);

    const dxR = Phaser.Math.Clamp(pointerScreenX - scene.cameras.main.worldView.x - (player.x + eyeOffsetX), -maxPupilOffset, maxPupilOffset);
    const dyR = Phaser.Math.Clamp(pointerScreenY - scene.cameras.main.worldView.y - (player.y + eyeOffsetY), -maxPupilOffset, maxPupilOffset);
    rightPupil.setPosition(rightEye.x + dxR, rightEye.y + dyR);
  });

  scene.input.on('pointerdown', () => {
    if (!canThrow) return;
    canThrow = false;
    player.body.setVelocity(
      directionVector.x * 300 * powerLevel,
      directionVector.y * 800 * powerLevel
    );
  });

  // Keyboard controls
  scene.input.keyboard.on('keydown-R', () => resetToCheckpoint());
  scene.input.keyboard.on('keydown-ONE', () => loadMap(scene, 'jumpKing'));
  scene.input.keyboard.on('keydown-TWO', () => loadMap(scene, 'tutorial'));
}

function loadMap(scene, mapName) {
  console.log(`Loading map: ${mapName}`);
  
  // Clear existing map
  clearCurrentMap(scene);
  
  const mapData = MAPS[mapName];
  if (!mapData) {
    console.error(`Map '${mapName}' not found!`);
    return;
  }

  currentMap = mapData;
  
  // Set world bounds
  const bounds = mapData.worldBounds;
  scene.physics.world.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
  scene.cameras.main.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);

  // Position player at start
  player.setPosition(mapData.playerStart.x, mapData.playerStart.y);
  player.body.setVelocity(0, 0);
  canThrow = true;
  currentCheckpoint = 0;

  // Load background
  loadBackground(scene, mapData);
  
  // Load platforms
  loadPlatforms(scene, mapData.platforms);
  
  // Load checkpoints
  loadCheckpoints(scene, mapData.checkpoints);
  
  // Load decorations
  loadDecorations(scene, mapData.decorations);

  console.log(`Map '${mapData.name}' loaded successfully!`);
}

function clearCurrentMap(scene) {
  // Clear surfaces
  loadedSurfaces.forEach(surface => {
    if (surface.rect) surface.rect.destroy();
  });
  loadedSurfaces = [];

  // Clear checkpoints
  loadedCheckpoints.forEach(checkpoint => {
    if (checkpoint.sprite) checkpoint.sprite.destroy();
  });
  loadedCheckpoints = [];

  // Clear decorations
  loadedDecorations.forEach(decoration => {
    if (decoration.object) decoration.object.destroy();
  });
  loadedDecorations = [];
}

function loadBackground(scene, mapData) {
  // Add background based on map height
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
    
    loadedSurfaces.push({
      rect,
      bounce: platform.bounce,
      friction: platform.friction,
      type: platform.type
    });
  });
}

function loadCheckpoints(scene, checkpoints) {
  checkpoints.forEach((checkpointData, index) => {
    const checkpoint = scene.add.circle(checkpointData.x, checkpointData.y - 50, 15, 0x0066ff);
    checkpoint.setAlpha(0.7);
    
    // Add pulsing animation
    scene.tweens.add({
      targets: checkpoint,
      scaleX: 1.2,
      scaleY: 1.2,
      duration: 1000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
    
    const area = new Phaser.Geom.Circle(checkpointData.x, checkpointData.y, 50);
    
    loadedCheckpoints.push({
      sprite: checkpoint,
      area,
      x: checkpointData.x,
      y: checkpointData.y,
      index,
      name: checkpointData.name
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
  // Player physics
  player.body.setVelocity(player.body.velocity.x * 0.98, player.body.velocity.y * 0.98);

  if (player.body.speed < 6) {
    player.body.setVelocity(0, 0);
    canThrow = true;
  }

  // Update eyes
  const eyeOffsetX = 18;
  const eyeOffsetY = -10;
  leftEye.setPosition(player.x - eyeOffsetX, player.y + eyeOffsetY);
  rightEye.setPosition(player.x + eyeOffsetX, player.y + eyeOffsetY);

  // Check checkpoints
  loadedCheckpoints.forEach((checkpoint, index) => {
    if (Phaser.Geom.Circle.Contains(checkpoint.area, player.x, player.y) && currentCheckpoint < index) {
      currentCheckpoint = index;
      checkpoint.sprite.setTint(0x00ff00);
      
      // Flash effect
      checkpoint.sprite.setAlpha(0.5);
      setTimeout(() => checkpoint.sprite.setAlpha(1), 200);
      
      console.log(`Checkpoint reached: ${checkpoint.name}`);
    }
  });

  // More lenient fall protection - only reset if player falls WAY below the ground
  if (currentMap) {
    const groundLevel = currentMap.worldBounds.y + currentMap.worldBounds.height;
    if (player.y > groundLevel + 200) { // Give 200 pixels buffer below ground
      console.log(`Player fell too far (y: ${player.y}, ground: ${groundLevel}), resetting...`);
      resetToCheckpoint();
    }
  }
}

function resetToCheckpoint() {
  if (currentCheckpoint < loadedCheckpoints.length) {
    const checkpoint = loadedCheckpoints[currentCheckpoint];
    player.setPosition(checkpoint.x, checkpoint.y);
    player.body.setVelocity(0, 0);
    canThrow = true;
    console.log(`Reset to checkpoint: ${checkpoint.name}`);
  }
}
