import currencyFormatter from "@/helpers/currencyFormatter"

import { navigationContext } from "./app"
import { useContext } from "react"

const House=()=>
{
const {param:house}=useContext(navigationContext)

    return(
        <div className="row">
<div className="col-6">
    <div className="row">
    {house.photo?<img src={house.photo} alt="pic"/>:"https://c8.alamy.com/comp/2BN4RX2/toy-house-and-a-note-with-text-top-view-overdue-loan-concept-2BN4RX2.jpg"}
    </div>
</div>
<div className="col-6">
    <h5 className="themeFontColor">{house.country}</h5>
    <h4>{house.address}</h4>
    <p>{house.description}</p>
    <h4 className="themeFontColor">{currencyFormatter.format(house.price)}</h4>
</div>
        </div>

    )}
    export default House;
