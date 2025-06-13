//map definitions - separated from game logic
const MAPS = {
  // LEVEL 1: EASY - Simple platforms, no special mechanics
  easy: {
    name: "Easy Climb",
    worldBounds: { x: 0, y: -1470, width: 500, height: 3000 },
    playerStart: { x: 250, y: 1400 },
    platforms: [
      //ground Level
      { type: 'ground', x: 250, y: 1500, w: 500, h: 40, color: 0x654321, bounce: 0.4, friction: 4.0 },
      { type: 'wall', x: 10, y: 0, w: 20, h: 3000, color: 0x444444, bounce: 0.4, friction: 0.5 },
      { type: 'wall', x: 490, y: 0, w: 20, h: 3000, color: 0x444444, bounce: 0.4, friction: 0.5 },
      
      //easy climb with wide platforms
      { type: 'platform', x: 110, y: 1350, w: 167, h: 20, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'platform', x: 360, y: 1200, w: 160, h: 20, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'platform', x: 130, y: 1050, w: 150, h: 20, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'platform', x: 380, y: 900, w: 150, h: 20, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'platform', x: 250, y: 750, w: 180, h: 20, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      
      { type: 'platform', x: 120, y: 600, w: 140, h: 20, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'platform', x: 380, y: 450, w: 140, h: 20, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'platform', x: 200, y: 300, w: 160, h: 20, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'platform', x: 300, y: 150, w: 160, h: 20, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'platform', x: 180, y: 0, w: 140, h: 20, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      
      //rest platforms
      { type: 'safe', x: 350, y: -150, w: 180, h: 20, color: 0x228B22, bounce: 0.3, friction: 4.0 },
            //victory
      { type: 'victory', x: 250, y: -320, w: 500, h: 25, color: 0xFFD700, bounce: 0.0, friction: 3.0 }
    ],
    decorations: [
      { type: 'text', x: 250, y: 100, text: 'EASY COMPLETE!', style: { fontSize: '24px', fill: '#FFD700' } },
      { type: 'text', x: 250, y: -1520, text: 'Nice job! Try Medium next!', style: { fontSize: '16px', fill: '#FFD700' } }
    ]
  },

  // LEVEL 2: MEDIUM - Some narrow platforms, longer jumps
  medium: {
    name: "Medium Challenge",
    worldBounds: { x: 0, y: -2200, width: 500, height: 3700 },
    playerStart: { x: 250, y: 1400 },
    platforms: [
      //ground Level
      { type: 'ground', x: 250, y: 1500, w: 500, h: 40, color: 0x654321, bounce: 0.4, friction: 4.0 },
      { type: 'wall', x: 10, y: -500, w: 20, h: 3700, color: 0x444444, bounce: 0.4, friction: 0.5 },
      { type: 'wall', x: 490, y: -500, w: 20, h: 3700, color: 0x444444, bounce: 0.4, friction: 0.5 },
      
      //starting section - still forgiving
      { type: 'platform', x: 150, y: 1350, w: 130, h: 18, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'platform', x: 380, y: 1200, w: 120, h: 18, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'platform', x: 120, y: 1050, w: 130, h: 18, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'platform', x: 400, y: 900, w: 120, h: 18, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      
      //first narrow section
      { type: 'narrow', x: 200, y: 750, w: 100, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      { type: 'narrow', x: 420, y: 600, w: 90, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      { type: 'narrow', x: 150, y: 450, w: 85, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      { type: 'narrow', x: 380, y: 300, w: 95, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      
      //rest area
      { type: 'safe', x: 250, y: 150, w: 160, h: 20, color: 0x228B22, bounce: 0.3, friction: 4.0 },
      
      //mixed platforms
      { type: 'platform', x: 100, y: 0, w: 110, h: 18, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'narrow', x: 450, y: -150, w: 80, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      { type: 'platform', x: 180, y: -300, w: 100, h: 18, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'narrow', x: 420, y: -450, w: 75, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      { type: 'platform', x: 150, y: -600, w: 110, h: 18, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      
      //some bouncy fun
      { type: 'bouncy', x: 400, y: -750, w: 90, h: 15, color: 0x00ff00, bounce: 0.7, friction: 2.2 },
      { type: 'bouncy', x: 120, y: -900, w: 85, h: 15, color: 0x00ff00, bounce: 0.7, friction: 2.2 },
      { type: 'platform', x: 350, y: -1050, w: 100, h: 18, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      
      //final section
      { type: 'narrow', x: 180, y: -1200, w: 90, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      { type: 'narrow', x: 450, y: -1350, w: 75, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      { type: 'platform', x: 200, y: -1500, w: 100, h: 18, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'narrow', x: 400, y: -1650, w: 80, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      { type: 'platform', x: 150, y: -1800, w: 120, h: 18, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'narrow', x: 420, y: -1950, w: 70, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      { type: 'platform', x: 200, y: -2100, w: 110, h: 18, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      
      //victory
      { type: 'victory', x: 250, y: -2200, w: 180, h: 25, color: 0xFFD700, bounce: 0.0, friction: 3.0 }
    ],
    decorations: [
      { type: 'text', x: 250, y: -2250, text: 'MEDIUM COMPLETE!', style: { fontSize: '24px', fill: '#FFD700' } },
      { type: 'text', x: 250, y: -2220, text: 'Getting better! Try Hard mode!', style: { fontSize: '16px', fill: '#FFD700' } }
    ]
  },

  // LEVEL 3: HARD - Ice platforms, smaller platforms, bouncy sections
  hard: {
    name: "Hard Ascent",
    worldBounds: { x: 0, y: -2800, width: 500, height: 4300 },
    playerStart: { x: 250, y: 1400 },
    platforms: [
      //ground Level
      { type: 'ground', x: 250, y: 1500, w: 500, h: 40, color: 0x654321, bounce: 0.4, friction: 4.0 },
      { type: 'wall', x: 10, y: -1000, w: 20, h: 4300, color: 0x444444, bounce: 0.4, friction: 0.5 },
      { type: 'wall', x: 490, y: -1000, w: 20, h: 4300, color: 0x444444, bounce: 0.4, friction: 0.5 },
      
      //quick narrow start
      { type: 'narrow', x: 180, y: 1350, w: 100, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      { type: 'narrow', x: 400, y: 1200, w: 90, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      { type: 'narrow', x: 150, y: 1050, w: 85, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      
      //first ice section
      { type: 'ice', x: 420, y: 900, w: 95, h: 12, color: 0x87CEEB, bounce: 0.5, friction: 1.1 },
      { type: 'ice', x: 120, y: 750, w: 90, h: 12, color: 0x87CEEB, bounce: 0.5, friction: 1.1 },
      { type: 'ice', x: 380, y: 600, w: 85, h: 12, color: 0x87CEEB, bounce: 0.5, friction: 1.1 },
      { type: 'platform', x: 180, y: 450, w: 100, h: 15, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      
      //Bouncy chaos
      { type: 'bouncy', x: 450, y: 300, w: 80, h: 15, color: 0x00ff00, bounce: 0.8, friction: 2.0 },
      { type: 'bouncy', x: 100, y: 150, w: 75, h: 15, color: 0x00ff00, bounce: 0.8, friction: 2.0 },
      { type: 'bouncy', x: 400, y: 0, w: 85, h: 15, color: 0x00ff00, bounce: 0.8, friction: 2.0 },
      { type: 'safe', x: 200, y: -150, w: 120, h: 18, color: 0x228B22, bounce: 0.3, friction: 4.0 },
      
      //ice and narrow mix
      { type: 'ice', x: 450, y: -300, w: 70, h: 12, color: 0x87CEEB, bounce: 0.5, friction: 1.1 },
      { type: 'narrow', x: 120, y: -450, w: 80, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      { type: 'ice', x: 400, y: -600, w: 75, h: 12, color: 0x87CEEB, bounce: 0.5, friction: 1.1 },
      { type: 'narrow', x: 150, y: -750, w: 70, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      { type: 'ice', x: 420, y: -900, w: 80, h: 12, color: 0x87CEEB, bounce: 0.5, friction: 1.1 },
      
      //tiny platforms introduction
      { type: 'tiny', x: 180, y: -1050, w: 60, h: 12, color: 0xff6b6b, bounce: 0.1, friction: 3.5 },
      { type: 'tiny', x: 450, y: -1200, w: 55, h: 12, color: 0xff6b6b, bounce: 0.1, friction: 3.5 },
      { type: 'platform', x: 200, y: -1350, w: 90, h: 15, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      
      // more bouncy madness
      { type: 'bouncy', x: 420, y: -1500, w: 75, h: 15, color: 0x00ff00, bounce: 0.8, friction: 2.0 },
      { type: 'bouncy', x: 120, y: -1650, w: 80, h: 15, color: 0x00ff00, bounce: 0.8, friction: 2.0 },
      { type: 'ice', x: 380, y: -1800, w: 70, h: 12, color: 0x87CEEB, bounce: 0.5, friction: 1.1 },
      
      { type: 'tiny', x: 150, y: -1950, w: 65, h: 12, color: 0xff6b6b, bounce: 0.1, friction: 3.5 },
      { type: 'narrow', x: 450, y: -2100, w: 70, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      { type: 'ice', x: 180, y: -2250, w: 75, h: 12, color: 0x87CEEB, bounce: 0.5, friction: 1.1 },
      { type: 'tiny', x: 420, y: -2400, w: 50, h: 12, color: 0xff6b6b, bounce: 0.1, friction: 3.5 },
      { type: 'platform', x: 200, y: -2550, w: 85, h: 15, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'narrow', x: 400, y: -2700, w: 65, h: 15, color: 0x696969, bounce: 0.2, friction: 2.5 },
      
      //victory
      { type: 'victory', x: 250, y: -2800, w: 160, h: 25, color: 0xFFD700, bounce: 0.0, friction: 3.0 }
    ],
    decorations: [
      { type: 'text', x: 250, y: -2850, text: 'HARD COMPLETE!', style: { fontSize: '24px', fill: '#FFD700' } },
      { type: 'text', x: 250, y: -2820, text: 'Impressive! Ready for Extreme?', style: { fontSize: '16px', fill: '#FFD700' } }
    ]
  },

  // LEVEL 4: EXTREME - All mechanics, very challenging
  extreme: {
    name: "Extreme Tower",
    worldBounds: { x: 0, y: -3200, width: 500, height: 4700 },
    playerStart: { x: 250, y: 1400 },
    platforms: [
      //ground Level
      { type: 'ground', x: 250, y: 1500, w: 500, h: 40, color: 0x654321, bounce: 0.4, friction: 4.0 },
      { type: 'wall', x: 10, y: -1200, w: 20, h: 4700, color: 0x444444, bounce: 0.4, friction: 0.5 },
      { type: 'wall', x: 490, y: -1200, w: 20, h: 4700, color: 0x444444, bounce: 0.4, friction: 0.5 },
      
      //immediate challenge
      { type: 'tiny', x: 180, y: 1350, w: 60, h: 12, color: 0xff6b6b, bounce: 0.1, friction: 3.5 },
      { type: 'ice', x: 420, y: 1200, w: 70, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 1.05 },
      { type: 'tiny', x: 120, y: 1050, w: 55, h: 12, color: 0xff6b6b, bounce: 0.1, friction: 3.5 },
      { type: 'bouncy', x: 400, y: 900, w: 65, h: 15, color: 0x00ff00, bounce: 0.9, friction: 1.8 },
      
      //super bouncy introduction
      { type: 'super_bouncy', x: 150, y: 750, w: 70, h: 15, color: 0xff1493, bounce: 1.2, friction: 1.5 },
      { type: 'ice', x: 450, y: 600, w: 60, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 1.05 },
      { type: 'tiny', x: 180, y: 450, w: 50, h: 12, color: 0xff6b6b, bounce: 0.1, friction: 3.5 },
      { type: 'super_bouncy', x: 400, y: 300, w: 65, h: 15, color: 0xff1493, bounce: 1.2, friction: 1.5 },
      
      //brief rest
      { type: 'safe', x: 250, y: 150, w: 100, h: 18, color: 0x228B22, bounce: 0.3, friction: 4.0 },
      
      //mixed hell begins
      { type: 'ice', x: 450, y: 0, w: 55, h: 12, color: 0x87CEEB, bounce: 0.7, friction: 1.03 },
      { type: 'tiny', x: 120, y: -150, w: 45, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 4.0 },
      { type: 'super_bouncy', x: 380, y: -300, w: 60, h: 15, color: 0xff1493, bounce: 1.3, friction: 1.2 },
      { type: 'ice', x: 150, y: -450, w: 65, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 1.05 },
      { type: 'tiny', x: 450, y: -600, w: 40, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 4.0 },
      { type: 'bouncy', x: 180, y: -750, w: 70, h: 15, color: 0x00ff00, bounce: 0.8, friction: 2.0 },
      
      { type: 'super_bouncy', x: 420, y: -900, w: 55, h: 15, color: 0xff1493, bounce: 1.4, friction: 1.0 },
      { type: 'ice', x: 120, y: -1050, w: 60, h: 12, color: 0x87CEEB, bounce: 0.7, friction: 1.03 },
      { type: 'tiny', x: 400, y: -1200, w: 45, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 4.2 },
      { type: 'super_bouncy', x: 180, y: -1350, w: 65, h: 15, color: 0xff1493, bounce: 1.3, friction: 1.2 },
      { type: 'ice', x: 450, y: -1500, w: 50, h: 12, color: 0x87CEEB, bounce: 0.8, friction: 1.02 },
      
      //Gauntlet section
      { type: 'tiny', x: 150, y: -1650, w: 40, h: 8, color: 0xff6b6b, bounce: 0.1, friction: 4.5 },
      { type: 'super_bouncy', x: 420, y: -1800, w: 50, h: 12, color: 0xff1493, bounce: 1.5, friction: 0.8 },
      { type: 'ice', x: 180, y: -1950, w: 55, h: 10, color: 0x87CEEB, bounce: 0.8, friction: 1.02 },
      { type: 'tiny', x: 450, y: -2100, w: 35, h: 8, color: 0xff6b6b, bounce: 0.1, friction: 4.8 },
      { type: 'super_bouncy', x: 120, y: -2250, w: 60, h: 12, color: 0xff1493, bounce: 1.4, friction: 0.5 },
      { type: 'ice', x: 400, y: -2400, w: 50, h: 10, color: 0x87CEEB, bounce: 0.8, friction: 1.02 },
      
      //final approach
      { type: 'tiny', x: 200, y: -2550, w: 45, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 4.0 },
      { type: 'super_bouncy', x: 450, y: -2700, w: 55, h: 12, color: 0xff1493, bounce: 1.3, friction: 1.0 },
      { type: 'ice', x: 150, y: -2850, w: 60, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 1.05 },
      { type: 'tiny', x: 420, y: -3000, w: 40, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 4.2 },
      { type: 'narrow', x: 200, y: -3150, w: 70, h: 12, color: 0x696969, bounce: 0.2, friction: 3.5 },
      
      //victory
      { type: 'victory', x: 250, y: -3200, w: 140, h: 25, color: 0xFFD700, bounce: 0.0, friction: 3.0 }
    ],
    decorations: [
      { type: 'text', x: 250, y: -3250, text: 'EXTREME COMPLETE!', style: { fontSize: '24px', fill: '#FFD700' } },
      { type: 'text', x: 250, y: -3220, text: 'You are truly skilled! Try Fling Tower!', style: { fontSize: '16px', fill: '#FFD700' } }
    ]
  },

  fling: {
    name: "Fling Tower",
    worldBounds: { x: 0, y: -3500, width: 500, height: 8000 }, //much taller tower
    playerStart: { x: 250, y: 4300 },
    platforms: [
      // Ground Level
      { type: 'ground', x: 250, y: 4400, w: 500, h: 40, color: 0x654321, bounce: 0.4, friction: 3.5 },
      { type: 'wall', x: 10, y: 1000, w: 20, h: 6800, color: 0x444444, bounce: 0.4, friction: 0.5 },
      { type: 'wall', x: 490, y: 1000, w: 20, h: 6800, color: 0x444444, bounce: 0.4, friction: 0.5 },
      
      //tutorial Section (Level 1)
      { type: 'platform', x: 150, y: 4250, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 2.0 },
      { type: 'platform', x: 350, y: 4100, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 2.0 },
      { type: 'platform', x: 100, y: 3950, w: 100, h: 15, color: 0x8B4513, bounce: 0.3, friction: 2.0 },
      { type: 'platform', x: 400, y: 3800, w: 100, h: 15, color: 0x8B4513, bounce: 0.3, friction: 2.0 },
      { type: 'platform', x: 200, y: 3650, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 2.0 },
      
      //first Challenge - Narrow Platforms (Level 2)
      { type: 'narrow', x: 450, y: 3500, w: 70, h: 12, color: 0x696969, bounce: 0.2, friction: 2.2 },
      { type: 'narrow', x: 80, y: 3350, w: 60, h: 12, color: 0x696969, bounce: 0.2, friction: 2.2 },
      { type: 'narrow', x: 420, y: 3200, w: 65, h: 12, color: 0x696969, bounce: 0.2, friction: 2.2 },
      { type: 'narrow', x: 150, y: 3050, w: 70, h: 12, color: 0x696969, bounce: 0.2, friction: 2.2 },
      { type: 'narrow', x: 380, y: 2900, w: 80, h: 12, color: 0x696969, bounce: 0.2, friction: 2.2 },
      { type: 'platform', x: 200, y: 2750, w: 100, h: 15, color: 0x8B4513, bounce: 0.3, friction: 2.0 },
      
      //bouncy Section (Level 3)
      { type: 'bouncy', x: 400, y: 2600, w: 90, h: 15, color: 0x00ff00, bounce: 0.8, friction: 2.1 },
      { type: 'bouncy', x: 120, y: 2450, w: 80, h: 15, color: 0x00ff00, bounce: 0.8, friction: 2.1 },
      { type: 'bouncy', x: 380, y: 2300, w: 85, h: 15, color: 0x00ff00, bounce: 0.8, friction: 2.1 },
      { type: 'bouncy', x: 180, y: 2150, w: 90, h: 15, color: 0x00ff00, bounce: 0.8, friction: 2.1 },
      { type: 'safe', x: 350, y: 2000, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 2.0 },
      
      //ice Hell (Level 4)
      { type: 'ice', x: 150, y: 1850, w: 100, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 1.05 },
      { type: 'ice', x: 420, y: 1700, w: 80, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 1.05 },
      { type: 'ice', x: 100, y: 1550, w: 90, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 1.05 },
      { type: 'ice', x: 400, y: 1400, w: 70, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 1.05 },
      { type: 'ice', x: 200, y: 1250, w: 85, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 1.05 },
      { type: 'ice', x: 450, y: 1100, w: 60, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 1.05 },
      { type: 'safe', x: 180, y: 950, w: 140, h: 15, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      
      //precision Hell (Level 5)
      { type: 'tiny', x: 450, y: 800, w: 45, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 4.5 },
      { type: 'tiny', x: 50, y: 650, w: 40, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 4.5 },
      { type: 'tiny', x: 450, y: 500, w: 35, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 4.5 },
      { type: 'tiny', x: 80, y: 350, w: 50, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 4.5 },
      { type: 'tiny', x: 420, y: 200, w: 40, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 4.5 },
      { type: 'tiny', x: 120, y: 50, w: 45, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 4.5 },
      { type: 'safe', x: 350, y: -100, w: 100, h: 15, color: 0x8B4513, bounce: 0.3, friction: 4.0 },
      
      //super Bouncy Castle (Level 6)
      { type: 'super_bouncy', x: 180, y: -250, w: 80, h: 15, color: 0xff1493, bounce: 1.3, friction: 3.2 },
      { type: 'super_bouncy', x: 400, y: -400, w: 70, h: 15, color: 0xff1493, bounce: 1.3, friction: 3.2 },
      { type: 'super_bouncy', x: 120, y: -550, w: 75, h: 15, color: 0xff1493, bounce: 1.3, friction: 3.2 },
      { type: 'super_bouncy', x: 420, y: -700, w: 65, h: 15, color: 0xff1493, bounce: 1.3, friction: 3.2 },
      { type: 'super_bouncy', x: 200, y: -850, w: 80, h: 15, color: 0xff1493, bounce: 1.3, friction: 3.2 },
      { type: 'safe', x: 350, y: -1000, w: 100, h: 15, color: 0x8B4513, bounce: 0.3, friction: 1.0 },
      
      //mixed Chaos (Level 7)
      { type: 'ice', x: 150, y: -1150, w: 80, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 1.05 },
      { type: 'tiny', x: 450, y: -1300, w: 40, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 2.5 },
      { type: 'bouncy', x: 100, y: -1450, w: 70, h: 15, color: 0x00ff00, bounce: 0.8, friction: 2.1 },
      { type: 'super_bouncy', x: 420, y: -1600, w: 60, h: 15, color: 0xff1493, bounce: 1.2, friction: 0.2 },
      { type: 'narrow', x: 180, y: -1750, w: 65, h: 12, color: 0x696969, bounce: 0.2, friction: 4.2 },
      { type: 'ice', x: 400, y: -1900, w: 70, h: 12, color: 0x87CEEB, bounce: 0.6, friction: 1.05 },
      { type: 'safe', x: 200, y: -2050, w: 120, h: 15, color: 0x8B4513, bounce: 0.3, friction: 2.0 },
      
      //the Gauntlet (Level 8)
      { type: 'tiny', x: 450, y: -2200, w: 35, h: 8, color: 0xff6b6b, bounce: 0.1, friction: 3.8 },
      { type: 'super_bouncy', x: 80, y: -2350, w: 50, h: 12, color: 0xff1493, bounce: 1.4, friction: 0.1 },
      { type: 'ice', x: 420, y: -2500, w: 60, h: 10, color: 0x87CEEB, bounce: 0.7, friction: 1.03 },
      { type: 'tiny', x: 120, y: -2650, w: 40, h: 8, color: 0xff6b6b, bounce: 0.1, friction: 4.8 },
      { type: 'super_bouncy', x: 380, y: -2800, w: 55, h: 12, color: 0xff1493, bounce: 1.5, friction: 0.1 },
      { type: 'ice', x: 150, y: -2950, w: 50, h: 10, color: 0x87CEEB, bounce: 0.8, friction: 102 },
      { type: 'safe', x: 350, y: -3100, w: 100, h: 15, color: 0x8B4513, bounce: 0.3, friction: 2.0 },
      
      //final Approach (Level 9)
      { type: 'narrow', x: 180, y: -3250, w: 60, h: 12, color: 0x696969, bounce: 0.2, friction: 4.2 },
      { type: 'tiny', x: 420, y: -3400, w: 45, h: 10, color: 0xff6b6b, bounce: 0.1, friction: 3.5 },
      
      //the Summit (Level 10)
      { type: 'victory', x: 250, y: -3500, w: 200, h: 25, color: 0xFFD700, bounce: 0.0, friction: 3.0 }
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
    playerStart: { x: 250, y: 1800 },
    platforms: [
      { type: 'ground', x: 250, y: 1900, w: 500, h: 40, color: 0x654321, bounce: 0.4, friction: 4.5 },
      { type: 'platform', x: 150, y: 1750, w: 220, h: 15, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'platform', x: 350, y: 1600, w: 220, h: 15, color: 0x8B4513, bounce: 0.3, friction: 3.0 },
      { type: 'victory', x: 250, y: 1500, w: 500, h: 10, color: 0xFFD700, bounce: 0.0, friction: 4.0 },
      
      //left wall
      { type: 'platform', x: 0, y: 1000, w: 20, h: 2000, color: 0x444444, bounce: 0.0, friction: 3.0 },
    
      // right wall
      { type: 'platform', x: 500, y: 1000, w: 20, h: 2000, color: 0x444444, bounce: 0.0, friction: 3.0 }
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
        x: 250,
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
          ? '\n3. And you jump and jump till\nyou reach the Yellow summit\n\n4.Try the buttons below to\nswitch maps\n\n5.GOOD LUCK!!!'
          : '\n\n3. ジャンプし続けて\n黄色山頂を目指しましょう\n\n4.下のボタンでマップを\n切り替えられます\n\n5.頑張って！!!',
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
      gravity: { y: 1000 },
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
let powerLabel;

let needleTween;

let leftEyebrow, rightEyebrow;

let currentMapKey = null;//map name hold

//menus option and state
let isPaused = false;
let pauseButton;
let pauseOverlay;


const game = new Phaser.Game(config);

function preload() {
  const scene = this;

  // Loading UI
  const loadingText = scene.add.text(
    scene.scale.width / 2, scene.scale.height / 2,
    'Loading...',
    { fontSize: '24px', fill: '#ffffff', fontFamily: 'Arial' }
  ).setOrigin(0.5).setScrollFactor(0);

  const progressBox = scene.add.rectangle(scene.scale.width / 2, scene.scale.height / 2 + 40, 300, 25, 0x222222).setOrigin(0.5);
  const progressBar = scene.add.rectangle(scene.scale.width / 2 - 150, scene.scale.height / 2 + 40, 0, 25, 0xffffff).setOrigin(0, 0.5);

  let loadComplete = false;
  let minDelayPassed = false;

  scene.load.on('progress', (value) => {
    progressBar.width = 300 * value;
  });

  // When assets are done loading
  scene.load.on('complete', () => {
    loadComplete = true;
    maybeContinue();
  });

  // 2 second delay using Phaser timer
  scene.time.delayedCall(2000, () => {
    minDelayPassed = true;
    maybeContinue();
  });

  function maybeContinue() {
    if (loadComplete && minDelayPassed) {
      loadingText.destroy();
      progressBar.destroy();
      progressBox.destroy();
      console.log('Loading screen finished');
    }
  }

  // Load your assets
  scene.load.image('forestBase', 'assets/8bit-jungle.jpg');
}


function create() {
  setupUI(this);
  setupPlayer(this);
  setupInput(this);

  //laoad the default map
  loadMap(this, 'tutorial');
}

//toggle pause and menu
function togglePause(scene) {
  isPaused = !isPaused;

  const isJapanese = currentLanguage === 'jp';

  const textLabels = {
    pause: isJapanese ? '再開' : 'RESUME',
    resume: isJapanese ? '一時停止' : 'PAUSE',
    restart: isJapanese ? '[ リスタート ]' : '[ RESTART ]',
    maps: {
      easy: isJapanese ? '[ イージー ]' : '[ EASY ]',
      medium: isJapanese ? '[ ミディアム ]' : '[ MEDIUM ]',
      hard: isJapanese ? '[ ハード ]' : '[ HARD ]',
      extreme: isJapanese ? '[ エクストリーム ]' : '[ EXTREME ]',
      fling: isJapanese ? '[ フリングタワー ]' : '[ FLING TOWER ]',
      tutorial: isJapanese ? '[ チュートリアル ]' : '[ TUTORIAL ]'
    }
  };
  if (isPaused) {
    scene.physics.world.pause();
    scene.cameras.main.stopFollow();

    //change PAUSE to RESUME
    if (pauseButton) pauseButton.setText(textLabels.pause);

    //overlay
    pauseOverlay = scene.add.rectangle(
      0, 0, scene.scale.width, scene.scale.height, 0x000000, 0.6
    ).setOrigin(0).setScrollFactor(0).setDepth(1999);

    pauseOverlay.menuItems = [];

    const centerX = scene.scale.width / 2;
    let startY = (scene.scale.height / 2) - (320 / 2); // vertically center


    //restart button
    const restartBtn = scene.add.text(centerX, startY, textLabels.restart, textStyle())
      .setOrigin(0.5).setInteractive({ useHandCursor: true }).setScrollFactor(0).setDepth(2000)
      .on('pointerdown', () => {
        hasWon = false;
        togglePause(scene);
        loadMap(scene, currentMapKey);

      });      
    pauseOverlay.menuItems.push(restartBtn);
    startY += 50;

    //map buttons
    const mapKeys = ['easy', 'medium', 'hard', 'extreme', 'fling', 'tutorial'];
    mapKeys.forEach(key => {
      const btn = scene.add.text(centerX, startY, textLabels.maps[key], textStyle())
        .setOrigin(0.5).setInteractive({ useHandCursor: true }).setScrollFactor(0).setDepth(2000)
        .on('pointerdown', () => {
          togglePause(scene);
          loadMap(scene, key);
        });
      pauseOverlay.menuItems.push(btn);
      startY += 40;
    });

    //add RESUME button at the bottom
    const resumeBtn = scene.add.text(centerX, startY + 10, isJapanese ? '[ 再開 ]' : '[ RESUME ]', textStyle())
    .setOrigin(0.5).setInteractive({ useHandCursor: true }).setScrollFactor(0).setDepth(2000)
    .on('pointerdown', () => {
      togglePause(scene);
    });
  pauseOverlay.menuItems.push(resumeBtn);


  } else {
    scene.physics.world.resume();
    scene.cameras.main.startFollow(player, true, 0.1, 0.1);
    if (pauseButton) pauseButton.setText(textLabels.resume);

    //destroy pause menu
    if (pauseOverlay) {
      pauseOverlay.menuItems.forEach(item => item.destroy());
      pauseOverlay.destroy();
      pauseOverlay = null;
    }
  }
}

//text style helper
function textStyle() {
  return {
    fontSize: '20px',
    fill: '#ffffff',
    fontFamily: 'Arial',
    stroke: '#000',
    strokeThickness: 3
  };
}


function setupUI(scene) {
  const barWidth = 100;
  const barHeight = 20;
  const screenWidth = scene.scale.width;
  const screenHeight = scene.scale.height;
  const fixedX = screenWidth / 2;
  const fixedY = screenHeight - 50;

  //power meter
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

  //powertext
  powerLabel = scene.add.text(fixedX, fixedY + 30,
    currentLanguage === 'en' ? 'POWER' : 'パワー', {
      fontSize: '20px',
      fill: '#ffffff',
      fontFamily: 'Arial'
  }).setOrigin(0.5).setScrollFactor(0).setDepth(100);  
  

  needle = scene.add.rectangle(fixedX - barWidth / 2, fixedY, 6, 20, 0x000000)
    .setOrigin(0.5, 0.2).setScrollFactor(0).setDepth(99);

  needleTween = scene.tweens.add({
    targets: needle,
    x: { from: fixedX - barWidth / 2, to: fixedX + barWidth / 2 },
    duration: 500,
    yoyo: true,
    repeat: -1,
    onUpdate: (tween, target) => {
      powerLevel = Phaser.Math.Linear(0.3, 2, (target.x - (fixedX - barWidth / 2)) / barWidth);
    }
  });
    

  //add map selection UI
  const buttonStyle = {
    fontSize: '18px',
    fill: '#ffffff',
    fontFamily: 'Arial',
    stroke: '#000',
    strokeThickness: 3
  };

  
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
    if(hasWon) return;
    currentLanguage = (currentLanguage === 'en') ? 'jp' : 'en';
    langBtn.setText(currentLanguage === 'en' ? '[日本語]' : '[ENG]');
  
    //update POWER label
    if (powerLabel) {
      powerLabel.setText(currentLanguage === 'en' ? 'POWER' : 'パワー');
    }

    //reload map to update decorations
    if (currentMap === MAPS.tutorial) {
      loadMap(scene, 'tutorial');
    } else if (currentMap === MAPS.fling) {
      loadMap(scene, 'fling');
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
  
  //eyebrows
  //left eyebrow (above left pupil, 11 o'clock arc)
  leftEyebrow = scene.add.graphics().setDepth(5);
leftEyebrow.lineStyle(2, 0x000000, 1);
leftEyebrow.beginPath();
leftEyebrow.arc(0, 0, 6, Phaser.Math.DegToRad(300), Phaser.Math.DegToRad(70), true);
leftEyebrow.strokePath();



  //right eyebrow (above right pupil, 1 o'clock arc)
  rightEyebrow = scene.add.graphics().setDepth(5);
  rightEyebrow.lineStyle(2, 0x000000, 1);
  rightEyebrow.beginPath();
  rightEyebrow.arc(0, 0, 6, Phaser.Math.DegToRad(20), Phaser.Math.DegToRad(200), true); // ⮕ CLOCKWISE
  rightEyebrow.strokePath();
  

    

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

  //eyebrow position
  if (leftEyebrow) {
    leftEyebrow.setPosition(leftPupil.x, leftPupil.y - 6);
  }
  if (rightEyebrow) {
    rightEyebrow.setPosition(rightPupil.x, rightPupil.y - 6);
  }
  
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
  currentMapKey = mapName;
  
  //set world bounds
  const bounds = mapData.worldBounds;
  scene.physics.world.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);
  scene.cameras.main.setBounds(bounds.x, bounds.y, bounds.width, bounds.height);

  //position player at start
  player.setPosition(mapData.playerStart.x, mapData.playerStart.y);
  player.body.setVelocity(0, 0);
  canThrow = true;
  
  ////pause Button (Top Left)
  //reset pause state
  isPaused = false;
  if (pauseOverlay) {
    pauseOverlay.destroy();
    pauseOverlay = null;
  }
  if (pauseButton) pauseButton.destroy();

  //add Pause Button (Top Left)
  pauseButton = scene.add.text(20, 20, currentLanguage === 'jp' ? '一時停止' : 'PAUSE', {
    fontSize: '21px',
    fill: '#fff',
    fontFamily: 'Arial',
    stroke: '#000',
    strokeThickness: 3
    })
    .setInteractive({ useHandCursor: true })
    .setScrollFactor(0).setDepth(999)
    .on('pointerdown', () => togglePause(scene));
  


  //reset direction vector
  directionVector = new Phaser.Math.Vector2(0, -1);

  //load background
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
  
  scene.add.image(250, 1500, 'forestBase')
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

//loop
  //Player physics
  function update() {
    const onGround = player.body.blocked.down || player.body.touching.down;
  
    //air control
    if (!onGround) {
      player.body.setVelocity(
        player.body.velocity.x * 0.985,
        player.body.velocity.y * 0.98
      );
    } else {
      player.body.setVelocity(
        player.body.velocity.x * 0.8,
        player.body.velocity.y * 0.98
      );
    }
  
    //reset launch ability if player slows down
    if (player.body.speed < 9) {
      player.body.setVelocity(0, 0);
      canThrow = true;
    }
  
    //needle logic
    if (!canThrow && needleTween?.isPlaying()) needleTween.pause();
    if (canThrow && needleTween && !needleTween.isPlaying()) needleTween.resume();
  
    updateEyePositions(this);
  
  //Victory
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

      const victoryText = currentLanguage === 'en'
        ? '🎉 BIG CONGRATULATIONS! 🎉\nYou won this map!'
        : '🎉 おめでとうございます！ 🎉\nこのマップをクリアしました！';
        const title = scene.add.text(centerX, centerY - 60, victoryText, {

        fontSize: '24px',
        fill: '#ffffff',
        fontFamily: 'Arial',
        align: 'center',
        stroke: '#000',
        strokeThickness: 4
      }).setOrigin(0.5).setScrollFactor(0).setDepth(1001);
      victoryUI.push(title);

      const menuLabel = currentLanguage === 'en' ? '[ MENU ]' : '[ メニュー ]';
      const menuBtn = scene.add.text(centerX, centerY + 10, menuLabel, {
        fontSize: '20px',
        fill: '#ffffff',
        fontFamily: 'Arial',
        stroke: '#000',
        strokeThickness: 2
      }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setScrollFactor(0).setDepth(1001)
        .on('pointerdown', () => {
        hasWon = false;
        togglePause(scene); //open pause menu
      });
      victoryUI.push(menuBtn);

      const restartLabel = currentLanguage === 'en' ? '[ Restart ]' : '[ リスタート ]';
      const restartBtn = scene.add.text(centerX, centerY + 50, restartLabel, {

        fontSize: '24px',
        fill: '#ffffff',
        fontFamily: 'Arial',
        stroke: '#000',
        strokeThickness: 2
      }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setScrollFactor(0).setDepth(1001)
        .on('pointerdown', () => {
          hasWon = false;
          loadMap(scene, currentMapKey);
        });
      victoryUI.push(restartBtn);
    }
  });
}


