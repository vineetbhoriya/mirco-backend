import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Utility function to create a proxy middleware
const createServiceProxy = (serviceUrl: string, pathPrefix: string) => createProxyMiddleware({
  target: serviceUrl,
  changeOrigin: true,
  pathRewrite: { [`^${pathPrefix}`]: '' },
});

app.get('/', (req, res) =>{
  res.send('API Gateway is available');
})
app.use('/api/test', (req, res) => {
  res.send('API Gateway is working!');
});

// Define proxy middleware for different services
app.use('/api/user', createServiceProxy(process.env.USER_SERVICE_URL!, '/api/user'));
app.use('/api/product', createServiceProxy(process.env.PRODUCT_SERVICE_URL!, '/api/product'));
app.use('/api/order', createServiceProxy(process.env.ORDER_SERVICE_URL!, '/api/order'));
app.use('/api/payment', createServiceProxy(process.env.PAYMENT_SERVICE_URL!, '/api/payment'));


// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
