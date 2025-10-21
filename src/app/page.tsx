import prisma from "@/lib/db"

const page = async () => {
   const userData = await prisma.user.findMany()
   return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
    {JSON.stringify(userData)}
    </div>
   )
}

export default page