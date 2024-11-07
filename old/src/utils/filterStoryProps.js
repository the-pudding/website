export default function filterStoryProps({ data, keys }) {
	return data.map(d => {
		const o = {};
		keys.forEach(key => o[key] = d[key]);
		return o;
	});
}
