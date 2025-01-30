mermaid.initialize({
    startOnLoad: true,
    theme: "dark", // Built-in dark theme
    themeVariables: {
      primaryColor: "#1f6feb", // Nodes' primary color
      primaryTextColor: "#ffffff", // Text color inside nodes
      primaryBorderColor: "#1f6feb", // Border color of nodes
      lineColor: "#f8f9fa", // Line color for connections
      arrowheadColor: "#f8f9fa", // Arrowhead color
      background: "#121212", // Background color
    },
  });


  function playVideo(thumbnailId, videoSrc) {
    var thumbnail = document.getElementById(thumbnailId);

    // Create the video element dynamically
    var videoPlayer = document.createElement('video');
    videoPlayer.setAttribute('controls', 'true');
    videoPlayer.classList.add('video-player');

    // Add the source for the video
    var source = document.createElement('source');
    source.setAttribute('src', videoSrc); // Use the exact path passed in videoSrc
    source.setAttribute('type', 'video/mp4');
    videoPlayer.appendChild(source);

    // Replace the thumbnail with the video player
    thumbnail.parentNode.replaceChild(videoPlayer, thumbnail);

    // Play the video
    videoPlayer.play();
}