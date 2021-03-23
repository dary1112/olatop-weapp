const format = json => {
  if (typeof json != 'string') {
      json = JSON.stringify(json, undefined, 2);
  }
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  var result = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
      var cls = 'darkorange';
      if (/^"/.test(match)) {
          if (/:$/.test(match)) {
              cls = 'red';
          } else {
              cls = 'green';
          }
      } else if (/true|false/.test(match)) {
          cls = 'blue';
      } else if (/null/.test(match)) {
          cls = 'magenta';
      }
      return '<span style="color:' + cls + '">' + match.replace(/\\n/g, '<br>') + '</span>';
  });
  return `<pre style="outline: 1px solid #ccc; padding: 5px; margin: 5px;">${result}</pre>`
}

export {
  format
}
