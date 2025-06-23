import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/shared/components/Card.tsx';
import { useForm } from 'react-hook-form';
import { login, LoginFormData, LoginSchema } from '@/feature/login/api/Login.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/Form.tsx';
import { Input } from '@/shared/components/Input.tsx';

export const Login = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <div className={'flex size-full justify-center items-center'}>
      <Card className="bg-black text-white bg-center size-5/12 flex flex-col">
        <Form {...form}>
          <CardHeader className={'items-center justify-center'}>
            <CardDescription>계정과 패스워드를 입력해주세요.</CardDescription>
          </CardHeader>
          <form onSubmit={form.handleSubmit(login)} className={'flex flex-col flex-1'}>
            <CardContent
              className={'flex flex-col flex-1 items-center justify-center w-full gap-3'}
            >
              <FormField
                control={form.control}
                name={'email'}
                render={({ field }) => (
                  <FormItem className={'w-full max-w-[300px]'}>
                    <FormLabel className={'items-center justify-center'}>이메일</FormLabel>
                    <FormMessage />
                    <FormControl>
                      <Input type="email" placeholder="이메일을 입력해주세요" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={'password'}
                render={({ field }) => (
                  <FormItem className={'w-full max-w-[300px]'}>
                    <FormLabel className={'items-center justify-center'}>비밀번호</FormLabel>
                    <FormMessage />
                    <FormControl>
                      <Input type="password" placeholder="비밀번호를 입력해주세요" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className={'items-center justify-center'}>
              <CardAction>
                <button
                  type={'submit'}
                  className={'bg-white text-black px-4 py-2 rounded transition-colors'}
                >
                  로그인
                </button>
              </CardAction>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};
