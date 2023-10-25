import Hero from "../models/hero.model"

export const getAllHeroes = async (req, res) => {
  try {
    const allHeroes = await Hero.find()

    res.status(200).json(allHeroes)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const createHero = async (req, res) => {
  try {
    const { name, alterEgo, publisher } = req.body 

    const newHero = await Hero.create({ name, alterEgo, publisher })

    res.status(200).json(newHero)    
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const getHeroDetails = async (req, res) => {
  const { heroId } = req.params
  try {
    const heroDetails = await Hero.findById(heroId)
    
    res.status(200).json(heroDetails)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const deleteHero = async (req, res) => {
  try {
    const { heroId } = req.params 
    const removedHero = await Hero.findOneAndDelete({ id: heroId })

    res.status(200).json(removedHero)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}

export const updateHero = async (req, res) => {
  try {
    const { heroId } = req.params 
    const { name, alterEgo, publisher } = req.body 
    const updatedHero = await Hero.findOneAndUpdate({ id: heroId }, { name, alterEgo, publisher }, { new: true })

    res.status(200).json(updatedHero)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}