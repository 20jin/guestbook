
const expectedPayload = 'milo';

//// 로더 구성에서 느낌표("!")는 각기 다른 로더를 동일한 파일 형식(동일한 확장자)으로 연결하는데 사용된다.
const homeModuleInjector = require('inject-loader!@/store/modules/home');

const homeModule = homeModuleInjector({
  '@/services/repliesService' : {
    get() {
      return Promise.resolve({
        data : {
          replies: expectedPayload,
        },
      });
    },
  }
});
