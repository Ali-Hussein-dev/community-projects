
const projectSchema = {
    name: "projectDocument",
    title: "Project Documents",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Project Name",
            type: "string",

        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
        },
        {
            name: "description",
            title: "Project Description",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [
                    { title: 'Boycott', value: 'boycott' },
                    { title: 'Education', value: 'education' },
                    { title: 'Legacy Media', value: 'legacy media' },
                    { title: 'Social Media', value: 'social media' },
                    { title: 'Documentation', value: 'documentation' },
                    { title: 'Tech', value: 'tech' },
                    { title: 'Advocacy', value: 'advocacy' },
                    { title: 'Charity', value: 'charity' },
                    { title: 'Legal', value: 'legal' },
                    { title: 'Human Rights', value: 'human rights' },
                    { title: 'Anti-Zionist Jews', value: 'Anti-Zionist Jews' },
                ],
            },
        },
        {
            name: "logo",
            title: "Project Logo (square 1:1)",
            type: "image",
            options: {
                accept: "image/png, image/jpeg, image/jpg",
            },
        },
        {
            name: "screenshot",
            title: "Project Screenshot (wide 16:9)",
            type: "image",
            options: {
                accept: "image/png, image/jpeg, image/jpg",
            },
        },
        {
            name: "projectUrl",
            title: "Project URL",
            type: "url",
        },
    ],
};

export default projectSchema;
