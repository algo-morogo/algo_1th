const reverse8bit = new Array(256).fill(0).map((_, i) => {
	let x = i;
	let	r = 0;

	for (let j = 0; j < 8; j++) {
		r = (r << 1) | (x & 1);
		x >>= 1;
	}

	return r;
});

function reverseBits(n: number): number {
	return (
		(reverse8bit[n & 255] << 24) |
		(reverse8bit[(n >> 8) & 255] << 16) |
		(reverse8bit[(n >> 16) & 255] << 8) |
		reverse8bit[(n >> 24) & 255]
	);
}