function saveToLocalStorage() {
  const inputField = document.getElementById('inputField');
  const value = inputField.value;
  localStorage.setItem('myData', value);
  alert('Data saved to local storage.');
}

function loadFromLocalStorage() {
  const display = document.getElementById('display');
  const storedValue = localStorage.getItem('myData');
  if (storedValue) {
      display.textContent = `Stored Value: ${storedValue}`;
  } else {
      display.textContent = 'No data found in local storage.';
  }
}

function clearLocalStorage() {
  localStorage.removeItem('myData');
  alert('Data cleared from local storage.');
}