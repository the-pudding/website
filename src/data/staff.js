import authors from "$data/authors.js";

const clean = authors.filter(d => d.position === "Staff");

export default clean;