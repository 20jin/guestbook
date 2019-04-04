import repliesService from '@/services/repliesService'

describe('Replies Service', () => {
  describe('get', () => {
    describe('when given no params', () => {
      it('returns all replies', () => {
        repliesService.get().then((response) => {
          expect(response.data.replies).to.be.a('array');
        });
      });
    });
  });
});
