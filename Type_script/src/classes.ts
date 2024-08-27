class CarModel{
    carId: string;
    carName: string;

    /// THIS IS THE CONSTRUCTOR METHOD
    constructor(carId:string,carName:string){
        this.carId = carId;
        this.carName = carName;
    }

    /// THIS IS THE METHOD TO PRINT CNSTRUCTOR DATA
    getNewCar() : void{
        console.log(this.carId,this.carName,);
        console.log("print the car details data")
    }

    ///USING GETTER AND SETTER FOR PRINT PRIVATE TYPE
    protected creatorUid! : string;

    ///GET METHOD HARE
    get getUID() : string{
        return this.creatorUid;
    }

    /// SET METHOD HARE
    set setUID(uid:string){
        this.creatorUid = uid;
    }
 }

 ///
 class paidPost extends CarModel{
    price: string;

    /// CONSTRUCTOR
     constructor(price:string,carId:string,carName:string){
         super(carId,carName);
         this.price = price;
     }

     adminPaidPost() : void{
         console.log(this.price);
         console.log(this.carId);
         console.log(this.carName);
         console.log(this.creatorUid);
     }
 }

let post = new CarModel("KIY124","buggati");
console.log(post);
post.getNewCar();
post.setUID = "yuvi";
console.log(post.getUID)