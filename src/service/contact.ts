import { EmailData } from "./email";

export const sendContactEmail = async (email: EmailData) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(email),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();

  if (!response.ok) {
    throw Error(data.message || "서버에러");
  }
  return data;
};
