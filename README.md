# crud-laravel

## Etapes d'installation :


#### 1 - Clonez le dépot 

```git clone https://github.com/adadofr/crud_laravel```


#### 2 - Accédez au répertoire du projet

Après votre clone, un nouveau dossier portant le nom "crud_laravel" devrait être crée dans votre emplacement actuel.

Vous devez simplement y accéder en faisant un :

```cd crud_laravel```

Puis accédez au fichier crud-laravel

```cd crud-laravel```


#### 3 - Installer les dépendances du projet à partir de composer

Chaque fois que vous clonez un nouveau projet Laravel, vous devez installer toutes les dépendances du projet. C'est ce qui permet d'installer Laravel lui-même, parmi d'autres paquets nécessaires pour démarrer votre application. 

```composer install```


#### 4 - Installer les dépendances NPM 

```npm install```

ou

```Yarn```


#### 5 - Créez une copie de votre fichier .env

```cp .env.example .env```

#### 6 - Générez votre clé d’encryption

Laravel exige que vous ayez une clé d’encryption pour chacune de vos applications, ceci est généralement généré de manière aléatoire et stocké dans votre fichier .env. L'application utilisera cette clé d’encryption pour encoder divers éléments de votre application, tels que les cookies, le hachages de mots de passe et bien d’ autres éléments.

```php artisan key:generate```

 
#### 7 - Créez une base de données vide

Créez une base de données vide pour le projet en utilisant l'outil de base de données que vous préférez.


#### 8 - Configurez le fichier .env pour permettre une connexion à la base de donnée.

Dans le fichier .env, remplissez les options DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME et DB_PASSWORD pour qu'elles correspondent aux informations d'identification de la base de données que vous venez de créer.


#### 9 - Ajouter les tables de votre base de données avec les migrations

Les migrations dans Laravel vous permettent d’avoir toutes votre architecture de BD dans votre code et avec une simple ligne de commande vous pouvez recréer toutes vos tables.

```php artisan migrate```


#### 10 - Démarrer le serveur

```php artisan serve```


#### 11 - Ouvrir un autre terminal


#### 12 - A l'aide des commandes se placer dans le fichier front-react

#### 13 - Installer les dépendances NPM 

```npm install```

ou

```Yarn```

#### 14 - Lancez l'application

```npm start```

#### 15 - Rendez vous sur :

[http://localhost:3000/admin](http://localhost:3000/admin) pour consulter la page administrateur

et

[http://localhost:3000](http://localhost:3000) pour consulter la page publique
