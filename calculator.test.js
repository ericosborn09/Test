const { calculateServiceCharge } = require('./calculator');

describe('Service Charge Calculator', () => {
  test('calculates 15% for amounts 0-1000', () => {
    const result = calculateServiceCharge(500);
    expect(result.percentage).toBe(15);
    expect(result.serviceCharge).toBe(75);
    expect(result.total).toBe(575);
  });

  test('calculates 15% for exactly 1000', () => {
    const result = calculateServiceCharge(1000);
    expect(result.percentage).toBe(15);
    expect(result.serviceCharge).toBe(150);
    expect(result.total).toBe(1150);
  });

  test('calculates 14% for amounts 1001-2000', () => {
    const result = calculateServiceCharge(1500);
    expect(result.percentage).toBe(14);
    expect(result.serviceCharge).toBe(210);
    expect(result.total).toBe(1710);
  });

  test('calculates 13% for amounts 2001-3000', () => {
    const result = calculateServiceCharge(2500);
    expect(result.percentage).toBe(13);
    expect(result.serviceCharge).toBe(325);
    expect(result.total).toBe(2825);
  });

  test('calculates 0% for amounts over 15000', () => {
    const result = calculateServiceCharge(16000);
    expect(result.percentage).toBe(0);
    expect(result.serviceCharge).toBe(0);
    expect(result.total).toBe(16000);
  });

  test('handles amount of 0', () => {
    const result = calculateServiceCharge(0);
    expect(result.percentage).toBe(0);
    expect(result.serviceCharge).toBe(0);
    expect(result.total).toBe(0);
  });

  test('throws error for negative amounts', () => {
    expect(() => calculateServiceCharge(-100)).toThrow('Amount cannot be negative');
  });

  test('handles decimal amounts correctly', () => {
    const result = calculateServiceCharge(999.99);
    expect(result.percentage).toBe(15);
    expect(result.amount).toBe(999.99);
  });

  test('boundary test at 2000', () => {
    const result = calculateServiceCharge(2000);
    expect(result.percentage).toBe(14);
  });

  test('boundary test at 2001', () => {
    const result = calculateServiceCharge(2001);
    expect(result.percentage).toBe(13);
  });
});
