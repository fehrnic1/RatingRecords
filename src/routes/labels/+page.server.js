import db from "$lib/db"
export async function load() {
    return {
        labels: await db.getLabels()
    }
}