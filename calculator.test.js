const { calculateServiceCharge } = require('./calculator');

describe('Service Charge Calculator', () => {
  // Tier 1: $0 - $2,499 = 15%
  test('calculates 15% for $0', () => {
    const result = calculateServiceCharge(0);
    expect(result.percentage).toBe(0);
    expect(result.serviceCharge).toBe(0);
    expect(result.total).toBe(0);
  });

  test('calculates 15% for $500', () => {
    const result = calculateServiceCharge(500);
    expect(result.percentage).toBe(15);
    expect(result.serviceCharge).toBe(75);
    expect(result.total).toBe(575);
  });

  test('calculates 15% for $1000', () => {
    const result = calculateServiceCharge(1000);
    expect(result.percentage).toBe(15);
    expect(result.serviceCharge).toBe(150);
    expect(result.total).toBe(1150);
  });

  test('calculates 15% for $2499', () => {
    const result = calculateServiceCharge(2499);
    expect(result.percentage).toBe(15);
    expect(result.serviceCharge).toBe(374.85);
    expect(result.total).toBe(2873.85);
  });

  // Tier 2: $2,500 - $7,499 = 14%
  test('calculates 14% for $2500 (boundary)', () => {
    const result = calculateServiceCharge(2500);
    expect(result.percentage).toBe(14);
    expect(result.serviceCharge).toBe(350);
    expect(result.total).toBe(2850);
  });

  test('calculates 14% for $5000', () => {
    const result = calculateServiceCharge(5000);
    expect(result.percentage).toBe(14);
    expect(result.serviceCharge).toBe(700);
    expect(result.total).toBe(5700);
  });

  test('calculates 14% for $7499', () => {
    const result = calculateServiceCharge(7499);
    expect(result.percentage).toBe(14);
    expect(result.serviceCharge).toBe(1049.86);
    expect(result.total).toBe(8548.86);
  });

  // Tier 3: $7,500 - $14,999 = 13%
  test('calculates 13% for $7500 (boundary)', () => {
    const result = calculateServiceCharge(7500);
    expect(result.percentage).toBe(13);
    expect(result.serviceCharge).toBe(975);
    expect(result.total).toBe(8475);
  });

  test('calculates 13% for $10000', () => {
    const result = calculateServiceCharge(10000);
    expect(result.percentage).toBe(13);
    expect(result.serviceCharge).toBe(1300);
    expect(result.total).toBe(11300);
  });

  test('calculates 13% for $14999', () => {
    const result = calculateServiceCharge(14999);
    expect(result.percentage).toBe(13);
    expect(result.serviceCharge).toBe(1949.87);
    expect(result.total).toBe(16948.87);
  });

  // Tier 4: $15,000+ = 12%
  test('calculates 12% for $15000 (boundary)', () => {
    const result = calculateServiceCharge(15000);
    expect(result.percentage).toBe(12);
    expect(result.serviceCharge).toBe(1800);
    expect(result.total).toBe(16800);
  });

  test('calculates 12% for $20000', () => {
    const result = calculateServiceCharge(20000);
    expect(result.percentage).toBe(12);
    expect(result.serviceCharge).toBe(2400);
    expect(result.total).toBe(22400);
  });

  test('calculates 12% for $50000', () => {
    const result = calculateServiceCharge(50000);
    expect(result.percentage).toBe(12);
    expect(result.serviceCharge).toBe(6000);
    expect(result.total).toBe(56000);
  });

  // Edge cases
  test('throws error for negative amounts', () => {
    expect(() => calculateServiceCharge(-100)).toThrow('Amount cannot be negative');
  });

  test('handles decimal amounts correctly', () => {
    const result = calculateServiceCharge(999.99);
    expect(result.percentage).toBe(15);
    expect(result.amount).toBe(999.99);
  });
});
