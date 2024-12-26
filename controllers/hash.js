import bcryptjs from 'bcryptjs';

async function hashPassword() {
  const password = "aisu1234"; // Replace with your desired admin password
  const hashedPassword = await bcryptjs.hash(password, 10);
  console.log(hashedPassword);
}

hashPassword();
