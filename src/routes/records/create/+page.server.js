import db from '$lib/db.js';
export async function load({ params }) {
    let artists = await db.getArtists()
    let labels = await db.getLabels()
    return {
        artists: artists,
        labels: labels
    }
}

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        let record = {
            title: data.get("title"),
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
        await db.createRecord(record);
        return { success: true }
    }


    
}