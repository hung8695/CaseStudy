const DMG_EGG=5;
const IMG_EGG="trung.png";
const HP_EGG=10;
const WIDTH_EGG = 20;
const HEIGHT_EGG = 20;

class Egg{
    constructor(x,y) {
        this.x=x;
        this.y=y;
        this.dmg=DMG_EGG;
        this.img=new Image();
        this.img.src=IMG_EGG;
        this.hp=HP_EGG;
        // this.radian=0;
        this.width=WIDTH_EGG;
        this.height=HEIGHT_EGG;
    }
    drawEgg(){
        // context.save();
        // context.translate(this.x,this.y);
        // context.rotate(this.radian*(Math.PI/180));
        // context.translate(this.x/-2,this.y/-2);
        context.drawImage(this.img,this.x,this.y,this.width,this.height);

    }
    moveEgg(){
        // this.radian+=1*Math.PI/180;
        this.x-=1;
    }

}