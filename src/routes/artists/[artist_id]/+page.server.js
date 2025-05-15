import db from "$lib/db.js"

export async function load( {params} ){
    let artist = await db.getArtist(params.artist_id);
    return {
        artist: artist,
    }
}