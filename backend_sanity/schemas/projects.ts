
export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'technology',
            title: 'Technology',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'type',
            title: 'Type',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'githubUrl',
            title: 'GitHub URL',
            type: 'url',
        },
    ],
};
