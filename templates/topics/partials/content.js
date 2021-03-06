const fse = require('fs-extra');

const cwd = process.cwd();

const Item = require(`${cwd}/templates/common/partials/item`);
const topicsData = JSON.parse(
  fse.readFileSync(`${cwd}/scripts/topics-data.json`)
).filter(d => d.slug !== 'other');

const storyData = JSON.parse(
  fse.readFileSync(`${cwd}/.tmp/data/stories.json`, 'utf-8')
);

function createHTML({ data }) {
  const stories = data
    .map(topic => {
      const storyItems = topic.values
        .map(story => `<li>${Item({ story, path: '../' })}</li>`)
        .join('');
      return `<ul data-topic="${topic.key}">${storyItems}</ul>`;
    })
    .join('');

  const nav = topicsData
    .map(
      topic =>
        `<li><button data-topic="${topic.slug}">${topic.label}</button></li>`
    )
    .join('');

  return `
		<div class='topics__stories'>
			${stories}
		</div>
	`;
}

module.exports = function() {
  const data = topicsData.map(d => ({
    key: d.slug,
    values: storyData.filter(v => v.topic.includes(d.slug))
  }));
  const html = createHTML({ data });
  return html;
};
