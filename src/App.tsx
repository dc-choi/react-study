import { useEffect, useRef, useState } from 'react';
import { data } from '@/data/data';
import { IApp } from './@types/app';

/**
 * js의 구조 분해 할당을 사용해서 Props를 함축적으로 사용할 수 있음.
 * TS를 사용하는 경우 타입을 지정해주어야 함.
 */
const App = ({ name, name2, startName }: IApp) => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');

  const timeRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeRef.current = setInterval(handleText, 2000);

    return () => {
      clearInterval(timeRef.current);
    };
  }, [count]);

  const handleText = () => {
    if (count < data.length - 1) setCount(count + 1);
    else setCount(0);

    setText(data[count]);
  };

  const login = () => {
    // eslint-disable-next-line no-alert
    alert('로그인 버튼 클릭');
  };

  const signup = () => {
    // eslint-disable-next-line no-alert
    alert('회원가입 버튼 클릭');
  };

  return (
    <div className="flex h-screen">
      {/* 왼쪽 섹션 */}
      <div className="flex flex-col flex-[60%] bg-[#210b61] p-5">
        <h2 className="text-[#d292ff] text-2xl mb-5 ml-5 flex items-center">
          ChatGPT
          <span className="w-5 h-5 bg-[#d292ff] rounded-full inline-block ml-2"></span>
        </h2>

        <div className="mt-[33%] ml-8 flex items-center">
          <p className="text-[#d292ff] text-4xl font-bold whitespace-pre-wrap">{text}</p>
        </div>
      </div>

      {/* 오른쪽 섹션 */}
      <div className="flex flex-col flex-[40%] bg-black justify-center items-center">
        <p className="text-white text-3xl font-bold">
          {startName === 'Get started' ? startName : `is Not ${startName}`}
        </p>
        <div className="flex mt-4">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:text-black mr-2"
            onClick={() => login()}
          >
            {name}
          </button>
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:text-black"
            onClick={() => signup()}
          >
            {name2}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
