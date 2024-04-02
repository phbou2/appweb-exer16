---
outline: deep
---

# Revue de code de Philipe Bouchard
Analyse du code TP 1  de Philipe Bouchard faite par breno

## Le code est bien structuré?
Dans une vision generale, le code présent une bonne structure et division en dependent de ses classes
```md
- SongInfos.vue
- SongList.vue
- SongPlayer.vue
- SongPlayerControls.vue
- SongPlayerDatas.vue
- SongPlayerTime.vue
```
## **Gestion des errors**
Le code présenté ne gère pas les erreurs, il est donc possible qu'il en génère certaines, par exemple si l'utilisateur décide de lire sans aucune musique dans _currentAudio()_  ou de télécharger sans le document JSON, envoyant ainsi une liste vide.

## **Lisibilité du code**
   Le code est structuré et facile à lire, avec des commentaires ponctuels sur leur utilité.

```ts
const playAudio = (audioFile: string | undefined) => {
  if (!audioFile) {
    return;
  }

  // If no audio is currently playing or the new audio file is different
  if (!currentAudio || currentAudioFile.value !== audioFile) {
    // Pause the current audio if it exists
    if (currentAudio instanceof HTMLAudioElement) {
      currentAudio.pause();
    }

    //Create new audio object and refresh currentAudioFile value
    currentAudio = new Audio("/src/assets/files/songs/" + audioFile);
    currentAudioFile.value = audioFile;
  }

  // Play the audio
  currentAudio.play();
  isPlaying.value = true;
};
```
## ***Bonnes pratiques***

1. ### Comprehention et lisibilité du code
En ce qui concerne les bonnes pratiques de programmation, le code présente une bonne structure, claire et facile à lire, qui ne présente pas une grande complexité pour être comprise et interprétée. De plus, l'absence de commentaires aléatoires permet une lecture dynamique, évitant ainsi un effort inutile pour comprendre sa complexité.

De plus, les noms auto-explicatifs de ses variables et fonctions facilitent le processus de compréhension.

2. ### Classes qui font qu'une seule chose
La structure du code est concise, en envoyant et recevant les props de manière à pouvoir effectuer leurs fonctions sans avoir besoin d'appeler des méthodes qui n'appartiennent pas à la même pour que cela fonctionne.
```ts
defineProps<{
    onClick : OnClickClickListener | undefined
}>()

const emit  = defineEmits(['shuffle', 'nextSong', 'previousSong']);

const shuffleSongs = () => {
  emit('shuffle');
};
 ```
3. ### Identation
Le code présente une bonne indentation ne permettant pas des lignes de code très longues et inutiles.

```ts
<div id="songPlayerControls" class="col-6">
    <button id="btnPlay" type="button" class="btn btn-primary"
        @click="playAudio(props.currentSongFileName)"
        :class="{ 'd-none': isPlaying }">
        <i class="bi bi-play-fill"></i> Jouer
    </button>
    ...
</div>
```

4. ### Une seule langue
La faille du code réside dans les commentaires qui, bien qu'ils soient cohérents, sont en anglais alors que le code est entièrement en français.

## ***Vision general***
Dans l'ensemble, le code est solide et respecte la plupart des pratiques de programmation. Ce qui pourrait être fait différemment serait une gestion en cas d'erreurs. 

## Documentation
[normes et standards de programmation](https://appweb.progwmj.ca/documentations/normes)

