export default function loadState() {
    return {
        preload: function () {
            // Background
            this.game.stage.backgroundColor = '#5e3f6b';
            this.background = this.game.add.tileSprite(0, 0, 480, 320, 'background');
            this.background.autoScroll(-100, -20);

            this.preloadBar = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'preloader');
            this.preloadBar.anchor.setTo(0.5, 0.5);
            this.load.setPreloadSprite(this.preloadBar);
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

            // Images
            this.load.image('title', 'assets/title.png');
            this.load.image('hero', 'assets/hero.png');
            this.load.image('pausePanel', 'assets/pause-panel.png');
            this.load.image('enemy1', 'assets/enemy1.png');
            this.load.image('explosion', 'assets/explosion.png');
            this.load.image('lives', 'assets/lives.png');
            this.load.image('shield', 'assets/shield.png');
            this.load.image('bullet', 'assets/bullet.png');
            this.load.image('laser', 'assets/laser.png');
            this.load.image('new', 'assets/new.png');

            // Spritesheets
            this.load.spritesheet('btnMenu', 'assets/btn-menu.png', 190, 49, 2);
            this.load.spritesheet('btn', 'assets/btn.png', 49, 49, 6);
            this.load.spritesheet('num', 'assets/num.png', 12, 11, 5);
            this.load.spritesheet('bonus', 'assets/bonus.png', 16, 16, 2);

            // Fonts
            this.load.bitmapFont('kenpixelblocks', 'assets/fonts/kenpixelblocks.png', 'assets/fonts/kenpixelblocks.fnt');
        },

        create: function () {
            this.preloadBar.cropEnabled = false;
        },

        update: function () {
            if (this.ready) {
                this.game.state.start('Menu');
            }
        },

        onLoadComplete: function () {
            this.ready = true;
        }
    }
}