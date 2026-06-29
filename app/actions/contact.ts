"use server";

export async function submitContactForm(formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    product: formData.get("product"),
    message: formData.get("message"),
  };

  try {
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) {
      throw new Error("Webhook URL is not defined");
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Failed to submit form: ${response.statusText}`);
    }
    
    return { success: true };
  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, error: "Failed to submit form." };
  }
}
