/**
 * Calculate service charge based on amount
 * Rules:
 * - 0-1000: 15% service charge
 * - Decreases by 1% for every additional 1000
 * - Minimum service charge is 0%
 *
 * @param {number} amount - The amount to calculate service charge for
 * @returns {object} - Object containing amount, percentage, and service charge
 */
function calculateServiceCharge(amount) {
  if (amount < 0) {
    throw new Error('Amount cannot be negative');
  }

  if (amount === 0) {
    return {
      amount: 0,
      percentage: 0,
      serviceCharge: 0,
      total: 0
    };
  }

  // Calculate which tier the amount falls into
  // Amounts 1-1000 are tier 0, 1001-2000 are tier 1, etc.
  const tier = Math.ceil(amount / 1000) - 1;

  // Start at 15% and decrease by 1% per tier
  let percentage = 15 - tier;

  // Ensure percentage doesn't go below 0
  percentage = Math.max(0, percentage);

  const serviceCharge = (amount * percentage) / 100;
  const total = amount + serviceCharge;

  return {
    amount: parseFloat(amount.toFixed(2)),
    percentage: percentage,
    serviceCharge: parseFloat(serviceCharge.toFixed(2)),
    total: parseFloat(total.toFixed(2))
  };
}

module.exports = { calculateServiceCharge };
