import React from "react";
function TimeAndLocation(){
    return(
        <div>
        <div className="flex items-center justify-center my-6">
            <p className="text-white text-xl font-extralight">
            Tuesday, 24 Feb 2023 | Local time: 10:15 PM
            </p>
        </div>
        <div className="flex items-center justify-center my-3">
            <p className="text-white text-3xl font-medium">
            Berlin, DE
            </p>
        </div>
        </div>
    )
}
export default TimeAndLocation