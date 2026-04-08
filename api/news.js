export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.app.fightbook.com/news/public?limit=4")
    const data = await response.json()

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")

    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" })
  }
}
