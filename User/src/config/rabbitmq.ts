import amqp from 'amqplib';

let channel: amqp.Channel;

export const connectRabbitMQ = async (): Promise<void> => {
  try {
    // Connect to RabbitMQ server
    const connection = await amqp.connect(process.env.RABBITMQ_URL || 'amqp://localhost');

    // Create a channel
    channel = await connection.createChannel();

    // Assert a queue (create if not exists)
    const queue = 'my_queue';
    await channel.assertQueue(queue, { durable: true });

    console.log('Connected to RabbitMQ');

    // Optionally, set up a consumer
    channel.consume(queue, (message) => {
      if (message !== null) {
        console.log('Received:', message.content.toString());
        // Acknowledge the message
        channel.ack(message);
      }
    });
  } catch (error) {
    console.error('Error connecting to RabbitMQ:', error);
  }
};

// Function to send messages to the queue
export const sendMessageToQueue = async (message: string) => {
  try {
    const queue = 'my_queue';
    if (channel) {
      await channel.sendToQueue(queue, Buffer.from(message));
      console.log(`Sent message: ${message}`);
    } else {
      console.error('RabbitMQ channel is not initialized');
    }
  } catch (error) {
    console.error('Error sending message to RabbitMQ:', error);
  }
};
