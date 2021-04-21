import { faHome, faFilm, faStar, faSearch, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { MenuItem } from './type'


const navLinks: MenuItem[] = [
    {
        name: "Home",
        link: "/",
        icon: faHome
    },
    {
        name: "New Films",
        link: "/releases",
        icon: faFilm
    },
    {
        name: "Popular films",
        link: "/popular",
        icon: faStar
    },
    {
        name: "Search",
        link: "/search",
        icon: faSearch
    },
    {
        name: "Contact",
        link: "/contact",
        icon: faPhoneVolume
    },
]

export default navLinks