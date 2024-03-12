import { useState } from "react";
import { HouseRowMem } from "./houseRow";

const houseArray=[ {
    "id": 1,
    "address": "12 Valley of Kings, Geneva",
    "country": "Switzerland",
    "description": "A superb detached Victorian property on one of the town's finest roads, within easy reach of Barnes Village. The property has in excess of 6000 sq/ft of accommodation, a driveway and landscaped garden.",
    "price": 900000,
    "photo": "https://images.familyhomeplans.com/plans/56906/56906-b440.jpg"
  },
  {
    "id": 2,
    "address": "89 Road of Forks, Bern",
    "country": "Switzerland",
    "description": "This impressive family home, which dates back to approximately 1840, offers original period features throughout and is set back from the road with off street parking for up to six cars and an original Coach House, which has been incorporated into the main house to provide further accommodation. ",
    "price": 500000,
    "photo": "https://i.ebayimg.com/images/g/SP4AAOSwrWdk5IzY/s-l1600.png"
  },
  {
    "id": 3,
    "address": "Grote Hof 12, Amsterdam",
    "country": "The Netherlands",
    "description": "This house has been designed and built to an impeccable standard offering luxurious and elegant living. The accommodation is arranged over four floors comprising a large entrance hall, living room with tall sash windows, dining room, study and WC on the ground floor.",
    "price": 200500,
    "photo": "https://i.ebayimg.com/images/g/2iEAAOSwkbpl0QMv/s-l1600.png"
  },
  {
    "id": 4,
    "address": "Meel Kade 321, The Hague",
    "country": "The Netherlands",
    "description": "Discreetly situated a unique two storey period home enviably located on the corner of Krom Road and Recht Road offering seclusion and privacy. The house features a magnificent double height reception room with doors leading directly out onto a charming courtyard garden.",
    "price": 259500,
    "photo": "https://i.ebayimg.com/images/g/ao8AAOSwLPdllY94/s-l1600.png"
  },
  {
    "id": 5,
    "address": "Oude Gracht 32, Utrecht",
    "country": "The Netherlands",
    "description": "This luxurious three bedroom flat is contemporary in style and benefits from the use of a gymnasium and a reserved underground parking space.",
    "price": 400500,
    "photo": "https://i.ebayimg.com/images/g/-K4AAOSwf-NlhZao/s-l960.png"
  }
];
const HouseList=({selectHouse})=>
{
const[houses,setHouses]=useState(houseArray);
const[counter,setCounter]=useState(0);
const incCounter=()=>
{

    setCounter(counter+1);

}
const getNextId=()=>
{

    const maxID=Math.max(...houses.map(i=>i.id))
    return maxID+1

}
const addHouse=()=>
{
setHouses([...houses,{
                id:getNextId(),
                address:"6307,FullShear,Texas",
                country:"US",
                price:5000000,
                description:"Do not miss your chance to make this house your home sweet home. Enjoy a large open kitchen with modern countertops and stainless appliances, a spacious living room for family & friends’ gatherings, comfortable bedrooms with closets, and airy bathrooms. Everything you need. All right here. Apply today and make it your home sweet home. Ask about our specials!",
                photo:"https://i.ebayimg.com/images/g/rGcAAOSwKFplOO8~/s-l960.png"
}])

}
    return(
    < >
<div className="row mb-2">
<h6 className="themeFontColor text-center">Houses currently on market</h6>

</div>
<table className="table table-hover" >
<thead>
    <tr>
        <th>id</th>
        <th>Address</th>
        <th>Country</th>
        <th>Asking Price</th>
    </tr>
</thead>
<tbody>
    {
        houses.map((h)=><HouseRowMem  key={h.id} house={h} selectHouse={selectHouse}/>)
    }

</tbody>
</table>
<button className="btn btn-primary" onClick={addHouse}>Add</button>
<button className="btn btn-primary" onClick={incCounter}>Inc</button>
<p>{counter}</p>
    </>
    )
}
export default HouseList;