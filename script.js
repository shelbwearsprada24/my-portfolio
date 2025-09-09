// Set current year
document.getElementById('year').textContent = new Date().getFullYear();
// Simple interactivity: show a toast/log when CTA is clicked
document.getElementById('cta-btn').addEventListener('click', () => {
alert('Thanks for reaching out!');
});
// Log which project is viewed (for later: we’ll turn this into an analytics)

document.querySelectorAll('.view-project').forEach(a => {
a.addEventListener('click', (e) => {
e.preventDefault();
const name = a.dataset.project;
console.log(`Viewed project: ${name}`);
});
});