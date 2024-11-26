// script.js
document.getElementById("fileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const imgElement = document.getElementById("uploadedImage");
        imgElement.src = e.target.result;
        imgElement.style.display = "block";
        document.getElementById("recognizeBtn").disabled = false;
      };
      reader.readAsDataURL(file);
    }
  });
  
  document.getElementById("recognizeBtn").addEventListener("click", function() {
    const imageElement = document.getElementById("uploadedImage");
    recognizeImage(imageElement);
  });
  
  function recognizeImage(imageElement) {
    // You can replace this function with a call to an actual ML model or API
    // For now, this is a mock recognition result.
    const resultDiv = document.getElementById("result");
    
    // Simulate the result of image recognition
    setTimeout(() => {
      resultDiv.textContent = "This is a sample result: 'A dog'";
    }, 1000);
  }
  