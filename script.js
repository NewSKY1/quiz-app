// Modal controls
function openModal()  { document.getElementById('overlay').classList.add('open'); }
function closeModal() { document.getElementById('overlay').classList.remove('open'); }
function closeOnBg(e) { if (e.target === document.getElementById('overlay')) closeModal(); }

// File input change
document.getElementById('fileInput').addEventListener('change', function() {
  const name = this.files[0]?.name;
  if (name) document.querySelector('.drop-zone span').textContent = '✓ ' + name;
});

// Drag & drop support
const dz = document.querySelector('.drop-zone');
dz.addEventListener('dragover', e => { e.preventDefault(); dz.classList.add('drag-over'); });
dz.addEventListener('dragleave', () => { dz.classList.remove('drag-over'); });
dz.addEventListener('drop', e => {
  e.preventDefault();
  dz.classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if (file) dz.querySelector('span').textContent = '✓ ' + file.name;
});