import { connectToDB } from '@utils/database'
import Prompt from "@models/prompt"

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json()


  try {
    await connectToDB() //Lambda function - it dies once the job is done.
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag
    })

    await newPrompt.save()

    return new Response(JSON.stringify(newPrompt), {
      status: 201 // Created Status Code
    })
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 })
  }
}

