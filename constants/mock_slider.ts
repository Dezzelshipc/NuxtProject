import s1_p_1x from './assets/pictures/slide-1-portrait.png'
import s1_p_2x from './assets/pictures/slide-1-portrait@2x.png'
import s1_l_1x from './assets/pictures/slide-1-landscape.png'
import s1_l_2x from './assets/pictures/slide-1-landscape@2x.png'

import s2_p_1x from './assets/pictures/slide-2-portrait.png'
import s2_p_2x from './assets/pictures/slide-2-portrait@2x.png'
import s2_l_1x from './assets/pictures/slide-2-landscape.png'
import s2_l_2x from './assets/pictures/slide-2-landscape@2x.png'

import s3_p_1x from './assets/pictures/slide-3-portrait.png'
import s3_p_2x from './assets/pictures/slide-3-portrait@2x.png'
import s3_l_1x from './assets/pictures/slide-3-landscape.png'
import s3_l_2x from './assets/pictures/slide-3-landscape@2x.png'

const slides = [
    {
        portrait: {
            x1: s1_p_1x,
            x2: s1_p_2x,
        },
        landscape: {
            x1: s1_l_1x,
            x2: s1_l_2x,
        },
        title: 'Проектируем и строим загородные дома',
        text: 'Строим дома «под ключ»: от этапа проектирования и до финишной отделки помещений',
    },
    {
        portrait: {
            x1: s2_p_1x,
            x2: s2_p_2x,
        },
        landscape: {
            x1: s2_l_1x,
            x2: s2_l_2x,
        },
        title: '2',
        text: 'tt2',
    },
    {
        portrait: {
            x1: s3_p_1x,
            x2: s3_p_2x,
        },
        landscape: {
            x1: s3_l_1x,
            x2: s3_l_2x,
        },
        title: '3',
        text: 'tt3',
    }
]

export { slides };