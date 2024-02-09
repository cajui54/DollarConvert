export const formatCurrencyBR = new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  export const formatCurrencyUSA = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });