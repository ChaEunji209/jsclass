function convert(job) {
    let v1, v2, ans = '';

    switch(job) {
      case 'mi-km':
        v1 = parseFloat(document.getElementById('val-mi-km').value);
        ans = (v1 * 1.60934).toFixed(2) + ' km';
        break;

      case 'ft-in':
        v1 = parseFloat(document.getElementById('val-ft-in').value);
        ans = (v1 * 12).toFixed(2) + ' inches';
        break;

      case 'c-f':
        v1 = parseFloat(document.getElementById('val-c-f').value);
        ans = (v1 * 9/5 + 32).toFixed(1) + ' °F';
        break;

      case 'f-c':
        v1 = parseFloat(document.getElementById('val-f-c').value);
        ans = ((v1 - 32) * 5/9).toFixed(1) + ' °C';
        break;

      case 'cir':
        v1 = parseFloat(document.getElementById('val-cir').value);
        ans = (Math.PI * v1 * v1).toFixed(2) + ' square units';
        break;

      case 'tri':
        v1 = parseFloat(document.getElementById('val-tri1').value);
        v2 = parseFloat(document.getElementById('val-tri2').value);
        if (isNaN(v1) || isNaN(v2)) { ans = 'Enter both base & height'; break; }
        ans = (0.5 * v1 * v2).toFixed(2) + ' square units';
        break;

      case 'sqr':
        v1 = parseFloat(document.getElementById('val-sqr').value);
        ans = (v1 * v1).toFixed(2) + ' square units';
        break;
    }
    document.getElementById('res-' + job).textContent = ans;
  }

  function doCF() { convert('c-f'); }   // C → F button
  function doFC() { convert('f-c'); }   // F → C button