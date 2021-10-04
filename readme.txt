Pour commencer, j'ai utilisé la commande "npm create-react-app testfront" pour mettre en place la structure de mon projet.
En suite, j'ai decidé de utiliser deux composants pour realiser l'appli. Un tableau que affiche le JSON et un composant
que efface l'objet sour form de button. 

J'ai commencé par créer le JSON, ou j'ai crée un array d'objets . En suite, j'ai crée un repertoire avec les composants
Table.js et DeleteBtn.js.

Pour realiser le projet j'ai besoin que les données soit dynamique, de coup j'ai importé le useState de React ainsi
que les données du json sous nom de data. J'ai crée une const contacts ou j'ai stocké le JSON et un setState.

La premiere partie s'occupe juste de afficher les données du json, et pour faire ca j'ai utilisé un .map() dans le JSX
sur les contacts pour pouvoir les afficher correctement. C'est une methode que parcour chaque element du tableau.

La deuxieme partie je l'ai dedié a la possibilité de supprimer un contact. J'ai crée le composant DeleteBtn que recoit avec les props,
les contacts, le setState et l'id du contact affiché. L'id serait utilisé dans une function que s'en sert de .filter pour 
recréer l'array sans l'objet de l'id passé. Ce composant renvoie un JSX sous form de button. Il reste juste d'importer le composant DeleteBtn dans le composant Table.js
et l'utiliser dans le JSX.

La denier partie je l'ai dedié a la possibilité de pouvoir modifier un element de l'objet. Pour faire ca, j'ai crée une function dans
le composant Table.js, que prend en parametre l'event listener (celui que s'occupe de comprendre si la variable d'origine est entrain de 
changer par l'utilisateur), l'objet et la key de l'objet (donc si c'est nom, prenom ou mail).

La function map parcour l'array des objets et avec une ternaire, s'assure que si la condition est true alors il gard toutes les elements de l'objet mais
en modifiant just le champ de la key que recoit en parametre, sinon en cas de condition false,
il laisse l'objet a la condition d'origine. Un setState est utilisé a la fin pour mettre a jour le state de la variable.