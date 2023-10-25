import React from "react";
import NextFunctionComponent from 'next'

type DocumentCardItem = {
    id: number;
    documentname: string; 
    documentcode: string;
    documenttype: string;
    documentnumber: string;
    risklevel: string;
}


const DocumentCard = (d:DocumentCardItem) =>{

    return  (
    <div className="item">
        <ul className="documentItemLine">
            <li key={d.id}><p className="documenetItemName column">QT9 reference     :</p><p className="documentItemData">{d.documentnumber}</p></li>
            <li key={d.id}><p className="documenetItemName column">Document Code     :</p><p className="documentItemData">{d.documentcode}</p></li>
            <li key={d.id}><p className="documenetItemName column">Document Title    :</p><p className="documentItemData">{d.documentname}</p></li>
            <li key={d.id}><p className="documenetItemName column">Document Type     :</p><p className="documentItemData">{d.documenttype}</p></li>
        </ul>
        <button className="btn btn-blue">Add to List</button>
    </div>
    );
}

export default DocumentCard;


