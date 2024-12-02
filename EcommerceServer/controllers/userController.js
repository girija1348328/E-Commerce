const prisma = require("../db/prisma");
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
    try {
        let data = req.body
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        let createdData = await prisma.user.create({ data })

        return res.status(201).send({ status: true, message: "success", data: createdData })
    }
    catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}

const login = async (req, res) => {
    try {
        let data = req.body

        let user = await prisma.user.findUnique({ where: { email: data.email } })
        if (!user) {
            return res.status(404).send({ status: false, msg: "Invalid Email or Password" })
        }
        console.log(user.password, data.password, "here the data")
        let isValidPassword = await bcrypt.compare(data.password, user.password)
        console.log(isValidPassword, "here the data")
        if (!isValidPassword) {
            return res.status(404).send({ status: false, msg: "Invalid Email or Password" })
        }
        return res.status(200).send({ status: true, msg: "Login Success", data: user })
    }
    catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}
module.exports = { login, createUser }