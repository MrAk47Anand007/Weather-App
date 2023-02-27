import React from "react";

function Forecast({title}){
    return(
        <div>
         <div className="flex items-center justify-start mt-6">
           <p className="text-white font-medium uppercase">{title}</p>
         </div>
         <hr className="my-2" />
            <div className="flex flex-row items-center justify-between text-white">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        04:30 PM
                    </p>
                    <img src="https://png.pngtree.com/png-clipart/20201104/ourmid/pngtree-sun-clipart-yellow-cartoon-cute-sun-png-image_5564321.png" className="w-12 my-1" alt="sunimg"/>
                    <p className="font-medium">22°</p>

                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        04:30 PM
                    </p>
                    <img src="https://png.pngtree.com/png-clipart/20201104/ourmid/pngtree-sun-clipart-yellow-cartoon-cute-sun-png-image_5564321.png" className="w-12 my-1" alt="sunimg"/>
                    <p className="font-medium">22°</p>

                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        04:30 PM
                    </p>
                    <img src="https://png.pngtree.com/png-clipart/20201104/ourmid/pngtree-sun-clipart-yellow-cartoon-cute-sun-png-image_5564321.png" className="w-12 my-1" alt="sunimg"/>
                    <p className="font-medium">22°</p>

                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        04:30 PM
                    </p>
                    <img src="https://png.pngtree.com/png-clipart/20201104/ourmid/pngtree-sun-clipart-yellow-cartoon-cute-sun-png-image_5564321.png" className="w-12 my-1" alt="sunimg"/>
                    <p className="font-medium">22°</p>

                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">
                        04:30 PM
                    </p>
                    <img src="https://png.pngtree.com/png-clipart/20201104/ourmid/pngtree-sun-clipart-yellow-cartoon-cute-sun-png-image_5564321.png" className="w-12 my-1" alt="sunimg"/>
                    <p className="font-medium">22°</p>

                </div>
            </div>
        </div>
    )
}
export default Forecast