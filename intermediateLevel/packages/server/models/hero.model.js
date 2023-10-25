import { Schema, model } from 'mongoose'

const heroSchema = new Schema({
  name: String,
  alterEgo: String,
  publisher: String
})

const Hero = model('Hero', heroSchema)

export default Hero