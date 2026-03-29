import * as bcrypt from 'bcrypt';
export const hash = (
  text: string,
  saltRound: number = Number(process.env.SALT_ROUND || 10),
) => {
  return bcrypt.hashSync(text, saltRound);
};

export const compareHash = (text: string, hash: string) => {
  return bcrypt.compareSync(text, hash);
};
