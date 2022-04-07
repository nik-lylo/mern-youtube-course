export function loginGetStorage() {
  const data = localStorage.getItem("userData");
  if (data) {
    return JSON.parse(data);
  }
  return data;
}
