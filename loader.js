function loadEntry() {
  const hash = window.location.hash.slice(1);
  const filename = hash ? `${hash}.txt` : '20.06.25.txt';
  const file = `entries/${filename}`;

  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error("Not found");
      return res.text();
    })
    .then(text => {
      document.getElementById("content").innerHTML = text;
    })
    .catch(() => {
      document.getElementById("content").innerHTML = "<p>Entry not found.</p>";
    });
}

window.addEventListener("hashchange", loadEntry);
window.addEventListener("load", loadEntry);
