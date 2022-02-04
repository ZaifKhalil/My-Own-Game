var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["826ec79a-3f61-4b0e-a339-a614e0c13de5","75b803ea-c578-4d63-9d18-afbb8dea9a8f"],"propsByKey":{"826ec79a-3f61-4b0e-a339-a614e0c13de5":{"name":"soccer_bw_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"75b803ea-c578-4d63-9d18-afbb8dea9a8f":{"name":"video_game_controller_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Gy0gwj2P1IzLIO0D6ZGfPVgtxfpffxWe/category_household_objects/video_game_controller.png","frameSize":{"x":98,"y":63},"frameCount":1,"looping":true,"frameDelay":2,"version":"Gy0gwj2P1IzLIO0D6ZGfPVgtxfpffxWe","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":98,"y":63},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Gy0gwj2P1IzLIO0D6ZGfPVgtxfpffxWe/category_household_objects/video_game_controller.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Gamestate = "play";
var controller = createSprite(330, 30);
controller.setAnimation("video_game_controller_1");
var controller2 = createSprite(70, 30);
controller2.setAnimation("video_game_controller_1");
var controller3 = createSprite(200, 350);
var ball = createSprite(200, 150,20,20);
controller3.setAnimation("video_game_controller_1");
controller.velocityY = 4.5;
controller2.velocityY = 4.5;
controller3.velocityY = -4.5;
ball.setAnimation("soccer_bw_1");
if (keyDown("space")) {
  ball.velocityX = 2;
  ball.velocityY = 4;
}
ball.scale = 0.1;
playSound("assets/category_loops/show_me_a_hero_middle_loop.mp3", true);
function draw() {
  background("white");
  background("white");
  noStroke();
  if (ball.isTouching(controller2)||
  ball.isTouching(controller3)||
  ball.isTouching(controller)){
    ball.destroy();
    controller.destroy();
    controller2.destroy();
    controller3.destroy();
    Gamestate = "end";
  }
  if (Gamestate==="end") {
    textSize(90);
    stroke("blue");
    fill("Red");
    text("You Lose!", 0, 200);
    stopSound("assets/category_loops/show_me_a_hero_middle_loop.mp3");
  }
  if (keyDown("up")) {
    ball.y = ball.y-2.5;
  }
  if (keyDown("down")) {
    ball.y = ball.y+2.5;
  }
  if (keyDown("right")) {
    ball.x = ball.x+2.5;
  }
  if (keyDown("left")) {
    ball.x = ball.x-2.5;
  }
  createEdgeSprites();
  controller.bounceOff(bottomEdge);
  controller2.bounceOff(bottomEdge);
  controller.bounceOff(topEdge);
  controller2.bounceOff(topEdge);
  controller3.bounceOff(bottomEdge);
  controller3.bounceOff(topEdge);
  drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
