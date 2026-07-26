/**
 * 뿌리 서비스는 해커톤 이후 운영이 종료되어 추천 API가 더 이상 응답하지 않는다.
 *
 * 종료 상태를 "코드를 주석 처리하는 방식"으로 표현하면 기능 코드가 통째로
 * 죽은 채 남고, 딸린 변수들이 미사용으로 걸려 lint 게이트도 통과하지 못한다.
 * 플래그로 분기하면 종료 안내와 추천 화면이 모두 살아 있는 코드로 유지되고,
 * 빌드 타임에 값이 정해지므로 쓰지 않는 쪽은 번들에서 제거된다.
 *
 * 기본값은 "종료"다. 추천 화면을 확인하려면 아래처럼 실행한다.
 *   NEXT_PUBLIC_SERVICE_CLOSED=false yarn dev
 */
export const IS_SERVICE_CLOSED =
  process.env.NEXT_PUBLIC_SERVICE_CLOSED !== "false";
