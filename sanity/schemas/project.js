export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "order",
            title: "Order",
            description: "Order of Appearence",
            type: "number",
        },
        {
            name: "title",
            title: "title",
            description: "Title of the project",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },

        {
            name: "summary",
            title: "Summary",
            type: "text",
        },
        {
            name: "technologies",
            title: "Technologies",
            type: "array",
            of: [{ type: "reference", to: { type: "skill" } }],
        },
        {
            name: "linkToBuild",
            title: "LinkToBuild",
            type: "url",
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
