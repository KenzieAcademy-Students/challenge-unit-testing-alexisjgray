import { Router } from 'express'
import { createHero, deleteHero, getAllHeroes, getHeroDetails, updateHero } from '../controllers/hero.controller'

const router = Router()

router.route('/')
  .get(getAllHeroes)
  .post(createHero)

router.route('/:heroId')
  .get(getHeroDetails)
  .put(updateHero)
  .delete(deleteHero)


export default router