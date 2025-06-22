function loadEntry() {
  const hash = window.location.hash.slice(1);
  const filename = hash ? `${hash}.md` : 'magiccards.md';
  const file = `entries/${filename}`;

  console.log("Loading:", file);

  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error("Not found");
      return res.text();
    })
    .then(markdown => {
      const html = marked.parse(markdown);
      document.getElementById("content").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("content").innerHTML = "<p>Entry not found.</p>";
    });
}

window.addEventListener("hashchange", loadEntry);
window.addEventListener("load", loadEntry);
