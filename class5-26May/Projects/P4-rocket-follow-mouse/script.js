document.addEventListener('mousemove',function(event){

  const rocket = document.getElementById('rocket');

  rocket.style.left = '${event.clientX}px';
  rocket.style.right = '${event.clientY}px';

})