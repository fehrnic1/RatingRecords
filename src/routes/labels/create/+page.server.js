import db from '$lib/db.js';
export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        let label = {
            name: data.get("name"),
            originCity: data.get("originCity"),
            originCountry: data.get("originCountry"),
            bandCampLink: data.get("bandCampLink"),
            logo: data.get("logo")

        }
        await db.createLabel(label);
        return { success: true }
    }
}