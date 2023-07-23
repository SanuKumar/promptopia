import { connectToDB } from "@utils/database"

export const POST = async (req, res) => {
  const { useId, prompt, tag } = await req.json()


  try {
    await connectToDB()

  } catch (error) {

  }
}

