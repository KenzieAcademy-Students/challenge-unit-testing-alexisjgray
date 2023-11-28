import chai from "chai";
import chaiHttp from "chai-http";
import app from "./app";
import Hero from "./models/hero.model";

chai.should();
chai.use(chaiHttp);

describe("Heroes", () => {
  beforeEach((done) => {
    // Before each test we empty the database
    Hero.deleteMany().then(() => done());
  });

  describe("/GET hero", () => {
    // Example: Tests that the heroes endpoint works, and returns nothing since we emptied the database prior
    it("should get all the heroes", (done) => {
      chai
        .request(app)
        .get("/api/hero")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  // Challenges:
  describe("/POST hero", () => {
    it("should create a new hero", (done) => {
      const newHeroData = {
        name: "Superman",
        power: "Strength",
      };
      chai
        .request(app)
        .post("/api/hero")
        .send(newHeroData)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name", "Superman");
          done();
        });
    });
  });

  // const heroEndpoint = (heroId) => `/hero/${heroId}`;
  describe("/GET /hero/:heroId", () => {
    it("should retrieve a single hero's details", (done) => {
      const newHeroData = {
        name: "Superman",
        id: 123,
      };
      chai
        .request(app)
        .get(`/hero/${newHeroData.id}`)
        .end((err, res) => {
          console.log(res);
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("id").which.is.a("number");
          res.body.should.have.property("id", 123);
          done();
        });
    });
  });
});
