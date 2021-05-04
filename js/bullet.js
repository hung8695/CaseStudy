const CHIEU_RONG_VIEN_DAN=40;
const CHIEU_DAI_VIEN_DAN=40;
const TOC_DO_DAN_BAY=10;
const SAT_THUONG_VIEN_DAN=20;
const IMG_BULLET="../image/dan.png"
class Bullet {
    constructor( x, y) {
        this.img = new Image();
        this.img.src = IMG_BULLET;
        this.x = x;
        this.y = y;
        this.width = CHIEU_RONG_VIEN_DAN;
        this.height = CHIEU_DAI_VIEN_DAN;
        this.speed = TOC_DO_DAN_BAY;
        this.dmg = SAT_THUONG_VIEN_DAN;
    }

    drawBullet() {
        context.drawImage(this.img, this.x, this.y,this.width,this.height)
    }
    moveBullet(){
        this.x+=this.speed;
    }
}
