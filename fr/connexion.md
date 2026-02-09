---
layout: default
title: Connexion
---

# Connexion

Connectez-vous pour accéder aux fonctionnalités du site.

## Formulaire de Connexion

<form action="/login" method="post">
    <label for="username">Nom d'utilisateur :</label>
    <input type="text" id="username" name="username" required>

    <label for="password">Mot de passe :</label>
    <input type="password" id="password" name="password" required>

    <button type="submit">Se connecter</button>
</form>

Si vous n'avez pas encore de compte, [inscrivez-vous ici](inscriptions.md).
