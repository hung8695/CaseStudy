class Bullet {
    constructor(img, x, y, w, h) {
        this.img=new Image();
        this.img.src = img;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = 5;
        this.dmg = 10;
    }
    drawBullet(){
            context.drawImage(this.img,this.x,this.y,this.w,this.h)
    }
    moveBullet(){
        this.x-=this.speed;
    }
}
