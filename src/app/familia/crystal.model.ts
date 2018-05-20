export class Crystal {
    type: string;
    name: string;
    risk: string;
    describe: string;
    img: string;

    constructor(type: string, name: string, risk: string, describe: string, img: string) {
        this.type = type;
        this.name = name;
        this.risk = risk;
        this.describe = describe;
        this.img = img;
    }
  }
  