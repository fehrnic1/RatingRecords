import db from "$lib/db"
export async function load() {
    let oldRecords = await db.getRecords();
    let topRecords = await db.getRecords();
    return {
        oldRecords: oldRecords,
        topRecords: topRecords
    }
}