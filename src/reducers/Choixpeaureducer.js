
function Choixpeaureducer (state ={selectedHouses: "Serpentard"}, action){
    switch(action.type) {
        case "CHOIXPEAU" :
         return {selectedHouses:  houses[Math.floor(Math.random() * 4)], houses}
        default: 
            return state
    }
}
export default Choixpeaureducer;



// //fonction qui matérialise l'action qui sera faite aux state qui seront passés en paramètre.
// //state:name:hughus est le state envoyé par défaut.
// //case permet de choisir l'action que l'on veut appliquer.


// function authReducer(state = {name: "hughus"}, action) {
//     switch(action.type) {
//       case 'AUTH' : 
//         return action.payloads
//       default :
//         return state
//     }
//   }
//   export default authReducer;