import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/shared/components/Card.tsx';

export const Login = () => {
  return (
    <div className={'flex size-full justify-center items-center'}>
      <Card className="bg-black text-white bg-center size-1/2">
        <CardHeader>
          {/* <CardTitle>로그인</CardTitle> */}
          <CardDescription>계정과 패스워드를 입력해주세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <CardAction>로그인</CardAction>
        </CardFooter>
      </Card>
    </div>
  );
};
