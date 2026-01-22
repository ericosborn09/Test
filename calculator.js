/**
 * Calculate service charge based on amount
 * Rules:
 * - $0 – $2,499: 15% service charge
 * - $2,500 – $7,499: 14% service charge
 * - $7,500 – $14,999: 13% service charge
 * - $15,000+: 12% service charge
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

  // Determine service charge percentage based on amount tiers
  let percentage;
  if (amount < 2500) {
    percentage = 15;
  } else if (amount < 7500) {
    percentage = 14;
  } else if (amount < 15000) {
    percentage = 13;
  } else {
    percentage = 12;
  }

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
