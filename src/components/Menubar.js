import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTents } from '@fortawesome/free-solid-svg-icons';
import {faHouse} from   '@fortawesome/free-solid-svg-icons'

const Menubar = () => {
    return (
        <>
         <div>
         <FontAwesomeIcon icon={faHouse} />
         
         <h1 className="text-xs font-semibold">House</h1>
         </div>
         <div>
         <FontAwesomeIcon icon={faTents} className="h-6 w-6" />
         
         <h1 className="text-xs font-semiboldcd">Camping</h1>

         </div>
        </>
        
    );
}

export default Menubar;
