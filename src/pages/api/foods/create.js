// pages/api/foods/create.js

export default function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case 'POST':
        // Handle POST request untuk membuat makanan baru
        // Di sini Anda dapat mengambil data yang diperlukan dari req.body
        res.status(200).json({ message: 'Food created successfully' });
        break;
      default:
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  