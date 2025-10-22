const express = require('express')
const router = express.Router()

let people = require('../data')

// GET всіх людей
router.get('/', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

// POST нової людини
router.post('/', (req, res) => {
    const { name } = req.body
    if (name) {
        return res.status(201).json({ success: true, person: name })
    }
    res.status(400).json({ success: false, msg: 'Please provide a name value' })
})

// PUT людини
router.put('/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => {
        return person.id === Number(id)
    })

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `No person with provided id ${id}` })
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })

    return res
        .status(200)
        .json({ success: true, data: newPeople })
})

// DELETE людини
router.delete('/:id', (req, res) => {
    const { id } = req.params

    const person = people.find((person) => {
        return person.id === Number(id)
    })

    if (!person) {
        return res
            .status(404)
            .json({ success: false, msg: `No person with provided id ${id}` })
    }

    const newPeople = people.filter((person) => {
        if (person.id !== Number(id)) {
            return person
        }
    })

    return res
        .status(200)
        .json({ success: true, data: newPeople })
})

module.exports = router
