
/**
 * 
 * @param {Number} size size to convert to M or Yards
 * @param {String} unit Unit to Convert To or Null for Meters
 * @returns 
 */

export const convertUnit = (size, unit) => {
    if (unit === 'yards') return size;
    return (size * 0.9144).toFixed(2);
};