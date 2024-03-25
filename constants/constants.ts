const mainNav = [
    {
        url: '/projects',
        label: 'Реализованные проекты',
    },
    {
        url: '/news',
        label: 'Новости',
    },
    {
        url: '/contacts',
        label: 'Контакты',
    },
];


const phoneNumber = {
    fancy: "+7 (900) 900-90-90",
    simple: "89009009090"
}

const email = "info@gmail.com"
const address = "г. Владивосток\nул. Выселковая 49, стр. 3"

const contactsNav = [
    {
        id: 'P',
        url: `tel:${phoneNumber.simple}`,
        text: phoneNumber.fancy,
    },
    {
        id: 'M',
        url: `mailto:${email}`,
        text: email,
    },
    {
        id: 'A',
        url: '#',
        text: address,
    }
]


export { mainNav, contactsNav, phoneNumber, email, address };