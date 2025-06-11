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
