const settingcogel=document.getElementById("settingIcon");
const settingcontentel=document.getElementById("settingContent");
let isdobopen=false;
const intialtextel=document.getElementById("intialtext");
const afterdobbuttonel=document.getElementById("afterdobbutton");
let dateofbirth;
const dobbuttonel= document.getElementById("dobButton")
const dobinputel =document.getElementById("dobInput");
const yearel=document.getElementById("year");
const monthel=document.getElementById("months");
const dayel=document.getElementById("day");
const hourel=document.getElementById("hour");
const minuteel=document.getElementById("minutes");
const secondel =document.getElementById("second");


const maketwodigit=(number)=>{
    return number>9? number:`0${number}`;

};




const toggledateofbirthselector=()=>{
    if(isdobopen){
        settingcontentel.classList.add("hide")
    }
    else{
        settingcontentel.classList.remove("hide")
    }
    isdobopen= !isdobopen;

};


settingcogel.addEventListener('click',toggledateofbirthselector);
const updatege=()=>{
    const currentdate=new Date();
    const diffdate=currentdate-dateofbirth;
    const year=Math.floor(diffdate/(1000*60*60*24*365));
    const month=Math.floor(diffdate/(1000*60*60*24*365)%12);
    const day=Math.floor(diffdate/(1000*60*60*24)%30);
    const hour=Math.floor(diffdate/(1000*60*60)%24);
    const minutes=Math.floor(diffdate/(1000*60)%60);
    const second=Math.floor(diffdate/(1000)%60);


    yearel.innerHTML=maketwodigit(year);
    monthel.innerHTML=maketwodigit(month);
    dayel.innerHTML=maketwodigit(day);
    hourel.innerHTML=maketwodigit(hour);
    minuteel.innerHTML=maketwodigit(minutes);
    secondel.innerHTML=maketwodigit(second);


};

const setdobhandler=()=>{
    const datestring=dobinputel.value;
    dateofbirth=datestring?new Date(datestring):null;
    if(dateofbirth){
        intialtextel.classList.add("hide");
        afterdobbuttonel.classList.remove("hide");
        updatege();
        setInterval(()=>updatege(),1000)

    }
    else{
        afterdobbuttonel.classList.add("hide");
        intialtextel.classList.remove("hide");
    }
};






dobbuttonel.addEventListener('click',setdobhandler)



