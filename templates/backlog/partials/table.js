const fse = require('fs-extra');

const cwd = process.cwd();

const backlogData = JSON.parse(
  fse.readFileSync(`${cwd}/.tmp/data/backlog.json`, 'utf-8')
);

const cols = ['date', 'story', 'description'];

function createTD(d) {
  return cols
    .map(c => {
      if (!d[c]) return false;
      return `<p class='idea--${c}'>${d[c]}</p>`;
    })
    .filter(d => d)
    .join('');
}

function createHTML() {
  const regularData = backlogData.filter(
    d => d.public === 'TRUE' && !d.seeking
  );
  const regularHTML = regularData
    .map(d => `<div class='idea'>${createTD(d)}</div>`)
    .join('');

  return `
		<div class='ideas--regular'>${regularHTML}</div>
	`;
}

module.exports = function() {
  const html = createHTML();
  return html;
};
