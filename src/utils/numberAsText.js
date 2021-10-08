export default function numberAsText(x) {
	const text = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
	if (x >= 10) return x;
	return text[x];
}