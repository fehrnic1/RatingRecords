import db from '$lib/db.js';


/* export async function load({ params }) {
    let artists = await db.getArtists()
    let labels = await db.getLabels()
    return {
        artists: artists,
        labels: labels
    }
} */

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        let artist = {
            name: data.get("name"),
            originCity: data.get("originCity"),
            originCountry: data.get("originCountry"),
            formedIn: data.get("formedIn"),
            bandCampLink: data.get("bandCampLink"),
            logo: data.get("logo"),
          
        }
        await db.createArtist(artist);
        return { success: true }
    }




    
}