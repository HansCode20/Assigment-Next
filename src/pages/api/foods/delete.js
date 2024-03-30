// pages/api/foods/delete.js

export default function handler(req, res) {
    const {
      query: { id },
      method,
    } = req;
  
    switch (method) {
      case 'DELETE':
        // Handle DELETE request untuk menghapus makanan
        // Di sini Anda dapat menggunakan ID dari query untuk menentukan makanan mana yang akan dihapus
        res.status(200).json({ id, message: `Food ${id} has been deleted` });
        break;
      default:
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  