document.getElementById(‘status’).textContent = ‘JS status: WORKING!’;

function post() {
var text = document.getElementById(‘input’).value;
if (!text) return;
var card = document.createElement(‘div’);
card.className = ‘card’;
card.textContent = text;
document.getElementById(‘feed’).appendChild(card);
document.getElementById(‘input’).value = ‘’;
}
