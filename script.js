// script.js

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to get prime numbers in a given range
function getPrimesInRange(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

function calculatePrimes() {
  // Get start and end range values
  const start = parseInt(document.getElementById('startInput').value);
  const end = parseInt(document.getElementById('endInput').value);

  // Measure time taken for getPrimesInRange
  const startTime = performance.now();
  const primes = getPrimesInRange(start, end);
  const endTime = performance.now();

  // Display total time
  const totalTime = endTime - startTime;
  document.getElementById('totalTime').innerText = `Time taken to run all instances: ${totalTime} ms`;

  // Display single time
  const singleTime = measureSingleTime();
  document.getElementById('singleTime').innerText = `Time taken for a single number: ${singleTime} ms`;

  // Display prime numbers
  document.getElementById('tab2').innerText = `Prime Numbers: ${primes.join(', ')}`;

  // Show the result container
  document.getElementById('result').style.display = 'block';
}

function measureSingleTime() {
  const testNumber = 17; // You can change this to any number for testing
  const start = performance.now();
  isPrime(testNumber);
  const end = performance.now();
  return end - start;
}

function showDetails() {
  // Show the popup
  document.getElementById('detailsPopup').style.display = 'block';

  // Display details in tabs
  showTab('tab1');
  showTab('tab2');
}

function showTab(tabName) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.tabContent');
  tabs.forEach(tab => tab.style.display = 'none');

  // Show the selected tab
  document.getElementById(tabName).style.display = 'block';
}
