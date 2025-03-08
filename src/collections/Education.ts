import type { CollectionConfig } from 'payload'

export const Education: CollectionConfig = {
    slug: 'education',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'date',
            type: 'text',
        },
        {
            name: 'degree',
            type: 'text',
        },
        {
            name: 'institute name',
            type: 'text',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'tag',
            type: 'text',
            hasMany: true,
        },
        {
            name: 'tag_color',
            label: 'Tag Color',
            type: 'select',
            options: [
                {
                    label: 'Violet',
                    value: 'violet',
                },
                {
                    label: 'Sky',
                    value: 'sky',
                },
                {
                    label: 'Green',
                    value: 'green',
                },
                {
                    label: 'Amber',
                    value: 'amber',
                },
                {
                    label: 'Red',
                    value: 'red',
                }
            ],
            hasMany: true,
        },
    ],
}