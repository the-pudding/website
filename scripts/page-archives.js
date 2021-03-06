const fse = require('fs-extra');
const replace = require('replace-in-file');
const { inlineSource } = require('inline-source');
const buble = require('buble');

const cwd = process.cwd();

const Meta = require(`${cwd}/templates/common/partials/meta`);
const Analytics = require(`${cwd}/templates/common/partials/analytics`);
const Header = require(`${cwd}/templates/common/partials/header`);
const Footer = require(`${cwd}/templates/common/partials/footer`);
const Stories = require(`${cwd}/templates/archives/partials/stories`);

const topicsData = JSON.parse(
  fse.readFileSync(`${cwd}/scripts/topics-data.json`)
);

function cleanTemp(dir) {
  console.log('cleaning tmp folder...');
  return new Promise((resolve, reject) => {
    fse.remove(`${cwd}/.tmp/${dir}`, err => {
      if (err) reject(err);
      else resolve();
    });
  });
}

function copyHTMLTemplate() {
  console.log('copying html template file...');
  fse.ensureDirSync(`${cwd}/.tmp/archives`);
  fse.copySync(
    `${cwd}/templates/archives/index.template`,
    `${cwd}/.tmp/archives/index.template`
  );
  return Promise.resolve();
}

function compileTopicsJS() {
  return `
		window.topicsData = '${JSON.stringify(topicsData)}';
	`;
}

function compileEntryJS() {
  const input = fse.readFileSync(
    `${cwd}/templates/archives/entry.template.js`,
    'utf-8'
  );
  const output = buble.transform(input);
  return output.code;
}

function createMarkup() {
  console.log('creating markup...');

  const metaHTML = Meta({ title: 'Archives' });
  const analyticsHTML = Analytics();
  const headerHTML = Header('../');
  const storiesHTML = Stories();
  const footerHTML = Footer();
  const topicsJS = compileTopicsJS();
  const entryJS = compileEntryJS();

  const options = {
    files: `${cwd}/.tmp/archives/index.template`,
    from: [
      '<!-- meta -->',
      '<!-- analytics -->',
      '<!-- header -->',
      '<!-- stories -->',
      '<!-- footer -->',
      '/* topics.js */',
      '/* entry.js */',
    ],
    to: [
      metaHTML,
      analyticsHTML,
      headerHTML,
      storiesHTML,
      footerHTML,
      topicsJS,
      entryJS,
    ],
  };

  return new Promise((resolve, reject) => {
    replace(options)
      .then(resolve)
      .catch(reject);
  });
}

function copyHTMLToDev(files) {
  return new Promise((resolve, reject) => {
    const path = `${cwd}/.tmp/archives/index.html`;
    fse.copySync(files[0].file, path);
    inlineSource(path, {
      compress: false,
      ignore: ['css', 'js'],
    })
      .then(html => {
        fse.ensureDirSync(`${cwd}/dev/archives`);
        fse.writeFileSync(`${cwd}/dev/archives/index.html`, html);
        resolve();
      })
      .catch(reject);
  });
}

function createHTML() {
  return new Promise((resolve, reject) => {
    copyHTMLTemplate()
      .then(createMarkup)
      .then(copyHTMLToDev)
      .then(resolve)
      .catch(reject);
  });
}

function init() {
  cleanTemp('archives')
    .then(createHTML)
    .then(() => {
      console.log('DONE: archives.js');
      process.exit();
    })
    .catch(err => console.log(err));
}

init();
