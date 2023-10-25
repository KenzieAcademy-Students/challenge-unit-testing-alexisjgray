import chai from 'chai'
import chaiHttp from 'chai-http'
import app from './app'
import Hero from './models/hero.model'

chai.should()
chai.use(chaiHttp)

describe('Heroes', () => {
  beforeEach((done) => { // Before each test we empty the database
    Hero.deleteMany()
      .then(() => done())

  })


  describe('/GET hero', () => { // Example: Tests that the heroes endpoint works, and returns nothing since we emptied the database prior
    it('should get all the heroes', (done) => {
      chai.request(app)
        .get('/api/hero')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('array')
          res.body.length.should.be.eql(0)
          done()
        })
    })
  })

  // Challenges:
  describe('/POST hero', () => {
    // Your code here
  })
})