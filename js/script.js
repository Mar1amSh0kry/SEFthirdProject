const copyBtn = document.getElementById('copyBtn');

new bootstrap.Tooltip(copyBtn, {
    placement: 'bottom',
    trigger: 'hover'
});

copyBtn.addEventListener('click', () => {
    alert("Copied to clipboard!");
});

