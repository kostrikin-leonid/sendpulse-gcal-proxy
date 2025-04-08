export default async function handler(req, res) {
  // Ваш Google Script URL
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbzg1X-8JByjTRDgSSDll9sEj5_65tiwQUmYoRo5vyzKEObfS5ieokz4vn5FLweZCpBz/exec';
  
  try {
    const response = await fetch(scriptUrl);
    const text = await response.text();
    
    // Отдаем ответ как простой текст
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(text);
  } catch (error) {
    res.status(500).send('Ошибка при запросе к Google Script');
  }
}
