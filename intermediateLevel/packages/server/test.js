import chai from "chai";
import chaiHttp from "chai-http";
import app from "./app";
import Hero from "./models/hero.model";
import { request } from "http";
const { expect } = require("chai");

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

  describe("/GET /hero/:heroId", () => {
    it("should retrieve a single hero's details", (done) => {
      const newHeroData = {
        name: "Superman",
      };

      chai
        .request(app)
        .post("/api/hero")
        .send(newHeroData)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.have.property("_id");

          const heroId = res.body._id;

          chai
            .request(app)
            .get(`/api/hero/${heroId}`)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.have.property("_id");
              done();
            });
        });
    });
  });

  describe("/DELETE /hero/:heroId", () => {
    it("should delete a single hero's details", (done) => {
      const newHeroData = {
        name: "Superman",
      };
      chai
        .request(app)
        .post("/api/hero")
        .send(newHeroData)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("name", "Superman");

          const heroId = res.body._id;

          chai
            .request(app)
            .delete(`/api/hero/${heroId}`)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a("object");
              done();
            });
        });
    });
  });

  describe("/PUT /hero/:heroId", () => {
    it("should update a single hero's details", (done) => {
      const newHeroData = {
        name: "Superman",
      };

      chai
        .request(app)
        .post("/api/hero")
        .send(newHeroData)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body).to.have.property("_id");

          const heroId = res.body._id;

          chai
            .request(app)
            .put(`/api/hero/${heroId}`)
            .send({ name: "Bizarro" })
            .end((err, res) => {
              res.should.have.status(200);
              done();
            });
        });
    });
  });
});
