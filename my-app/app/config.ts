
export const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5165/api"
    : "https://mymadrasah-webapi-prod-dka7frfwcthzg7h4.westeurope-01.azurewebsites.net/api";
    