import navValues from "@/helpers/navValues";
import { navigationContext } from "./app";
import {logo,subTitleStyle} from "./banner.module.css";
// const subTitleStyle={
//     fontStyle:"italic",
//     fontSize:"x-large",
//     color:"coral"

// }
const Banner=()=>
{
const {navigate}=useContext(navigationContext)

    return(
        <header className="row mb-4">
<div className="col-5">
    <img src="./GloboLogo.png" className={logo}alt="logo" onClick={()=>navigate(navValues.home)}></img>
</div>
<div className="col-7  mt-5">
<div  className={subTitleStyle}>Providing houses all over the world!</div> 
</div>
        </header>
    )
}
export default Banner