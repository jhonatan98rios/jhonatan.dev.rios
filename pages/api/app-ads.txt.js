export default function handler(req, res) {
    const filePath = join(__dirname, 'static/app-ads.txt')
    app.serveStatic(req, res, filePath)
}