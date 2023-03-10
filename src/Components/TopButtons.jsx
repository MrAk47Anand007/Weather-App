import React from "react";

function TopButtons({setQuery}) {
    const cities= [
        {
            id:1,
            title: 'Lonar'
        },
        {
            id:2,
            title: 'Delhi'
        },
        {
            id:3,
            title: 'Mumbai'
        },
        {
            id:4,
            title: 'Nagpur'
        },
        {
            id:5,
            title: 'Pune'
        },
    ];


    return(
        <div className="flex items-center justify-around my-6">

            {cities.map((city)=>(
                <button key={city.id} className="text-white text-lg font-medium cursor-pointer transition ease-out hover:scale-125" onClick={()=> setQuery({q: city.title})}>{city.title}</button>
            ))}



        </div>
    );

}
export default TopButtons