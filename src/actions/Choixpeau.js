const  houses = [
    'Serpentard',
    'Griffondor',
    'Serdaigle',
    'Pouffsoufle',
];
export default function action(){
    return ({
    type: 'CHOIXPEAU',
    selectedIndex: houses
})
}