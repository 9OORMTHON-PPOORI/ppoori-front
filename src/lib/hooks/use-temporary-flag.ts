import { useEffect, useRef, useState } from "react";

/**
 * 잠깐 켜졌다 스스로 꺼지는 플래그. 버튼을 눌렀을 때의 시각 피드백에 쓴다.
 *
 * 핸들러 안에서 setTimeout을 직접 부르면 정리할 방법이 없어, 지속 시간이
 * 끝나기 전에 화면을 벗어나면 사라진 컴포넌트에 setState가 호출된다.
 * 타이머를 ref로 들고 있다가 언마운트와 재호출 시점에 정리한다.
 */
export const useTemporaryFlag = (durationMs: number) => {
  const [isOn, setIsOn] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const turnOn = () => {
    setIsOn(true);
    // 연타하면 마지막 입력 기준으로 지속 시간을 다시 센다.
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIsOn(false), durationMs);
  };

  return [isOn, turnOn] as const;
};
