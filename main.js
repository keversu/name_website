function render(results) {
  document.getElementById("out").innerHTML =
    results.map(r => `<pre>${r}</pre>`).join("");
}

document.getElementById("run").onclick = async () => {
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;

  const res = await fetch("/process", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ first, last })
  });

  const data = await res.json();
  render(data.results);
};

document.getElementById("clear").onclick = async () => {
  const res = await fetch("/clear", { method: "POST" });
  const data = await res.json();
  render(data.results);
};
