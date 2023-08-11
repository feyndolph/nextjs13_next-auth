import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "1h",
};

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
) {
  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secret_key!, options);
  return token;
}

export function verityJwt(token: string) {
  try {
    const secret_key = process.env.SECRET_KEY;
    const decode = jwt.verify(token, secret_key!);
    return decode as JwtPayload;
  } catch (err) {
    console.log(err);
    return null;
  }
}
