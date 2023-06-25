import { useEffect, useState } from "react";
import Choose_Year from "./pages/choose_year/Choose_Year";
import Daily from "./pages/Daily/Daily";
import { getCookie } from "./utils/common";
import available_class from "./utils/data/class";

function App() {
  const [academic, setAcademic] = useState(false);

  useEffect(() => {
    let index = getCookie("index");
    let cookie = getCookie("academic");

    if(cookie && index){
      let haveAcademic = available_class[index].classes.filter((cl) => {
        return cl.class_code === cookie;
      })
      if(haveAcademic){
        setAcademic(true);
      }
    }
  }, [academic])
  return (
    <>
     { academic ? <Daily/> : <Choose_Year/>}
    </>
  );
}

export default App;
