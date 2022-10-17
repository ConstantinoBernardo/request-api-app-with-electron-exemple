export default (id,type,theme)=>{

	var editorsSettings = {
		lint: true,
		lineNumbers: true,
		foldGutter: true,
		gutters: ["CodeMirror-lint-markers","CodeMirror-linenumbers", "CodeMirror-foldgutter"],
		tabSize: 2,
		indentUnit: 4,
		matchBrackets: true
	}

	let editor = CodeMirror.fromTextArea(document.querySelector(id), {
		mode: type,
		theme:theme,
		...editorsSettings
	});
	return editor
}