# Evaluation Vue FullStack

Vous allez créer un répo Privé — Vue3FullStack

Vous allez implémenter une application CRUD + authentification avec VueJS.

À 17h vous rendrez le repo public.

<aside>
⚠️ Ne pushez pas de nouveaux commits sur votre repo après 17h et tant que vous n’avez pas reçu les notes de l’évaluation.
**En cas d’infraction vous aurez la note de 0 .**
Si vous souhaitez continuer de travailler dessus, vous pouvez le faire sans PUSH vos nouveaux commits
OU plus safe, vous pouvez fork le repo et travailler sur le fork.

</aside>

# Méthode de travail incluant GIT & GITHUB (5 points)

Pour obtenir les points à chacune des spécifications suivantes vous devez utiliser ces bonnes pratiques tout au long de l’évaluation.

1. 1 POINT — Chacun de vos messages de commit est clair, bien formulé et réprésente les changements apportés (min. plus de 6 mots)
2. 1 POINT — Chacun de vos commits est atomique
3. 1 POINT — Pour l’implémentation de chaque étape vous avez bien créé une branche de dev où vous allez développer l’implémentation de l’étape. _(`main` ne doit contenir que des étapes stables du projet)_
4. 1 POINT — Lorsque vous avez réussi avec succès l’implémentation d’une question sur une branche, vous y appliquez un tag avec le numéro de la question.
5. 1 POINT — Vous avez exclus les fichiers et dossiers à exclure grace au `.gitignore`

<aside>
⚠️ Travaillez de manière méthodique et propre en vérifiant bien que ce que vous allez commit et que votre code fait ce que vous en attendant avant chaque commit pour maximiser le nombre de points obtenus.

</aside>

Questions

# Fondation [0.5 points par question]

Q1) Créer un application vuejs avec un router qui permet d’accéders aux pages suivantes:

- [ ] formulaire d’inscription
- [ ] page apropos
- [ ] page d’acceuil
- [ ] formulaire de connexion
- [ ] page d’application de todolists

Q2) Lorsque l’utilsateur utilise le formulaire d’inscripton pour se connecter, un appel à un véritable backend est fait pour en cas de succès lui créer un compte.

Q3) Lorsque l’utilsateur utilise le formulaire de connexion pour se connecter, un appel à un véritable backend est fait et en cas de succès retourne un JWT. Si il ferme son navigateur et le rouvre il est toujours connecté.

Q4) Lorsque l’utilisateur clique sur le bouton déconnecter. Il est déconnecté immédiatement. Si il ferme son navigateur et le rouvre, il n’est plus connecté.

Q5) Créer une barre de navigation qui apparait sur toutes les pages de l’application

lorsque le visiteur est déconnecté affiche:

- [ ] Un lien vers un formulaire d’inscription
- [ ] Un lien vers un formulaire de connexion
- [ ] Un lien vers une page àpropos.
- [ ] Un lien vers une page intitulée “Au Hasard”

lorsque le visiteur est connecté affiche:

- [ ] Un bouton de déconnexion
- [ ] Un lien vers la page d’accueil
- [ ] Un lien vers une page d’application “CRUD”
- [ ] Un lien vers une page àpropos.
- [ ] Un lien vers une page intitulée “Au Hasard”

Q6) Lorsque l”utilsateur est déconnecté il ne peut pas accéder par URL aux pages qui nécessite d’être connecté. Lorsque l”utilsateur est connecté il ne peut pas accéder par URL aux pages qui nécessite d’être déconnecté.

# Application CRUD [1 point par question]

### page “CRUD”

Q7) Sur la page d’application CRUD s’affiche toutes les chaînes de caractères sauvegardées par l’utilisateur.

Q8) Sur la page d’application CRUD un formulaire permet de saisir une chaîne de caractère. Si l’utilisateur ferme le navigateur et se reconnecte les chaînes de caractères saisies sont toujours là.

Q9) En cliquant sur une chaîne de caractère un formulaire apparait pour la modifier. Si l’utilisateur clique sur modifier les changements sont persistés et seront toujours présents au redémarrage du navigateur. Si l’utilisateur clique sur annuler les changements ne sont pas sauvegardé. Dans les deux cas le formulaire disparait.

Q10) En cliquant sur un bouton les utilisateurs peuvent supprimer une chaîne de caractère de leur choix. Cette chaîne de caractère n’apparaîtra plus jamais.

### page “au HASARD”

Q11) Si le visiteur est déconnecté: la page au Hasard va afficher une chaîne de caractères sélectionné au hasard parmis toutes celle en base de données

Q12) Si l’utilisateur est connecté: la page au Hasard va afficher une chaîne de caractères sélectionné au hasard parmis celles sauvegardées par l’utilisateur.

Q13) Si l’utilisateur est connecté et n’a pas de chaînes de caractères sauvegardées, alors affiché un texte qui l’invite à aller sur la page “CRUD” et d’ajouter une chaîne de caractère.

# Validation de formulaire [0.5 point par question]

Q14 [1 Point]) Sur le formulaire de connexion, si le serveur renvoit un message d’erreur afficher en rouge le message d’erreur envoyé par le serveur. En cliquant sur le message d’erreur, le message doit disparaître.

Q15 [1 Point])) Sur le formulaire d’inscription, si le serveur renvoit un message d’erreur afficher en rouge le message d’erreur envoyé par le serveur. En cliquant sur le message d’erreur, le message doit disparaître.

Q16 [1 point]) Sur le formulaire d’inscription ajouter un champ “Confirmation du Mot de passe”, pour être valide ce champ de doit être identique à celui du champ mot de passe. Si le champ est invalide

- [ ] mettre le label du champ en rouge
- [ ] désactiver le bouton de validation du formulaire

Q17) Sur la page CRUD, lorsque l’utilisateur a cliqué pour modifier une chaîne de caractère, si cette chaîne n’est pas modifié alors

- [ ] désactiver le bouton de validation

Q18) Idem pour le formulaire d’insertion si la chaîne de caractère dans le champ est vide

Q19) Sur le formulaire d’inscription si un champ contient une erreur

- [ ] mettre le label du champ en rouge
- [ ] désactiver le bouton de validation du formulaire

Q20) Sur le formulaire d’inscription si un champ contient une erreur

- [ ] mettre le label du champ en rouge
- [ ] désactiver le bouton de validation du formulaire
