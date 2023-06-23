// -----------------------------------------------------------    Enum    ----------------------------------------------------------- //
/* В TypeScript (TS), enum - це тип даних, який дозволяє оголосити набір іменованих значень. 
   enum дозволяє визначити новий тип, що може мати декілька можливих значень, які можна використовувати як константи в коді.
*/

// Simple example of enum type
enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]

console.log(membership)
console.log(membershipReverse)
console.log(Membership)

enum SocialMedia {
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)

