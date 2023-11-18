import axios from "axios"
import { NextResponse } from "next/server"
import { z } from "zod"

const bodyScheme = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
})

const WEBHOOK_URL = process.env.WEBHOOK_URL!

export async function POST(request: Request){
    try{
        const body = await request.json()
        const {name, email, message} = bodyScheme.parse(body)

        const messageData = {
            embeds: [
                {
                    "type": "rich",
                    "title": 'Contato - Portfólio',
                    "description": "",
                    "color": 0x23a100,
                    "fields": [
                        {
                            "name": "Nome",
                            "value": name,
                            "inline": true
                        },
                        {
                            "name": "Email",
                            "value": email,
                            "inline": true
                        },
                        {
                            "name": "Mensagem",
                            "value": message,
                            "inline": false
                        }
                    ]
                }
            ]
        }

        await axios.post(WEBHOOK_URL, messageData)
        return NextResponse.json({message: 'Mensagem enviada com sucesso!'})
    }catch(err){
        console.log(err)
        return NextResponse.error()
    }
}