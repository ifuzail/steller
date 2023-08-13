import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { cartItems, ...formData } = req.body;
      // Process your form data and cart items here
      // Send confirmation response
      res.status(200).json({ message: 'Order submitted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while submitting the order' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
