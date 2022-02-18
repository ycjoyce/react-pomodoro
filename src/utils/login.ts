import connect from "../apis/connect";

/**
 * 建立使用者
 * @param device
 * @returns token
 */
export const createUser = async (device: string): Promise<string> => {
  try {
    const {
      data: { token },
    } = await connect("/users", "post", { device });
    return token;
  } catch {
    return "";
  }
};

/**
 * 登入使用者
 * @param device
 * @returns token
 */
const login = async (device: string) => {
  try {
    const response = await connect("/users/login", "post", { device });
    return response.data.token;
  } catch (e) {
    return await createUser(device);
  }
};

export default login;
