export default function bootState(){
    return{
        preload: function(){
            this.load.image('background', 'assets/background.png');
            this.load.image('preloader', 'assets/preloader.png');
        },
    
        create: function(){
            // Ratio
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 480;
            this.scale.minHeight = 320;
            this.scale.maxWidth = 960;
            this.scale.maxHeight = 640;
    
            // Center canvas
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
    
            // Block portrait on mobile devices
            if(!this.game.device.desktop){
                this.scale.forceOrientation(true, false);
                this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
                this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
            }
    
            // Start Preloader
            this.scale.setScreenSize(true);
            this.game.state.start('Preloader');
        },
    
        enterIncorrectOrientation: function(){
            Game.orientated = false;
            document.getElementById('orientation').style.display = 'block';
            this.game.paused = true;
        },
    
        leaveIncorrectOrientation: function(){
            Game.orientated = true;
            this.game.paused = false;
            this.scale.setScreenSize(true);
            document.getElementById('orientation').style.display = 'none';
        }
    }
}