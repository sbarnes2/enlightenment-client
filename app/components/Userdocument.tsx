import React from "react";
import NextFunctionComponent from 'next'

interface userdocumentitem{
    documentid:number;
    documentnumber:string;
    documentversion:string;
    training_complete_date:string;
}


const Userdocument = (u:userdocumentitem)=>{
    return  (
        <div className="item">
            <ul className="documentItemLine">
                <li key={u.documentid}><div className="documentitemname column">Doc:</div><div className="documentitemdata">{u.documentnumber}</div></li>
                <li key={u.documentid}><div className="documentitemname column">Rev:</div><div className="documentitemdata">{u.documentversion}</div></li>
                <li key={u.documentid}><div className="documentitemname column">Date:</div><div className="documentitemdata">{u.training_complete_date}</div></li>
            </ul>
        </div>
        );
}

export default Userdocument;