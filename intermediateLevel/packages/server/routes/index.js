import { Router } from 'express'
import heroRoutes from './hero.routes'

const router = Router()

router.use('/hero', heroRoutes)

export default router