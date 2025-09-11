const $ = id => document.getElementById(id);

function convert(){
  const job = $("job").value;
  const v1  = parseFloat($("val1").value);
  const v2  = parseFloat($("val2").value);
  let ans;

  if(isNaN(v1)){ $("answer").textContent="Please enter a number"; return; }

  switch(job){
    case "mi-km": ans = (v1 * 1.60934).toFixed(2) + " km"; break;

    case "f-c":   ans = ((v1-32)*5/9).toFixed(2) + " °C"; break;

    case "c-f":   ans = (v1*9/5+32).toFixed(2) + " °F"; break;

    case "ft-in": ans = (v1 * 12).toFixed(2) + " inches"; break;

    case "cir":   ans = (Math.PI * v1 * v1).toFixed(2) + " square units"; break;

    case "tri":   if(isNaN(v2)){ $("answer").textContent="Enter both base & height"; return; }
                  ans = (0.5 * v1 * v2).toFixed(2) + " square units"; break;

    case "f-cm":  ans = (v1 * 30.48).toFixed(2) + "cetimeter"; break;

    case "sqr":   ans = (v1 * v1).toFixed(2) + " square units"; break;
  }
  $("answer").textContent = "Answer: " + ans;
}

/* ---------- show/hide 2nd box when needed ---------- */
$("job").onchange = () => {
  const needTwo = $("job").value === "tri";
  $("label2").style.display = needTwo ? "inline" : "none";
  $("val2").style.display   = needTwo ? "inline" : "none";
};