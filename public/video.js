document.addEventListener('DOMContentLoaded', function() {
  const video = document.querySelector('video');
  const tracks = video.textTracks;

  function updateTranscription() {
    let activeTrack = [...tracks].find(t => t.mode === 'showing');
    if (activeTrack) {
      if (activeTrack.language === 'es') {
        document.getElementById('transcripcion-es').style.display = 'block';
        document.getElementById('transcripcion-en').style.display = 'none';
      } else if (activeTrack.language === 'en') {
        document.getElementById('transcripcion-es').style.display = 'none';
        document.getElementById('transcripcion-en').style.display = 'block';
      }
    }
  }

  // Revisa cada 500ms si cambió el idioma
  setInterval(updateTranscription, 500);
});
