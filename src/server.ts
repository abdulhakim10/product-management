import app from './app';
import mongoose from 'mongoose';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database connected successfully');

    app.listen(config.prot, () => {
      console.log(
        `Product Management server running on the port: ${config.prot}`,
      );
    });
  } catch (err) {
    console.log(err);
  }
}

main();
