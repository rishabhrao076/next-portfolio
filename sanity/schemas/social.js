export default {
    name: "social",
    title: "social",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            description: "Platform for social media",
            type: "string",
        },
        {
            name: "url",
            title: "Url",
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
