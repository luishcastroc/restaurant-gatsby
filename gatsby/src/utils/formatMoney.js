const formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format;

export default function formatMoney(cents) {
  return formatter(cents / 100);
}
