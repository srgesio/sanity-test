import { defineType } from 'sanity'

export default defineType(
    {
        name: 'pet',
        type: 'document',
        title: 'Pet',
        fields: [
            {
                name: 'name',
                type: 'string',
                title: 'Nome'
            },
            {
                name: 'sound',
                type: 'string',
                title: 'Som'
            },
            {
                name: 'color',
                type: 'string',
                title: 'Cor'
            }
        ]
    }
) 