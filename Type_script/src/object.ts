let User = {
    name:"Yuvaraj dekhane",
    id:"1234"
}

function getData(obj:{name:string,id:string,password?:number}){
    console.log(obj.name,obj.id);
}


function CheckData(id:number){
    if(id == 5){
        return true;
    }
    else{
        return false;
    }
}
function getDetails(id : string|number){
    if(typeof id == "string"){
        console.log(id.toUpperCase())
    }else{
        console.log(id);
    }
}

CheckData(5);
getDetails(23);
getData(User);
// getData(obj:{name:"MA",id:"123"});