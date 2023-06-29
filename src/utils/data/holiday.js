const year = "2023";

const holiday = [
    {
        name : "နှစ်သစ်မှာပျော်ရွှင်ပါစီ",
        date : `1/1/${year}`
    },
    {
        name : "လွတ်လပ်ရေးနေ့ပါနန်း",
        date : `1/4/${year}`
    },
    {
        name : "ပြည်ထောင်စုနေ့ပါနန်း",
        date : `2/12/${year}`
    },
    {
        name : "တောင်သူလယ်သမားနေ့ပါနန်း",
        date : `3/2/${year}`
    },
    {
        name : "သဲပုံစေတိပွဲလားကတ်မေဝေ့",
        date : `3/5/${year}`
    },
    {
        name : "တမတ နေ့",
        date : `3/27/${year}`
    },
    {
        name : "အကြိုနေ့ကဲမယ် 😁 ",
        date : `4/10/${year}`
    },
    



    {
        name : "Eid နေ့ဖြစ်ပါရေနန်း | ကျောင်းပိတ်ပါရေ 😁",
        date : `6/29/${year}`
    },
    {
        name : "အာဇာနည်နေ့ပါလတ်",
        date : `7/19/${year}`
    },
    {
        name : "ဝါဆိုလပြည့်နေ့ဖြစ်ပါရေ",
        date : `7/19/${year}`
    },
    {
        name : "အမျိူးသားနေ့ပါနန်း",
        date : `12/7/${year}`
    },
    {
        name : "မယ်ရီခရစ်စမက်ပါ အမျိူးရို့",
        date : `12/25/${year}`
    },
    {
        name : "အတူတူနှစ်သစ်ကူးကတ်မယ်",
        date : `12/31/${year}`
    }
]



const holiday_data = (date) => {  
    let hol = [];
    var dateObj = new Date(date);
    dateObj.setDate(dateObj.getDate() );
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();    
    let newdate = month + "/" + day + "/" + year;

    hol = holiday.filter((h) => {
        if(h.date == newdate.toString()){
            return {
                name : h.name,
                date : h.date
            }
        }
    })
    return hol;
}

export default holiday_data;