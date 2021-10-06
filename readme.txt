Pour commencer, j'ai utilisé la commande "npm create-react-app testfront" pour mettre en place la structure de mon projet.
Ensuite, j'ai decidé de utiliser deux composants pour realiser l'appli. Un tableau que affiche le JSON et un composant
que efface l'objet sous form de button. 

J'ai commencé par créer le JSON, ou j'ai crée un array d'objets . Ensuite, j'ai crée un repertoire avec les composants
Table.js et DeleteBtn.js.

Pour réaliser le projet j'ai besoin que les données soient dynamiques, de coup j'ai importé le useState de React ainsi
que les données du json sous nom de data. J'ai crée une const contacts ou j'ai stocké le JSON et un setState.

La première partie s'occupe juste d'afficher les données du json, et pour faire ça j'ai utilisé un .map() dans le JSX
sur les contacts pour pouvoir les afficher correctement. C'est une méthode que parcour chaque élément dû tableau.

La deuxième partie je l'ai dedié a la possibilité de supprimer un contact.  J'ai créé le composant DeleteBtn que reçoit, avec les props,
les contacts, le setState et l'id du contact affiché. L'id serait utilisé dans une function que s'en sert de .filter pour 
recréer l'array sans l'objet de l'id passé. Ce composant renvoie un JSX sous forme de button. Il reste juste d'importer le composant DeleteBtn dans le composant Table.js et l'utiliser dans le JSX.

La dernière partie je l'ai dédié à la possibilité de pouvoir modifier un element de l'objet.  Pour faire ça, j'ai créé une function dans le composant Table js, que prend en paramètre l'event listener (celui que s'occupe de comprendre si la variable d'origine est en train de changer par l'utilisateur), l'objet et la key de l'objet (donc si c'est nom, prénom ou mail).

La function map parcour l'array des objets et avec une ternaire, s'assure que si la condition est true alors il Gard tous les éléments de l'objet mais en modifiant juste le champ de la key que reçoit en paramètre, sinon en cas de condition false, il laisse l'objet a la condition d'origine. Un setState est utilisé à la fin pour mettre à jour le state de la variable.

Pour realiser ce test, je me suis renseigné sur la DOC officielle (pour l'initialisation du projet), Google et StackOverFlow.
