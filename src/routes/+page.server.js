import db from "$lib/db"
export async function load() {
  
    let oldRecords = await db.getOldRecords(); 
    let topRecords = await db.getTopRecords();
    return {
        oldRecords: oldRecords,
        topRecords: topRecords
    }
}
