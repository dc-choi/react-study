import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email('유효한 이메일을 입력해주세요.'),
  password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 해요.'),
});

export type LoginFormData = z.infer<typeof LoginSchema>;

export const login = async (data: LoginFormData) => {
  alert(`email: ${data.email}\npassword: ${data.password}`);
};
