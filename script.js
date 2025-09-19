const data = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Neural Networks",
  "Natural Language Processing",
  "Computer Vision",
  "Data Science",
  "Web Development",
  "Mobile Apps",
  "Blockchain",
  "Cloud Computing",
  "Cybersecurity",
  "Augmented Reality",
  "Virtual Reality",
  "Internet of Things"
];

function searchFunction() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const results = document.getElementById("results");
  results.innerHTML = "";

  const filtered = data.filter(item => item.toLowerCase().includes(input));

  if (filtered.length === 0) {
    results.innerHTML = "<li>No results found</li>";
  } else {
    filtered.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      results.appendChild(li);
    });
  }
}