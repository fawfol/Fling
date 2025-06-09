const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 900,
  backgroundColor: "#222",
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 800 },
      debug: false
    }
  },
  scene: { preload, create, update }
};

let player, needle, powerMeter, powerLevel = 1, directionVector, surfaces = [], canThrow = true;
const game = new Phaser.Game(config);

function preload() {
  this.load.image('forestBase', 'assets/8bit-jungle.jpg');
}

function create() {
  this.physics.world.setBounds(0, 100, 500, 4000);
  this.cameras.main.setBounds(0, 100, 500, 4000);

  const barWidth = 100;
  const barHeight = 20;
  const screenWidth = this.scale.width;
  const screenHeight = this.scale.height;
  const fixedX = screenWidth / 2;
  const fixedY = screenHeight - 50;

  // Place forest image at the bottom of the map
  const forestBase = this.add.image(250, 4000, 'forestBase')
    .setOrigin(0.5, 1)  // Align at the bottom of the map
    .setScale(1.5)      // Adjust size if needed
    .setAlpha(0.8)      // Optional transparency
    .setScrollFactor(1) // Moves with the camera
    .setDepth(-100);

  // Restore gray box at the bottom of the screen
  const placeholderBox = this.add.rectangle(fixedX, fixedY, screenWidth, 100, 0x888888)
    .setOrigin(0.5)
    .setScrollFactor(0) // Keeps it fixed on screen
    .setDepth(97);

  // Create player ball
  player = this.add.circle(250, 3900, 24, 0xaaaaaa);
  this.physics.add.existing(player);
  player.body.setCircle(24);
  player.body.setBounce(0.5);
  player.body.setCollideWorldBounds(true);
  player.setInteractive();
  this.cameras.main.startFollow(player, true, 0.1, 0.1);

  // Power meter gradient texture
  const gradientCanvas = this.textures.createCanvas('powerGradient', barWidth, barHeight);
  const ctx = gradientCanvas.getContext();
  const grad = ctx.createLinearGradient(0, 0, barWidth, 0);
  grad.addColorStop(0, '#00ff00'); // Green
  grad.addColorStop(1, '#ff0000'); // Red
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, barWidth, barHeight);
  gradientCanvas.refresh();

  // Power meter bar
  powerMeter = this.add.image(fixedX, fixedY, 'powerGradient')
    .setOrigin(0.5, 0.2).setScrollFactor(0).setDepth(98);
  
  // Power text
  const powerText = this.add.text(fixedX, fixedY + 30, 'POWER', { fontSize: '20px', fill: '#ffffff', fontFamily: 'Arial' })
    .setOrigin(0.5).setScrollFactor(0).setDepth(100);

  // Needle rectangle
  needle = this.add.rectangle(fixedX - barWidth / 2, fixedY, 6, 20, 0x000000)
    .setOrigin(0.5, 0.2).setScrollFactor(0).setDepth(99);

  // Needle animation
  this.tweens.add({
    targets: needle,
    x: { from: fixedX - barWidth / 2, to: fixedX + barWidth / 2 },
    duration: 500,
    yoyo: true,
    repeat: -1,
    onUpdate: (tween, target) => {
      powerLevel = Phaser.Math.Linear(0.3, 2, (target.x - (fixedX - barWidth / 2)) / barWidth);
    }
  });

  // Add surfaces
  addSurface(this, 250, 4000, 500, 40, 0x654321, 0.4, 2.5);
  addSurface(this, 10, 2000, 20, 4000, 0x8888ff, 0.4, 0.5);
  addSurface(this, 490, 2000, 20, 4000, 0x8888ff, 0.4, 0.5);
  addSurface(this, 250, 3950, 200, 20, 0x00ff00, 0.2, 0.95);
  addSurface(this, 450, 3750, 200, 20, 0xaaaaaa, 0.6, 0.8);
  addSurface(this, 150, 3550, 200, 20, 0x000fff, 0.8, 0.1);
  addSurface(this, 350, 3350, 200, 20, 0x996633, 0.1, 1.2);
  addSurface(this, 250, 3150, 200, 20, 0x00ffcc, 1.2, 0.6);

  // Set direction vector based on pointer movement
  this.input.on('pointermove', pointer => {
    if (!canThrow) return;
    const worldPoint = pointer.positionToCamera(this.cameras.main);
    directionVector = new Phaser.Math.Vector2(worldPoint.x - player.x, worldPoint.y - player.y).normalize();
  });

  // Apply throw force on click
  this.input.on('pointerdown', () => {
    if (!canThrow) return;
    canThrow = false;
    player.body.setVelocity(directionVector.x * 300 * powerLevel, directionVector.y * 800 * powerLevel);
  });
}

function update() {
  player.body.setVelocity(player.body.velocity.x * 0.98, player.body.velocity.y * 0.98);
  
  // Enable throw again if player is slow enough
  if (player.body.speed < 5) {
    player.body.setVelocity(0, 0);
  }
  if (player.body.speed < 3) {
    canThrow = true;
  }
}

// Helper to add surfaces
function addSurface(scene, x, y, w, h, color, bounce, friction) {
  let rect = scene.add.rectangle(x, y, w, h, color).setOrigin(0.5);
  scene.physics.add.existing(rect, true);
  scene.physics.add.collider(player, rect);
  surfaces.push({ rect, bounce, friction });
}
