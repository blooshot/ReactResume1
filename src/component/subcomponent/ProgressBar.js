import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { useDataContext } from '../../Provider/DataProvider';

const ProgressBar = () => {

    let data = useDataContext();
    let listofskills = data.skills;
    //let [pwit,setpwit] = useState(0);

    const entering = (e) => {


for (let lul in listofskills) {
   
      console.log(lul,listofskills[lul])
    
  }


        let progress = e.event != null ? e.event.target.querySelector('.progress-bar') : null
        
        if(progress){

            // console.log()
            
            for(let i=0; i <= progress.getAttribute('aria-valuenow').length; i++ ){

                progress.style.width = progress.getAttribute('aria-valuenow') + '%';
            
            }

            //progress.style.width = progress.getAttribute('aria-valuenow') + '%';
        }else{
            console.log("progress not found")
        }

        
        

        // progress.forEach((el) => {
        //             el.style.width = el.getAttribute('aria-valuenow') + '%'
        //           });

        //probar.style.width = probar.getAttribute('aria-valuenow') + '%'; 
        //
    }

    return (
        
        <Waypoint onEnter={entering} >
            {/* {Object.keys(listofskills).map((key) => (
                // <div className="progress" key={key}>
                //     <span className="skill">{key} <i className="val">{listofskills[key]}%</i></span>
                //     <div className="progress-bar-wrap">
                        <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                //     </div>
                // </div>
            ))} */}

        <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" ></div>

        </Waypoint>
        // <Waypoint onEnter={entering} topOffset={"80%"}>

        //     <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: pwit }}></div>
        // </Waypoint>
    );
}

export default ProgressBar;