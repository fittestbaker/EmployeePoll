export const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    hour12: true,
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
