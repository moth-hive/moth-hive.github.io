class BootScene extends Phaser.Scene {
	constructor() {
		super("bootScene");
	}
	

	preload() {
		this.load.image("room", "assets/images/room.png");
		
		//Loads player sprites
		this.load.spritesheet("playerDown", "assets/spritesheets/playerDown.png", {
			frameWidth: 12,
			frameHeight: 16
		});
		
		this.load.spritesheet("playerUp", "assets/spritesheets/playerUp.png", {
			frameWidth: 12,
			frameHeight: 16
		});
		
		this.load.spritesheet("playerLeft", "assets/spritesheets/playerLeft.png", {
			frameWidth: 12,
			frameHeight: 16
		});
		
		this.load.spritesheet("playerRight", "assets/spritesheets/playerRight.png", {
			frameWidth: 12,
			frameHeight: 16
		});
		
		
		
		/*
		//Loading bar. Currently breaks things
		const progressBar = this.add.graphics();
		const progressBox = this.add.graphics();
		progressBox.fillStyle(0x000000, 1);
		progressBox.fillRect(0, this.sys.game.config.height/2, this.sys.game.config.width, 60);
		
		//Register a load progress event to show a load bar
		this.load.on('progress', (value) {
			console.log(value);
			progress.clear();
			progress.fillStyle(0xffffff, 1);
			progress.fillRect(10, this.sys.game.config.height/2 + 10, (this.sys.game.config.width + 20)* value, 80);
		});
		
		this.load.on('fileprogress', (file) {
			console.log(file.src);
		});
		
		this.load.on('complete', () {
			console.log('complete');
			progressBar.destroy();
			progressBox.destroy();
		});
		*/
	}

	
	create(){
		//Creates the animations
		this.anims.create({
			key: "playerDown_anim",
			frames: this.anims.generateFrameNumbers("playerDown"),
			frameRate: 10,
			repeat: -1
		});
		
		this.anims.create({
			key: "playerUp_anim",
			frames: this.anims.generateFrameNumbers("playerUp"),
			frameRate: 10,
			repeat: -1
		});
		
		this.anims.create({
			key: "playerLeft_anim",
			frames: this.anims.generateFrameNumbers("playerLeft"),
			frameRate: 10,
			repeat: -1
		});
		
		this.anims.create({
			key: "playerRight_anim",
			frames: this.anims.generateFrameNumbers("playerRight"),
			frameRate: 10,
			repeat: -1
		});
		
		this.add.text(20, 20, "Loading...");
		this.scene.start("gameScene");
	}
}