export default {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        {
            name: "jobTitle",
            title: "jobTitle",
            type: "string",
        },
        {
            name: "companyImage",
            title: "Company Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },

        {
            name: "company",
            title: "Company",
            type: "text",
        },
        {
            name: "dateStarted",
            title: "dateStarted",
            type: "date",
        },
        {
            name: "dateEnded",
            title: "dateEnded",
            type: "date",
        },
        {
            name: "isCurrentlyWorkingHere",
            title: "IsCurrentlyWorkingHere",
            type: "boolean",
        },
        {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: { type: "skill" } }],
        },
        {
            name: "points",
            title: "Points",
            type: "array",
            of: [{ type: "string" }],
        },
    ],

    // preview: {
    //   select: {
    //     title: 'title',
    //     author: 'author.name',
    //     media: 'mainImage',
    //   },
    //   prepare(selection) {
    //     const {author} = selection
    //     return Object.assign({}, selection, {
    //       subtitle: author && `by ${author}`,
    //     })
    //   },
    // },
};
