// pages/api/foods/[id].js

export default function handler(req, res) {
    const {
      query: { id },
      method,
    } = req;
  
    switch (method) {
      case 'GET':
        // Handle GET request untuk mendapatkan detail makanan berdasarkan ID
        res.status(200).json({ id, name: `Food ${id}` });
        break;
      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  