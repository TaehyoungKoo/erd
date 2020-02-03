describe('Mocha Test Framework Lifecycle', () => {
  
  before(function () {
    console.log('  >  before')
  });

  beforeEach(function () {
    console.log('    >    beforeEach')
  });

  describe('Test Group', () => {
    it('Test A', () => {
      console.log('      >      Test A')
    })

    it('Test B', () => {
      console.log('      >      Test B')
    })
  })

  afterEach(function () {
    console.log('    >    afterEach')
  });

  after(function () {
    console.log('  >  after')
  });
})