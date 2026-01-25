import bcrypt from 'bcrypt';

export async function hash(password: string) {
  return await bcrypt.hash(password, 0);
}

export async function compate(password: string, input: string) {
  return await bcrypt.compare(password, input);
}
