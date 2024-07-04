import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export const authUserSession = async() => {
    const session = await getServerSession(authOption)
    // if (!session) return redirect("/");
    return session?.user
}