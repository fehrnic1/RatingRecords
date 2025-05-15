import db from "$lib/db.js"

export async function load( {params} ){
    let label = await db.getLabel(params.label_id);
    return {
        label: label
    }
}