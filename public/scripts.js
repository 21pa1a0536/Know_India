document.addEventListener('DOMContentLoaded', function () {
    // Replace the following data with actual state details
    const stateDetails = {
      name: 'Andhra Pradesh',
      capital: 'Amaravathi',
      dance: 'Kuchupudi',
      food: 'Pulav',
      tourism: 'Visakhapatnam',
      image: 'ap.jpg',
    };
  
    // Update the content with state details
    document.getElementById('state-name').innerText = stateDetails.name;
    document.getElementById('state-image').src = stateDetails.image;
    document.getElementById('capital').innerText += stateDetails.capital;
    document.getElementById('dance').innerText += stateDetails.dance;
    document.getElementById('food').innerText += stateDetails.food;
    document.getElementById('tourism').innerText += stateDetails.tourism;
  });
  