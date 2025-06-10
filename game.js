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
let leftEye, rightEye, leftPupil, rightPupil;

const game = new Phaser.Game(config);

function preload() {
  this.load.image('forestBase', 'assets/8bit-jungle.jpg');
  this.load.image('eyeball', 'assets/eyeball.jpeg');
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

  this.add.image(250, 4000, 'forestBase')
    .setOrigin(0.5, 1)
    .setScale(1.5)
    .setAlpha(0.8)
    .setScrollFactor(1)
    .setDepth(-100);

  player = this.add.circle(250, 3900, 24, 0xaaaaaa);
  this.physics.add.existing(player);
  player.body.setCircle(24);
  player.body.setBounce(0.5);
  player.body.setCollideWorldBounds(true);
  player.setInteractive();
  this.cameras.main.startFollow(player, true, 0.1, 0.1);

  //eye constants relative to player center
  const eyeOffsetX = 18;
  const eyeOffsetY = -10;
  const pupilRadius = 6;
  const maxPupilOffset = 6;

  //create eyes relative to player position
  leftEye = this.add.image(player.x - eyeOffsetX, player.y + eyeOffsetY, 'eyeball')
    .setScale(0.15)
    .setDepth(100);

  rightEye = this.add.image(player.x + eyeOffsetX, player.y + eyeOffsetY, 'eyeball')
    .setScale(0.15)
    .setDepth(100);

  leftPupil = this.add.circle(leftEye.x, leftEye.y, pupilRadius, 0x000000)
    .setDepth(101);

  rightPupil = this.add.circle(rightEye.x, rightEye.y, pupilRadius, 0x000000)
    .setDepth(101);

  //power meter setup (unchanged)
  const gradientCanvas = this.textures.createCanvas('powerGradient', barWidth, barHeight);
  const ctx = gradientCanvas.getContext();
  const grad = ctx.createLinearGradient(0, 0, barWidth, 0);
  grad.addColorStop(0, '#00ff00');
  grad.addColorStop(1, '#ff0000');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, barWidth, barHeight);
  gradientCanvas.refresh();

  powerMeter = this.add.image(fixedX, fixedY, 'powerGradient')
    .setOrigin(0.5, 0.2).setScrollFactor(0).setDepth(98);

  this.add.text(fixedX, fixedY + 30, 'POWER', {
    fontSize: '20px',
    fill: '#ffffff',
    fontFamily: 'Arial'
  }).setOrigin(0.5).setScrollFactor(0).setDepth(100);

  needle = this.add.rectangle(fixedX - barWidth / 2, fixedY, 6, 20, 0x000000)
    .setOrigin(0.5, 0.2).setScrollFactor(0).setDepth(99);

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

  //add surfaces (unchanged)
  addSurface(this, 250, 4000, 500, 40, 0x654321, 0.4, 2.5);
  addSurface(this, 10, 2000, 20, 4000, 0x8888ff, 0.4, 0.5);
  addSurface(this, 490, 2000, 20, 4000, 0x8888ff, 0.4, 0.5);
  addSurface(this, 250, 3950, 200, 20, 0x00ff00, 0.2, 0.95);
  addSurface(this, 450, 3750, 200, 20, 0xaaaaaa, 0.6, 0.8);
  addSurface(this, 150, 3550, 200, 20, 0x000fff, 0.8, 0.1);
  addSurface(this, 350, 3350, 200, 20, 0x996633, 0.1, 1.2);
  addSurface(this, 250, 3150, 200, 20, 0x00ffcc, 1.2, 0.6);

  //update directionVector on pointer move (world cords)
  this.input.on('pointermove', pointer => {
    if (!canThrow) return;
    const worldPoint = pointer.positionToCamera(this.cameras.main);
    directionVector = new Phaser.Math.Vector2(
      worldPoint.x - player.x,
      worldPoint.y - player.y
    ).normalize();
  });

  //throw the player on pointer down
  this.input.on('pointerdown', () => {
    if (!canThrow) return;
    canThrow = false;
    player.body.setVelocity(
      directionVector.x * 300 * powerLevel,
      directionVector.y * 800 * powerLevel
    );
  });

  //move pupils based on pointer position on screen
  this.input.on('pointermove', pointer => {
    //convert pointer world position to screen coordinates
    const pointerScreenX = pointer.x;
    const pointerScreenY = pointer.y;

    //calculate pupil offsets relative to eye positions
    const dxL = Phaser.Math.Clamp(pointerScreenX - this.cameras.main.worldView.x - (player.x - eyeOffsetX), -maxPupilOffset, maxPupilOffset);
    const dyL = Phaser.Math.Clamp(pointerScreenY - this.cameras.main.worldView.y - (player.y + eyeOffsetY), -maxPupilOffset, maxPupilOffset);
    leftPupil.setPosition(leftEye.x + dxL, leftEye.y + dyL);

    const dxR = Phaser.Math.Clamp(pointerScreenX - this.cameras.main.worldView.x - (player.x + eyeOffsetX), -maxPupilOffset, maxPupilOffset);
    const dyR = Phaser.Math.Clamp(pointerScreenY - this.cameras.main.worldView.y - (player.y + eyeOffsetY), -maxPupilOffset, maxPupilOffset);
    rightPupil.setPosition(rightEye.x + dxR, rightEye.y + dyR);
  });
}

function update() {
  //slow down player velocity gradually
  player.body.setVelocity(player.body.velocity.x * 0.98, player.body.velocity.y * 0.98);

  if (player.body.speed < 5) {
    player.body.setVelocity(0, 0);
  }
  if (player.body.speed < 3) {
    canThrow = true;
  }

  //keep eyes and pupils positioned relative to player
  const eyeOffsetX = 18;
  const eyeOffsetY = -10;
  leftEye.setPosition(player.x - eyeOffsetX, player.y + eyeOffsetY);
  rightEye.setPosition(player.x + eyeOffsetX, player.y + eyeOffsetY);
  
  //the pupils positions are updated in pointermove no need to update here
}

function addSurface(scene, x, y, w, h, color, bounce, friction) {
  let rect = scene.add.rectangle(x, y, w, h, color).setOrigin(0.5);
  scene.physics.add.existing(rect, true);
  scene.physics.add.collider(player, rect);
  surfaces.push({ rect, bounce, friction });
}
