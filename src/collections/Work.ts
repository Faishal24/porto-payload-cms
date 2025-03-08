import type { CollectionConfig } from 'payload'

export const Work: CollectionConfig = {
    slug: 'work',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'date',
            type: 'text',
        },
        {
            name: 'role',
            type: 'text',
        },
        {
            name: 'company name',
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
                    label: 'Emerald',
                    value: 'emerald',
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