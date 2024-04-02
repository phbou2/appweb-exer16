# Code review

Analyse du code Tp1 de _Breno Mazzali Medeiros Tomazelli_ faite par _Philippe Bouchard_

L'analyse va se comporter principalement sur ces fichiers : 
- SongInfos.vue
- SongList.vue
- SongPlayer.vue
- SongPlayerControls.vue
- SongPlayerDatas.vue
- SongPlayerTime.vue
- App.vue

## Le code est-il lisible, clair ou est-il trop complexe ?

En général, le code est lisible et clair. Par exemple, dans certaines parties, du code alternatif aurait du etre utilisé pour avoir du code plus court, clair et lisible. 

## Le code est-il conforme [aux bonnes pratiques de programmation ?](https://appweb.progwmj.ca/documentations/bonnes-pratiques/code)

### Code propre

Les noms des valeures est significatif a travers le code et en général la répetition est évitée. Par exemple, dans certains cas, il y avait une solution alternative pour du code plus précis, clair et court. Par exemple, dans l'assignation de la classe "d-none" pour le bouton pause/play, l'utilisation de plusieurs fonctions est faite malgré que le meme effet aurait été possible avec l'utilisation de :class et d'un boolean qui est true/false si la chanson est entrain de jouer/est sur pause:

**Exemple de code :**
```js{4}
<button id="btnPlay" type="button" class="btn btn-primary"
    @click="playAudio(props.currentSongFileName)"
    :class="{ 'd-none': isPlaying }">
    <i class="bi bi-play-fill"></i> Jouer
</button>
<button id="btnPause" type="button" class="btn btn-primary"
    @click="pauseAudio()"
    :class="{ 'd-none': !isPlaying }">
    <i class="bi bi-pause-fill"></i> Pause
</button>
```
Pour ce qui concerne les autres principes concernant le code propre, tout semble etre bien pour la majorité du travail.

### Gestion des erreurs

Concernant la gestion des erreurs, elle semble etre bien fait pour les erreurs les plus importantes par exemple :

**Quand l'utilisateur joue une chanson :**
```js{4}
if (!song || !props.songInPlay) {
  const alertElement = document.getElementById('noSongSelected') as HTMLElement;
  if (alertElement) {
    alertElement.classList.remove('d-none');
    setTimeout(() => alertElement.classList.add('d-none'), 2000);
  }
  return;
}
```
**Quand l'utilisateur sélectionne une chanson :**
```HTML{4}
<div id="noSongSelected" class="alert alert-danger fixed-top d-none " role="alert">
      <div class="d-flex justify-content-center">
      <h3 class="alert-heading">Attention!!!</h3>
      </div>
      <hr>
    <div class="">
      <p>No music has been selected</p>
    </div>
</div>
```

Par exemple, de la gestion supplémentaire aurait du etre implémenter dans certaines parties comme une validation que une chanson est bel et bien sélectionnée lorsqu'un utilisateur fait pause/stop.

### Code sans avertissements et sans erreurs, et Principes POO

Tout semble etre respecté dans ces critères.




## Le code est-il conforme [normes et standards de programmation ?](https://appweb.progwmj.ca/documentations/normes)

### Variables

Concernant les variables, le standard (camelCase) est utilisé pour les variables et les fonctions.

### Fonctions et constantes

Pour les fonctions et les constantes, les normes sont respectés. (Pas plus qu'un paramètre par fonction, constantes en majuscules, etc.)

### Language

Le language du code est tout en anglais et le language d'affichage est tout en francais, donc tout est nickel pour cette section.

## Autres

### Sécurité :
Il est difficile de mettre en question la sécurité car l'application ne prend pas de donnés d'usager. Par exemple, l'utilisation des donnés de l'application semble etre bien fait et la gestion des erreurs majeures est bien fait aussi.

### Le code est-il optimisé en termes de performance et de consommation de ressources :
Dans plusieurs cas, le code aurait plus etre mieux optimisé comme dans l'exemple de l'utilisation de la classe d-none, et la création d'un fichier typescript pour fetch les donnés sur les chansons et les artistes aurait été plus efficace que les créés dans songList.vue.

### Est-ce qu'un algorithme peut être amélioré :
Oui, l'algorithme de shuffleSong() utilise deux variables inutiles : 
**Algorithme dans le fichier songList :**
```js{4}
function shuffleSongs() {
  const randomId = Math.floor(Math.random() * songs.value.length);
  const randomSong = songs.value[randomId];
 
  sendSong(randomSong);
}
```

**Algorithme amélioré :**
```js{4}
function shuffleSongs() {
  sendSong(songs.value[Math.floor(Math.random() * songs.value.length)];);
}
```
