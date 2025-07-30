export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const body = req.body;
    console.log("✅ 受信:", body);

    return res.status(200).json({ message: "OK", received: body });
  } catch (error) {
    console.error("❌ エラー:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
