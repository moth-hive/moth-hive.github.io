class GameScene extends Phaser.Scene {
	constructor() {
		super("gameScene");
	}
	
	create(){
		this.scale = 4;
		
		//Creates the background room
		this.background = this.add.image(config.width / 2, config.height / 2, "room");
		//this.background.setDisplaySize(config.width, config.height);
		
		//Creates the player image
		this.player = this.add.sprite(config.width / 2, config.height / 2, "player");
		
		this.player.play("playerDown_anim");
		
		this.cursorKeys = this.input.keyboard.createCursorKeys();
		
		var camera = this.cameras.main.setZoom(this.scale);

		/*
		this.add.text(20, 20, "Finished Loading", {
			font: "25px Arial",
			fill: "yellow"
			});
		*/
	}
	
	update(){
		this.movePlayerManager();
	}
	
	movePlayerManager(){
		if(this.cursorKeys.left.isDown){
			this.player.x -= 1;
			this.player.play("playerLeft_anim");
		} if(this.cursorKeys.right.isDown){
			this.player.x += 1;
			this.player.play("playerRight_anim");
		} if(this.cursorKeys.up.isDown){
			this.player.y -= 1;
			this.player.play("playerUp_anim");
		} if(this.cursorKeys.down.isDown){
			this.player.y += 1;
			this.player.play("playerDown_anim");
		}
	}
	
}