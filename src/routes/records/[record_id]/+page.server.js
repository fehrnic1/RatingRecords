import db from "$lib/db.js"

export async function load( {params} ){
    let record = await db.getRecord(params.record_id);
    return {
        record: record,
    }
}

/* Für Update der Record-Details */
export const actions ={
    update: async ({request}) => {
        const data = await request.formData();
        console.log(data)
        let record ={
            _id: data.get("id"),
            artist: data.get("artist"),
            label: data.get("label"),
            runtime: data.get("runtime"),
            year: data.get("year"),
            genre: data.get("genre"),
            lastlisten: data.get("lastlisten"),
            rating: data.get("rating"),
            highlights: data.get("highlights"),
            cover: data.get("cover")
        }

        await db.updateRecord(record);
        return{success: true}
    }
}