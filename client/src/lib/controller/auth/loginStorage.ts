export function loginStorage(token: string, userId: string) {
  localStorage.setItem(
    "userData",
    JSON.stringify({
      token,
      userId,
    })
  );
}
