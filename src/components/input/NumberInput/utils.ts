export const formatNumber = (
  value: number,
  options: {
    locale?: string;
    format?: string;
    currency?: string;
    precision?: number;
    thousandSeparator?: string;
    decimalSeparator?: string;
  }
): string => {
  const {
    locale = 'en-US',
    format = 'number',
    currency = 'USD',
    precision,
    thousandSeparator,
    decimalSeparator,
  } = options;

  try {
    if (format === 'currency') {
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
      }).format(value);
    }

    if (format === 'percentage') {
      return new Intl.NumberFormat(locale, {
        style: 'percent',
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
      }).format(value / 100);
    }

    let formatted = new Intl.NumberFormat(locale, {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    }).format(value);

    if (thousandSeparator || decimalSeparator) {
      const parts = formatted.split(/[.,]/);
      if (parts.length === 2) {
        formatted =
          parts[0].replace(/,/g, thousandSeparator || ',') +
          (decimalSeparator || '.') +
          parts[1];
      } else {
        formatted = parts[0].replace(/,/g, thousandSeparator || ',');
      }
    }

    return formatted;
  } catch (error) {
    console.error('Error formatting number:', error);
    return value.toString();
  }
};
