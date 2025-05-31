import db from "$lib/db.js"

export async function load( {params} ){
    let label = await db.getLabel(params.label_id);
    let records = await db.getRecordsByLabel(params.label_id);
    return {
        label: label,
        records: records
    }
}

export const actions = {
    addToStack: async ({request}) => {
        console.log("Add To Stack")
        let data = await request.formData()  /* Daten aus Inputfeld Record-Card */
        let id = data.get("recordId")        /* Wahldes Feldes das benötigt wird (name="movieId") */

        let record ={
            _id: id,                         /* Oben "importierte" ID */
            stack: true,
        }

        await db.updateRecord(record)        /* Warte auf Aktualisierung */
    },

    removeFromStack: async ({request}) => {
        console.log("Remove From Stack")
        let data = await request.formData()  
        let id = data.get("recordId")

        let record ={
            _id: id,  
            stack: false,
        }

        await db.updateRecord(record)    
    }
}