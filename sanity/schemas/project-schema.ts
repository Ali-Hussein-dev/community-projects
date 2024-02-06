
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
            name: "screenshot",
            title: "Project Screenshot (wide 16:9)",
            type: "image",
            options: {
                accept: "image/png, image/jpeg, image/jpg",
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
            name: "projectUrl",
            title: "Project URL",
            type: "url",
        },
    ],
};

export default projectSchema;
