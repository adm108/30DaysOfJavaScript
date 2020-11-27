var countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya"
];

module.exports = { countries };

countries.includes("Ethiopia")
  ? console.log("ETHIOPIA")
  : countries.push("Ethiopia");
