export default async function handler(req, res) {
  try {
    const body = req.body;

    console.log("📦 受信データ:", body);

    res.status(200).json({
      status: "ok",
      message: "イベント受信しました",
      received: body
    });
  } catch (err) {
    console.error("❌ エラー:", err);
    res.status(500).json({ status: "error", message: err.message });
  }
}
