export class Estrategia {
    type: string;
    describe: string;
    img:string;

    constructor(type: string, describe: string, img: string) {
        this.type = type;
        this.describe = describe;
        this.img = img;
    }
  }