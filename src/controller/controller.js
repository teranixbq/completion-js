const OpenAI = require('openai');
const dotenv = require('dotenv');
const { validateRequest, successResponse, errorResponse } = require('../helper/helper');

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const generateText = async (req, res) => {
    const { request } = req.body;
    
    if (!validateRequest(req.body)) {
        return res.status(400).json(errorResponse("Data tidak boleh kosong"));
    }
    
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: request },
            ],
        });

        res.status(200).json(successResponse(completion.choices[0].message.content));

    } catch (error) {
        res.status(500).json(errorResponse(error.message));
    }
};

module.exports = { generateText };
