// https://calculator.swiftutors.com/rydberg-equation-calculator.html

// calculators arenot working

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const wavelengthRadio = document.getElementById('wavelengthRadio');
const principlequantumnumberoffinalstateRadio = document.getElementById('principlequantumnumberoffinalstateRadio');
const principlequantumnumberofinitialstateRadio = document.getElementById('principlequantumnumberofinitialstateRadio');

let wavelength;
const R = 1.097e7;
let principlequantumnumberoffinalstate = v1;
let principlequantumnumberofinitialstate = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

wavelengthRadio.addEventListener('click', function() {
  variable1.textContent = '(nf) Principle quantum number of final state';
  variable2.textContent = '(ni) Principle quantum number of initial state';
  principlequantumnumberoffinalstate = v1;
  principlequantumnumberofinitialstate = v2;
  result.textContent = '';
});

principlequantumnumberoffinalstateRadio.addEventListener('click', function() {
  variable1.textContent = 'Wavelength (nm)';
  variable2.textContent = '(ni) Principle quantum number of initial state';
  wavelength = v1;
  principlequantumnumberofinitialstate = v2;
  result.textContent = '';
});

principlequantumnumberofinitialstateRadio.addEventListener('click', function() {
  variable1.textContent = 'Wavelength (nm)';
  variable2.textContent = '(nf) Principle quantum number of final state';
  wavelength = v1;
  principlequantumnumberoffinalstate = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(wavelengthRadio.checked)
    result.textContent = `Wavelength = ${computeWavelength().toFixed(2)} nm`;

  else if(principlequantumnumberoffinalstateRadio.checked)
    result.textContent = `Principle quantum number of final state = ${computePrinciplequantumnumberoffinalstate().toFixed(2)}`;

  else if(principlequantumnumberofinitialstateRadio.checked)
    result.textContent = `Principle quantum number of initial state = ${computePrinciplequantumnumberofinitialstate().toFixed(2)}`;
})

// calculation

function computeWavelength() {
  return (1 / (R * (1 / Math.pow(Number(principlequantumnumberoffinalstate.value), 2) - 1 / Math.pow(Number(principlequantumnumberofinitialstate.value), 2)))) * 1000000000;
}

function computePrinciplequantumnumberoffinalstate() {
  return 1 / Math.sqrt((1 / Number(wavelength.value) / R) + (1 / Math.pow(Number(principlequantumnumberofinitialstate.value), 2)));
}

function computePrinciplequantumnumberofinitialstate() {
  return 1 / Math.sqrt(((R / Math.pow(Number(principlequantumnumberoffinalstate.value), 2)) - (1/Number(wavelength.value))) / R);
}