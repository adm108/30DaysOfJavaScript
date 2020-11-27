const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB"
];

module.exports = { webTechs };

webTechs.includes("Sass")
  ? console.log("Sass is a CSS preprocess")
  : webTechs.push("Sass"),
  console.log(webTechs);
