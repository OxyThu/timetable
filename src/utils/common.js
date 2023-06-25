import available_class from "./data/class"


// export const getCookie = (name) =>  {
//     const value = `; ${document.cookie}`;
//     const parts = value.split(`; ${name}=`);
//     if (parts.length === 2) return parts.pop().split(';').shift();
//   }

  export const getCookie = (name) => {
    const cookieValue = document.cookie.split("; ").find((row) => row.startsWith(`${name}=`))?.split("=")[1];
    return cookieValue;
  }

  export const getDay = (count) => {
    const d = new Date();
    console.log("current Number", count);
    d.setDate(d.getDate() + count);
    let day = d.getDay();
    let dayObj = {};
    dayObj.date = d;
    dayObj.realCode = day;
    switch(day){
      case 0 : dayObj.name = "Sunday"; break;
      case 1 : dayObj.name = "Monday"; break;
      case 2 : dayObj.name = "Tuesday"; break;
      case 3 : dayObj.name = "Wednesday"; break;
      case 4 : dayObj.name = "Thursday"; break;
      case 5 : dayObj.name = "Friday";break;
      case 6 : dayObj.name = "Saturday"; break;
      default : dayObj.name = "Error"; break;
    }
      if(day === 0 || day === 6){
        dayObj.code = 7;
        return dayObj;
      }else{
        dayObj.code = day - 1;
        return dayObj;
      }
  }

