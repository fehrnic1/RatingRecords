import db from "$lib/db"
export async function load() {
    return {
        records: await db.getRecords()
    }
}