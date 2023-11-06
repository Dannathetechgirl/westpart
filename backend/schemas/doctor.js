export default {
    name: 'doc',
    title: 'Doc',
    type: 'document',
    fields: [
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            option: {
                hotspot: true
            }
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'certification',
            title: 'Certification',
            type: 'string'
        },
        {
            name: 'specialty',
            title: 'Specialty',
            type: 'string'
        },

    ]
}