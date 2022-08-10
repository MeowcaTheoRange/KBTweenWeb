document.addEventListener("DOMContentLoaded", function(){
  window.editors = {};
  var editors = document.getElementsByClassName('gridpart');
  for (var i = 0; i < editors.length; i++) {
    var item = editors[i];
    item.innerHTML += `<button class="playbutton" onclick="ace.edit('${item.getElementsByClassName('imAnEditor')[0].id}').session.insert({row:0}, ' ');this.remove();">Start</button>`;
  }
  var name = "editor";
  window.editors[name] = ace.edit("editor");
  window.editors[name].setTheme("ace/theme/tomorrow_night_eighties");
  window.editors[name].session.setMode("ace/mode/javascript");
  window.editors[name].setOptions(window.aceOptions);
  window.editors[name].getSession().on('change', () => {updateAce("editor", window.editors["editor"].getSession().getValue(), true, false)});

  var name = "jumpy";
  window.editors[name] = ace.edit("jumpy");
  window.editors[name].setTheme("ace/theme/tomorrow_night_eighties");
  window.editors[name].session.setMode("ace/mode/javascript");
  window.editors[name].setOptions(window.aceOptions);
  window.editors[name].getSession().on('change', () => {updateAce("jumpy", window.editors["jumpy"].getSession().getValue(), true, false)});

  var name = "score";
  window.editors[name] = ace.edit("score");
  window.editors[name].setTheme("ace/theme/tomorrow_night_eighties");
  window.editors[name].session.setMode("ace/mode/javascript");
  window.editors[name].setOptions(window.aceOptions);
  window.editors[name].getSession().on('change', () => {updateAce("score", window.editors["score"].getSession().getValue(), true, false)});

  var name = "marqueenew";
  window.editors[name] = ace.edit("marqueenew");
  window.editors[name].setTheme("ace/theme/tomorrow_night_eighties");
  window.editors[name].session.setMode("ace/mode/javascript");
  window.editors[name].setOptions(window.aceOptions);
  window.editors[name].getSession().on('change', () => {updateAce("marqueenew", window.editors["marqueenew"].getSession().getValue(), true, true)});

  var name = "marqueenewalt";
  window.editors[name] = ace.edit("marqueenewalt");
  window.editors[name].setTheme("ace/theme/tomorrow_night_eighties");
  window.editors[name].session.setMode("ace/mode/javascript");
  window.editors[name].setOptions(window.aceOptions);
  window.editors[name].getSession().on('change', () => {updateAce("marqueenewalt", window.editors["marqueenewalt"].getSession().getValue(), true, true)});

  var name = "scorejs";
  window.editors[name] = ace.edit("scorejs");
  window.editors[name].setTheme("ace/theme/tomorrow_night_eighties");
  window.editors[name].session.setMode("ace/mode/javascript");
  window.editors[name].setOptions(window.aceOptions);
  window.editors[name].getSession().on('change', () => {updateAce("scorejs", window.editors["scorejs"].getSession().getValue(), true, true)});
});