import db from '$lib/db.js';

export const actions = {
    create: async ({request}) => {
      
        const data = await request.formData();
      
        let record = {
            title: data.get("title"),
            artist: data.get("artist"),
            label: data.get("label"),
            runtime: data.get("runtime"),
            year: data.get("year"),
            genre: data.getAll("genre"),

           
        }

        await db.createRecord(record);

        return {success: true}
    }
}