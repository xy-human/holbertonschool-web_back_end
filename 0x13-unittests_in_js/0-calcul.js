module.exports = function calculateNumber(a, b) {
  const A = Number(a);
  const B = Number(b);
  const total = Math.round(A) + Math.round(B);

  if (Number.isNaN(A) || Number.isNaN(B))
    throw TypeError;

  return total;
}
