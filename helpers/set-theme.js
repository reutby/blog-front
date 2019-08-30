const {execSync} = require('child_process');
const {unlinkSync} = require('fs');
const themeName = process.env.THEME || 'default';
const isWin = process.platform === 'win32';

function getLinuxExec(theme) {
	return `ln -s themes/${theme}/ .current_theme`;
}

function getWindowsExec(theme) {
	return `mklink /J ".current_theme" "themes/${theme}"`
}

try {
	console.log('removing previous link, if exists..');
	unlinkSync('.current_theme');
	console.log('done.');
}
catch (e) {
	console.log('previous symlink does not exist.');
}
console.log('creating theme symlink..');
execSync(isWin ? getWindowsExec(themeName) : getLinuxExec(themeName));
console.log('symlink of theme created. you can build the front now.');