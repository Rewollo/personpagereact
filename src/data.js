import ted from './assets/images/ted.jpg';
import lkd from './assets/images/lkd.jpg';
import iney from './assets/images/in.jpg';

let groups = [
    {
        name: 'The Extinct Dreams',
        id: 1,
        genre: 'Funeral Doom Metal',
        active: '2006-2017',
        myactive: '2014-2017',
        url: 'https://theextinctdreams.bandcamp.com/',
        img: ted
    },

    {
        name: 'Люди которые Дышат',
        id: 2,
        genre: 'Industrial Metal',
        active: '2018-present day',
        myactive: '2018-present day',
        url: 'https://vk.com/lkd_band',
        img: lkd
    },

    {
        name: 'Иней',
        id: 3,
        genre: 'Emocore / Experimental',
        active: '2020-present day',
        myactive: '2020-present day',
        url: 'https://vk.com/drops1000000000',
        img: iney
    },
];

export function getGroups() {
    return groups;
  }