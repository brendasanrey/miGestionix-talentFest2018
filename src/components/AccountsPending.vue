<template>
<form><input
                type="text"><vue-speech lang="es-ES" @onTranscriptionEnd="onEnd" /></form>
               
</template>


<script>
export default {
  methods: {
    onEnd ({ lastSentence, transcription }) {
      // `lastSentence` is the last sentence before the pause
      // `transcription` is the full array of sentences
    }
  }
}
</script>

<style scoped lang="css">
</style>


